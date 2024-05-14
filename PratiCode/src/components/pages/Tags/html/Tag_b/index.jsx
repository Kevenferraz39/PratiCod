import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_b = () => {
    return (
        <>
            <Helmet>
                <title>Tag b</title>
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
                        <h2>Para que serve a Tag <code>{'<b>'}</code> ?</h2>
                        <p>A tag <code>{'<b>'}</code> é usada para representar texto em negrito, indicando que o texto deve ser visualmente destacado do texto adjacente.</p>

                        <p>É importante notar que a tag <code>{'<b>'}</code> é usada apenas para apresentação, não para indicar ênfase ou importância semântica. Para isso, deve-se usar a tag <code>{'<strong>'}</code>.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Este é um <b>texto em negrito</b>.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<b>'}</code> é usada para colocar o texto "texto em negrito" em negrito.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag <code>{'<b>'}</code> para representar texto em negrito quando a ênfase visual ou destaque for apropriado, mas não para indicar importância semântica.</p>

                        <h3>Considerações Finais:</h3>
                        <p>Embora a tag <code>{'<b>'}</code> ainda seja amplamente suportada pelos navegadores, é recomendável usar CSS para controlar a apresentação de texto em negrito, especialmente para separar a apresentação do conteúdo.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_b;
