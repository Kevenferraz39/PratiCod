import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_section = () => {
    return (
        <>
            <Helmet>
                <title>Tag section</title>
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
                        <h2>Para que serve a Tag <code>{'<section>'}</code> ?</h2>
                        <p>A tag <code>{'<section>'}</code> é usada para representar uma seção tematicamente relacionada em um documento HTML.</p>

                        <p>Seções são usadas para agrupar conteúdo relacionado, como artigos, posts de blog, galerias de imagens, etc., dentro de uma página da web.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<section>
    <h2>Introdução</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula turpis vitae turpis sodales, et tempus magna laoreet.</p>
</section>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag {`<section>`} é usada para agrupar uma seção de introdução em uma página da web.</p>

                        <h3>Funcionalidades e Semântica:</h3>
                        <p>A tag {`<section>`} ajuda a organizar e estruturar o conteúdo de uma página da web de forma mais significativa e semântica.</p>

                        <p>Embora semelhante à {`<div>`}, a {`<section>`} fornece uma intenção semântica mais clara, indicando que o conteúdo agrupado dentro dela está relacionado tematicamente.</p>

                        <h3>Identificação de Seções:</h3>
                        <p>Seções em uma página da web podem ser identificadas por seus títulos, introduções ou conteúdos relacionados.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag {`<section>`} é uma ferramenta útil para organizar e estruturar o conteúdo de uma página da web de forma semântica e significativa. Ao utilizá-la adequadamente, você melhora a acessibilidade, a usabilidade e a compreensão do conteúdo pelos usuários.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_section;
