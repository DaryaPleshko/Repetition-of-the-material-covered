const { pool } = require('../db');

class UserRepository {
    getAllUsersDB = async () => {
        const client = await pool.connect();
        try {
            const sql = `SELECT users.id, users.name, users.surname, users.email, tasks.task
                        FROM users
                        LEFT JOIN tasks ON users.id = tasks.user_id
                        ORDER BY users.id `;
            const result = await client.query(sql);
            return result.rows;
        } catch (error) {
            await client.query('ROLLBACK');
            throw new Error(error.message);
        } finally {
            client.release();
        }
    };

    getUserByIdDB = async (id) => {
        const client = await pool.connect();
        try {
            const userSql = 'SELECT id, name, surname, email FROM users WHERE id = $1';
            const userResult = await client.query(userSql, [id]);
            if (!userResult.rows.length) throw new Error('Пользователь не найден');
            const user = userResult.rows[0];

            const tasksSql = 'SELECT id, task FROM tasks WHERE user_id = $1 ORDER BY id';
            const tasksResult = await client.query(tasksSql, [id]);

            user.tasks = tasksResult.rows;
            return user;
        } catch (error) {
            await client.query('ROLLBACK');
            throw new Error(error.message);
        } finally {
            client.release();
        }
    }

    updateUserByIdDB = async (id, name, surname, email, pwd) => {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            const sql = `UPDATE users SET name = $1, surname = $2, email = $3, pwd = $4 
                         WHERE id = $5 
                         RETURNING id, name, surname, email`;
            const result = await client.query(sql, [name, surname, email, pwd, id]);
            if (!result.rows.length) throw new Error('Пользователь не найден');

            const user = result.rows[0];

            const tasksSql = 'SELECT id, task FROM tasks WHERE user_id = $1 ORDER BY id';
            const tasksResult = await client.query(tasksSql, [id]);
            user.tasks = tasksResult.rows;

            await client.query('COMMIT');
            return user;
        } catch (error) {
            await client.query('ROLLBACK');
            throw new Error(error.message);
        } finally {
            client.release();
        }
    }

    partialUpdateUserByIdDB = async (id, updates) => {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            const keys = Object.keys(updates);
            const values = Object.values(updates);

            const setString = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');

            const sql = `UPDATE users SET ${setString} WHERE id = $${keys.length + 1} 
                        RETURNING id, name, surname, email`;
            const result = await client.query(sql, [...values, id]);
            if (!result.rows.length) throw new Error('Пользователь не найден');

            const user = result.rows[0];

            const tasksSql = 'SELECT id, task FROM tasks WHERE user_id = $1 ORDER BY id';
            const tasksResult = await client.query(tasksSql, [id]);
            user.tasks = tasksResult.rows;

            await client.query('COMMIT');
            return user;
        } catch (error) {
            await client.query('ROLLBACK');
            throw new Error(error.message);
        } finally {
            client.release();
        }
    }

    deleteUserByIdDB = async (id) => {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            const sql = 'DELETE FROM users WHERE id = $1 RETURNING id, name, surname, email';
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