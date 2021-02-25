<template>
  <div class="container">
    <v-pagination
      v-model="page"
      :length="total"
      @input="changePage"
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
    },
    changePage: {
      type: Function,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>

::v-deep {
  .v-pagination.v-pagination {
    background: red;

    li {
      button {
        background: red !important;
      }

    }
  }
}

</style>
