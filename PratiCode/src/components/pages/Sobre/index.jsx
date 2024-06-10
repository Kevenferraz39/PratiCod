import { Helmet } from "react-helmet";
import NavBar from "../../NavBar";
import Styles from "./Sobre.module.css";
import Footer from "../../Footer";
import Fundadores_img from "../../../assets/img/png/fundadores.jpeg";
import Layout_img from "../../../assets/img/png/layout.png";
import logo from "../../../assets/img/png/LogoBFR.png"
const Sobre = () => {
    return (
        <>
            <Helmet>
                <title>Sobre</title>
            </Helmet>
            <NavBar />
            <div className={Styles.main}>
                <br /><br /><br /><br /><br /><br /><br />
                <div className={Styles.TextContainer}>
                    <div className={Styles.imgs}>
                        <img src={logo} alt="" />
                    </div>
                        <h1>Tudo o que você precisa saber sobre o PratiCode.io</h1>
                        <h2>Conheça a história, o propósito do PratiCode.io</h2>
                        <h3>Quem é PratiCode.io?</h3>
                    <p>
                        Somos uma empresa de tecnologia dedicada a ajudar estudantes e novos desenvolvedores a atingir seu potencial máximo. Oferecemos uma plataforma avançada e serviços essenciais para que vocês possam estudar, praticar e compartilhar seu conhecimento.<br/><br/>
                        Nossa meta é apoiar não apenas quem já tem experiência em desenvolvimento, mas também aqueles que estão começando do zero. Disponibilizamos uma página de exercícios com desafios em várias linguagens de programação, ideal para prática contínua. Na aba "Code" do nosso site, você encontrará conteúdos especializados e vídeos.<br/><br/>
                        Estamos comprometidos em proporcionar uma experiência de aprendizado abrangente e acessível, garantindo que todos tenham as ferramentas necessárias para crescer e se destacar no mundo da tecnologia.<br/><br/>
                        História do PratiCode.io: como tudo começou
                        Nossa jornada começou em 2023, em São Paulo, como um projeto de TCC (Trabalho de Conclusão de Curso) para o curso técnico de desenvolvimento de sistemas da ETEC Franco da Rocha. O projeto foi idealizado por Nathan Nolacio Ressurreição, Julia Martins de Melo Costa, Keven Ferraz de Almeida, Heitor Biazon e Rayza.<br/><br/>Atualmente, nosso fundador Keven Ferraz de Almeida está à frente do projeto, gerenciando e desenvolvendo a plataforma PratiCode.io, já que a versão inicial não teve continuidade, após a apresentação do TCC.
                    </p><br /><br />
                    <figure>
                        <img src={Fundadores_img} alt="Imagem dos Desenvolvedores do 1º PratiCode na apresentação do TCC" className={Styles.fundadores} />
                        <img src={Layout_img} alt="Imagem dos Desenvolvedores do 1º PratiCode na apresentação do TCC" className={Styles.fundadores} />
                        <figcaption>Imagem dos Desenvolvedores do 1º PratiCode na apresentação do TCC</figcaption>
                    </figure><br /><br />
                    <p>
                        Assim como na versão original, nosso objetivo continua sendo ajudar as pessoas a se desenvolverem por meio da prática e de tutoriais. No entanto, nesta nova versão, estamos mais estruturados e melhorados, prontos para oferecer uma experiência ainda mais completa e eficiente.
                    </p>



                    Missão:

                    A nossa missão é capacitar e orientar os jovens programadores em suas jornadas, fornecendo recursos educacionais acessíveis e suporte dedicado para ajudá-los a dominar conceitos, linguagens e tecnologias de desenvolvimento, permitindo-lhes construir uma base sólida para o sucesso em suas carreiras.

                    Visão:

                    Nossa visão é criar uma comunidade global de aprendizagem colaborativa, onde os jovens programadores possam encontrar respostas para suas perguntas, compartilhar conhecimentos e conectar-se com mentores e colegas de todo o mundo, transformando-se em profissionais confiantes e proficientes no desenvolvimento de software.

                    Valores:

                    <ol>
                        <li>
                            Educação acessível: Priorizamos o acesso igualitário à educação de qualidade, tornando nossos recursos e serviços acessíveis a todos, independentemente de sua origem ou circunstâncias financeiras.
                        </li>
                        <li>
                            Colaboração: Acreditamos no poder da colaboração e do compartilhamento de conhecimento entre os membros de nossa comunidade, incentivando um ambiente onde todos se sintam valorizados e capacitados a contribuir.
                        </li> 
                        <li>
                            Integridade: Guiamo-nos pelos mais altos padrões de ética e integridade em todas as nossas interações, garantindo que nossos conteúdos sejam precisos, imparciais e confiáveis.
                        </li>
                        <li>
                            Inovação: Estamos comprometidos em permanecer na vanguarda das tendências e tecnologias emergentes no campo do desenvolvimento de software, buscando constantemente maneiras criativas de melhorar e expandir nossos serviços para atender às necessidades em evolução de nossa comunidade.
                        </li>
                        <li>
                            Apoio mútuo: Cultivamos um ambiente de apoio e encorajamento, onde todos os membros se sintam valorizados e apoiados em sua jornada de aprendizado e crescimento profissional.
                        </li>
                    </ol>


                </div>
            </div>
            <Footer />
        </>
    );
};

export default Sobre;
