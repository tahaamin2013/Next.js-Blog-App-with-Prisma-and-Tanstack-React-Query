"use client";

import { Tag } from "@prisma/client";
import Link from "next/link"
import { FC } from "react";

interface PostCardProps {
  post: {
    id: string,
    title: string,
    content: string
    tag: Tag;
  }
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const { id, title, content, tag} = post;

  return (
    <div className="card w-full bg-base-100 shadow-xl border">
  <div className="card-body">
  <span className="badge ml-40 badge-neutral">{tag.name}</span> 
    <h2 className="card-title">{title}</h2>
    <p>{content.slice(0,50)}....</p>
    <div className="card-actions justify-end">
      
      <Link href={`/blog/${id}`} className="btn btn-black">Read more..</Link>
    </div>
  </div>
</div>
  )
}

export default PostCard