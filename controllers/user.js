import { tableConfig } from '../config/database.js';
import db from '../connection/connect.js';
import { isEmailExist } from '../validator/userValidator.js';

export const viewTable = (req, res) => {
    const tablename = req.body.table_name;
    try {
        const queryString = `SELECT * FROM ${tablename}`;
        db.query(queryString, (err, result) => {
            if (!err) res.status(200).json({ data: result });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
}
export const getUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const queryString = `SELECT * FROM users WHERE id = ${userId}`;
        db.query(queryString, (err, result) => {
            if (!err) res.status(200).send(result);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
} 
export const addUser = (req, res) => {
    const { firstname, lastname, middlename, email, password } = req.body;
    try {
        const queryString = `INSERT INTO ${tableConfig.tables.user} (firstname, lastname, middlename, email, password) VALUES ('${firstname}', '${lastname}', '${middlename}', '${email}', '${password}')`;
        db.query(`SELECT id FROM users WHERE email=${email};`, (err, data) => {
            if (err) {
                db.query(queryString, (err, result) => {
                if (!err) res.status(200).json({ data: result, message: "Successfully added!" });
                });
            } else {
                res.status(500).json({ message: "Email already used!" });
            }
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
}
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await db.query(`DELETE FROM ${tableConfig.tables.user} WHERE id = ${id}`);
        if (result) res.status(200).json({ message: "Successfully deleted!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
}
export const updateUser = async (req, res) => {
    const { firstname, lastname, middlename } = req.body;
    const id = req.params.id;
    try {
        const result = await db.query(`UPDATE ${tableConfig.tables.user} SET firstname='${firstname}', middlename='${middlename}', lastname='${lastname}' WHERE id = ${id}`);
        if (result) res.status(200).json({ message: "Updated successfully!" });
    } catch(err){
        console.log(err);
        res.status(500).json({ error: err });
    }
}
export const test = (req, res) => {
    console.log(req.query);
    res.status(200).json({ message: "Route is working!" });
}
export const Search = async (req, res) => {
    const { field, keyword, limit } = req.query;
    console.log(req.query)
    try {
        const queryString = `SELECT * FROM users WHERE ${field} LIKE '%${keyword}%' LIMIT ${limit};`;
        db.query(queryString, (err, result) => {
            if(!err) res.status(200).json({ data: result });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
}
