import {axiosPublic} from '@/services/api'
import useAuth from '@/hooks/useAuth'
import { useDispatch } from 'react-redux'
import { setAuth } from "../redux/authSlice"

const useRefreshToken = () => {
// For persistent login: https://www.youtube.com/watch?v=27KeYk-5vJw&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=5
    // const { setAuth } = useAuth()
    const dispatch = useDispatch()

  const refresh = async () => {
    try {
      const response = await axiosPublic.post('/auth/refresh', {
        withCredentials: true
      })

      const { access_token, expires_at } = response.data
      dispatch(setAuth({ access_token, expires_at }))
      return access_token
    } catch (error) {
      console.error('Error refreshing token:', error)
      return null
    }
  }

  return refresh
}

export default useRefreshToken
