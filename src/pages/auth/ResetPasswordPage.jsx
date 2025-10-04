import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { resetPassword } from '@/services/auth'
import { PasswordInput } from "@/components/features/auth/password-input"
import NestqLogo from '@/assets/nestq-logo.png'
import { useToast } from "@/hooks/use-toast"

export function ResetPasswordPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const token = searchParams.get('token')

  useEffect(() => {
    if (!token) {
      navigate('/signin')
    }
  }, [token, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Passwords do not match",
        duration: 3000,
      })
      return
    }

    setIsLoading(true)
    try {
      await resetPassword(token, password)
      toast({
        title: "Password Reset Successful",
        description: "Your password has been reset. You will be redirected to sign in.",
        duration: 3000,
      })
      setTimeout(() => {
        navigate('/signin')
      }, 3000)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
        duration: 3000,
      })
    }
    setIsLoading(false)
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
      </div>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-left'>
            <h1 className='text-2xl font-semibold tracking-tight'>Set New Password</h1>
            <p className='text-sm text-muted-foreground'>
              Please enter your new password below
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='password'>New Password</Label>
              <PasswordInput
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='confirmPassword'>Confirm New Password</Label>
              <PasswordInput
                id='confirmPassword'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <Button className='w-full' type='submit' disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Please wait
                </>
              ) : (
                'Reset Password'
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
} 