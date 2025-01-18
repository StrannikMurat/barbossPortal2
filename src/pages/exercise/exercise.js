import "../../styles/index.css";
import { initialCards } from "../../scripts/dataObjects/Cards";
import { createCardElement } from "../../scripts/index/Card";
import { renderCardsByDifficulty } from "../../scripts/CardsDifficulty";

let currentDifficulty = null; // Переменная текущей сложности
let activeButton = null; // Переменная для хранения активной кнопки

// DOM элемент для вывода карточек
export const placeList = document.querySelector('.page_exercise__exercise_list_section__list');
//DOM элемент для поиска определённых упражнний
export const search = document.querySelector('.page__exercise_search_input');


// Функция обработчик для перехода на страницу index
document.querySelector('.page__exercise_header_button').addEventListener('click', function() {
    window.location.href = 'index.html'
})

// Функция обрабртчик для поиска определённых упражнений
search.addEventListener('keyup', function() {
    const filter = search.value.toLowerCase();
    const items = document.querySelectorAll('.card');

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = ''; // Показываем элемент если удовлетворяет результатам поиска
        } else {
            item.style.display = 'none'; // Скрываем элемент если не удовлетворяет результатам поиска
        }
    });
});

// Добавление обработчиков событий к кнопкам сложности
document.querySelectorAll('.page__exercise_level__item').forEach(button => {
    button.addEventListener('click', function() {
        const difficulty = button.getAttribute('data-difficulty');

        // Проверка, совпадает ли текущая сложность с выбранной
        if (currentDifficulty === difficulty) {
            // Если совпадает, сбросить фильтр
            currentDifficulty = null;
            // Показать начальный список
            placeList.innerHTML = '';
            initialCards.forEach(function(item) {
                placeList.append(createCardElement(item));
            });
            button.classList.remove('page__exercise_level__item-active');
            activeButton = null; // Сбрасываем активную кнопку
        } else {
             // Если есть активная кнопка, сбросить её стиль
             if (activeButton) {
                activeButton.classList.remove('page__exercise_level__item-active');
            }
            currentDifficulty = difficulty;
            renderCardsByDifficulty(difficulty);
            button.classList.add('page__exercise_level__item-active');
            activeButton = button; // Сохраняем ссылку на активную кнопку
        }
    });
});




// выводим карточки на страницу
initialCards.forEach(function(item) {
    placeList.append(createCardElement(item));
})

