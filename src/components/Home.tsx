import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"


function Home()  {
const [role, setRole] = useState("patient")

  return (
    <div className="min-h-screen bg-zinc-200 flex flex-col p-6">
        <p className="bg-darkNavy underline">One Record. One Care</p>
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Access Your Medical Records Anytime, Anywhere
      </h1>

      <Tabs defaultValue="patient" onValueChange={setRole}>
        <TabsList className="mb-6">
          <TabsTrigger value="patient">Patient</TabsTrigger>
          <TabsTrigger value="doctor">Doctor</TabsTrigger>
          <TabsTrigger value="admin">Admin</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-4">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />

        <Button className="w-full">Sign in as {role}</Button>

        <div className="text-center text-sm text-muted-foreground">
          <a href="#" className="underline">Need help?</a>
        </div>
      </div>

      <div className="mt-10 w-full max-w-md border-t border-zinc-700 pt-6">
        <p className="text-sm mb-3 text-zinc-300">🚨 Emergency access</p>
        <Input placeholder="Enter Emergency PIN" />
        <Button variant="destructive" className="w-full mt-2">
          View Critical Info
        </Button>
        <p className="text-xs text-muted-foreground mt-2">
          Access blood group, genotype, allergies, and emergency contacts.
        </p>
      </div>
    </div>
  )

}

export default Home