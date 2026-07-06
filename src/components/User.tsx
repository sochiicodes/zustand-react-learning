import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "./ui/button";
import { CircleX, ShoppingCart, Trash2, UserIcon } from "lucide-react";
import { useStore } from "@/store/store";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useShallow } from "zustand/shallow";
import ChangeQtyButton from "./ChangeQtyButton";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function User() {
    const {setAddress,address, fullName, userName} = useStore(
        useShallow((state) =>({
            fullName: state.fullName,
            address: state.address,
            setAddress: state.setAddress,
            userName: state.userName
        }))
    )
    return(
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="secondary" size="icon">
                    <UserIcon/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className=" space-y-2 ml-55 shadow-lg">
                <div className="flex gap-2">
                    <p>{fullName}</p>
                    <p className="text-sm">{userName}</p>
                </div>
                <Label htmlFor="address">Your Address: </Label>
                <Input 
                    id="address" 
                    value={address} 
                    onChange={(e) =>setAddress(e.target.value)}
                />
            </PopoverContent>
        </Popover>
    )
}
