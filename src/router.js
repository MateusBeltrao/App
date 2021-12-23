import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Sign } from "./pages/sign";


export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/s" element={<Sign></Sign>}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}