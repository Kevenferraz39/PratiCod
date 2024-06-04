import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_dfn = () => {
    return (
        <>
            <Helmet>
                <title>Tag dfn</title>
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
                        <h2>Para que serve a Tag <code>{'<dfn>'}</code> ?</h2>
                        <p>A tag <code>{'<dfn>'}</code> é usada para definir o termo de definição, ou seja, para marcar a primeira instância de um termo que será definido ou explicado dentro do conteúdo.</p>

                        <p>O elemento {`<dfn>`} é frequentemente usado em glossários ou documentos técnicos para destacar termos específicos e fornecer uma definição ou explicação para esses termos.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>O termo <dfn>HTML</dfn> significa HyperText Markup Language, que é a linguagem padrão para criação e formatação de páginas da web.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag {`<dfn>`} é usada para destacar o termo "HTML" e indicar que ele será definido ou explicado no texto.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Utilize a tag {`<dfn>`} para marcar termos específicos que serão definidos ou explicados dentro do conteúdo, garantindo que eles sejam identificados claramente para os leitores.</p>

                        <h3>Considerações Finais:</h3>
                        <p>O elemento {`<dfn>`} é uma ferramenta útil para marcar termos de definição em um documento, ajudando a melhorar a compreensão do conteúdo e facilitando a referência a termos específicos.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_dfn;
