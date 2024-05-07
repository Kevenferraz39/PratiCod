import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_main = () => {
    return (
        <>
            <Helmet>
                <title>Tag main</title>
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
                        <h2>Para que serve a Tag <code>{'<main>'}</code> ?</h2>
                        <p>A tag <code>{'<main>'}</code> é usada para representar o conteúdo principal de uma página HTML. Ela contém o conteúdo central ou principal da página, excluindo cabeçalhos, rodapés, barras laterais e outras seções que não são consideradas parte do conteúdo principal.</p>

                        <p>O elemento {`<main>`} é útil para os desenvolvedores e mecanismos de busca, pois ajuda a identificar e a distinguir o conteúdo principal de uma página.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<main>
    <h1>Título Principal</h1>
    <p>Conteúdo principal...</p>
</main>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, o elemento {`<main>`} envolve o conteúdo principal da página.</p>

                        <h3>Quando Usar:</h3>
                        <p>O elemento {`<main>`} deve ser utilizado apenas uma vez em uma página HTML e deve conter o conteúdo mais relevante e importante para os usuários.</p>

                        <h3>Importância do {`<main>`}:</h3>
                        <p>O uso adequado do elemento {`<main>`} ajuda a melhorar a acessibilidade e a compreensão do conteúdo de uma página web. Além disso, facilita a indexação por mecanismos de busca, pois destaca o conteúdo principal da página.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag {`<main>`} é uma parte essencial da estruturação semântica de uma página HTML, destacando o conteúdo principal e melhorando a usabilidade e a acessibilidade para os usuários.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_main;
