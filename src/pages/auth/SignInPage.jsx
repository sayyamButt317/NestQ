import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInForm } from '@/components/features/auth/SignInForm'
import { SocialAuthButtons } from '@/components/features/auth/SocialAuthButtons'
import { getAccessToken } from '@/services/auth'
import NestqLogo from '@/assets/nestq-logo.png'
import useAuth from '@/hooks/useAuth'
import { useLocation } from 'react-router-dom'
import { API_BASE_URL } from '@/services/api'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../redux/authSlice'

export function SignInPage() {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  // const { setAuth } = useAuth()
  const dispatch = useDispatch()
  
  const handleSubmit = async (email, password) => {
    try {
      const { access_token, expires_at, first_name, last_name } = await getAccessToken(email, password)
      dispatch(setAuth({access_token, expires_at, email, first_name, last_name}))
      navigate(from, { replace: true })
    } catch (err) {
      setError(err.message)
    }
  }

  const handleGoogleSignIn = async () => {
    window.location.href = `${API_BASE_URL}/auth/google`;
  }

  const handleMicrosoftSignIn = async () => {
    window.location.href = `${API_BASE_URL}/auth/microsoft`;
  }

  return (
    <>
      <div className='container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
          <div className='absolute inset-0 bg-zinc-900' />

          <img
            src={NestqLogo}
            className='relative m-auto'
            width={301}
            height={60}
            alt='NestQ'
          />
   
          <div className='relative z-20 mt-auto'>
          </div>
        </div>
        <div className='lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-left'>
              <h1 className='text-2xl font-semibold tracking-tight'>Login</h1>
              <p className='text-sm text-muted-foreground'>
                Enter your email and password below <br />
                to log into your account
              </p>
            </div>
            <SocialAuthButtons 
              onGoogleSignIn={handleGoogleSignIn}
              onMicrosoftSignIn={handleMicrosoftSignIn}
            />
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <SignInForm onSubmit={handleSubmit} error={error} />
            <p className='px-8 text-center text-sm text-muted-foreground'>
              By clicking login, you agree to our{' '}
              <a
                href='/legal/terms-of-service'
                className='underline underline-offset-4 hover:text-primary'
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                href='/legal/privacy-policy'
                className='underline underline-offset-4 hover:text-primary'
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
