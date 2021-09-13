const express = require('express')
const conn = require('../dbs/mysqlConnection')
const router = express.Router()



router.get('/', (req, res) => {
    
    conn.query(`select Name as name,Id as id from STOCKS;`,
        (err, result) => {
            if (err) {
                console.log("Something went wrong",err)
            } else {
                res.send(result)
                //console.log("Success",result)
            }
                
        })
})

module.exports = router;



