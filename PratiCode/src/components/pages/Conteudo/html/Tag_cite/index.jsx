import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_cite = () => {
    return (
        <>
            <Helmet>
                <title>Tag cite</title>
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
                        <h2>Para que serve a Tag <code>{'<cite>'}</code> ?</h2>
                        <p>A tag <code>{'<cite>'}</code> é usada para representar o título de um trabalho criativo, como um livro, filme, música, obra de arte, artigo, entre outros.</p>

                        <p>Normalmente, o texto dentro da tag {`<cite>`} é exibido em itálico para indicar que se refere ao título de uma obra ou publicação.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Em seu famoso discurso, Martin Luther King Jr. disse: <cite>I have a dream</cite>.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag {`<cite>`} é usada para destacar o título do famoso discurso de Martin Luther King Jr., "I have a dream".</p>

                        <h3>Uso Adequado:</h3>
                        <p>Utilize a tag {`<cite>`} para identificar corretamente títulos de obras criativas, garantindo que sejam formatados de acordo com as convenções de estilo e se destaquem no conteúdo.</p>

                        <h3>Considerações Finais:</h3>
                        <p>O uso adequado da tag {`<cite>`} ajuda a melhorar a acessibilidade e a semântica do conteúdo, fornecendo informações claras sobre as obras citadas ou referenciadas em um documento.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_cite;
