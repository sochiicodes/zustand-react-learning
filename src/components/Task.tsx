
import { useStore } from "@/store/store"
import type { Task } from "@/store/task-slice"
import {Trash2Icon } from "lucide-react"
import { useShallow } from "zustand/shallow"



export default function Task({title, state}: Task){
    // const task = useStore((store) =>
    //     store.tasks.find((task) => task.title === title)
    // )
    const {task,deleteTask } = useStore(
            useShallow((store) =>({
                task: store.tasks.find((task) => task.title === title),
                deleteTask: store.deleteTask
            }))
        )
    const statusColor ={
        PLANNED: "bg-green-500",
        ONGOING: "bg-blue-800",
        DONE: "bg-gray-500",
    }
    
    return(
        <section className="p-3 bg-[#0f0f0f] rounded space-y-4 cursor-move" draggable>
            <div>{task.title}</div>
            <div className="flex justify-between">
                <Trash2Icon 
                    size="16px" 
                    className="cursor-pointer text-gray-500 hover:text-white"
                    onClick={() => deleteTask(task.title)}
                />
                <div className={`${statusColor[state]} text-[10px] p-1 rounded`}>{state}</div>
            </div>
        </section>
    )
}