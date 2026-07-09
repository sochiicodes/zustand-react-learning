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
    draggedTask: string
}


interface TaskActions{
    addTask: (title: string, state: StateStatus) => void
    deleteTask: (title: string) => void
    setDraggedTask: (title: string) => void
    moveTask: (title: string, state: StateStatus) => void
}

export type TaskSlice = TaskState & TaskActions

const initialState: TaskState = {
    tasks: [],
    draggedTask: null
}

export const createTaskSlice: StateCreator<Store, [['zustand/immer', never]], [], TaskSlice> = (set) =>({
    ...initialState,
    addTask: (title, state) => set((store) => ({tasks: [...store.tasks, {title, state}]})),
    deleteTask: (title) => set((store) => ({tasks: store.tasks.filter((task) => task.title != title)})),
    setDraggedTask: (title) => set({draggedTask: title}),
    moveTask: (title, state) => set((store) =>({
        tasks: store.tasks.map((task) =>(
            task.title === title? {title, state}: task
        ))
    }))
})