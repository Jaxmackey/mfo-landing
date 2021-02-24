<template>
  <BlogSingle :itemInfo="itemInfo" />
</template>

<script>
import BlogSingle from '@/components/blog-single'
import axios from 'axios'
export default {
  components: {
    BlogSingle
  },
  data: () => {
    return {
      itemInfo: null
    }
  },
  mounted () {
    console.log(this.$route)
    this.getInfo()
  },
  methods: {
    getInfo () {
      axios
        .get(`https://ez-cash.ru/fullpostController.php?article=${this.$route.params.id}`)
        .then(({ data }) => {
          this.itemInfo = data[0]
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
