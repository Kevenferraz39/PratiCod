import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from'../htmlTags.json';

const Tag_link = () => {
    return (
        <>
            <Helmet>
                <title>Tag link</title>
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
                        <h2>Para que serve a Tag <code>{'<link>'}</code> ?</h2>
                        <p>A tag <code>{'<link>'}</code> é usada principalmente para vincular recursos externos a uma página HTML. Ela define a relação entre o documento atual e o recurso vinculado, especificando o tipo de recurso e sua localização.</p>

                        <p>Os usos comuns da tag <code>{'<link>'}</code> incluem:</p>
                        <ul>
                            <li>Vincular folhas de estilo CSS ao documento HTML</li>
                            <li>Vincular ícones de favicons à página</li>
                            <li>Vincular fontes externas para uso no documento</li>
                            <li>Vincular arquivos de feeds RSS ou Atom</li>
                            <li>Vincular documentos relacionados, como documentos de licença</li>
                        </ul>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<head>
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="favicon.ico">
    <link rel="alternate" type="application/rss+xml" title="Feed RSS" href="rss.xml">
</head>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<link>'}</code> é usada para vincular uma folha de estilo CSS, um favicon e um feed RSS ao documento HTML.</p>

                        <h3>Tipos de Relacionamento:</h3>
                        <p>A tag <code>{'<link>'}</code> suporta vários tipos de relacionamento (<code>rel</code>), que especificam a relação entre o documento atual e o recurso vinculado. Alguns valores comuns de <code>rel</code> incluem <code>stylesheet</code>, <code>icon</code>, <code>alternate</code>, <code>canonical</code> e <code>prefetch</code>.</p>

                        <h3>Impacto na Performance:</h3>
                        <p>O uso eficiente da tag <code>{'<link>'}</code> pode melhorar a performance de carregamento da página, especialmente ao pré-carregar recursos críticos ou ao otimizar o carregamento de estilos e fontes.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<link>'}</code> é uma ferramenta poderosa para vincular recursos externos a uma página HTML e influenciar seu comportamento e aparência. Ao entender e utilizar corretamente seus atributos e tipos de relacionamento, os desenvolvedores podem melhorar a qualidade e a experiência do usuário de suas páginas.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_link;
