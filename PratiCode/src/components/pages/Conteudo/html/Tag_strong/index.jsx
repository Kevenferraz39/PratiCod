import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_strong = () => {
    return (
        <>
            <Helmet>
                <title>Tag strong</title>
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
                        <h2>Para que serve a Tag <code>{'<strong>'}</code> ?</h2>
                        <p>A tag <code>{'<strong>'}</code> é usada para enfatizar o texto, indicando que o texto dentro dela deve ser exibido em negrito ou com forte ênfase.</p>

                        <p>Assim como a tag {`<em>`}, o uso da tag {`<strong>`} é mais semântico do que apenas aplicar estilos de negrito usando CSS, pois ela destaca o texto como semanticamente forte, não apenas visualmente.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Este é um texto <strong>importante</strong>.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a palavra "importante" está dentro da tag {`<strong>`}, indicando que ela deve ser exibida em negrito ou com forte ênfase.</p>

                        <h3>Importância Semântica:</h3>
                        <p>O uso da tag {`<strong>`} ajuda a transmitir a intenção semântica do texto enfatizado como forte, tornando-o mais acessível para usuários de tecnologias assistivas e para mecanismos de busca.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag {`<strong>`} para destacar palavras ou frases que merecem forte ênfase no contexto do seu conteúdo, mas evite seu uso excessivo para não comprometer a legibilidade do texto.</p>

                        <h3>Considerações Finais:</h3>
                        <p>Utilize a tag {`<strong>`} de forma adequada para enfatizar o texto de forma semântica e forte, destacando sua importância e significado dentro do conteúdo da página.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_strong;
