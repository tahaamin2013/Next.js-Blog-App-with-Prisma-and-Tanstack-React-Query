import BackButton from '@/components/BackButton'
import ButtonAction from '@/components/ButtonAction'
import { db } from '@/lib/db'
import {FC} from "react"


interface BlogDetailPageProps {
  params: {
    id: string
  }
}


async function getPost(id: string) {
const response = await db.post.findFirst({
  where: {
    id: id
  },
  select: {
    id: true,
    title:true,
    content: true,
    tag: true
  }
})
return response
}

const BlogDetailPage: FC<BlogDetailPageProps> = async ({ params }) => {
  
  const post = await getPost(params.id);

  return (
    <div className='mt-12'>
      <BackButton />
    <div className='mb-8'>
        <h2 className='text-2xl font-bold my-4'>{post?.title}</h2>
        <ButtonAction />
    </div>
    <span className="badge badge-neutral">{post?.tag.name}</span> 
        <p className='text-slate-700 mt-6'>{post?.content}</p>
    </div>
  )
}

export default BlogDetailPage