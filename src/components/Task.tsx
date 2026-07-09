
import { useStore } from "@/store/store"
import type { Task } from "@/store/task-slice"



export default function Task({title, state}: Task){
    // const {task } = useStore(
    //     useShallow((store) =>({
    //         task: store.tasks.find((task) => task.title === title),
    //     }))
    // )
    const task = useStore((store) =>
        store.tasks.find((task) => task.title === title)
    )

    const statusColor ={
        PLANNED: "bg-green-500",
        ONGOING: "bg-blue-800",
        DONE: "bg-gray-500",
    }
    
    return(
        <section className="p-2 bg-[#0f0f0f] rounded">
            <div>{task.title}</div>
            <div className="flex justify-end">
                <div className={`${statusColor[state]} text-[10px] p-1 rounded`}>{state}</div>
            </div>
        </section>
    )
}