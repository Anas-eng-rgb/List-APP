const formTasks = document.getElementById('tasks__form');
const submitInput = document.getElementById('submit');
const taskTitle = document.getElementById('text');
let taskContainer = [];


formTasks.addEventListener('submit' , (e) => {
  e.preventDefault();
})


//Local Storage
if(localStorage.getItem('tasks')) {
  taskContainer = JSON.parse(localStorage.getItem('tasks'));
  displayTask();
}


//Function Push Tasks
function pushTasks() {
    const task = {
      title: taskTitle.value,
    }
    taskContainer.push(task);
    localStorage.setItem('tasks' , JSON.stringify(taskContainer));
    displayTask();
    clearInput();
}
submitInput.addEventListener('click' , pushTasks);


//Function Display Tasks
function displayTask() {
  let task = ``;
  for(let i = 0 ; i < taskContainer.length ; i++) {
    task += `
    <tr>
      <td>${taskContainer[i].title}</td>
      <td><button class="btn btn-info btn-edit">Edit</button></td>
      <td><button onclick="deleteTask(${i})" class="btn btn-danger">Delete</button></td>
    </tr>
    `;
  }
  document.getElementById('show').innerHTML = task;
}

//Edit Task
const editBtn = document.querySelectorAll('.btn-edit');
editBtn.forEach((btn) => {
  btn.addEventListener('click' , function(){
    let tasks = btn.parentElement.previousElementSibling.textContent;
    taskTitle.value = tasks;
    submitInput.value = 'Update';
    submitInput.classList.remove('bg-success');
    submitInput.classList.add('bg-info');
  });
});


//Function Clear Inputs
function clearInput() {
  taskTitle.value = '';
}


//Delete Tasks 
function deleteTask(taskIndex) {
  for(let i = 0 ; i < taskContainer.length ; i++) {
    taskContainer.splice(taskIndex , 1);
  }
  localStorage.setItem('tasks' , JSON.stringify(taskContainer));
  displayTask();
}


//Set Data 
let x = 0;
function setTask(taskIndex) {
  x = taskIndex;
  taskTitle.value = taskContainer[taskIndex].taskTitle;
}


//Edit Task
function editTask() {
  taskContainer[x].taskTitle = taskTitle.value;
  localStorage.setItem('products' , JSON.stringify(taskContainer));
  displayTask();
  clearInput();
}



//const taskContainer = JSON.parse(localStorage.getItem('tasks-list')) ?? [];

/*taskContainer.forEach((item) => {
    taskContent.innerHTML += `
    <tr>
      <td>${taskTitle.value}</td>
      <td><button class="btn btn-info">Edit</button></td>
      <td><button class="btn btn-danger">Delete</button></td>
    </tr>
    `;
    taskContainer.push({id: parseInt(Math.random() * 10000), title: taskTitle.value});
    localStorage.setItem('tasks-list' , JSON.stringify(taskContainer));
    taskTitle.value = '';
})


formTasks.addEventListener('submit' , (e) => {
    e.preventDefault();
    taskContent.innerHTML += `
    <tr>
      <td>${taskTitle.value}</td>
      <td><button class="btn btn-info">Edit</button></td>
      <td><button class="btn btn-danger">Delete</button></td>
    </tr>
    `;
    taskContainer.push({id: parseInt(Math.random() * 10000), title: taskTitle.value});
    localStorage.setItem('tasks-list' , JSON.stringify(taskContainer));
    taskTitle.value = '';
});
*/

