const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME || process.env.DB_USER, // รองรับทั้งสองชื่อ
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE || process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: process.env.DB_SSL === 'true'
    }
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to TiDB:', err);
        return;
    }
    console.log('Connected to TiDB Cloud!');
});

module.exports = connection;