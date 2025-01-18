import { placeList } from "../pages/exercise/exercise";
import { initialCards } from "./dataObjects/Cards";
import { createCardElement } from "./index/Card";

// Функция выбора карточек по уровню сложности
export function renderCardsByDifficulty(difficulty) {
    // Очистка текущего списка карточек
    placeList.innerHTML = '';

    // Фильтрация initialCards по выбранной сложности
    const filteredCards = initialCards.filter(card => card.difficult === difficulty);

    // Отображение отфильтрованных карточек
    filteredCards.forEach(function(item) {
        placeList.append(createCardElement(item));
    });
}