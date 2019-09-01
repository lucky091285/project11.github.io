import {api, addUser, userPhoto} from './api.js';
import {validate} from './validation.js';
import {popProfile, popAvatar} from './popup.js';

export {sendProfile, sendAvatar}

function sendProfile(event) {
    event.preventDefault();
  
    const inputs = Array.from(form2.elements);
  
    // [...form2.elements]
  
    api.editProfile();
  
    let isValidForm = true;
    // функция валидации идентична указанной в sendForm
    // согласно принципу DRY можно вынести в общую отдельную функцию
    // которая может валидировать любые формы
    inputs.forEach((element) => {
      if (element.id !== submit2.id) {
        if (!validate(element)) isValidForm = false;
      }
    });
  
    if (isValidForm) {
      addUser(form2.elements.username.value, form2.elements.userjob.value);
      popProfile.newUser(); // форматирование
    } else {
      return false; // не используется
    }
  }
  
  // Смена аватара
  
  function sendAvatar(event) {
    event.preventDefault();
    
    const inputs = Array.from(form3.elements);
  
    function addAvatar() {
      userPhoto.style.backgroundImage = `url(${form3.elements.link.value})`; 
    };
    // в ES6 массивы можно делать через spread оператор и литерал массива
    // [...form1.elements]
    // http://jsraccoon.ru/es6-spread-rest
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Grammar_and_types#%D0%9B%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D0%BB_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0
  
    api.editAvatar();
  
    let isValidForm = true;
  
    inputs.forEach((element) => {
      if (element.id !== submit3.id) {
        if (!validate(element)) isValidForm = false;
      }
    });
    
  
    if (isValidForm) {
      addAvatar(form3.elements.link.value);
      popAvatar.avatPopup();
      form3.reset();
      
    } else {
      return false; 
    }
  }
  