import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from '../htmlTags.json';

const Tag_hr = () => {
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
                        <h2>Para que serve a Tag <code>{'<hr>'}</code> ?</h2>
                        <p>A tag <code>{'<hr>'}</code> é usada para representar uma quebra temática em uma página HTML. "hr" significa "horizontal rule", ou seja, uma regra horizontal.</p>

                        <p>É comumente utilizada para separar conteúdos distintos ou seções de uma página, adicionando uma linha horizontal visualmente marcante entre eles.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<section>
    <h2>Seção 1</h2>
    <p>Conteúdo da Seção 1...</p>
    <hr>
    <h2>Seção 2</h2>
    <p>Conteúdo da Seção 2...</p>
    <hr>
    <h2>Seção 3</h2>
    <p>Conteúdo da Seção 3...</p>
</section>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<hr>'}</code> é utilizada para separar visualmente diferentes seções de conteúdo em uma página.</p>

                        <h3>Atributos Comuns:</h3>
                        <ul>
                            <li><strong>color:</strong> Define a cor da linha.</li>
                            <li><strong>size:</strong> Define a espessura da linha.</li>
                            <li><strong>width:</strong> Define a largura da linha.</li>
                        </ul>

                        <h3>Importância do {`<hr>`}:</h3>
                        <p>O uso adequado da tag <code>{'<hr>'}</code> ajuda a melhorar a organização e a legibilidade do conteúdo em uma página HTML, tornando mais claro para os usuários onde uma seção termina e outra começa.</p>

                        <p>Além disso, a tag <code>{'<hr>'}</code> também pode ser estilizada com CSS para se adequar ao design visual da página.</p>

                        <h3>Considerações Finais:</h3>
                        <p>Utilize a tag <code>{'<hr>'}</code> sempre que desejar adicionar uma divisão visual entre diferentes seções de conteúdo em uma página HTML, garantindo uma melhor experiência de usuário e uma apresentação mais organizada do conteúdo.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_hr;
