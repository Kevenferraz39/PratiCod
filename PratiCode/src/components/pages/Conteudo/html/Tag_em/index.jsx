import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_em = () => {
    return (
        <>
            <Helmet>
                <title>Tag em</title>
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
                        <h2>Para que serve a Tag <code>{'<em>'}</code> ?</h2>
                        <p>A tag <code>{'<em>'}</code> é usada para enfatizar o texto, indicando que o texto dentro dela deve ser exibido em itálico ou com ênfase.</p>

                        <p>O uso da tag {`<em>`} é mais semântico do que apenas aplicar estilos de itálico usando CSS, pois ela destaca o texto como semanticamente enfatizado, não apenas visualmente.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Este é um texto <em>enfatizado</em>.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a palavra "enfatizado" está dentro da tag {`<em>`}, indicando que ela deve ser exibida em itálico ou com ênfase.</p>

                        <h3>Importância Semântica:</h3>
                        <p>O uso da tag {`<em>`} ajuda a transmitir a intenção semântica do texto enfatizado, tornando-o mais acessível para usuários de tecnologias assistivas e para mecanismos de busca.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag {`<em>`} para enfatizar palavras ou frases que merecem destaque no contexto do seu conteúdo, mas evite seu uso excessivo para não comprometer a legibilidade do texto.</p>

                        <h3>Considerações Finais:</h3>
                        <p>Utilize a tag {`<em>`} de forma adequada para enfatizar o texto de forma semântica, destacando sua importância e significado dentro do conteúdo da página.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_em;
