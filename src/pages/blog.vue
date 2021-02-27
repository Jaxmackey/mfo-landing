<template>
  <div>
    <Breadcrumbs />
    <div class="container">
      <div class="blog">
        <h2>Блог</h2>
        <div class="blog__wrapper">
          <div v-for="(item, i) in items" :key="i" :class="'blog__item' + (i === 0 || i === 3 ? ' blog__item--big' : '')" @click="$router.push({ name: 'blog', params: { name: item.seoname, id: item.Id } })">
            <img :src="getImgUrl(item.Img)" :alt="item.Title">
            <div class="blog__info">
              <div class="blog__title">{{ item.Title }}</div>
              <div class="blog__date">{{ new Date(item.DateAt).toLocaleDateString() }}</div>
              <div class="blog__preview">{{ item.MinText }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <v-pagination
        v-model="page"
        :length="pages"
        :total-visible="7"
        @input="changePage(page)"
      ></v-pagination>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import Footer from '@/components/footer'
import Breadcrumbs from '@/components/breadcrumbs'

export default {
  components: {
    Footer,
    Breadcrumbs
  },
  data: () => {
    return {
      page: 1,
      perPage: null,
      pages: null,
      items: null
    }
  },
  mounted () {
    this.page = this.$route.query.page ? parseInt(this.$route.query.page) : 1
    this.setPagination()
  },
  methods: {
    getImgUrl (pic) {
      return require(`@/assets/images/article/${pic}`)
    },
    setPagination () {
      axios.get('https://ez-cash.ru/paginationController.php')
        .then(({ data }) => {
          this.perPage = data.perPage
          this.pages = data.countPage
        })
        .catch(error => {
          console.log(error)
        })
      axios.get(`https://ez-cash.ru/postsController.php?page=${this.page}`)
        .then(({ data }) => {
          this.items = data
        })
        .catch(error => {
          console.log(error)
        })
    },
    changePage (page) {
      axios.get(`https://ez-cash.ru/postsController.php?page=${page}`)
        .then(({ data }) => {
          this.$router.push({ query: { page: page } })
          this.items = data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.blog__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 940px;
  margin: 0 auto;
}

.blog__item {
  border-radius: 50px;
  overflow: hidden;
  margin: 15px 0;
  position: relative;
  width: calc(50% - 15px);
  padding: 50px;
  display: flex;
  cursor: pointer;
  min-height: 530px;

  @media(max-width: 991px) {
    padding: 25px;
    border-radius: 25px;
  }

  @media(max-width: 767px) {
    width: 100%;
    min-height: 370px;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0.52%, #000000 100%);
    z-index: 2;
    transition: .5s;
    transform: translateY(60%);
  }

  &--big {
    width: 100%;
    margin: 15px 0;
    min-height: 600px;

    @media(max-width: 767px) {
      min-height: 370px;
    }

    .blog__views {
      right: 50px;
      bottom: 62px;

      @media(max-width: 991px) {
        top: 25px;
        right: 25px;
        bottom: auto;
        font-size: 19px;
        line-height: 23px;
      }

    }

    .blog__title {
      font-size: 46px;
      line-height: 50px;

      @media(max-width: 767px) {
        font-size: 28px;
        line-height: 32px;
        max-width: 290px;
      }
    }

    .blog__info {
      max-width: 490px;
      max-height: 100px;

      @media(max-width: 767px) {
        max-height: 96px;
      }
    }

    &:hover {
      .blog__info {
        max-height: 450px;
      }
    }
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  &:hover {
    &:before {
      transform: translateY(0);
    }

    .blog__info {
      max-height: 310px;
    }
  }
}

.blog__info {
  position: relative;
  z-index: 3;
  margin-top: auto;
  width: 100%;
  max-width: 290px;
  transition: .5s;
  max-height: 96px;
  overflow: hidden;
}

.blog__title {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;
  color: #FFFFFF;
  width: 100%;
  margin-bottom: 20px;
  min-height: 96px;
}

.blog__views {
  position: absolute;
  font-size: 19px;
  line-height: 23px;
  right: 50px;
  bottom: 53px;
  padding-right: 20px;
  z-index: 3;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;

  @media(max-width: 991px) {
    top: 25px;
    right: 25px;
    bottom: auto;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    background: url("../assets/images/eye.svg") no-repeat;
    background-size: contain;
    width: 15px;
    height: 15px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}

.blog__date {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #FFE70F;
  margin-bottom: 20px;
}

.blog__preview {
  color: #E7E7E7;
  font-size: 14px;
  line-height: 16px;
  padding-bottom: 6px;
}

::v-deep {
  .v-pagination__navigation {
    box-shadow: none;
    background: transparent;
  }

  .mdi-chevron-left::before {
    content: '';
    background: url("../assets/arrow-prev.svg") no-repeat;
    background-size: contain;
    width: 15px;
    height: 28px;
  }

  .mdi-chevron-right::before {
    content: '';
    background: url("../assets/arrow-next.svg") no-repeat;
    background-size: contain;
    width: 15px;
    height: 28px;
  }

  .v-pagination.v-pagination {
    padding: 50px 0;

    button {
      outline: 0 !important;
    }
  }

  .theme--light.v-pagination .v-pagination__item {
    border-radius: 0;
    box-shadow: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 22px;
    margin: 0 10px;
    min-width: auto;

    @media(max-width: 767px) {
      margin: 0 8px;
      font-size: 18px;
    }

    &--active.primary {
      background-color: transparent !important;
      color: #b69453;
    }
  }
}
</style>
