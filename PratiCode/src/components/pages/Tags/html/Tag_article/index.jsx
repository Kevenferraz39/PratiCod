import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from'../htmlTags.json';

const Tag_article = () => {
    return (
        <>
            <Helmet>
                <title>Tag article</title>
            </Helmet>
            <NavBar />
            <div className={Styles.containerr}>
                <div className={Styles.sideNav}>
                    {htmlTags.map((item, index) => (
                        <Link key={index} to={item.route}>
                            <span>{item.tag}</span>
                        </Link>
                    ))}
                </div>
                <div className={Styles.main}>
                    <div className={Styles.container_text}>
                        <h2>Para que serve a Tag <code>{'<article>'}</code> ?</h2>
                        <p>A tag <code>{'<article>'}</code> é usada para representar um conteúdo independente e autocontido que pode ser distribuído e reutilizado de forma independente do restante do documento.</p>

                        <p>Normalmente, um elemento <code>{'<article>'}</code> é usado para representar um artigo, uma postagem de blog, um comentário, uma seção de comentários ou qualquer outra peça de conteúdo que possa existir de forma independente e ser distribuída como tal.</p>

                        <p>Usar a tag <code>{'<article>'}</code> ajuda os mecanismos de pesquisa a entenderem a estrutura e a importância do conteúdo em uma página, melhorando a indexação e a relevância nos resultados da pesquisa.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<article>
    <h2>Título do Artigo</h2>
    <p>Conteúdo do artigo...</p>
</article>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<article>'}</code> envolve um conteúdo de artigo, incluindo um título e um parágrafo de conteúdo. Este conteúdo pode ser distribuído e reutilizado de forma independente.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_article;
