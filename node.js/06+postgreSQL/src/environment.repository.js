const { pool } = require('./db');

class Repository {
    getAllEnvironmentDB = async () => {
        const client = await pool.connect();

        const sql = `SELECT * FROM skills`;
        const result = (await client.query(sql)).rows;

        if (!result.length) throw new Error('Array is empty');
        return result;
    };

    getEnvironmentByIdDB = async (id) => {
        const client = await pool.connect();

        const sql = `SELECT * FROM skills WHERE id = $1`;
        const result = (await client.query(sql, [id])).rows;

        if (!result.length) throw new Error(`id is empty`);
        return result;
    }

    createEnvironmentDB = async (label, category, priority) => {
        const client = await pool.connect();

        const sql = `INSERT INTO skills ( label, category, priority ) 
    VALUES ($1, $2, $3) RETURNING *`;
        const result = (await client.query(sql, [label, category, priority])).rows;

        return result;
    };

    updateEnvironmentDB = async (id, label, category, priority) => {
        const connect = await pool.connect();

        const sql = `UPDATE skills SET label = $1, category = $2, priority = $3 WHERE id = $4 RETURNING *`;
        const result = (await connect.query(sql, [label, category, priority, id])).rows;

        if (!result.length) throw new Error('incorrect value');
        return result;
    }

    deleteEnvironmentDB = async (id) => {
        const connect = await pool.connect();

        const sql = `DELETE FROM skills WHERE id = $1 RETURNING *`;
        const result = (await connect.query(sql, [id])).rows;

        if (!result.length) throw new Error('incorrect value');
        return result;
    }
}

const repository = new Repository();
module.exports = repository;