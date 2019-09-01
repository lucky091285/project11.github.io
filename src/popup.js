import {api} from './api.js';
import {usName, usJob} from './api.js';

export {placeBtn, userBtn, avatarBtn, placeName, placeLink, popPlace, popImage, popProfile, newAvatar, popAvatar};

const placeName = document.querySelector('#placename');
const placeLink = document.querySelector('#placelink');
const popupPlace = document.querySelector('#place');
const popupProfile = document.querySelector('#profile');
const popupAvatar = document.querySelector('#avatar');
const bigImage = document.querySelector('#bigImage');
const closeImage = document.querySelector('#closeImage');
const closeCard = document.querySelector('#closeCard');
const closeProfile = document.querySelector('#closeProfile');
const closeAvatar = document.querySelector('#closeAvatar');
const newAvatar = document.querySelector('#picavatar');

// Popup
// Это класс для всплывающего окна. Добавьте ему методы open и close, чтобы показывать и скрывать попап. 
// Есть два подхода, как можно реализовать всплывающие окна:
// сделать единый контейнер для всех попапов и менять его содержимое при открытии;
// сделать независимые попапы в разных контейнерах.
// Первый способ одновременно лучше и сложнее. 
// Но вы сами можете выбрать, как реализовать попап.

class Popup {
    constructor(popupPlace, popupProfile, bigImage) {
    this.popupPlace = popupPlace; 
    this.popupProfile = popupProfile;
    this.bigImage = bigImage;
  }
  newCard() {
    placeBtn();
    popupPlace.classList.toggle('popup_is-opened');  
    form1.reset(); 
    };
  newUser() {
    api.openProfile();
    userBtn();
    popupProfile.classList.toggle('popup_is-opened');
    };
  zoomImage() {
    bigImage.classList.add('popup__content-image');
    bigImage.classList.toggle('popup_is-opened');
    };
  avatPopup() {
    avatarBtn();
    popupAvatar.classList.toggle('popup_is-opened');
  }
  }

const popPlace = new Popup(popupPlace);
const popProfile = new Popup(popupProfile);
const popImage = new Popup(bigImage);
const popAvatar = new Popup(popupAvatar);

const formButton = document.querySelector('.user-info__button');
formButton.addEventListener('click', popPlace.newCard);

const editButton = document.querySelector('.user-info__button_edit');
editButton.addEventListener('click', popProfile.newUser); 

const avatarClick = document.querySelector('.user-info__photo');
avatarClick.addEventListener('click', popAvatar.avatPopup);


closeImage.addEventListener('click', popImage.zoomImage);
closeCard.addEventListener('click', popPlace.newCard);
closeProfile.addEventListener('click', popProfile.newUser);
closeAvatar.addEventListener('click', popAvatar.avatPopup);

  // Активная кнопка

function placeBtn() {
    if(placeName.value.length === 0 || placeLink.value.length === 0 || placeName.value.length > 30 || !placeLink.validity.valid) {
      submit1.setAttribute('disabled', true);
      submit1.classList.add('popup__button_disabled');
  } else {
    submit1.removeAttribute('disabled', true);
    // для удаления атрибута не обязательно передавать второй аргумент со значением
    // доступна более короткая запись elem.disabled = false
    submit1.classList.remove('popup__button_disabled');
  }
  }
  
  function userBtn() {
    if(usName.value.length < 2 || usJob.value.length < 2 || usName.value.length > 30 || usJob.value.length > 30) {
      submit2.setAttribute('disabled', true);
      // elem.disabled = true
      submit2.classList.add('popup__button_disabled');
  }  else {
    submit2.removeAttribute('disabled', true);
    submit2.classList.remove('popup__button_disabled');
  }
  }
  
  function avatarBtn() {
    if(newAvatar.value.length === 0 || !newAvatar.validity.valid) {
      submit3.setAttribute('disabled', true);
      // elem.disabled = true
      submit3.classList.add('popup__button_disabled');
  }  else {
    submit3.removeAttribute('disabled', true);
    submit3.classList.remove('popup__button_disabled');
  }
  }