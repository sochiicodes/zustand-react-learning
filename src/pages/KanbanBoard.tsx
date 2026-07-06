import Column from "@/components/Column";

export default function KanBanBoard(){
    return(
        <main className="grid grid-cols-4 p-10 gap-8">
            <Column/>
            <Column/>
            <Column/>
            <Column/>
        </main>
    )
}