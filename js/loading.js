let title = document.querySelector('.main-title');
let strTitle = title.textContent;
let splitTitle = strTitle.split('');
title.textContent = '';

for (let i = 0; i < splitTitle.length; i++) {
  title.innerHTML += '<span>' + splitTitle[i] + '</span>';
}

let char = 0;
let timer = setInterval(onTick, 300);

// Функция для анимации каждоый буквы в слове
function onTick() {
  const span = title.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;
  if (char === splitTitle.length) {
    complete();
    // Пауза в одну секунда, что бы переход не был резким
    setTimeout(() => {
      return document.location.href = 'index.html';
    }, 1500);
  }
}

// Функция для прекращения цикла
function complete() {
  clearInterval(timer);
  timer = null;
}