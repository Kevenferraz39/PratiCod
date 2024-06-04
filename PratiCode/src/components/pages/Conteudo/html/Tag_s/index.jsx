import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_s = () => {
    return (
        <>
            <Helmet>
                <title>Tag s</title>
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
                        <h2>Para que serve a Tag <code>{'<s>'}</code> ?</h2>
                        <p>A tag <code>{'<s>'}</code> é usada para representar texto que não é mais preciso ou relevante, indicando que ele foi riscado ou "tachado" visualmente.</p>

                        <p>Embora o texto dentro da tag {`<s>`} ainda seja enviado ao navegador e seja visível para os usuários, ele é exibido com uma linha horizontal sobre ele para indicar que não é mais válido ou não é mais aplicável.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p><s>Preço Anterior: R$ 99,99</s> Preço Atual: R$ 79,99</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag {`<s>`} é usada para mostrar o preço anterior com uma linha horizontal sobre ele, indicando que não é mais válido ou relevante.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag {`<s>`} para representar texto que foi riscado ou "tachado", indicando que não é mais preciso ou relevante, mas ainda é mantido no documento por referência ou histórico.</p>

                        <h3>Considerações Finais:</h3>
                        <p>Utilize a tag {`<s>`} com moderação e de forma apropriada, garantindo que ela seja usada para indicar texto obsoleto ou impreciso de maneira clara e compreensível para os usuários.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_s;
