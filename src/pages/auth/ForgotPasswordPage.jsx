import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { requestPasswordReset } from '@/services/auth'
import { Link } from 'react-router-dom'
import NestqLogo from '@/assets/nestq-logo.png'
import { useToast } from "@/hooks/use-toast"

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await requestPasswordReset(email)
      toast({
        title: "Reset Link Sent",
        description: "If an account exists with this email, you will receive a password reset link.",
        duration: 4000,
      })
      setEmail('')
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
            <h1 className='text-2xl font-semibold tracking-tight'>Reset Password</h1>
            <p className='text-sm text-muted-foreground'>
              Enter your email address and we&apos;ll send you a link to reset your password
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                'Send Reset Link'
              )}
            </Button>

            <div className='text-center'>
              <Link
                to='/signin'
                className='text-sm text-muted-foreground hover:text-primary'
              >
                Back to Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 