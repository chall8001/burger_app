const mysql = require('mysql')
//create connection object 
var connection 
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
connection = mysql.createConnection({
    host: 'localhost',
    port: 3306, 
    user: 'root',
    password: 'aRlo41ba',
    database: 'burgers_db'
})
}

//make connection
connection.connect((err) => {
    if (err){
        console.error(`error connecting: ${err.stack}`);
        return
    }
    console.log(`connected as id ${connection.threadId}`)
})

//export the connection
module.exports = connection 