"use client";
import axios from "axios";
import { ClipboardEdit, Trash2 } from "lucide-react"
import Link from "next/link"
import { useMutation } from "@tanstack/react-query";
import {FC} from "react"
import { useRouter } from "next/navigation";
interface ButtonActionProps {
  id: string
}
const ButtonAction: FC<ButtonActionProps> = ({id}) => {
  const router = useRouter();

  const  { mutate: deletePost, isLoading } = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/posts/${id}`)
    },

    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      router.push('/');
      router.refresh()
    }

  });

  return (
    <div>
        <Link href={`/edit/${id}`} className="btn mr-2 btn-success"><ClipboardEdit /> Edit</Link>
        <button className="btn btn-error" onClick={() => deletePost()}>
          {isLoading && <span className="loading loading-spinner"></span>}
          {isLoading ?(
          'loading...' 
          ) : (
            <>
            <Trash2 />
        Delete
            </>
          )}
        </button>
    </div>
  )
}

export default ButtonAction