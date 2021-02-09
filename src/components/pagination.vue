<template>
  <div class="container">
    <v-pagination
      v-model="page"
      :length="total"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
