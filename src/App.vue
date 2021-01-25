<template>
  <v-app id="app">
    <header>
      <div class="container">
        <a href="/">
          <img src="./assets/logo.svg" alt="logo">
        </a>
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>

    <main>
      <div class="offer">
        <div class="container">
          <h1>Мы поможем получить деньги быстро</h1>
          <div class="offer__descr">Помогаем  выбрать заёмщика с наилучшими условиями. Вам ничего не нужно делать, просто оформите заявку у нас на сайте и ждите одобрения</div>
          <a href="#" class="butt">
            <span>Оформить зявку</span>
          </a>
        </div>
      </div>

      <div class="container">
        <div class="advantages">
          <h2>Кто может получить <span>деньги</span></h2>
          <div class="advantages__wrapper">
            <div class="advantages__item">
              <div class="advantages__icon">
                <img src="./assets/adv-1.svg" alt="">
              </div>
              <div class="advantages__text">студенты</div>
            </div>
            <div class="advantages__item">
              <div class="advantages__icon">
                <img src="./assets/adv-2.svg" alt="">
              </div>
              <div class="advantages__text">БЕЗ ОФИЦИАЛЬНОГО МЕСТА РАБОТЫ</div>
            </div>
            <div class="advantages__item">
              <div class="advantages__icon">
                <img src="./assets/adv-3.svg" alt="">
              </div>
              <div class="advantages__text">ИМЕЮЩИМ СУДИМОСТИ</div>
            </div>
            <div class="advantages__item">
              <div class="advantages__icon">
                <img src="./assets/adv-4.svg" alt="">
              </div>
              <div class="advantages__text">ПЕНСИОНЕРАМ</div>
            </div>
            <div class="advantages__item">
              <div class="advantages__icon">
                <img src="./assets/adv-5.svg" alt="">
              </div>
              <div class="advantages__text">С ПЛОХОЙ КРЕДИТНОЙ ИСТОРИЕЙ</div>
            </div>
            <div class="advantages__item">
              <div class="advantages__icon">
                <img src="./assets/adv-6.svg" alt="">
              </div>
              <div class="advantages__text">НАХОДЯЩИМСЯ В ДЕКРЕТЕ</div>
            </div>
          </div>
        </div>
      </div>
      <div class="partners">
        <div class="container">
          <h2>Наши <span>партнёры</span></h2>
          <form class="filter"><!-- фильтры партнёров --></form>
          <div class="partners__wrapper">
            <div class="partners__item active">
              <div class="partners__logo">
                <img src="./assets/images/mfo-logos/7HND382EN33ZF3KOR9B4JFI5W9G.png" alt="">
              </div>
              <div class="partners__info active">
                <div class="partners__title">Быстроденьги - выданный займ онлайн</div>
                <div class="partners__text">Быстроденьги – это возможность мигом получить займ экспресс без залога, скрытых комиссий и процентов, бумажной волокиты.</div>
                <div class="partners__subtitle">Информация о продукте:</div>
                <ul class="partners__list">
                  <li>Краткосрочные займы:</li>
                  <li>Сумма: от 1 000 до 30 000 рублей</li>
                  <li>Срок: от 1 до 30 дней</li>
                  <li>Процентная ставка: 1 % в день</li>
                  <li>Займы доступны как онлайн, так и в офисе финансового обслуживания</li>
                </ul>
                <div class="partners__subtitle">Информация о продукте:</div>
                <ul class="partners__list">
                  <li>Краткосрочные займы:</li>
                  <li>Сумма: от 1 000 до 30 000 рублей</li>
                  <li>Срок: от 1 до 30 дней</li>
                  <li>Валюта: Рубли</li>
                  <li>Займы доступны как онлайн, так и в офисе финансового обслуживания</li>
                </ul>
                <div class="partners__subtitle">Информация о продукте:</div>
                <ul class="partners__list">
                  <li>Краткосрочные займы:</li>
                  <li>Срок: от 1 до 30 дней</li>
                  <li>Процентная ставка: 1 % в день</li>
                </ul>
                <div class="partners__actions">
                  <a href="#">скрыть</a>
                  <a href="#">выбрать</a>
                </div>
              </div>
            </div>
            <div class="partners__item checked">
              <div class="partners__logo">
                <img src="./assets/images/mfo-logos/7HND382EN33ZF3KOR9B4JFI5W9G.png" alt="">
              </div>
              <div class="partners__info">
                <div class="partners__title">Быстроденьги - выданный займ онлайн</div>
                <div class="partners__text">Быстроденьги – это возможность мигом получить займ экспресс без залога, скрытых комиссий и процентов, бумажной волокиты.</div>
                <div class="partners__subtitle">Информация о продукте:</div>
                <ul class="partners__list">
                  <li>Краткосрочные займы:</li>
                  <li>Сумма: от 1 000 до 30 000 рублей</li>
                  <li>Срок: от 1 до 30 дней</li>
                  <li>Процентная ставка: 1 % в день</li>
                  <li>Валюта: Рубли</li>
                  <li>Займы доступны как онлайн, так и в офисе финансового обслуживания</li>
                </ul>
                <div class="partners__actions">
                  <a href="#">подробнее</a>
                  <a href="#" class="checked">выбрано</a>
                </div>
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img src="./assets/images/mfo-logos/7HND382EN33ZF3KOR9B4JFI5W9G.png" alt="">
              </div>
              <div class="partners__info">
                <div class="partners__title">Быстроденьги - выданный займ онлайн</div>
                <div class="partners__text">Быстроденьги – это возможность мигом получить займ экспресс без залога, скрытых комиссий и процентов, бумажной волокиты.</div>
                <div class="partners__subtitle">Информация о продукте:</div>
                <ul class="partners__list">
                  <li>Краткосрочные займы:</li>
                  <li>Сумма: от 1 000 до 30 000 рублей</li>
                  <li>Срок: от 1 до 30 дней</li>
                  <li>Процентная ставка: 1 % в день</li>
                  <li>Валюта: Рубли</li>
                  <li>Займы доступны как онлайн, так и в офисе финансового обслуживания</li>
                </ul>
                <div class="partners__actions">
                  <a href="#">подробнее</a>
                  <a href="#">выбрать</a>
                </div>
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img src="./assets/images/mfo-logos/7HND382EN33ZF3KOR9B4JFI5W9G.png" alt="">
              </div>
              <div class="partners__info">
                <div class="partners__title">Быстроденьги - выданный займ онлайн</div>
                <div class="partners__text">Быстроденьги – это возможность мигом получить займ экспресс без залога, скрытых комиссий и процентов, бумажной волокиты.</div>
                <div class="partners__subtitle">Информация о продукте:</div>
                <ul class="partners__list">
                  <li>Краткосрочные займы:</li>
                  <li>Сумма: от 1 000 до 30 000 рублей</li>
                  <li>Срок: от 1 до 30 дней</li>
                  <li>Процентная ставка: 1 % в день</li>
                  <li>Валюта: Рубли</li>
                  <li>Займы доступны как онлайн, так и в офисе финансового обслуживания</li>
                </ul>
                <div class="partners__actions">
                  <a href="#">подробнее</a>
                  <a href="#">выбрать</a>
                </div>
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img src="./assets/images/mfo-logos/7HND382EN33ZF3KOR9B4JFI5W9G.png" alt="">
              </div>
              <div class="partners__info">
                <div class="partners__title">Быстроденьги - выданный займ онлайн</div>
                <div class="partners__text">Быстроденьги – это возможность мигом получить займ экспресс без залога, скрытых комиссий и процентов, бумажной волокиты.</div>
                <div class="partners__subtitle">Информация о продукте:</div>
                <ul class="partners__list">
                  <li>Краткосрочные займы:</li>
                  <li>Сумма: от 1 000 до 30 000 рублей</li>
                  <li>Срок: от 1 до 30 дней</li>
                  <li>Процентная ставка: 1 % в день</li>
                  <li>Валюта: Рубли</li>
                  <li>Займы доступны как онлайн, так и в офисе финансового обслуживания</li>
                </ul>
                <div class="partners__actions">
                  <a href="#">подробнее</a>
                  <a href="#">выбрать</a>
                </div>
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img src="./assets/images/mfo-logos/7HND382EN33ZF3KOR9B4JFI5W9G.png" alt="">
              </div>
              <div class="partners__info">
                <div class="partners__title">Быстроденьги - выданный займ онлайн</div>
                <div class="partners__text">Быстроденьги – это возможность мигом получить займ экспресс без залога, скрытых комиссий и процентов, бумажной волокиты.</div>
                <div class="partners__subtitle">Информация о продукте:</div>
                <ul class="partners__list">
                  <li>Краткосрочные займы:</li>
                  <li>Сумма: от 1 000 до 30 000 рублей</li>
                  <li>Срок: от 1 до 30 дней</li>
                  <li>Процентная ставка: 1 % в день</li>
                  <li>Валюта: Рубли</li>
                  <li>Займы доступны как онлайн, так и в офисе финансового обслуживания</li>
                </ul>
                <div class="partners__actions">
                  <a href="#">подробнее</a>
                  <a href="#">выбрать</a>
                </div>
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img src="./assets/images/mfo-logos/7HND382EN33ZF3KOR9B4JFI5W9G.png" alt="">
              </div>
              <div class="partners__info">
                <div class="partners__title">Быстроденьги - выданный займ онлайн</div>
                <div class="partners__text">Быстроденьги – это возможность мигом получить займ экспресс без залога, скрытых комиссий и процентов, бумажной волокиты.</div>
                <div class="partners__subtitle">Информация о продукте:</div>
                <ul class="partners__list">
                  <li>Краткосрочные займы:</li>
                  <li>Сумма: от 1 000 до 30 000 рублей</li>
                  <li>Срок: от 1 до 30 дней</li>
                  <li>Процентная ставка: 1 % в день</li>
                  <li>Валюта: Рубли</li>
                  <li>Займы доступны как онлайн, так и в офисе финансового обслуживания</li>
                </ul>
                <div class="partners__actions">
                  <a href="#">подробнее</a>
                  <a href="#">выбрать</a>
                </div>
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img src="./assets/images/mfo-logos/7HND382EN33ZF3KOR9B4JFI5W9G.png" alt="">
              </div>
              <div class="partners__info">
                <div class="partners__title">Быстроденьги - выданный займ онлайн</div>
                <div class="partners__text">Быстроденьги – это возможность мигом получить займ экспресс без залога, скрытых комиссий и процентов, бумажной волокиты.</div>
                <div class="partners__subtitle">Информация о продукте:</div>
                <ul class="partners__list">
                  <li>Краткосрочные займы:</li>
                  <li>Сумма: от 1 000 до 30 000 рублей</li>
                  <li>Срок: от 1 до 30 дней</li>
                  <li>Процентная ставка: 1 % в день</li>
                  <li>Валюта: Рубли</li>
                  <li>Займы доступны как онлайн, так и в офисе финансового обслуживания</li>
                </ul>
                <div class="partners__actions">
                  <a href="#">подробнее</a>
                  <a href="#">выбрать</a>
                </div>
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img src="./assets/images/mfo-logos/7HND382EN33ZF3KOR9B4JFI5W9G.png" alt="">
              </div>
              <div class="partners__info">
                <div class="partners__title">Быстроденьги - выданный займ онлайн</div>
                <div class="partners__text">Быстроденьги – это возможность мигом получить займ экспресс без залога, скрытых комиссий и процентов, бумажной волокиты.</div>
                <div class="partners__subtitle">Информация о продукте:</div>
                <ul class="partners__list">
                  <li>Краткосрочные займы:</li>
                  <li>Сумма: от 1 000 до 30 000 рублей</li>
                  <li>Срок: от 1 до 30 дней</li>
                  <li>Процентная ставка: 1 % в день</li>
                  <li>Валюта: Рубли</li>
                  <li>Займы доступны как онлайн, так и в офисе финансового обслуживания</li>
                </ul>
                <div class="partners__actions">
                  <a href="#">подробнее</a>
                  <a href="#">выбрать</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <a href="/">
          <img src="./assets/logo.svg" alt="logo">
        </a>
        <div class="footer__copyright">©Все права защищены 2021 ezmoney.</div>
      </div>
    </footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => {
    return {}
  }
}
</script>

