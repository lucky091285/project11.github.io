export {handleValidate, validate}

// Валидация

function handleValidate(event) {
    // с помощью деструктуризации объекта легко вытащить конкретный ключ из события
    // handleValidate({target})
    // resetError(target)
    resetError(event.target);
    validate(event.target);
  }
  
  function validate(element) {
    const errorElement = document.querySelector(`#error-${element.id}`);
  
    if (!element.checkValidity()) {
      errorElement.textContent = element.validationMessage;
      activateError(errorElement);
      return false;
    } else if (!isUserMatch (element)) {
      const errorMessage = 'Должно быть от 2 до 30 символов!';
      errorElement.textContent = errorMessage;
      activateError(errorElement);
      return false;
    }
    return true;
  }
  
  function activateError(element) {
    element.parentNode.classList.add('popup__invalid');
  }
  
  function resetError(element) {
    element.parentNode.classList.remove('popup__invalid');
    element.textContent = '';
  }

  // Проверка длинны текста

function isUserMatch(element) {
    if(element.id !== username.id && element.id !== userjob.id && element.id !== placename.id) {
      return true;
    }
    if(element.value.length >= 2 && element.value.length <= 30 ) {
      resetError(element);
      return true;
    }
    return false;
  }