
// array and index
const toDoArray = [];
let index = 0;
// Html element
const button = document.querySelector("button");
const input = document.querySelector("input");
const toDoList = document.querySelector("#toDoList");


button.addEventListener("click", function() {
// Get the value and create list and span tag
const toDoTask = input.value;
const task = document.createElement("li");
const taskText = document.createElement("span");
taskText.innerText = toDoTask;
// create a object with the li and span tag
let toDoObj = {
    "li": task,
    "span": taskText
};
//push the objekt into the array
toDoArray.push(toDoObj);
console.log(toDoArray);

// Add the list and text to the html page
toDoList.appendChild(toDoArray[index].li);
task.appendChild(toDoArray[index].span);
index ++;

})


