window.onload = () => {
  let pay_card = document.querySelector('.method-pay__cards'),
    pay_phone = document.querySelector('.method-pay__phone');
  pay_card.addEventListener('click', function () {
    pay_phone.classList.remove('active');
    this.classList.add('active');
  });
  pay_phone.addEventListener('click', function () {
    pay_card.classList.remove('active');
    this.classList.add('active');
  });

  /*Маска*/
  new Cleave('.input-card', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
      console.log(type);
      if (type === 'visa') {
        document.querySelector('.cards-visa').classList.add('cards-visa_active');
      } else if (type === 'mastercard') {
        document.querySelector('.card-mastercard').classList.add('card-mastercard_active');
      } else if (type === 'mir') {
        document.querySelector('.card-mir').classList.add('card-mir_active');
      } else {
        document.querySelector('.cards-visa').classList.remove('cards-visa_active');
        document.querySelector('.card-mastercard').classList.remove('card-mastercard_active');
        document.querySelector('.card-mir').classList.remove('card-mir_active');
      }
    }
  });
  new Cleave('.input-time', {
    date: true,
    datePattern: ['m', 'y']
  });
  new Cleave('.input-code', {
    blocks: ['3'],
    numericOnly: true
  })
  /*Валидация*/
  var
    number_card = document.querySelector('.input-card'),
    name_card = document.querySelector('.input-name'),
    button_pay_card = document.querySelector('.button_card');

  /*Номер карты*/
  number_card.addEventListener('blur', valid_number_card);
  number_card.addEventListener('focus', focus_element);
  /*Имя карты*/
  name_card.addEventListener('keypress', valid_name_card);
  name_card.addEventListener('blur', reg_name_card);
  name_card.addEventListener('focus', focus_element);

  /*При нажатий на кнопку оплатить*/
  document.querySelector('.button_card').addEventListener('click', function () {
    let inputs_card = document.querySelectorAll('.input');
    for (i = 0; i < inputs_card.length; i++) {
      if (inputs_card[i].value.length == 0) {
        inputs_card[i].classList.add('invalid');
      }
      inputs_card[i].addEventListener('focus', focus_element);
      /*Пофиксить данный код*/
      inputs_card[i].addEventListener('blur', function () {
        if (this.value.length == 0) {
          this.classList.add('invalid');
        }
      });
      /*======END======*/
    }
  });

  function valid_number_card() {
    if (this.value.length != 0 && this.value.length < 19) {
      this.classList.add('invalid');
    } else {
      this.classList.remove('invalid');
    }
  }

  function valid_name_card() {
    let theEvent = event || window.event,
      key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    let regex = /[a-zа-яА-ЯA-Z\s]/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  function reg_name_card() {
    let reg = /^[A-Za-zА-Яа-я]+\s[A-Za-zА-Яа-я]+$/gi;
    str = this.value;
    if (this.value != '') {
      if (!reg.test(str)) {
        this.classList.add('invalid');
      } else {
        this.classList.remove('invalid');
      }
    }
  }

  function focus_element() {
    this.classList.remove('invalid');
  }
}