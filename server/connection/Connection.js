const mysql = require('promise-mysql');
var connectionString = process.env.DATABASE_URL

function connection(){
    const connection = mysql.createConnection(connectionString);

    connection.connect((err) => {
        if (err)
            res.status(500).json({code: 500, data: err.message});
    })
    return connection;
}

module.exports = connection;