import db from "../connection/connect.js";
import { tableConfig } from "../config/database.js";

function createTable() {
    const { user } = tableConfig.tables
    db.query(`CREATE TABLE ${user}(id INT(15), firstname VARCHAR(256), lastname VARCHAR(256), middlename VARCHAR(256), email VARCHAR(256), password VARCHAR(64))`, (err, result) => {
        if (result) {
            console.log("Succesfully created table.", JSON.stringify(result));
            return result;
        } else {
            console.error(new Error(err));
            return err;
        }
    });
}
createTable();
