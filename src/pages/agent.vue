<template>
  <div id="hero">
    <div class="copy-wrap">
      <h1>
        <span>求職者が求めていた</span>
        <span>新たなアプローチ</span>
        <span class="logo-type">「イチヅケ」</span>
      </h1>
      <NuxtLink to="/agent/entry" class="btn">転職エージェント無料登録</NuxtLink>
      <h2>掲載料金・初期費用<span>0</span>円</h2>
    </div>
    <div class="wave"></div>
  </div>

  <section id="about">
    <div class="section-wrap">
      <div class="text-wrap">
        <h5><span class="logo-type">イチヅケ</span>は、</h5>
        <h5>求職者の"市場価値"を可視化し、新たなアプローチで求職者とのマッチングを実現するキャリアプラットフォームです。</h5>
        <p>求職者がプロフィールを登録すると、企業・エージェントは年収提示ベースのオファーを提示でき、求職者はその提示額と熱意をもとに、最も関心の高いエージェントとのみコンタクトを開始します。</p>
      </div>
      <img src="/images/mock.svg" alt="モック">
    </div>
  </section>

  <section id="point" ref="pointSection">
    <div class="slides" ref="slides">
      <div 
        class="section-wrap slide slide1"
        :class="{ active: currentSlide >= 0 }"
        data-index="0"
        style="background-image: url(/outofthebox/images/img-point_1.jpg);"
      >
        <div class="text-wrap">
          <h5>本気度の高い求職者へ最短でリーチできる。</h5>
          <p>
            イチヅケには、自分の市場価値を正しく知りたい意欲の高い求職者が集まります。プロフィールを公開した段階で、転職意向が強い、熱量の高い求職者が多数存在します。従来のスカウト型よりレスポンス率が高く、アプローチの効率が大幅に改善できます。
          </p>
        </div>
      </div>

      <div 
        class="section-wrap slide slide2"
        :class="{ active: currentSlide >= 1 }"
        data-index="1"
        style="background-image: url(/outofthebox/images/img-point_2.jpg);"
      >
        <div class="text-wrap">
          <h5>競合エージェントとの差別化が図れる。</h5>
          <p>求職者側は “提示額(年収)＋熱量” を基準に比較します。高評価を提示できるほど求職者との接点を確保しやすく、良い提案をできる転職エージェント様が、正当に選ばれる環境が整っています。</p>
        </div>
      </div>

      <div 
        class="section-wrap slide slide3"
        :class="{ active: currentSlide >= 2 }"
        data-index="2"
        style="background-image: url(/outofthebox/images/img-point_3.jpg);"
      >
        <div class="text-wrap">
          <h5>データに基づいた採用活動ができる。</h5>
          <p>様々な職種・スキル・経験値の人材が、どのような反応を得ているのか。市場価値のトレンドを知るヒントになります。求人戦略・求職者への提案精度・顧客へのレポートに活用でき、データドリブンな転職支援が可能になります。</p>
        </div>
      </div>
    </div>
  </section>

  <section id="appeal">
    <div class="section-wrap">
      <h5>
        年収提示型求職マッチングプラットフォーム
        <span>「イチヅケ」の魅力</span>
        <span class="mask"></span>
      </h5>
      <div class="appeal-wrap">
        <div 
          class="appeal-item" 
          v-for="(item, index) in appealItems" 
          :key="index"
        >
          <span class="mask"></span>
          <img :src="item.img" :alt="item.title" />
          <p class="ttl">{{ item.title }}</p>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <section id="blog">
    <div class="section-wrap">
      <h5>イチヅケブログ</h5>
      <div class="blog-wrap">
        <div 
          class="blog-item" 
          v-for="(item, index) in blogList" 
          :key="index"
        >
          <img :src="item.img" :alt="item.title" />
          <div class="info-wrap">
            <span class="date">{{ item.date }}</span>
            <span class="category">{{ item.category }}</span>
          </div>
          <p>{{ item.title }}</p>
        </div>
      </div>
      <NuxtLink to="/blog" class="btn">ブログ一覧へ</NuxtLink>
    </div>
  </section>

  <section id="faq">
    <div class="section-wrap">
      <h5>FAQ</h5>

      <div class="faq-wrap">
        <details 
          class="faq-item"
          v-for="(item, index) in faqList"
          :key="index"
          @click="handleDetailClick"
        >
          <summary class="question">
            <p class="faq-question">
              <span>Q</span>{{ item.question }}
            </p>
            <span class="faq-toggle-icon"></span>
          </summary>
          <div class="faq-answer">
            <div class="faq-answer-content">
              <span>A</span>
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openIndex = ref<number | null>(null);
const pointSection = ref<HTMLElement | null>(null);
const slides = ref<HTMLElement | null>(null);
const currentSlide = ref(0);
const bottomHeaderHeight = ref(0);

