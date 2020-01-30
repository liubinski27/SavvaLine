<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="author" content="Lubinskiy Konstantin" />
  <link rel="shortcut icon" href="img/logo.png" type="image/x-icon">
  <link rel="stylesheet" href="css/main.css">
  <title>Свадебное агенство Savvaline</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  <script src="./telegramform/js/telegramform.js"></script>
</head>

<body>
  <? include_once "include/telegram.php"; ?>
  <header>
    <div class="container">
      <div class="headerFlex">
        <a href="">
          <div class="logo"></div>
        </a>
        <div class="navigation">
          <ul>
            <li><a href="#services">Услуги</a></li>
            <li><a href="ourworks.html">Наши свадьбы</a></li>
            <li><a href="#about">О нас</a></li>
            <li><a href="#catalog">Каталог</a></li>
          </ul>
        </div>
        <div class="contacts">
          <ul>
            <li>
              <h3>+375 (29) 193-50-01</h3>
            </li>
            <ul class="socials">
              <li class="socials_item">
                <a href="https://vk.com/savvaline" target="_blank">
                  <div class="vk"></div>
                </a>
              </li>
              <li class="socials_item">
                <a href="https://www.instagram.com/_savvaline_/" target="_blank">
                  <div class="instagram"></div>
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <input id="menu__toggle" type="checkbox" />
  <label class="menu__btn" id="menu__btn" for="menu__toggle">
    <span></span>
  </label>
  <div class="hamburger-menu hidden" id="hamburger-menu">
    <ul class="menu__box">
      <li><a class="menu__item" href="#services">Услуги</a></li>
      <li><a class="menu__item" href="ourworks.html">Наши свадьбы</a></li>
      <li><a class="menu__item" href="#about">О нас</a></li>
      <li><a class="menu__item" href="#catalog">Каталог</a></li>
      <li class="socials_item">
        <a href="https://vk.com/savvaline" target="_blank">
          <div class="vk"></div>
        </a>
        <a href="https://www.instagram.com/_savvaline_/" target="_blank">
          <div class="instagram"></div>
        </a>
      </li>
      <li>
        <h3><a href="tel: +375291935001" target="_blank">+375 (29) 193-50-01</a></h3>
      </li>
    </ul>
  </div>
  <main>
    <div class="container">
      <form action="telegram.php" method="POST">
        <legend>Заголовок формы</legend>

        <div class="form-group">
          <input type="text" class="form-control" id="" name="name" placeholder="Введите имя">
        </div>
      
        <div class="form-group">
          <input type="text" class="form-control" id="" name="phone" placeholder="Введите телефон">
        </div>
      
        <div class="form-group">
          <input type="text" class="form-control" id="" name="email" placeholder="Введите email">
        </div>
      
        <button type="submit" class="btn">Отправить форму</button>
      </form>
      <div class="carousel">
        <div class="pics">
          <img class="active" src="img/carousel_1.jpg" alt="carousel_image_1">
          <img class="opacityHidden" src="img/carousel_2.jpg" alt="carousel_image_2">
          <img class="opacityHidden" src="img/carousel_3.jpg" alt="carousel_image_3">
        </div>
        <div class="btnLeft" id="btnLeft"></div>
        <div class="btnRight" id="btnRight"></div>
      </div>
    </div>
    <div class="hero">
      <div class="container">
        <div class="heroCaption">
          <p>Свадьба — это очень важный день в жизни каждого. Мы используем уникальный подход и
            наполняем каждое мероприятие незабываемыми моментами.</p>
        </div>
      </div>
    </div>
    <a name="services"></a>
    <div class="services">
      <div class="container">
        <div class="services_caption">
          <h1>Наши услуги</h1>
        </div>
        <div class="services_text">
          <p>Мы спланируем и организуем ваш дизайн от идеи <br /> до демонтажа декора после торжества.</p>
        </div>
        <div class="servicesBoxes">
          <div class="autoDecoration">
            <div class="autoDecoration_caption">
              <h2>Автоукрашения</h2>
              <p>У нас есть ряд специализированных украшений для автомобилей, которые подойдут вод любой стиль свадьбы и
                станут приятным дополнением в вашем свадебном декоре.</p>
            </div>
          </div>
          <div class="weddingConcept">
            <div class="weddingConcept_caption">
              <h2>Концепция свадьбы</h2>
              <p>Мы рады развивать ваши идеи и воплощать их в жизнь. Также вы можете выбрать тему из наших уже
                существующих концепций.</p>
            </div>
          </div>
          <div class="outsideRegistration">
            <div class="outsideRegistration_caption">
              <h2>Выездная регистрация</h2>
              <p>По вашему желанию мы организуем выездную регистацию брака, подготовим место и позаботимся о всех
                необходимых декорациях.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a name="about"></a>
    <div class="howWeWork">
      <div class="container">
        <div class="howWeWork_caption">
          <h1>Как мы работаем?</h1>
        </div>
        <div class="howWeWork_text">
          <p>Мы поможем вам реализовать ваши идеи. Если у<br /> вас не хватает времени на подготовку декора к<br />
            свадьбе, мы все
            возьмем на себя.</p>
        </div>
        <div class="howWeWork_boxes">
          <div class="howWeWork_item">
            <div class="budget">
              <div class="howWeWork_img"></div>
              <h2>Определенный бюджет</h2>
              <p>Планирование декора соотвественно фиксированному бюджету.</p>
            </div>
          </div>
          <div class="howWeWork_item">
            <div class="yourConcept">
              <div class="howWeWork_img"></div>
              <h2>Ваша концепция</h2>
              <p>Расскажите нам о свадьбе своей мечты, и мы поможем ее воплотить в жизнь.</p>
            </div>
          </div>
          <div class="howWeWork_item">
            <div class="idea">
              <div class="howWeWork_img"></div>
              <h2>Идея</h2>
              <p>Если у вас нет никаких идей, мы все придумаем и организуем за вас.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="callMe">
      <div class="callMe_button" id="callMe_button">
        <p>Свяжитесь с нами</p>
      </div>
    </div>
    <div class="callMe_active hidden" id="callMe_active">
      <a href="https://vk.com/savvaline" target="_blank">
        <div class="vk"></div>
      </a>
      <a href="https://www.instagram.com/_savvaline_/" target="_blank">
        <div class="instagram"></div>
      </a>
      <a href="tel: +375291935001" target="_blank">
        <div class="phone"></div>
      </a>
    </div>
    <a name="catalog"></a>
    <div class="catalog">
      <div class="container">
        <div class="catalog_hero">
          <a href="autodecoration_page=1.html" class="catalog_item"><img src="img/autoDecoration.jpg"
              alt="autoDecoration">
            <h2>Автоукрашения</h2>
          </a>
          <a href="outsideregistration.html" class="catalog_item"><img src="img/outSideRegistration.jpg"
              alt="outSideRegistration">
            <h2>Выездная регистрация</h2>
          </a>
          <a href="halls.html" class="catalog_item"><img src="img/halls.jpg" alt="halls">
            <h2>Оформление залов</h2>
          </a>
          <a href="bonbonnieres.html" class="catalog_item"><img src="img/bonbonnieres.jpg" alt="bonbonnieres">
            <h2>Бонбоньерки</h2>
          </a>
          <a href="accessories.html" class="catalog_item"><img src="img/accessories.jpg" alt="accessories">
            <h2>Аксессуары</h2>
          </a>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <div class="footer">
      <div class="footerFlex">
        <a href="">
          <div class="logo"></div>
        </a>
        <div class="navigation">
          <ul>
            <li><a href="#services">Услуги</a></li>
            <li><a href="ourworks.html">Наши свадьбы</a></li>
            <li><a href="#about">О нас</a></li>
            <li><a href="#catalog">Каталог</a></li>
          </ul>
        </div>
        <div class="contacts">
          <ul>
            <li>
              <h3>+375 (29) 193-50-01</h3>
            </li>
            <ul class="socials">
              <li class="socials_item">
                <a href="https://vk.com/savvaline" target="_blank">
                  <div class="vk"></div>
                </a>
              </li>
              <li class="socials_item">
                <a href="https://www.instagram.com/_savvaline_/" target="_blank">
                  <div class="instagram"></div>
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div class="footer_bottom">
        <div class="phone_img"></div>
        <div><a href="tel: +375291935001" target="_blank">+375 (29) 193-50-01</a></div>
        <div class="phone_img"></div>
      </div>
    </div>
  </footer>
  <script src="js/vendor.js"></script>
  <script src="js/main.js"></script>
</body>

</html>