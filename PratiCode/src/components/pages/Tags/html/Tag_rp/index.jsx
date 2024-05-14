import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_rp = () => {
    return (
        <>
            <Helmet>
                <title>Tag rp</title>
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
                        <h2>Para que serve a Tag <code>{'<rp>'}</code> ?</h2>
                        <p>A tag <code>{'<rp>'}</code> é usada em conjunto com a tag {`<ruby>`} para fornecer parênteses de fallback em navegadores que não suportam ruby annotations.</p>

                        <p>Os navegadores que não suportam ruby annotations irão ignorar os elementos {`<ruby>`} e {`<rt>`}, mas exibirão o conteúdo dentro de {`<rp>`}, garantindo que o texto anotado ainda seja compreensível.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<ruby>
    漢 <rp>(</rp><rt>han</rt><rp>)</rp>
</ruby>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag {`<rp>`} fornece os parênteses de fallback que serão exibidos em navegadores que não suportam ruby annotations.</p>

                        <h3>Uso Adequado:</h3>
                        <p>A tag {`<rp>`} deve ser usada em conjunto com as tags {`<ruby>`} e {`<rt>`} para garantir que o texto anotado seja compreensível em navegadores que não suportam ruby annotations.</p>

                        <h3>Considerações Finais:</h3>
                        <p>Embora o uso de ruby annotations seja mais comum em scripts de escrita como o japonês, a tag {`<rp>`} é útil para fornecer uma experiência de usuário consistente em navegadores que não suportam esse recurso.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_rp;
