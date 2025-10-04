import { axiosPrivate } from '@/services/api'
import useAuth from '@/hooks/useAuth'
import useRefreshToken from '@/hooks/useRefreshToken'
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { authSelector, logout } from '../redux/authSlice';
import { clearUser } from '../redux/userSlice';

const useAxiosPrivate = () => {
  // const { auth, logout } = useAuth()
  const { auth } = useSelector(authSelector);

  const refresh = useRefreshToken()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      config => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.access_token}`
        }
        return config
      }, 
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      response => response,
      async error => {
        const prevRequest = error?.config;
        if ((error?.response?.status === 401) && !prevRequest?.sent) {
          prevRequest.sent = true;
          try {
            const newAccessToken = await refresh();
            if (newAccessToken) {
              prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
              return axiosPrivate(prevRequest);
            }
          } catch (refreshError) {
            console.error('Refresh token failed:', refreshError);
            // If refresh token fails, logout and redirect to sign in
            dispatch(logout());
            dispatch(clearUser())
            navigate('/signin', { state: { from: location }, replace: true });
            return Promise.reject(error);
          }
        }
        // If we get a 401 after refresh attempt or any other unauthorized error
        if (error?.response?.status === 401) {
          dispatch(logout());
          dispatch(clearUser())
          navigate('/signin', { state: { from: location }, replace: true });
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.response.eject(responseIntercept);
      axiosPrivate.interceptors.request.eject(requestIntercept);
    }
  }, [auth, refresh, logout, navigate, location])

  return axiosPrivate;
}

export default useAxiosPrivate;
