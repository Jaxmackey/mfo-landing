<template>
  <v-app id="app">
    <main>
      <Header />
      <div class="offer">
        <div class="container">
          <h1>Мы поможем получить деньги быстро</h1>
          <div class="offer__descr">Помогаем  выбрать заёмщика с наилучшими условиями. Вам ничего не нужно делать, просто оформите заявку у нас на сайте и ждите одобрения</div>
          <a
            href="#"
            class="butt"
            @click="$vuetify.goTo('.partners', options)"
          >
            <span>Оформить зявку</span>
          </a>
        </div>
      </div>
      <div class="container">
        <Advantages />
      </div>
      <Partners
        :items = items
        @updateParent="onUpdateSalary"
      />
    </main>
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
          v-show="chooseItems.length > 0 && !dialog"
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
            <form @submit.prevent="sendOrder">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Сумма займа, руб."
                    type="number"
                    disabled
                    v-model="orderInfo.sum"
                    :error-messages="errors"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Срок займа, дней"
                    type="number"
                    disabled
                    v-model="orderInfo.period"
                    :error-messages="errors"
                  ></v-text-field>
                </v-col>
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
    <v-snackbar
      v-model="snackbar"
    >
      Спасибо за оформление заказа! С Вами свяжутся в ближайшее время!
    </v-snackbar>
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
import dataItems from '@/data'
import Header from './components/header'
import Advantages from './components/advantages'
import Partners from './components/partners'
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
    Header,
    Advantages,
    Partners,
    ValidationProvider,
    ValidationObserver
  },
  data: () => {
    return {
      items: dataItems,
      chooseItems: [],
      orderInfo: {
        sum: 0,
        period: 0,
        firstName: null,
        lastName: null,
        patronymic: null,
        email: null,
        phone: null,
        country: null,
        city: null,
        personalData: false
      },
      dialog: false,
      orderBtn: false,
      snackbar: false
    }
  },
  methods: {
    onUpdateSalary (someData) {
      this.orderBtn = someData.orderBtn
      this.chooseItems = someData.chooseItems
      this.orderInfo.sum = someData.sum
      this.orderInfo.period = someData.period
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
      this.orderInfo.sum = ''
      this.orderInfo.personalData = false
    },
    sendOrder () {
      axios
        .post('http://194.58.120.164:8080/', {
          sum: parseInt(this.orderInfo.sum),
          period: this.orderInfo.period,
          firstName: this.orderInfo.firstName,
          lastName: this.orderInfo.lastName,
          patronymic: this.orderInfo.patronymic,
          email: this.orderInfo.email,
          phone: parseInt(this.orderInfo.phone),
          country: this.orderInfo.country,
          city: this.orderInfo.city,
          personalData: this.orderInfo.personalData,
          chooseItems: this.chooseItems.map((item) => item?.Title)
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          console.log(response)
          this.snackbar = true
        })
        .catch(error => {
          console.log(error)
          this.false = true
        })
    }
  }
}
</script>

<style lang="scss">
// global styles
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import './assets/scss/base';

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
//footer styles

.footer {
  background: #303030;
  padding: 20px 0;

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
