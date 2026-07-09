import type { Store } from "@/types/store"
import type { StateCreator } from "zustand"

export type StateStatus = "PLANNED" | "ONGOING" | "DONE"

export interface Task{
    id: number
    title: string
    state: StateStatus
}
export interface TaskState{
    tasks: Task[]
}


interface TaskActions{
    // addTask: (task: Task) => void
    // removeTask: (taskId: number) => void

}

export type TaskSlice = TaskState & TaskActions

const initialState: TaskState = {
    tasks: [
        {id: 1, title: "Task One", state: "PLANNED"},
        {id: 2, title: "Task Two", state: "PLANNED"},
        {id: 3, title: "Task Three", state: "ONGOING"},
        {id: 4, title: "Task Four", state: "DONE"},
    ]
}

export const createTaskSlice: StateCreator<Store, [['zustand/immer', never]], [], TaskSlice> = () =>({
    ...initialState,

})