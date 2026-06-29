import { Button } from "@/components/ui/button"
import { create } from "zustand"


 const useStore = create<{
    count: number
    inc: () =>  void
    dec: () =>  void
  }>((set) =>({
    count: 0,
    inc: () => set((state) => ({ count: state.count + 1})),
    dec: () => set((state) => ({count: state.count - 1})) 
  }))


function App() {
  const store = useStore()

  return (
    <div className="flex">
      <Button onClick={store.inc}> +</Button>
      <p>{store.count}</p>
      <Button onClick={store.dec}> -</Button>
    </div>
  )
}

export default App
