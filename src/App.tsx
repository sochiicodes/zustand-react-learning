import {Count} from '@/components/ui/Count'
import { useStore } from '@/store/store'
import { useShallow } from 'zustand/shallow'



export default function App() {
  const store = useStore()
  // const {age, fullName} = useStore((state) =>({
  //   age: state.age,
  //   fullName: state.fullName
  // }))

  // const {address} = useStore(
  //   useShallow((state) =>({
  //     address: state.address
  // })))

  const address = useStore((state) => state.address)

  return (
    <div className="flex flex-col gap-4 p-10">
      <Count/>
      <p className="flex flex-col gap-4">
        {address}
        {/* {age}
        {fullName} */}
      </p>
    </div>
  )
}

