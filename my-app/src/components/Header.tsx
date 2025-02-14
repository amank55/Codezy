import { currentUser } from "@clerk/nextjs/server"
import { ConvexHttpClient } from "convex/browser"
 async function Header() {
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_URL!)
  const user = await currentUser()
  return (
    <div>Header</div>
  )
}

export default Header
