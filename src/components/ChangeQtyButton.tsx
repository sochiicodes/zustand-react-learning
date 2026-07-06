import { useStore } from "@/store/store"
import { useShallow } from "zustand/shallow"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"
import { useEffect } from "react"

type Props = {productId: string}

export default function ChangeQtyButton({productId}: Props) {
    const { decQty, incQty, setTotal} = useStore(
        useShallow((state) =>({
            // getProductById: state.getProductById,
            decQty: state.decQty,
            incQty: state.incQty,
            setTotal: state.setTotal
        }))
    )
    const product = useStore((state) => (
        state.products.find(item => item.id ===productId)
    ))
    // const product = getProductById(productId);

    // console.log("render", product?.qty);
    useEffect(()=>{
        const unSub = useStore.subscribe((state) =>state.products, (products) =>{
            setTotal(products.reduce((acc, item)=> acc + item.price * item.qty, 0))
        },{fireImmediately: true})

        return unSub
    }, [setTotal])

    return (
        <>
            {product && (
                <div className="flex gap-2 items-center">
                    <Button onClick={() => decQty(product.id)} size="icon">
                        <Minus/>
                    </Button>
                    <p>{product.qty}</p>
                    <Button onClick={() => {
                        incQty(product.id),
                        console.log("Increment clicked");
                        }} size="icon">
                        <Plus/>
                    </Button>
                </div>
            )}
        </>
    )
}