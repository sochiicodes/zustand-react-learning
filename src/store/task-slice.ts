import type { Store } from "@/types/store"
import type { StateCreator } from "zustand"

export type StateStatus = "PLANNED" | "ONGOING" | "DONE"

export interface Task{
    id: string
    title: string
    state: StateStatus
}
export interface TaskState{
    tasks: Task[]
}


interface TaskActions{
    addTask: (title: string, state: StateStatus) => void
    deleteTask: (title: string) => void
}

export type TaskSlice = TaskState & TaskActions

const initialState: TaskState = {
    tasks: [
        {id:  crypto.randomUUID(), title: "Task One", state: "PLANNED"},
        {id:  crypto.randomUUID(), title: "Task Two", state: "PLANNED"},
        {id:  crypto.randomUUID(), title: "Task Three", state: "ONGOING"},
        {id:  crypto.randomUUID(), title: "Task Four", state: "DONE"},
    ]
}

export const createTaskSlice: StateCreator<Store, [['zustand/immer', never]], [], TaskSlice> = (set) =>({
    ...initialState,
    addTask: (title, state) => set((store) => ({tasks: [...store.tasks, {title, state}]})),
    deleteTask: (title) => set((store) => ({tasks: store.tasks.filter((task) => task.title != title)})),
})