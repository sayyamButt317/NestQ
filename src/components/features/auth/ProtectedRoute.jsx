
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import { Layout } from '@/components/navigation/layout'
import { useSelector } from 'react-redux'
import { authSelector } from '../../../redux/authSlice'

// for roles, view https://www.youtube.com/watch?v=oUZjO00NkhY
// for login persistence, view https://www.youtube.com/watch?v=27KeYk-5vJw&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=5
// implement refresh token removal in backend

export function ProtectedRoute() {
  // const { auth } = useAuth()
  const {auth} = useSelector(authSelector)
  // console.log("auth", auth)
  const location = useLocation()
  return auth.access_token ? 
    <Layout>
      
        <Outlet />
      
    </Layout> : <Navigate to="/signin" replace state={{ from: location }} />;
}