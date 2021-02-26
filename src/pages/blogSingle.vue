<template>
  <div v-if="itemInfo">
    <div>{{ itemInfo.Title }}</div>
    <div v-if="itemInfo.Img"><img :src="getImgUrl(itemInfo.Img)" :alt="itemInfo.Title"></div>
    <div v-if="itemInfo.Html" v-html="itemInfo.Html" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => {
    return {
      itemInfo: null
    }
  },
  mounted () {
    console.log(this.itemInfo)
    this.getInfo()
  },
  methods: {
    getInfo () {
      axios.get(`https://ez-cash.ru/fullPostRoutController.php?name=${this.$route.params.name}`)
        .then(({ data }) => {
          console.log(data)
          this.itemInfo = data[0]
        })
        .catch(error => {
          console.log(error)
        })
    },
    getImgUrl (pic) {
      return require(`@/assets/images/article/${pic}`)
    }
  }
}
</script>
