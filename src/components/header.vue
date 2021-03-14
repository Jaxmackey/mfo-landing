<template>
  <header>
    <div class="container">
      <a href="/" class="logo">
        <img src="../assets/logo.svg" alt="logo">
      </a>
      <div
        :class="'mobile-nav' + (showMenu ? ' active' : '')"
      >
        <nav class="nav">
          <!-- <a href="/about" class="nav__link">О нас</a> -->
          <a href="/catalog" class="nav__link">Микрозаймы</a>
          <a href="/blog" class="nav__link">Блог</a>
        </nav>
        <!-- <div class="social">
          <a href="#" class="social__link">
            <svg version="1.1" id="icon-ok" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="94px" height="94px" viewBox="0 0 94 94" style="enable-background:new 0 0 94 94;" xml:space="preserve">
                <path d="M47.051,37.59c5.247-0.017,9.426-4.23,9.407-9.489c-0.021-5.259-4.207-9.448-9.456-9.452
                c-5.293-0.005-9.52,4.259-9.479,9.566C37.562,33.454,41.788,37.612,47.051,37.59z" fill="#b69453"/>
                <path d="M89,0H5C2.239,0,0,2.238,0,5v84c0,2.762,2.239,5,5,5h84c2.762,0,5-2.238,5-5V5C94,2.238,91.762,0,89,0z M47.08,8.766
                c10.699,0.027,19.289,8.781,19.236,19.602c-0.057,10.57-8.787,19.138-19.469,19.102c-10.576-0.036-19.248-8.803-19.188-19.396
                C27.722,17.365,36.4,8.734,47.08,8.766z M68.753,55.072c-2.366,2.431-5.214,4.187-8.378,5.416
                c-2.991,1.156-6.268,1.742-9.512,2.13c0.49,0.534,0.721,0.793,1.025,1.102c4.404,4.425,8.826,8.832,13.215,13.27
                c1.494,1.511,1.81,3.386,0.985,5.145c-0.901,1.925-2.916,3.188-4.894,3.052c-1.252-0.088-2.228-0.711-3.094-1.582
                c-3.324-3.345-6.711-6.627-9.965-10.031c-0.947-0.992-1.403-0.807-2.241,0.056c-3.343,3.442-6.738,6.831-10.155,10.2
                c-1.535,1.514-3.36,1.785-5.143,0.922c-1.892-0.917-3.094-2.848-3.001-4.791c0.064-1.312,0.71-2.314,1.611-3.214
                c4.356-4.351,8.702-8.713,13.05-13.072c0.289-0.288,0.557-0.597,0.976-1.045c-5.929-0.619-11.275-2.077-15.85-5.657
                c-0.567-0.445-1.154-0.875-1.674-1.373c-2.002-1.924-2.203-4.125-0.618-6.396c1.354-1.942,3.632-2.464,5.997-1.349
                c0.459,0.215,0.895,0.486,1.313,0.775c8.528,5.86,20.245,6.023,28.806,0.266c0.847-0.647,1.754-1.183,2.806-1.449
                c2.045-0.525,3.947,0.224,5.045,2.012C70.314,51.496,70.297,53.488,68.753,55.072z" fill="#b69453"/>
            </svg>
          </a>
          <a href="#" class="social__link">
            <svg version="1.1" id="icon-ins" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="94px" height="94px" viewBox="0 0 94 94" style="enable-background:new 0 0 94 94;" xml:space="preserve">
              <path d="M64.748,32.155h8.781c1.923,0,3.496-1.574,3.496-3.498v-8.371c0-1.925-1.573-3.498-3.496-3.498h-8.781
              c-1.924,0-3.497,1.573-3.497,3.498v8.371C61.251,30.581,62.824,32.155,64.748,32.155z"  fill="#b69453"/>
              <ellipse cx="47.074" cy="46.831" rx="15.602" ry="15.117"  fill="#b69453"/>
              <path d="M89,0H5C2.239,0,0,2.239,0,5v84c0,2.761,2.239,5,5,5h84c2.762,0,5-2.239,5-5V5C94,2.239,91.762,0,89,0z M85.843,75.872
              c0,5.911-4.487,9.971-9.971,9.971H18.128c-5.484,0-9.971-4.06-9.971-9.971V18.128c0-5.911,4.486-9.971,9.971-9.971h57.744
              c5.483,0,9.971,4.06,9.971,9.971V75.872z"  fill="#b69453"/>
              <path d="M71.221,47.676c0,12.922-10.812,23.396-24.146,23.396c-13.336,0-24.147-10.475-24.147-23.396
              c0-2.316,0.35-4.553,0.997-6.666h-7.136v32.815c0,1.698,1.391,3.088,3.089,3.088h54.099c1.697,0,3.088-1.39,3.088-3.088V41.01
              h-6.838C70.871,43.123,71.221,45.359,71.221,47.676z" fill="#b69453"/>
            </svg>
          </a>
          <a href="#" class="social__link">
            <svg version="1.1" id="icon-vk" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="94px" height="94px" viewBox="0 0 94 94" style="enable-background:new 0 0 94 94;" xml:space="preserve">
              <path d="M89,0H5C2.238,0,0,2.239,0,5v84c0,2.761,2.238,5,5,5h84c2.762,0,5-2.239,5-5V5C94,2.239,91.762,0,89,0z M74.869,52.943
              c2.562,2.5,5.271,4.854,7.572,7.617c1.018,1.22,1.978,2.48,2.709,3.899c1.041,2.024,0.101,4.247-1.713,4.366l-11.256-0.003
              c-2.906,0.239-5.22-0.931-7.172-2.918c-1.555-1.585-3.001-3.277-4.5-4.914c-0.611-0.673-1.259-1.306-2.025-1.806
              c-1.534-0.996-2.867-0.692-3.748,0.909c-0.896,1.63-1.103,3.438-1.185,5.255c-0.125,2.655-0.925,3.348-3.588,3.471
              c-5.69,0.268-11.091-0.596-16.108-3.463c-4.429-2.53-7.854-6.104-10.838-10.146c-5.816-7.883-10.27-16.536-14.27-25.437
              c-0.901-2.005-0.242-3.078,1.967-3.119c3.676-0.073,7.351-0.063,11.022-0.004c1.496,0.023,2.485,0.879,3.058,2.289
              c1.985,4.885,4.421,9.533,7.471,13.843c0.813,1.147,1.643,2.292,2.823,3.103c1.304,0.896,2.298,0.601,2.913-0.854
              c0.393-0.928,0.563-1.914,0.647-2.906c0.292-3.396,0.327-6.792-0.177-10.175c-0.315-2.116-1.507-3.483-3.617-3.883
              c-1.074-0.204-0.917-0.602-0.395-1.215c0.906-1.062,1.76-1.718,3.456-1.718l12.721-0.002c2.006,0.392,2.452,1.292,2.725,3.311
              l0.012,14.133c-0.021,0.782,0.391,3.098,1.795,3.61c1.123,0.371,1.868-0.53,2.54-1.244c3.048-3.235,5.22-7.056,7.167-11.009
              c0.857-1.743,1.6-3.549,2.32-5.356c0.533-1.337,1.367-1.995,2.875-1.971l12.246,0.013c0.36,0,0.729,0.004,1.086,0.063
              c2.062,0.355,2.627,1.243,1.99,3.257c-1.004,3.163-2.959,5.799-4.871,8.441c-2.043,2.825-4.224,5.557-6.252,8.396
              C72.411,49.38,72.561,50.688,74.869,52.943z" fill="#b69453"/>
            </svg>
          </a>
        </div> -->
      </div>

      <a href="mailTo:ezcash.official@gmail.com" class="link-mail">ezcash.official@gmail.com</a>
      <div class="hamburger" @click="showMenu = !showMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => {
    return {
      showMenu: false
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  background: #303030;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 101;

  .container {
    height: 100px;
    flex-direction: row;
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;

    @media(max-width: 1259px) {
      height: 80px;
    }
  }
}

