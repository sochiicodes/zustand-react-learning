import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "./ui/button";
import { CircleX, ShoppingCart, Trash2, UserIcon } from "lucide-react";
import { useStore } from "@/store/store";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useShallow } from "zustand/shallow";
import ChangeQtyButton from "./ChangeQtyButton";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useEffect } from "react";

export default function User() {
    const {setAddress,address, fullName, userName, fetchUser} = useStore(
        useShallow((state) =>({
            fullName: state.fullName,
            address: state.address,
            setAddress: state.setAddress,
            userName: state.userName,
            fetchUser: state.fetchUser
        }))
    )   

    useEffect(() =>{
        async function fetchData(){
            await fetchUser()
        }
        fetchData()
    }, [fetchUser])

    return(
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="secondary" size="icon">
                    <UserIcon/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className=" space-y-2 ml-55 shadow-lg">
                <div>
                    <div className="flex flex-col">
                        <p>{fullName}</p>
                        <p className="text-xs text-gray-500">{userName}</p>
                    </div>
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
