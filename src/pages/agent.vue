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
        <h5>求職者の“市場価値”を可視化し、新たなアプローチで求職者とのマッチングを実現するキャリアプラットフォームです。</h5>
        <p>求職者がプロフィールを登録すると、企業・エージェントは年収提示ベースのオファーを提示でき、求職者はその提示額と熱意をもとに、最も関心の高いエージェントとのみコンタクトを開始します。</p>
      </div>
      <img src="/images/mock.svg" alt="モック">
    </div>
  </section>

  <section id="point">
    <div class="section-wrap" style="background-image: url(/outofthebox/images/img-point_1.jpg);">
      <div class="text-wrap">
        <h5>本気度の高い求職者へ最短でリーチできる。</h5>
        <p>イチヅケには、自分の市場価値を正しく知りたい意欲の高い求職者が集まります。プロフィールを公開した段階で、転職意向が強い、熱量の高い求職者が多数存在します。従来のスカウト型よりレスポンス率が高く、アプローチの効率が大幅に改善できます。</p>
      </div>
    </div>
    <div class="section-wrap second" style="background-image: url(/outofthebox/images/img-point_2.jpg);">
      <div class="text-wrap">
        <h5>競合エージェントとの差別化が図れる。</h5>
        <p>求職者側は “提示額(年収)＋熱量” を基準に比較します。高評価を提示できるほど求職者との接点を確保しやすく、良い提案をできる転職エージェント様が、正当に選ばれる環境が整っています。</p>
      </div>
    </div><div class="section-wrap" style="background-image: url(/outofthebox/images/img-point_3.jpg);">
      <div class="text-wrap">
        <h5>データに基づいた採用活動ができる。</h5>
        <p>様々な職種・スキル・経験値の人材が、どのような反応を得ているのか。市場価値のトレンドを知るヒントになります。求人戦略・求職者への提案精度・顧客へのレポートに活用でき、データドリブンな転職支援が可能になります。</p>
      </div>
    </div>
  </section>

  <section id="appeal">
    <div class="section-wrap">
      <h5>年収提示型求職マッチングプラットフォーム<span>「イチヅケ」の魅力</span></h5>
      <div class="appeal-wrap">
        <div 
          class="appeal-item" 
          v-for="(item, index) in appealItems" 
          :key="index"
        >
          <img :src="item.img" :alt="item.title" />
          <h5>{{ item.title }}</h5>
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
        <div 
          class="faq-item"
          v-for="(item, index) in faqList"
          :key="index"
        >
          <div class="question">
            <p 
              class="faq-question js-toggle"
              :class="{ active: openIndex === index }"
              @click="toggle(index)"
            >
              <span>Q</span>{{ item.question }}
            </p>
            <span class="faq-toggle-icon"></span>
          </div>
          <p 
            class="faq-answer"
            :class="{ open: openIndex === index }"
          >
            <span>A</span>{{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>


</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const panels = gsap.utils.toArray<HTMLElement>('#point .section-wrap');
  const total = panels.length || 1;

  // pin の長さは画面高さ * パネル数（1画面 = 1パネル）
  ScrollTrigger.create({
    trigger: '#point',
    start: 'top top',
    end: () => `+=${window.innerHeight * total}`,
    pin: true,
    pinSpacing: true,
    scrub: true,
    // markers: true, // デバッグ用（必要なら有効化）
  });

  // 各パネルのアニメーション（パネルを等分して扱う）
  panels.forEach((panel, i) => {
    const startPercent = (i / total) * 100;
    const endPercent = ((i + 1) / total) * 100;

    // 1つ目はズーム、それ以外は下から上へスライド（めくり）
    if (i === 0) {
      gsap.fromTo(panel, { scale: 1 }, {
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: '#point',
          start: `${startPercent}% top`,
          end: `${endPercent}% top`,
          scrub: true,
        },
      });
    } else {
      // 初期は下に隠しておく（CSSでも設定しておく）
      gsap.fromTo(panel, { yPercent: 100 }, {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#point',
          start: `${startPercent}% top`,
          end: `${endPercent}% top`,
          scrub: true,
        },
      });
    }
  });

  // リサイズ対応（end を再計算）
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });
});

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
    question: "サービスの利用に料金はかかりますか？",
    answer: "基本プランは無料でご利用いただけます。有料オプションをご希望の場合のみ追加費用が発生します。",
  },
  {
    question: "パスワードを忘れた場合はどうすればいいですか？",
    answer: "ログイン画面の「パスワードをお忘れの方」より再設定手続きを行ってください。",
  },
  {
    question: "登録後にメールアドレスの変更は可能ですか？",
    answer: "マイページ内のアカウント設定からメールアドレスの変更が可能です。",
  },
  {
    question: "問い合わせの返信にはどれくらい時間がかかりますか？",
    answer: "通常1〜2営業日以内にご返信しております。混雑時はお時間をいただく場合があります。",
  },
];

