const { pool } = require('../db');
const crypto = require('crypto');

class AuthRepository {
    registrationDB = async (name, surname, email, pwd) => {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            const checkSql = 'SELECT * FROM users WHERE email = $1';
            const checkResult = await client.query(checkSql, [email]);
            if (checkResult.rows.length > 0) throw new Error('Пользователь с таким email уже существует');

            const hashedPwd = crypto.createHash('sha256').update(pwd).digest('hex');

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
    };

    authorizationDB = async (email, pwd) => {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            const sql = 'SELECT * FROM users WHERE email = $1';
            const result = await client.query(sql, [email]);

            if (result.rows.length === 0) throw new Error('Пользователь не найден');

            const user = result.rows[0];

            const hashedPwd = crypto.createHash('sha256').update(pwd).digest('hex');
            if (user.pwd !== hashedPwd) throw new Error('Неверный пароль');

            await client.query('COMMIT');
            return user;
        } catch (error) {
            await client.query('ROLLBACK');
            throw new Error(error.message);
        } finally {
            client.release();
        }
    };
}

const authRepository = new AuthRepository();
module.exports = authRepository;