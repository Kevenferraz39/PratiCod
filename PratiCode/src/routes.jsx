import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home'
import Tags from './components/pages/Tags'
import Sobre from './components/pages/Sobre'
import Exercicios from './components/pages/Exercicios'
import Login from './components/pages/Login'
import Cadastro from './components/pages/Cadastro'
import Error404 from './components/pages/Error404'
const APPRoutes = () => {

    return (
        <BrowserRouter>
             <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Tags" element={<Tags/>}/>
                <Route path="/Sobre" element={<Sobre/>}/>
                <Route path="/Exercicios" element={<Exercicios/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/Error404" element={<Error404/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default APPRoutes