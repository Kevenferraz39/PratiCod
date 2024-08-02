import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_div = () => {
    return (
        <>
            <Helmet>
                <title>Tag div</title>
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
                        <h2>Para que serve a Tag <code>{'<div>'}</code> ?</h2>
                        <p>A tag <code>{'<div>'}</code> é um elemento genérico usado para agrupar e estilizar outros elementos HTML, sem qualquer significado semântico próprio.</p>

                        <p>É comumente usado para criar seções ou contêineres em uma página da web, permitindo uma estruturação flexível e organização do layout.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<div class="container">
    <h2>Título da Seção</h2>
    <p>Conteúdo da Seção...</p>
</div>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<div>'}</code> é usada como um contêiner para agrupar e estilizar o título e o conteúdo da seção.</p>

                        <h3>Estilização e Layout:</h3>
                        <p>As classes CSS podem ser atribuídas a elementos <code>{'<div>'}</code> para aplicar estilos específicos, como largura, altura, margens, etc., facilitando a formatação e o layout da página.</p>

                        <h3>Uso Semântico:</h3>
                        <p>Embora a tag <code>{'<div>'}</code> não tenha significado semântico próprio, seu uso adequado contribui para a organização e a estruturação semântica do documento HTML, melhorando a acessibilidade e a compreensão do conteúdo.</p>

                        <h3>Considerações Finais:</h3>
                        <p>Use a tag <code>{'<div>'}</code> sempre que precisar agrupar e estilizar elementos HTML para criar uma estrutura de layout flexível e organizada em sua página da web.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_div;
