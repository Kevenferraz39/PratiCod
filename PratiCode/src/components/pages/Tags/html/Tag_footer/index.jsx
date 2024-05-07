import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from'../htmlTags.json';

const Tag_footer = () => {
    return (
        <>
            <Helmet>
                <title>Tag footer</title>
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
                        <h2>Para que serve a Tag <code>{'<footer>'}</code> ?</h2>
                        <p>A tag <code>{'<footer>'}</code> é usada para representar o rodapé de uma página da web ou de uma seção específica dentro dela.</p>

                        <p>O rodapé geralmente contém informações sobre o autor do documento, direitos autorais, links para páginas relacionadas, informações de contato ou qualquer outra informação relevante que não seja diretamente parte do conteúdo principal.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<footer>
    <p>&copy; Praticode.com Todos os direitos reservados.</p>
    <nav>
        <ul>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/contato">Contato</a></li>
        </ul>
    </nav>
</footer>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<footer>'}</code> envolve o conteúdo do rodapé, que inclui informações de direitos autorais e um menu de navegação.</p>

                        <h3>Semântica e Acessibilidade:</h3>
                        <p>O uso correto da tag <code>{'<footer>'}</code> ajuda na estruturação semântica da página e na acessibilidade para usuários de tecnologias assistivas, como leitores de tela. Isso permite que eles identifiquem facilmente o rodapé e naveguem pelas informações contidas nele.</p>

                        <h3>Estilização e Layout:</h3>
                        <p>Os estilos aplicados ao rodapé podem variar de acordo com o design e o layout da página. É comum usar CSS para ajustar a aparência do rodapé, como cores de fundo, fontes e margens.</p>

                        <h3>Considerações Finais:</h3>
                        <p>O rodapé é uma parte importante de uma página da web, fornecendo informações adicionais e navegacionais aos usuários. Ao usar a tag <code>{'<footer>'}</code> de forma adequada, você melhora a experiência do usuário e a estrutura do seu documento HTML.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_footer;
