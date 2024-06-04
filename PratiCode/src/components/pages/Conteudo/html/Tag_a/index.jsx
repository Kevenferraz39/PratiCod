import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_a = () => {
    return (
        <>
            <Helmet>
                <title>Tag a</title>
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
                        <h2>Para que serve a Tag <code>{'<a>'}</code> ?</h2>
                        <p>A tag <code>{'<a>'}</code>, abreviação de "anchor" (âncora), é usada para criar links entre páginas da web ou para partes específicas de uma página.</p>

                        <p>Os elementos {`<a>`} são elementos essenciais para a navegação na web, permitindo aos usuários clicar em um texto ou imagem para serem direcionados a outra página ou recurso.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<a href="https://www.exemplo.com">Clique aqui para visitar o exemplo.com</a>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag {`<a>`} cria um link para o site "exemplo.com", exibindo o texto "Clique aqui para visitar o exemplo.com".</p>

                        <h3>Atributos Comuns:</h3>
                        <ul>
                            <li><strong>href:</strong> Especifica o URL para o qual o link direciona.</li>
                            <li><strong>target:</strong> Define onde abrir o URL vinculado (por exemplo, `_blank` para abrir em uma nova aba).</li>
                            <li><strong>title:</strong> Fornece um título para o link, exibido quando o usuário passa o mouse sobre ele.</li>
                        </ul>

                        <h3>Links Relativos:</h3>
                        <p>Os URLs podem ser relativos, apontando para arquivos ou recursos dentro do mesmo site, ou absolutos, apontando para recursos externos.</p>

                        <h3>Considerações Finais:</h3>
                        <p>Use a tag {`<a>`} sempre que precisar criar links clicáveis em sua página da web para melhorar a navegação do usuário e a conectividade entre páginas e recursos.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_a;
