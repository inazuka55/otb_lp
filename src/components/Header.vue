<template>
  <header class="header" :class="{ 'is-open': isActive, 'is-sticky': overHeroContent, 'is-fixed': route.path !== '/' }" style="display: none;">
    <div class="nav-wrap">
      <NuxtLink class="logo flexbox align-center" to="/" rel="bookmark">
        <img src="/images/img-logo.jpg" alt="東京予防医療クリニック" />
      </NuxtLink>
      <button type="button" role="button" :class="{ 'is-closed': isActive }" aria-label="Toggle Navigation" data-navicon="button" class="humburger" @click="isClicked">
        <span class="humburger-lines"></span>
      </button>
      <div class="nav">
        <ul class="nav-list">
          <li>
            <NuxtLink :to="{ path: '/', hash: '#what' }" class="scrollto flexbox align-center justify-center" @click="removeBodyClass">
              <span class="menu-title-wrap">What is</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ path: '/', hash: '#review' }" class="scrollto flexbox align-center justify-center" @click="removeBodyClass">
              <span class="menu-title-wrap">Review</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ path: '/', hash: '#campaign' }" class="scrollto flexbox align-center justify-center" @click="removeBodyClass">
              <span class="menu-title-wrap">Campaign</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ path: '/', hash: '#fee' }" class="scrollto flexbox align-center justify-center" @click="removeBodyClass">
              <span class="menu-title-wrap">Fee</span>
            </NuxtLink>
          </li>
          <div class="button-wrap">
            <a href="https://www.tokyo-yobo.com/?utm_medium=katarakulp&utm_content=menu" target="_blank">
              <p>ご予約はこちら</p>
              <span class="arrow"></span>
            </a>
          </div>
          <div class="navigation-button">
            <a href="https://page.line.me/301uojfv?oat_content=url&openQrModal=true" target="_blank">
              <img src="~/assets/icons/icon-line.svg" alt="東京予防医療クリニック公式LINEアカウント" />
            </a>
            <a href="https://www.instagram.com/tokyo_yobo_clinic/" target="_blank">
              <img src="~/assets/icons/icon-instagram.svg" alt="東京予防医療クリニック公式Instagramアカウント" />
            </a>
          </div>
        </ul>
      </div>
    </div>
    <div class="sd-bottom-header" :class="{ 'is-sticky': overHeroContent, 'is-fixed': route.path !== '/' }">
      <a href="https://www.tokyo-yobo.com/?utm_medium=katarakulp&utm_content=fixedbutton" target="_blank">
        <img src="~/assets/icons/icon-calendar.svg" alt="WEB予約" />
        <span>ご予約はこちらから</span>
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = ref(useRoute());

let isActive = ref(false);

const isClicked = (): boolean => {
  isActive.value = !isActive.value;
  document.body.classList.toggle('pined');
  return isActive.value;
};

const removeBodyClass = (refName: string): void => {
  isActive.value = false;
  document.body.classList.remove('pined');
};
</script>

<style lang="scss" scoped>
@use '~/assets/css/mixin.scss';
$headerHeight: 60px;

.header {
  width: 100%;
  height: $headerHeight;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #fff;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;

  //   @include mixin.max-screen(mixin.$medium) {
  //     opacity: 1;
  //     visibility: visible;
  //   }

  &.is-sticky,
  &.is-fixed {
    opacity: 1;
    visibility: visible;
  }

  .grid {
    padding: 0 50px;
    width: 100%;
    height: 100%;

    @include mixin.max-screen(mixin.$medium) {
      padding: 0;
      width: 90%;
      margin: auto;
    }
  }

  .nav-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 5.5% 0 2.5%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include mixin.max-screen(mixin.$small) {
      padding: 0 15px;
    }

    .logo {
      width: fit-content;
      height: 40px;

      img {
        height: 100%;
        width: auto;

        @include mixin.max-screen(mixin.$medium) {
          height: 35px;
        }
      }
    }
  }

  .nav {
    .nav-list {
      li {
        display: none;

        span {
          display: block;
        }
      }

      .button-wrap {
        display: none;
      }

      .navigation-button {
        width: fit-content;
        display: flex;
        margin: 0 auto 0;

        @include mixin.max-screen(1060px) {
          display: none;
        }

        a {
          width: 28px;
          height: auto;

          &:first-of-type {
            margin-right: 25px;
          }
        }
      }
    }
  }

  .humburger {
    display: block;
    position: absolute;
    width: 25px;
    height: 45px;
    z-index: 1000;
    inset: auto 15px auto auto;
    margin: auto;
    padding: 0;
    outline: none;
    background-color: transparent;

    .humburger-lines {
      position: relative;
      display: block;
      background: mixin.$sub;
      width: 100%;
      height: 2px;

      &:before,
      &:after {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: mixin.$sub;
        border-radius: 2px;
        @include mixin.transition;
      }

      &:before {
        bottom: 6px;
      }

      &:after {
        top: 6px;
      }
    }
  }

  &.is-open {
    .nav {
      width: 100%;
      height: 100vh;
      background-color: #fff;
      display: block;
      position: absolute;
      top: $headerHeight;
      left: 0;

      .nav-list {
        align-items: center;
        padding: 40px 0 0;
        text-align: center;
        height: calc(100% - 100px);
        display: block;

        li {
          display: inline-block;
          width: 100%;
          height: auto;
          letter-spacing: 1.5px;
          padding: 0;

          &:last-of-type {
            a {
              padding-right: 0;
            }
          }

          .scrollto {
            @include mixin.flexbox;
            display: block;
            padding: 20px 0;
            text-decoration: none;
          }
        }

        .button-wrap {
          display: block;
          margin: 20px auto;

          a {
            .arrow {
              margin-top: 1px;
            }
          }
        }

        .navigation-button {
          width: fit-content;
          display: flex;
          margin: 40px auto 0;

          a {
            width: 35px;
            height: auto;

            &:first-of-type {
              margin-right: 25px;
            }
          }
        }
      }
    }

    .humburger-lines {
      background: #fff;

      &:before {
        transform: rotate(45deg);
        top: 50%;
      }

      &:after {
        transform: rotate(-45deg);
        top: 50%;
        width: 100%;
      }
    }
  }
}

.sd-bottom-header {
  display: none;
  @include mixin.max-screen(1060px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    transition: all 0.3s ease-in-out;
    box-shadow: 3px 0px 6px #00000029;

    &.is-sticky,
    &.is-fixed {
      opacity: 1;
      visibility: visible;
    }

    a {
      width: 300px;
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: mixin.$sub;
      color: #fff;
      border-radius: 15px;
      display: flex;

      @include mixin.max-screen(mixin.$small) {
        width: 250px;
      }

      img {
        width: 20px;
        height: auto;
        margin-right: 10px;
      }

      span {
        font-size: 1em;
      }
    }
  }
}
</style>
