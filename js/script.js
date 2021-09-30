let completedCount = 0;
// array and index
const toDoArray = [];
let index = 0;
// Html element
const button = document.querySelector("button");
const input = document.querySelector("input");
const toDoList = document.querySelector("#toDoList");
const completedTasks = document.querySelector("p");

button.addEventListener("click", function() {
// Get the value and create list and span tag
const toDoTask = input.value;
const task = document.createElement("li");
const taskText = document.createElement("span");
taskText.innerText = toDoTask;
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
// create a object with the li and span tag
let toDoObj = {
    "li": task,
    "span": taskText,
    "checked": false
};
//push the objekt into the array
toDoArray.push(toDoObj);
console.log(toDoArray);

// Add the list and text to the html page
toDoList.appendChild(toDoArray[index].li);
task.appendChild(toDoArray[index].span);
index ++;

console.log(completedCount);
input.value = "";
})


