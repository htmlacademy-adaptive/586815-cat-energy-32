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
