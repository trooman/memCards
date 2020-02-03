// Переменные для input
let inputName = document.querySelector('.add-link');
let inputDescription = document.querySelector('.add-description');

let itemList = document.querySelector('.item-list');;

window.onload = function() {
  displayCards();
}

function displayCards() {
  const cards = getSavedCards();
  cards.forEach(card => {
    createDisplayedCard(card);
  });
  setCardsAmount();
}

function addCard() {
  let name = inputName.value;
  let description = inputDescription.value;

  //just for better reading, no need to use if esle, we just return if name or description are empty.
  if (name == ''|| description == '') return;

  // first of all we need to get all the stored cards before, if there are no cards just return empty list
  let currentCards = getSavedCards();
  //creating new card object
  let card = {
    id: `${currentCards.length}-${name}`,
    name,
    description
  };
  // pushing created card object to savedCards list
  currentCards.push(card);
   //saving updated cards list to localStorage
  saveCards(currentCards);

  createDisplayedCard(card);
  clearInputs();
  setCardsAmount();
}

function createDisplayedCard(cardEntity) {
  let card = document.createElement('div');
  card.classList.add('card');
  itemList.appendChild(card);
  let cardTitle = document.createElement('h3');
  cardTitle.classList.add('card-title');
  // Описание карточки
  let cardDescription = document.createElement('p');
  cardDescription.classList.add('card-description');
  // Вывод введенной информации в название и описание
  cardTitle.innerText = cardEntity.name;
  cardDescription.innerText = cardEntity.description;
  let closeCross = document.createElement('span');
  closeCross.classList.add('close');
  closeCross.onclick = () => {
    deleteCard(cardEntity);
  }
  let cardTextDiv = document.createElement('div');
  cardTextDiv.classList.add('card-text');
  // Элементы присваиваются как дочерние
  card.appendChild(closeCross);
  card.appendChild(cardTextDiv);
  cardTextDiv.appendChild(cardTitle);
  cardTextDiv.appendChild(cardDescription);
}

function deleteCard(card) {
  let currentCards = getSavedCards();
  let index = currentCards.findIndex(x => x.id === card.id);
  currentCards.splice(index, 1);
  saveCards(currentCards);
  itemList.innerHTML = '';
  displayCards();
}

function deleteAllCards() {
  saveCards([]);
  itemList.innerHTML = '';
  displayCards();
}

function getSavedCards() {
  return JSON.parse(localStorage.getItem('savedCards') || '[]');
}

function saveCards(cardList) {
  localStorage.setItem('savedCards', JSON.stringify(cardList));
}

function setCardsAmount() {
  const amount = getSavedCards().length;
  let counterDiv = document.querySelector('.counter');
  counterDiv.innerText = amount;
}

function clearInputs() {
  inputName.value = '';
  inputDescription.value = '';
}

document.querySelector('#add-button').onclick = addCard;
document.querySelector('#delete-button').onclick = deleteAllCards;


// Функция для добавления карточки
// document.addEventListener('keydown', function (event) {
//   if (event.code == 13) {
//     alert('Отменить!');
//   }
// });
