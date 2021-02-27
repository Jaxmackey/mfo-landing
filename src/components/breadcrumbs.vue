<template>
  <div class="container">
    <div class="breadcrumbs">
      <a href="#" class="breadcrumbs__link">Главная</a>
      <span class="breadcrumbs__current">Блог</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .breadcrumbs {
    margin: 45px 0 60px;

    @media(max-width: 767px) {
      margin: 30px 0;
    }
  }

  .breadcrumbs__link {
    position: relative;
    margin-right: 30px;
    font-weight: 300;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;

    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 100%;
      height: 1px;
      width: 0;
      background: #b69453;
      transition: .3s;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      right: -15px;
      background: #b69453;
      width: 2px;
      height: 2px;
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
    }

    &:hover {
      &:before {
        width: 100%;
      }
    }
  }

  .breadcrumbs__current {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    color: #BFBFBF;
  }
</style>
