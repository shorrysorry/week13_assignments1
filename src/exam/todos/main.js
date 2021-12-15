const input = document.querySelector(".input-todo");
const items = [
  { 
    id: 1, 
    content: 'HTML', 
    completed: true 
  },
  { 
    id: 2, 
    content: 'CSS', 
    completed: true 
  },
  { 
    id: 3, 
    content: 'Javascript', 
    completed: false 
  } 
];

let todoList = items.map(item => item.content);
setTimeout(() => showList(), 1000);


input.onchange = () => {
    let value = input.value;
    if( value != null ) {
        todoList.push(value); 
        input.value = "";
        let item = {
            id: todoList.indexOf(value) +1,
            content: value,
            completed: false,
        }
        items.push(item);
    }
    showList();
}

function showList() {
    let li = "";
    for (let i = 0; i < todoList.length; i++ ) {
    let check = items[i].completed ? "checked" : "";
    li += `
     <li class="list">
      <label>
        <input id ="${i}" class="check" type="checkbox" ${check}>${todoList[i]}
      </label>
      <span class="remove" id="${i}">X</span>
     </li>
    `
    document.querySelector(".todos").innerHTML = li;
    }

    let checkList = document.querySelectorAll(".check");
    for (let i = 0; i < checkList.length; i++) {
        checkList[i].addEventListener("click", toggleList);
    }

    let deleteList = document.querySelectorAll(".remove");
    for (let i = 0; i < deleteList.length; i++) {
        deleteList[i].addEventListener("click", removeList);
    }

  console.log(items);
}

function toggleList() {
    let id = this.getAttribute("id");
    items[id].completed = !items[id].completed;
    showList();
}

function removeList() {
    let id = this.getAttribute("id");
    todoList.splice(id, 1);
    items.splice(id, 1);
    showList();
}