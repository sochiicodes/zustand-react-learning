import { useStore } from "@/store/store";
import Task from "./Task";
import type { StateStatus } from "@/store/task-slice";
import { Button } from "./ui/button";
import { useShallow } from "zustand/shallow";
import { useState } from "react";

import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,} from "./ui/dialog";




interface ColumnProps{
    state: StateStatus
}

export default function Column({state}: ColumnProps){
    const [text, setText] = useState('')
    const [open, setOpen] = useState(false)
    const [drop, setDrop] = useState(false)

    // const allTasks = useStore((store) => store.tasks)
    // const tasks = allTasks.filter((task) => task.state === state)
    // const addTask = useStore((store) => store.addTask)

    //more than one subscription
    const {tasks, addTask, setDraggedTask, draggedTask, moveTask} = useStore(
        useShallow((store) =>({
                tasks: store.tasks,
                addTask: store.addTask,
                setDraggedTask: store.setDraggedTask,
                draggedTask: store.draggedTask,
                moveTask: store.moveTask
            })
        )
    )
    const allTasks = tasks.filter((task) => task.state === state)
    const taskLength = useStore((store) => store.tasks.filter((task) => task.state === state).length)

    return(
        <section>
            <Card 
                onDragOver={(e) => {
                    e.preventDefault()
                    setDrop(true)
                }}
                onDrop={() => {
                    moveTask(draggedTask, state)
                    setDraggedTask(null)
                    setDrop(false)
                }}
                onDragLeave={(e) => {
                    e.preventDefault()
                    setDrop(false)
                }}
                className={drop? "border border-dashed border-white": "border border-transparent"}
            >
                <CardHeader className="flex flex-col">
                    <CardTitle className="flex w-full justify-between">
                        {state}
                        <CardAction>
                            <Button onClick={() => setOpen(true)}>Add</Button>
                        </CardAction>
                    </CardTitle>
                    <CardDescription>
                        {
                            taskLength === 0
                            ? "No task"
                            : `${taskLength} ${taskLength === 1? "task" : "tasks "} remaining`
                        }
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    {
                        allTasks.map((task) =>(
                            <Task 
                                key={task.id} 
                                title={task.title}  
                                state={task.state} id={task.id} 
                            />
                        ))
                    }
                    <Dialog open={open} onOpenChange={setOpen}>
                        {/* <DialogTrigger>Add Task </DialogTrigger> */}
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Add Task</DialogTitle>
                                <DialogDescription>
                                    Add your task below
                                </DialogDescription>
                            </DialogHeader>
                            <Input placeholder="Enter Task" onChange={(e) => setText(e.target.value)}/>
                            <Button 
                                type="submit"
                                onClick={() =>{
                                    addTask(text, state)
                                    setText('')
                                    setOpen(false)
                                }}
                            >Submit</Button>
                        </DialogContent>
                    </Dialog>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </section>
    )
}