import type { StateCreator } from "zustand"

interface UserState{
    userName: string
    fullName:   string
    age: number
    address: string
}

type UserActions = {
    setAddress: (address: string) => void
    fetchUser: () => Promise<void>
}

export type UserSlice = UserState & UserActions

//export const useStore = create((set) =>({}))

export const createUserSlice: StateCreator<UserSlice, [['zustand/immer', never]], [], UserSlice> = (set) => ({
    address: 'Test Address',
    age: 0,
    fullName: '',
    userName: '',
    setAddress: (address) => set((state) => {
        state.address = address
    }),
    fetchUser: async () =>{
        await new Promise((resolve) => setTimeout(resolve, 1000))
        set({
            address: '',
            age: 30,
            fullName: 'Sochima Onah',
            userName: 'sochimaonah@text.ai',
        })
    }
    //set merges states
}) 
