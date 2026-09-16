const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new_btn');

window.onload = function () {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('todo='));

    if (todoCookie) {
        try {
            const tasks = JSON.parse(decodeURIComponent(todoCookie.split('=')[1]));
            tasks.reverse().forEach(taskText => addTodo(taskText, false));
        } catch (e) {
            console.error("Cookie parsing error:", e);
        }
    }
};

function saveToCookie() {
    const tasks = [];
    const items = ftList.children;

    for (let i = 0; i < items.length; i++) {
        tasks.push(items[i].textContent);
    }

    document.cookie = "todo=" + encodeURIComponent(JSON.stringify(tasks)) + ";path=/;max-age=31536000";
}

function addTodo(text, shouldSave = true) {
    if (!text || text.trim() === '') return;

    const todoDiv = document.createElement('div');
    todoDiv.textContent = text;

    todoDiv.addEventListener('click', function () {
        if (confirm('Do you want to remove this TO DO?')) {
            todoDiv.remove();
            saveToCookie();
        }
    });

    ftList.insertBefore(todoDiv, ftList.firstChild);

    if (shouldSave) {
        saveToCookie();
    }
}

newBtn.addEventListener('click', function () {
    const taskText = prompt('Enter a new TO DO:');
    if (taskText !== null) {
        addTodo(taskText);
    }
});