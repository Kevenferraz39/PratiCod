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
import Tag_figcaption from "./components/pages/Tags/html/Tag_figcaption"
import Tag_div from "./components/pages/Tags/html/Tag_div"
import Tag_a from "./components/pages/Tags/html/Tag_a"
import Tag_em from "./components/pages/Tags/html/Tag_em"
import Tag_strong from "./components/pages/Tags/html/Tag_strong"
import Tag_small from "./components/pages/Tags/html/Tag_small"
import Tag_s from "./components/pages/Tags/html/Tag_s"
import Tag_cite from "./components/pages/Tags/html/Tag_cite"
import Tag_q from "./components/pages/Tags/html/Tag_q"
import Tag_dfn from "./components/pages/Tags/html/Tag_dfn"
import Tag_abbr from "./components/pages/Tags/html/Tag_abbr"
import Tag_data from "./components/pages/Tags/html/Tag_data"
import Tag_time from "./components/pages/Tags/html/Tag_time"
import Tag_code from "./components/pages/Tags/html/Tag_code"
import Tag_var from "./components/pages/Tags/html/Tag_var"
import Tag_samp from "./components/pages/Tags/html/Tag_samp"
import Tag_kbd from "./components/pages/Tags/html/Tag_kbd"
import Tag_sub from "./components/pages/Tags/html/Tag_sub"
import Tag_sup from "./components/pages/Tags/html/Tag_sup"
import Tag_i from "./components/pages/Tags/html/Tag_i"
import Tag_b from "./components/pages/Tags/html/Tag_b"
import Tag_u from "./components/pages/Tags/html/Tag_u"
import Tag_mark from "./components/pages/Tags/html/Tag_mark"
import Tag_ruby from "./components/pages/Tags/html/Tag_ruby"
import Tag_rt from "./components/pages/Tags/html/Tag_rt"
import Tag_rp from "./components/pages/Tags/html/Tag_rp"
import Tag_bdi from "./components/pages/Tags/html/Tag_bdi"
import Tag_bdo from "./components/pages/Tags/html/Tag_bdo"
import Tag_span from "./components/pages/Tags/html/Tag_span"
import Tag_br from "./components/pages/Tags/html/Tag_br"
import Tag_wbr from "./components/pages/Tags/html/Tag_wbr"
import Tag_ins from "./components/pages/Tags/html/Tag_ins"
import Tag_del from "./components/pages/Tags/html/Tag_del"


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
                <Route path="/Tag_figcaption" element={<Tag_figcaption />} />
                <Route path="/Tag_div" element={<Tag_div />} />
                <Route path="/Tag_a" element={<Tag_a />} />
                <Route path="/Tag_em" element={<Tag_em />} />
                <Route path="/Tag_strong" element={<Tag_strong />} />
                <Route path="/Tag_small" element={<Tag_small />} />
                <Route path="/Tag_s" element={<Tag_s />} />
                <Route path="/Tag_cite" element={<Tag_cite />} />
                <Route path="/Tag_q" element={<Tag_q />} />
                <Route path="/Tag_dfn" element={<Tag_dfn />} />
                <Route path="/Tag_abbr" element={<Tag_abbr />} />
                <Route path="/Tag_data" element={<Tag_data />} />
                <Route path="/Tag_time" element={<Tag_time />} />
                <Route path="/Tag_code" element={<Tag_code />} />
                <Route path="/Tag_var" element={<Tag_var />} />
                <Route path="/Tag_samp" element={<Tag_samp />} />
                <Route path="/Tag_kbd" element={<Tag_kbd />} />
                <Route path="/Tag_sub" element={<Tag_sub />} />
                <Route path="/Tag_sup" element={<Tag_sup />} />
                <Route path="/Tag_i" element={<Tag_i />} />
                <Route path="/Tag_b" element={<Tag_b />} />
                <Route path="/Tag_u" element={<Tag_u />} />
                <Route path="/Tag_mark" element={<Tag_mark />} />
                <Route path="/Tag_ruby" element={<Tag_ruby />} />
                <Route path="/Tag_rt" element={<Tag_rt />} />
                <Route path="/Tag_rp" element={<Tag_rp />} />
                <Route path="/Tag_bdi" element={<Tag_bdi />} />
                <Route path="/Tag_bdo" element={<Tag_bdo />} />
                <Route path="/Tag_span" element={<Tag_span />} />
                <Route path="/Tag_br" element={<Tag_br />} />
                <Route path="/Tag_wbr" element={<Tag_wbr />} />
                <Route path="/Tag_ins" element={<Tag_ins />} />
                <Route path="/Tag_del" element={<Tag_del />} />
            </Routes>
        </BrowserRouter>
    )
}

export default APPRoutes