// ==========================================
// アコーディオン
// ==========================================
const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const handleDetailClick = (event: MouseEvent) => {
  event.preventDefault();
  
  const details = event.currentTarget as HTMLDetailsElement;
  const content = details.querySelector('.faq-answer') as HTMLElement;
  
  if (details.open) {
    const closingAnim = content.animate(
      [
        { height: content.offsetHeight + 'px', opacity: '1' },
        { height: '0px', opacity: '0' }
      ],
      { duration: 150, easing: 'ease-out' }
    );
    closingAnim.onfinish = () => details.removeAttribute('open');
  } else {
    const allDetails = document.querySelectorAll('.faq-item[open]');
    allDetails.forEach((openDetail) => {
      if (openDetail !== details) {
        const openContent = openDetail.querySelector('.faq-answer') as HTMLElement;
        const closingAnim = openContent.animate(
          [
            { height: openContent.offsetHeight + 'px', opacity: '1' },
            { height: '0px', opacity: '0' }
          ],
          { duration: 150, easing: 'ease-out' }
        );
        closingAnim.onfinish = () => openDetail.removeAttribute('open');
      }
    });
    
    details.setAttribute('open', 'true');
    content.animate(
      [
        { height: '0px', opacity: '0' },
        { height: content.offsetHeight + 'px', opacity: '1' }
      ],
      { duration: 150, easing: 'ease-out' }
    );
  }
};

// ==========================================
// bottom-header 高さ反映
// ==========================================
const updateBottomHeaderHeight = () => {
  const bottomHeader = document.querySelector('.bottom-header') as HTMLElement;
  if (bottomHeader) {
    bottomHeaderHeight.value = bottomHeader.offsetHeight;
    document.body.style.paddingBottom = `${bottomHeaderHeight.value}px`;

    const point = document.getElementById('point');
    if (point) {
      point.style.setProperty('--bottom-header-height', `${bottomHeaderHeight.value}px`);
    }
  }
};

// ==========================================
// point scroll animation
// ==========================================
const handleScroll = () => {
  if (!pointSection.value || !slides.value) return;

  const pointRect = pointSection.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // 1枚目のフェード＆スケール
  if (pointRect.top > 0) {
    const progress = Math.max(0, 1 - (pointRect.top / windowHeight));
    const scale = 0.5 + (progress * 0.5);
    const opacity = progress;

    const slide1 = slides.value.querySelector('.slide1') as HTMLElement;
    if (slide1) {
      slide1.style.setProperty('--scale', scale.toString());
      slide1.style.setProperty('--opacity', opacity.toString());
    }
    currentSlide.value = 0;
  }
  else if (pointRect.top <= 0 && pointRect.bottom > windowHeight) {
    const slide1 = slides.value.querySelector('.slide1') as HTMLElement;
    if (slide1) {
      slide1.style.setProperty('--scale', '1');
      slide1.style.setProperty('--opacity', '1');
    }

    const rawProgress = Math.abs(pointRect.top) / (pointRect.height - windowHeight);
    const fixedProgress = Math.min(rawProgress * 0.2, 1);

    if (fixedProgress < 0.07) currentSlide.value = 0;
    else if (fixedProgress < 0.13) currentSlide.value = 1;
    else currentSlide.value = 2;
  }
  else {
    const slide1 = slides.value.querySelector('.slide1') as HTMLElement;
    if (slide1) {
      slide1.style.setProperty('--scale', '1');
      slide1.style.setProperty('--opacity', '1');
    }
    currentSlide.value = 2;
  }
};

