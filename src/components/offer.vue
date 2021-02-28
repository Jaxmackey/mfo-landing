<template>
  <div class="offer">
    <div class="container">
      <div class="offer__wrapper">
        <h1>Мы поможем получить деньги быстро</h1>
        <div class="offer__descr">Помогаем  выбрать заёмщика с наилучшими условиями. Вам ничего не нужно делать, просто оформите заявку у нас на сайте и ждите одобрения</div>
        <!-- <a
          href="/catalog"
          class="butt"
          @click="reachGoal('СlickMakeRequestHeader');"
        >
          <span>Оформить зявку</span>
        </a> -->
      </div>
      <form class="filter">
        <v-slider
          v-model="sum"
          min="1000"
          max="100000"
          step="1000"
          label="Сумма займа, руб."
        >
          <template v-slot:prepend>
            <v-text-field
              v-model="sum"
              type="number"
              style="width: 60px"
              hide-details
              class="slider-value"
            ></v-text-field>
          </template>
        </v-slider>
        <v-slider
          v-model="period"
          min="1"
          max="30"
          label="Срок займа, дней"
        >
          <template v-slot:prepend>
            <v-text-field
              v-model="period"
              hide-details
              class="slider-value"
              type="number"
              style="width: 60px"
            ></v-text-field>
          </template>
        </v-slider>
        <div class="butt butt--white" @click="filterItems(); reachGoal('ClickFindBtn');"><span>Подобрать</span></div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      sum: null,
      period: null
    }
  },
  methods: {
    reachGoal (target) {
      this.$metrika.reachGoal(target)
    },
    filterItems () {
      this.$router.push({ path: '/catalog', query: { sum: this.sum, period: this.period } })
    }
  }
}
</script>

<style lang="scss" scoped>
.offer {
  background: url("../assets/offer.png") no-repeat;
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 100px);
  @media(max-width: 1259px) {
    min-height: calc(100vh - 80px);
  }

  .container {
    flex-direction: row;
    align-items: flex-start;
    padding-top: 20vh;

    @media(max-width: 1259px) {
      padding-top: 40px;
    }
    @media(max-width: 1199px) {
      flex-direction: column;
      min-height: auto;
    }
  }
}

.offer__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: calc(100% - 500px);
  margin-right: auto;
  @media(max-width: 1199px) {
    width: 100%;
    margin-bottom: 0;
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
    font-size: 16px;
    line-height: 17px;
  }
}

.filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 380px;
  background: white;
  padding: 25px;
  border-radius: 15px;
  @media(max-width: 1199px) {
    margin-bottom: 25px;
  }
  @media(max-width: 991px) {
    width: 100%;
    margin: 0 auto 20px;
  }
  @media(max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .butt {
    min-width: 170px;
    flex-shrink: 0;
    @media(max-width: 767px) {
      margin-left: auto;
      margin-right: auto;
      min-width: 250px;
      margin-top: 0;
    }
  }
}

::v-deep {
  .slider-value.v-text-field {
    padding-top: 0;

    .v-input__slot {
      &:before {
        display: none;
      }
    }

    input {
      background: white;
      border-bottom: 0;
      padding: 0;
      height: 46px;
      text-align: right;
      min-width: 130px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      font-size: 22px;
    }
  }

  .v-messages {
    opacity: 0;
    height: 0;
    min-height: 0;
  }

  .v-input__slot {
    margin-bottom: 0 !important;

    .v-label {
      margin-right: 0 !important;
      text-align: right;
    }
  }

  .v-slider--horizontal {
    margin-left: 0;
    margin-right: 0;
  }

  .v-input__slot {
    flex-direction: column-reverse;
    align-items: inherit;
  }

  .filter {
    > .v-input {
      width: 100%;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      @media(max-width: 767px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 20px;
      }

      .v-input__prepend-outer {
        margin: 0;
        min-width: 130px;
        margin-left: auto;

        .v-input {
          padding: 0;
          margin: 0;
        }
      }
    }
  }

  .v-card__text {
    padding: 16px 24px !important;
  }

  .v-sheet.v-card {
    border-radius: 0;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;

    &>.butt {
      min-width: 220px;
      margin: 0 auto;
      font-family: 'Montserrat', sans-serif;
      color: #fff;
      height: 50px;
      background: #B69453;
      text-transform: uppercase;
      z-index: 1;

      &:after,
      &:before {
        display: none;
      }
    }
  }

  .v-btn {
    z-index: 1;
  }
}
</style>
