const { pool } = require('../db');

class TaskRepository {
    getAllTaskDB = async () => {
        const client = await pool.connect();
        try {
            const sql = `
                SELECT 
                    tasks.id,
                    tasks.task,
                    tasks.user_id,
                    users.name,
                    users.surname
                FROM tasks
                JOIN users ON tasks.user_id = users.id
                ORDER BY tasks.id
            `;
            const result = await client.query(sql);
            return result.rows;
        } finally {
            client.release();
        }
    };

    getTaskByIdDB = async (id) => {
        const client = await pool.connect();
        try {
            const sql = `
                SELECT 
                    tasks.id,
                    tasks.task,
                    tasks.user_id,
                    users.name,
                    users.surname
                FROM tasks
                JOIN users ON tasks.user_id = users.id
                WHERE tasks.id = $1
            `;
            const result = await client.query(sql, [id]);
            if (!result.rows.length) {
                throw new Error('Задача не найдена');
            }
            return result.rows[0];
        } finally {
            client.release();
        }
    }

    createdTaskDB = async (task, user_id) => {
        const client = await pool.connect();
        try {
            const sql = `INSERT INTO tasks (task, user_id) VALUES ($1, $2) RETURNING *`;
            const result = await client.query(sql, [task, user_id]);
            return result.rows[0];
        } finally {
            client.release();
        }
    };

    updateTaskByIdDB = async (id, task) => {
        const client = await pool.connect();
        try {
            const sql = `UPDATE tasks SET task = $1 WHERE id = $2 RETURNING *`;
            const result = await client.query(sql, [task, id]);
            if (!result.rows.length) {
                throw new Error('Задача не найдена');
            }
            return result.rows[0];
        } finally {
            client.release();
        }
    }

    partialUpdateTaskByIdDB = async (id, updates) => {
        const client = await pool.connect();
        try {
            const keys = Object.keys(updates);
            const values = Object.values(updates);
            
            const setString = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');
            
            const sql = `UPDATE tasks SET ${setString} WHERE id = $${keys.length + 1} RETURNING *`;
            const result = await client.query(sql, [...values, id]);
            
            if (!result.rows.length) {
                throw new Error('Задача не найдена');
            }
            return result.rows[0];
        } finally {
            client.release();
        }
    }

    deleteTaskByIdDB = async (id) => {
        const client = await pool.connect();
        try {
            const sql = 'DELETE FROM tasks WHERE id = $1 RETURNING *';
            const result = await client.query(sql, [id]);
            if (!result.rows.length) {
                throw new Error('Задача не найдена');
            }
            return result.rows[0];
        } finally {
            client.release();
        }
    }
}

const taskRepository = new TaskRepository();
module.exports = taskRepository;