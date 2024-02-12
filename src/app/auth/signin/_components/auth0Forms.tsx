import { Button } from "@/components/ui/button"
import { signIn } from "@/lib/auth"
import { auth0ProvidersList } from "@/lib/auth"
export default function Auth0Forms() {
  return (
    <>
      {auth0ProvidersList.map((provider) => (
        <form
          key={provider.signString}
          action={async () => {
            "use server"
            await signIn(provider.signString)
          }}
        >
          <Button variant={"secondary"} className="w-[100%]">
            {provider.text}
          </Button>
        </form>
      ))}
    </>
  )
}
