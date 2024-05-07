import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_noscript = () => {
    return (
        <>
            <Helmet>
                <title>Tag noscript</title>
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
                        <h2>Para que serve a Tag <code>{'<noscript>'}</code> ?</h2>
                        <p>A tag <code>{'<noscript>'}</code> é utilizada para fornecer conteúdo alternativo para navegadores que não suportam scripts ou têm scripts desabilitados.</p>

                        <p>Quando um navegador encontra a tag {`<noscript>`}, ele exibe o conteúdo contido dentro dela apenas se o navegador não suportar scripts ou se os scripts estiverem desabilitados.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<noscript>
    <p>Seu navegador não suporta JavaScript ou o JavaScript está desabilitado.</p>
</noscript>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, o conteúdo dentro da tag {`<noscript>`} é exibido apenas se o navegador não suportar JavaScript ou se o JavaScript estiver desabilitado.</p>

                        <h3>Quando Usar:</h3>
                        <p>A tag {`<noscript>`} é útil quando você deseja fornecer uma alternativa para usuários que não podem ou optaram por não executar scripts em seus navegadores. Isso garante que esses usuários ainda possam acessar e interagir com o conteúdo do seu site, mesmo sem suporte a JavaScript.</p>

                        <h3>Considerações Finais:</h3>
                        <p>Embora seja uma prática comum fornecer uma versão alternativa do conteúdo usando {`<noscript>`}, é importante lembrar que muitos recursos e funcionalidades modernas da web dependem de JavaScript. Portanto, é essencial garantir que seu site seja acessível e funcional tanto com quanto sem suporte a scripts.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_noscript;
