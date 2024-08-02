import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_abbr = () => {
    return (
        <>
            <Helmet>
                <title>Tag || HTML5</title>
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
                        <h2>Para que serve a Tag <code>{'<abbr>'}</code> ?</h2>
                        <p>A tag <code>{'<abbr>'}</code> é usada para definir uma abreviação ou acrônimo em um texto.</p>

                        <p>Quando você usa a tag {`<abbr>`}, você fornece uma explicação para a abreviação ou acrônimo, o que pode ajudar os leitores a entenderem o significado completo do termo.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>O <abbr title="World Wide Web">WWW</abbr> revolucionou a maneira como acessamos informações.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag {`<abbr>`} é usada para definir a abreviação "WWW" como "World Wide Web", fornecendo uma explicação para o termo.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Utilize a tag {`<abbr>`} sempre que você usar uma abreviação ou acrônimo em seu texto para garantir que os leitores entendam completamente o significado do termo.</p>

                        <h3>Considerações Finais:</h3>
                        <p>O uso da tag {`<abbr>`} pode ajudar a tornar seu texto mais claro e compreensível para os leitores, especialmente quando você está lidando com termos técnicos ou específicos.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_abbr;
