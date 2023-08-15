class Task {
  constructor(id, title, status) {
    this.id = id;
    this.title = title;
    this.status = status;
  }
}
function randomId() {
  return Math.floor(Math.random() * 9999);
}
class TaskList {
  constructor() {
    this.tasksArray = [];
  }

  addTask(task){
    this.tasksArray.push(task);
  }
}

const tasks = new TaskList();

function createTask() {
  let title = document.getElementById("areabox1").value;
  let newTask = new Task(randomId(), title, false);

  tasks.addTask(newTask);

  document.getElementById("areabox1").value = "";
  

  showForm();
}

function showForm() {
  let msg = "";


  tasks.tasksArray.forEach(task => {
    msg += `
    <div id="box2">
        <div class="form">
            <div class="div-form">
                <span id="task">${task.title}</span>
            </div>
        
            <div class="btns">
                <button type="button" id="verify" class="btn2">
                    <i class="fa-solid fa-check"></i>
                </button>
                <button type="button" id="edit" class="btn2">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button type="button" id="delete" class="btn2">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    </div>`;
  })

  

  document.getElementById("hidden").innerHTML = msg;
}
