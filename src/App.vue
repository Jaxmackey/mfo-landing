<template>
  <v-app id="app">
    <header>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container d-flex justify-content-between">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <img src="./assets/images/thumb_342757_news_xxxl.png">
            <strong style="padding-left: 3px;">Займ ОНЛАЙН</strong>
          </a>
          <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="butt butt--fixed"
                v-bind="attrs"
                v-on="on"
                v-show="orderBtn && !dialog"
                color="#00cc1b"
              >
                Oформить заявку
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Введите ваши данные</span>
              </v-card-title>
              <validation-observer
                ref="observer"
                v-slot="{ invalid }"
              >
                <v-card-text>
                  <v-container>
                    <form @submit.prevent="sendOrder">
                        <v-row>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <validation-provider
                              v-slot="{ errors }"
                              name="Фамилия"
                              rules="required"
                            >
                              <v-text-field
                                label="Фамилия"
                                required
                                v-model="orderInfo.lastName"
                                :error-messages="errors"
                              ></v-text-field>
                            </validation-provider>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <validation-provider
                              v-slot="{ errors }"
                              name="Имя"
                              rules="required"
                            >
                              <v-text-field
                                label="Имя"
                                required
                                v-model="orderInfo.firstName"
                                :error-messages="errors"
                              ></v-text-field>
                            </validation-provider>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              label="Отчество"
                              v-model="orderInfo.patronymic"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <validation-provider
                              v-slot="{ errors }"
                              name="Email"
                              rules="required|email"
                            >
                              <v-text-field
                                label="Email"
                                required
                                v-model="orderInfo.email"
                                :error-messages="errors"
                              ></v-text-field>
                            </validation-provider>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <validation-provider
                              v-slot="{ errors }"
                              name="Телефон"
                              rules="required"
                            >
                              <v-text-field
                                label="Телефон"
                                type="tel"
                                required
                                v-model="orderInfo.phone"
                                :error-messages="errors"
                              ></v-text-field>
                            </validation-provider>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <validation-provider
                              v-slot="{ errors }"
                              name="Страна"
                              rules="required"
                            >
                              <v-text-field
                                label="Страна"
                                type="text"
                                required
                                v-model="orderInfo.country"
                                :error-messages="errors"
                              ></v-text-field>
                            </validation-provider>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <validation-provider
                              v-slot="{ errors }"
                              name="Город"
                              rules="required"
                            >
                              <v-text-field
                                label="Город"
                                type="text"
                                required
                                v-model="orderInfo.city"
                                :error-messages="errors"
                              ></v-text-field>
                            </validation-provider>
                          </v-col>
                          <v-col cols="12">
                            <div>Выбранные партнеры:</div>
                            <ul>
                              <li v-for="(item, i) in chooseItems" :key="i">{{ item.Title }}</li>
                            </ul>
                          </v-col>
                            <validation-provider
                              v-slot="{ errors }"
                              rules="required"
                              name="personalData"
                            >
                              <v-checkbox
                                v-model="orderInfo.personalData"
                                label="Нажимая кнопку 'Отправить' Вы даёте свое согласие на обработку введенной персональной информации"
                                required
                                :error-messages="errors"
                              ></v-checkbox>
                            </validation-provider>
                        </v-row>
                    </form>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    @click="dialog=false"
                  >
                    Закрыть
                  </v-btn>
                  <v-btn
                    color="#00cc1b"
                    type="submit"
                    @click="sendOrder"
                    :disabled="invalid"
                  >
                    Отправить
                  </v-btn>
                </v-card-actions>
              </validation-observer>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </header>

    <main role="main">
      <section class="heading text-center banner">
        <div class="container">
          <div class="banner-wrapper">
            <h1 class="jumbotron-heading">МГНОВЕННЫЕ ЗАЙМЫ ОНЛАЙН - КРУГЛОСУТОЧНО!</h1>
            <h2>подайте заявку в 3-4 компании для 100% получения денег</h2>
            <a href="#" class="butt" @click="$vuetify.goTo('.album', options)">оформить заявку</a>
          </div>
        </div>
      </section>

      <section class="advantages">
        <div class="container">
          <div class="advantages-wrapper">
            <div class="advantages-item">
              <div class="advantages-icon">
                <img src="./assets/images/fast-time.svg" alt="">
              </div>
              <div class="advantages-text">Быстрый займ</div>
            </div>
            <div class="advantages-item">
              <div class="advantages-icon">
                <img src="./assets/images/protection.svg" alt="">
              </div>
              <div class="advantages-text">Надежная защита</div>
            </div>
            <div class="advantages-item">
              <div class="advantages-icon">
                <img src="./assets/images/handshake.svg" alt="">
              </div>
              <div class="advantages-text">Ответственный кредитор</div>
            </div>
          </div>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">
          <div class="items">
            <div class="item" @click="setChooseItems(item, $event);" v-for="(item, i1) in items" :key="i1">
              <div class="item-photo">
                <img :src="getImgUrl(item.NameImageLogo)" alt="">
              </div>
              <div class="item-wrapper">
                <div class="item-title" v-if="item.Title">{{ item.Title }}</div>
                <div class="item-description" v-if="item.CompanyDescription">{{ item.CompanyDescription }}</div>
                <div v-if="item.InfoProduct.length > 0">
                  <div class="item-list-title">Информация о продукте:</div>
                  <ul class="item-list">
                    <li v-for="(info, i2) in item.InfoProduct" :key="i2">{{ info }}</li>
                  </ul>
                </div>
                <div v-if="item.SposobiGeta.length > 0">
                  <div class="item-list-title">Способы оплаты:</div>
                  <ul class="item-list">
                    <li v-for="(sposob, i3) in item.SposobiGeta" :key="i3">{{ sposob }}</li>
                  </ul>
                </div>
                <div v-if="item.ReqZaemshik.length > 0">
                  <div class="item-list-title">Обязательно:</div>
                  <ul class="item-list">
                    <li v-for="(req, i4) in item.ReqZaemshik" :key="i4">{{ req }}</li>
                  </ul>
                </div>
                <div v-if="item.SposobiPogas.length > 0">
                  <div class="item-list-title">Способы погашения:</div>
                  <ul class="item-list">
                    <li v-for="(pogas, i5) in item.SposobiPogas" :key="i5">{{ pogas }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </v-app>
</template>

<script>
import dataItems from './data'
import axios from 'axios'
import { required, email } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: 'Поле {_field_} не должно быть пустым'
})

