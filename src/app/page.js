import { connectdb } from "@/libs/mongodb"
import User from "@/models/User"

async function loadusers (){
  await connectdb()
  const users = await User.find()
  return users
}

async function Homepage () {
  const users = await loadusers()
 
  return (
    <div>
      <h1>users</h1>
    <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}

export default Homepage