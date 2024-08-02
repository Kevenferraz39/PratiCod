import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_mark = () => {
    return (
        <>
            <Helmet>
                <title>Tag mark</title>
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
                        <h2>Para que serve a Tag <code>{'<mark>'}</code> ?</h2>
                        <p>A tag <code>{'<mark>'}</code> é usada para destacar partes de texto dentro de um documento, indicando que essas partes são de interesse especial ou relevância.</p>

                        <p>Em muitos casos, o texto destacado com {`<mark>`} é usado para indicar termos de pesquisa ou resultados de pesquisa correspondentes em um documento.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Este é um texto <mark>destacado</mark>.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<mark>'}</code> é usada para destacar a palavra "destacado".</p>

                        <h3>Uso Adequado:</h3>
                        <p>O uso da tag {`<mark>`} deve ser feito com moderação para evitar confusão. Deve-se garantir que o texto destacado seja realmente relevante e importante para o contexto do documento.</p>

                        <h3>Considerações Finais:</h3>
                        <p>O uso da tag {`<mark>`} pode melhorar a acessibilidade e a usabilidade de um documento, especialmente em documentos longos onde partes importantes precisam ser rapidamente identificadas pelos usuários.</p>

                        <p>No entanto, é importante usá-la com parcimônia e considerar se outros métodos de destaque, como estilos CSS, podem ser mais apropriados para o caso de uso específico.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_mark;
