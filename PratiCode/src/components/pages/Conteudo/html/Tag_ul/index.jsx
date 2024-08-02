import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_ul = () => {
    return (
        <>
            <Helmet>
                <title>Tag ul</title>
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
                        <h2>Para que serve a Tag <code>{'<ul>'}</code> ?</h2>
                        <p>A tag <code>{'<ul>'}</code> é usada para criar listas não ordenadas em um documento HTML.</p>

                        <p>Uma lista não ordenada é uma coleção de itens de lista que não segue uma ordem específica. Cada item é marcado com um marcador, como um ponto ou um círculo.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<ul>'}</code> é usada para criar uma lista não ordenada com três itens.</p>

                        <h3>Elementos Filhos de {`<ul>`}:</h3>
                        <p>Os elementos filhos de uma tag <code>{'<ul>'}</code> são geralmente {`<li>`} (list items), que representam os itens individuais na lista.</p>

                        <h3>Características Adicionais:</h3>
                        <p>As listas não ordenadas são flexíveis e permitem a adição de estilos e classes CSS para personalização visual. Os navegadores geralmente aplicam uma margem e um padding padrão às listas.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<ul>'}</code> é uma ferramenta fundamental para criar listas de itens não ordenadas em HTML. Ela oferece uma maneira simples e eficaz de organizar e exibir informações em um documento web.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_ul;
