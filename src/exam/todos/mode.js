const checkBox = document.querySelector('.dark-mode');

const userColorTheme = localStorage.getItem('color-theme');
const osColorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const getColorTheme = () => (userColorTheme ? userColorTheme : osColorTheme);

window.onload = function () {
  if (getColorTheme === 'dark') {
    localStorage.setItem('color-theme', 'dark');
    document.documentElement.setAttribute('color-theme', 'dark');
    checkBox.setAttribute('checked', true);
  } else {
    localStorage.setItem('color-theme', 'light');
    document.documentElement.setAttribute('color-theme', 'light');
  }
};

checkBox.addEventListener('click', e => {
  if (e.target.checked) {
    localStorage.setItem('color-theme', 'light');
    document.documentElement.setAttribute('color-theme', 'dark');
    document.querySelector(".mode-text").innerHTML = "다크모드";
  } else {
    localStorage.setItem('color-theme', 'light');
    document.documentElement.setAttribute('color-theme', 'light');
    document.querySelector(".mode-text").innerHTML = "라이트모드";
  }
});