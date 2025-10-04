import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignUpForm } from '@/components/features/auth/SignUpForm'
import { registerUser } from '@/services/auth'
import NestqLogo from '@/assets/nestq-logo.png'
import useAuth from '@/hooks/useAuth'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../redux/authSlice'

export function SignUpPage() {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  // const { setAuth } = useAuth()
  const dispatch = useDispatch()
  const handleSubmit = async (userData) => {
    try {
      const { access_token, expires_at } = await registerUser(userData)
      dispatch(setAuth({ access_token, expires_at }))
      navigate('/', { replace: true })
    } catch (err) {
      setError(err.message)
    }
  }

  return (
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
          {/* Add any additional content or testimonials here */}
        </div>
      </div>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-left'>
            <h1 className='text-2xl font-semibold tracking-tight'>Sign Up</h1>
            <p className='text-sm text-muted-foreground'>
              Create your account to get started
            </p>
          </div>
          <SignUpForm onSubmit={handleSubmit} error={error} />
          <p className='px-8 text-center text-sm text-muted-foreground'>
            By clicking sign up, you agree to our{' '}
            <a
              href='/terms'
              className='underline underline-offset-4 hover:text-primary'
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href='/privacy'
              className='underline underline-offset-4 hover:text-primary'
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
