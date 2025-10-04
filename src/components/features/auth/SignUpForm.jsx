import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/features/auth/password-input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

function validatePassword(password) {
  const errors = []
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter")
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter")
  }
  if (!/\d/.test(password)) {
    errors.push("Password must contain at least one number")
  }
  if (!/[!@#$%^&*(),.?:{}|<>]/.test(password)) {
    errors.push("Password must contain at least one special character")
  }
  return errors
}

export function SignUpForm({ onSubmit, error }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    title: '',
    firmName: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const [passwordErrors, setPasswordErrors] = useState([])
  const [hasInteractedWithPassword, setHasInteractedWithPassword] = useState(false)

  useEffect(() => {
    setPasswordErrors(validatePassword(formData.password))
  }, [formData.password])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => {
      const newData = { ...prevData, [name]: value }
      if (name === 'password' || name === 'confirmPassword') {
        setPasswordsMatch(newData.password === newData.confirmPassword)
        if (name === 'password') {
          setHasInteractedWithPassword(true)
        }
      }
      return newData
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!passwordsMatch || passwordErrors.length > 0) {
      return
    }
    setIsLoading(true)
    await onSubmit(formData)
    setIsLoading(false)
  }

  const isFormValid = passwordsMatch && passwordErrors.length === 0 && formData.password && formData.confirmPassword

  return (
    <div className="w-full max-w-[350px] space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-left w-full block">Work Email</Label>
          <Input 
            id="email" 
            name="email"
            type="email" 
            placeholder="m@example.com" 
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-left">Password</Label>
          <PasswordInput 
            id="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
            className={cn(
              hasInteractedWithPassword && passwordErrors.length > 0 && "border-red-500"
            )}
          />
          {!hasInteractedWithPassword ? (
            <p className="text-sm text-gray-500">
              Password must include uppercase, lowercase, number, and special character.
            </p>
          ) : passwordErrors.length > 0 && (
            <ul className="text-sm text-red-500 list-disc pl-5">
              {passwordErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-left">Confirm Password</Label>
          <PasswordInput 
            id="confirmPassword" 
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            autoComplete="new-password"
            className={cn(
              !passwordsMatch && formData.confirmPassword && "border-red-500"
            )}
          />
          {!passwordsMatch && formData.confirmPassword && (
            <p className="text-sm text-red-500">Passwords do not match</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-left w-full block">First Name</Label>
          <Input 
            id="firstName" 
            name="firstName"
            autoComplete="given-name"
            type="text" 
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-left w-full block">Last Name</Label>
          <Input 
            id="lastName" 
            name="lastName"
            autoComplete="family-name"
            type="text" 
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <Button 
          className="w-full" 
          type="submit" 
          disabled={isLoading || !isFormValid}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            'Sign Up'
          )}
        </Button>
      </form>
      <div className="text-center text-sm">
        Already have an account?{' '}
        <Link to="/signin" className="font-medium text-primary hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  )
}
