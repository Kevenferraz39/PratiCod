import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Styles from './page.module.css'
import NavBar from '../../../NavBar'
import Footer from '../../../Footer'
import ComandDCL from './ComandDCL.json'
import ComandDDL from './ComandDDL.json'
import ComandDML from './ComandDML.json'
import ComandDQL from './ComandDQL.json'
import ComandTCL from './ComandTCL.json'
const Pagesql = () => {
    return (
        <>
            <Helmet>
                <title>Page || SQL</title>
            </Helmet>
            <NavBar />
            <div className={Styles.containerr}>
                <div className={Styles.sideNav}>
                    <details>
                        <summary>Commands DCL</summary>
                        {ComandDCL.map((item, index) => (
                            <Link key={index} to={item.route}>
                                <span>{item.tag}</span>
                            </Link>
                        ))}
                    </details>
                    <details>
                        <summary>Commands DDL</summary>
                        {ComandDDL.map((item, index) => (
                            <Link key={index} to={item.route}>
                                <span>{item.tag}</span>
                            </Link>
                        ))}
                    </details>
                    <details>
                        <summary>Commands DML</summary>
                        {ComandDML.map((item, index) => (
                            <Link key={index} to={item.route}>
                                <span>{item.tag}</span>
                            </Link>
                        ))}
                    </details>
                    <details>
                        <summary>Commands DQL</summary>
                        {ComandDQL.map((item, index) => (
                            <Link key={index} to={item.route}>
                                <span>{item.tag}</span>
                            </Link>
                        ))}
                    </details>
                    <details>
                        <summary>Commands TCL</summary>
                        {ComandTCL.map((item, index) => (
                            <Link key={index} to={item.route}>
                                <span>{item.tag}</span>
                            </Link>
                        ))}
                    </details>
                    <summary className={Styles.btnvoltar}>
                        <Link to="/conteudo"><span className={Styles.btnvoltar}>&larr; Voltar</span></Link>
                    </summary>
                </div>
                <div className={Styles.main}>
                    <div className={Styles.container_text}>
                        <h2>O que é SQL?</h2>
                        <p>SQL (Structured Query Language) é uma linguagem de programação padrão usada para gerenciar e manipular bancos de dados relacionais. Através de comandos SQL, é possível realizar diversas operações em bancos de dados, como consultas, inserções, atualizações e exclusões de dados.</p>

                        <h2>Principais Comandos SQL</h2>
                        <p>Os comandos SQL são categorizados em diferentes grupos, cada um com uma finalidade específica:</p>
                        <ol>
                            <li><strong>DDL (Data Definition Language):</strong> Comandos que definem a estrutura do banco de dados. Exemplos incluem <code>CREATE</code>, <code>ALTER</code> e <code>DROP</code>.</li>
                            <li><strong>DML (Data Manipulation Language):</strong> Comandos que manipulam os dados no banco de dados. Exemplos incluem <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code> e <code>DELETE</code>.</li>
                            <li><strong>DCL (Data Control Language):</strong> Comandos que controlam o acesso aos dados. Exemplos incluem <code>GRANT</code> e <code>REVOKE</code>.</li>
                            <li><strong>TCL (Transaction Control Language):</strong> Comandos que gerenciam transações no banco de dados. Exemplos incluem <code>COMMIT</code>, <code>ROLLBACK</code> e <code>SAVEPOINT</code>.</li>
                        </ol>

                        <h2>Exemplos Detalhados de Comandos SQL</h2>

                        <h3>Comando <code>SELECT</code></h3>
                        <p><strong>Propósito:</strong> Usado para consultar e recuperar dados de um banco de dados.</p>

                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>{`SELECT * FROM clientes;`}</pre>
                            </div>
                        </div>
    
                        <p><strong>Explicação Detalhada:</strong> Este comando <code>SELECT</code> recupera todos os registros da tabela "clientes". O asterisco (<code>*</code>) é usado para selecionar todas as colunas da tabela.</p>

                        <h3>Comando <code>INSERT</code></h3>
                        <p><strong>Propósito:</strong> Usado para inserir novos dados em uma tabela.</p>

                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>{`INSERT INTO clientes (nome, idade) VALUES ('João', 30);`}</pre>
                            </div>
                        </div>
                        
                        <p><strong>Explicação Detalhada:</strong> Este comando <code>INSERT</code> adiciona um novo registro na tabela "clientes" com os valores "João" para a coluna "nome" e 30 para a coluna "idade".</p>
                        
                        <h3>Comando <code>UPDATE</code></h3>
                        <p><strong>Propósito:</strong> Usado para atualizar dados existentes em uma tabela.</p>
                        
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>{`UPDATE clientes SET idade = 31 WHERE nome = 'João';`}</pre>
                            </div>
                        </div>
                        
                        <p><strong>Explicação Detalhada:</strong> Este comando <code>UPDATE</code> modifica o valor da coluna "idade" para 31 onde o valor da coluna "nome" é "João".</p>
                        
                        <h3>Comando <code>DELETE</code></h3>
                        <p><strong>Propósito:</strong> Usado para excluir dados de uma tabela.</p>
                        
                        <div className={Styles.codigoPrint}>
                            <div className={Styles.containerBol}>
                                <div className={Styles.boll1}></div>
                                <div className={Styles.boll2}></div>
                                <div className={Styles.boll3}></div>
                            </div>
                            <div className={Styles.codigo}>
                                <pre>{`DELETE FROM clientes WHERE nome = 'João';`}</pre>
                            </div>
                        </div>
                        
                        <p><strong>Explicação Detalhada:</strong> Este comando <code>DELETE</code> remove o registro da tabela "clientes" onde o valor da coluna "nome" é "João".</p>
                        
                        <h3>Considerações Finais:</h3>
                        <p>SQL é uma linguagem poderosa para a gestão de bancos de dados relacionais, permitindo que você crie, leia, atualize e exclua dados de maneira eficiente. O uso adequado de comandos SQL é fundamental para o bom funcionamento de sistemas que dependem de bancos de dados.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Pagesql
