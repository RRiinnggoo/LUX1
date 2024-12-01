const servicesLink = document.getElementById("services");
const services = document.querySelector(".services");
const mainPages = document.getElementById("main");
const contactsLink = document.getElementById("contacts");
const contacts = document.querySelector(".contacts");
const adminLink = document.getElementById("admin");
const admin = document.querySelector(".admin");
const profileLink = document.getElementById("profile");
const profile = document.querySelector(".profile");

const services1 = document.getElementById("services1");
const contacts1 = document.getElementById("contacts1");
const admin1 = document.getElementById("admin1");
const profile1 = document.getElementById("profile1");

services1.addEventListener("click", () => {
  addServices();
  mainPages.classList.add("disable");
  admin.classList.add("disable");
  profile.classList.add("disable");
  contacts.classList.add("disable");
  services.classList.remove("disable");
});
contacts1.addEventListener("click", () => {
  addContacts();
  mainPages.classList.add("disable");
  admin.classList.add("disable");
  profile.classList.add("disable");
  contacts.classList.remove("disable");
  services.classList.add("disable");
});
admin1.addEventListener("click", () => {
  addAdmin();
  mainPages.classList.add("disable");
  admin.classList.remove("disable");
  profile.classList.add("disable");
  contacts.classList.add("disable");
  services.classList.add("disable");
});
profile1.addEventListener("click", () => {
  addProfile();
  mainPages.classList.add("disable");
  admin.classList.add("disable");
  profile.classList.remove("disable");
  contacts.classList.add("disable");
  services.classList.add("disable");
});
main1.addEventListener("click", () => {
  addProfile();
  mainPages.classList.remove("disable");
  admin.classList.add("disable");
  profile.classList.add("disable");
  contacts.classList.add("disable");
  services.classList.add("disable");
});



main1







servicesLink.addEventListener("click", () => {
  addServices();
  mainPages.classList.add("disable");
  admin.classList.add("disable");
  profile.classList.add("disable");
  contacts.classList.add("disable");
  services.classList.remove("disable");
});

contactsLink.addEventListener("click", () => {
  addContacts();
  mainPages.classList.add("disable");
  admin.classList.add("disable");
  profile.classList.add("disable");
  contacts.classList.remove("disable");
  services.classList.add("disable");
});

adminLink.addEventListener("click", () => {
  addAdmin();
  mainPages.classList.add("disable");
  admin.classList.remove("disable");
  profile.classList.add("disable");
  contacts.classList.add("disable");
  services.classList.add("disable");
});

