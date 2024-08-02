import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_br = () => {
    return (
        <>
            <Helmet>
                <title>Tag br</title>
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
                        <h2>Para que serve a Tag <code>{'<br>'}</code> ?</h2>
                        <p>A tag <code>{'<br>'}</code> é usada para inserir uma quebra de linha dentro de um texto ou conteúdo HTML.</p>

                        <p>Em HTML, os navegadores geralmente ignoram espaços em branco adicionais e novas linhas dentro do código. Isso significa que mesmo se você adicionar várias quebras de linha em seu código HTML, elas serão tratadas como uma única quebra de linha quando a página for renderizada no navegador.</p>

                        <p>No entanto, quando você precisa forçar uma quebra de linha em um local específico dentro de um parágrafo ou outro elemento de texto, você pode usar a tag <code>{'<br>'}</code>.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Este é um texto.<br>Esta é uma nova linha.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<br>'}</code> é usada para inserir uma quebra de linha após "Este é um texto.", criando uma nova linha para o texto "Esta é uma nova linha."</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag <code>{'<br>'}</code> apenas quando necessário para forçar uma quebra de linha em um local específico dentro de um elemento de texto.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<br>'}</code> é uma maneira simples e eficaz de inserir quebras de linha em elementos de texto HTML, permitindo um maior controle sobre a formatação do conteúdo.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_br;
