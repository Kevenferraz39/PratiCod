import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_style = () => {
    return (
        <>
            <Helmet>
                <title>Tag style</title>
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
                        <h2>Para que serve a Tag <code>{'<style>'}</code> ?</h2>
                        <p>A tag <code>{'<style>'}</code> é usada para definir estilos CSS dentro de um documento HTML.</p>

                        <p>Os estilos definidos dentro da tag <code>{'<style>'}</code> afetam o layout e a aparência de elementos HTML específicos ou de toda a página.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<style>
    h1 {
        color: blue;
    }
    p {
        font-size: 16px;
    }
</style>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<style>'}</code> é usada para definir estilos CSS que afetam cabeçalhos {`<h1>`} e parágrafos {`<p>`} em uma página da web.</p>

                        <h3>Funcionalidades:</h3>
                        <p>A tag <code>{'<style>'}</code> permite a criação de estilos personalizados para elementos HTML, proporcionando controle total sobre a aparência e o layout de uma página da web.</p>

                        <p>Os estilos definidos dentro da tag <code>{'<style>'}</code> podem ser aplicados diretamente a elementos HTML específicos usando seletores de classe, ID ou tag.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<style>'}</code> é uma ferramenta poderosa para adicionar estilo e personalidade a páginas da web. Ao usá-la efetivamente, você pode melhorar a experiência do usuário e a estética geral do seu site.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_style;
