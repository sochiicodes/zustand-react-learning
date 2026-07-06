import type { StateCreator } from "zustand"

interface TaskState{
    title: string
}

interface TaskActions{

}

export type TaskSlice = TaskState & TaskActions

const initialState:  TaskState = {
    title: "Task"
}

export const createTaskSlice: StateCreator<TaskSlice, [['zustand/immer', never]], [], TaskSlice> = (set) =>({
    initialState,
    title: "Title"
})