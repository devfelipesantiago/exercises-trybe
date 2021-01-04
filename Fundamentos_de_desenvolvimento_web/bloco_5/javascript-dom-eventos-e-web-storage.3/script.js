window.onload = function () {
  createDaysOfTheWeek();
  createDaysOfMonth();
  buttonHoliday("Feriados");
  clickToColor();
  buttonFriday("Sexta-feira");
  clickFriday();
  zoomDayOn();
  zoomDayOff();
  customTask('Games!');
  legendTask('green');
  paintTask('green');
  colorDay();
};
const dezDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}
function createDaysOfMonth() {
  let days = document.querySelector("#days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = document.createElement("li");
    day.textContent = dezDaysList[index];
    day.className = "day";
    days.appendChild(day);

    if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
      day.className = "day holiday";
    }
    if (
      dezDaysList[index] === 4 ||
      dezDaysList[index] === 11 ||
      dezDaysList[index] === 18
    ) {
      day.className = "day friday";
    }
    if (dezDaysList[index] === 25) {
      day.className = "day holiday friday";
    }
  }
}

function buttonHoliday(parament) {
  let button = document.createElement("button");
  button.textContent = parament;
  button.id = "btn-holiday";

  let btnCont = document.querySelector(".buttons-container");
  btnCont.appendChild(button);
}
function clickToColor() {
  let btnHoliday = document
    .querySelector("#btn-holiday")
    .addEventListener("click", clickToColor);
  let holiday = document.querySelectorAll(".holiday");

  for (let index = 0; index < holiday.length; index++) {
    if (holiday[index].style.backgroundColor === "black") {
      holiday[index].style.backgroundColor = "rgb(238,238,238)";
    } else {
      holiday[index].style.backgroundColor = "black";
    }
  }
}

function buttonFriday(params) {
  let button = document.createElement("button");
  button.textContent = params;
  let bynContainer = document.querySelector(".buttons-container");
  bynContainer.appendChild(button);
  button.id = "btn-friday";
}

function clickFriday(string) {
  let friday = document
    .getElementById("btn-friday")
    .addEventListener("click", clickFriday);
  let fridayList = document.querySelectorAll(".friday");
  let oldDate = [4, 11, 18, 25];

  for (let index = 0; index < fridayList.length; index++) {
    if (fridayList[index].textContent === "Sexta-feira") {
      fridayList[index].textContent = oldDate[index];
    } else {
      fridayList[index].textContent = "Sexta-feira";
    }
  }
}

function zoomDayOn() {
  let dayZoom = document.querySelector("#days");
  dayZoom.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "40px";
    event.target.style.fontWeight = "600";
  });
}

function zoomDayOff() {
  let dayZoom = document.querySelector("#days");
  dayZoom.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200";
  });
}

function customTask(params) {
  let task = document.createElement('span');
  let myTask = document.querySelector('.my-tasks')
  task.innerText = params;
  myTask.appendChild(task);
}

function legendTask(color) {
  let divTask = document.createElement('div');
  let myTask = document.querySelector('.my-tasks');

  divTask.className = 'task';
  divTask.style.backgroundColor = color;
  myTask.appendChild(divTask);
}

function paintTask(color) {
  let selectedTask = document.querySelector('.task');
  
  selectedTask.addEventListener('click', function (event) {
    
    if (selectedTask.className === 'task') {
      selectedTask.className = 'task selected';
    } else {
      selectedTask.className = 'task';
    }
  })
}

function colorDay() {
  let paintDay = document.querySelector('#days');
  let divColor = document.querySelector('.task');
  
  function color(event) {
    if (divColor.className !== 'task selected') {
      event.target.style.color = 'rgb(119,119,119)';      
    } else {
      event.target.style.color = divColor.style.backgroundColor;
    }
  }
  paintDay.addEventListener('click', color)  
}
