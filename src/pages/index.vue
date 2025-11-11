<template>
  <div>
    <NuxtLink to="/job-seeker" class="btn">求職者はこちら</NuxtLink>
    <NuxtLink to="/agent" class="btn">転職エージェントはこちら</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const baseDir = runtimeConfig.public.baseDir;


const windowHeight = ref('cacl(100vh - 230px)');
const getWindowHeight = () => {
  if (document.documentElement.clientWidth > 480) {
    windowHeight.value = document.documentElement.clientHeight - 230 + 'px';
  } else {
    windowHeight.value = document.documentElement.clientHeight - 176 + 'px';
  }
};

onMounted(() => {
  window.addEventListener('resize', getWindowHeight);
  getWindowHeight();
});

const head = {};
usePageHead(head);
</script>

<style lang="scss" scoped>
@use '~/assets/css/mixin.scss';

.window-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;

  .background {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-image: url(/images/img-background.jpg);
    background-position: center;
    background-size: cover;

    @include mixin.max-screen(mixin.$medium) {
      background-position: right 50%;
    }
  }
  .window {
    width: 50%;

    &.hero {
      width: 100%;
      height: 100vh;
      position: sticky;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      @include mixin.max-screen(1060px) {
        display: none;
      }

      .hero-inner {
        max-width: 408px;
        width: 100%;
        background: rgba(255, 255, 255, 0.8);
        border: 1px solid #ffffff;
        border-radius: 15px;
        box-shadow: 0px 3px 6px #00000029;
        opacity: 1;
        padding: 55px 50px;
      }

      h1 {
        font-family: 'Hiragino Mincho ProN', sans-serif;
        font-size: 1.7em;
        font-weight: normal;
      }

      .hero-inner_desc {
        margin: 20px 0 40px;

        .text {
          font-size: 0.875em;
          font-family: 'Hiragino', sans-serif;

          span {
            display: block;
          }
        }
      }
    }

    &.contents {
      position: relative;
      width: 640px;
      flex-shrink: 0;
      margin: auto;

      @include mixin.max-screen(mixin.$large) {
        max-width: 640px;
        width: 100%;
      }

      $copyHeight: 200px;
      $heroSpace: 30px;

      .main-hero_contents {
        margin-bottom: 60px;
        max-height: 800px;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 0 0 15px 15px;

        @include mixin.max-screen(1060px) {
          border-radius: 0;
        }
      }

      .main-hero {
        width: 100%;
        height: calc(100vh - $copyHeight - $heroSpace);
        max-height: 570px;
        background-image: url(/images/img-hero.jpg);
        background-position: 65% bottom;
        background-size: cover;
        background-repeat: no-repeat;
        color: #fff;
        text-align: center;
        position: relative;

        @include mixin.max-screen(mixin.$small) {
          height: calc(100vh - 146px - $heroSpace);

        }

        .main-hero-inner {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);

          h2 {
            font-size: 1.875em;
            text-shadow: 0px 3px 6px #484848af;
            letter-spacing: 0.07em;

            @include mixin.max-screen(mixin.$small) {
              font-size: 1.5625em;
            }
          }
        }
      }

      .main-hero-copy {
        width: 100%;
        max-height: $copyHeight;
        background-color: white;
        border-radius: 0 0 15px 15px;
        text-align: center;
        padding: 55px 0;

        @include mixin.max-screen(mixin.$small) {
          padding: 30px 20px;
        }

        @include mixin.max-screen(1060px) {
          border-radius: 0;
        }

        h4 {
          font-size: 1.25em;
          font-weight: bold;
          margin-bottom: 20px;

          @include mixin.max-screen(mixin.$small) {
            font-size: 1em;
            line-height: 1.25;
          }
        }

        h1 {
          font-size: 3.125em;
          color: mixin.$main;

          @include mixin.max-screen(mixin.$small) {
            font-size: 2.875em;
          }
        }
      }

      .topic {
        color: white;

        .sub-heading {
          font-weight: bold;

          span {
            display: block;

            &.ja {
              font-size: 1.625em;
              display: inline;

              @include mixin.max-screen(mixin.$medium) {
                font-size: 1.25em;
              }
            }

            @include mixin.max-screen(mixin.$medium) {
              font-size: 1em;
              display: inline;
            }
          }
        }

        p {
          &:last-of-type {
            margin-top: 1em;
          }

          @include mixin.max-screen(mixin.$medium) {
            font-weight: normal;
          }

          span {
            display: block;
          }
        }
      }

      .trouble {
        width: 100%;
        background-color: white;
        background-image: url(/images/img-trouble.jpg);
        background-position: 85% 0;
        background-size: contain;
        background-repeat: no-repeat;

        @include mixin.max-screen(mixin.$medium) {
          background-position: 110% 0;
        }

        .trouble-inner {
          position: relative;

          @include mixin.max-screen(mixin.$medium) {
            margin-right: 0;
          }
        }

        .trouble-list {
          p {
            width: fit-content;
            font-weight: bold;
            background-color: white;
            border-radius: 15px;
            box-shadow: 0px 3px 6px #00000029;
            padding: 16px 10px;
            margin-bottom: 15px;

            &:last-of-type {
              margin-bottom: 0;
            }
          }
        }
      }

      .confidence {
        .confidence-inner {
          span {
            font-size: 1.25em;
            font-weight: bold;
            color: white;
            line-height: 1.5;
            letter-spacing: 0.05em;
            display: block;

            @include mixin.max-screen(mixin.$small) {
              font-size: 4.1vw;
              display: inline;
            }

            @include mixin.screen(mixin.$small, 1060px) {
              text-align: center;
            }
          }
        }
      }

      .treatment {
        background-color: white;

        .sub-heading {
          span {
            font-weight: bold;
          }
        }

        .treatment-inner {
          .treatment-point {
            width: 98%;
            margin-left: 2%;
            margin-top: 50px;
            counter-reset: count;

            @include mixin.max-screen(mixin.$medium) {
              width: 100%;
              margin-left: 0;
              margin-top: 30px;
            }

            .point {
              margin-bottom: 40px;

              &:last-of-type {
                margin-bottom: 0;
              }

              @include mixin.max-screen(mixin.$medium) {
                margin-bottom: 30px;
              }

              &:nth-of-type(2) {
                p {
                  text-indent: -13px;
                  padding-left: 13px;

                  &::before {
                    content: '・';
                    margin-right: 5px;
                  }
                }
              }

              &:last-of-type {
                margin-bottom: 0;
              }

              h4 {
                font-size: 1em;
                position: relative;
                margin-bottom: 20px;

                .point-label {
                  font-family: 'adobe-handwriting-ernie', sans-serif;
                  position: absolute;
                  left: -20px;
                  bottom: 30px;
                  font-size: 1.125em;
                  transform: rotate(-8deg);
                  display: inline-block;
                  background-color: #fff;
                  padding: 0 10px;

                  @include mixin.max-screen(mixin.$small) {
                    font-size: 0.875em;
                  }
                }

                .point-title {
                  display: inline-block;
                  width: 250px;
                  color: mixin.$main;
                  border: 1px solid mixin.$main;
                  padding: 10px 20px;
                  border-radius: 0 50px 50px 0;

                  @include mixin.max-screen(mixin.$medium) {
                    font-size: 1em;
                  }
                }
              }

              p {
                span {
                  font-weight: bold;
                }
              }
            }
          }
        }
      }

      .what {
        color: white;

        .heading {
          color: white;
        }

        .what-img {
          width: 100%;
          height: auto;
          aspect-ratio: 5 / 2;
          background-repeat: no-repeat;
          border-radius: 5px;
          margin-bottom: 15px;

          @include mixin.max-screen(mixin.$medium) {
            margin-bottom: 10px;
          }
        }

        p {
          span {
            display: block;

            &:last-of-type {
              margin-top: 1em;
            }
          }
        }
      }

      .effect {
        &.box {
          background-color: white;
        }

        .sub-heading {
          margin-bottom: 0;
        }
      }

      .effect {
        .effect-inner {
          .effect-wrap {
            counter-reset: count;
            .effect-content {
              width: 90%;
              max-width: 295px;
              margin: 0 auto 30px;
              background-color: #fff;
              border-radius: 15px;
              box-shadow: 0px 3px 6px #00000029;
              padding: 25px 0 0;
              counter-increment: count;

              .image {
                max-width: 190px;
                width: 100%;
                height: auto;
                margin: 0 auto 25px;

                img {
                  object-fit: cover;
                }
              }

              .e-cap {
                color: white;
                background-color: mixin.$main;
                padding: 25px;
                border-radius: 0 0 15px 15px;

                h4 {
                  font-size: 1em;
                  font-weight: bold;
                  font-style: normal;

                  &::before {
                    content: '0' counter(count) '.';
                    font-family: 'adobe-handwriting-ernie', sans-serif;
                    font-size: 2.5em;
                    vertical-align: -webkit-baseline-middle;
                    margin-right: 10px;
                  }
                }

                p {
                  span {
                    display: block;
                  }
                }
              }
            }
          }
        }
      }

      .features {
        &.box {
          background-color: white;
        }

        .features-point {
          margin-top: 50px;

          @include mixin.max-screen(mixin.$medium) {
            margin-top: 30px;
          }

          .point {
            margin-bottom: 40px;

            &:last-of-type {
              margin-bottom: 0;
            }

            h4 {
              font-size: 1em;
              position: relative;
              margin-bottom: 20px;

              .point-label {
                font-family: 'adobe-handwriting-ernie', sans-serif;
                position: absolute;
                left: -20px;
                bottom: 28px;
                font-size: 1.125em;
                transform: rotate(-8deg);
                display: inline-block;
                background-color: #fff;
                padding: 0 10px;

                @include mixin.max-screen(mixin.$small) {
                  font-size: 0.875em;
                }
              }

              .point-title {
                display: inline-block;
                width: 230px;
                color: mixin.$main;
                border: 1px solid mixin.$main;
                padding: 10px 20px;
                border-radius: 0 50px 50px 0;

                @include mixin.max-screen(mixin.$medium) {
                  font-size: 1em;
                }
              }
            }

            .point-wrap {
              display: flex;

              .icon {
                margin-right: 20px;

                img {
                  width: 60px;
                  height: auto;
                  aspect-ratio: 1 / 1;
                }
              }

              p {
                max-width: 390px;
                width: 90%;
                margin: -0.5625em 0;

                span {
                  display: block;
                }

                @include mixin.max-screen(mixin.$small) {
                  width: 76%;
                }

                @include mixin.screen(mixin.$small, 1060px) {
                  max-width: unset;
                  width: 95%;
                }
              }
            }
          }
        }
      }

      .care {
        color: white;

        .heading {
          color: white;
        }

        p {
          span {
            display: block;

            &:last-of-type {
              margin-top: 1em;
            }
          }
        }
      }

      .difference {
        &.box {
          background-color: white;
        }

        .difference-wrap {
          margin-top: 50px;

          @include mixin.max-screen(mixin.$medium) {
            margin-top: 30px;
          }

          .point {
            margin-bottom: 40px;

            &:first-of-type {
              h4 {
                .point-title {
                  color: black;
                  border-color: black;
                }
              }
            }

            &:last-of-type {
              margin-bottom: 0;

              .point-label {
                color: mixin.$main;
                bottom: 32px;
              }
            }

            h4 {
              font-size: 1em;
              position: relative;
              margin-bottom: 20px;

              .point-label {
                font-family: 'adobe-handwriting-ernie', sans-serif;
                position: absolute;
                left: -20px;
                bottom: 28px;
                font-size: 1.125em;
                transform: rotate(-8deg);
                display: inline-block;
                background-color: #fff;
                padding: 0 10px;

                @include mixin.max-screen(mixin.$medium) {
                  font-size: 0.875em;
                }
              }

              .point-title {
                display: inline-block;
                width: 230px;
                color: mixin.$main;
                border: 1px solid mixin.$main;
                padding: 10px 20px;
                border-radius: 0 50px 50px 0;
              }
            }

            .difference-desc {
              display: flex;
              @include mixin.max-screen(mixin.$medium) {
                flex-direction: column;
              }

              .image {
                margin-right: 20px;

                @include mixin.max-screen(mixin.$medium) {
                  margin-right: 0;
                }

                img {
                  width: 195px;
                  aspect-ratio: 1 / 1;
                  border-radius: 15px;

                  @include mixin.max-screen(mixin.$medium) {
                    width: 100%;
                    aspect-ratio: 3 / 2;
                  }
                }
              }

              p {
                max-width: 270px;
                width: 90%;
                margin: auto 0;

                @include mixin.max-screen(1060px) {
                  max-width: unset;
                  width: 80%;
                }

                @include mixin.max-screen(mixin.$medium) {
                  width: 100%;
                  margin-top: 15px;
                }

                span {
                  display: block;
                }
              }
            }
          }

          .arrow-text {
            font-size: 1.0625em;
            margin-bottom: 40px;

            @include mixin.max-screen(mixin.$medium) {
              font-size: 1em;
              font-weight: bold;
              text-align: center;
              margin-bottom: 40px;
            }

            .arrow {
              position: relative;
              display: inline-block;
              width: 2.5px;
              height: 30px;
              margin-right: 8.5px;
              border-radius: 9999px;
              background-color: #000000;

              @include mixin.max-screen(mixin.$medium) {
                width: 3px;
              }
            }

            .arrow::before {
              content: '';
              position: absolute;
              bottom: 0;
              left: 50%;
              width: 2.5px;
              height: 15px;
              border-radius: 9999px;
              background-color: #000000;
              transform: rotate(45deg);
              transform-origin: 50% calc(100% - 2.5px);

              @include mixin.max-screen(mixin.$medium) {
                width: 3px;
                transform-origin: 50% calc(100% - 2px);
              }
            }

            span:last-of-type {
              vertical-align: super;
              margin-left: 15px;
            }
          }
        }
      }

      .review {
        color: white;

        .heading {
          color: white;
        }
      }

      .review {
        .review-inner {
          .review-wrap {
            .review-content {
              width: 90%;
              max-width: 350px;
              margin: 0 auto 30px;
              background-color: #fff;
              border-radius: 15px;
              box-shadow: 0px 3px 6px #00000029;
              padding: 25px 0 0;

              &:nth-of-type(2) {
                .icon {
                  padding: 15px 0 0 20px;
                  img {
                    object-position: 100% 0%;
                    width: 85%;
                  }
                }
              }

              .icon {
                max-width: 180px;
                width: 100%;
                height: 180px;
                border: 2px solid mixin.$main;
                border-radius: 50%;
                box-shadow: 0px 3px 6px #00000029;
                filter: drop-shadow(0px 3px 6px #00000029);
                margin: 0 auto;
                overflow: hidden;
                padding: 15px 0 0;

                @include mixin.max-screen(mixin.$medium) {
                  max-width: 160px;
                  height: 160px;
                }

                img {
                  width: 75%;
                  height: 100%;
                  object-fit: cover;
                  object-position: top;
                  margin: auto;
                }
              }

              .review-wrap_cap {
                color: black;
                padding: 30px;
                border-radius: 0 0 15px 15px;

                @include mixin.max-screen(mixin.$medium) {
                  padding: 30px 20px;
                }

                h4 {
                  font-size: 0.875em;
                  font-weight: bold;
                  font-style: normal;
                  margin: 0 auto 30px;
                  position: relative;

                  &:last-of-type {
                    margin: 30px 0 0;

                    @include mixin.max-screen(mixin.$medium) {
                      margin: 20px 0 0;
                    }
                  }

                  @include mixin.max-screen(mixin.$medium) {
                    margin: 0 auto 20px;
                  }
                }

                p {
                  span {
                    display: block;
                  }
                }
              }
            }
          }
        }
      }

      .campaign {
        @include mixin.max-screen(mixin.$medium) {
          &.box {
            padding: 30px 15px;
          }
        }

        .heading,
        .sub-heading {
          color: white;

          @include mixin.max-screen(mixin.$small) {
            padding-left: 5px;
          }

          @include mixin.screen(mixin.$small, 1060px) {
            padding-left: 20px;
          }
        }

        .campaign-wrap {
          width: 100%;
          border: 1px solid white;
          background-color: rgba(255, 255, 255, 0.35);
          border-radius: 15px;
          display: flex;
          justify-content: space-between;
          padding: 10px;

          @include mixin.max-screen(mixin.$medium) {
            padding: 5px;
            flex-direction: column-reverse;
          }

          .text-wrap {
            width: 100%;
            background-color: white;
            border-radius: 15px;
            text-align: center;
            align-content: center;
            padding: 15px;
            position: relative;

            @include mixin.max-screen(mixin.$medium) {
              background-color: unset;
            }

            .text-inner {
              width: fit-content;
              position: absolute;
              top: 50%;
              left: 32.5%;
              transform: translate(-50%, -50%);
            }

            .normal-price {
              margin-bottom: 15px;

              @include mixin.max-screen(mixin.$small) {
                margin-bottom: 12px;
              }

              p {
                font-size: 0.75em;
              }

              h5 {
                font-size: 1.8em;
                font-weight: bold;
                letter-spacing: 0.04em;

                @include mixin.max-screen(mixin.$small) {
                  font-size: 1.25em;
                }

                &::before {
                  content: '(1本)';
                  font-size: 0.6em;
                  font-weight: normal;
                  margin-right: 8px;                  
                }

                span {
                  font-size: 0.75em;
                  margin-left: 3px;
                }
              }
            }

            .campaign-price {
              position: relative;
              margin-top: 5px;

              @include mixin.max-screen(mixin.$small) {
                margin-top: 2px;
              }

              .en {
                font-size: 1.1em;
                transform: rotate(-8deg);
                color: mixin.$main;
                margin-left: -8.5em;
                margin-bottom: -0.6em;

                @include mixin.max-screen(mixin.$small) {
                  font-size: 0.875em;
                }
              }

              h5 {
                font-size: 2.4375em;
                font-weight: bold;
                letter-spacing: 0.04em;
                margin-bottom: 3px;

                @include mixin.max-screen(mixin.$small) {
                  font-size: 1.9375em;
                }

                &::before {
                  content: '(1本)';
                  font-size: 0.5em;
                  font-weight: normal;
                  margin-right: 8px;                  
                }

                span {
                  font-size: 0.65em;
                  margin-left: 3px;
                }
              }
            }
          }

          .arrow {
            position: relative;
            display: inline-block;
            width: 2px;
            height: 24px;
            margin-right: 5.7px;
            border-radius: 9999px;
            background-color: #000000;

            &::before {
              content: "";
              position: absolute;
              bottom: 0;
              left: calc(50% - 1px);
              width: 2px;
              height: 14px;
              border-radius: 9999px;
              background-color: #000000;
              transform: rotate(45deg);
              transform-origin: 50% calc(100% - 1px);

              @include mixin.max-screen(mixin.$small) {
                height: 10px;
              }
            }

            @include mixin.max-screen(mixin.$small) {
              height: 16px;
            }
          }

          .campaign-img {
            width: 100%;
            height: auto;
            background-image: url(/images/img-campaign.jpg);
            background-size: 120%;
            background-position: 95% 10%;
            background-repeat: no-repeat;
            aspect-ratio: 3 / 2;

            @include mixin.max-screen(mixin.$small) {
              background-size: 145%;
              background-position: 95% 10%;
            }
          }
        }
      }

      .fee {
        &.box {
          background-color: white;
        }

        .fee-wrap {
          border: solid #666;
          border-width: 0.5px 0 0.5px 0;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;
          margin-bottom: 20px;

          .title {
            font-size: 1em;
            font-weight: bold;
            margin: auto 0;

            @include mixin.max-screen(mixin.$medium) {
              font-size: 0.9375em;
              margin: auto 20px auto 0;
            }
          }

          .price-inner {
            // max-width: 280px;
            width: 100%;

            .price-wrap {
              display: flex;
              justify-content: space-between;
              align-items: center;

              &:first-of-type {
                border-bottom: 0.5px solid #666;
                padding: 0 20px 30px;
              }

              &:last-of-type {
                padding: 30px 20px 0;
              }

              p {
                span {
                  display: block;
                }

                .price {
                  font-weight: bold;

                  &::after {
                    content: '円 (税込)';
                    margin-left: 3px;
                  }

                  @include mixin.max-screen(mixin.$medium) {
                    margin-left: 10px;
                  }
                }
              }
            }
          }
        }

        .note {
          font-size: 0.75em;

          &:first-of-type {
            margin-bottom: 15px;
          }

          span {
            margin-right: 3px;
          }
        }
      }

      .reservation {
        .inner {
          display: flex;

          .reservation-image {
            @include mixin.max-screen(mixin.$medium) {
              width: 45%;
            }
          }

          .reservation-cap {
            margin: auto 0 auto 30px;

            @include mixin.max-screen(mixin.$medium) {
              width: 80%;
              margin: auto 0 auto 10px;
            }
          }

          h4 {
            font-size: 1.25em;
            color: white;
            line-height: 1.5;

            @include mixin.max-screen(mixin.$medium) {
              font-size: 1em;
            }

            span {
              display: block;
            }
          }

          .button-wrap {
            margin-top: 20px;

            a {
              color: mixin.$sub;
              background-color: white;
              margin: 0;

              .arrow {
                background-color: mixin.$sub;

                &::before {
                  background-color: mixin.$sub;
                }
              }
            }
          }
        }
      }

      .footer {
        &.box {
          background-color: white;
        }

        @include mixin.max-screen(1060px) {
          margin-bottom: 90px;
        }

        .logo {
          margin-bottom: 30px;

          img {
            width: auto;
            height: 45px;
          }
        }

        .menu-list {
          margin-bottom: 30px;

          a {
            width: fit-content;
            letter-spacing: 1.5px;
            margin-bottom: 15px;
          }
        }

        .navigation-button {
          width: fit-content;
          display: flex;

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
  }
}
</style>
