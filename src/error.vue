<template>
  <div class="page-contents">
    <div id="error" class="flexbox align-center justify-center">
      <div class="content-page page-content">
        <div class="section-inner">
          <h1>
            <span class="main">{{ errorCode }}</span>
            <span class="main-sub">Error</span>
          </h1>
          <div class="error-desc">
            <p>お探しのページは、一時的にアクセスできない状況にあるか、移動もしくは削除された可能性があります。</p>
            <p>大変お手数ですが、トップページより再度アクセスしてください。</p>
            <div class="button-wrap">
              <NuxtLink to="/" class="button">Back to Top</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const error: any = useError();
const errorCode: number = error.value.statusCode;
const event = useRequestEvent();
if (errorCode === 404) {
  if (event) setResponseStatus(event, 404);
}
const head = {
  title: `${errorCode} Error`,
  isMypage: false,
};
usePageHead(head);
</script>

<style lang="scss" scoped>
@use '@/assets/css/mixin.scss' as *;

#error {
  text-align: center;
  position: relative;
  min-height: calc(100vh - 70px);
  width: 90%;
  margin: auto;
  margin-top: 70px;

  .section-inner {
    margin: auto;
  }

  .error-desc {
    padding-top: 50px;
    text-align: justify;
    word-break: break-all;
  }

  h1 {
    font-family: 'classico-urw', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.5em;
  }

  .main {
    font-size: 4em;
  }

  .main-sub {
    font-size: 2em;
    margin-left: 15px;
  }

  .sub {
    font-size: 0.9em;
    display: block;
    margin-top: 15px;
    line-height: 1.5;
  }

  .button-wrap {
    margin-top: 50px;

    a {
      font-family: 'classico-urw', sans-serif;
      font-weight: 400;
      font-style: normal;
    }
  }
}
</style>