<style lang="scss">
// global styles
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  text-decoration: none;
  transition: .3s;
}

p {
  margin: 0;
}

img {
  max-width: 100%;
}

.container {
  width: 1280px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 1440px) {
    width: 1150px;
  }
  @media (max-width: 1199px) {
    width: 870px;
  }
  @media (max-width: 991px) {
    width: 720px;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0 10px;
  }
}

h1 {
  font-weight: 900;
  font-size: 54px;
  line-height: 76px;
  text-transform: uppercase;
  color: #ffffff;
  max-width: 880px;
  margin-bottom: 30px;

  @media(max-width: 991px) {
    font-size: 38px;
    line-height: 46px;
  }
  @media(max-width: 767px) {
    font-size: 22px;
    line-height: 31px;
  }
}

h2 {
  font-size: 86px;
  line-height: 103%;
  text-align: center;
  letter-spacing: 0.07em;
  margin-bottom: 60px;

  @media(max-width: 991px) {
    font-size: 36px;
    line-height: 103%;
    text-align: center;
    letter-spacing: 0.02em;
  }

  span {
    color: #B69453;
  }
}

.butt {
  position: relative;
  display: inline-flex;
  padding: 0 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  justify-content: center;
  color: #ffffff !important;
  height: 56px;;
  align-items: center;

  span {
    position: relative;
    z-index: 2;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #ffffff;
    transform: translate(-2px, -2px);
    transition: .2s;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translate(2px, 2px);
    background: #B69453;
    transition: .2s;
  }

  &:hover {
    &:before,
    &:after {
      transform: translate(0, 0);
      border-color: #B69453;
    }
  }
}

