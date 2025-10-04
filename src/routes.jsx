import { SignInPage } from '@/pages/auth/SignInPage'
import { SignUpPage } from '@/pages/auth/SignUpPage'
import { ForgotPasswordPage } from '@/pages/auth/ForgotPasswordPage'
import { ResetPasswordPage } from '@/pages/auth/ResetPasswordPage'
import { OAuthCallbackPage } from '@/pages/auth/OAuthCallbackPage'
import { ProtectedRoute } from '@/components/features/auth/ProtectedRoute'
import { NotFoundError } from '@/pages/other/NotFoundErrorPage'
import { Dashboard } from '@/pages/Dashboard'
import { Feedback } from '@/pages/other/Feedback'
import { Support } from '@/pages/other/Support'
import { TermsOfService } from '@/pages/legal/TermsOfService'
// import { PrivacyPolicy } from '@/pages/legal/PrivacyPolicy'
import { GettingStarted } from '@/pages/GettingStarted'
export const routes = [
  {
    path: '/signin',
    element: SignInPage
  },
  {
    path: '/signup',
    element: SignUpPage
  },
  {
    path: '/forgot-password',
    element: ForgotPasswordPage
  },
  {
    path: '/reset-password',
    element: ResetPasswordPage
  },
  {
    path: '/auth',
    element: OAuthCallbackPage
  },
  {
    path: '/legal/terms-of-service',
    element: TermsOfService
  },
  // {
  //   path: '/legal/privacy-policy',
  //   element: PrivacyPolicy
  // },
  {
    path: '*',
    element: NotFoundError
  },
  {
    path: '/',
    element: ProtectedRoute,
    children: [
      {
        path: '/',
        element: GettingStarted
      },
      {
        path: '/getting-started',
        element: GettingStarted
      },
      {
        path: '/feedback',
        element: Feedback
      },
      {
        path: '/support',
        element: Support
      }
    ],
  },
]
