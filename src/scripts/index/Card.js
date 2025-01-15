const cardTemplate = document.querySelector('#page_exercise__card-template').content;

export function createCardElement(cardDate) {
    const cardElement = cardTemplate.querySelector('.page_exercise__places__item').cloneNode(true);

    const elementTitle = cardElement.querySelector('.page_exercise_section_description__title');
    const elementSubtitle  = cardElement.querySelector('.page_xercise_section_description__subtitle');
    const elementDescription = cardElement.querySelector('.page_exercise_section_description__paragraph');
    const elementImage = cardElement.querySelector('.page_exercise_section_description__image');

    elementTitle.textContent = cardDate.title;
    elementSubtitle.textContent = cardDate.subTitle;
    elementDescription.textContent = cardDate.difficult;
    elementImage.src = cardDate.url;

    return cardElement;

};