//header styles

header {
  background: #303030;

  .container {
    height: 80px;
    flex-direction: row;
    align-items: center;
  }
}

.hamburger {
  margin-left: auto;
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 22px;
  justify-content: space-between;
  cursor: pointer;

  span {
    background: #B69453;
    border-radius: 2px;
    width: 100%;
    height: 4px;
  }
}

//offer styles

.offer {
  background: url("./assets/offer.png") no-repeat;
  background-size: cover;
  background-position: center;

  .container {
    justify-content: center;
    min-height: calc(100vh - 80px);
    align-items: flex-start;
  }
}

.offer__descr {
  margin-bottom: 30px;
  max-width: 470px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  font-family: 'Montserrat', sans-serif;
  color: #BBBBBB;

  @media(max-width: 767px) {
    font-size: 14px;
    line-height: 17px;
  }
}

//advantages styles

.advantages {
  padding: 80px 0;

  @media(max-width: 991px) {
    padding: 40px 0;
  }
}

.advantages__wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.advantages__item {
  max-width: 33.33%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;

  @media(max-width: 767px) {
    max-width: 50%;
  }
}

.advantages__icon {
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 115px;

  img {
    height: 100%;
  }

  @media (max-width: 991px) {
    height: 80px;
  }
}

.advantages__text {
  max-width: 250px;
  color: #B69453;
  text-align: center;text-transform: uppercase;
  font-weight: bold;
  font-size: 22px;
  padding: 0 10px;

  @media (max-width: 991px) {
    font-size: 14px;
    max-width: 170px;
  }
}

