
import { act } from "react";
import {beforeEach, vi} from 'vitest'
const {create: actualCreate} = await vi.importActual<typeof import("zustand")>('zustand')

//a variable to hold reset functions for all stores in the app
const storeResetFns = new Set<() => void>()

//when creating a store, we get its initial state, create a reset function and add it
export const create = (createState) => {
    const store = actualCreate(createState)
    const initialState = store.getState()
    storeResetFns.add(() => store.setState(initialState, true))
    return store
}

//reset all stores after each test run
beforeEach(() =>{
    act(() => {
        storeResetFns.forEach((resetFn) => resetFn())
    })
})


export * from "zustand";