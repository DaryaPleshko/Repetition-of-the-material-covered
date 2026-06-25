const taskRepository = require('../repository/task.repository');

class TaskService {
    getAllTask = async () => {
        return await taskRepository.getAllTaskDB();
    }

    getTaskById = async (id) => {
        return await taskRepository.getTaskByIdDB(id);
    }

    createdTask = async (task, user_id) => {
        if (!task) throw new Error('Поле task обязательно');
        if (!user_id) throw new Error('Поле user_id обязательно');
        return await taskRepository.createdTaskDB(task, user_id);
    }

    updateTaskById = async (id, task) => {
        if (!task) throw new Error('Поле task обязательно');
        return await taskRepository.updateTaskByIdDB(id, task);
    }

    partialUpdateTaskById = async (id, updates) => {
        if (Object.keys(updates).length === 0) {
            throw new Error('Нет данных для обновления');
        }
        return await taskRepository.partialUpdateTaskByIdDB(id, updates);
    }

    deleteTaskById = async (id) => {
        return await taskRepository.deleteTaskByIdDB(id);
    }
}

const taskService = new TaskService();
module.exports = taskService;