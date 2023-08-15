
let tasks = [];
class task{
    constructor(id, title, status){
        this.id = id;
        this.title = title;
        this.status = status;
    }
}
function randomId(){
    return  Math.floor(Math.random() * 9999);
}
class taskList{
    constructor(){
        this.tasks = [];
    }

    addTask(task){
        this.tasks.push(task);
    }
}

function showForm() {
    let msg = "";

    msg += `<div id="box2">
    <div class="form">
        <div class="div-form">
            <span id="task">${this.title}</span>
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
    </div>`
        
    ;

    document.getElementById("hidden").innerHTML = msg;
}



function createTask(){
    let title = document.getElementById("areabox1").value;
    let showTask = new task (randomId(), title, false);

    
    document.getElementById("areabox1").value = "";
    console.log(showTask);


    showForm();
}

