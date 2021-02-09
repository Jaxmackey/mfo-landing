<template>
  <footer class="footer">
    <div class="container">
      <a href="/">
        <img src="../assets/logo.svg" alt="logo">
      </a>
      <div class="footer__copyright">©Все права защищены 2021 ezmoney.</div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  background: #303030;
  padding: 20px 0;
  margin-top: auto;

  .container {
    flex-direction: row;
    align-items: center;
    height: 60px;
    justify-content: space-between;
  }

  a {
    @media(max-width: 767px) {
      display: none;
    }
  }
}

.footer__copyright {
  font-size: 11px;
  line-height: 103%;
  text-align: center;
  letter-spacing: 0.15em;
  color: #BBBBBB;
}
</style>
