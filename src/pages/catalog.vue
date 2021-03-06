<template>
  <div>
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
                    rules="required|min:5"
                  >
                    <v-text-field
                      label="Телефон"
                      type="number"
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
                  v-slot="{ errors }"
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
            <button
              type="submit"
              :disabled="!orderInfo.personalData || invalid"
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
  </div>
</template>

<script>
import dataItems from '@/data'
import Partners from '@/components/partners'
import axios from 'axios'
import { required, email, min } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import Footer from '@/components/footer'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: 'Поле {_field_} не должно быть пустым'
})

extend('email', {
  ...email,
  message: 'Введите корректный email'
})

extend('min', {
  ...min,
  message: 'Необходимо ввести минимум 5 символов'
})

export default {
  components: {
    Partners,
    ValidationProvider,
    ValidationObserver,
    Footer
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
      this.$refs.observer.validate().then(valid => {
        if (valid) {
          axios
            .post('/emailController.php', {
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
      })
    }
  },
  metaInfo: {
    title: 'EZCASH - Микрозаймы',
    meta: [
      { name: 'description', content: 'Компания EZCASH сотрудничает с такими известными компаниями как Mishka Money, Доброзайм, Слава Займ, Kometa Zaim, и др.' }
    ]
  }
}
</script>
