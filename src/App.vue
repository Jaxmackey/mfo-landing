<template>
  <v-app id="app">
    <main>
      <Header />
      <Offer />
      <div class="container">
        <Advantages />
      </div>
      <Partners
        :items = items
        @updateParent="onUpdateSalary"
      />
      <v-btn
        class="butt-order"
        v-if="chooseItems.length > 0 && !dialog"
        color="#00cc1b"
        @click="dialog = true; reachGoal('MakeOrderGreenBtn');"
      >
        Oформить заявку
      </v-btn>
    </main>
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
    <v-btn
      icon
      @click="dialog = false"
      class="modal-close"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
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
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Срок займа, дней"
                    type="number"
                    disabled
                    v-model="orderInfo.period"
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
                  rules="required"
                  name="personalData"
                >
                  <v-checkbox
                    v-model="orderInfo.personalData"
                    label="Нажимая кнопку 'Отправить' Вы даёте свое согласие на обработку введенной персональной информации"
                    required
                  ></v-checkbox>
                </validation-provider>
              </v-row>
            </form>
          </v-card-text>
          <v-card-actions>
            <button
              type="submit"
              :disabled="invalid"
              class="butt butt-send-order"
              @click="sendOrder"
            >
              Отправить
            </button>
          </v-card-actions>
        </validation-observer>
      </v-card>
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
    >
      Спасибо за оформление заказа! С Вами свяжутся в ближайшее время!
    </v-snackbar>
    <Footer />
  </v-app>
</template>

<script>
import dataItems from '@/data'
import Header from './components/header'
import Footer from './components/footer'
import Offer from './components/offer'
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
    Footer,
    Offer,
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
    reachGoal (target) {
      this.$metrika.reachGoal(target)
    },
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
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          this.reachGoal('SendOrder')
          this.snackbar = true
          this.dialog = false
        })
        .catch(error => {
          console.log(error)
          this.dialog = false
        })
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import './assets/scss/base';

.butt-order {
  max-width: 300px;
  font-size: 18px !important;
  height: 50px !important;
  position: fixed;
  right: 50px;
  bottom: 50px;
  border-radius: 0;
  color: #fff !important;
  z-index: 130;
  @media(max-width: 991px) {
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 100%;
    width: 100%;
  }
}

.butt-send-order {
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
  &:disabled {
    background: gray;
    cursor: default;
  }
}
</style>
