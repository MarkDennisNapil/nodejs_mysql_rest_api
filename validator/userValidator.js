import db from "../connection/connect.js";
import { tableConfig } from "../config/database.js";

export const isEmailExist = async (email) => {
    const { users} = tableConfig.tables;
    db.query(`SELECT id FROM ${users} WHERE email = ${email}`, (err, result) => {
        if (!err) {
            return true;
        }
        else {
            return false;
        }
    });
}
