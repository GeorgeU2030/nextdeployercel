import { connectdb } from "@/libs/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(){
    await connectdb()

    const users= await User.find()
    return NextResponse.json(users)
}

export async function POST(request){
    await connectdb()
    const data = await request.json()
    const user = await User.create(data)
    return NextResponse.json(user)
}