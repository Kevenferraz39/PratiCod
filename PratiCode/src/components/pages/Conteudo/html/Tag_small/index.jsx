import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_small = () => {
    return (
        <>
            <Helmet>
                <title>Tag small</title>
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
                        <h2>Para que serve a Tag <code>{'<small>'}</code> ?</h2>
                        <p>A tag <code>{'<small>'}</code> é usada para indicar que o texto dentro dela deve ser exibido em uma fonte menor do que o texto circundante, geralmente para representar textos secundários ou legais, como avisos de direitos autorais, avisos de isenção de responsabilidade, entre outros.</p>

                        <p>Apesar de diminuir o tamanho da fonte, a tag {`<small>`} não deve ser usada para tornar o texto menos importante ou menos visível. Em vez disso, ela é usada para indicar ao navegador que o texto é de menor importância visualmente, mas não semanticamente.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>© 2024 Todos os direitos reservados. <small>Feito com ❤️</small></p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag {`<small>`} é usada para indicar que o texto "Feito com ❤️" é de menor importância visualmente, mas não menos importante semanticamente.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag {`<small>`} para representar textos secundários, legais ou auxiliares que são de menor importância visualmente, mas ainda são relevantes para o conteúdo da página.</p>

                        <h3>Considerações Finais:</h3>
                        <p>Utilize a tag {`<small>`} com moderação e de forma apropriada, garantindo que ela seja usada para representar textos secundários ou auxiliares, sem comprometer a legibilidade ou a acessibilidade do conteúdo.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_small;
