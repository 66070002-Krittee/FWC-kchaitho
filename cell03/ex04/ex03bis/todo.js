$(document).ready(function () {
    loadFromCookie();

    $('#new_btn').click(function () {
        const taskText = prompt('Enter a new TO DO:');
        if (taskText !== null && taskText.trim() !== '') {
            addTodo(taskText.trim());
        }
    });

    function addTodo(text, shouldSave = true) {
        const $todoDiv = $('<div></div>').text(text);

        $todoDiv.click(function () {
            if (confirm('Do you want to remove this TO DO?')) {
                $(this).remove();
                saveToCookie();
            }
        });

        $('#ft_list').prepend($todoDiv);

        if (shouldSave) {
            saveToCookie();
        }
    }

    function saveToCookie() {
        const tasks = [];
        $('#ft_list div').each(function () {
            tasks.push($(this).text());
        });
        document.cookie = "todo=" + encodeURIComponent(JSON.stringify(tasks)) + ";path=/;max-age=31536000";
    }

    function loadFromCookie() {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let c = cookies[i].trim();
            if (c.indexOf("todo=") === 0) {
                try {
                    const tasks = JSON.parse(decodeURIComponent(c.substring(5)));
                    tasks.reverse().forEach(taskText => addTodo(taskText, false));
                } catch (e) {
                    console.error("Cookie parsing error:", e);
                }
                break;
            }
        }
    }
});