const mysql = require('mysql')

const conn = mysql.createConnection({
    user : 'sql5435131',
    host : 'sql5.freesqldatabase.com',
    password : 'ipWPrQ9uBS',
    database : 'sql5435131'
});

module.exports = conn