//partners styles

.partners {
  border-top: 1px solid #B69453;
  background: rgba(236, 224, 193, 0.23);
  padding: 80px 0;

  @media (max-width: 991px) {
    padding: 40px 0;
  }
}

.partners__wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;

  @media(max-width: 767px) {
    margin: 0;
  }
}

//partners single cart styles

.partners__item {
  width: calc(25% - 24px);
  margin: 12px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  position: relative;
  border: 1px solid rgba(88, 87, 87, 0.23);
  transition: .3s;
  min-height: 350px;

  @media(max-width: 1199px) {
    width: calc(33.33% - 24px);
  }

  @media(max-width: 991px) {
    width: calc(50% - 24px);
  }

  @media(max-width: 767px) {
    width: calc(100% - 20px);
    margin: 10px;
  }

  &.active {
    border: 1px solid transparent;
    z-index: 1000;

    .partners__logo{
      box-shadow: 0px 1px 15px 5px rgba(88, 87, 87, 0.23);
      position: relative;
    }
  }

  &.checked {
    border-color: rgba(35, 148, 1, .23);
    box-shadow: 0px 1px 15px 5px rgba(35, 148, 1, .23);
  }
}

.partners__logo {
  width: 100%;
  height: 70px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.partners__info {
  max-height: 300px;
  position: relative;
  overflow: hidden;
  padding: 20px 20px 0;

  &.active {
    max-height: none;
    position: absolute;
    left: 0;
    top: 70px;
    background: #ffffff;
    z-index: 100;
    box-shadow: 0px 15px 15px 5px rgba(88, 87, 87, 0.23);
    padding-bottom: 70px;
  }
}

.partners__title {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
}

.partners__text {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  color: #9E9E9E;
  margin-bottom: 10px;
}

.partners__subtitle {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
  color: #B69453;
}

.partners__list {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  li {
    position: relative;
    padding-left: 10px;
    font-size: 12px;
    margin: 3px 0;

    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      width: 1px;
      height: 100%;
      background: #B69453;
    }
  }
}

.partners__actions {
  position: absolute;
  top: calc(100% - 40px);
  height: 40px;
  display: flex;
  background: #ffffff;
  z-index: 200;
  left: 0;
  width: 100%;

  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: 100%;
    left: 0;
    height: 40px;
    width: 100%;
    background: linear-gradient(to top, #ffffff, transparent);
  }

  a {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    height: 40px;
    position: relative;

    &:first-child {
      font-size: 11px;
      text-align: center;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #E97000;

      &:before {
        content: '';
        display: block;
        position: absolute;
        left: -1px;
        bottom: -1px;
        width: 12px;
        height: 12px;
        background: #ffa047;
        transition: .3s;
        opacity: 0;
      }

      &:hover {
        color: #ffa047;

        &:before {
          opacity: 1;
        }
      }
    }

    &:last-child {
      background: #B69453;
      color: #ffffff;
      font-size: 11px;
      text-align: center;
      letter-spacing: 0.15em;
      text-transform: uppercase;

      &:hover {
        background: #d1ab64;
      }
    }

    &.checked {
      background: #239401;

      &:hover {
        background: #2bb900;
      }
    }
  }
}

//footer styles

.footer {
  background: #303030;

  .container {
    flex-direction: row;
    align-items: center;
    height: 60px;
    justify-content: space-between;
  }

  a {
    @media(max-width: 767px) {
      display: none;
    }
  }
}

.footer__copyright {
  font-size: 11px;
  line-height: 103%;
  text-align: center;
  letter-spacing: 0.15em;
  color: #BBBBBB;
}
</style>
