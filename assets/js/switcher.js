let styleMode = localStorage.getItem('styleMode');
const checkbox = document.querySelector(".check-mode");
const checkbox2 = document.querySelector(".check-mod");

const enableDarkStyle = () => {
    document.body.classList.add('darkstyle');
    localStorage.setItem('styleMode', 'dark');
    // checkbox.oncl = true;
}
const disableDarkStyle = () => {
    document.body.classList.remove('darkstyle');
    localStorage.setItem('styleMode', null);
    // checkbox.checked = false;
}
checkbox.addEventListener('click', () => {
    // Получаем текущее состояние чекбокса
enableDarkStyle()
  });
  checkbox2.addEventListener('click', () => {
    // Получаем текущее состояние чекбокса
disableDarkStyle()
  });
  
  // Проверяем начальное состояние стиля
  if (styleMode === 'dark') {
    enableDarkStyle();
  }


/* 
checkbox.addEventListener("change", (e) => {
    e.target.checked
        ? (document.body.style.cssText = `background: #000`)
        : (document.body.style.cssText = `background: #fff`);
});
 */
