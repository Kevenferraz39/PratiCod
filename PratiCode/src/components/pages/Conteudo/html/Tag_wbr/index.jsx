import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_wbr = () => {
    return (
        <>
            <Helmet>
                <title>Tag wbr</title>
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
                        <h2>Para que serve a Tag <code>{'<wbr>'}</code> ?</h2>
                        <p>A tag <code>{'<wbr>'}</code> é usada para indicar um ponto de quebra de palavra opcional dentro de um texto.</p>

                        <p>Em HTML, as quebras de linha geralmente são ignoradas pelo navegador ao renderizar o texto. Isso significa que mesmo se você adicionar espaços em branco ou novas linhas dentro de um texto, elas serão tratadas como um único espaço quando a página for exibida no navegador.</p>

                        <p>Com a tag <code>{'<wbr>'}</code>, você pode indicar ao navegador um ponto de quebra de palavra opcional, onde ele pode dividir a palavra em múltiplas linhas se necessário para ajustar o conteúdo à largura da tela.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<p>Esta é uma palavramuitogrande<wbr>quepodequebrar<wbr>emváriaslinhas.</p>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<wbr>'}</code> é usada para indicar pontos de quebra de palavra opcionais dentro de uma palavra longa, permitindo que ela quebre em várias linhas se necessário.</p>

                        <h3>Uso Adequado:</h3>
                        <p>Use a tag <code>{'<wbr>'}</code> apenas quando desejar indicar pontos de quebra de palavra opcionais dentro de palavras longas, para permitir uma melhor formatação do texto em diferentes dispositivos e tamanhos de tela.</p>

                        <h3>Considerações Finais:</h3>
                        <p>A tag <code>{'<wbr>'}</code> é uma ferramenta útil para controlar a formatação do texto e garantir uma experiência de leitura melhorada em diferentes dispositivos e tamanhos de tela.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_wbr;
