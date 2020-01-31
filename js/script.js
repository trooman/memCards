// Переменные для input
let inputName = document.querySelector('.add-link');
let inputDescription = document.querySelector('.add-description');

let counter = 0;
// let char;
let counterDiv = document.querySelector('.counter');
counterDiv.innerText = counter;

let itemList;
let card;
let closeCross;
let cardTitle;
let cardDescription;
let cardTextDiv;
// let cards;

// let cardButtonDiv;




// Функция для удаления карточек по одиночке
function deleteCard() {
  cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i++) {
    closeCross.onclick = () => {
      counter--;
      counterDiv.innerText = counter;
      cards[i].remove();
    }
  }
}

// Функция по определению цифр в строке
// function getTheNumber() {
//   for (let i = 0; i < inputName.value.length; i++) {
//     if (inputName.value[i] == 1 ||
//       inputName.value[i] == 2 ||
//       inputName.value[i] == 3 ||
//       inputName.value[i] == 4 ||
//       inputName.value[i] == 5 ||
//       inputName.value[i] == 6 ||
//       inputName.value[i] == 7 ||
//       inputName.value[i] == 8 ||
//       inputName.value[i] == 9 ||
//       inputName.value[i] == 0) {
//       char = inputName.value[i];
//       console.log(char);
//     }
//   }
// }

// Функция для добавления карточки
function addCard() {
  // Переменный для value
  let name = inputName.value;
  let description = inputDescription.value;

  if (name == '' || description == '') {
    return false;
  } else {
    console.log('test');
    // console.log(name);
    // console.log(description);

    // if (name && description) {
    //   localStorage.setItem(name, description);
    // }

    // for (let i = 0; i < localStorage.length; i++) {
    //   const name = localStorage.key(i);
    //   const description = localStorage.getItem(name);
    // }

    // Счетчик
    counter++;
    counterDiv.innerText = counter;
    // Захватывается главный div
    itemList = document.querySelector('.item-list');
    // Добавляется сама карточка
    card = document.createElement('div');
    card.classList.add('card');
    itemList.appendChild(card);
    // Название карточки
    cardTitle = document.createElement('h3');
    cardTitle.classList.add('card-title');
    // Описание карточки
    cardDescription = document.createElement('p');
    cardDescription.classList.add('card-description');
    // Вывод введенной информации в название и описание
    cardTitle.innerText = name;
    cardDescription.innerText = description;
    inputName.value = '';
    inputDescription.value = '';
    // Крестик для закрытия карточки
    closeCross = document.createElement('span');
    closeCross.classList.add('close');

    cardTextDiv = document.createElement('div');
    cardTextDiv.classList.add('card-text');
    // Элементы присваиваются как дочерние
    card.appendChild(closeCross);
    card.appendChild(cardTextDiv);
    cardTextDiv.appendChild(cardTitle);
    cardTextDiv.appendChild(cardDescription);

    // cardButtonDiv = document.createElement('div');
    // cardButtonDiv.classList.add('card-buttons');
    // card.appendChild(cardButtonDiv);


    // Запуск функции для удаления карточки
    deleteCard();
  }
}
document.querySelector('#add-button').onclick = addCard;





// Функция для добавления карточки
// document.addEventListener('keydown', function (event) {
//   if (event.code == 13) {
//     alert('Отменить!');
//   }
// });