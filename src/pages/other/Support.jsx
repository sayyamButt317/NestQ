import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Calendar } from "lucide-react"

export function Support() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Phone className="mr-2" />
              Phone Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">Call us at: <a href="tel:+16479700631" className="text-blue-600 hover:underline">+1 (647) 970-0631</a></p>
            <CardDescription>Always available to assist you</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="mr-2" />
              Email Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">Email us at: <a href="mailto:abdennour@nestq.ai" className="text-blue-600 hover:underline">abdennour@nestq.ai</a></p>
            <CardDescription>We typically respond within 24 hours</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2" />
              Book a Meeting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Schedule a one-on-one meeting with our support team</p>
            <Button 
              onClick={() => window.open("https://outlook.office.com/bookwithme/user/dbdea0e86ca742038aaaa2e64e769490@nestq.ai/meetingtype/0Q8OkkCx30C4A4ogsoWDaQ2?anonymous&ep=mlink", "_blank")}
              className="w-full"
            >
              Book Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
