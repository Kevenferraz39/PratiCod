import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from './page.module.css';
import NavBar from '../../../NavBar';
import Footer from '../../../Footer';

const Pagehtml = () => {
    const htmlTags = [
        { tag: '<html>', route: '/html' },
        { tag: '<head>', route: '/head' },
        { tag: '<title>', route: '/title' },
        { tag: '<base>', route: '/base' },
        { tag: '<link>', route: '/link' },
        { tag: '<meta>', route: '/meta' },
        { tag: '<style>', route: '/style' },
        { tag: '<script>', route: '/script' },
        { tag: '<noscript>', route: '/noscript' },
        { tag: '<body>', route: '/body' },
        { tag: '<article>', route: '/article' },
        { tag: '<header>', route: '/header' },
        { tag: '<footer>', route: '/footer' },
        { tag: '<nav>', route: '/nav' },
        { tag: '<section>', route: '/section' },
        { tag: '<aside>', route: '/aside' },
        { tag: '<main>', route: '/main' },
        { tag: '<address>', route: '/address' },
        { tag: '<h1>', route: '/h1' },
        { tag: '<p>', route: '/p' },
        { tag: '<hr>', route: '/hr' },
        { tag: '<pre>', route: '/pre' },
        { tag: '<blockquote>', route: '/blockquote' },
        { tag: '<ol>', route: '/ol' },
        { tag: '<ul>', route: '/ul' },
        { tag: '<li>', route: '/li' },
        { tag: '<dl>', route: '/dl' },
        { tag: '<dt>', route: '/dt' },
        { tag: '<dd>', route: '/dd' },
        { tag: '<figure>', route: '/figure' },
        { tag: '<figcaption>', route: '/figcaption' },
        { tag: '<div>', route: '/div' },
        { tag: '<a>', route: '/a' },
        { tag: '<em>', route: '/em' },
        { tag: '<strong>', route: '/strong' },
        { tag: '<small>', route: '/small' },
        { tag: '<s>', route: '/s' },
        { tag: '<cite>', route: '/cite' },
        { tag: '<q>', route: '/q' },
        { tag: '<dfn>', route: '/dfn' },
        { tag: '<abbr>', route: '/abbr' },
        { tag: '<data>', route: '/data' },
        { tag: '<time>', route: '/time' },
        { tag: '<code>', route: '/code' },
        { tag: '<var>', route: '/var' },
        { tag: '<samp>', route: '/samp' },
        { tag: '<kbd>', route: '/kbd' },
        { tag: '<sub>', route: '/sub' },
        { tag: '<sup>', route: '/sup' },
        { tag: '<i>', route: '/i' },
        { tag: '<b>', route: '/b' },
        { tag: '<u>', route: '/u' },
        { tag: '<mark>', route: '/mark' },
        { tag: '<ruby>', route: '/ruby' },
        { tag: '<rt>', route: '/rt' },
        { tag: '<rp>', route: '/rp' },
        { tag: '<bdi>', route: '/bdi' },
        { tag: '<bdo>', route: '/bdo' },
        { tag: '<span>', route: '/span' },
        { tag: '<br>', route: '/br' },
        { tag: '<wbr>', route: '/wbr' },
        { tag: '<ins>', route: '/ins' },
        { tag: '<del>', route: '/del' },
        { tag: '<img>', route: '/img' },
        { tag: '<iframe>', route: '/iframe' },
        { tag: '<embed>', route: '/embed' },
        { tag: '<object>', route: '/object' },
        { tag: '<param>', route: '/param' },
        { tag: '<video>', route: '/video' },
        { tag: '<audio>', route: '/audio' },
        { tag: '<source>', route: '/source' },
        { tag: '<track>', route: '/track' },
        { tag: '<map>', route: '/map' },
        { tag: '<area>', route: '/area' },
        { tag: '<canvas>', route: '/canvas' },
        { tag: '<svg>', route: '/svg' },
        { tag: '<math>', route: '/math' },
        { tag: '<table>', route: '/table' },
        { tag: '<caption>', route: '/caption' },
        { tag: '<colgroup>', route: '/colgroup' },
        { tag: '<col>', route: '/col' },
        { tag: '<tbody>', route: '/tbody' },
        { tag: '<thead>', route: '/thead' },
        { tag: '<tfoot>', route: '/tfoot' },
        { tag: '<tr>', route: '/tr' },
        { tag: '<td>', route: '/td' },
        { tag: '<th>', route: '/th' },
        { tag: '<form>', route: '/form' },
        { tag: '<label>', route: '/label' },
        { tag: '<input>', route: '/input' },
        { tag: '<button>', route: '/button' },
        { tag: '<select>', route: '/select' },
        { tag: '<datalist>', route: '/datalist' },
        { tag: '<optgroup>', route: '/optgroup' },
        { tag: '<option>', route: '/option' },
        { tag: '<textarea>', route: '/textarea' },
        { tag: '<output>', route: '/output' },
        { tag: '<progress>', route: '/progress' },
        { tag: '<meter>', route: '/meter' },
        { tag: '<fieldset>', route: '/fieldset' },
        { tag: '<legend>', route: '/legend' },
        { tag: '<details>', route: '/details' },
        { tag: '<summary>', route: '/summary' },
        { tag: '<dialog>', route: '/dialog' },
        { tag: '<menu>', route: '/menu' },
        { tag: '<menuitem>', route: '/menuitem' },
        { tag: '<script>', route: '/script' },
        { tag: '<noscript>', route: '/noscript' },
        { tag: '<template>', route: '/template' },
        { tag: '<slot>', route: '/slot' },
        { tag: '<caption>', route: '/caption' }
    ];

    return (
        <>
            <Helmet>
                <title>Page || HTML5</title>
            </Helmet>
            <NavBar />
            <div className={Styles.containerr}>
                <div className={Styles.sideNav}>
                    {htmlTags.map((item, index) => (
                        <Link key={index} to={item.route}>
                            <span>{item.tag}</span>
                        </Link>
                    ))}
                </div>
                <div className={Styles.main}>
                    <div className={Styles.container_text}>
                        <h2>O que são tags HTML?</h2>
                        <p>As tags HTML (Hypertext Markup Language) são elementos fundamentais usados para estruturar e formatar o conteúdo em uma página da web. Cada tag HTML é interpretada pelo navegador e exibida de acordo com suas especificações, permitindo que os desenvolvedores criem páginas da web visualmente atrativas e bem organizadas.</p>

                        <h2>Estrutura de uma tag HTML</h2>
                        <p>Uma tag HTML consiste em várias partes:</p>
                        <ol>
                            <li><strong>Nome da Tag:</strong> É o primeiro elemento da tag e identifica o tipo de elemento HTML. Por exemplo, <code>{'<h1>'}</code>, <code>{'<p>'}</code>, <code>{'<img>'}</code>.</li>
                            <li><strong>Atributos:</strong> São informações adicionais que podem ser fornecidas à tag para modificar ou definir seu comportamento. Os atributos são colocados dentro do par de colchetes da tag. Exemplos comuns incluem <code>src</code>, <code>alt</code>, <code>href</code>, <code>class</code>, <code>id</code>, entre outros.</li>
                            <li><strong>Conteúdo:</strong> Alguns elementos HTML podem conter texto ou outros elementos HTML como seu conteúdo. Por exemplo, o texto dentro de uma tag <code>{'<p>'}</code> é considerado seu conteúdo.</li>
                            <li><strong>Tag de Fechamento:</strong> Alguns elementos HTML requerem uma tag de fechamento para indicar onde o elemento termina. Por exemplo, <code>{'<p>...</p>'}</code>. No entanto, algumas tags, como <code>{'<img>'}</code>, são autossuficientes e não precisam de uma tag de fechamento separada.</li>
                        </ol>

                        <h2>Exemplos detalhados de tags HTML</h2>

                        <h3>Tag {'<h1>'} - Cabeçalho de Nível 1</h3>
                        <p><strong>Propósito:</strong> Usado para definir o cabeçalho principal ou título de uma página.</p>

                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                            <pre>{`<h1>Meu Título Principal</h1>`}</pre>
                            </div>
                        </div>

                        <p><strong>Explicação Detalhada:</strong> O elemento {'<h1>'} é usado para definir um cabeçalho de nível 1, indicando o título principal da página. Geralmente, é o maior e mais importante cabeçalho em uma página da web, e deve ser usado com moderação para manter a hierarquia adequada.</p>

                        <h3>Tag {'<p>'} - Parágrafo</h3>
                        <p><strong>Propósito:</strong> Usado para agrupar blocos de texto em parágrafos distintos.</p>

                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>{`<p>Este é um parágrafo de exemplo. Ele contém algum texto para demonstrar como as tags <code>&lt;p&gt;</code> funcionam em HTML.</p>`}</pre>
                            </div>
                        </div>
                       
                        <p><strong>Explicação Detalhada:</strong> O elemento {'<p>'} é usado para definir um parágrafo de texto em uma página da web. Qualquer texto dentro desta tag é considerado um parágrafo individual, e os navegadores geralmente exibem cada parágrafo em uma linha separada.</p>
                        
                        <h3>Tag {'<img>'} - Imagem</h3>
                        <p><strong>Propósito:</strong> Usado para inserir imagens em uma página da web.</p>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                             <div className={Styles.codigo}>
                                <pre>{`<img src="caminho/para/imagem.jpg" alt="Descrição da Imagem">`}</pre>
                             </div>
                        </div>
                        <p><strong>Explicação Detalhada:</strong> A tag {'<img>'} é usada para incorporar imagens em uma página da web. Ela requer dois atributos principais: <code>src</code>, que especifica o caminho da imagem, e <code>alt</code>, que fornece uma descrição textual da imagem. A descrição é importante para acessibilidade, e também é exibida quando a imagem não pode ser carregada.</p>

                        
                    </div>   
                </div>
                <Footer/>
            </div>
           
           
        </>
    )
}

export default Pagehtml