import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_ins = () => {
    return (
        <>
            <Helmet>
                <title>Tag ins</title>
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
                        <h2>Para que serve a Tag <code>{'<ins>'}</code> ?</h2>
                        <p>A tag <code>{'<ins>'}</code> é usada para marcar um texto inserido em um documento, o que geralmente indica adições ou alterações recentes.</p>

                        <p>Quando o texto é inserido em um documento, ele é destacado visualmente pelo navegador para que os usuários possam identificar facilmente as mudanças ou adições feitas.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Este é um texto <ins>inserido</ins> no documento.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a palavra "inserido" está marcada como texto inserido, indicando que ela foi recentemente adicionada ao documento.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag <code>{'<ins>'}</code> para destacar alterações ou adições recentes em um documento, fornecendo aos usuários uma indicação clara das mudanças feitas.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<ins>'}</code> é uma ferramenta útil para indicar mudanças ou adições recentes em um documento, facilitando a compreensão das atualizações feitas.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_ins;
