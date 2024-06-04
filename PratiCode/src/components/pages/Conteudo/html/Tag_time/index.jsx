import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_time = () => {
    return (
        <>
            <Helmet>
                <title>Tag time</title>
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
                        <h2>Para que serve a Tag <code>{'<time>'}</code> ?</h2>
                        <p>A tag <code>{'<time>'}</code> é usada para representar um valor de data e/ou hora em um documento HTML.</p>

                        <p>Ela fornece uma maneira semântica de marcar informações de data e hora, facilitando a indexação por mecanismos de busca e a acessibilidade para usuários.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>A última atualização foi em <time datetime="2022-05-15">15 de maio de 2022</time>.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<time>'}</code> é usada para marcar a última atualização com a data real e um valor de data para fins de processamento.</p>

                        <h3>Atributos:</h3>
                        <ul>
                            <li><code>datetime</code>: Especifica a data e/ou hora no formato ISO 8601 para máquinas e scripts.</li>
                        </ul>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag <code>{'<time>'}</code> sempre que precisar marcar informações de data ou hora em seu documento HTML de forma semântica.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<time>'}</code> é uma ferramenta útil para marcar informações de data e hora de forma semântica em páginas da web, contribuindo para a acessibilidade e a interoperabilidade.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_time;
