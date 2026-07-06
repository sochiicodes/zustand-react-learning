import Column from "@/components/Column";

export default function KanBanBoard(){
    return(
        <main className="grid grid-cols-3 p-10 gap-8">
            <Column title="PLANNED"/>
            <Column title="ONGOING"/>
            <Column title="DONE"/>
            
        </main>
    )
}