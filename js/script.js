// Variables for input
let inputName = document.querySelector(".add-link");
let inputDescription = document.querySelector(".add-description");

let counter = 0;

let counterDiv = document.querySelector(".counter");
counterDiv.innerText = counter;

let itemList;
let card;
let closeCross;
let cardTitle;
let cardDescription;
let cardTextDiv;
let savedCards;


// Pocket function
function makePocket() {
  let descriptions = document.querySelectorAll('.card-description');
  for (let i = 0; i < descriptions.length; i++) {
    cardTitle.onclick = () => {
      descriptions[i] = cardDescription.style.display = 'none';
    };
  }
}

// Function for remove cards
function deleteCard() {
  cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    closeCross.onclick = () => {
      counter--;
      counterDiv.innerText = counter;
      cards[i].remove();
    };
  }
}

function getSavedCards() {
  return JSON.parse(localStorage.getItem("savedCards") || "[]");
}

function saveCards(cardList) {
  localStorage.setItem("savedCards", JSON.stringify(cardList));
}

// Add cards function
function addCard() {
  // Variables for value
  let name = inputName.value;
  let description = inputDescription.value;

  //just for better reading, no need to use if esle, we just return if name or description are empty.
  if (name == "" || description == "") return;

  // first of all we need to get all the stored cards before, if there are no cards just return empty list
  savedCards = getSavedCards();

  //creating new card object
  let card = {
    name,
    description
  };
  // pushing created card object to savedCards list
  savedCards.push(card);

  //saving updated cards list to localStorage
  saveCards(savedCards);

  // Counter
  counter++;
  counterDiv.innerText = counter;
  // Захватывается главный div
  itemList = document.querySelector(".item-list");
  // Добавляется сама карточка
  card = document.createElement("div");
  card.classList.add("card");
  itemList.appendChild(card);
  // Название карточки
  cardTitle = document.createElement("h3");
  cardTitle.classList.add("card-title");
  // Описание карточки
  cardDescription = document.createElement("p");
  cardDescription.classList.add("card-description");
  // Вывод введенной информации в название и описание
  cardTitle.innerText = name;
  cardDescription.innerText = description;
  inputName.value = "";
  inputDescription.value = "";
  // Крестик для закрытия карточки
  closeCross = document.createElement("span");
  closeCross.classList.add("close");

  cardTextDiv = document.createElement("div");
  cardTextDiv.classList.add("card-text");
  // Элементы присваиваются как дочерние
  card.appendChild(closeCross);
  card.appendChild(cardTextDiv);
  cardTextDiv.appendChild(cardTitle);
  cardTextDiv.appendChild(cardDescription);

  makePocket();
  deleteCard();
}
document.querySelector("#add-button").onclick = addCard;