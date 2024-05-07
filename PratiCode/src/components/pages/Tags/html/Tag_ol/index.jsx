import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_ol = () => {
    return (
        <>
            <Helmet>
                <title>Tag ol</title>
            </Helmet>
            <NavBar />
            <div className={Styles.containerr}>
                <div className={Styles.sideNav}>
                    {htmlTags.map((item, index) => (
                        <Link key={index} to={item.route}>
                            <span>{item.tag}</span>
                        </Link>
                    ))}
                </div>
                <div className={Styles.main}>
                    <div className={Styles.container_text}>
                        <h2>Para que serve a Tag <code>{'<ol>'}</code> ?</h2>
                        <p>A tag <code>{'<ol>'}</code> é usada para criar listas ordenadas, onde os itens da lista são numerados sequencialmente.</p>

                        <p>Os itens de uma lista ordenada são marcados automaticamente com números (ou letras, no caso de listas alfabéticas), indicando a ordem ou sequência dos itens.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<ol>'}</code> é usada para criar uma lista ordenada com três itens.</p>

                        <h3>Elementos de uma Lista Ordenada:</h3>
                        <p>Os elementos principais dentro de uma lista ordenada são:</p>
                        <ul>
                            <li><strong><code>{'<li>'}</code> (Item de Lista):</strong> Cada item da lista é representado pela tag <code>{'<li>'}</code>.</li>
                        </ul>

                        <h3>Tipos de Listas Ordenadas:</h3>
                        <p>A tag <code>{'<ol>'}</code> suporta vários tipos de estilos de numeração, que podem ser especificados usando o atributo <code>type</code>. Alguns dos tipos comuns são:</p>
                        <ul>
                            <li><strong>1 (Padrão):</strong> Listagem numérica padrão (1, 2, 3, ...).</li>
                            <li><strong>A:</strong> Listagem alfabética em letras maiúsculas (A, B, C, ...).</li>
                            <li><strong>a:</strong> Listagem alfabética em letras minúsculas (a, b, c, ...).</li>
                            <li><strong>I:</strong> Listagem romana em algarismos romanos maiúsculos (I, II, III, ...).</li>
                            <li><strong>i:</strong> Listagem romana em algarismos romanos minúsculos (i, ii, iii, ...).</li>
                        </ul>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<ol>'}</code> é uma ferramenta útil para criar listas ordenadas em HTML, fornecendo uma maneira fácil e semântica de organizar informações em uma sequência específica.</p>

                        <p>Ao usar a tag <code>{'<ol>'}</code>, é importante considerar o contexto e a necessidade de ordem nos itens da lista, escolhendo o tipo de listagem apropriado conforme necessário.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_ol;
