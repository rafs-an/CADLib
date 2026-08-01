import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";
import DashBoard from "../pages/dashboard";
import Projects from "../pages/project";
import NotFound from "../pages/notFound";

function AppRouter(){
    return(
        <BrowserRouter>
           <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
                <Route path="/project" element={<Projects></Projects>}></Route>
                <Route path="/notFound" element={<NotFound></NotFound>}></Route>

           </Routes>       
        </BrowserRouter>
    )
}

export default AppRouter;


