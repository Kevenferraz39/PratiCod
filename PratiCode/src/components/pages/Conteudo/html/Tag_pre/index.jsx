import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_pre = () => {
    return (
        <>
            <Helmet>
                <title>Tag pre</title>
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
                        <h2>Para que serve a Tag <code>{'<pre>'}</code> ?</h2>
                        <p>A tag <code>{'<pre>'}</code> é usada para definir um bloco de texto pré-formatado em HTML.</p>

                        <p>Textos dentro de um elemento <code>{'<pre>'}</code> são exibidos exatamente como estão escritos no código-fonte HTML, mantendo espaços em branco, quebras de linha e formatação.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<pre>
    Este é um exemplo de texto pré-formatado.
    Ele será exibido exatamente como está escrito aqui,
    mantendo todos os espaços e quebras de linha.
</pre>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<pre>'}</code> é usada para exibir um bloco de texto pré-formatado sem aplicar qualquer estilo adicional.</p>

                        <h3>Elementos Relacionados:</h3>
                        <p>Alguns elementos relacionados à tag <code>{'<pre>'}</code> incluem:</p>
                        <ul>
                            <li><strong>Código Fonte:</strong> A tag <code>{'<pre>'}</code> é frequentemente usada para exibir blocos de código fonte, mantendo a formatação original para facilitar a leitura e compreensão.</li>
                            <li><strong>Exibições de Código:</strong> Em ambientes de desenvolvimento, frameworks ou bibliotecas, exibições de código são frequentemente usadas para realçar a sintaxe e fornecer funcionalidades adicionais, como destaque de sintaxe e linhas numeradas.</li>
                        </ul>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<pre>'}</code> é uma ferramenta útil para exibir texto pré-formatado em uma página da web, mantendo a formatação original do código-fonte. Ela é especialmente útil para exibir blocos de código, saídas de console e outros textos que requerem formatação específica.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_pre;
