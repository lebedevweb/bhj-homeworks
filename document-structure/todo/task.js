'use strict';

const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const taskRemove = document.getElementsByClassName("task__remove");
const tasksButton = document.getElementById('tasks__add');
const taskForm = document.forms['tasks__form'];
function add() {
  taskForm.onsubmit = (event) => event.preventDefault();
  if(taskInput.value.trim() !== ""){
    tasksList.insertAdjacentHTML("afterbegin", `<div class="task">
             <div class="task__title">
               ${taskInput.value}
             </div>
             <a href="#" class="task__remove">&times;</a>
             </div>`);

  };
  taskRemove[0].addEventListener('click', (event) => {
    event.currentTarget.parentNode.remove();
  });
  taskInput.value = "";
}

tasksButton.onclick = () => {
  add()};

taskInput.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    event.preventDefault();
    add()
  }})