profileLink.addEventListener("click", () => {
  addProfile();
  mainPages.classList.add("disable");
  admin.classList.add("disable");
  profile.classList.remove("disable");
  contacts.classList.add("disable");
  services.classList.add("disable");
});
addServices = () => {
  services.innerHTML = `
               <div class="container">
        <section class="breadcrumb_section">
          <div class="breadcrumb flat">
            <a target="_blank" href="index.html">ГЛАВНАЯ</a>
            <a class="active" href="#">Услуги</a>
          </div>
        </section>
        <section class="production">
          <div class="production__box">
            <div class="production__box_left">
              <h1>Наше производство</h1>
              <p>
                Наше производство находится в Альметьевске. Офисы в Казани. Мы
                бурим скважины на воду.
              </p>
            </div>
            <div class="production__box_right">
              <h2>Выберите тип услуги:</h2>
              <select class="type-service">
                <option selected disabled value="">Выбрать</option>
                <option value="arenda">Аренда</option>
                <option value="burenie">Бурение</option>
                <option value="install">Установка</option>
              </select>
              <a class="btn-filter">
                Поиск
              </a>
            </div>
          </div>
        </section>
        <section class="services_cards">
          <div class="services_cards__box">
            <div class="services_cards__box_elem" id="arenda" style="display: block;">
              <h3>
                <img src="assets/img/why_us.png" alt="why_us" />
                <p>Аренда ямобура</p>
              </h3>
              <p>
                Мы предлагаем в аренду автобуры, бурильно-крановые машины в
                Казани и по Татарстану
              </p>
              <img src="assets/img/seervisec 1.png" alt="" />
              <a href="">Заказать</a>
            </div>
            <div class="services_cards__box_elem" id="burenie" style="display: block;">
              <h3>
                <img src="assets/img/why_us.png" alt="why_us" />
                <p>Бурение под ограждения</p>
              </h3>
              <p>
                Наша организация оказывает услуги по бурению на глубину отверстий на глубину до 15 метров и ширину до 1 метра под заборы и ограждения.
              </p>
              <img src="assets/img/services1.jpg" alt="" />
              <a href="">Заказать</a>
            </div>
            <div class="services_cards__box_elem" id="burenie" style="display: block;">
              <h3>
                <img src="assets/img/why_us.png" alt="why_us" />
                <p>Бурение колодцев</p>
              </h3>
              <p>
                Услуги бурения колодцев на воду, глубина бурения до 12 метров, диаметр до 0.87 метра. Рытьё колодцев осуществляется механическим способом.
              </p>
              <img src="assets/img/services2.jpg" alt="" />
              <a href="">Заказать</a>
            </div>
            <div class="services_cards__box_elem" id="install" style="display: block;">
              <h3>
                <img src="assets/img/why_us.png" alt="why_us" />
                <p>Установка столбов</p>
              </h3>
              <p>
                Мы занимаемся установкой опор ЛЭП для освещения, так и для ворот, или других целей
              </p>
              <img src="assets/img/services3.jpg" alt="" />
              <a href="">Заказать</a>
            </div>
            <div class="services_cards__box_elem" id="install" style="display: block;">
              <h3>
                <img src="assets/img/why_us.png" alt="why_us" />
                <p>Установка опор</p>
              </h3>
              <p>
                

Установка опор для освещения(ЛЭП) и для других целей производится бурильно-крановыми машинами или ямобурами.
              </p>
              <img src="assets/img/services4.jpg" alt="" />
              <a href="">Заказать</a>
            </div>
            <div class="services_cards__box_elem" id="burenie" style="display: block;">
              <h3>
                <img src="assets/img/why_us.png" alt="why_us" />
                <p>Столбчатый фундамент</p>
              </h3>
              <p>
                Бурение под столбчатый фундамент. Под столбы бурим ямы или шурфы соответствующей глубины
              </p>
              <img src="assets/img/services5.jpg" alt="" />
              <a href="">Заказать</a>
            </div>
            <div class="services_cards__box_elem" id="burenie" style="display: block;">
              <h3>
                <img src="assets/img/why_us.png" alt="why_us" />
                <p>Бурение под опоры ЛЭП</p>
              </h3>
              <p>
                Мы оказываем услуги бурения под столбы опор ЛЭП, выполняем установку столбов бурильно-крановой машиной. Бурим с помощью ямобура в Казани.
              </p>
              <img src="assets/img/services7.jpg" alt="" />
              <a href="">Заказать</a>
            </div>
          </div>
        </section>
        <section class="calculate_price">
          <div class="uCalc_459012"></div>
          <script>
            var widgetOptions459012 = {
              bg_color: "transparent",
            };
            (function () {
              var a = document.createElement("script"),
                h = "head";
              a.async = true;
              a.src =
                (document.location.protocol == "https:" ? "https:" : "http:") +
                "//ucalc.pro/api/widget.js?id=459012&t=" +
                Math.floor(new Date() / 18e5);
              document.getElementsByTagName(h)[0].appendChild(a);
            })();
          </script>
        </section>
      </div>
    `;
};
addContacts = () => {
  contacts.innerHTML = `
     <div class="container">
        <section class="breadcrumb_section">
          <div class="breadcrumb flat">
            <a target="_blank" href="index.html">ГЛАВНАЯ</a>
            <a  target="_blank" href="#">Услуги</a>
            <a  target="_blank" class="active" href="#">Контакты</a>
          </div>
        </section>
        <section class="production">
          <div class="production__box">
            <div class="production__box_left">
              <h1>Наши Контакты</h1>
              <p>
                Если у Вас возникли вопросы, свяжитесь 
                с нами любым удобным для Вас способом: 
              </p>
            </div>
            
          </div>
        </section>
       <section class="geolocation">
        <div class="geolocation__box">
          <div class="geolocation__box__left">
            <h3>АДРЕС</h3>
            <p>Республика Татарстан,
              г. Альметьевск, ул Ленина, 95</p>
              <h3>ТЕЛЕФОН</h3>
            <p>8 (800) 700 05-58</p>
            <h3>ПОЧТА</h3>
            <p>burMaster@yandex.ru</p>
          </div>
          <div class="geolocation__box__right"><iframe style="border-radius: 50px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.3332688449523!2d52.27556287713644!3d54.89707255757497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41605dc3c529eeb9%3A0x91ebbd9afc41d9f!2z0YPQuy4g0JvQtdC90LjQvdCwLCA5NSwg0JDQu9GM0LzQtdGC0YzQtdCy0YHQuiwg0KDQtdGB0L8uINCi0LDRgtCw0YDRgdGC0LDQvSwgNDIzNDYx!5e0!3m2!1sru!2sru!4v1729073987584!5m2!1sru!2sru" width="981" height="697" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
          
        </div>
       </section>
        <section class="kontacts">
          <div class="kontacts__box">
            <div class="text">
              Свяжитесь с нами
           </div>
           <form action="#">
              <div class="form-row">
                 <div class="input-data">
                    <input type="text" required>
                    <div class="underline"></div>
                    <label for="">Фамилия</label>
                 </div>
                 <div class="input-data">
                    <input type="text" required>
                    <div class="underline"></div>
                    <label for="">Имя</label>
                 </div>
              </div>
              <div class="form-row">
                 <div class="input-data">
                    <input type="text" required>
                    <div class="underline"></div>
                    <label for="">Email</label>
                 </div>
                 <div class="input-data">
                    <input type="text" required>
                    <div class="underline"></div>
                    <label for="">Номер телефон</label>
                 </div>
              </div>
              <div class="form-row">
              <div class="input-data textarea">
                 <textarea rows="8" cols="80" required></textarea>
                 <br />
                 <div class="underline"></div>
                 <label for="">Ваше сообщение</label>
                 <br />
                 <div class="form-row submit-btn">
                    <div class="input-data">
                       <div class="inner"></div>
                       <input type="submit" value="Отправить">
                    </div>
                 </div>
           </form>
          </div>
        </section>
      </div>`;
};
addAdmin = () => {
  admin.innerHTML = `
     <div class="container">
        <section class="breadcrumb_section">
          <div class="breadcrumb flat">
            <a target="_blank" href="index.html">ГЛАВНАЯ</a>
          </div>
        </section>
        <section class="production">
          <div class="production__box">
            <div class="production__box_left">
              <h1>Панель администратора</h1>
              <p>
                Не забудьте сохранить изменения, <br />
                после редактирования!
              </p>
            </div>
            <div class="production__box_right">
              <a href="">Сохранить</a><br />
              <a href="">Добавить</a>
            </div>
          </div>
        </section>
        <section class="services_cards">
          <div class="services_cards__box">
            <div class="services_cards__box_elem">
              <h3>
                <img src="assets/img/why_us.png" alt="why_us" />
                <p>Аренда ямобура</p>
              </h3>
              <p>
                Мы предлагаем в аренду автобуры, бурильно-крановые машины в
                Казани и по Татарстану
              </p>
              <img src="assets/img/seervisec 1.png" alt="" />
              <a href="">Удалить</a>
              <a href="">Редактировать</a>
            </div>
            <div class="services_cards__box_elem">
              <h3>
                <img src="assets/img/why_us.png" alt="why_us" />
                <p>Бурение под ограждения</p>
              </h3>
              <p>
                Наша организация оказывает услуги по бурению на глубину отверстий на глубину до 15 метров и ширину до 1 метра под заборы и ограждения.
              </p>
              <img src="assets/img/services1.jpg" alt="" />
              <a href="">Удалить</a>
              <a href="">Редактировать</a>
            </div>
            <div class="services_cards__box_elem">
              <h3>
                <img src="assets/img/why_us.png" alt="why_us" />
                <p>Бурение колодцев</p>
              </h3>
              <p>
                Услуги бурения колодцев на воду, глубина бурения до 12 метров, диаметр до 0.87 метра. Рытьё колодцев осуществляется механическим способом.
              </p>
              <img src="assets/img/services2.jpg" alt="" />
              <a href="">Удалить</a>
              <a href="">Редактировать</a>
            </div>
            <div class="services_cards__box_elem">
              <h3>
                <img src="assets/img/why_us.png" alt="why_us" />
                <p>Установка столбов</p>
              </h3>
              <p>
                Мы занимаемся установкой опор ЛЭП для освещения, так и для ворот, или других целей
              </p>
              <img src="assets/img/services3.jpg" alt="" />
              <a href="">Удалить</a>
              <a href="">Редактировать</a>
            </div>
            <div class="services_cards__box_elem">
              <h3>
                <img src="assets/img/why_us.png" alt="why_us" />
                <p>Установка опор</p>
              </h3>
              <p>
                

Установка опор для освещения(ЛЭП) и для других целей производится бурильно-крановыми машинами или ямобурами.
              </p>
              <img src="assets/img/services4.jpg" alt="" />
              <a href="">Удалить</a>
              <a href="">Редактировать</a>
            </div>
            <div class="services_cards__box_elem">
              <h3>
                <img src="assets/img/why_us.png" alt="why_us" />
                <p>Столбчатый фундамент</p>
              </h3>
              <p>
                Бурение под столбчатый фундамент. Под столбы бурим ямы или шурфы соответствующей глубины
              </p>
              <img src="assets/img/services5.jpg" alt="" />
              <a href="">Удалить</a>
              <a href="">Редактировать</a>
            </div>
            <div class="services_cards__box_elem">
              <h3>
                <img src="assets/img/why_us.png" alt="why_us" />
                <p>Бурение под опоры ЛЭП</p>
              </h3>
              <p>
                Мы оказываем услуги бурения под столбы опор ЛЭП, выполняем установку столбов бурильно-крановой машиной. Бурим с помощью ямобура в Казани.
              </p>
              <img src="assets/img/services7.jpg" alt="" />
              <a href="">Удалить</a>
              <a href="">Редактировать</a>
            </div>
          </div>
        </section>
        <section class="applications">
          <div class="applications__box">
            <h2>Заявки гостей</h2>
            <div class="applications__box__elem">
              <p>Риналь</p>
              <div>
                <p>
                  Не забудьте сохранить изменения, после редактирования!Не
                  забудьте сохранить изменения...
                </p>
              </div>
              <a href="#">Удалить</a>
              <a class="active_applic" href="#">Прочитано</a>
              <a href="#">Редактировать</a>
              <a href="#">Ответить</a>
            </div>
            <div class="applications__box__elem">
              <p>Риналь</p>
              <div>
                <p>
                  Не забудьте сохранить изменения, после редактирования!Не
                  забудьте сохранить изменения...
                </p>
              </div>
              <a href="#">Удалить</a>
              <a class="" href="#">Прочитано</a>
              <a href="#">Редактировать</a>
              <a href="#">Ответить</a>
            </div>
            <div class="applications__box__elem">
              <p>Риналь</p>
              <div>
                <p>
                  Не забудьте сохранить изменения, после редактирования!Не
                  забудьте сохранить изменения...
                </p>
              </div>
              <a href="#">Удалить</a>
              <a class="active_applic" href="#">Прочитано</a>
              <a href="#">Редактировать</a>
              <a href="#">Ответить</a>
            </div>
            <div class="applications__box__elem">
              <p>Риналь</p>
              <div>
                <p>
                  Не забудьте сохранить изменения, после редактирования!Не
                  забудьте сохранить изменения...
                </p>
              </div>
              <a href="#">Удалить</a>
              <a class="" href="#">Прочитано</a>
              <a href="#">Редактировать</a>
              <a href="#">Ответить</a>
            </div>
            <div class="applications__box__elem">
              <p>Риналь</p>
              <div>
                <p>
                  Не забудьте сохранить изменения, после редактирования!Не
                  забудьте сохранить изменения...
                </p>
              </div>
              <a href="#">Удалить</a>
              <a class="" href="#">Прочитано</a>
              <a href="#">Редактировать</a>
              <a href="#">Ответить</a>
            </div>
          </div>
        </section>
      </div>`;
};
addProfile = () => {
  profile.innerHTML = `
     <div class="container">
        <section class="breadcrumb_section">
          <div class="breadcrumb flat">
            <a target="_blank" href="index.html">ГЛАВНАЯ</a>
          </div>
        </section>

        <section class="profilePhoto">
          <a href=""
            ><img class="profilephot" src="assets/img/profilPhoto.png" alt="profilePhoto"
          /></a>
          <a href="#">
            <p>Риналь</p>
            <img src="assets/img/pen.png" alt="pen" />
          </a>
          <a href="#">
            <p>+7 917 854-80-91</p>
            <img src="assets/img/pen.png" alt="pen" />
          </a>
          <a href="#">
            <p>latypovrenal680@gmail.com</p>
            <img src="assets/img/pen.png" alt="pen" />
          </a>
        </section>

        <section class="applications">
          <div class="applications__box">
            <h2>Активные вопросы</h2>
            <div class="applications__box__elem">
              <p>Риналь</p>
              <div>
                <p>
                  Не забудьте сохранить изменения, после редактирования!Не
                  забудьте сохранить изменения...
                </p>
              </div>
              <a href="#">Удалить</a>
              <a href="#">Редактировать</a>
            </div>
            <div class="applications__box__elem">
              <p>Риналь</p>
              <div>
                <p>
                  Не забудьте сохранить изменения, после редактирования!Не
                  забудьте сохранить изменения...
                </p>
              </div>
              <a href="#">Удалить</a>
              <a href="#">Редактировать</a>
            </div>
            <div class="applications__box__elem">
              <p>Риналь</p>
              <div>
                <p>
                  Не забудьте сохранить изменения, после редактирования!Не
                  забудьте сохранить изменения...
                </p>
              </div>
              <a href="#">Удалить</a>
              <a href="#">Редактировать</a>
            </div>
            <div class="applications__box__elem">
              <p>Риналь</p>
              <div>
                <p>
                  Не забудьте сохранить изменения, после редактирования!Не
                  забудьте сохранить изменения...
                </p>
              </div>
              <a href="#">Удалить</a>
              <a href="#">Редактировать</a>
            </div>
          </div>
        </section>

        <section class="applications">
          <div class="applications__box">
            <h2>Завершенные вопросы</h2>
            <div class="applications__box__elem">
              <p>Риналь</p>
              <div>
                <p>
                  Не забудьте сохранить изменения, после редактирования!Не
                  забудьте сохранить изменения...
                </p>
              </div>

              <div>
                <p>
                  Не забудьте сохранить изменения, после редактирования!Не
                  забудьте сохранить изменения...
                </p>
              </div>
              <p>Админ</p>
            </div>
            <div class="applications__box__elem">
              <p>Риналь</p>
              <div>
                <p>
                  Не забудьте сохранить изменения, после редактирования!Не
                  забудьте сохранить изменения...
                </p>
              </div>

              <div>
                <p>
                  Не забудьте сохранить изменения, после редактирования!Не
                  забудьте сохранить изменения...
                </p>
              </div>
              <p>Админ</p>
            </div>
            <div class="applications__box__elem">
              <p>Риналь</p>
              <div>
                <p>
                  Не забудьте сохранить изменения, после редактирования!Не
                  забудьте сохранить изменения...
                </p>
              </div>

              <div>
                <p>
                  Не забудьте сохранить изменения, после редактирования!Не
                  забудьте сохранить изменения...
                </p>
              </div>
              <p>Админ</p>
            </div>
            <div class="applications__box__elem">
              <p>Риналь</p>
              <div>
                <p>
                  Не забудьте сохранить изменения, после редактирования!Не
                  забудьте сохранить изменения...
                </p>
              </div>

              <div>
                <p>
                  Не забудьте сохранить изменения, после редактирования!Не
                  забудьте сохранить изменения...
                </p>
              </div>
              <p>Админ</p>
            </div>
          </div>
        </section>
      </div>`;
};

const registr = document.querySelector(".registr");
const registrLink = document.querySelector(".button-container-1");
const closeRegisterLink =document.querySelector('.close');

registrLink.addEventListener("click", () => {
  registr.classList.add("active");
});

closeRegisterLink.addEventListener("click", () => {
    registr.classList.remove("active");
});

const basketLink = document.getElementById('basket');
const basket = document.querySelector('.basket');
const closeBasketLink = document.getElementById('close');

basketLink.addEventListener('click', () => {
    basket.classList.add('active');
});
closeBasketLink.addEventListener('click', () => {
    basket.classList.remove('active')
});


