const knex = require('knex');
const dbConfig = require("./knexfile")


const client = knex(dbConfig.production)


module.exports = client;



