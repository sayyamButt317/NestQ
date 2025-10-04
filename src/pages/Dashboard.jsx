import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Shield, MessageSquare, Sparkles } from "lucide-react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"

export function Dashboard() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Welcome Message */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader className="pb-2">
          <h1 className="text-2xl font-bold text-blue-900">Welcome to the Beta!</h1>
        </CardHeader>
        <CardContent>
          <p className="text-blue-800">
            Thank you for being one of our early users. Your feedback is invaluable 
            and will help shape the future of this product.
          </p>
        </CardContent>
      </Card>

      {/* Security Alert */}
      <Alert variant="default">
        <Shield className="h-4 w-4" />
        <AlertTitle>Security First</AlertTitle>
        <AlertDescription>
          All uploads are encrypted in transit and only used for processing. 
          <span className="font-semibold text-red-600"> Please remove sensitive client information (names, addresses, and account numbers) before uploading.</span>
          {" "}We can provide sample investment statements with dummy client information upon request.
        </AlertDescription>
      </Alert>

      {/* Beta Notice */}
      <div className="grid gap-4 md:grid-cols-2">
        <Alert variant="default" className="border-purple-200 bg-purple-50">
          <Sparkles className="h-4 w-4 text-purple-600" />
          <AlertTitle className="text-purple-900">Beta Version</AlertTitle>
          <AlertDescription className="text-purple-800">
            We are constantly improving our model and adding new features based on user feedback.
          </AlertDescription>
        </Alert>

        <Link to="/feedback">
          <Alert variant="default" className="border-green-200 bg-green-50 hover:bg-green-100 transition-colors cursor-pointer">
            <MessageSquare className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-900">Share Your Thoughts</AlertTitle>
            <AlertDescription className="text-green-800">
              Your feedback helps us improve. Please do not hesitate to share your experience 
              and suggestions.
            </AlertDescription>
          </Alert>
        </Link>
      </div>
    </div>
  )
}
