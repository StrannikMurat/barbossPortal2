import "../../styles/index.css";
import { initialCards } from "../../scripts/dataObjects/Cards";
import { createCardElement } from "../../scripts/index/Card";
import { renderCardByVariants } from "../../scripts/index/cardVariants";

export let currentDifficulty = null; // Переменная текущей сложности
export let activeButton = null; // Переменная для хранения активной кнопки

// DOM элемент для вывода карточек
export const placeList = document.querySelector(
  ".page_exercise__exercise_list_section__list"
);
//DOM элемент для поиска определённых упражнний
export const search = document.querySelector(".page__exercise_search_input");

// Функция обработчик для перехода на страницу index
document
  .querySelector(".page__exercise_header_button")
  .addEventListener("click", function () {
    window.location.href = "index.html";
  });

// Функция обрабртчик для поиска определённых упражнений
search.addEventListener("keyup", function () {
  const filter = search.value.toLowerCase();
  const items = document.querySelectorAll(".card");

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    if (text.includes(filter)) {
      item.style.display = ""; // Показываем элемент если удовлетворяет результатам поиска
    } else {
      item.style.display = "none"; // Скрываем элемент если не удовлетворяет результатам поиска
    }
  });
});

// Добавление обработчиков событий к кнопкам сложности
document.querySelectorAll(".page__exercise_level__item").forEach((button) => {
  button.addEventListener("click", function () {
    const difficulty = button.getAttribute("data-difficulty");

    // Проверка, совпадает ли текущая сложность с выбранной
    if (currentDifficulty === difficulty) {
      // Если совпадает, сбросить фильтр
      currentDifficulty = null;
      // Показать начальный список
      placeList.innerHTML = "";
      renderCardByVariants();
      button.classList.remove("page__exercise_level__item-active");
      activeButton = null; // Сбрасываем активную кнопку
    } else {
      // Если есть активная кнопка, сбросить её стиль
      if (activeButton) {
        activeButton.classList.remove("page__exercise_level__item-active");
      }
      currentDifficulty = difficulty;
      renderCardByVariants();
      button.classList.add("page__exercise_level__item-active");
      activeButton = button; // Сохраняем ссылку на активную кнопку
    }
  });
});

export let currentVariant = null;

document
  .querySelectorAll(".page__exercise_variants__item")
  .forEach((button) => {
    button.addEventListener("click", function () {
      const selectedVariant = button.getAttribute("data-variants");

      if (currentVariant === selectedVariant) {
        currentVariant = null;
        renderCardByVariants();
      } else {
        currentVariant = selectedVariant;
        renderCardByVariants();
      }
    });
  });

import { closePopup } from "../../scripts/index/modal";
import { openPopup } from "../../scripts/index/modal";

const popup = document.querySelector(".popup");
const popupClose = popup.querySelector(".popup__back");
const popupTitle = popup.querySelector(".popup__main_title");
const popupTypeExercise = popup.querySelector(".popup__type-exercise");
const popupTypeDifficult = popup.querySelector(".popup__type-difficult");
const popupTypeEquipment = popup.querySelector('.popup__type-equipment');
const popupFooterList = popup.querySelector('.popup__footer_list');
const musclelsMaster = popup.querySelector('.popup__exercise_muscle');
const popupMusclelsSlave = popup.querySelector('.popup__musclels-slave');
const popupInfoImg = popup.querySelector('.popup__info-img');

export function openCardPopup(img, mainTitle, exercise, difficult, equipment, about, master, slave) {
  openPopup(popup);

  popupInfoImg.src = img.src;
  popupTitle.textContent = mainTitle.textContent;
  popupTypeExercise.textContent = exercise.textContent;
  popupTypeDifficult.textContent = difficult.textContent;
  popupTypeEquipment.textContent = equipment ? equipment : '';
  popupFooterList.innerHTML = about ? about.split('\n').map(line => `<p class="popup__footer_item">${line}</p>`).join('') : ''; 
  musclelsMaster.innerHTML = master ? master
  .split(',') // Разделяем строку по запятым
  .map(line => line.trim()) // Удаляем лишние пробелы вокруг каждого элемента
  .filter(line => line !== '') // Убираем пустые строки (если они есть)
  .map(line => `<li class="popup__musclels-master popup__musclels-item">${line}</li>`) // Оборачиваем каждый элемент в <li>
  .join('') : ''; // Склеиваем всё в одну строку без разделителей
  
  popupMusclelsSlave.innerHTML = slave ? slave
  .split(',') 
  .map(line => line.trim())
  .filter(line => line !== '') 
  .map(line => `<li class="popup__musclels-slavee popup__musclels-item">${line}</li>`) 
  .join('') : ''; 
}

placeList.addEventListener("click", (evt) => {
  // Проверяем, был ли клик на кнопке "Подробнее"
  if (evt.target.classList.contains("page_exercise_section__description_button")) {
    // Находим ближайшую карточку, в которой находится кнопка
    const card = evt.target.closest(".page_exercise__places__item");

    if (card) {
      // Находим элементы внутри карточки
      const elementImage = card.querySelector(".page_exercise_section_description__image");
      const elementTitle = card.querySelector(".page_exercise_section_description__title");
      const elementSubtitle = card.querySelector(".page_xercise_section_description__subtitle");
      const elementDescription = card.querySelector(".page_exercise_section_description__paragraph");

      // Получаем данные из карточки
      const cardData = initialCards.find(item => item.title === elementTitle.textContent);

      // Открываем попап с данными карточки
      openCardPopup(
        elementImage,
        elementTitle,
        elementSubtitle,
        elementDescription,
        cardData.equipment,
        cardData.about,
        cardData.musclelsMaster,
        cardData.musclelsSlave
      );
    }
  }
});


popupClose.addEventListener("click", function () {
  closePopup(popup);
});

// выводим карточки на страницу
initialCards.forEach(function (item) {
  placeList.append(createCardElement(item, openCardPopup));
});