// ==========================================
// IntersectionObserver（ここが今回の主役）
// ==========================================
let io: IntersectionObserver | null = null;

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  updateBottomHeaderHeight();
  window.addEventListener('resize', updateBottomHeaderHeight);

  // ----- ここで .show を付ける -----
  const selector = "#appeal .appeal-wrap .appeal-item, #appeal .section-wrap > h5";
  const targets = document.querySelectorAll<HTMLElement>(selector);

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.15,
      root: null,
      rootMargin: "0px 0px -35% 0px"
    }
  );

  targets.forEach(el => io!.observe(el));
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', updateBottomHeaderHeight);
  document.body.style.paddingBottom = '';

  if (io) {
    io.disconnect();
    io = null;
  }
});

// ==========================================
// データ配列
// ==========================================
const appealItems = [
  {
    img: "/outofthebox/images/img-appeal_1.jpg",
    title: "求職者へのアプローチ無制限",
    text: "求職者へは、回数・上限なく提案が可能。オファー枠やメッセージ上限に縛られず、候補者への接触スピードと量の両面を高め、機会損失を防ぎながらアクティブな獲得が行えます。"
  },
  {
    img: "/outofthebox/images/img-appeal_2.jpg",
    title: "採用コストの効率化",
    text: "求職者のスキル・経験・実績などの情報を確認したうえで、提示したい年収を示すことで、求職者の最終的に大きな判断材料の「年収」から判断しやすくなり、ミスマッチを最小化します。"
  },
  {
    img: "/outofthebox/images/img-appeal_3.jpg",
    title: "求職者と直接コンタクト",
    text: "条件を満たすと求職者とダイレクトにやり取りが可能になります。仲介を挟まないためレスポンスが早く、提案の温度感がそのまま届き、意思決定の速度と成約率が向上します。"
  }
];

const blogList = [
  {
    img: "/outofthebox/images/img-blog_1.png",
    date: "2025.11.11",
    category: "お知らせ",
    title: "提供サービス変更及び利用規約改定のお知らせ",
  },
  {
    img: "/outofthebox/images/img-blog_2.png",
    date: "2025.11.11",
    category: "お知らせ",
    title: "提供サービス変更及び利用規約改定のお知らせ",
  },
  {
    img: "/outofthebox/images/img-blog_3.png",
    date: "2025.11.11",
    category: "お知らせ",
    title: "提供サービス変更及び利用規約改定のお知らせ",
  },
  {
    img: "/outofthebox/images/img-blog_4.png",
    date: "2025.11.11",
    category: "お知らせ",
    title: "提供サービス変更及び利用規約改定のお知らせ",
  },
];

const faqList = [
  {
    question: "サービスの利用に料金はかかりますか?",
    answer: "基本プランは無料でご利用いただけます。有料オプションをご希望の場合のみ追加費用が発生します。",
  },
  {
    question: "パスワードを忘れた場合はどうすればいいですか?",
    answer: "ログイン画面の「パスワードをお忘れの方」より再設定手続きを行ってください。",
  },
  {
    question: "登録後にメールアドレスの変更は可能ですか?",
    answer: "マイページ内のアカウント設定からメールアドレスの変更が可能です。",
  },
  {
    question: "問い合わせの返信にはどれくらい時間がかかりますか?",
    answer: "通常1〜2営業日以内にご返信しております。混雑時はお時間をいただく場合があります。",
  },
];
</script>

<style lang="scss" scoped>
@use '~/assets/css/mixin.scss';

