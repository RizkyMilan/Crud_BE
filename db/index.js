import mysql from "mysql"

const db = mysql.createConnection({
user: "root",
password: "password",
port: 3306,
database: "task_management_system",
multipleStatements: false

})

export default db