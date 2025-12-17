<template>
  <header class="header" :class="{ 'is-open': isActive, 'is-sticky': overHeroContent }">
    <!-- <a href="/login" target="_blank" class="btn" v-if="route.path !== '/job-seeker'">企業ログイン</a> -->
    <div class="btn" v-if="route.path !== '/job-seeker'"><p>企業ログイン</p></div>
    <div class="btn btn-sp" v-if="route.path !== '/job-seeker'"><p>ログイン</p></div>
    <div 
      v-if="route.path === '/agent'" 
      class="bottom-header" 
      :class="{ 'is-sticky': overHeroContent }"
    >
      <div class="btn">企業ログイン</div>
      <div class="btn">無料登録</div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const route = useRoute(); // ref() で囲む必要なし
const isActive = ref(false);
const overHeroContent = ref(false);
const windowWidth = ref(0); // 初期値を0に変更（SSR対応）

const isClicked = (): boolean => {
  isActive.value = !isActive.value;
  document.body.classList.toggle('pined');
  return isActive.value;
};

const removeBodyClass = (refName: string): void => {
  isActive.value = false;
  document.body.classList.remove('pined');
};

// 画面幅更新
const updateWindowWidth = () => {
  if (import.meta.client) { // クライアントサイドのみ実行
    windowWidth.value = window.innerWidth;
  }
};

const handleScroll = () => {
  if (route.path !== '/agent') {
    overHeroContent.value = false;
    return;
  }

  const heroSection = document.querySelector('#hero');
  if (!heroSection) {
    overHeroContent.value = false;
    return;
  }

  const heroRect = heroSection.getBoundingClientRect();

  // PCと同じ判定: heroが完全に画面外に出たら表示
  overHeroContent.value = heroRect.bottom <= 0;
};

onMounted(() => {
  // クライアントサイドで初期値を設定
  windowWidth.value = window.innerWidth;
  
  window.addEventListener('resize', updateWindowWidth);
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // 初期状態をチェック
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
@use '~/assets/css/mixin.scss';

.header {
  .btn {
    height: 45px;
    background-color: white;
    border-radius: 25px;
    box-shadow: 0px 3px 6px #00000029;
    align-content: center;
    padding: 10px 30px;

    width: fit-content;
    position: absolute;
    top: 20px;
    right: 50px;
    z-index: 1;

    @include mixin.max-screen(mixin.$small) {
      display: none;
    }

    p {
      font-size: 16px;
      letter-spacing: 0.48px;
      line-height: 1;
    }
  }

  .btn-sp {
    display: none;

    @include mixin.max-screen(mixin.$small) {
      display: block;
      font-size: 14px;
      padding: 10px 25px 13px;
      right: 5%;
    }

    p {
      @include mixin.max-screen(mixin.$small) {
        font-size: 14px;
      }
    }
  }

  .bottom-header {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0 20px;
    background-color: black;
    padding: 10px 0;
    position: fixed;
    top: unset;
    bottom: 0px;
    z-index: 1000;

    // 初期状態は非表示
    opacity: 0;
    transform: translateY(100%);
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    pointer-events: none;
    
    // トップページ: heroが消えたら表示
    &.is-sticky {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    .btn {
      width: 160px;
      height: fit-content;
      text-align: center;
      font-size: 16px;
      letter-spacing: 0.48px;
      background-color: white;
      border-radius: 25px;
      padding: 10px 30px;

      position: relative;
      top: unset;
      right: unset;
      z-index: 10;

      @include mixin.max-screen(mixin.$small) {
        width: 140px;
        font-size: 14px;
        padding: 10px 25px;
      }

      p {
        font-size: 16px;
        letter-spacing: 0.48px;
        line-height: 1;

        @include mixin.max-screen(mixin.$small) {
          font-size: 14px;
        }
      }
    }
  }
}

</style>
