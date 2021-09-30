let completedCount = 0;
// array and index
const toDoArray = [];
let index = 0;
// Html element
const button = document.querySelector("button");
const input = document.querySelector("input");
const toDoList = document.querySelector("#toDoList");
const completedTasks = document.querySelector("p");
const inputCheck = document.querySelector("h2")

button.addEventListener("click", function() {
// Get the value and create list and span tag
const toDoTask = input.value;
    if(toDoTask.length == 0){
        inputCheck.innerText = "You must write someting";
    }
    else{
        inputCheck.innerText = "";
    }
// Create li and span tags
const task = document.createElement("li");
const taskText = document.createElement("span");
taskText.innerText = toDoTask;
const removeTask = document.createElement("span");
removeTask.innerHTML = "&#x1F5D1;";
removeTask.setAttribute("class", "removeTask");


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

removeTask.addEventListener("click", function(){
    
});
// create a object with the li and span tag
let toDoObj = {
    "li": task,
    "span": taskText,
    "remove": removeTask,
    "checked": false,
    "index": index
};
//push the objekt into the array
toDoArray.push(toDoObj);
console.log(toDoArray);

// Add the list and text to the html page
toDoList.appendChild(toDoArray[index].li);
task.appendChild(toDoArray[index].span);
task.appendChild(toDoArray[index].remove);
index ++;

console.log(completedCount);
input.value = "";
})


