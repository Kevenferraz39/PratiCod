import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_bdo = () => {
    return (
        <>
            <Helmet>
                <title>Tag bdo</title>
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
                        <h2>Para que serve a Tag <code>{'<bdo>'}</code> ?</h2>
                        <p>A tag <code>{'<bdo>'}</code> (Bi-Directional Override) é usada para substituir a direção do texto, forçando-o a ser exibido em uma direção específica, independentemente da direção do texto circundante.</p>

                        <p>Isso é útil em casos onde a direção do texto não é detectada automaticamente pelo navegador, ou quando é necessário forçar um texto a ser exibido em uma direção específica, como da direita para a esquerda.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Este é um texto em árabe: <bdo dir="rtl">مرحبا بالعالم</bdo></p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag {`<bdo>`} é usada para forçar o texto árabe a ser exibido da direita para a esquerda, independentemente da direção do texto circundante.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag {`<bdo>`} quando for necessário substituir a direção do texto para garantir que seja exibido corretamente, especialmente em scripts de escrita bidirecionais.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag {`<bdo>`} é uma ferramenta útil para controlar a direção do texto, garantindo uma exibição adequada em diferentes contextos e scripts de escrita.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_bdo;
