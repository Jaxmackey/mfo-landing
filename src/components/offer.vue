<template>
  <div class="offer">
    <div class="container">
      <h1>Мы поможем получить деньги быстро</h1>
      <div class="offer__descr">Помогаем  выбрать заёмщика с наилучшими условиями. Вам ничего не нужно делать, просто оформите заявку у нас на сайте и ждите одобрения</div>
      <a
        href="#"
        class="butt"
        @click="$vuetify.goTo('.partners');"
      >
        <span>Оформить зявку</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.offer {
  background: url("../assets/offer.png") no-repeat;
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
</style>