extend('email', {
  ...email,
  message: 'Введите корректный email'
})

export default {
  name: 'App',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => {
    return {
      items: dataItems,
      dialog: false,
      chooseItems: [],
      orderBtn: false,
      orderInfo: {
        firstName: null,
        lastName: null,
        patronymic: null,
        email: null,
        phone: null,
        country: null,
        city: null,
        personalData: false
      }
    }
  },
  mounted () {
    window.onscroll = function () {
      if (window.pageYOffset > 500) {
        document.querySelector('.butt--fixed').classList.add('show')
      } else {
        document.querySelector('.butt--fixed').classList.remove('show')
      }
    }
  },
  methods: {
    getImgUrl (pic) {
      return require(`./assets/images/mfo-logos/${pic}.png`)
    },
    setChooseItems (item, e) {
      if (this.chooseItems.find(i => i.NameImageLogo === item.NameImageLogo)) {
        const delItem = this.chooseItems.find(i => i.NameImageLogo === item.NameImageLogo)
        this.chooseItems.splice(this.chooseItems.indexOf(delItem), 1)
        e.target.closest('.item').classList.remove('active')
      } else {
        this.chooseItems.push(item)
        e.target.closest('.item').classList.add('active')
      }
      this.chooseItems.length > 0 ? this.orderBtn = true : this.orderBtn = false
    },
    clear () {
      this.$v.$reset()
      this.orderInfo.lastName = ''
      this.orderInfo.firstName = ''
      this.orderInfo.patronymic = ''
      this.orderInfo.email = ''
      this.orderInfo.phone = ''
      this.orderInfo.country = ''
      this.orderInfo.city = ''
      this.orderInfo.personalData = false
    },
    sendOrder () {
      axios
        .post('test', {
          firstName: this.orderInfo.firstName,
          lastName: this.orderInfo.lastName,
          patronymic: this.orderInfo.patronymic,
          email: this.orderInfo.email,
          phone: this.orderInfo.phone,
          country: this.orderInfo.country,
          city: this.orderInfo.city,
          chooseItems: this.chooseItems
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss">
  /* temp styles */
  .navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 1rem;
  }
  .bg-dark {
    background-color: #343a40!important;
  }
  .shadow-sm {
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  }
  .navbar-brand {
    display: flex;
    align-items: center;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    text-decoration: none;
  }
  .navbar-dark .navbar-brand {
    color: #fff;
  }
  .bg-light {
    background-color: #f8f9fa!important;
  }
  .py-5 {
    padding: 3rem 0;
  }
  .container.d-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  /* /temp styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    width: 1140px;
    margin: 0 auto;
    max-width: 100%;
    padding: 0 15px;
  }

  body {
    font-family: "Montserrat", sans-serif;
  }

  .heading {
    padding: 40px 0;
  }

  h1 {
    text-align: left;
    font-weight: 700;
    font-size: 42px;
    margin-bottom: 25px;
    @media(max-width: 767px) {
      font-size: 32px;
    }
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
    color: #ffffff;
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

    &--fixed {
      right: 20px;
      bottom: 20px;
      position: fixed !important;
      border-radius: 0 !important;
      height: 56px !important;
      color: #ffffff !important;
      font-size: 18px !important;
      font-weight: 600 !important;
      background-color: #00cc1b !important;
      z-index: 9999;
      opacity: 0;
      pointer-events: none;
      transition: .3s;
      @media(max-width: 1264px) {
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
      }

      &.show {
        opacity: 1;
        pointer-events: all;
      }
    }
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
    @media(max-width: 991px) {
      padding-bottom: 40px;
    }
  }

  .item {
    border: 1px solid #ededed;
    box-shadow: none;
    transition: 0.3s;
    background: #fff;
    width: calc(33.33% - 10px);
    margin: 10px 0;
    padding-bottom: 25px;
    @media(max-width: 1264px) {
      width: calc(50% - 10px);
    }
    @media(max-width: 767px) {
      width: 100%;
    }
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
    font-size: 24px;
    line-height: 26px;
    color: #b47a06;
  }

  .item-list {
    padding: 5px 30px !important;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
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
    line-height: 20px;
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
    @media(max-width: 767px) {
      justify-content: center;
      padding: 10px 0;
    }
  }

  .advantages-item {
    width: 33.33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media(max-width: 767px) {
      width: 50%;
      margin: 10px 0;
    }
  }

  .advantages-icon {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    @media(max-width: 767px) {
      width: 120px;
      height: 120px;
    }
  }

  .advantages-icon img {
    max-width: 100%;
  }

  .advantages-text {
    font-weight: 600;
    font-size: 26px;
    @media(max-width: 991px) {
      font-size: 18px;
    }
  }

  .item-description {
    color: #797979;
    padding: 0 30px 10px;
    font-size: 14px;
  }

  .item-list-title {
    font-size: 18px;
    font-weight: 600;
    padding: 10px 30px;
  }
</style>
