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
function createTask(){
    let title = document.getElementById("areabox1").value;
    let showTask = new task (randomId(), title, false);

    taskList.

    console.log(showTask);
    document.getElementById("areabox1").value = "";
}

