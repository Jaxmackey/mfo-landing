<template>
  <div class="partners">
    <div class="container">
      <h2>Наши <span>партнёры</span></h2>
      <form class="filter">
        <v-row>
          <v-col cols="12" sm="6">
            <v-slider
              v-model="sum"
              min="500"
              max="100000"
              step="500"
              label="Сумма займа, руб."
              thumb-label="always"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-slider
              v-model="period"
              min="1"
              max="365"
              label="Срок займа, дней"
              thumb-label="always"
            />
          </v-col>
          <v-col cols="12">
            <div class="butt" @click="filterItems();"><span>Найти</span></div>
          </v-col>
        </v-row>
      </form>
      <div class="partners__wrapper" v-if="itemsNew.length > 0">
        <div class="partners__item" v-for="(item, i) in itemsNew" :key="i">
          <div class="partners__logo">
            <img :src="getImgUrl(item.NameImageLogo)" alt="">
          </div>
          <div class="partners__title" v-if="item.Title">{{ item.Title }}</div>
          <div class="partners__text" v-if="item.CompanyDescription">Быстроденьги – это возможность мигом получить займ экспресс без залога, скрытых комиссий и процентов, бумажной волокиты.</div>
          <div class="partners__actions">
            <div @click="setInfo(item);">подробнее</div>
            <div @click="setChooseItems(item, $event);">выбрать</div>
          </div>
        </div>
      </div>
      <div v-else>По данному запросу результатов не найдено</div>
    </div>
    <v-dialog
      v-model="showMore"
      persistent
      max-width="800px"
    >
      <v-btn
        icon
        dark
        @click="showMore = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-card v-if="moreInfo">
        <div class="partners__info">
          <div class="partners__title" v-if="moreInfo.Title">{{ moreInfo.Title }}</div>
          <div class="partners__text" v-if="moreInfo.CompanyDescription">Быстроденьги – это возможность мигом получить займ экспресс без залога, скрытых комиссий и процентов, бумажной волокиты.</div>
          <div v-if="moreInfo.InfoProduct.length > 0">
            <div class="partners__subtitle">Информация о продукте:</div>
            <ul class="partners__list">
              <li v-for="(info, i2) in moreInfo.InfoProduct" :key="i2">{{ info }}</li>
            </ul>
          </div>
          <div v-if="moreInfo.SposobiGeta.length > 0">
            <div class="partners__subtitle">Способы оплаты:</div>
            <ul class="partners__list">
              <li v-for="(sposob, i3) in moreInfo.SposobiGeta" :key="i3">{{ sposob }}</li>
            </ul>
          </div>
          <div v-if="moreInfo.ReqZaemshik.length > 0">
            <div class="partners__subtitle">Обязательно:</div>
            <ul class="partners__list">
              <li v-for="(req, i4) in moreInfo.ReqZaemshik" :key="i4">{{ req }}</li>
            </ul>
          </div>
          <div v-if="moreInfo.SposobiPogas.length > 0">
            <div class="partners__subtitle">Способы погашения:</div>
            <ul class="partners__list">
              <li v-for="(pogas, i5) in moreInfo.SposobiPogas" :key="i5">{{ pogas }}</li>
            </ul>
          </div>
        </div>
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
  methods: {
    getImgUrl (pic) {
      return require(`@/assets/images/mfo-logos/${pic}.png`)
    },
    setChooseItems (item, e) {
      if (this.chooseItems.find(i => i.NameImageLogo === item.NameImageLogo)) {
        const delItem = this.chooseItems.find(i => i.NameImageLogo === item.NameImageLogo)
        this.chooseItems.splice(this.chooseItems.indexOf(delItem), 1)
        e.target.closest('.partners__item').classList.remove('checked')
      } else {
        this.chooseItems.push(item)
        e.target.closest('.partners__item').classList.add('checked')
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
      const btnText = e.target.innerHTML === 'выбрать' ? 'отменить' : 'выбрать'
      e.target.innerHTML = btnText
    },
    setInfo (info) {
      this.showMore = true
      this.moreInfo = info
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
  position: relative;
  overflow: hidden;
  padding: 20px;

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
</style>
