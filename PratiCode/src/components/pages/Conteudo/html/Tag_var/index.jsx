import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_var = () => {
    return (
        <>
            <Helmet>
                <title>Tag var</title>
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
                        <h2>Para que serve a Tag <code>{'<var>'}</code> ?</h2>
                        <p>A tag <code>{'<var>'}</code> é usada para indicar uma variável em um contexto onde se está falando sobre programação ou matemática.</p>

                        <p>Normalmente, ela é utilizada em textos que explicam ou documentam código, fórmulas matemáticas ou linguagens de marcação, para destacar a representação de uma variável.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Seja <var>x</var> o número de itens em um conjunto, então o número de subconjuntos é 2<sup><var>x</var></sup>.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<var>'}</code> é usada para destacar a variável <var>x</var> em uma fórmula matemática.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag <code>{'<var>'}</code> sempre que precisar destacar uma variável em um contexto de programação, matemática ou qualquer outro contexto que envolva a definição ou utilização de variáveis.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<var>'}</code> é uma ferramenta útil para identificar e destacar variáveis em documentos HTML, facilitando a compreensão de conceitos relacionados a programação, matemática e outros campos onde variáveis são utilizadas.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_var;
