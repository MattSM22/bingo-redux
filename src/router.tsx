import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cartela from "./pages/Cartela";
import Jogo from "./pages/Jogo";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cartela />}/>
                <Route path="/jogo" element={<Jogo />} />
            </Routes>
        </BrowserRouter>
    );
}