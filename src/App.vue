<template>
  <v-app id="app">
    <main>
      <Header />
      <router-view />
    </main>
  </v-app>
</template>

<script>

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import './assets/scss/base';

.butt-order {
  max-width: 300px;
  font-size: 18px !important;
  height: 50px !important;
  position: fixed;
  right: 50px;
  bottom: 50px;
  border-radius: 0;
  color: #fff !important;
  z-index: 130;
  @media(max-width: 991px) {
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 100%;
    width: 100%;
  }
}

.butt-send-order {
  min-width: 220px;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  height: 50px;
  background: #B69453;
  text-transform: uppercase;
  z-index: 1;

  &:after,
  &:before {
    display: none;
  }
  &:disabled {
    background: gray;
    cursor: default;
  }
}
</style>
