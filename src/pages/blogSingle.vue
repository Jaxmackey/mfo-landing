<template>
  <div class="container" v-if="itemInfo">
    <Breadcrumbs />
    <div v-if="itemInfo.Img" class="blog-img"><img :src="getImgUrl(itemInfo.Img)" :alt="itemInfo.Title"></div>
    <div class="blog-content">
      <h1 class="h1-black">{{ itemInfo.Title }}</h1>
      <div v-if="itemInfo.Html" v-html="itemInfo.Html" class="blog-text"></div>
    </div>
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
    this.getInfo()
  },
  methods: {
    getInfo () {
      axios.get(`https://ez-cash.ru/fullPostRoutController.php?name=${this.$route.params.name}`)
        .then(({ data }) => {
          this.itemInfo = data[0]
        })
        .catch(error => {
          console.log(error)
        })
    },
    getImgUrl (pic) {
      return require(`@/assets/images/article/${pic}`)
    }
  },
  metaInfo: {
    title: this.itemInfo.Title,
    description: this.itemInfo.Mintext
  }
}
</script>

<style lang="scss" scoped>
.blog-img {
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
  }
}

.blog-content {
  max-width: 850px;
  margin: 0 auto 50px;
}

.blog-text {
  font-size: 22px;
  line-height: 30px;
  display: flex;
  flex-direction: column;

  @media(max-width: 767px) {
    font-size: 16px;
    line-height: 22px;
  }
}
</style>
