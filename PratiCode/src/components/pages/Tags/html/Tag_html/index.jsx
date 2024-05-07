import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from'../htmlTags.json'
const Tag_html = () => {

    return (
        <>
            <Helmet>
                <title>Tag html </title>
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
                        <h2>Para que serve a Tag <code>{'<html>'}</code> ?</h2>
                            <p>A tag {'<html>'} é a espinha dorsal de qualquer documento HTML. Assim como uma casa tem sua estrutura fundamental, o elemento {'<html>'} é a estrutura básica de uma página da web. Ela funciona como o invólucro principal que abriga todo o conteúdo da página.</p>

                            <p>Imagine que você está construindo uma casa. A tag <code>{'<html>'}</code> é como o alicerce sobre o qual tudo é construído. Ela fornece a base sólida na qual todos os outros elementos da página da web são organizados e exibidos pelo navegador.</p>

                            <p>Além disso, a tag <code>{'<html>'}</code> desempenha um papel importante ao definir o idioma do documento. Através do atributo <code>lang</code>, podemos especificar o idioma em que o conteúdo está escrito. Por exemplo, <code>{'<html lang="pt-BR">'}</code> indica que o documento está em português brasileiro.</p>

                            <p>Então, em resumo, a tag <code>{'<html>'}</code> é como o esqueleto de uma página da web. Ela proporciona a estrutura básica necessária para que os navegadores interpretem e exibam o conteúdo de forma adequada, garantindo uma experiência consistente e acessível para os usuários.</p>

                            <h3>1.Estrutura Básica de um Documento HTML:</h3>
    <div className={Styles.codigoPrint}>
                                <div className={Styles.containerBol}>
                                    <div className={Styles.boll1}></div>
                                    <div className={Styles.boll2}></div>
                                    <div className={Styles.boll3}></div>
                                </div>
                                <div className={Styles.codigo}>
                                    <pre>
{`<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Minha Página</title>
    </head>
    <body>
    <!-- Conteúdo da Página Aqui -->
    </body>
    </html>`}
                                    </pre>
                                </div>
    </div>
                    <h3>2.Definindo o Idioma do Documento:</h3>
    <div className={Styles.codigoPrint}>
    <div className={Styles.containerBol}>
        <div className={Styles.boll1}></div>
        <div className={Styles.boll2}></div>
        <div className={Styles.boll3}></div>
    </div>
    <div className={Styles.codigo}>
        <pre>
            {`<html lang="en">
<!-- Conteúdo da Página Aqui -->
</html>`}
        </pre>
    </div>
    </div>
                    <h3>3.Incluindo Metadados no Documento:</h3>
    <div className={Styles.codigoPrint}>
    <div className={Styles.containerBol}>
        <div className={Styles.boll1}></div>
        <div className={Styles.boll2}></div>
        <div className={Styles.boll3}></div>
    </div>
    <div className={Styles.codigo}>
    <pre>
            {`<html>
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Descrição da Página">
    <meta name="keywords" content="palavra-chave1, palavra-chave2, palavra-chave3">
    <title>Minha Página</title>
</head>
<body>
    <!-- Conteúdo da Página Aqui -->
</body>
</html>`}
        </pre>
    </div>
    </div>  
                    <h3>4.Usando o Elemento <code>{'<head>'}</code> para Metadados e Links Externos:</h3>
    <div className={Styles.codigoPrint}>
    <div className={Styles.containerBol}>
        <div className={Styles.boll1}></div>
        <div className={Styles.boll2}></div>
        <div className={Styles.boll3}></div>
    </div>
    <div className={Styles.codigo}>
        <pre>
            {`<html>
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Descrição da Página">
    <link rel="stylesheet" href="estilos.css">
    <title>Minha Página</title>
</head>
<body>
    <!-- Conteúdo da Página Aqui -->
</body>
</html>`}
        </pre>
    </div>
    </div>
                    <h3>5.Definindo a Versão do Documento HTML:</h3>
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
<!-- Conteúdo da Página Aqui -->
</html>`}
        </pre>
    </div>
    </div>           
                    <p>Esses exemplos mostram como a tag HTML <code>{'<html>'}</code> é utilizada para envolver todo o conteúdo de uma página da web e definir suas características básicas, como idioma, metadados e versão do documento.</p>    
                    </div>   
                </div> 
                <Footer/>
            </div>
        </>
    )
}

export default Tag_html