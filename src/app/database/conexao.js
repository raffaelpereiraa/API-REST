import mysql from "mysql2"

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'processo1234',
    database: 'bdcopa'

})

conexao.connect()

//JSDOCS:
/**
 * Executa um código sql com o sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string = id | [selecao,id]} valores a serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da Promisse
 */

// Quando a gente coloca export na frente de const ou uma função ela também vai ser exportado quando vc fizer import desse arquivo em outro local
export const consulta = (sql, valores ='', mensagemReject) =>{
    return new Promise((resolve, reject) =>{
            conexao.query(sql, valores,  (erro, resultado) =>{
                if(erro) return reject(mensagemReject)

                
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
}

export default conexao