#hero {
  width: 100%;
  height: 100vh;
  background-image: url(/images/img-hero.jpg);
  background-position: center;
  background-size: cover;
  align-content: center;
  position: relative;

  .copy-wrap {
    padding-left: 11.72%;
    position: absolute;
    bottom: 21.875%;

    h1 {
      font-size: 35px;
      color: white;
      font-weight: 500;
      letter-spacing: 1.05px;
      line-height: 1.67;
      text-shadow: 0px 3px 6px #0000005C;

      span {
        display: block;

        &.logo-type {
          font-size: 50px;
          text-indent: -30px;
          letter-spacing: 3px;
        }
      }
    }

    .btn {
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 0.54px;
      background-color: mixin.$main;
      border-radius: 30px;
      padding: 10px 40px 13px;
      margin-top: 20px;
      display: inline-block;
      text-decoration: none;
    }

    h2 {
      font-size: 30px;
      color: white;
      font-weight: 500;
      letter-spacing: 0.9px;
      line-height: 1;
      text-shadow: 0px 3px 6px #0000005C;
      margin-top: 30px;

      span {
        font-size: 80px;
        color: mixin.$main;
        letter-spacing: 2.4px;
        text-shadow: none;
        min-width: 60px;
        display: inline-block;
        text-align: end;
        margin-right: 10px;
      }
    }
  }

  .wave {
    width: 100vw;
    height: 55px;
    background-image: url(/images/wave.svg);
    background-position: center;
    background-size: cover;
    position: absolute;
    bottom: -1px;
  }
}

#about {
  .section-wrap {
    max-width: 1020px;
    width: 90%;
    display: flex;
    gap: 0 110px;
    padding: 80px 0 100px;
    margin: auto;
    align-items: center;

    .text-wrap {
      max-width: 440px;
      width: 100%;

      h5 {
        font-size: 18px;
        letter-spacing: 0.54px;
        line-height: 1.7;
      }

      .logo-type {
        font-size: 30px;
        letter-spacing: 0.9px;
        margin-right: 5px;
      }

      p {
        font-size: 15px;
        letter-spacing: 0.45px;
        line-height: 1.73;
        margin-top: 40px;
      }
    }

    img {
      width: 470px;
      height: 440px;
      object-fit: cover;
      flex-shrink: 0;
    }
  }
}

#point {
  position: relative;
  height: 500vh; // 400vh → 500vh に増加（3枚目の表示時間をさらに長く）
  
  .slides {
    position: sticky;
    top: 0;
    width: 100vw;
    height: calc(100vh - var(--bottom-header-height));
    overflow: hidden;
  }

  .section-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: calc(100vh - var(--bottom-header-height));
    background-position: center;
    background-size: cover;
    
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.15);
    }

    .text-wrap {
      max-width: 390px;
      width: 100%;
      color: white;
      position: absolute;
      z-index: 1;
      top: 50%;
      right: 150px;
      transform: translateY(-50%);

      h5 {
        font-size: 18px;
        text-shadow: 0px 3px 7px #00000064;
      }

      p {
        text-shadow: 0px 3px 7px #00000040;
        margin-top: 25px;
      }
    }

    &.slide1 {
      z-index: 1;
      transform: translate(-50%, -50%) scale(var(--scale, 0.5));
      transition: transform 0.1s linear;
    }

    &.slide2 {
      z-index: 2;
      transform: translate(-50%, calc(50% + 100vh));
      opacity: 1;
      transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); // 0.6s → 0.8s
      
      &.active {
        transform: translate(-50%, -50%);
      }
      
      .text-wrap {
        right: unset;
        left: 150px;
      }
    }

    &.slide3 {
      z-index: 3;
      transform: translate(-50%, calc(50% + 100vh));
      opacity: 1;
      transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); // 0.6s → 0.8s
      
      &.active {
        transform: translate(-50%, -50%);
      }
    }
  }
}

#appeal {
  width: 100vw;
  overflow: hidden;

  .section-wrap {
    padding: 100px 0;

    h5 {
      font-size: 20px;
      letter-spacing: 0.6px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 60px;

      position: relative;
        opacity: 0;
        transform: scale(0.95);
        transition: 
          opacity 0.6s ease,
          transform 0.6s ease;
      will-change: opacity, transform;

      &.show {
        opacity: 1;
        transform: scale(1);
      }


      span {
        display: block;
      }
    }

    .appeal-wrap {
      max-width: 980px;
      width: 90%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0 35px;
      margin: auto;

      .appeal-item {
        max-width: 303px;
        width: 100%;
        border-radius: 23px;
        box-shadow: 0px 3px 6px #00000029;
        padding: 30px 20px;

        opacity: 0;
        transform: scale(0.95);
        transition: 
          opacity 0.6s ease,
          transform 0.6s ease;
        will-change: opacity, transform;

        &.show {
          opacity: 1;
          transform: scale(1);
        }

        img {
          width: 200px;
          height: auto;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          object-position: center;
          border-radius: 50%;
          margin: auto auto 15px;
        }

        .ttl {
          font-size: 16px;
          letter-spacing: 0.48px;
          line-height: 1.5;
          text-align: center;
          margin-bottom: 20px;
        }
      }
    }
  }
}

