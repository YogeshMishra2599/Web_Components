require('dotenv').config();
const Pool = require('pg').Pool;

const pool = new Pool({
    host: process.env.pg_host,
    port: process.env.pg_port,
    user: process.env.pg_user,
    database: process.env.pg_db,
    password: process.env.pg_password
});

module.exports = pool;
