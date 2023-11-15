import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface contextProps {
    params:{
        postId: string
    }
}

export async function DELETE(req: Request, context: contextProps) {
  try {
    const {params} = context;
    await db.post.delete({
        where: {
            id: params.postId
        }
    });
    return new Response(null, { status: 204 })
  } catch (error) {
    return NextResponse.json({message: 'could not delete posts'}, {status: 500})
  }
}