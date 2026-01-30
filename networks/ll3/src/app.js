const getBTN = document.getElementById('getTaskBTN');
const createBTN = document.getElementById('createTaskBTN');
const deleteAllTaskBTN = document.getElementById('deleteAllTask');
const tasksContainer = document.querySelector('.tasks');

async function deleteTask(taskId, taskElement) {
    try {
        await fetch(`https://dummyjson.com/todos/${taskId}`, {method: 'DELETE'});
        taskElement.remove();
    } catch {
        taskElement.remove();
        alert('Задача удалена локально');
    }
}

getBTN.addEventListener('click', async () => {
    try {
        const response = await fetch('https://dummyjson.com/todos');
        const data = await response.json();
        const todos = data.todos;

        let html = '';
        for (let i = 0; i < todos.length; i++) {
            const taskId = todos[i].id;
            html += `
            <div class="task-item" id="task-${taskId}">
                <div>
                    <p><strong>Задача ${i+1}:</strong> ${todos[i].todo}</p>
                    <small>ID: ${taskId} | ${todos[i].completed ? '✅' : '❌'}</small>
                </div>
                <button class="delete-btn" data-id="${taskId}">Удалить</button>
            </div>`;
        }

        if (tasksContainer) {
            tasksContainer.innerHTML = html;
            
            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.onclick = (e) => {
                    const taskId = btn.getAttribute('data-id');
                    const taskElement = document.getElementById(`task-${taskId}`);
                    deleteTask(taskId, taskElement);
                };
            });
        }
    } catch {
        if (tasksContainer) tasksContainer.innerHTML = '<p style="color:red">Ошибка</p>';
    }
});

createBTN.addEventListener('click', async () => {
    const textTask = document.querySelector('textarea').value.trim();
    if (!textTask) {
        alert('Введите текст!');
        return;
    }

    const taskId = Date.now();
    const taskHTML = `
    <div class="task-item" id="task-${taskId}">
        <div>
            <p><strong>Новая задача:</strong> ${textTask}</p>
            <small>ID: ${taskId} | ❌</small>
        </div>
        <button class="delete-btn" data-id="${taskId}">Удалить</button>
    </div>`;

    if (tasksContainer) {
        tasksContainer.innerHTML = taskHTML + tasksContainer.innerHTML;
        
        const newBtn = tasksContainer.querySelector(`[data-id="${taskId}"]`);
        if (newBtn) {
            newBtn.onclick = () => {
                const taskElement = document.getElementById(`task-${taskId}`);
                deleteTask(taskId, taskElement);
            };
        }
    }

    document.querySelector('textarea').value = '';
});

deleteAllTaskBTN.addEventListener('click', () =>  tasksContainer.innerHTML = '');