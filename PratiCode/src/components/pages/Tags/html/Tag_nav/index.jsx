import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_nav = () => {
    return (
        <>
            <Helmet>
                <title>Tag nav</title>
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
                        <h2>Para que serve a Tag <code>{'<nav>'}</code> ?</h2>
                        <p>A tag <code>{'<nav>'}</code> é usada para representar uma seção de navegação em uma página HTML. Ela contém links para outras páginas ou seções do site, permitindo aos usuários navegar facilmente pelo conteúdo.</p>

                        <p>O elemento {`<nav>`} é particularmente útil para indicar aos mecanismos de busca que determinados links representam a navegação principal do site.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<nav>
    <ul>
        <li><a href="#">Página Inicial</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
    </ul>
</nav>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, o elemento {`<nav>`} contém uma lista de links para diferentes seções do site.</p>

                        <h3>Quando Usar:</h3>
                        <p>O elemento {`<nav>`} deve ser utilizado para representar a navegação principal de uma página ou seção do site. Ele não deve ser usado para links que não fazem parte da navegação principal, como links de rodapé ou de redes sociais.</p>

                        <h3>Importância do {`<nav>`}:</h3>
                        <p>O uso correto do elemento {`<nav>`} melhora a acessibilidade e a usabilidade do site, ajudando os usuários a encontrar facilmente o conteúdo que desejam. Além disso, ele fornece informações úteis aos mecanismos de busca sobre a estrutura e a organização do site.</p>

                        <h3>Considerações Finais:</h3>
                        <p>Utilize a tag {`<nav>`} para representar a navegação principal do seu site de forma semântica e acessível, garantindo uma melhor experiência para os usuários e uma indexação mais eficiente pelos mecanismos de busca.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_nav;
