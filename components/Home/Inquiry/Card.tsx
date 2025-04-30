import { ReactNode } from "react"

type Props = {
    icon: ReactNode
    title: string
}


const Card = ({icon, title}: Props) => {
  return (
    <div>
        {icon}
        <h1 className="text-gray-700 font-mono font-bold mt-5">{title}</h1>
        <p className="text-sm mt-2">Making your experince easier and faster</p>
    </div>
  )
}

export default Card
