// test('sample', () =>{
//     expect(1).toEqual(1)
// })

import { render } from '@testing-library/react'
import {useStore} from './store/store'
import {useEffect} from 'react'
import {vi} from 'vitest'
import { useShallow } from "zustand/react/shallow";

vi.mock("zustand")


function TestComponent({selector, effect}){
    const items = useStore(useShallow(selector))

    useEffect(() => {
        effect(items)
    }, [items])

    return null
}

test('should return default value at the start', () =>{
   const selector = (store) => store.tasks 
   //mocked fn
   const effect = vi.fn()
   render(<TestComponent selector={selector} effect={effect}/>)
   expect(effect).toHaveBeenCalledWith([])
})

test('should add an item to the store and re-run the effect', () =>{
    let createdTask = false
    const selector = (store) => ({
            tasks: store.tasks, 
            addTask: store.addTask,
            deleteTask: store.deleteTask,
        }) 
    //mocked fn
    const effect = vi.fn().mockImplementation((items) =>{
        if(!createdTask){
            items.addTask('a', 'b')
            createdTask = true
        }else if(items.task.length === 1){
            items.deleteTask('a')
        }
    })
    render(<TestComponent selector={selector} effect={effect}/>)
    expect(effect).toHaveBeenCalledTimes(3)
    expect(effect).toHaveBeenCalledWith(
        expect.objectContaining({
            tasks: [{title: 'a', state: 'b'}],
        })
    )
 })