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
import Breadcrumbs from '@/components/breadcrumbs'

export default {
  components: {
    Breadcrumbs
  },
  props: {
    itemInfo: null
  },
  methods: {
    getImgUrl (pic) {
      return require(`@/assets/images/article/${pic}`)
    }
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
