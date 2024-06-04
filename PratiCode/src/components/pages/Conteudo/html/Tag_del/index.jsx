import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_del = () => {
    return (
        <>
            <Helmet>
                <title>Tag del</title>
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
                        <h2>Para que serve a Tag <code>{'<del>'}</code> ?</h2>
                        <p>A tag <code>{'<del>'}</code> é usada para marcar um texto que foi removido ou deletado de um documento, indicando alterações recentes.</p>

                        <p>Quando o texto é deletado de um documento, ele é normalmente exibido com uma linha através do meio para indicar que foi removido, permitindo que os usuários saibam o que foi alterado ou excluído.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Este é um texto <del>deletado</del> do documento.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a palavra "deletado" está marcada como texto deletado, indicando que ela foi recentemente removida do documento.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag <code>{'<del>'}</code> para destacar texto que foi removido ou deletado de um documento, permitindo que os usuários saibam quais alterações foram feitas.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<del>'}</code> é uma ferramenta útil para indicar mudanças ou remoções recentes em um documento, facilitando a compreensão das atualizações feitas.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_del;
