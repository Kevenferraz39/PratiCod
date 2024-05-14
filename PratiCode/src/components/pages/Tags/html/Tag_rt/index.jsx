import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_rt = () => {
    return (
        <>
            <Helmet>
                <title>Tag rt</title>
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
                        <h2>Para que serve a Tag <code>{'<rt>'}</code> ?</h2>
                        <p>A tag <code>{'<rt>'}</code> é usada em conjunto com a tag {`<ruby>`} para fornecer a anotação de texto, que geralmente representa a pronúncia de caracteres em scripts de escrita.</p>

                        <p>Ela é usada para identificar o texto que acompanha um caractere ou palavra dentro de uma tag {`<ruby>`}. Por exemplo, em um texto japonês com furigana, a tag {`<rt>`} conteria a pronúncia em hiragana ou romaji.</p>

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
                        <p>Neste exemplo, a tag {`<rt>`} contém a anotação de texto "han", que é a pronúncia do caractere japonês "漢".</p>

                        <h3>Uso Adequado:</h3>
                        <p>A tag {`<rt>`} deve ser usada de forma apropriada para fornecer a anotação de texto correta e relevante para o caractere ou palavra acompanhado.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A utilização correta da tag {`<rt>`} em conjunto com a tag {`<ruby>`} ajuda a melhorar a compreensão e a acessibilidade de textos que incluem anotações de pronúncia. É importante garantir que as anotações de texto sejam precisas e relevantes para o contexto em que são utilizadas.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_rt;
