import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "@/lib/auth";
import { auth0ProvidersList } from "@/lib/auth";
import Auth0Forms from "./_components/auth0Forms";
export default async function Page() {
  return (
    <main className="flex justify-center container mx-auto px-4 py-12">
      <Card className="w-[350px]">
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Sign in to {"<AppName>"}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col space-y-1">
          <Auth0Forms />
        </CardContent>
      </Card>
    </main>
  );
}
