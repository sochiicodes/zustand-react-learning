import { useStore } from "@/store/store";
import Task from "./Task";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import type { StateStatus } from "@/store/task-slice";





interface ColumnProps{
    state: StateStatus
}

export default function Column({state}: ColumnProps){
    const allTasks = useStore((store) => store.tasks)
    const tasks = allTasks.filter((task) => task.state === state)

    // const tasks = useStore(
    //     useShallow((store) =>
    //         store.tasks.filter((task) => task.state === state)
    //     )
    // )
    

    return(
        <section>
            <Card>
                <CardHeader className="flex flex-col">
                    <CardTitle className="flex w-full justify-between">
                        {state}
                        
                    </CardTitle>
                    <CardDescription>
                        3 tasks remaining
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    {
                        tasks.map((task) =>(
                            <Task key={task.title} title={task.title}  state={task.state} id={task.id} />
                        ))
                    }
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </section>
    )
}