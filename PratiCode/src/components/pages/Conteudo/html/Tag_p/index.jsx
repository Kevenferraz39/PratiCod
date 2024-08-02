import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_p = () => {
    return (
        <>
            <Helmet>
                <title>Tag p</title>
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
                        <h2>Para que serve a Tag <code>{'<p>'}</code> ?</h2>
                        <p>A tag <code>{'<p>'}</code> é usada para representar um parágrafo de texto em HTML.</p>

                        <p>Parágrafos são blocos de texto que são separados uns dos outros por espaços verticais, ajudando a estruturar e organizar o conteúdo textual de uma página da web.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Este é um parágrafo de texto.</p>
<p>Este é outro parágrafo.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<p>'}</code> é usada para criar dois parágrafos de texto distintos.</p>

                        <h3>Elementos Relacionados:</h3>
                        <p>Alguns elementos relacionados ao parágrafo incluem:</p>
                        <ul>
                            <li><strong>Texto:</strong> Qualquer conteúdo textual dentro de um parágrafo é exibido em linha reta, separado de outros parágrafos por espaços verticais.</li>
                            <li><strong>Estilização:</strong> Parágrafos podem ser estilizados usando CSS para alterar fontes, cores, margens, espaçamentos e outros estilos visuais.</li>
                        </ul>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<p>'}</code> é uma ferramenta essencial para estruturar o conteúdo textual em uma página da web, permitindo a criação de parágrafos que são facilmente legíveis e visualmente organizados.</p>

                        <p>É importante usar a tag <code>{'<p>'}</code> de forma adequada para garantir a clareza e a acessibilidade do conteúdo, evitando o uso indevido para propósitos não relacionados a parágrafos de texto.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_p;
