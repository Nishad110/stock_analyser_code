const express = require('express')
const conn = require('../dbs/mysqlConnection')
const router = express.Router()



router.get('/:stockname', (req, res) => {
    var stockname = req.params.stockname
    conn.query(`select * from STOCKS where Name='${stockname}';`,
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



