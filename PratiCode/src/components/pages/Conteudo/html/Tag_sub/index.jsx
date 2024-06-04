import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_sub = () => {
    return (
        <>
            <Helmet>
                <title>Tag sub</title>
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
                        <h2>Para que serve a Tag <code>{'<sub>'}</code> ?</h2>
                        <p>A tag <code>{'<sub>'}</code> é usada para representar texto subscrito, que geralmente é menor e posicionado abaixo da linha de texto normal.</p>

                        <p>É comumente usada para indicar índices em fórmulas químicas, notas de rodapé ou expressões matemáticas.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>H<sub>2</sub>O é a fórmula da água.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<sub>'}</code> é usada para indicar o índice na fórmula da água.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag <code>{'<sub>'}</code> para indicar texto subscrito em contextos apropriados, como em fórmulas químicas, notas de rodapé ou expressões matemáticas.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<sub>'}</code> é uma ferramenta útil para melhorar a legibilidade e a compreensão do texto, destacando informações importantes que estão subscritas.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_sub;
