<template>
  <div class="partners" v-if="items">
    <div class="container">
      <h2>Наши <span>партнёры</span></h2>
      <form class="filter"><!-- фильтры партнёров --></form>
      <div class="partners__wrapper">
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
</template>

<script>
export default {
  props: {
    items: null
  },
  data: () => {
    return {
      chooseItems: [],
      orderBtn: false
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
        e.target.closest('.item').classList.remove('active')
      } else {
        this.chooseItems.push(item)
        e.target.closest('.item').classList.add('active')
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
        chooseItems: this.chooseItems
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
</style>
