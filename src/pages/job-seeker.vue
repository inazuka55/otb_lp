<template>
  <div class="window-wrap">
    <div class="background" />
    <div class="window hero">
      <div class="hero-inner">
        <h1>
          <span>ほんとうの市場価値</span>
          <span>あなたの<span class="logo-type">イチヅケ</span></span>
        </h1>
        <div class="button-wrap">
          <NuxtLink to="#" class="btn">あなたの市場価値を診断する</NuxtLink>
          <NuxtLink to="#" class="btn black">転職エージェント様ご登録へ</NuxtLink>
        </div>
      </div>
    </div>

    <div class="window contents">
      <div class="main-hero_contents">
        <div class="main-hero">
          <div class="main-hero-inner">
            <h2 class="right">ほんとうの市場価値</h2>
            <h2 class="left">あなたのイチヅケ</h2>
          </div>
        </div>
        <div class="wave"></div>
      </div>

      <div class="about box">
        <div class="topic-inner">
          <h4>
            <span>「イチヅケ」は、</span>
            <span>あなたの“いまの市場価値”をわかりやすく見える化する、新しい転職サポートサービスです。</span>
          </h4>
          <img src="" alt="">
          <p>
            <span>プロフィールを登録すると、あなたのスキルや経験に魅力を感じた転職エージェントから年収が提示され提示額の上位２社とコンタクトがとれるオファー型転職マッチングサービスです。</span>
            <span>あなたにフィットするキャリアとの出会いを、もっとシンプルに、もっとフェアに。</span>
          </p>
        </div>
      </div>

      <div class="point box">
        <div class="point-item">
          <h4 class="heading">あなたのほんとうの“市場価値”がわかる。</h4>
          <img src="" alt="">
          <p>
            <span>イチヅケは、プロフィールに対するエージェントからの年収提示をもとに、“いまのあなたの評価”を可視化します。</span>
            <span>あなたに興味をもったエージェントが希望年収を提示するこ とで、本当の市場価値を診断することができます。</span>
          </p>
        </div>
        <div class="point-item">
          <h4 class="heading">熱量の高いエージェントとだけマッチング。</h4>
          <img src="" alt="">
          <p>年収の提示額が高い=興味が高い。最も熱意の高いエージェントとだけコンタクトできるので、ムダなやり取りがなく、効率的に良い出会いに繋がります。</p>
        </div>
        <div class="point-item">
          <h4 class="heading">匿名で簡単登録、診断結果がすぐわかる。</h4>
          <img src="" alt="">
          <p>
            <span>名前や個人情報を明かす必要はありません。必要なのは、あなたのキャリア情報を入力するだけで簡単にはじめることができます。</span>
            <span>診断結果は情報公開から3日間でスピーディに返ってくるので、空き時間に自分の市場価値をチェックできます。</span>
          </p>
        </div>
      </div>

      <div class="flow box">
        <h4>簡単な質問に答えるだけで市場価値診断できる</h4>
        <div class="flow-wrap">
          <div class="flow-item">
            <h5>簡単に登録できる</h5>
            <p>
              <span>匿名で登録できるので</span>
              <span>安心して転職活動できる</span>
            </p>
            <img src="" alt="">
          </div>
        </div>
      </div>

      <div class="blog box">
        <div class="section-wrap">
          <h4>ブログ</h4>
          <div class="blog-wrap">
            <div
              class="blog-item-wrap"
              v-for="(item, index) in blogList"
              :key="index"
            >
              <div class="blog-item">
                <img :src="item.img" :alt="item.title" />
                <div class="info-wrap">
                  <span class="date">{{ item.date }}</span>
                  <span class="category">{{ item.category }}</span>
                </div>
                <p>{{ item.title }}</p>
              </div>
            </div>
          </div>

          <div class="blog-dots"></div>
          <NuxtLink to="/blog" class="btn">ブログ一覧へ</NuxtLink>
        </div>
      </div>

      <div class="faq box">
        <div class="section-wrap">
          <h4>FAQ</h4>

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
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const baseDir = runtimeConfig.public.baseDir;

