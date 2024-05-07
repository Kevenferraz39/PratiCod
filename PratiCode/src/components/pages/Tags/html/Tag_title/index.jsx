import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from'../htmlTags.json';

const Tag_title = () => {
    return (
        <>
            <Helmet>
                <title>Tag title</title>
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
                        <h2>Para que serve a Tag <code>{'<title>'}</code> ?</h2>
                        <p>A tag <code>{'<title>'}</code> é usada para definir o título da página em um documento HTML. Este título é exibido na barra de título do navegador ou na guia do navegador, e também é frequentemente usado pelos mecanismos de busca como o título principal da página em seus resultados de pesquisa.</p>

                        <p>Em termos de uma analogia de construção, se a tag <code>{'<head>'}</code> é a caixa de ferramentas do construtor, então a tag <code>{'<title>'}</code> é a placa com o nome da casa. Ela fornece uma identificação clara e concisa para a página da web, permitindo que os usuários e os mecanismos de busca saibam sobre o conteúdo da página.</p>

                        <p>Além disso, o texto dentro da tag <code>{'<title>'}</code> é o que os usuários veem nos resultados de pesquisa, então é importante escrever um título claro e descritivo que capture a essência da página.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<head>
    <title>Minha Página</title>
</head>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<title>'}</code> define o título da página como "Minha Página". Este título será exibido na barra de título do navegador e nos resultados de pesquisa.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_title;
