import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_u = () => {
    return (
        <>
            <Helmet>
                <title>Tag u</title>
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
                        <h2>Para que serve a Tag <code>{'<u>'}</code> ?</h2>
                        <p>A tag <code>{'<u>'}</code> é usada para representar texto sublinhado, indicando que o texto deve ser visualmente destacado com uma linha abaixo dele.</p>

                        <p>Assim como a tag {`<b>`} para texto em negrito e {`<i>`} para texto em itálico, {`<u>`} é uma tag de formatação de texto.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Este é um texto <u>sublinhado</u>.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<u>'}</code> é usada para sublinhar a palavra "sublinhado".</p>

                        <h3>Uso Adequado:</h3>
                        <p>O uso da tag <code>{'<u>'}</code> deve ser feito com moderação, pois o sublinhado é frequentemente associado a hiperlinks. Em muitos casos, é mais apropriado usar CSS para aplicar estilos de texto sublinhado, mantendo a semântica do HTML.</p>

                        <h3>Considerações Finais:</h3>
                        <p>Embora a tag <code>{'<u>'}</code> ainda seja suportada pelos navegadores, é recomendável considerar cuidadosamente o uso de sublinhado em texto, pois pode confundir os usuários ao misturar com hiperlinks. É preferível usar CSS para controle de estilo.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_u;
