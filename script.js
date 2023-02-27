let thirdContainer = document.getElementById("thirdContainer");
let firstButton = document.getElementById("firstButton");
let secondButton = document.getElementById("secondButton");
const saveMessage = document.querySelector('.save-message');
const addTaskMessage = document.querySelector('.add-task-message');


secondButton.addEventListener('mouseover', () => {
  saveMessage.textContent = 'Click Save to save your tasks';
});

secondButton.addEventListener('mouseout', () => {
  saveMessage.textContent = '';
});


firstButton.addEventListener('mouseover', () => {
  addTaskMessage.textContent = 'Click Add Task to create your task';
});

firstButton.addEventListener('mouseout', () => {
  addTaskMessage.textContent = '';
})

function fun1() {
  let s1 = localStorage.getItem("t1");
  let s2 = JSON.parse(s1);
  if (s2 === null) {
      return [];
  } else {
      return s2;
  }
}

let t1 = fun1();
let c1 = t1.length;

secondButton.onclick = function() {
  localStorage.setItem("t1", JSON.stringify(t1));
};

function fun2() {
  let u1 = document.getElementById("firstInput");
  let u2 = u1.value;

  if (u2 === "") {
      alert("Enter Valid Text");
      return;
  }

  c1 = c1 + 1;

  let n1 = {
      text: u2,
      uniqueNo: c1,
      isChecked: false
  };
  t1.push(n1);
  fun4(n1);
  u1.value = "";
}

firstButton.onclick = function() {
  fun2();
};

function fun3(i1, i2) {
  let elem1 = document.getElementById(i1);
  let elem2 = document.getElementById(i2);
  elem2.classList.toggle("checked");

  let s3 = t1.findIndex(function(e1) {  //no change
      let i4 = "td" + e1.uniqueNo;

      if (i4 === i3) {
          return true;
      } else {
          return false;
      }
  });

  let i5 = t1[s3];

  if (i5.isChecked === true) {
      i5.isChecked = false;
  } else {
      i5.isChecked = true;
  }
}

function fun6(i3) {
  let elem3 = document.getElementById(i3);
  thirdContainer.removeChild(elem3);

  let elem4 = t1.findIndex(function(e1) {
      let i4 = "td" + e1.uniqueNo;
      if (i4 === i3) {
          return true;
      } else {
          return false;
      }
  });

  t1.splice(elem4, 1);
}

function fun4(td) {
  let i3 = "td" + td.uniqueNo;
  let i1 = "checkbox" + td.uniqueNo;
  let i2 = "label" + td.uniqueNo;

  let elem3 = document.createElement("li");
  elem3.classList.add("sixth-container", "d-flex", "flex-row");
  elem3.id = i3;
  thirdContainer.appendChild(elem3);

  let elem5 = document.createElement("input");
  elem5.type = "checkbox";
  elem5.id = i1;

  elem5.onclick = function() {
      fun3(i1, i2);
  };

  elem5.classList.add("second-input-for-checkbox");
  elem3.appendChild(elem5);


  let lc = document.createElement("div");
  lc.classList.add("fourth-container", "d-flex", "flex-row");
  elem3.appendChild(lc);

  let elem2 = document.createElement("label");
  elem2.setAttribute("for", i1);
  elem2.id = i2;
  elem2.classList.add("first-label-for-checkbox");
  elem2.textContent = td.text;
  lc.appendChild(elem2);

  let d = document.createElement("div");
  d.classList.add("fifth-container");
  lc.appendChild(d);

  let d1 = document.createElement("i");
  d1.classList.add("far", "fa-trash-alt", "icon-for-the-deleting-task");

  d1.onclick = function() {
      fun6(i3);
  };

  d.appendChild(d1);
}

for (let td of t1) {
  fun4(td);
}
