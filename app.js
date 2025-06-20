const inputBox = document.getElementById("input-box");//here we are targetting the input box element//
const listContainer = document.getElementById("list-container");//here we are targeting the list container element//
function addTask() {//creating a function to add a new task//
  if (inputBox.value === "") {//if the input box is empty, alert the user to write something//
    alert("you must write something!");
  } else {
    let li = document.createElement("li");//creating a new list item//
    li.innerHTML = inputBox.value;//adding the input box value to the list item//
    listContainer.appendChild(li);//adding the list item to the list container//
    let span = document.createElement("span");//adding a span element for the cross button//
    span.innerHTML = "\u00d7";//adding the cross button to the span element//
    li.appendChild(span);//adding the span element to the list item//
  }
  inputBox.value = " ";//clearing the input box after adding a new task//
  saveData();//saving the updated list container to local storage//
}

listContainer.addEventListener(//adding a click event listener to the list container//
  "click",
  function (e) {//if the clicked element is a list item or the cross button//
    if (e.target.tagName === "LI") {//if the clicked element is a list item//
      e.target.classList.toggle("checked");//toggle the checked class for the list item//
      saveData();
    } else if (e.target.tagName === "SPAN") {//if the clicked element is the cross button//
      e.target.parentElement.remove();//remove the list item from the list container//
      saveData();
    }
  },
  false
);

function saveData() {//creating a function to save the updated list container to local storage//
  localStorage.setItem("data", listContainer.innerHTML);//saving the updated list container to local storage//
}
function showTask() {//creating a function to load the list container from local storage//
  listContainer.innerHTML = localStorage.getItem("data");//loading the updated list container from local storage//
}
showTask();
