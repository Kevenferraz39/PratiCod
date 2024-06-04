import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_i = () => {
    return (
        <>
            <Helmet>
                <title>Tag i</title>
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
                        <h2>Para que serve a Tag <code>{'<i>'}</code> ?</h2>
                        <p>A tag <code>{'<i>'}</code> é usada para representar texto em itálico, indicando que o texto tem ênfase ou destaque semântico.</p>

                        <p>É importante notar que a tag <code>{'<i>'}</code> é usada para apresentação, não para indicar que o texto é um termo técnico ou em uma língua estrangeira, para isso deve-se usar a tag <code>{'<em>'}</code> (ênfase).</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Este é um <i>texto em itálico</i>.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<i>'}</code> é usada para colocar o texto "texto em itálico" em itálico.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag <code>{'<i>'}</code> para representar texto em itálico quando a ênfase ou destaque semântico for apropriado.</p>

                        <h3>Considerações Finais:</h3>
                        <p>Embora a tag <code>{'<i>'}</code> ainda seja amplamente suportada pelos navegadores, é recomendável usar CSS para controlar a apresentação de texto em itálico, especialmente para separar a apresentação do conteúdo.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_i;
