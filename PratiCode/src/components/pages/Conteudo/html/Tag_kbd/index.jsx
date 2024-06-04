import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_kbd = () => {
    return (
        <>
            <Helmet>
                <title>Tag kbd</title>
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
                        <h2>Para que serve a Tag <code>{'<kbd>'}</code> ?</h2>
                        <p>A tag <code>{'<kbd>'}</code> é usada para representar a entrada do teclado, como pressionar uma tecla ou uma combinação de teclas em um teclado físico ou virtual.</p>

                        <p>Normalmente, ela é usada em documentos de instruções, tutoriais ou documentação técnica para mostrar comandos do teclado, atalhos ou sequências de teclas que o usuário deve pressionar.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Para salvar o arquivo, pressione <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<kbd>'}</code> é usada para mostrar uma combinação de teclas usada para salvar um arquivo.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag <code>{'<kbd>'}</code> sempre que precisar representar a entrada do teclado em um contexto de instruções, tutoriais ou documentação técnica.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<kbd>'}</code> é uma ferramenta útil para mostrar comandos do teclado em documentos HTML, facilitando para os usuários entenderem as ações que precisam realizar.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_kbd;
