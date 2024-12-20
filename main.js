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
    return (document.getElementById("error").style.display = "block");
  } else {
    document.getElementById("error").style.display = "none";
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
  const newedit = prompt(" tahrirlash mumkin ", params);
  if (newedit === null || newedit.trim() === "") {
    return alert("bo'sh joy bilan tahrirlash mumkin emas");
  } else {
  }
  let gettingdata = JSON.parse(localStorage.getItem("todo")) || [];
  const idx = gettingdata.indexOf(params);
  if (idx !== -1) {
    gettingdata[idx] = newedit;
    localStorage.setItem("todo", JSON.stringify(gettingdata));
    Task.innerHTML = "";
    functionaddin();
  }
}
