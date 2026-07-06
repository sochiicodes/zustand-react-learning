import Task from "./Task";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface CardProps{
    title: string

}
export default function Column({title}: CardProps){
    return(
        <section>
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>
                        Card Description
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {/* <p>Card Content</p> */}
                    <Task title="Task"/>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </section>
    )
}