import "../../styles/index.css";
import { initialCards } from "../../scripts/dataObjects/Cards";
import { createCardElement } from "../../scripts/index/Card";

// DOM элемент для вывода карточек
const placeList = document.querySelector('.page_exercise__exercise_list_section__list');

//DOM элемент для поиска определённых упражнний
const search = document.querySelector('.page__exercise_search_input');


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

// Функция выбора карточек по уровню сложности
function renderCardsByDifficulty(difficulty) {
    // Очистка текущего списка карточек
    placeList.innerHTML = '';

    // Фильтрация initialCards по выбранной сложности
    const filteredCards = initialCards.filter(card => card.difficult === difficulty);

    // Отображение отфильтрованных карточек
    filteredCards.forEach(function(item) {
        placeList.append(createCardElement(item));
    });
}

// Добавление обработчиков событий к кнопкам сложности
document.querySelectorAll('.page__exercise_level__button').forEach(button => {
    button.addEventListener('click', function() {
        const difficulty = this.getAttribute('data-difficulty'); // Получаем значение атрибута
        renderCardsByDifficulty(difficulty); // Передаем уровень сложности в функцию отрисовки
    });
});



// выводим карточки на страницу
initialCards.forEach(function(item) {
    placeList.append(createCardElement(item));
})

