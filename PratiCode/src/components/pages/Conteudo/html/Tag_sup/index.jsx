import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_sup = () => {
    return (
        <>
            <Helmet>
                <title>Tag sup</title>
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
                        <h2>Para que serve a Tag <code>{'<sup>'}</code> ?</h2>
                        <p>A tag <code>{'<sup>'}</code> é usada para representar texto sobrescrito, que geralmente é menor e posicionado acima da linha de texto normal.</p>

                        <p>É comumente usada para indicar expoentes em fórmulas matemáticas, notas de rodapé ou referências de citações.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>O valor de π é 3<sup>14</sup>.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<sup>'}</code> é usada para indicar o expoente na representação do valor de π.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag <code>{'<sup>'}</code> para indicar texto sobrescrito em contextos apropriados, como em fórmulas matemáticas, notas de rodapé ou referências de citações.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<sup>'}</code> é uma ferramenta útil para melhorar a legibilidade e a compreensão do texto, destacando informações importantes que estão sobrescritas.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_sup;
