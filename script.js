function deleteTask(elId) {
    var element = document.getElementById(elId);
    element.remove();
}
function createTask() {
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.getElementById("taskName1").innerHTML = document.getElementById("taskInput").value;
    clon.getElementById('doneBtn').setAttribute( "onClick", "doneTask('task-no1', " + "'" + document.getElementById("taskInput").value + "'" + ")" );
    document.getElementsByClassName("taskList")[0].appendChild(clon);
    document.getElementById("taskInput").value = '';
}

function doneTask(elId, doneName) {
    var temp = document.getElementsByTagName("template")[1];
    var clon = temp.content.cloneNode(true);
    clon.getElementById("completedTask").innerHTML = doneName;
    var today = new Date();
    var time1 = today.getHours() + ":" + today.getMinutes();
    clon.getElementById("basic-addon2").innerHTML = time1;
    document.getElementsByClassName("completedTasks")[0].appendChild(clon);
    var element = document.getElementById(elId);
    element.remove();
}