<template>
  <div v-if="itemInfo">
    <div>{{ itemInfo.Title }}</div>
    <div v-if="itemInfo.Img"><img :src="getImgUrl(itemInfo.Img)" :alt="itemInfo.Title"></div>
    <div v-if="itemInfo.Html" v-html="itemInfo.Html" />
  </div>
</template>

<script>
export default {
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
