window.onload = () => {
  let pay_card = document.querySelector('.method-card'),
    pay_phone = document.querySelector('.method-phone'),
    content_card = document.querySelector('.pay-card'),
    content_phone = document.querySelector('.pay-phone');

  pay_card.addEventListener('click', function() {
    content_phone.classList.add('deactive');
    content_card.classList.remove('deactive');
    pay_phone.classList.remove('method-active');
    this.classList.add('method-active');
  });
  pay_phone.addEventListener('click', function() {
    content_card.classList.add('deactive');
    content_phone.classList.remove('deactive');
    pay_card.classList.remove('method-active');
    this.classList.add('method-active');
  });
}