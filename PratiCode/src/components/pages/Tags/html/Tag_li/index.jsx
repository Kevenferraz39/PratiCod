import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_li = () => {
    return (
        <>
            <Helmet>
                <title>Tag li</title>
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
                        <h2>Para que serve a Tag <code>{'<li>'}</code> ?</h2>
                        <p>A tag <code>{'<li>'}</code> é usada para representar um item em uma lista, como uma lista não ordenada (<code>{'<ul>'}</code>) ou uma lista ordenada (<code>{'<ol>'}</code>).</p>

                        <p>Cada {`<li>`} contém o conteúdo do item da lista e é renderizado com um marcador correspondente, como um ponto, um círculo ou um número, dependendo do tipo de lista.</p>

                        <h3>Exemplo de Uso em uma Lista Não Ordenada:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag {`<li>`} é usada para representar três itens em uma lista não ordenada.</p>

                        <h3>Exemplo de Uso em uma Lista Ordenada:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<ol>
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
</ol>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag {`<li>`} é usada para representar três itens em uma lista ordenada.</p>

                        <h3>Características Adicionais:</h3>
                        <p>Os elementos {`<li>`} podem conter qualquer conteúdo HTML válido, incluindo texto, imagens, links e elementos de mídia.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag {`<li>`} é essencial para criar listas de itens em HTML, oferecendo uma maneira simples e semântica de estruturar conteúdo em forma de lista.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_li;
