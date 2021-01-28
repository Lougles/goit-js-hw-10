import recipesData from './data/menu.json';
import recipesTamplate from './templates/recipes.hbs';
import './styles.css';

const markup = recipesTamplate(recipesData);
document.querySelector(".js-menu").insertAdjacentHTML('beforeend', markup);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const checkbox = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');
checkbox.addEventListener("change", switchTheme);

function switchTheme() {
  if (checkbox.checked) {
    body.classList.add(Theme.DARK);
    localStorage.setItem('dark-theme', Theme.DARK);
    localStorage.removeItem(Theme.LIGHT);
  } else {
    body.classList.remove(Theme.DARK);
    localStorage.setItem('light-theme', Theme.LIGHT);
    localStorage.removeItem(Theme.DARK);
  }
};
let currentTheme = localStorage.getItem(Theme.DARK);
if (currentTheme === Theme.DARK) {
  body.classList.remove(Theme.LIGHT);
  body.classList.add(Theme.DARK);
  checkbox.checked = true;
} else {
  body.classList.remove(Theme.DARK);
  body.classList.add(Theme.LIGHT);
  checkbox.checked = false;
}
