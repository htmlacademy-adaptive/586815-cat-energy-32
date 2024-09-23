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

const button = document.querySelector('.example__button');
const slider = document.querySelector('.example__slider');

button.addEventListener('mousedown', (event) => {
  event.preventDefault();

  const shiftX = event.clientX - button.getBoundingClientRect().left;
  const sliderRect = slider.getBoundingClientRect();

  function moveAt(pageX) {
    let newLeft = pageX - shiftX - sliderRect.left;

    // Ограничиваем положение кнопки по оси X
    if (newLeft < 0) {
      newLeft = 0;
    }
    if (newLeft > sliderRect.width - button.offsetWidth) {
      newLeft = sliderRect.width - button.offsetWidth;
    }

    button.style.setProperty('--button-left', `${newLeft}px`);

    // Центрируем линию под кнопкой
    const linePosition = newLeft + button.offsetWidth / 2;
    slider.style.setProperty('--line-left', `${linePosition}px`);

    // Меняем ширину колонок в зависимости от положения кнопки
    const leftColumnWidth = (newLeft + button.offsetWidth / 2) / sliderRect.width * 100;
    const rightColumnWidth = 100 - leftColumnWidth;

    slider.style.gridTemplateColumns = `${leftColumnWidth}% ${rightColumnWidth}%`;
  }

  function onMouseMove(mouseMoveEvent) {
    moveAt(mouseMoveEvent.pageX);
  }

  document.addEventListener('mousemove', onMouseMove);

  document.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    document.onmouseup = null;
  };
});

button.ondragstart = function() {
  return false;
};
