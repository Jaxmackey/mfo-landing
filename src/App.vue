<template>
  <div id="app">
    <header>
      <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
              <h4 class="text-white">О нас</h4>
              <p class="text-muted">Занимаемся выдачей микрозаймов более 10 лет.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container d-flex justify-content-between">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <img src="assets/images/thumb_342757_news_xxxl.png">
            <strong style="padding-left: 3px;">Займ ОНЛАЙН</strong>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>

    <main role="main">
      <section class="heading text-center banner">
        <div class="container">
          <div class="banner-wrapper">
            <h1 class="jumbotron-heading">МГНОВЕННЫЕ ЗАЙМЫ ОНЛАЙН - КРУГЛОСУТОЧНО!</h1>
            <h2>подайте заявку в 3-4 компании для 100% получения денег</h2>
            <a href="#" class="butt">оформить заявку</a>
          </div>
        </div>
      </section>

      <section class="advantages">
        <div class="container">
          <div class="advantages-wrapper">
            <div class="advantages-item">
              <div class="advantages-icon">
                <img src="assets/images/fast-time.svg" alt="">
              </div>
              <div class="advantages-text">Быстрый займ</div>
            </div>
            <div class="advantages-item">
              <div class="advantages-icon">
                <img src="assets/images/protection.svg" alt="">
              </div>
              <div class="advantages-text">Надежная защита</div>
            </div>
            <div class="advantages-item">
              <div class="advantages-icon">
                <img src="assets/images/handshake.svg" alt="">
              </div>
              <div class="advantages-text">Ответственный кредитор</div>
            </div>
          </div>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">
          <div class="items">
            <div class="item">
              <div class="item-photo">
                <img src="assets/images/denginadom.png" alt="">
              </div>
              <div class="item-wrapper">
                <div class="item-title">Информация о продукте:</div>
                <ul class="item-list">
                  <li>Сумма займа: от 5 000 до 100 000 рублей.</li>
                  <li>Срок займа: до 52 недель.</li>
                  <li>Мгновенное перечисление денег сразу после одобрени</li>
                  <li>Срок займа: до 52 недель.</li>
                  <li>Мгновенное перечисление денег сразу после одобрени</li>
                  <li>Срок займа: до 52 недель.</li>
                  <li>Мгновенное перечисление денег сразу после одобрени</li>
                  <li>Срок займа: до 52 недель.</li>
                  <li>Мгновенное перечисление денег сразу после одобрени</li>
                  <li>Срок займа: до 52 недель.</li>
                  <li>Мгновенное перечисление денег сразу после одобрени</li>
                  <li>Срок займа: до 52 недель.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="text-muted">
      <div class="container">
        <p class="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
        <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  body {
    font-family: "Montserrat", sans-serif;
  }

  .heading {
    padding: 40px 0;
  }

  h1 {
    text-align: left;
    font-weight: 700;
    font-style: 42px;
    margin-bottom: 25px;
  }

  h2 {
    text-align: left;
    font-weight: 300;
    font-size: 24px;
    max-width: 520px;
  }

  .banner {
    min-height: calc(100vh - 65px);
    background: url(assets/images/money.png) no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  .banner-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .banner .container {
    align-items: center;
    height: 100%;
  }

  .banner .container .butt {
    margin-top: 25px;
  }

  .butt {
    display: inline-flex;
    padding: 0 20px;
    height: 56px;
    font-weight: 600;
    color: #fff;
    transition: 0.3s;
    outline: 0;
    border: 0;
    background: #ffc75b;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 4px;
  }

  .item-photo {
    display: flex;
    justify-content: center;
    padding-top: 5px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ededed;
    margin-bottom: 15px;
  }

  .butt--center {
    margin: 0 auto;
  }

  .item-wrapper {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    overflow-y: auto;
    max-height: 200px;
  }

  .item-wrapper .butt {
    margin-top: 15px;
  }

  .butt:hover {
    background: #ce911a;
    color: #fff;
    text-decoration: none;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    cursor: pointer;
  }

  .item {
    border: 1px solid #ededed;
    box-shadow: 0;
    transition: 0.3s;
    background: #fff;
    width: calc(33.33% - 10px);
    margin: 5px 0;
    padding-bottom: 25px;
  }

  .item:hover {
    border: 1px solid transparent;
    -webkit-box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.34);
    box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.34);
  }

  .item.active {
    border: 1px solid transparent;
    -webkit-box-shadow: 0px 0px 32px 0px rgba(185, 128, 14, 0.84);
    box-shadow: 0px 0px 32px 0px rgba(185, 128, 14, 0.84);
  }

  .item-title {
    padding: 0 30px 5px;
    font-weight: 700;
    font-size: 18px;
  }

  .item-list {
    padding: 15px 30px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
  }

  .item-wrapper::-webkit-scrollbar {
    width: 3px;
    background-color: #e1e7e5;
  }

  .item-wrapper::-webkit-scrollbar-thumb {
    background-color: #ffc75b;
    border-radius: 2px;
    transition: 0.3s;
  }

  .item-wrapper::-webkit-scrollbar-thumb:hover {
    background-color: #ce911a;
  }

  .item-list li {
    margin: 5px 0;
    font-size: 16px;
    padding-left: 25px;
    position: relative;
  }

  .item-list li:before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: #ce911a;
    left: 0;
    top: 8px;
  }

  .advantages-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 80px 0;
  }

  .advantages-item {
    width: 33.33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .advantages-icon {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }

  .advantages-icon img {
    max-width: 100%;
  }

  .advantages-text {
    font-weight: 600;
    font-size: 26px;
  }
</style>
