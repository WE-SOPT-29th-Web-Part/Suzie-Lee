"use strict";
//엄격모드
//1. add 버튼을 눌렀을 때. list가 추가되도록
//2. enter 키보드 키를 눌렀을 때 list가 추가되도록
//3. 쓰레기통을 누르면 지워지도록,
//4. 오늘만보기,내일만 보기,함께 보기 필터링 적용

// 우리가 조작해야할 html tag.
// .todos__input, todos__add, .todos_items

//DOM 요소를 가지고 오는 방법

const input = document.querySelector(".todos__input");
const addBtn = document.querySelector(".todos__add");
const items = document.querySelector(".todos__items");

addBtns.forEach((addBtn) => {
  //btn1, btn2 에 각각 addEventListener를 붙여준다
  addBtn.addEventListener("click", () => {
    onAdd();
  });
});
//1. add 버튼을 눌렀을 때. list가 추가되도록
//a. add 버튼을 눌렀을 때, input의 value를 가져오기
//b. 가져온 value를 바탕으로, list 만들기

addBtn.addEventListener("click", (index) => {
  if (!input[index].value) return;
  onAdd();
  //2개의 인수로 필요합니다. 처음은 이벤트명, 두번째는 이벤트가 감지되었을 때 실행할 (콜백)
  //2. enter 키보드 키를 눌렀을 때 list가 추가되도록
  //다양한 이벤트가 존재한다. click,keypress,scroll
});

input.addEventListener("keyup", (event) => {
  if (!input.value) return;
  if (event.key === "Enter") onAdd();
});

const onAdd = () => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const span = document.createElement("span");
  // tag를 만드는 과정

  li.setAttribute("class", "todos__item");
  span.setAttribute("class", "todos__name");
  deleteBtn.setAttribute("class", "todos__delete");
  // class 이름을 주는 과정

  deleteBtn.innerText = "X";
  // deleteBtn.setAttribute.src
  span.innerText = input.value;

  items.appendChild(li);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  input.value = "";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
};

//querySelectorAll을 통해서, 2개 요소를 다 가지고 와서,

const nav = document.querySelector(".options");
const todos = document.querySelector(".todos > section");

nav.addEventListener("click", () => {});
