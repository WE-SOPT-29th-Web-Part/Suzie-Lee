const dropdownBtn = document.querySelector(".nav__dropdown-btn");
const dropdownWrapper = document.querySelector(".nav__dropdown-wrapper");
const dropdownItems = document.querySelectorAll(".dropdown__item");
const selectedItem = document.querySelector(".selected-item");

dropdownBtn.addEventListener("click", () => {
  dropdownWrapper.classList.toggle("open");
});

dropdownItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    selectDropdownItem(item, index);
  });
});

function selectDropdownItem(item, selectedId) {
  let text = item.innerText;
  selectedItem.innerText = text;

  dropdownItems.forEach((dropdownItem, id) => {
    if (id === selectedId) {
      dropdownItem.classList.add("selected");
    } else {
      dropdownItem.classList.remove("selected");
    }
  });

  dropdownWrapper.classList.remove("open");
}

const cards = [...document.querySelectorAll(".card")];
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    toggleModal(card);
  });
});
const body = document.getElementsByTagName("body")[0];

function toggleModal(card) {
  const modalCard = card.cloneNode(true);
  const closeBtn = document.createElement("button");

  modalCard.classList.add("card__modal");
  modalCard.classList.remove("card");

  closeBtn.classList.add("modal__close");
  closeBtn.innerText = "X";

  modal.appendChild(modalCard);
  modal.appendChild(closeBtn);

  modal.classList.add("open");
  body.style.overflow = "hidden";

  closeBtn.addEventListener("click", () => {
    modal.removeChild(modalCard);
    modal.removeChild(closeBtn);
    modal.classList.remove("open");
    body.style.overflow = "scroll";
  });
}
