import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_h1 = () => {
    return (
        <>
            <Helmet>
                <title>Tag h1</title>
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
                        <h2>Para que serve a Tag <code>{'<h1>'}</code> ?</h2>
                        <p>A tag <code>{'<h1>'}</code> é usada para definir o título principal ou o cabeçalho de nível 1 de uma página da web.</p>

                        <p>O cabeçalho de nível 1 é o elemento mais importante em uma página, usado para identificar o título principal ou o objetivo principal do conteúdo.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<h1>Meu Título Principal</h1>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<h1>'}</code> define o título principal da página como "Meu Título Principal".</p>

                        <h3>Semântica e Acessibilidade:</h3>
                        <p>O uso correto da tag <code>{'<h1>'}</code> contribui para a semântica da página e para a acessibilidade dos usuários, facilitando a compreensão da estrutura e do conteúdo da página.</p>

                        <h3>Estilização e Layout:</h3>
                        <p>Os estilos aplicados ao <code>{'<h1>'}</code> podem variar dependendo do design e do layout da página. É comum usar CSS para ajustar a aparência do cabeçalho de acordo com o estilo da página.</p>

                        <h3>Hierarquia de Cabeçalhos:</h3>
                        <p>É importante manter uma hierarquia adequada de cabeçalhos em uma página, com o <code>{'<h1>'}</code> representando o título principal e cabeçalhos de níveis inferiores (<code>{'<h2>'}</code>, <code>{'<h3>'}</code>, etc.) representando subseções ou títulos secundários.</p>

                        <h3>Considerações Finais:</h3>
                        <p>O cabeçalho de nível 1 é uma parte fundamental da estrutura de uma página da web, fornecendo aos usuários uma indicação clara do conteúdo e do propósito da página. Ao usar a tag <code>{'<h1>'}</code> de forma adequada, você melhora a experiência do usuário e a eficácia do seu documento HTML.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_h1;
