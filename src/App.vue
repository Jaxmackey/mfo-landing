<template>
  <v-app id="app">
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
          <div class="partners__wrapper"><!-- карточки партнёров --></div>
        </div>
      </div>
    </main>
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
</style>
