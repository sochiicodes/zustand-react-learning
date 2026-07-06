import {Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import KanBanBoard from "./pages/KanbanBoard";
import Home from "./pages/Home";




export default function App() {


  return (
    <main>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product-list" element={<ProductList/>}/>
        <Route path="/kanban-board" element={<KanBanBoard/>}/>
      </Routes>
      
    </main>
  )
}

