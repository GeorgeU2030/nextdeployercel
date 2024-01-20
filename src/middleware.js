import { NextResponse } from "next/server";
export default function middleware(req) {
   if(req.nextUrl.pathname =="/api/users"){
      if(req.method == 'POST' || req.method == 'GET'){
       return new NextResponse("Cannot access this endpoint with " + req.method, { status: 401})
    }
   return NextResponse.next();
   }
}