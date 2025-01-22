// import { createCardElement } from "./Card";
// import { initialCards } from "../dataObjects/Cards";
// import { placeList } from "../../pages/exercise/exercise";

// export function renderCardByVariants(variants, currentDifficulty) {
//     placeList.innerHTML = '';
  
//     const filtered = initialCards.filter((card) => card.subTitle === variants);
  
//     filtered.forEach(function(item) {
//       placeList.append(createCardElement(item));
//     })
//   }

// Импортируем необходимые модули и данные
import { initialCards } from "../../scripts/dataObjects/Cards";
import { createCardElement } from "../../scripts/index/Card";
import { placeList } from "../../pages/exercise/exercise";

// Функция для фильтрации и отображения карточек по варианту и сложности
export const renderCardByVariants = (selectedVariant, currentDifficulty) => {
  // Очищаем предыдущий список карточек
  placeList.innerHTML = "";

  // Фильтруем карточки по сложности и варианту
  const filteredCards = initialCards.filter(card => {
    const matchesVariant = card.subTitle === selectedVariant;
    const matchesDifficulty = card.difficult === currentDifficulty;

    // Возвращаем карточку, если она соответствует обоим критериям
    return matchesVariant && matchesDifficulty;
  });

  // Если карточки найдены, выводим их на страницу
  if (filteredCards.length > 0) {
    filteredCards.forEach(card => {
      placeList.append(createCardElement(card));
    });
  } else {
    // Если карточки не найдены, можно показать сообщение или оставить список пустым
    const noCardsMessage = document.createElement("p");
    noCardsMessage.textContent = "Нет карточек, соответствующих выбранным критериям.";
    placeList.append(noCardsMessage);
  }
};
