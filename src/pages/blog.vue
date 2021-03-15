<template>
  <div>
    <Breadcrumbs />
    <div class="container">
      <div class="blog">
        <div class="title">Блог</div>
        <div class="blog__wrapper">
          <div v-for="(item, i) in items" :key="i" :class="'blog__item' + (i === 0 || i === 3 ? ' blog__item--big' : '')" @click="$router.push({ name: 'blog', params: { name: item.seoname, id: item.Id } })">
            <img :src="'/img/' + item.Img" alt="">
            <div class="blog__info">
              <div class="blog__title">{{ item.Title }}</div>
              <div class="blog__date">{{ new Date(item.DateAt).toLocaleDateString() }}</div>
              <div class="blog__preview">{{ item.MinText }}</div>
            </div>
            <a :href="'/blog/' + item.seoname"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <!-- <v-pagination
        v-model="page"
        :length="pages"
        :total-visible="7"
        @input="changePage(page)"
      ></v-pagination> -->
      <ul class="pagination">
        <li v-for="(pageNum, pageIndex) in pages" :key="pageIndex" @click="changePage(pageNum)" :class="{ active: pageNum === page}">
          <a :href="`/blog?page=${pageNum}`">{{ pageNum }}</a>
        </li>
      </ul>
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
    setPagination () {
      axios.get('https://ez-cash.ru/paginationController.php')
        .then(({ data }) => {
          debugger
          this.perPage = data.perPage
          this.pages = data.countPage
          this.$root.$emit('loaded')
        })
        .catch(error => {
          debugger
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
          this.page = page
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  metaInfo: {
    title: 'EZCASH - Блог',
    meta: [
      { name: 'description', content: 'EZCASH Блог: статьи о создании собственного бизнеса, карьере и обучении' }
    ]
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
        min-height: 400px;
      }

      .blog__views {
        right: 50px;
        bottom: 62px;

        @media(max-width: 991px) {
          top: 25px;
          right: 25px;
          bottom: auto;
        }
      }

      .blog__title {
        font-size: 56px;
        line-height: 68px;

        @media(max-width: 767px) {
          font-size: 40px;
          line-height: 42px;
        }
      }

      .blog__info {
        max-width: 490px;
        max-height: 68px;

        @media(max-width: 767px) {
          max-height: 136px;
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
    max-height: 88px;
    overflow: hidden;
  }

  .blog__title {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    color: #FFFFFF;
    width: 100%;
    margin-bottom: 20px;
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

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    a {
      border-radius: 4px;
      height: 34px;
      margin: 0 5px;
      min-width: 34px;
      padding: 0 5px;
      text-decoration: none;
      transition: 0.3s cubic-bezier(0, 0, 0.2, 1);
      width: auto;
      box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .active a {
      background-color: #b69453;
      border-color: #b69453;
      box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
      color: #fff;
    }
  }
</style>
