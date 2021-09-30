
//Completed task
let completedCount = 0;

// array and index
const toDoArray = [];
let index = 0;

// Html elements
const button = document.querySelector("button");
const input = document.querySelector("input");
const toDoList = document.querySelector("#toDoList");
const completedTasks = document.querySelector("p");
const inputCheck = document.querySelector("h2")

// Add eventlisener and app functions
button.addEventListener("click", function() {
// Get the value and create list and span tag
const toDoTask = input.value;
    if(toDoTask.length == 0){
        inputCheck.innerText = "You must write someting";
        return
    }
   
// Create li and span html tags
const task = document.createElement("li");
toDoList.appendChild(task);
const taskText = document.createElement("span");
task.appendChild(taskText);
taskText.innerText = toDoTask;
const removeTask = document.createElement("span");
removeTask.innerHTML = "&#x1F5D1;";
removeTask.setAttribute("class", "removeTask");
task.appendChild(removeTask);

// Check uncheced function and completed counter
taskText.addEventListener("click", function(){
    if(toDoObj.checked == false){
    task.classList.toggle("checked");
    toDoObj.checked = true;
    completedCount++;
    }
    else{
        task.classList.toggle("checked");
        toDoObj.checked = false;
        completedCount--;   
    }
    
    completedTasks.innerText = `${completedCount} completed`;

});

// remove task function
removeTask.addEventListener("click", function(){
    task.remove();
    toDoArray.splice(toDoObj.index, 1);
    
});
// create a object with the li and span tag
let toDoObj = {
    "toDoText":toDoTask,
   "checked": false,
    "index": index
};
//push the objekt into the array and incress the index
toDoArray.push(toDoObj);
index ++;

// reset the input field
input.value = "";
})


