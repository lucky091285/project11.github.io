export {placesList, Card};

// Card
// Это класс, создающий карточку. 
// Добавьте ему методы constructor, like и remove. 
// И ещё один — create. Он будет создавать DOM-элемент карточки.

const placesList = document.querySelector('.places-list');

class Card {
    constructor(name, link) {
      this.name = name;
      this.link = link;
    }
  
    addCard() {
      const placeCard = document.createElement('div');
      // https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment
      // существуют фрагменты специально придуманные для временного размещения DOM элементов
      placeCard.classList.add('place-card');
      placeCard.addEventListener('mousedown', function() {
          cardDeleteButton.removeAttribute('disabled');
      })
  
      const cardImage = document.createElement('div');
      cardImage.classList.add('place-card__image');
      cardImage.style.backgroundImage = `url(${this.link})`; 
  
      // Корзина
      
      const cardDeleteButton = document.createElement('button');
      cardDeleteButton.classList.add('place-card__delete-icon');
  
      // Удаление карточки
  
      cardDeleteButton.addEventListener('click', this.remove);
  
      const discription = document.createElement('div');
      discription.classList.add('place-card__description');
  
      const cardName = document.createElement('h3');
      cardName.classList.add('place-card__name');
      cardName.textContent = this.name;
  
      // Лайк
    
      const cardLike = document.createElement('button');
      cardLike.classList.add('place-card__like-icon');
  
      // Ставим лайки
  
      cardLike.addEventListener('click', this.like);
  
      // Счетчик лайков
  
      //const howLike = document.createElement('')
      
      placeCard.appendChild(cardImage);
          cardImage.appendChild(cardDeleteButton);
      placeCard.appendChild(discription);
          discription.appendChild(cardName);
          discription.appendChild(cardLike);
  
      placesList.appendChild(placeCard);
  
      return placesList;
  
      }
  
      remove() {
        placesList.removeChild(event.target.closest('.place-card'));
      }
  
      like(event) {
        event.target.classList.toggle('place-card__like-icon_liked');
    }
  
}