import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_script = () => {
    return (
        <>
            <Helmet>
                <title>Tag || HTML5</title>
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
                        <h2>Para que serve a Tag <code>{'<script>'}</code> ?</h2>
                        <p>A tag <code>{'<script>'}</code> é usada para incorporar scripts ou códigos JavaScript em um documento HTML.</p>

                        <p>Scripts JavaScript são usados para adicionar funcionalidades dinâmicas e interativas a uma página da web, como validação de formulários, manipulação do DOM, animações, efeitos visuais e muito mais.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<script>
    // Exemplo de script JavaScript
    document.getElementById('demo').innerHTML = 'Olá, mundo!';
</script>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, um script JavaScript é incorporado à página HTML para atualizar o conteúdo de um elemento com o ID 'demo' para exibir 'Olá, mundo!'.</p>

                        <h3>Localização:</h3>
                        <p>A tag <code>{'<script>'}</code> pode ser colocada na seção {`<head>`} ou no final do corpo {`<body>`}de um documento HTML.</p>

                        <h3>Atributos:</h3>
                        <p>Alguns atributos comuns da tag <code>{'<script>'}</code> incluem:</p>
                        <ul>
                            <li><strong>src:</strong> Usado para especificar o URL de um arquivo JavaScript externo.</li>
                            <li><strong>type:</strong> Especifica o tipo de conteúdo do script. O valor padrão é "text/javascript".</li>
                        </ul>

                        <h3>Considerações de Segurança:</h3>
                        <p>Ao incorporar scripts em uma página da web, é importante considerar questões de segurança, como ataques de injeção de código (XSS). Sempre valide e sanitize os dados de entrada e evite executar scripts de fontes não confiáveis.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<script>'}</code> é uma ferramenta poderosa para adicionar interatividade e dinamismo a páginas da web. Ao usá-la de forma adequada e segura, é possível criar experiências de usuário mais envolventes e funcionais.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_script;
