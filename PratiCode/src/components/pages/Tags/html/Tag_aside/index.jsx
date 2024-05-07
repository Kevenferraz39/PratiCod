import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from'../htmlTags.json';

const Tag_aside = () => {
    return (
        <>
            <Helmet>
                <title>Tag aside</title>
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
                        <h2>Para que serve a Tag <code>{'<aside>'}</code> ?</h2>
                        <p>A tag <code>{'<aside>'}</code> é usada para representar conteúdo relacionado, que está tangencialmente relacionado ao conteúdo principal de uma página, mas pode ser considerado separadamente.</p>

                        <p>O conteúdo dentro de um elemento <code>{'<aside>'}</code> é frequentemente relacionado ao conteúdo principal de uma página, mas não é essencial para a compreensão desse conteúdo principal. Pode incluir informações complementares, anúncios, biografias de autores, links relacionados, entre outros.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<aside>
    <h3>Publicidade</h3>
    <p>Anúncio...</p>
</aside>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<aside>'}</code> envolve um conteúdo de publicidade, que está relacionado ao conteúdo principal da página, mas pode ser considerado separadamente.</p>

                        <h3>Usos Comuns:</h3>
                        <ul>
                            <li>Barra lateral com links relacionados</li>
                            <li>Caixa de publicidade ou promoção</li>
                            <li>Biografia do autor em um blog</li>
                            <li>Links para artigos relacionados</li>
                        </ul>

                        <h3>Benefícios e Impacto na Acessibilidade:</h3>
                        <p>O uso adequado da tag <code>{'<aside>'}</code> ajuda na organização e na acessibilidade do conteúdo de uma página da web. Tecnologias assistivas podem usar a marcação semântica fornecida pela tag <code>{'<aside>'}</code> para fornecer uma melhor experiência de navegação para usuários com deficiência visual ou cognitiva.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<aside>'}</code> é uma ferramenta útil para destacar e organizar conteúdo relacionado que está tangencialmente ligado ao conteúdo principal de uma página da web. Ao usá-la adequadamente, os desenvolvedores podem melhorar a compreensão e a acessibilidade do conteúdo para todos os usuários.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_aside;
