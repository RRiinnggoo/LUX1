/* day night */
const wrapper = document.querySelector('.wrapper');
const moon = document.querySelector('.fa-moon');
const sun = document.querySelector('.fa-sun');
const enter = document.querySelector('.enter-link');
const login = document.querySelector('.login-panel');
const btnEnter = document.querySelector('.btn_enter');
const forReg = document.querySelector('.for_reg');
const register = document.querySelector('.register-panel');
const btnReg = document.querySelector('.btn_reg');
const logoSun = document.querySelector('.logo_sun');
const logoNight = document.querySelector('.logo_night');

moon.addEventListener('click', () => {  
  wrapper.classList.add('active');
})
sun.addEventListener('click', () => {  
  wrapper.classList.remove('active');
})
enter.addEventListener('click', () => {
  login.classList.add('active');
})
btnEnter.addEventListener('click', () => {
  login.classList.remove('active');
})
forReg.addEventListener('click', () => {
  register.classList.add('active');
})
btnReg.addEventListener('click', () => {
  register.classList.remove('active');
})
btnReg.addEventListener('click', () => {
  login.classList.add('active');
})
forReg.addEventListener('click', () => {
  login.classList.remove('active');
})


/* function */
function addCatalog(){
  catalogContent.innerHTML = `
  <div class="cards">
  <div class="card">
    <div class="card_img">
      <img src="./img/kaneki-ken-1.jpg" alt="img1">
    </div>
    <div class="price">
      <p>Сведение трека</p>

    </div>
    <h5>5000 P</h5>
    <button class="btn_enter btn_buy">
      Купить
    </button>
  </div>
  <div class="card">
    <div class="card_img">
      <img src="./img/kaneki-ken-1.jpg" alt="img1">
    </div>
    <div class="price">
      <p>Парт</p>

    </div>
    <h5>150 000 P</h5>
    <button class="btn_enter btn_buy">
      Купить
    </button>
  </div>
  <div class="card">
    <div class="card_img">
      <img src="./img/kaneki-ken-1.jpg" alt="img1">
    </div>
    <div class="price">
      <p>Написание бита</p>

    </div>
    <h5>70 000 P</h5>
    <button class="btn_enter btn_buy">
      Купить
    </button>
  </div>
  <div class="card">
    <div class="card_img">
      <img src="./img/kaneki-ken-1.jpg" alt="img1">
    </div>
    <div class="price">
      <p>Написание текст</p>

    </div>
    <h5>25 000 P</h5>
    <button class="btn_enter btn_buy">
      Купить
    </button>
  </div>
</div>

  `;
}


/*  */
const blockOne = document.querySelector(".block_one");
const catalogContent = document.querySelector(".catalog_content");
const catalogLink = document.querySelector(".catalog-link");

logoSun.addEventListener('click', () => {
  blockOne.classList.remove('remove');
  catalogContent.classList.add('remove');
})
logoNight.addEventListener('click', () => {
  blockOne.classList.remove('remove');
  catalogContent.classList.add('remove');
})
catalogLink.addEventListener('click', () =>{
  catalogContent.classList.remove('remove');
  blockOne.classList.add('remove');
  addCatalog()
})
enter.addEventListener('click',() =>{
  blockOne.classList.remove('remove');
  catalogContent.classList.add('remove');
})

