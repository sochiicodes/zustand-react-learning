import { useStore } from "@/store/store"
import { useShallow } from "zustand/shallow"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"

type Props = {productId: string}

export default function ChangeQtyButton({productId}: Props) {
    const { decQty, incQty} = useStore(
        useShallow((state) =>({
            // getProductById: state.getProductById,
            decQty: state.decQty,
            incQty: state.incQty,
        }))
    )
    const product = useStore((state) => (
        state.products.find(item => item.id ===productId)
    ))
    // const product = getProductById(productId);

    // console.log("render", product?.qty);
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