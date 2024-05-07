import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from'../htmlTags.json';

const Tag_head = () => {
    return (
        <>
            <Helmet>
                <title>Tag head</title>
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
                        <h2>Para que serve a Tag <code>{'<head>'}</code> ?</h2>
                        <p>A tag <code>{'<head>'}</code> é uma seção fundamental de qualquer documento HTML. Ela contém informações sobre o documento, como metadados, links para folhas de estilo, scripts e outras informações importantes que não são exibidas diretamente na página da web.</p>

                        <p>Em uma analogia, se considerarmos o documento HTML como uma casa, a tag <code>{'<head>'}</code> é como a caixa de ferramentas do construtor. Ela contém todas as ferramentas necessárias para construir e aprimorar a casa, mas não é visível para quem está de fora.</p>

                        <p>Além disso, a tag <code>{'<head>'}</code> desempenha um papel crucial no que diz respeito à otimização para mecanismos de busca (SEO). Aqui é onde podemos definir metadados como descrição, palavras-chave e outras informações que ajudam os mecanismos de busca a entender e indexar melhor o conteúdo da página.</p>

                        <h3>1. Definindo Metadados:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<head>
    <meta charset="UTF-8">
    <meta name="description" content="Descrição da Página">
    <meta name="keywords" content="palavra-chave1, palavra-chave2, palavra-chave3">
    <title>Minha Página</title>
</head>`}
                                </pre>
                            </div>
                        </div>
                        <h3>2. Incluindo Links Externos:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<head>
    <link rel="stylesheet" href="estilos.css">
    <script src="script.js"></script>
</head>`}
                                </pre>
                            </div>
                        </div>
                        <h3>3. Definindo o Título da Página:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<head>
    <title>Minha Página</title>
</head>`}
                                </pre>
                            </div>
                        </div>
                        <p>Esses exemplos mostram como a tag HTML <code>{'<head>'}</code> é utilizada para definir informações importantes sobre o documento, como metadados, links externos e o título da página.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_head;