.logo {
  max-width: 160px;
  display: flex;
  align-items: center;
  width: 100%;

  @media(max-width: 1259px) {
    max-width: 105px;
  }

  img {
    width: 100%;
  }
}

.nav {
  margin-left: 50px;
  margin-right: auto;
  display: flex;
  align-items: center;
  height: 100%;

  @media(max-width: 1259px) {
    flex-direction: column;
    width: 100%;
    margin: 0;
    height: auto;
    align-items: center;
    padding: 50px 40px 0;
  }

  &__link {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    margin: 0 5px;
    padding: 0 15px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 1259px) {
      margin: 15px 0;
      padding: 0;
      font-size: 22px;
    }

    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 15px;
      top: 100%;
      width: 0;
      transition: .3s;
      background: #b69453;
      height: 1px;
    }

    &:hover {
      color: #ffffff;

      &:before {
        background: #ffffff;
        width: calc(100% - 30px);
      }
    }
  }
}

.link-mail {
  margin-left: 30px;
  position: relative;
  @media(max-width: 1259px) {
    margin-left: auto;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 100%;
    width: 0;
    transition: .3s;
    background: #b69453;
    height: 1px;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }
}

.social {
  display: flex;
  align-items: center;
  margin-left: auto;

  @media(max-width: 1259px) {
    margin-left: 0;
    width: 100%;
    justify-content: center;
    padding: 0 40px;
  }

  &__link {
    width: 20px;
    height: 20px;
    display: flex;
    margin-left: 10px;

    @media(max-width: 1259px) {
      margin: 0 15px;
    }

    svg {
      max-width: 100%;
      max-height: 100%;

      path,
      ellipse {
        transition: .3s;
      }
    }

    &:hover {
      svg path,
      svg ellipse {
        fill: #ffffff;
      }
    }
  }
}

.hamburger {
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 22px;
  justify-content: space-between;
  cursor: pointer;
  display: none;

  @media(max-width: 1259px) {
    display: flex;
  }

  span {
    background: #B69453;
    border-radius: 2px;
    width: 100%;
    height: 4px;
  }
}

.mobile-nav {
  display: flex;
  align-items: center;
  height: 100%;
  flex-grow: 1;

  @media(max-width: 1259px) {
    position: fixed;
    border-top: 1px solid #B69453;
    top: 80px;
    background: #303030;
    left: 0;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    z-index: 100;
    width: 100%;
    max-width: 400px;
    height: calc(100vh - 80px);
    transform: translateX(-110%);
    transition: .2s ease-out;

    &.active {
      transform: translateX(0);
    }
  }
}
</style>
