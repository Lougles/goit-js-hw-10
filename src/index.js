import recipesData from './data/menu.json';
import recipesTamplate from './templates/recipes.hbs';
import './styles.css';
const markup = recipesTamplate(recipesData);
document.querySelector(".js-menu").insertAdjacentHTML('beforeend', markup);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const bar = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');
bar.addEventListener("change", onLightDarkTheme);
function onLightDarkTheme() {
  if (this.checked) {
      body.setAttribute('class', Theme.DARK);
  } else {
      body.setAttribute('class', Theme.LIGHT);
  }
};