import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home'
import Tags from './components/pages/Tags'
import Sobre from './components/pages/Sobre'
import Exercicios from './components/pages/Exercicios'
import Login from './components/pages/Login'
import Cadastro from './components/pages/Cadastro'
import Error404 from './components/pages/Error404'
import Error404Alternate from './components/pages/Error404Alternate' // Importe a segunda página 404
import Pagehtml from "./components/pages/Tags/html";
import Pagegit from "./components/pages/Tags/git";
import Pagejs from "./components/pages/Tags/js";
import Pagejson from "./components/pages/Tags/json";
import Pagenode from "./components/pages/Tags/node";
import Pagephp from "./components/pages/Tags/php";
import Pagereact from "./components/pages/Tags/react";
import Pageruby from "./components/pages/Tags/ruby";
import Pagesql from "./components/pages/Tags/sql";
import Pagecss from "./components/pages/Tags/css";

const APPRoutes = () => {
    const random404 = Math.random() < 0.5 ? <Error404 /> : <Error404Alternate />

    return (
        <BrowserRouter>
             <Routes>
                <Route path="/Home" element={<Home />}/>
                <Route path="/Tags" element={<Tags/>}/>
                <Route path="/Sobre" element={<Sobre/>}/>
                <Route path="/Exercicios" element={<Exercicios/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="*" element={random404}/> 
                <Route path="/Pagehtml" element={<Pagehtml/>}/>
                <Route path="/Pagecss" element={<Pagecss/>}/>
                <Route path="/Pagegit" element={<Pagegit/>}/>
                <Route path="/Pagejson" element={<Pagejson/>}/>
                <Route path="/Pagenode" element={<Pagenode/>}/>
                <Route path="/Pagejs" element={<Pagejs/>}/>
                <Route path="/Pagephp" element={<Pagephp/>}/>
                <Route path="/Pagesql" element={<Pagesql/>}/>
                <Route path="/Pagereact" element={<Pagereact/>}/>
                <Route path="/Pageruby" element={<Pageruby/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default APPRoutes
