import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from'../htmlTags.json';

const Tag_blockquote = () => {
    return (
        <>
            <Helmet>
                <title>Tag blockquote</title>
            </Helmet>
            <NavBar />
            <div className={Styles.containerr}>
                <div className={Styles.sideNav}>
                    {htmlTags.map((item, index) => (
                        <Link key={index} to={item.route}>
                            <span>{item.tag}</span>
                        </Link>
                    ))}
                </div>
                <div className={Styles.main}>
                    <div className={Styles.container_text}>
                        <h2>Para que serve a Tag <code>{'<blockquote>'}</code> ?</h2>
                        <p>A tag <code>{'<blockquote>'}</code> é usada para destacar um bloco de texto que foi citado de outra fonte. Ela é comumente usada para citações longas que são destacadas do restante do texto.</p>

                        <p>O elemento <code>{'<blockquote>'}</code> pode ser aninhado dentro de outros elementos HTML, como parágrafos (<code>{'<p>'}</code>) ou seções (<code>{'<section>'}</code>), para fornecer contexto adicional à citação.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<blockquote>
    <p>Esta é uma citação longa que foi retirada de outra fonte.</p>
    <footer>Autor da Citação</footer>
</blockquote>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<blockquote>'}</code> é usada para destacar uma citação longa, que é seguida pelo nome do autor no elemento <code>{'<footer>'}</code>.</p>

                        <h3>Atributos Importantes:</h3>
                        <p>O elemento <code>{'<blockquote>'}</code> pode ter atributos como <code>cite</code>, que especifica a URL da fonte da citação, e <code>class</code>, para fins de estilização e formatação.</p>

                        <h3>Impacto na Semântica e Acessibilidade:</h3>
                        <p>O uso apropriado da tag <code>{'<blockquote>'}</code> melhora a semântica da página e a acessibilidade para usuários, permitindo que eles identifiquem facilmente o conteúdo citado.</p>

                        <h3>Considerações Finais:</h3>
                        <p>Embora a tag <code>{'<blockquote>'}</code> seja comumente associada a citações de texto, ela também pode ser usada para destacar outros tipos de conteúdo que são considerados uma unidade distinta de informação, como trechos de código ou poemas.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_blockquote;
