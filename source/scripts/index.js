const checkbox = document.getElementById('menu-toggle');
const navigation = document.querySelector('.navigation');

navigation.classList.remove('navigation--no-js');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    navigation.classList.add('navigation--show');
  } else {
    navigation.classList.remove('navigation--show');
  }
});

const form = document.querySelector('.subscription__form');
const emailInput = document.querySelector('.subscription__input');

if (form && emailInput) {
  form.addEventListener('submit', (event) => {
    if (!emailInput.checkValidity()) {
      emailInput.classList.add('subscription__input--invalid');
      event.preventDefault(); // Блокируем отправку формы
    } else {
      emailInput.classList.remove('subscription__input--invalid'); // Убираем класс при корректном вводе
    }
  });

  // Проверка валидности в реальном времени
  emailInput.addEventListener('input', () => {
    if (emailInput.checkValidity()) {
      emailInput.classList.remove('subscription__input--invalid');
    } else {
      emailInput.classList.add('subscription__input--invalid');
    }
  });
}
