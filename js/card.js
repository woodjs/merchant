//Карточка
let input_card = document.querySelector('#number-card'),
  owner_card = document.querySelector('#name-card'),
  back_card = document.querySelector('.card-code-number'),
  date_card = document.querySelectorAll('.card-number-date');
  button_card = document.querySelector('.btn-pay');


input_card.addEventListener('keyup', function () {
  this.value = format_card(this.value);
  let logo_bank = document.querySelector('.card-bottom-logo');
  if (this.value.charAt(0) == 2) {
    logo_bank.classList.remove('mastercard');
    logo_bank.classList.remove('visa');
    logo_bank.classList.add('mir');
  } else if (this.value.charAt(0) == 4) {
    logo_bank.classList.remove('mir');
    logo_bank.classList.remove('mastercard');
    logo_bank.classList.add('visa');
  } else if (this.value.charAt(0) == 5) {
    logo_bank.classList.remove('mir');
    logo_bank.classList.remove('visa');
    logo_bank.classList.add('mastercard');
  } else {
    logo_bank.classList.remove('mastercard');
    logo_bank.classList.remove('visa');
    logo_bank.classList.remove('mir');
  }
});
input_card.addEventListener('keypress', function () {
  input_number();
});
input_card.addEventListener('blur', function () {
  if (this.value.length != 0 && this.value.length < 19 || (this.value.length > 19 && this.value.length % 4 !== 0)) {
    this.classList.add('card-invalid');
    // this.classList.add('error-block');
  } else if (this.value.length >= 19) {
    this.classList.remove('card-invalid');
    // this.classList.remove('error-block');
    this.classList.add('card-valid');
  }
});
input_card.addEventListener('focus', function () {
  this.classList.remove('card-invalid');
  this.classList.remove('card-valid');
})

owner_card.addEventListener('keypress', function () {
  input_text();
});
owner_card.addEventListener('keyup', function () {
  // let reg = new RegExp('^(?!.* .* )(?!^ )[A-Za-zА-Яа-я ]*$', 'g'),
  let reg = /^[A-Za-zА-Яа-я]+\s[A-Za-zА-Яа-я]+$/gi;
    str = this.value;
  if (!reg.test(str)) {
    this.classList.add('card-invalid');
  } else {
    this.classList.remove('card-invalid');
    this.classList.add('card-valid');
  }
  if (this.value.charAt(0) == ' ' || this.value == '') {
    this.value = '';
    this.classList.remove('card-invalid');
    this.classList.remove('card-valid');
  }
});

back_card.addEventListener('keypress', input_number);
button_card.addEventListener('click', function() {
  let fields = document.querySelectorAll('.field'),
  block_errors = document.querySelector('.errors');
  for(let i = 0; i < fields.length; i++) {
    fields[i].classList.remove('error-block');
  }
  for(let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      fields[i].classList.add('error-block');
    }
  }
});

for(let i = 0; i < date_card.length; i++) {
  date_card[i].addEventListener('keypress', input_number);
}

function format_card(card) {
  let digits = card.replace(/[^0-9]/gi, ''),
    result = '';
  for (i = 1; i <= digits.length; i++) {
    result += digits[i - 1];
    if (i % 4 == 0 && i != digits.length) {
      result += ' ';
    }
  }
  return result;
}

function logo_card(card) {
  let logo_bank = document.querySelector('.card-bottom-logo');
  if (card.value.charAt(0) == 2) {
    logo_bank.classList.add('mir');
    console.log(true);
  }
}

function input_number() {
  let theEvent = event || window.event,
    key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  let regex = /[0-9]/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

function input_text() {
  let theEvent = event || window.event,
    key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  let regex = /[a-zа-яА-ЯA-Z\s]/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}