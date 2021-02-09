<template>
  <div>
    <Breadcrumbs />
    <div class="container">
      <div class="blog">
        <div class="title">Блог</div>
        <div class="blog__wrapper">
          <div class="blog__item blog__item--big">
            <img src="../assets/images/blog-1.png" alt="">
            <div class="blog__views">22</div>
            <div class="blog__info">
              <div class="blog__title">История успеха</div>
              <div class="blog__date">20.12.2021</div>
              <div class="blog__preview">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </div>
            </div>
          </div>
          <div class="blog__item">
            <img src="../assets/images/blog-2.png" alt="">
            <div class="blog__views">22</div>
            <div class="blog__info">
              <div class="blog__title">История успеха</div>
              <div class="blog__date">20.12.2021</div>
              <div class="blog__preview">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </div>
            </div>
          </div>
          <div class="blog__item">
            <img src="../assets/images/blog-3.png" alt="">
            <div class="blog__views">22</div>
            <div class="blog__info">
              <div class="blog__title">История успеха</div>
              <div class="blog__date">20.12.2021</div>
              <div class="blog__preview">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </div>
            </div>
          </div>
          <div class="blog__item blog__item--big">
            <img src="../assets/images/blog-4.png" alt="">
            <div class="blog__views">22</div>
            <div class="blog__info">
              <div class="blog__title">История успеха</div>
              <div class="blog__date">20.12.2021</div>
              <div class="blog__preview">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <v-pagination
        v-model="page"
        :length="pages"
      ></v-pagination>
    </div>
    <Footer />
  </div>
</template>

<script>
import dataItems from '@/data'
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
      perPage: 8,
      pages: null,
      items: dataItems
    }
  },
  mounted () {
    this.pages = this.totalPages()
  },
  methods: {
    totalPages () {
      return parseInt(dataItems.length / this.perPage)
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
</style>
