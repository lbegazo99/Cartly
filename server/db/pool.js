const {Pool} = require("pg")

module.exports = new Pool({
    host:"localhost",
    user:"postgres",
    database:"postgres",
    password:process.env.DATABASE_PASSWORD,
    port:5431
})