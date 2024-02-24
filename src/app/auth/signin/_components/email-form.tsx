import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signIn } from "@/lib/auth"
import { EnvelopeClosedIcon } from "@radix-ui/react-icons"
export default function EmailForm() {
  return (
    <form
      action={async (formData: FormData) => {
        "use server"
        const email = formData.get("email")
        await signIn("email", { email: email })
      }}
    >
      <Input type="email" id="email" name="email" placeholder="Email" />
      <Button variant={"secondary"} className="w-[100%]">
        <EnvelopeClosedIcon className="mr-auto" />{" "}
        <p className="absolute">Sign with Email</p>
      </Button>
    </form>
  )
}
