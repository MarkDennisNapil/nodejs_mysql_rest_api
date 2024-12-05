import mysql from 'mysql';
import { dbconfig } from '../config/database.js';
    
const db = mysql.createConnection(dbconfig);
db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

export default db;
