import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_samp = () => {
    return (
        <>
            <Helmet>
                <title>Tag samp</title>
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
                        <h2>Para que serve a Tag <code>{'<samp>'}</code> ?</h2>
                        <p>A tag <code>{'<samp>'}</code> é usada para representar a saída de um programa de computador ou uma amostra de saída de um programa, como uma linha de comando ou um script.</p>

                        <p>Normalmente, ela é usada em documentos de instruções ou tutoriais para mostrar exemplos de saída de programas, ajudando os leitores a entenderem como o código ou comando é executado e qual é o resultado esperado.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Para compilar o programa, utilize o comando <samp>gcc -o meu_programa meu_programa.c</samp>.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<samp>'}</code> é usada para mostrar um comando de compilação de programa em um ambiente Unix-like.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag <code>{'<samp>'}</code> sempre que precisar representar a saída de um programa de computador ou uma amostra de saída em um contexto de instruções, tutoriais ou documentação técnica.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<samp>'}</code> é uma ferramenta útil para mostrar exemplos de saída de programas em documentos HTML, tornando mais fácil para os leitores entenderem como o código é executado e qual é o resultado esperado.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_samp;
