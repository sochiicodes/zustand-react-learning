import { useStore } from "@/store/store";
import Task from "./Task";
import type { StateStatus } from "@/store/task-slice";
import { Button } from "./ui/button";
import { useShallow } from "zustand/shallow";
import { useState } from "react";

import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import {Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger} from "./ui/drawer"
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";




interface ColumnProps{
    state: StateStatus
}

export default function Column({state}: ColumnProps){
    const [text, setText] = useState('')
    const [open, setOpen] = useState(false)

    // const allTasks = useStore((store) => store.tasks)
    // const tasks = allTasks.filter((task) => task.state === state)
    // const addTask = useStore((store) => store.addTask)

    //more than one subscription
    const {tasks, addTask} = useStore(
        useShallow((store) =>({
                tasks: store.tasks,
                addTask: store.addTask
            })
        )
    )

    const allTasks = tasks.filter((task) => task.state === state)
    

    return(
        <section>
            <Card>
                <CardHeader className="flex flex-col">
                    <CardTitle className="flex w-full justify-between">
                        {state}
                        <CardAction>
                            <Button onClick={() => setOpen(true)}>Add</Button>
                        </CardAction>
                    </CardTitle>
                    <CardDescription>
                        3 tasks remaining
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    {
                        allTasks.map((task) =>(
                            <Task 
                                key={task.title} 
                                title={task.title}  
                                state={task.state} id={task.id} 
                            />
                        ))
                    }
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger>Add Task </DialogTrigger>
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