document.addEventListener('DOMContentLoaded', function () {
  const inputField = document.querySelector('.task-input input');
  const addButton = document.querySelector('.add-button');
  const taskList = document.querySelector('.task-list');

  function updateTaskNumbers() {
    const tasks = document.querySelectorAll('.task-item');
    tasks.forEach((task, index) => {
      const text = task.textContent.replace('🗑️', '').trim();
      const newText = text.replace(/Task \d+/, `Task ${index + 1}`);
      task.innerHTML = `${newText} <button class="delete-btn">🗑️</button>`;
      task.querySelector('.delete-btn').addEventListener('click', function () {
        deleteTask(task);
      });
    });
  }

  addButton.addEventListener('click', function () {
    const taskText = inputField.value.trim();
    if (taskText === '') return;

    const tasks = document.querySelectorAll('.task-item');
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].textContent.includes(`Task ${i + 1}`)) {
        tasks[
          i
        ].innerHTML = `${taskText} <button class="delete-btn">🗑️</button>`;
        tasks[i]
          .querySelector('.delete-btn')
          .addEventListener('click', function () {
            deleteTask(tasks[i]);
          });
        inputField.value = '';
        return;
      }
    }
  });

  function deleteTask(taskItem) {
    taskItem.remove();
    updateTaskNumbers();
  }
});
