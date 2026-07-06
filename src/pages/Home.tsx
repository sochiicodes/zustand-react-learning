import { Link } from "react-router-dom";

export default function Home(){ 
    return(
    <main className="flex items-center  h-screen"> 
        <div className="flex flex-col w-full justify-start items-center gap-5">
            <Link to='/product-list' className="text-xl font-bold">Product List Page</Link>
            <Link to='/kanban-board' className="text-lg font-bold">KanBan Board</Link> 
        </div>
    </main>   
    )
}
