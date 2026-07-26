// import {Count} from '@/components/ui/Count'
import { useStore } from '@/store/store'
// import { useShallow } from 'zustand/shallow'
import { PRODUCTS_DATA } from '../lib/mockData'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '../components/ui/button'
import ChangeQtyButton from '../components/ChangeQtyButton'
import Cart from '../components/Cart'
import User from '../components/User'



export default function ProductList() {
  // const store = useStore()
  // const address = useStore((state) => state.address)
  // const {age, fullName} = useStore((state) =>({
  //   age: state.age,
  //   fullName: state.fullName
  // }))

  // const {address} = useStore(
  //   useShallow((state) =>({
  //     age: state.age,
  //     address: state.address
  // })))

  const addProduct = useStore((state) => state.addProduct)
  const cartProducts = useStore((state) => state.products)


  return (
    <main className="space-y-2 dark h-screen bg-background max-w-sm mx-auto mt-2">
      <Card>
        <CardHeader className="flex justify-between">
          <User/>
          <h1 className="text-2xl">Products</h1>
          <Cart/>
        </CardHeader>
      </Card>
      {/* <Count/> */}
      {/* <Cart/> */}
      <div className="space-y-2 p-4">
        {PRODUCTS_DATA.map((product) =>(
          <Card key={product.id} className="text-white">
            <CardHeader> 
              <h1 className="text-xl font-bold">{product.title}</h1>
            </CardHeader>
            <CardContent>${product.price}</CardContent>
            <CardFooter>
              {cartProducts.find((item) => item.id === product.id) ? (
                <ChangeQtyButton productId={product.id}/>
              ) : (
                <Button onClick={() => addProduct(product)}>Add to Cart</Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      
    </main>
  )
}

