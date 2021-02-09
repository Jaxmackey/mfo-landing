<template>
  <div class="partners">
    <div class="container">
      <h2>Наши <span>партнёры</span></h2>
      <form class="filter">
        <v-slider
          v-model="sum"
          min="500"
          max="100000"
          step="500"
          label="Сумма займа, руб."
          thumb-label="always"
          @change="onChangeSlider($event)"
        />
        <v-slider
          v-model="period"
          min="1"
          max="365"
          label="Срок займа, дней"
          thumb-label="always"
          @change="onChangeSlider($event)"
        />
        <div class="butt butt--white" @click="filterItems(); reachGoal('ClickFindBtn');"><span>Найти</span></div>
      </form>
      <div class="partners__wrapper" v-if="itemsNew.length > 0">
        <div :class="item.Choose ? 'partners__item checked' : 'partners__item'" v-for="(item, i) in itemsNew" :key="i">
          <div class="partners__logo">
            <img :src="getImgUrl(item.NameImageLogo)" alt="">
          </div>
          <div class="partners__descr">
            <div class="partners__title" v-if="item.Title">{{ item.Title }}</div>
            <div class="partners__text" v-if="item.CompanyDescription">Быстроденьги – это возможность мигом получить займ экспресс без залога, скрытых комиссий и процентов, бумажной волокиты.</div>
          </div>
          <div class="partners__actions">
            <div @click="setInfo(item);">подробнее</div>
            <div @click="setChooseItems(item);">{{ item.Choose ? 'отменить' : 'выбрать' }}</div>
          </div>
        </div>
      </div>
      <div v-else class="result-empty">По данному запросу результатов не найдено</div>
    </div>
    <v-dialog
      v-model="showMore"
      max-width="800px"
    >
      <v-btn
        icon
        @click="showMore = false"
        class="modal-close"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-card v-if="moreInfo">
        <div class="partners__info">
          <div class="partners__title" v-if="moreInfo.Title">{{ moreInfo.Title }}</div>
          <div class="partners__text" v-if="moreInfo.CompanyDescription">Быстроденьги – это возможность мигом получить займ экспресс без залога, скрытых комиссий и процентов, бумажной волокиты.</div>
          <div v-if="moreInfo.InfoProduct.length > 0" class="partners__block">
            <div class="partners__subtitle">Информация о продукте:</div>
            <ul class="partners__list">
              <li v-for="(info, i2) in moreInfo.InfoProduct" :key="i2">{{ info }}</li>
            </ul>
          </div>
          <div v-if="moreInfo.SposobiGeta.length > 0" class="partners__block">
            <div class="partners__subtitle">Способы оплаты:</div>
            <ul class="partners__list">
              <li v-for="(sposob, i3) in moreInfo.SposobiGeta" :key="i3">{{ sposob }}</li>
            </ul>
          </div>
          <div v-if="moreInfo.ReqZaemshik.length > 0" class="partners__block">
            <div class="partners__subtitle">Обязательно:</div>
            <ul class="partners__list">
              <li v-for="(req, i4) in moreInfo.ReqZaemshik" :key="i4">{{ req }}</li>
            </ul>
          </div>
          <div v-if="moreInfo.SposobiPogas.length > 0" class="partners__block">
            <div class="partners__subtitle">Способы погашения:</div>
            <ul class="partners__list">
              <li v-for="(pogas, i5) in moreInfo.SposobiPogas" :key="i5">{{ pogas }}</li>
            </ul>
          </div>
        </div>
        <div class="butt butt--white" @click="showMore = false; setChooseItems(moreInfo, $event);">{{ moreInfo.Choose ? 'отменить' : 'выбрать' }}</div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    items: null
  },
  data: () => {
    return {
      chooseItems: [],
      orderBtn: false,
      sum: 0,
      period: 0,
      itemsNew: [],
      showMore: false,
      moreInfo: null
    }
  },
  mounted () {
    this.itemsNew = this.items
  },
  methods: {
    onChangeSlider (event) {
      this.itemsNew = []
    },
    reachGoal (target) {
      this.$metrika.reachGoal(target)
    },
    getImgUrl (pic) {
      return require(`@/assets/images/mfo-logos/${pic}.png`)
    },
    setChooseItems (item) {
      if (this.chooseItems.find(i => i.NameImageLogo === item.NameImageLogo)) {
        const delItem = this.chooseItems.find(i => i.NameImageLogo === item.NameImageLogo)
        this.chooseItems.splice(this.chooseItems.indexOf(delItem), 1)
        item.Choose = false
      } else {
        this.chooseItems.push(item)
        item.Choose = true
      }
      if (this.chooseItems.length > 0) {
        this.$emit('updateParent', {
          orderBtn: true
        })
      } else {
        this.$emit('updateParent', {
          orderBtn: false
        })
      }
      this.$emit('updateParent', {
        chooseItems: this.chooseItems,
        sum: this.sum,
        period: this.period
      })
    },
    setInfo (info) {
      this.moreInfo = info
      this.showMore = true
    },
    filterItems () {
      this.itemsNew = this.items.filter((item) => {
        if (this.sum >= item.MinMany && this.sum <= item.MaxMany && item.MinDay <= this.period && item.MaxDay >= this.period) {
          return item
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 50px;
  @media(max-width: 991px) {
    width: calc(100% - 50px);
    margin: 50px auto 20px;
  }
  @media(max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .butt {
    min-width: 170px;
    margin-left: 15px;
    flex-shrink: 0;
    @media(max-width: 767px) {
      margin-left: auto;
      margin-right: auto;
      min-width: 250px;
      margin-top: -20px;
    }
  }
}

.partners__block {
  width: 50%;
  flex-shrink: 0;
  margin: 10px 0;
  @media(max-width: 767px) {
    width: 100%;
  }
}

.partners {
  border-top: 1px solid #B69453;
  background:rgba(231, 231, 231, 0.38);
  padding: 80px 0;

  @media (max-width: 991px) {
    padding: 40px 0;
  }
}

.partners__descr {
  padding: 0 20px;
}

.partners__wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
  @media(max-width: 767px) {
    margin: 0;
  }
}

.partners__item {
  width: calc(25% - 24px);
  margin: 12px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  position: relative;
  border: 1px solid rgba(88, 87, 87, 0.23);
  transition: .3s;
  min-height: 250px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    height: calc(100% - 40px);
    background-color: rgba(0, 0, 0, .5);
    background-image: url("../assets/check.svg");
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center;
    transition: .3s;
    opacity: 0;
    z-index: 100;
    pointer-events: none;
  }

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

  &.checked {
    &:before {
      opacity: 1;
      pointer-events: all;
    }
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
  position: relative;
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;

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
  padding: 0;

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
  z-index: 99;
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

  div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    height: 40px;
    position: relative;
    cursor: pointer;

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

::v-deep {
  .v-messages {
    opacity: 0;
    height: 0;
    min-height: 0;
  }

  .v-input__slot {
    margin-bottom: 0 !important;
  }

  .v-slider__thumb-label {
    width: 50px !important;
    height: 50px !important;
    @media(max-width: 767px) {
      font-size: 10px;
      width: 36px !important;
      height: 36px !important;
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

  .v-input {
    margin-right: 55px;
    @media(max-width: 767px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 50px
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

.result-empty {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 32px;
  margin: 30px 0;
}
</style>
