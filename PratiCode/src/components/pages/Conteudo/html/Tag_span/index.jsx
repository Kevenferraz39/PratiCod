import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_span = () => {
    return (
        <>
            <Helmet>
                <title>Tag span</title>
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
                        <h2>Para que serve a Tag <code>{'<span>'}</code> ?</h2>
                        <p>A tag <code>{'<span>'}</code> é usada para aplicar estilos ou manipular partes específicas de um texto dentro de um documento HTML, sem afetar a estrutura do texto.</p>

                        <p>Enquanto elementos de bloco (como {`<div>`}) são usados para dividir o conteúdo em seções maiores, a tag {`<span>`} é usada para marcar pequenas partes de texto ou elementos que precisam ser estilizados ou manipulados separadamente.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Este é um texto com <span style={{ color: 'blue' }}>parte azul</span> e <span style={{ fontWeight: 'bold' }}>parte em negrito</span>.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag {`<span>`} é usada para envolver partes específicas do texto que precisam ser estilizadas separadamente, como parte azul e parte em negrito.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag {`<span>`} para aplicar estilos ou manipular partes específicas de um texto que não possuem significado semântico próprio e não justificam a criação de um elemento de bloco.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag {`<span>`} é uma ferramenta poderosa para aplicar estilos ou manipular partes específicas de um texto em HTML, permitindo uma maior flexibilidade na apresentação e na formatação do conteúdo.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_span;
