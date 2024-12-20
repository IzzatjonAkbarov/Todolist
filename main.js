const form = document.getElementById("form");
const Task = document.getElementById("Task");
window.addEventListener("DOMContentLoaded", functionaddin);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  toDo();
});
function toDo() {
  const getdata = JSON.parse(localStorage.getItem("todo")) || [];

  let input = form.input.value;
  if (input.trim() === "") {
    return;
  }
  const newdata = [...getdata, input];

  localStorage.setItem("todo", JSON.stringify(newdata));
  form.input.value = "";
  add(input);
}
function functionaddin() {
  const getdata = JSON.parse(localStorage.getItem("todo")) || [];
  getdata.forEach((value) => add(value));
}
function add(task) {
  const div = document.createElement("div");
  div.classList.add("task_item");
  div.innerHTML = `<span> ${task} </span>
            <div class="Edit_delete">
             <button onclick="editing('${task}')">Edit</button>
      <button onclick="tododelete('${task}')">Delete</button>
            </div>`;
  Task.append(div);
}
function tododelete(task) {
  let getdata = JSON.parse(localStorage.getItem("todo")) || [];
  getdata = getdata.filter((t) => t !== task);
  localStorage.setItem("todo", JSON.stringify(getdata));
  Task.innerHTML = "";
  functionaddin();
}
function editing(params) {
  const newedit = prompt("iltimos tahrirlang ", params);
  if (newedit === null || newedit.trim() === "") return;
  let gettingdata = JSON.parse(localStorage.getItem("todo")) || [];
  const idx = gettingdata.indexOf(params);
  if (idx !== -1) {
    gettingdata[idx] = newedit;
    localStorage.setItem("todo", JSON.stringify(gettingdata));
    Task.innerHTML = "";
    loadTasks();
  }
}

// const form = document.getElementById("form");
// const Task = document.getElementById("Task");

// // Sahifani yangilaganda localStorage'dan ma'lumotlarni yuklash
// window.addEventListener("DOMContentLoaded", loadTasks);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   toDo();
// });

// function toDo() {
//   const getdata = JSON.parse(localStorage.getItem("todo")) || [];

//   let input = form.input.value;
//   if (input.trim() === "") return; // Bo'sh ma'lumot kiritilishiga yo'l qo'ymaslik
//   const newdata = [...getdata, input];

//   localStorage.setItem("todo", JSON.stringify(newdata));
//   form.input.value = ""; // Input maydonini tozalash
//   renderTask(input); // Yangi qo'shilgan vazifani ko'rsatish
// }

// function loadTasks() {
//   const getdata = JSON.parse(localStorage.getItem("todo")) || [];
//   getdata.forEach((task) => renderTask(task));
// }

// function renderTask(task) {
//   const div = document.createElement("div");
//   div.classList.add("task_item");
//   div.innerHTML = `
//     <span>${task}</span>
//     <div class="Edit_delete">
//       <button onclick="editTask('${task}')">Edit</button>
//       <button onclick="deleteTask('${task}')">Delete</button>
//     </div>`;
//   Task.append(div);
// }

// function deleteTask(task) {
//   let getdata = JSON.parse(localStorage.getItem("todo")) || [];
//   getdata = getdata.filter((t) => t !== task); // Taskni o'chirish
//   localStorage.setItem("todo", JSON.stringify(getdata));
//   Task.innerHTML = ""; // Hamma elementlarni tozalash
//   loadTasks(); // Yangilangan vazifalarni yuklash
// }

// function editTask(oldTask) {
//   const newTask = prompt("Edit your task:", oldTask);
//   if (newTask === null || newTask.trim() === "") return; // O'chirish yoki bekor qilish
//   let getdata = JSON.parse(localStorage.getItem("todo")) || [];
//   const index = getdata.indexOf(oldTask);
//   if (index !== -1) {
//     getdata[index] = newTask;
//     localStorage.setItem("todo", JSON.stringify(getdata));
//     Task.innerHTML = ""; // Hamma elementlarni tozalash
//     loadTasks(); // Yangilangan vazifalarni yuklash
//   }
// }
