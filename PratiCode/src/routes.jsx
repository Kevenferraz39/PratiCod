import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/pages/Home'
import Conteudo from './components/pages/Conteudo'
import Sobre from './components/pages/Sobre'
import Exercicios from './components/pages/Exercicios'
import Login from './components/pages/Login'
import Cadastro from './components/pages/Cadastro'
import Error404 from './components/pages/Error404'
import Error404Alternate from './components/pages/Error404Alternate' // Importe a segunda página 404
//imports das paginas de conteudos
import Pagehtml from "./components/pages/Conteudo/html"
import Pagegit from "./components/pages/Conteudo/git"
import Pagejs from "./components/pages/Conteudo/js"
import Pagejson from "./components/pages/Conteudo/json"
import Pagenode from "./components/pages/Conteudo/node"
import Pagephp from "./components/pages/Conteudo/php"
import Pagereact from "./components/pages/Conteudo/react"
import Pageruby from "./components/pages/Conteudo/ruby"
import Pagesql from "./components/pages/Conteudo/sql"
import Pagecss from "./components/pages/Conteudo/css"
//imports das paginas de Conteudo html
import Tag_html from "./components/pages/Conteudo/html/Tag_html"
import Tag_headd from "./components/pages/Conteudo/html/Tag_headd"
import Tag_title from "./components/pages/Conteudo/html/Tag_title"
import Tag_base from "./components/pages/Conteudo/html/Tag_base"
import Tag_link from "./components/pages/Conteudo/html/Tag_link"
import Tag_meta from "./components/pages/Conteudo/html/Tag_meta"
import Tag_style from "./components/pages/Conteudo/html/Tag_style"
import Tag_script from "./components/pages/Conteudo/html/Tag_script"
import Tag_noscript from "./components/pages/Conteudo/html/Tag_noscript"
import Tag_body from "./components/pages/Conteudo/html/Tag_body"
import Tag_article from "./components/pages/Conteudo/html/Tag_article"
import Tag_header from "./components/pages/Conteudo/html/Tag_header"
import Tag_footer from "./components/pages/Conteudo/html/Tag_footer"
import Tag_nav from "./components/pages/Conteudo/html/Tag_nav"
import Tag_section from "./components/pages/Conteudo/html/Tag_section"
import Tag_aside from "./components/pages/Conteudo/html/Tag_aside"
import Tag_main from "./components/pages/Conteudo/html/Tag_main"
import Tag_address from "./components/pages/Conteudo/html/Tag_address"
import Tag_h1 from "./components/pages/Conteudo/html/Tag_h1"
import Tag_p from "./components/pages/Conteudo/html/Tag_p"
import Tag_hr from "./components/pages/Conteudo/html/Tag_hr"
import Tag_pre from "./components/pages/Conteudo/html/Tag_pre"
import Tag_blockquote from "./components/pages/Conteudo/html/Tag_blockquote"
import Tag_ol from "./components/pages/Conteudo/html/Tag_ol"
import Tag_ul from "./components/pages/Conteudo/html/Tag_ul"
import Tag_li from "./components/pages/Conteudo/html/Tag_li"
import Tag_dl from "./components/pages/Conteudo/html/Tag_dl"
import Tag_dt from "./components/pages/Conteudo/html/Tag_dt"
import Tag_dd from "./components/pages/Conteudo/html/Tag_dd"
import Tag_figure from "./components/pages/Conteudo/html/Tag_figure"
import Tag_figcaption from "./components/pages/Conteudo/html/Tag_figcaption"
import Tag_div from "./components/pages/Conteudo/html/Tag_div"
import Tag_a from "./components/pages/Conteudo/html/Tag_a"
import Tag_em from "./components/pages/Conteudo/html/Tag_em"
import Tag_strong from "./components/pages/Conteudo/html/Tag_strong"
import Tag_small from "./components/pages/Conteudo/html/Tag_small"
import Tag_s from "./components/pages/Conteudo/html/Tag_s"
import Tag_cite from "./components/pages/Conteudo/html/Tag_cite"
import Tag_q from "./components/pages/Conteudo/html/Tag_q"
import Tag_dfn from "./components/pages/Conteudo/html/Tag_dfn"
import Tag_abbr from "./components/pages/Conteudo/html/Tag_abbr"
import Tag_data from "./components/pages/Conteudo/html/Tag_data"
import Tag_time from "./components/pages/Conteudo/html/Tag_time"
import Tag_code from "./components/pages/Conteudo/html/Tag_code"
import Tag_var from "./components/pages/Conteudo/html/Tag_var"
import Tag_samp from "./components/pages/Conteudo/html/Tag_samp"
import Tag_kbd from "./components/pages/Conteudo/html/Tag_kbd"
import Tag_sub from "./components/pages/Conteudo/html/Tag_sub"
import Tag_sup from "./components/pages/Conteudo/html/Tag_sup"
import Tag_i from "./components/pages/Conteudo/html/Tag_i"
import Tag_b from "./components/pages/Conteudo/html/Tag_b"
import Tag_u from "./components/pages/Conteudo/html/Tag_u"
import Tag_mark from "./components/pages/Conteudo/html/Tag_mark"
import Tag_ruby from "./components/pages/Conteudo/html/Tag_ruby"
import Tag_rt from "./components/pages/Conteudo/html/Tag_rt"
import Tag_rp from "./components/pages/Conteudo/html/Tag_rp"
import Tag_bdi from "./components/pages/Conteudo/html/Tag_bdi"
import Tag_bdo from "./components/pages/Conteudo/html/Tag_bdo"
import Tag_span from "./components/pages/Conteudo/html/Tag_span"
import Tag_br from "./components/pages/Conteudo/html/Tag_br"
import Tag_wbr from "./components/pages/Conteudo/html/Tag_wbr"
import Tag_ins from "./components/pages/Conteudo/html/Tag_ins"
import Tag_del from "./components/pages/Conteudo/html/Tag_del"
// imports das paginas DCL
import PageDCL from "./components/pages/Conteudo/sql/DCL/index"
import Cmnd_grant from "./components/pages/Conteudo/sql/DCL/Grant"
import Cmnd_revoke from "./components/pages/Conteudo/sql/DCL/Revoke"
//imports das paginas DQL
import PageDQL from "./components/pages/Conteudo/sql/DQL/index"
import Cmnd_select from "./components/pages/Conteudo/sql/DQL/Select"
import Cmnd_where from "./components/pages/Conteudo/sql/DQL/Where"
import Cmnd_groupby from "./components/pages/Conteudo/sql/DQL/GropBy"
import Cmnd_having from "./components/pages/Conteudo/sql/DQL/Having"
import Cmnd_orderby from "./components/pages/Conteudo/sql/DQL/OrderBy"
import Cmnd_join from "./components/pages/Conteudo/sql/DQL/join"
import Cmnd_innerjoin from "./components/pages/Conteudo/sql/DQL/InnerJoin"
import Cmnd_leftjoin from "./components/pages/Conteudo/sql/DQL/LeftJoin"
import Cmnd_rightjoin from "./components/pages/Conteudo/sql/DQL/RightJoin"
import Cmnd_fulljoin from "./components/pages/Conteudo/sql/DQL/FullJoin"
import Cmnd_crossjoin from "./components/pages/Conteudo/sql/DQL/CrossJoin"
import Cmnd_union from "./components/pages/Conteudo/sql/DQL/Union"
import Cmnd_unionall from "./components/pages/Conteudo/sql/DQL/UnionAll"
import Cmnd_distinct from "./components/pages/Conteudo/sql/DQL/Distinct"
import Cmnd_limit from "./components/pages/Conteudo/sql/DQL/Limit"
import Cmnd_offset from "./components/pages/Conteudo/sql/DQL/Offset"
import Cmnd_avg from "./components/pages/Conteudo/sql/DQL/Avg"
import Cmnd_case from "./components/pages/Conteudo/sql/DQL/Case"
import Cmnd_coalesce from "./components/pages/Conteudo/sql/DQL/Coalesce"
import Cmnd_count from "./components/pages/Conteudo/sql/DQL/Count"
import Cmnd_like from "./components/pages/Conteudo/sql/DQL/Like"
import Cmnd_max from "./components/pages/Conteudo/sql/DQL/Max"
import Cmnd_min from "./components/pages/Conteudo/sql/DQL/Min"
import Cmnd_sum from "./components/pages/Conteudo/sql/DQL/Sum"
//imports das paginas DDL
import PageDDL from "./components/pages/Conteudo/sql/DDL/index"
import Cmnd_alterTable from "./components/pages/Conteudo/sql/DDL/Alter_table"
import Cmnd_createDatabase from "./components/pages/Conteudo/sql/DDL/Create_database"
import Cmnd_createIndex from "./components/pages/Conteudo/sql/DDL/Create_index"
import Cmnd_createTable from "./components/pages/Conteudo/sql/DDL/Create_table"
import Cmnd_dropDatabase from "./components/pages/Conteudo/sql/DDL/Drop_database"
import Cmnd_dropTable from "./components/pages/Conteudo/sql/DDL/Drop_table"
//imports das paginas DML
import PageDML from "./components/pages/Conteudo/sql/DML/index"
import Cmnd_delete from "./components/pages/Conteudo/sql/DML/Delete"
import Cmnd_insert from "./components/pages/Conteudo/sql/DML/Insert"
import Cmnd_merge from "./components/pages/Conteudo/sql/DML/Merge"
import Cmnd_update from "./components/pages/Conteudo/sql/DML/Update"
//imports paginas TCL
import PageTCL from "./components/pages/Conteudo/sql/TCL/index"
import Cmnd_commit from "./components/pages/Conteudo/sql/TCL/Commit"
import Cmnd_rollback from "./components/pages/Conteudo/sql/TCL/Rollback"
import Cmnd_savepoint from "./components/pages/Conteudo/sql/TCL/Savepoint"
import Cmnd_setTransition from "./components/pages/Conteudo/sql/TCL/SetTransaction"
const APPRoutes = () => {
    const random404 = Math.random() < 0.5 ? <Error404 /> : <Error404Alternate />

    return (
        <BrowserRouter>
            <Routes>
                {/*routes from nav*/}
                <Route path="/Home" element={<Home />} />
                <Route path="/Conteudo" element={<Conteudo />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/Exercicios" element={<Exercicios />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/" element={<Login />} />
                <Route path="*" element={random404} />
                {/*rootes from page conteudo */}
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
                 {/*rootes from page Conteudo */}
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
                  {/*rootes from page DQL */}
                <Route path="/PageDQL" element={<PageDQL/>}/>
                <Route path="/cmd_select" element={<Cmnd_select/>}/>
                <Route path="/cmd_where" element={<Cmnd_where />} />
                <Route path="/cmd_groupby" element={<Cmnd_groupby />} />
                <Route path="/cmd_having" element={<Cmnd_having />} />
                <Route path="/cmd_orderby" element={<Cmnd_orderby />} />
                <Route path="/cmd_join" element={<Cmnd_join />} />
                <Route path="/cmd_innerjoin" element={<Cmnd_innerjoin />} />
                <Route path="/cmd_leftjoin" element={<Cmnd_leftjoin />} />
                <Route path="/cmd_rightjoin" element={<Cmnd_rightjoin />} />
                <Route path="/cmd_fulljoin" element={<Cmnd_fulljoin />} />
                <Route path="/cmd_crossjoin" element={<Cmnd_crossjoin />} />
                <Route path="/cmd_union" element={<Cmnd_union />} />
                <Route path="/cmd_unionall" element={<Cmnd_unionall />} />
                <Route path="/cmd_distinct" element={<Cmnd_distinct />} />
                <Route path="/cmd_limit" element={<Cmnd_limit />} />
                <Route path="/cmd_offset" element={<Cmnd_offset />} />
                <Route path="/cmd_avg" element={<Cmnd_avg />} />
                <Route path="/cmd_case" element={<Cmnd_case />} />
                <Route path="/cmd_coalesce" element={<Cmnd_coalesce />} />
                <Route path="/cmd_count" element={<Cmnd_count />} />
                <Route path="/cmd_like" element={<Cmnd_like />} />
                <Route path="/cmd_max" element={<Cmnd_max />} />
                <Route path="/cmd_min" element={<Cmnd_min />} />
                <Route path="/cmd_sum" element={<Cmnd_sum />} />
                 {/*rootes from page DCL */}
                <Route path="/pageDCL" element={<PageDCL/>}/>
                <Route path="/cmd_grant" element={<Cmnd_grant />} />
                <Route path="/cmd_revoke" element={<Cmnd_revoke />}/>
                 {/*rootes from page DDL */}
                 <Route path="/pageDDL" element={<PageDDL/>}/>
                 <Route path="/cmd_alterTable" element={<Cmnd_alterTable />} />
                 <Route path="/cmd_createDatabase" element={<Cmnd_createDatabase />}/>
                 <Route path="/cmd_index" element={<Cmnd_createIndex />}/>
                 <Route path="/cmd_table" element={<Cmnd_createTable />}/>
                 <Route path="/cmd_dropDatabase" element={<Cmnd_dropDatabase />}/>
                 <Route path="/cmd_dropTable" element={<Cmnd_dropTable />}/>
                 {/*rootes from page DML */}
                 <Route path="/pageDML" element={<PageDML/>}/>
                 <Route path="/cmd_delete" element={<Cmnd_delete />} />
                 <Route path="/cmd_insert" element={<Cmnd_insert />}/>
                 <Route path="/cmd_merge" element={<Cmnd_merge />}/>
                 <Route path="/cmd_update" element={<Cmnd_update />}/>
                 {/*rootes from page TCL */}
                 <Route path="/pageTCL" element={<PageTCL/>}/>
                 <Route path="/cmd_commit" element={<Cmnd_commit />} />
                 <Route path="/cmd_rollback" element={<Cmnd_rollback />}/>
                 <Route path="/cmd_savepoint" element={<Cmnd_savepoint />}/>
                 <Route path="/cmd_setTransition" element={<Cmnd_setTransition />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default APPRoutes
