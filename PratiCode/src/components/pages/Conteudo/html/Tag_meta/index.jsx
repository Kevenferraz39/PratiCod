import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from'../htmlTags.json';

const Tag_meta = () => {
    return (
        <>
            <Helmet>
                <title>Tag meta</title>
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
                        <h2>Para que serve a Tag <code>{'<meta>'}</code> ?</h2>
                        <p>A tag <code>{'<meta>'}</code> é usada para fornecer metadados sobre o documento HTML. Ela não exibe nenhum conteúdo visível na página, mas fornece informações sobre o documento que podem ser úteis para navegadores, mecanismos de busca e outros serviços.</p>

                        <p>Os usos comuns da tag <code>{'<meta>'}</code> incluem:</p>
                        <ul>
                            <li>- Especificar o conjunto de caracteres (charset) usado no documento;</li>
                            <li>- Definir a viewport para dispositivos móveis</li>
                            <li>- Fornecer descrições e palavras-chave para mecanismos de busca;</li>
                            <li>- Definir autor, data de criação e outras informações de metadados;</li>
                            <li>- Controlar o comportamento de indexação de mecanismos de busca;</li>
                        </ul>

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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Descrição da Página">
    <meta name="keywords" content="palavra-chave1, palavra-chave2, palavra-chave3">
    <meta name="author" content="Nome do Autor">
</head>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<meta>'}</code> é usada para fornecer metadados sobre o documento, incluindo o conjunto de caracteres, viewport para dispositivos móveis, descrição da página, palavras-chave e autor.</p>

                        <h3>Atributos Importantes:</h3>
                        <p>Alguns dos atributos mais importantes da tag <code>{'<meta>'}</code> incluem <code>charset</code>, <code>name</code>, <code>content</code>, <code>viewport</code>, <code>description</code>, <code>keywords</code>, <code>author</code>, entre outros.</p>

                        <h3>Impacto nos Mecanismos de Busca:</h3>
                        <p>O uso adequado da tag <code>{'<meta>'}</code> pode melhorar a indexação e a classificação nos resultados de pesquisa, fornecendo informações relevantes e precisas sobre o conteúdo da página.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<meta>'}</code> desempenha um papel crucial no fornecimento de metadados para documentos HTML, influenciando o comportamento dos navegadores e dos mecanismos de busca. Ao entender e utilizar corretamente seus atributos, os desenvolvedores podem otimizar a acessibilidade, a visibilidade e a relevância de suas páginas na web.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_meta;
