import { ClipboardEdit, Trash2 } from "lucide-react"
import Link from "next/link"

const ButtonAction = () => {
  return (
    <div>
        <Link href="/edit/1" className="btn mr-2 btn-success"><ClipboardEdit /> Edit</Link>
        <button className="btn btn-error"><Trash2 /> Delete</button>
    </div>
  )
}

export default ButtonAction