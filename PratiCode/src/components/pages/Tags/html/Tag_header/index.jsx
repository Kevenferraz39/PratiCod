import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_header = () => {
    return (
        <>
            <Helmet>
                <title>Tag header</title>
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
                        <h2>Para que serve a Tag <code>{'<header>'}</code> ?</h2>
                        <p>A tag <code>{'<header>'}</code> é usada para representar o cabeçalho de uma seção ou de todo o documento. Geralmente, contém elementos introdutórios, como logotipos, menus de navegação, títulos e outras informações importantes.</p>

                        <p>O {`<header>`} fornece um contexto para o conteúdo da página, ajudando os usuários a identificar o propósito e o tema principal da seção ou do documento.</p>

                        <h3>Elementos Comuns Dentro de {`<header>`}:</h3>
                        <ul>
                            <li>Títulos ({`<h1>`}, {`<h2>`}, etc.): Usados para identificar o título principal da seção ou do documento.</li>
                            <li>Logotipos: Representam a identidade visual da página ou do site.</li>
                            <li>Menus de Navegação: Permitem aos usuários acessar diferentes seções ou páginas do site.</li>
                            <li>Outros Elementos Introdutórios: Como botões de pesquisa, links de login, banners promocionais, etc.</li>
                        </ul>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<header>
    <h1>Meu Site</h1>
    <nav>
        <ul>
            <li><a href="#">Página Inicial</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </nav>
</header>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, o {`<header>`} contém o título do site e um menu de navegação para diferentes seções do site.</p>

                        <h3>Importância do {`<header>`}:</h3>
                        <p>O uso adequado da tag {`<header>`} contribui para a organização e a usabilidade do conteúdo da página, ajudando os usuários a entenderem a estrutura e a navegar pelo site com facilidade.</p>

                        <p>Além disso, os mecanismos de busca consideram o conteúdo dentro do {`<header>`} ao indexar e classificar as páginas, o que pode afetar o SEO (Search Engine Optimization) do site.</p>

                        <h3>Considerações Finais:</h3>
                        <p>Utilize a tag {`<header>`} de forma apropriada para destacar o cabeçalho de suas seções ou páginas web, garantindo uma experiência de usuário mais intuitiva e uma melhor visibilidade nos resultados de pesquisa.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_header;
