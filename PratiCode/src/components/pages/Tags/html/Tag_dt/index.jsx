import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_dt = () => {
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
                        <h2>Para que serve a Tag <code>{'<dt>'}</code> ?</h2>
                        <p>A tag <code>{'<dt>'}</code> é usada dentro de uma lista de descrição (<code>{'<dl>'}</code>) para definir um termo ou uma entrada de glossário.</p>

                        <p>Essa tag geralmente precede uma tag <code>{'<dd>'}</code>, que fornece a descrição associada ao termo definido.</p>

                        <h3>Exemplo de Uso:</h3>
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
                        <p>Neste exemplo, a tag <code>{'<dt>'}</code> define os termos "HTML", "CSS" e "JavaScript" em um glossário.</p>

                        <h3>Uso Semântico:</h3>
                        <p>O uso adequado da tag <code>{'<dt>'}</code> contribui para a semântica da página, ajudando os mecanismos de busca e os leitores de tela a entenderem a estrutura e o conteúdo do documento.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<dt>'}</code> é essencial para criar listas de descrição em HTML, fornecendo uma maneira semântica de definir termos e suas descrições associadas.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_dt;
