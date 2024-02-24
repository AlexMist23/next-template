import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Auth0Form from "./_components/auth0-forms"
import EmailForm from "./_components/email-form"
export default async function Page() {
  return (
    <main className="flex justify-center container mx-auto px-4 py-12">
      <Card className="w-[350px]">
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Sign in to {"<AppName>"}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col space-y-1">
          <Auth0Form />
          <EmailForm />
        </CardContent>
      </Card>
    </main>
  )
}
