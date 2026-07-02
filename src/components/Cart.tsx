import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "./ui/button";
import { CircleX, ShoppingCart, Trash2 } from "lucide-react";
import { useStore } from "@/store/store";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useShallow } from "zustand/shallow";
import ChangeQtyButton from "./ChangeQtyButton";

export default function Cart() {
    const {reset, products,removeProduct, total} = useStore(
        useShallow((state) =>({
            reset: state.reset,
            products: state.products,
            removeProduct: state.removeProduct,
            total: state.total
        }))
    )
    return(
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="secondary" size="icon">
                    <ShoppingCart/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className=" space-y-2 mr-55">
                <div className="flex gap-2 text-lg items-center">
                    <h1>Cart:</h1> 
                    <Button onClick={reset} variant="destructive" size="icon">
                        <CircleX/>
                    </Button>
                </div>
                <div className="space-y-5 max-h-[72vh] overflow-y-scroll shadow-md pt-5">
                    {products.map((product) =>(
                        <Card key={product.id } className="flex flex-col  gap-2">
                            <CardHeader className="flex flex-row items-center justify-between gap-2 ">
                                <CardTitle>{product.title}</CardTitle>
                                <Button onClick={() => removeProduct(product.id)}>
                                    <Trash2/>
                                </Button>
                            </CardHeader>
                            <CardContent>${product.price}</CardContent>
                            <CardFooter className="flex align-end">
                                <ChangeQtyButton productId={product.id}/>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <p>Total: ${total}</p>
            </PopoverContent>
        </Popover>
    )
}