const openIndex = ref<number | null>(null);

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};

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
    height: 53px;
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
  .section-wrap {
    position: relative;
    
    width: 100vw;
    max-height: 602px;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    padding: 214px 150px 214px 0;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.15);
    }

    &.second {
      padding: 214px 0 214px 150px;

      .text-wrap {
        margin-right: auto;
        margin-left: unset;
      }
    }

    .text-wrap {
      max-width: 391px;
      width: 100%;
      color: white;
      position: relative;
      z-index: 1;
      margin-left: auto;

      h5 {
        font-size: 18px;
        text-shadow: 0px 3px 7px #00000064;
      }

      p {
        text-shadow: 0px 3px 7px #00000040;
        margin-top: 25px;
      }
    }
  }
}

#point {
  position: relative;
  /* pin 時に高さが必要なので最小で全パネル分を確保しておくと安全（ScrollTrigger側で end を制御しているので必須ではない）*/
  min-height: 100vh;

  .section-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;          /* 各パネルはビューポート全体 */
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: flex-end; /* 元の配置に合わせて */
    padding: 60px;
    z-index: 1;
  }

  /* 2,3 は初期で下に隠す（JS と両方でも OK） */
  .section-wrap:nth-child(2),
  .section-wrap:nth-child(3) {
    transform: translateY(100%);
  }

  .section-wrap:nth-child(1) { z-index: 3; }
  .section-wrap:nth-child(2) { z-index: 2; }
  .section-wrap:nth-child(3) { z-index: 1; }
}

#appeal {
  .section-wrap {
    padding: 100px 0;

    h5 {
      font-size: 20px;
      letter-spacing: 0.6px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 60px;

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

        img {
          width: 200px;
          height: auto;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          object-position: center;
          border-radius: 50%;
          margin: auto auto 15px;
        }

        h5 {
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

        .question{
          cursor: pointer;
          box-shadow: 0px 3px 6px #00000029;
          display: flex;
          padding: 15px 20px;

          .faq-question {
            font-size: 16px;

            span {
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
            align-items: center;
            margin-left: auto;

            @include mixin.max-screen(mixin.$large) {
                width: 0.875em;
                height: 0.875em;
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
      
          &.active {
            border-bottom: none;

            .faq-toggle-icon {
              &::before {
                margin: auto;
              }
              &::after {
                background-color: unset;
              }
            }
          }
        }

        .faq-answer {
          display: none;
          overflow: hidden;

          &.open {
            display: flex;
            background-color: #F8F8F8;
            padding: 30px 10px;

            border-bottom: 1px solid #DEDEDE;

            animation: fadeIn 0.5s ease;
            @keyframes fadeIn {
                0% {
                    opacity: 0;
                    transform: translateY(-10px); 
                }
                100% {
                    opacity: 1;
                    transform: none;
                }
            }

            color: white;
            background-color: #1D1D1D;
            padding: 15px 20px;
          }
        }
      }
    }
  }
}

</style>