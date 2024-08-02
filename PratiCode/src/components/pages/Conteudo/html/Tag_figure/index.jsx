import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_figure = () => {
    return (
        <>
            <Helmet>
                <title>Tag || HTML5</title>
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
                        <h2>Para que serve a Tag <code>{'<figure>'}</code> ?</h2>
                        <p>A tag <code>{'<figure>'}</code> é usada para encapsular qualquer conteúdo relacionado, como imagens, gráficos, ilustrações, códigos, entre outros, junto com sua legenda associada (<code>{'<figcaption>'}</code>).</p>

                        <p>Essa tag é frequentemente usada para adicionar figuras ou elementos multimídia em uma página da web, fornecendo uma maneira semântica de agrupar conteúdo visual e sua descrição.</p>

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
                        <p>Neste exemplo, a tag <code>{'<figure>'}</code> envolve uma imagem (<code>{'<img>'}</code>) e sua legenda associada (<code>{'<figcaption>'}</code>).</p>

                        <h3>Uso Semântico:</h3>
                        <p>O uso correto da tag <code>{'<figure>'}</code> contribui para a semântica da página, ajudando os mecanismos de busca e os leitores de tela a entenderem a relação entre o conteúdo visual e sua descrição.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<figure>'}</code> é uma ferramenta importante para adicionar figuras e outros elementos multimídia em uma página da web, melhorando a acessibilidade e a compreensão do conteúdo visual.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_figure;
