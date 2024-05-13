import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_q = () => {
    return (
        <>
            <Helmet>
                <title>Tag q</title>
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
                        <h2>Para que serve a Tag <code>{'<q>'}</code> ?</h2>
                        <p>A tag <code>{'<q>'}</code> é usada para representar uma citação em linha, ou seja, um trecho curto de texto citado dentro de um parágrafo ou de outro elemento de texto.</p>

                        <p>Por padrão, o texto dentro da tag {`<q>`} é envolvido por aspas duplas automáticas para indicar que se trata de uma citação.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>O poeta William Wordsworth escreveu: <q> A poesia é a emoção recordada em tranquilidade.</q></p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag {`<q>`} é usada para destacar uma citação de William Wordsworth sobre poesia.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Utilize a tag {`<q>`} para envolver citações curtas dentro do texto de forma apropriada, garantindo que sejam formatadas corretamente e identificadas como citações.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag {`<q>`} é uma ferramenta útil para marcar citações em linha dentro do texto, ajudando a diferenciá-las do conteúdo circundante e a fornecer uma formatação consistente para citações.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_q;
