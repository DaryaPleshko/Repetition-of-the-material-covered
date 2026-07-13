const { pool } = require('../db');
const bcrypt = require('bcrypt');
const salt = 9;

class UserRepository {
    getAllUserDB = async () => {
        const client = await pool.connect();
        try {
            const sql = `SELECT * FROM users`;
            const result = await client.query(sql);
            return result.rows;
        } catch (error) {
            throw new Error(error.message);
        } finally {
            client.release();
        }
    };

    getUserByIdDB = async (id) => {
        const client = await pool.connect();
        try {
            const sql = `SELECT * FROM users
                        WHERE id = $1`;
            const result = await client.query(sql, [id]);
            if (!result.rows.length) {
                throw new Error('Пользователь не найден');
            }
            return result.rows[0];
        } catch (error) {
            throw new Error(error.message);
        } finally {
            client.release();
        }
    }

    registrationDB = async (name, surname, email, pwd) => {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            const hashedPwd = await bcrypt.hash(pwd, salt);

            const sql = `INSERT INTO users (name, surname, email, pwd) 
                     VALUES ($1, $2, $3, $4) RETURNING *`;
            const result = await client.query(sql, [name, surname, email, hashedPwd]);

            await client.query('COMMIT');
            return result.rows[0];
        } catch (error) {
            await client.query('ROLLBACK');
            throw new Error(error.message);
        } finally {
            client.release();
        }
    }

    authorizationDB = async (email, pwd) => {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            const sql = `SELECT * FROM users WHERE email = $1`;
            const result = await client.query(sql, [email]);

            if (!result.rows.length) throw new Error('Неверный email или пароль');

            const user = result.rows[0];
            const isPasswordValid = await bcrypt.compare(pwd, user.pwd);
            if (!isPasswordValid) throw new Error('Неверный email или пароль');

            await client.query('COMMIT');
            return result.rows[0];
        } catch (error) {
            await client.query('ROLLBACK');
            throw new Error(error.message);
        } finally {
            client.release();
        }
    }

    updateUserDB = async (id, name, surname, email, pwd) => {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            const hashedPwd = await bcrypt.hash(pwd, salt);

            const sql = `UPDATE users SET name = $1, surname = $2, email = $3, pwd = $4 WHERE id = $5 RETURNING *`;
            const result = await client.query(sql, [name, surname, email, hashedPwd, id]);
            if (!result.rows.length) throw new Error('Пользователь не найден');

            await client.query('COMMIT');
            return result.rows[0];
        } catch (error) {
            await client.query('ROLLBACK');
            throw new Error(error.message);
        } finally {
            client.release();
        }
    }

    partialUpdateUserDB = async (id, updates) => {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            if (updates.pwd) {
                updates.pwd = await bcrypt.hash(updates.pwd, salt);
            }

            const keys = Object.keys(updates);
            const values = Object.values(updates);

            const setString = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');

            const sql = `UPDATE users SET ${setString} WHERE id = $${keys.length + 1} RETURNING *`;
            const result = await client.query(sql, [...values, id]);

            if (!result.rows.length) throw new Error('Пользователь не найден');

            await client.query('COMMIT');
            return result.rows[0];
        } catch (error) {
            await client.query('ROLLBACK');
            throw new Error(error.message);
        } finally {
            client.release();
        }
    }

    deleteUserDB = async (id) => {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            const sql = 'DELETE FROM users WHERE id = $1 RETURNING *';
            const result = await client.query(sql, [id]);
            if (!result.rows.length) throw new Error('Пользователь не найден');

            await client.query('COMMIT');
            return result.rows[0];
        } catch (error) {
            await client.query('ROLLBACK');
            throw new Error(error.message);
        } finally {
            client.release();
        }
    }
}

const userRepository = new UserRepository();
module.exports = userRepository;