#blog {
  background-color: #EFEFEF;
  padding: 100px 0;

  h5 {
    font-size: 20px;
    letter-spacing: 0.6px;
    text-align: center;
    margin-bottom: 60px;
  }

  .section-wrap {
    max-width: 980px;
    width: 100%;
    margin: auto;

    .blog-wrap {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0 20px;

      .blog-item {
        background-color: white;
        border-radius: 15px;
        box-shadow: 0px 3px 6px #00000029;
        padding-bottom: 10px;

        img {
          width: 100%;
          border-radius: 15px 15px 0 0;
        }

        .info-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 15px;
          padding-bottom: 10px;

          .date {
            font-size: 13px;
          }

          .category {
            font-size: 9px;
            letter-spacing: 0.27px;
            color: white;
            background-color: #707070;
            border-radius: 12px;
            padding: 5px 10px;
          }
        }

        p {
          font-size: 12px;
          letter-spacing: 0.36px;
          line-height: 1.6;
          min-height: 62px;
        }

        .info-wrap, p {
          max-width: 200px;
          width: 100%;
          margin: auto;
        }
      }
    }

    .btn {
      width: fit-content;
      font-size: 14px;
      color: white;
      letter-spacing: 0.42px;
      background-color: #313131;
      border-radius: 20px;
      padding: 10px 25px;
      margin-top: 50px;
      margin-left: auto;
      display: block;
      text-decoration: none;
    }
  }
}

#faq {
  .section-wrap {
    max-width: 980px;
    width: 100%;
    padding: 100px 0;
    margin: auto;

    h5 {
      font-size: 20px;
      text-align: center;
    }

    .faq-wrap {
      margin-top: 60px;

      .faq-item {
        margin-bottom: 20px;

        &:last-of-type {
          margin-bottom: 0;
        }

        summary {
          list-style: none;
          cursor: pointer;

          &::-webkit-details-marker {
            display: none;
          }
        }

        .question {
          box-shadow: 0px 3px 6px #00000029;
          display: flex;
          align-items: center;
          padding: 15px 20px;
          background-color: white;

          .faq-question {
            font-size: 16px;
            margin: 0;

            span {
              width: 16px;
              font-size: 20px;
              font-weight: bold;
              margin-right: 15px;
            }
          }

          .faq-toggle-icon {
            width: 20px;
            height: 20px;
            position: relative;
            flex-shrink: 0;
            margin-left: auto;
            transition: transform 0.3s ease;

            &::before,
            &::after {
              content: '';
              position: absolute;
              background: black;
              transition: transform 0.3s ease;
            }

            &::before {
              top: 50%;
              left: 0;
              right: 0;
              height: 1px;
              transform: translateY(-50%);
            }

            &::after {
              left: 50%;
              top: 0;
              bottom: 0;
              width: 1px;
              transform: translateX(-50%);
            }
          }
        }

        &[open] {
          .faq-toggle-icon::after {
            transform: translateX(-50%) rotate(90deg);
            opacity: 0;
          }
        }

        .faq-answer {
          overflow: hidden;
          height: 0;
        }

        &[open] .faq-answer {
          height: auto;
        }

        .faq-answer-content {
          display: flex;
          color: white;
          background-color: #1D1D1D;
          padding: 15px 20px;

          > span {
            width: 16px;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            line-height: 1;
            margin-top: 0.1em;
            margin-right: 15px;
            flex-shrink: 0;
          }

          > p {
            flex: 1;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>