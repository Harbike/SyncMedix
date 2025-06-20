import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

function Newsletter() {

return (
<div className="mt-10 w-full max-w-md border-t border-zinc-700 pt-6">
         <div>
          <h3>Join our newsletter</h3>
          <p className="text-sm mb-3 text-zinc-300">Lorem ipsum, dolor sit amet consectetur adipisicing el!</p>
          </div>
         <Input placeholder="Enter your email" />
         <Button variant="destructive" className="w-full mt-2">
           Subscribe
         </Button>

          <div className="w-full flex items-center justify-center gap-2 text-gray-600 font-arial text-sm md:text-xs mt-0.5 pt-0.5">
        <p className="font-arial font-normal text-sm">
          By subscribing, you agree with our 
        </p>
        <Link
          to="/privacy-policy"
          className="font-helvetica font-bold text-brand-brand text-sm"
        >
          Privacy Policy
        </Link>
      </div>
       </div>
)
}

export default Newsletter