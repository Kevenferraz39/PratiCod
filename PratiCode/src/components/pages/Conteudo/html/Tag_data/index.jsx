import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_data = () => {
    return (
        <>
            <Helmet>
                <title>Tag data</title>
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
                        <h2>Para que serve a Tag <code>{'<data>'}</code> ?</h2>
                        <p>A tag <code>{'<data>'}</code> é usada para representar um valor de data e/ou hora em um documento HTML.</p>

                        <p>Ela é útil para marcar informações de data/hora que podem ser usadas por máquinas ou scripts, sem afetar a apresentação visual para os usuários.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>A última atualização foi em <data value="2022-05-15">15 de maio de 2022</data>.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<data>'}</code> é usada para marcar a última atualização com a data real e um valor de data para fins de processamento.</p>

                        <h3>Formatos de Valor:</h3>
                        <p>O valor do atributo <code>value</code> pode ser uma data, hora ou ambas, dependendo do contexto. O formato padrão é YYYY-MM-DD (ano-mês-dia) para datas e HH:MM:SS (hora:minuto:segundo) para horas.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag <code>{'<data>'}</code> sempre que precisar marcar informações de data ou hora em seu documento HTML que podem ser processadas por máquinas ou scripts.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<data>'}</code> é uma ferramenta útil para marcar informações de data e hora de forma semântica, permitindo que os desenvolvedores criem aplicações web mais acessíveis e interoperáveis.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_data;
