import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_ruby = () => {
    return (
        <>
            <Helmet>
                <title>Tag ruby</title>
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
                        <h2>Para que serve a Tag <code>{'<ruby>'}</code> ?</h2>
                        <p>A tag <code>{'<ruby>'}</code> é usada para adicionar anotações de pronúncia, também conhecidas como rubídio, a um texto.</p>

                        <p>Ela é comumente usada em documentos que apresentam caracteres ou palavras em idiomas diferentes, onde pode ser necessário fornecer uma ajuda de pronúncia para os leitores.</p>

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
                        <p>Neste exemplo, a tag <code>{'<ruby>'}</code> envolve o caractere japonês "漢" e fornece a anotação de pronúncia "han".</p>

                        <h3>Uso Adequado:</h3>
                        <p>É importante usar a tag {`<ruby>`} em conjunto com as tags {`<rp>`}, {`<rt>`} e {`<rb>`} para fornecer uma representação adequada de anotações de pronúncia.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag {`<ruby>`} é útil em contextos onde a pronúncia correta de caracteres ou palavras pode não ser óbvia para todos os leitores. Ela ajuda a melhorar a compreensão e a acessibilidade do texto em idiomas que usam caracteres complexos.</p>

                        <p>No entanto, seu uso deve ser ponderado e limitado a situações em que a anotação de pronúncia é realmente necessária para a compreensão do texto.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_ruby;
