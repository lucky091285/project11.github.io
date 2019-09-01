import {Card} from './card.js';
import {validate} from './validation.js';
import {placesList} from './card.js';
import {popPlace} from './popup.js';

export {cardList};

// CardList
// Это класс для хранения и отрисовки карточек. Метод constructor этого класса должен принимать два параметра:
// DOM-элемент — контейнер, куда нужно складывать карточки;
// массив карточек, которые будут на странице при загрузке.
// Ещё у класса CardList должны быть два метода:
// addCard для добавления карточки в список;
// render для отрисовки карточек при загрузке страницы.

class CardList {
    constructor(placesList/*, initialCards*/) {
      this.placesList = placesList;
      // this.initialCards = initialCards;
    }
  
    sendForm(event) {
      event.preventDefault();
      
      const inputs = Array.from(form1.elements);
      // в ES6 массивы можно делать через spread оператор и литерал массива
      // [...form1.elements]
      // http://jsraccoon.ru/es6-spread-rest
      // https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Grammar_and_types#%D0%9B%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D0%BB_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0
    
      let isValidForm = true;
    
      inputs.forEach((element) => {
        if (element.id !== submit1.id) {
          if (!validate(element)) isValidForm = false;
        }
      });
      
    
      if (isValidForm) {
        const card = new Card(form1.elements.placename.value, form1.elements.link.value);
        card.addCard();
        popPlace.newCard();
        form1.reset();
        
      } else {
        return false; 
      }
    }
    
  
    // render() {
    //   const initialCards = this.initialCards;
    //   initialCards.forEach(function(item) {
    //     const card = new Card(item.name, item.link);
    //       card.addCard();
    //   }) 
    // }
  }

  const cardList = new CardList(placesList);