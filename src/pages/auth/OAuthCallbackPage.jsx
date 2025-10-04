import { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import { Loader2 } from "lucide-react"
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux/authSlice';

export function OAuthCallbackPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  // const { setAuth } = useAuth()
  const dispatch = useDispatch()

  useEffect(() => {
    const accessToken = searchParams.get('access_token')
    const expiresAt = searchParams.get('expires_at')
    const email = searchParams.get('email')
    const firstName = searchParams.get('first_name')
    const lastName = searchParams.get('last_name')
    const userId = searchParams.get('user_id')

    // Note: The refresh token is set as an HttpOnly cookie by the backend

    if (accessToken && expiresAt) {
      // Store the auth tokens. 
      // User details (email, name) are not in the URL.
      // Ideally, fetch user details from /users/me after setting the token.
      dispatch(setAuth({
        access_token: accessToken, 
        expires_at: parseInt(expiresAt, 10), // Ensure expires_at is a number
        email: email, 
        first_name: firstName, 
        last_name: lastName,
        user_id: userId
      }))
      
      
      // Redirect to the main application page
      navigate('/', { replace: true });
    } else {
      // Handle error or missing tokens - redirect to sign-in
      console.error("OAuth callback missing tokens");
      navigate('/signin', { replace: true });
    }
  }, [searchParams, setAuth, navigate])

  // Display a loading indicator while processing
  return (
    <div className='flex h-svh w-full items-center justify-center'>
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
    </div>
  )
} 