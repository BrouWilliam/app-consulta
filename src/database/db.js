const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./src/database/database.db')

module.exports = db
// db.serialize(() => {
//     // Criar tabela

//     db.run(`
//         CREATE TABLE IF NOT EXISTS medicos (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             specialty TEXT,
//             image TEXT,
//             address TEXT,
//             state TEXT,
//             city TEXT
//         );
//     `)
//     // Inserir Dados
//     const query =
//         `
//         INSERT INTO medicos (
//             name,
//             specialty,
//             image,
//             address,
//             state,
//             city
//         ) VALUES (?,?,?,?,?,?);
//     `
//     const values = [
//         "Marina Barbosa",
//         "Cardiologista",
//         "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         "Av. Paulista 00",
//         "São Paulo",
//         "SP"
//     ]

//     function afterInsertData(err){
//         if(err){
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//     //db.run(query, values, afterInsertData)
    
//     // Consultar os dados da tabela
//     // db.all(`SELECT * FROM medicos`, function(err,rows){

//     //     if(err){
//     //         return console.log(err)
//     //     }

//     //     console.log("Seus registros")
//     //     console.log(rows)
//     // })
//     // Deletar um dado da tabela

//     // db.run(`DELETE FROM medicos WHERE id = ?`, [], function(err){
//     //     if(err){
//     //         return console.log(err)
//     //     }

//     //     console.log("Registro deletado com sucesso")
//     // })
// })