const head = {};
usePageHead(head);

import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const openIndex = ref<number | null>(null);

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
// 3行超え判定
// ==========================================
const applyEllipsis = () => {
  const texts = document.querySelectorAll<HTMLParagraphElement>(
    '.blog .blog-item p'
  );

  texts.forEach(p => {
    p.classList.remove('is-clamped');

    const style = window.getComputedStyle(p);
    const lineHeight = parseFloat(style.lineHeight);
    const lines = Math.round(p.scrollHeight / lineHeight);

    if (lines > 3) {
      p.classList.add('is-clamped');
    }
  });
};

const blogList = [
  {
    img: "/outofthebox/images/img-blog_1.png",
    date: "2025.11.11",
    category: "お知らせ",
    title: "提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ",
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
    title: "提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ",
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
    question: "個人情報は伏せられますか？",
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

onMounted(async () => {
  await nextTick();
  await nextTick();

  applyEllipsis();
});

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
    background-image: url(/images/img-background.jpeg);
    background-position: 10% 60%;
    background-size: 120%;

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

      .hero-inner {
        max-width: 340px;
        width: 100%;

        h1 {
          font-size: 30px;
          font-weight: 500;
          letter-spacing: 0.9px;
          line-height: 2.2;
          margin-bottom: -0.325em;

          span {
            display: block;

            &.logo-type {
              font-size: 50px;
              letter-spacing: 1.5px;
              line-height: 1;
              display: inline;
            }
          }
        }
      }

      .button-wrap {
        display: grid;
        gap: 20px 0;
        margin-top: 35px;

        .btn {
          max-width: unset;
          font-size: 18px;
          font-weight: 500;
          color: black;
          background-color: mixin.$main;
          border-radius: 30px;
          padding: 15px 50px;

          &.black {
            color: white;
            background-color: black;
          }
        }
      }
    }

    &.contents {
      position: relative;
      width: 610px;
      flex-shrink: 0;
      margin: auto;

      .main-hero_contents {
        max-height: 800px;
        position: relative;

        @include mixin.max-screen(1060px) {
          border-radius: 0;
        }

        .main-hero {
          width: 100%;
          height: 100vh;
          background-image: url(/images/img-hero_job-seeker.jpg);
          background-position: top;
          background-size: cover;
          background-repeat: no-repeat;
          color: #fff;
          text-align: center;
          position: relative;

          // @include mixin.max-screen(mixin.$small) {
          //   height: calc(100vh - 146px - $heroSpace);
          // }

          .main-hero-inner {
            width: 100%;

            h2 {
              font-family: fot-tsukubrdgothic-std, sans-serif;
              font-size: 25px;
              text-align: center;
              letter-spacing: 0.75px;
              line-height: 1.2;

              writing-mode: vertical-rl;
              text-orientation: upright;

              @include mixin.max-screen(mixin.$small) {
                font-size: 1.5625em;
              }

              &.right, 
              &.left {
                position: absolute;
              }

              &.right {
                top: 37.5%;
                right: 38.2%;
              }

              &.left {
                top: 48.5%;
                right: 45.4%;
              }
            }
          }
        }

        .wave {
          width: 100%;
          height: 55px;
          background-image: url(/images/wave_job-seeker.svg);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: absolute;
          bottom: -1px;

          @include mixin.max-screen(mixin.$small) {
            height: 65px;
            background-image: url(/images/wave_sp.svg);
          }
        }
      }

      .about {
        background-color: white;

        h4 {
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.45px;
          line-height: 1.7;
          margin-bottom: 40px;

          span {
            display: block;
          }
        }

        img {
          width: 100%;
          height: 440px;
          background-color: #666;
          margin-bottom: 30px;
        }

        p {
          font-size: 15px;
          letter-spacing: 0.45px;
          line-height: 1.7;

          span {
            display: block;
          }
        }
      }

      .point {
        background-color: #F4F4F4;
        display: grid;
        gap: 65px 0;

        .point-item {
          h4 {
            font-size: 20px;
            font-weight: 500;
            letter-spacing: 0.6px;
            line-height: 1.5;
            margin-bottom: 25px;
          }

          img {
            width: 100%;
            height: 310px;
            background-color: #666;
            margin-bottom: 20px;
          }

          p {
            font-size: 14px;
            letter-spacing: 0.42px;
            line-height: 1.85;

            span {
              display: block;
            }
          }
        }
      }

      .flow {
        h4 {
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 0.6px;
          line-height: 1.5;
          text-align: center;
          margin-bottom: 30px;
        }
        
        .flow-wrap {
          .flow-item {
            text-align: center;

            h5 {
              font-size: 18px;
              font-weight: bold;
              letter-spacing: 0.54px;
              line-height: 1.6;
              margin-bottom: 30px;
            }

            p {
              font-size: 15px;
              font-weight: 500;
              letter-spacing: 0.45px;
              line-height: 1.625;
              margin-bottom: 40px;

              span {
                display: block;
              }
            }

            img {
              max-width: 280px;
              width: 100%;
              height: auto;
              aspect-ratio: 280 / 460;
              background-color: #666;
              margin: auto;
            }
          }
        }
      }

      .blog {
        background-color: #F4F4F4;

        h4 {
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 0.6px;
          line-height: 1.5;
          text-align: left;
          margin-bottom: 30px;
        }

        .blog-wrap {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px 20px;
          .blog-item-wrap {
            max-width: 225px;
            width: 100%;
            background-color: white;
            border-radius: 15px;
            box-shadow: 0px 3px 6px #00000029;
            padding-bottom: 15px;

            .blog-item {
              img {
                width: 100%;
                height: auto;
                aspect-ratio: 225 / 165;
                object-fit: cover;
                background: #000;
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
                position: relative;
                font-size: 12px;
                letter-spacing: 0.36px;
                line-height: 1.6;
                max-height: calc(1.6em * 3);
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
              
                &::after {
                  content: '';
                }

                &.is-clamped::after {
                  content: '…';
                  position: absolute;
                  right: 9px;
                  bottom: -4px;
                  background: #fff;

                  @include mixin.max-screen(mixin.$small) {
                    bottom: 10px;
                  }
                }
              } 

              .info-wrap, p {
                max-width: 195px;
                width: 100%;
                margin: auto;

                @include mixin.max-screen(mixin.$small) {
                  max-width: 90%;
                }
              }
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
          margin-top: 40px;
          margin-left: auto;
          display: block;
          text-decoration: none;

          @include mixin.max-screen(mixin.$small) {
            margin-top: 30px;
          }
        }
      }

      .faq {
        h4 {
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 0.6px;
          line-height: 1.5;
          text-align: left;
          margin-bottom: 30px;
        }

        .faq-wrap {
          margin-top: 30px;

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

              @include mixin.max-screen(mixin.$small) {
                padding: 10px 15px;
              }

              .faq-question {
                font-size: 16px;
                display: flex;
                align-items: center;
                margin: 0 15px 0 0;

                @include mixin.max-screen(mixin.$small) {
                  font-size: 14px;
                  align-items: flex-start;
                }

                span {
                  display: block;
                  width: 16px;
                  font-size: 20px;
                  font-weight: bold;
                  margin-right: 15px;

                  @include mixin.max-screen(mixin.$small) {
                    font-size: 18px;
                    margin-top: -5px;
                    margin-right: 10px;
                  }
                }
              }

              .faq-toggle-icon {
                width: 20px;
                height: 20px;
                position: relative;
                flex-shrink: 0;
                margin-left: auto;
                transition: transform 0.3s ease;

                @include mixin.max-screen(mixin.$small) {
                  width: 15px;
                  height: 15px;
                }

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

              @include mixin.max-screen(mixin.$small) {
                padding: 10px 15px;
              }

              > span {
                width: 16px;
                text-align: center;
                font-size: 20px;
                font-weight: bold;
                line-height: 1;
                margin-top: 0.1em;
                flex-shrink: 0;
                margin-right: 15px;

                @include mixin.max-screen(mixin.$small) {
                  font-size: 18px;
                  margin-right: 10px;
                }
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
  }
}
</style>


