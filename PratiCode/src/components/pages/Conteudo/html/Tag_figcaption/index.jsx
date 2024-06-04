import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_figcaption = () => {
    return (
        <>
            <Helmet>
                <title>Tag figcaption</title>
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
                        <h2>Para que serve a Tag <code>{'<figcaption>'}</code> ?</h2>
                        <p>A tag <code>{'<figcaption>'}</code> é usada em conjunto com a tag <code>{'<figure>'}</code> para fornecer uma legenda ou descrição para o conteúdo visual dentro do elemento <code>{'<figure>'}</code>.</p>

                        <p>Essa tag é especialmente útil quando você tem uma imagem, gráfico ou outro conteúdo visual que precisa de uma descrição explicativa.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<figure>
    <img src="imagem.jpg" alt="Descrição da Imagem">
    <figcaption>Legenda da Imagem</figcaption>
</figure>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<figcaption>'}</code> fornece a legenda ou descrição para a imagem dentro do elemento <code>{'<figure>'}</code>.</p>

                        <h3>Uso Semântico:</h3>
                        <p>O uso da tag <code>{'<figcaption>'}</code> contribui para a semântica da página, ajudando os mecanismos de busca e os leitores de tela a entenderem a relação entre o conteúdo visual e sua descrição.</p>

                        <h3>Considerações Finais:</h3>
                        <p>Use a tag <code>{'<figcaption>'}</code> sempre que precisar adicionar uma legenda ou descrição para o conteúdo visual em sua página da web, garantindo uma melhor acessibilidade e compreensão do conteúdo.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_figcaption;
