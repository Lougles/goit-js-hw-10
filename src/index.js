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
let dakrMode = localStorage.getItem(Theme.DARK);
bar.addEventListener("change", onLightDarkTheme);

const enableDarkMode = () => {
  body.classList.add(Theme.DARK);
  localStorage.setItem(Theme.DARK, 'changed');
}
const disableDarkMode = () => {
  body.classList.remove(Theme.DARK);
  localStorage.setItem(Theme.DARK, null);
}
if (dakrMode === 'changed') {
  enableDarkMode(); 
}
function onLightDarkTheme() {
  dakrMode = localStorage.getItem(Theme.DARK);
  if (dakrMode !== "changed") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};