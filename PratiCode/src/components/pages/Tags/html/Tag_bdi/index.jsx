import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_bdi = () => {
    return (
        <>
            <Helmet>
                <title>Tag bdi</title>
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
                        <h2>Para que serve a Tag <code>{'<bdi>'}</code> ?</h2>
                        <p>A tag <code>{'<bdi>'}</code> (Bidirectional Isolation) é usada para isolar parte do texto que pode ser formatada em uma direção diferente da direção do texto circundante em scripts de escrita bidirecionais, como o árabe ou o hebraico.</p>

                        <p>Isso é útil quando há uma mistura de texto de diferentes direções, garantindo que a direção do texto isolado seja preservada.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Este é um texto em árabe: <bdi>مرحبا بالعالم</bdi></p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, o texto em árabe dentro da tag {`<bdi>`} é isolado para garantir que a direção do texto seja preservada, mesmo quando incorporado em um contexto de texto de direção oposta.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag {`<bdi>`} para isolar partes do texto que podem ter direções de escrita diferentes das do texto circundante em scripts de escrita bidirecionais.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag {`<bdi>`} é uma ferramenta valiosa para garantir a exibição correta de texto em scripts de escrita bidirecionais, preservando a direção do texto em contextos diversos.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_bdi;
