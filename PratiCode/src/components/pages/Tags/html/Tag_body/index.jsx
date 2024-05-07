import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from'../htmlTags.json';

const Tag_body = () => {
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
                        <h2>Para que serve a Tag <code>{'<body>'}</code> ?</h2>
                        <p>A tag <code>{'<body>'}</code> é um dos elementos mais importantes em um documento HTML. Ela representa o conteúdo principal de uma página da web, incluindo texto, imagens, vídeos, formulários e outros elementos.</p>

                        <p>O conteúdo dentro da tag <code>{'<body>'}</code> é o que os usuários veem e interagem quando visitam uma página da web. Ele é renderizado pelo navegador e exibido na janela do navegador, formando a parte visível da página.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<!DOCTYPE html>
<html>
<head>
    <title>Minha Página</title>
</head>
<body>
    <h1>Olá, mundo!</h1>
    <p>Este é o conteúdo principal da minha página.</p>
</body>
</html>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<body>'}</code> envolve todo o conteúdo principal da página da web, incluindo o título e os parágrafos.</p>

                        <h3>Atributos Importantes:</h3>
                        <p>A tag <code>{'<body>'}</code> pode ter atributos como <code>bgcolor</code> para definir a cor de fundo da página, <code>text</code> para definir a cor do texto e <code>link</code> para definir a cor dos links.</p>

                        <h3>Impacto na Estrutura e Semântica:</h3>
                        <p>O uso adequado da tag <code>{'<body>'}</code> é fundamental para a estrutura e a semântica de uma página da web. Ele fornece o contexto principal para o conteúdo e influencia a maneira como os motores de busca e os leitores de tela interpretam o conteúdo.</p>

                        <h3>Considerações Finais:</h3>
                        <p>É importante manter o conteúdo dentro da tag <code>{'<body>'}</code> bem estruturado e semanticamente correto para garantir uma experiência de usuário positiva e uma boa classificação nos resultados de pesquisa.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_body;
