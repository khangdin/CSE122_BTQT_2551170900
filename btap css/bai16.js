let tasks = [
    { text: "Hoàn thành bài tập lập trình web", completed: false }
];

const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');
const taskCounter = document.getElementById('task-counter');

function renderTasks() {
    taskList.innerHTML = '';
    
    let remainingCount = 0;
    tasks.forEach((task, index) => {
        if (!task.completed) {
            remainingCount++;
        }

        let li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.onclick = () => toggleTask(index);

        li.innerHTML = `
            <div class="task-content">
                <div class="custom-checkbox"></div>
                <span class="task-text">${task.text}</span>
            </div>
            <button class="delete-btn" onclick="deleteTask(event, ${index})">Xóa</button>
        `;

        taskList.appendChild(li);
    });

    taskCounter.innerText = `Còn lại ${remainingCount} việc chưa hoàn thành`;
}

function addNewTask() {
    let text = taskInput.value.trim();
    if (text === '') return;

    tasks.push({ text: text, completed: false });
    taskInput.value = '';
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(event, index) {
    event.stopPropagation();
    tasks.splice(index, 1);
    renderTasks();
}

addButton.addEventListener('click', addNewTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addNewTask();
    }
});

renderTasks();