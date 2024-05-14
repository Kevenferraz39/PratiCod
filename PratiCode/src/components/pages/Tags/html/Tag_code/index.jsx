import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_code = () => {
    return (
        <>
            <Helmet>
                <title>Tag code</title>
            </Helmet>
            <NavBar />
            <div className={Styles.containerr}>
                <div className={Styles.sideNav}>
                    {htmlTags.map((item, index) => (
                        <Link key={index} to={item.route || '*'}>
                            <span>{item.tag}</span>
                        </Link>
                    ))}
                </div>
                <div className={Styles.main}>
                    <div className={Styles.container_text}>
                        <h2>Para que serve a Tag <code>{'<code>'}</code> ?</h2>
                        <p>A tag <code>{'<code>'}</code> é usada para marcar trechos de código em um documento HTML.</p>

                        <p>Ela é frequentemente utilizada para destacar elementos de código, como HTML, CSS, JavaScript, entre outros, para que sejam exibidos de forma distinta do restante do texto.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Para imprimir o conteúdo de uma variável no console, utilize <code>console.log()</code>.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<code>'}</code> é usada para destacar o método <code>console.log()</code> como um trecho de código.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag <code>{'<code>'}</code> sempre que precisar mostrar trechos de código em seu documento HTML, garantindo que eles sejam apresentados de forma clara e distinta.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<code>'}</code> é uma ferramenta útil para destacar trechos de código em páginas da web, facilitando a compreensão e a visualização de elementos de programação.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_code;
