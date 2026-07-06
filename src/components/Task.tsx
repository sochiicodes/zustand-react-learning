
import { useStore } from "@/store/store"
import { useShallow } from "zustand/shallow"
import { CardAction } from "./ui/card"

const STATUS = "ONGOING"

export default function Task({title}: {title: string}){
    // const {title} = useStore(
    //     useShallow((state) =>({
    //         title: state.title
    //     }))
    // )
    const statusColor ={
        PLANNED: "bg-green-500",
        ONGOING: "bg-blue-800",
        DONE: "bg-gray-500",
    }
    
    return(
        <section className=" gap-8">
            <div>{title}</div>
            <div className="flex justify-between">
                <div></div>
                <div className={`${statusColor[STATUS]} flex justify-end text-xs p-1 rounded`}>{STATUS}</div>
            </div>
        </section>
    )
}