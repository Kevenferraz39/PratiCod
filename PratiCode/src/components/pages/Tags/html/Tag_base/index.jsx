import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from'../htmlTags.json';

const Tag_base = () => {
    return (
        <>
            <Helmet>
                <title>Tag || HTML5</title>
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
                        <h2>Para que serve a Tag <code>{'<base>'}</code> ?</h2>
                        <p>A tag <code>{'<base>'}</code> é usada para especificar um URL base para todos os URLs relativos em um documento HTML.</p>

                        <p>Quando um navegador encontra uma tag <code>{'<base>'}</code> dentro do elemento <code>{'<head>'}</code>, ele usará esse URL base para resolver todos os URLs relativos encontrados no documento. Isso significa que qualquer link relativo ou recurso referenciado em uma página será resolvido com base neste URL base.</p>

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
    <base href="https://www.example.com/" target="_blank">
</head>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<base>'}</code> define o URL base como "https://www.example.com/". Todos os URLs relativos no documento HTML serão resolvidos com base neste URL base.</p>

                        <h3>Usos Comuns:</h3>
                        <ul>
                            <li>Definir o URL base para todos os links e recursos relativos em um documento</li>
                            <li>Especificar um destino padrão para links âncora</li>
                        </ul>

                        <h3>Benefícios e Impacto na Navegação:</h3>
                        <p>O uso da tag <code>{'<base>'}</code> pode simplificar e centralizar a gestão de URLs relativos em um documento HTML. Isso pode facilitar a manutenção e a portabilidade do documento, além de garantir uma navegação consistente entre diferentes páginas.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<base>'}</code> é uma ferramenta útil para definir o URL base de um documento HTML e simplificar a resolução de URLs relativos. Ao usá-la adequadamente, os desenvolvedores podem melhorar a consistência e a manutenção de seus documentos HTML.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_base;
