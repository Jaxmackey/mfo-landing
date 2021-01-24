<template>
  <header>
    <div class="container">
      <a href="/">
        <img src="./assets/logo.svg" alt="logo">
      </a>
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  header {
    background: #303030;

    .container {
      height: 80px;
      flex-direction: row;
      align-items: center;
    }
  }

  .hamburger {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    width: 40px;
    height: 22px;
    justify-content: space-between;
    cursor: pointer;

    span {
      background: #B69453;
      border-radius: 2px;
      width: 100%;
      height: 4px;
    }
  }
</style>
