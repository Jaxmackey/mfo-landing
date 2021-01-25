<template>
  <div class="advantages">
    <h2>Кто может получить <span>деньги</span></h2>
    <div class="advantages__wrapper">
      <div class="advantages__item">
        <div class="advantages__icon">
          <img src="../assets/adv-1.svg" alt="">
        </div>
        <div class="advantages__text">студенты</div>
      </div>
      <div class="advantages__item">
        <div class="advantages__icon">
          <img src="../assets/adv-2.svg" alt="">
        </div>
        <div class="advantages__text">БЕЗ ОФИЦИАЛЬНОГО МЕСТА РАБОТЫ</div>
      </div>
      <div class="advantages__item">
        <div class="advantages__icon">
          <img src="../assets/adv-3.svg" alt="">
        </div>
        <div class="advantages__text">ИМЕЮЩИМ СУДИМОСТИ</div>
      </div>
      <div class="advantages__item">
        <div class="advantages__icon">
          <img src="../assets/adv-4.svg" alt="">
        </div>
        <div class="advantages__text">ПЕНСИОНЕРАМ</div>
      </div>
      <div class="advantages__item">
        <div class="advantages__icon">
          <img src="../assets/adv-5.svg" alt="">
        </div>
        <div class="advantages__text">С ПЛОХОЙ КРЕДИТНОЙ ИСТОРИЕЙ</div>
      </div>
      <div class="advantages__item">
        <div class="advantages__icon">
          <img src="../assets/adv-6.svg" alt="">
        </div>
        <div class="advantages__text">НАХОДЯЩИМСЯ В ДЕКРЕТЕ</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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
</style>
