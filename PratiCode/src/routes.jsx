import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/pages/Home'
import Tags from './components/pages/Tags'
import Sobre from './components/pages/Sobre'
import Exercicios from './components/pages/Exercicios'
import Login from './components/pages/Login'
import Cadastro from './components/pages/Cadastro'
import Error404 from './components/pages/Error404'
import Error404Alternate from './components/pages/Error404Alternate' // Importe a segunda página 404
import Pagehtml from "./components/pages/Tags/html"
import Pagegit from "./components/pages/Tags/git"
import Pagejs from "./components/pages/Tags/js"
import Pagejson from "./components/pages/Tags/json"
import Pagenode from "./components/pages/Tags/node"
import Pagephp from "./components/pages/Tags/php"
import Pagereact from "./components/pages/Tags/react"
import Pageruby from "./components/pages/Tags/ruby"
import Pagesql from "./components/pages/Tags/sql"
import Pagecss from "./components/pages/Tags/css"
import Tag_html from "./components/pages/Tags/html/Tag_html"
import Tag_headd from "./components/pages/Tags/html/Tag_headd"
import Tag_title from "./components/pages/Tags/html/Tag_title"
import Tag_base from "./components/pages/Tags/html/Tag_base"
import Tag_link from "./components/pages/Tags/html/Tag_link"
import Tag_meta from "./components/pages/Tags/html/Tag_meta"
import Tag_style from "./components/pages/Tags/html/Tag_style"
import Tag_script from "./components/pages/Tags/html/Tag_script"
import Tag_noscript from "./components/pages/Tags/html/Tag_noscript"
import Tag_body from "./components/pages/Tags/html/Tag_body"
import Tag_article from "./components/pages/Tags/html/Tag_article"
import Tag_header from "./components/pages/Tags/html/Tag_header"
import Tag_footer from "./components/pages/Tags/html/Tag_footer"
import Tag_nav from "./components/pages/Tags/html/Tag_nav"
import Tag_section from "./components/pages/Tags/html/Tag_section"
import Tag_aside from "./components/pages/Tags/html/Tag_aside"
import Tag_main from "./components/pages/Tags/html/Tag_main"
import Tag_address from "./components/pages/Tags/html/Tag_address"
import Tag_h1 from "./components/pages/Tags/html/Tag_h1"
import Tag_p from "./components/pages/Tags/html/Tag_p"
import Tag_hr from "./components/pages/Tags/html/Tag_hr"
import Tag_pre from "./components/pages/Tags/html/Tag_pre"
import Tag_blockquote from "./components/pages/Tags/html/Tag_blockquote"
import Tag_ol from "./components/pages/Tags/html/Tag_ol"
import Tag_ul from "./components/pages/Tags/html/Tag_ul"
import Tag_li from "./components/pages/Tags/html/Tag_li"
import Tag_dl from "./components/pages/Tags/html/Tag_dl"
import Tag_dt from "./components/pages/Tags/html/Tag_dt"
import Tag_dd from "./components/pages/Tags/html/Tag_dd"
import Tag_figure from "./components/pages/Tags/html/Tag_figure"
const APPRoutes = () => {
    const random404 = Math.random() < 0.5 ? <Error404 /> : <Error404Alternate />

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Tags" element={<Tags />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/Exercicios" element={<Exercicios />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/" element={<Login />} />
                <Route path="*" element={random404} />
                <Route path="/Pagehtml" element={<Pagehtml />} />
                <Route path="/Pagecss" element={<Pagecss />} />
                <Route path="/Pagegit" element={<Pagegit />} />
                <Route path="/Pagejson" element={<Pagejson />} />
                <Route path="/Pagenode" element={<Pagenode />} />
                <Route path="/Pagejs" element={<Pagejs />} />
                <Route path="/Pagephp" element={<Pagephp />} />
                <Route path="/Pagesql" element={<Pagesql />} />
                <Route path="/Pagereact" element={<Pagereact />} />
                <Route path="/Pageruby" element={<Pageruby />} />
                <Route path="/Tag_html" element={<Tag_html />} />
                <Route path="/Tag_headd" element={<Tag_headd />} />
                <Route path="/Tag_title" element={<Tag_title />} />
                <Route path="/Tag_base" element={<Tag_base />} />
                <Route path="/Tag_link" element={<Tag_link />} />
                <Route path="/Tag_meta" element={<Tag_meta />} />
                <Route path="/Tag_style" element={<Tag_style />} />
                <Route path="/Tag_script" element={<Tag_script />} />
                <Route path="/Tag_noscript" element={<Tag_noscript />} />
                <Route path="/Tag_body" element={<Tag_body />} />
                <Route path="/Tag_article" element={<Tag_article />} />
                <Route path="/Tag_header" element={<Tag_header />} />
                <Route path="/Tag_footer" element={<Tag_footer />} />
                <Route path="/Tag_nav" element={<Tag_nav />} />
                <Route path="/Tag_section" element={<Tag_section />} />
                <Route path="/Tag_aside" element={<Tag_aside />} />
                <Route path="/Tag_main" element={<Tag_main />} />
                <Route path="/Tag_address" element={<Tag_address />} />
                <Route path="/Tag_h1" element={<Tag_h1 />} />
                <Route path="/Tag_p" element={<Tag_p />} />
                <Route path="/Tag_hr" element={<Tag_hr />} />
                <Route path="/Tag_pre" element={<Tag_pre />} />
                <Route path="/Tag_blockquote" element={<Tag_blockquote />} />
                <Route path="/Tag_ol" element={<Tag_ol />} />
                <Route path="/Tag_ul" element={<Tag_ul />} />
                <Route path="/Tag_li" element={<Tag_li />} />
                <Route path="/Tag_dl" element={<Tag_dl />} />
                <Route path="/Tag_dt" element={<Tag_dt />} />
                <Route path="/Tag_dd" element={<Tag_dd />} />
                <Route path="/Tag_figure" element={<Tag_figure />} />
            </Routes>
        </BrowserRouter>
    )
}

export default APPRoutes
