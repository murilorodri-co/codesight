import { Routes, Route } from "react-router-dom";
import Produtos from "./pages/product-stock";
import MateriaPrima from "./pages/material-stock";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/"/>
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/materia-prima" element={<MateriaPrima />} />
    </Routes>
  );
}