import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from '../page.module.css';
import NavBar from '../../../../NavBar';
import Footer from '../../../../Footer';
import htmlTags from'../htmlTags.json';

const Tag_address = () => {
    return (
        <>
            <Helmet>
                <title>Tag address</title>
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
                        <h2>Para que serve a Tag <code>{'<address>'}</code> ?</h2>
                        <p>A tag <code>{'<address>'}</code> é usada para fornecer informações de contato ou informações de localização sobre o autor ou proprietário de um documento ou artigo HTML.</p>

                        <p>É comum usar a tag <code>{'<address>'}</code> para incluir detalhes como o endereço físico, número de telefone ou endereço de e-mail de uma pessoa ou organização relacionada ao conteúdo do documento.</p>

                        <p>Por exemplo, em um site corporativo, a tag <code>{'<address>'}</code> pode ser usada para exibir o endereço físico e o número de telefone da empresa. Em um blog pessoal, pode ser usado para mostrar o endereço de e-mail do autor.</p>

                        <h3>Exemplo de Uso:</h3>
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>
{`<address>
    123 Rua Principal<br>
    Cidade, Estado, CEP<br>
    <a href="mailto:email@example.com">email@example.com</a><br>
    (123) 456-7890
</address>`}
                                </pre>
                            </div>
                        </div>
                        <p>Neste exemplo, a tag <code>{'<address>'}</code> contém o endereço físico, o endereço de e-mail e o número de telefone. O endereço de e-mail é um link clicável que abre o cliente de e-mail padrão quando clicado.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Tag_address;
