import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_dl = () => {
    return (
        <>
            <Helmet>
                <title>Tag dl</title>
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
                        <h2>Para que serve a Tag <code>{'<dl>'}</code> ?</h2>
                        <p>A tag <code>{'<dl>'}</code> é usada para definir uma lista de descrição em HTML, que consiste em pares de termos (<code>{'<dt>'}</code>) e suas descrições (<code>{'<dd>'}</code>).</p>

                        <p>Essa estrutura é comumente usada para representar glossários, dicionários, listas de definições e outros conjuntos de termos e suas respectivas descrições.</p>

                        <h3>Estrutura de um Lista de Descrição:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<dl>
    <dt>Termo 1</dt>
    <dd>Descrição do Termo 1</dd>
    <dt>Termo 2</dt>
    <dd>Descrição do Termo 2</dd>
    <dt>Termo 3</dt>
    <dd>Descrição do Termo 3</dd>
</dl>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag {`<dl>`} contém três pares de termos e suas respectivas descrições.</p>

                        <h3>Exemplo de Uso em um Glossário:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<dl>
    <dt>HTML</dt>
    <dd>Linguagem de Marcação de Hipertexto.</dd>
    <dt>CSS</dt>
    <dd>Folhas de Estilo em Cascata.</dd>
    <dt>JavaScript</dt>
    <dd>Linguagem de Script do Lado do Cliente.</dd>
</dl>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag {`<dl>`} é usada para representar um glossário de termos relacionados à web.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag {`<dl>`} fornece uma maneira semântica de estruturar listas de descrição em HTML, facilitando a compreensão de conjuntos de termos e suas definições.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_dl;
