<template>
  <div class="window-wrap">
    <div class="background" />
    <div class="window hero">
      <div class="hero-inner">
        <h1 class="ja">「イチヅケ」</h1>
        <!-- <div class="hero-inner_desc">
          <p class="text">
            <span>病気を治す医療から病気にさせない予防医療へ。</span>
            <span>患者様一人ひとりの個性に合わせた個別化医療を提供します。</span>
          </p>
        </div> -->
        <div class="button-wrap">
          <NuxtLink to="/job-seeker" class="btn">求職者はこちら</NuxtLink>
          <NuxtLink to="/agent" class="btn">転職エージェントはこちら</NuxtLink>
        </div>
      </div>
    </div>

    <!-- <div class="window contents">
      <div class="main-hero_contents">
        <div class="main-hero" :style="{ height: windowHeight }">
          <div class="main-hero-inner">
            <h2>
              <span class="ja">「新しく自由な体に」</span>
            </h2>
          </div>
        </div>
        <div class="main-hero-copy">
          <h4 class="ja">肩こりの悩みに注射による、新しい治療法</h4>
          <h1 class="ja">「カタラク」</h1>
        </div>
      </div>

      <div class="topic box">
        <div class="topic-inner">
          <h3 class="sub-heading">
            <span><span class="ja">TV</span>でも紹介された、<span class="ja">筋膜リリース注射</span>で</span>
            <span>肩こりケア。痛み解消・自由な体へ！</span>
          </h3>
          <p>
            <span>近年TVで放送され、注目を集めている「筋膜リリース注射」。</span>
            <span>骨や筋肉・内臓・神経・血管などを包み、全身をボディスーツのように覆っているネット状の繊維の膜「筋膜」。</span>
            <span>体の隅々まで、立体的に支えるために必要で、第二の骨格とも言われ、重要な働きをしています。</span>
            <span>「筋膜リリース」とは、“筋膜はがし”とも呼ばれ、筋膜が硬くなったり、癒着している筋膜をはがして痛みを改善する方法になります。</span>
          </p>
          <p>お悩みの肩こりに筋膜リリース注射という選択をお勧めいたします！</p>
        </div>
      </div>

      <div class="trouble box">
        <div class="trouble-inner">
          <h2 class="heading">Trouble</h2>
          <h3 class="sub-heading">こんなお悩み、ありませんか？</h3>
          <div class="trouble-list">
            <p>年齢と共に肩が重くなってきた</p>
            <p>長時間のデスクワークで、肩に重い痛みがある</p>
            <p>どれだけマッサージしても肩こりがラクにならない</p>
          </div>
        </div>
      </div>

      <div class="confidence box">
        <div class="confidence-inner ja">
          <span>そんなお悩みを解決するのが、筋膜リリース注射を</span>
          <span>用いた東京予防医療クリニックの「カタラク」です</span>
        </div>
      </div>

      <div class="treatment box">
        <div class="treatment-inner">
          <h2 class="heading">Treatment</h2>
          <h3 class="sub-heading">筋膜リリース水素注射「<span>カタラク</span>」</h3>
          <div class="treatment-point">
            <div class="point">
              <h4>
                <span class="point-label">What</span>
                <span class="point-title">筋膜リリース水素注射って？</span>
              </h4>
              <p>緊張や拘縮によって癒着・肥厚した筋膜の周囲に<span>水素入り生理食塩水</span>を注入し、癒着した筋膜を剥がしていく治療になります。</p>
            </div>
            <div class="point">
              <h4>
                <span class="point-label">Mechanism</span>
                <span class="point-title">メカニズム</span>
              </h4>
              <p>筋膜の癒着を剥離することで、結合組織の可動性が増し、伸張性が改善</p>
              <p>注入した水素入り生理食塩水によって、蓄積した炎症物質が洗い流される</p>
            </div>
            <div class="point">
              <h4>
                <span class="point-label">Quick</span>
                <span class="point-title">素早い治療</span>
              </h4>
              <p>１箇所あたりの注射時間は<span>30〜60秒前後</span>とコンパクト！</p>
            </div>
          </div>
        </div>
      </div>

      <div id="what" class="what box">
        <div class="inner">
          <h2 class="heading">What is</h2>
          <h3 class="sub-heading">肩こりの原因って？</h3>
          <img src="/images/img-what.jpg" alt="肩こりの原因って？" class="what-img" loading="lazy" />
          <p>
            <span>肩こりや腰痛は、筋肉の緊張や血流の悪化、姿勢の不良など、様々な要因で引き起こされます。首や背中が緊張するような姿勢での作業、姿勢の良くない人（猫背・前かがみ）、運動不足、精神的なストレス、なで肩、連続して長時間同じ姿勢をとること、ショルダーバッグ、冷房などが原因になります。</span>
            <span>当クリニックでは、患者様一人ひとりの状態に合わせた治療を提案させていただき、皆様の日常生活の質の向上を目指します。</span>
          </p>
        </div>
      </div>

      <div class="effect box">
        <h2 class="heading">Effect</h2>
        <h3 class="sub-heading">カタラクの効果で肩こり改善！</h3>
      </div>

      <div class="effect">
        <div class="section-inner effect-inner">
          <div class="effect-wrap">
            <div class="effect-content">
              <div class="image">
                <img src="/images/icon-effect1.svg" alt="筋肉緊張の緩和" loading="lazy" />
              </div>
              <div class="e-cap">
                <h4>筋肉緊張の緩和</h4>
                <p>
                  <span>筋肉のこわばりを和らげます。</span>
                  <span>仕事や日常生活の合間に簡単なストレッチを取り入れることで、筋肉の柔軟性を維持することができます。</span>
                </p>
              </div>
            </div>
            <div class="effect-content">
              <div class="image">
                <img src="/images/icon-effect2.svg" alt="疼痛緩和" loading="lazy" />
              </div>
              <div class="e-cap">
                <h4>疼痛緩和</h4>
                <p>肩こりにより引き起こされた疼痛をカタラクによって緩和させます。</p>
              </div>
            </div>
            <div class="effect-content">
              <div class="image">
                <img src="/images/icon-effect3.svg" alt="運動機能の向上" loading="lazy" />
              </div>
              <div class="e-cap">
                <h4>運動機能の向上</h4>
                <p>肩こりが改善されることにより、周辺筋肉の運動機能の向上が見込めます。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="features box">
        <div class="features-inner">
          <h2 class="heading">Features</h2>
          <h3 class="sub-heading">筋膜リリース注射の持つ３つの特徴</h3>
          <div class="features-point">
            <div class="point">
              <h4>
                <span class="point-label">Point</span>
                <span class="point-title">即効性</span>
              </h4>
              <div class="point-wrap">
                <div class="icon">
                  <img src="~/assets/icons/icon-point_01.svg" alt="即効性" loading="lazy" />
                </div>
                <p>早い方ですと、注射後10〜20分程度で、注入部位の重怠さがスッと抜けた感じをご体感頂けます。</p>
              </div>
            </div>
            <div class="point">
              <h4>
                <span class="point-label">Point</span>
                <span class="point-title">安全性</span>
              </h4>
              <div class="point-wrap">
                <div class="icon">
                  <img src="~/assets/icons/icon-point_02.svg" alt="安全性" loading="lazy" />
                </div>
                <p>治療に用いるのは生理食塩水ですので、一般的にお身体への健康被害は殆どありません。アレルギーの心配もほとんどないため、安全に治療を受けて頂くことができます。</p>
              </div>
            </div>
            <div class="point">
              <h4>
                <span class="point-label">Point</span>
                <span class="point-title">確実性</span>
              </h4>
              <div class="point-wrap">
                <div class="icon">
                  <img src="~/assets/icons/icon-point_03.svg" alt="確実性" loading="lazy" />
                </div>
                <p>
                  <span>筋膜リリース注射では超音波装置を見ながら治療を行います。</span>
                  <span>その為、確実に筋膜が剥がれていくのです。</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="care box">
        <div class="inner">
          <h2 class="heading">Care</h2>
          <h3 class="sub-heading">良い姿勢を習慣づけることも大切です</h3>
          <p>
            <span>下記にて紹介しております、どちらの治療も肩こりに有効な治療ではありますが、治療後原因の一つに挙げられる「悪い姿勢」のままでいると、肩こりが再発します。</span>
            <span>その為、普段から「良い姿勢」を心がけ肩こりの予防をすることが大切です。</span>
          </p>
        </div>
      </div>

      <div class="difference box">
        <div class="inner">
          <h2 class="heading">Difference</h2>
          <h3 class="sub-heading">従来の治療法と筋膜リリース水素注射の違いについて</h3>
          <div class="difference-wrap">
            <div class="point">
              <h4>
                <span class="point-label">Common</span>
                <span class="point-title">一般的な治療法</span>
              </h4>
              <div class="difference-desc">
                <div class="image">
                  <picture>
                    <source srcset="/images/img-difference_01.jpg" media="(min-width:481px)" >
                    <source srcset="/images/img-difference_01-mobile.jpg" media="(max-width:480px)" >
                    <img src="/images/img-difference_01.jpg" alt="一般的な治療法"  width="100%" height="100%" loading="lazy">
                  </picture>
                </div>
                <p>
                  <span>マッサージやストレッチ、温熱療法、電気治療、鍼治療などの治療が一般かと思われます。</span>
                  <span>一時的にコリはほぐれますが、根本的な痛みは改善しづらいです。その為、炎症の治りが遅く痛みを繰り返しやすい点が挙げられます。</span>
                </p>
              </div>
            </div>
            <p class="arrow-text ja"><span class="arrow"></span><span>当院が提供する治療法はこちら</span></p>
            <div class="point">
              <h4>
                <span class="point-label">Injection</span>
                <span class="point-title">筋膜リリース水素注射</span>
              </h4>
              <div class="difference-desc">
                <div class="image">
                  <picture>
                    <source srcset="/images/img-difference_02.jpg" media="(min-width:481px)" >
                    <source srcset="/images/img-difference_02-mobile.jpg" media="(max-width:480px)" >
                    <img src="/images/img-difference_02.jpg" alt="筋膜リリース水素注射"  width="100%" height="100%" loading="lazy">
                  </picture>
                </div>
                <p>
                  <span>当院はナノバブルの水素を加え注入しています。</span>
                  <span>水素の強力な抗酸化作用で炎症が抑えられ鎮痛効果が得られると同時に、血流改善と傷害組織の修復が期待されます。</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="review" class="review box">
        <div class="inner">
          <h2 class="heading">Review</h2>
          <h3 class="sub-heading">施術を受けたお客様の声</h3>
          <p>実際に当院に寄せられた、患者様のお声を紹介していきます。</p>
        </div>
      </div>

      <div class="review">
        <div class="section-inner review-inner">
          <div class="review-wrap">
            <div class="review-content">
              <div class="icon">
                <img src="/images/img-review_01.png" alt="レビュー1" class="review-img" loading="lazy" />
              </div>
              <div class="review-wrap_cap">
                <h4>諦めていた肩こりがすぐに改善しました！</h4>
                <p>
                  <span>パソコン作業による酷い肩こりで鍼灸やストレッチマッサージに通いましたが、改善せず諦めていました。</span>
                  <span>ネットで筋膜リリースを知り、早速受けてみました。すぐに改善したのにビックリ。注射による痛みもなく先生も、とても親切丁寧に対応してくれました。おかげさまで、非常に楽になりました。</span>
                </p>
                <h4>50代 女性 Nさん</h4>
              </div>
            </div>
            <div class="review-content">
              <div class="icon">
                <img src="/images/img-review_02.png" alt="レビュー2" class="review-img" loading="lazy" />
              </div>
              <div class="review-wrap_cap">
                <h4>エコーを見ながら実感度の高い施術でした！</h4>
                <p>
                  <span>水素が注入され、筋膜が剥がれているところをエコーで実際に見れるのは実感度が高かったです。</span>
                  <span>今まで、マッサージには何度も通ってましたが、その日だけ楽になる程度だったので、筋膜リリース注射を打つ前と打った後でこんなに違うのかと感動しました。</span>
                  <span>凝っていたところの触った感じも全然違って、柔らかくなっていたので、今後も通おうと思っています。</span>
                </p>
                <h4>30代 男性 Yさん</h4>
              </div>
            </div>
            <div class="review-content">
              <div class="icon">
                <img src="/images/img-review_03.png" alt="レビュー3" class="review-img" loading="lazy" />
              </div>
              <div class="review-wrap_cap">
                <h4>施術直後の即効性に感動しました！</h4>
                <p>
                  <span>日頃から肩こりが気になり、様々受けてみましたが、効果がイマイチ感じられず今回受診しました。</span>
                  <span>肩や首の後ろ何ヶ所が注射をし、施術直後から、少しずつ肩こりの症状が改善されてスッキリしてきました！</span>
                  <span>施術直後からの即効性に正直びっくりしたので、即効性を求める方はぴったりだと思います。</span>
                  <span>筋肉が徐々にほぐれているのを実感できたので、今後も続けてみようと思います。</span>
                </p>
                <h4>40代 女性 Kさん</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="campaign" class="campaign box">
        <div class="inner">
          <h2 class="heading">Campaign</h2>
          <h3 class="sub-heading">限定キャンペーン</h3>
          <div class="campaign-wrap">
            <div class="text-wrap campaign-img">
              <div class="text-inner">
                <div class="normal-price">
                  <p>通常価格(税込)</p>
                  <h5 class="ja">4,400<span>円</span></h5>
                </div>
                <span class="arrow"></span>
                <div class="campaign-price">
                  <p class="en">Campaign</p>
                  <h5 class="ja">3,740<span>円</span></h5>
                  <p class="note">初回施術限定価格になります</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="fee" class="fee box">
        <div class="inner">
          <h2 class="heading">Fee</h2>
          <h3 class="sub-heading">料金表</h3>
          <div class="fee-wrap">
            <div class="price-inner">
              <div class="price-wrap">
                <p>1本(10ml)毎</p>
                <p><span class="price">4,400</span></p>
              </div>
              <div class="price-wrap">
                <p>1本(10ml)<span>4本目から</span></p>
                <p><span class="price">3,850</span></p>
              </div>
            </div>
          </div>
          <p class="note">慢性的な肩こりの場合、最初は1～2週間に1回の治療がお勧めです。</p>
          <p class="note">凝りや疲労感が強い場合は、注射や点滴の併用が有効です。</p>
        </div>
      </div>

      <div class="reservation box">
        <div class="inner">
          <div class="reservation-image">
            <img src="/images/img-end.svg" alt="キャンペーン" class="reservation-img" loading="lazy" />
          </div>
          <div class="reservation-cap">
            <h4 class="ja">
              <span>東京予防医療クリニックで</span>
              <span>肩こりのない身体へ。</span>
            </h4>
            <div class="button-wrap">
              <a href="https://www.tokyo-yobo.com/?utm_medium=katarakulp&utm_content=footer" target="_blank">
                <p>ご予約はこちら<span class="arrow"></span></p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer box">
        <div class="logo">
          <img src="/images/img-logo.jpg" alt="" />
        </div>
        <div class="menu-list">
          <NuxtLink :to="{ path: '/', hash: '#what' }" class="scrollto flexbox" @click="removeBodyClass">
              <span class="menu-title-wrap">What is</span>
          </NuxtLink>
          <NuxtLink :to="{ path: '/', hash: '#review' }" class="scrollto flexbox" @click="removeBodyClass">
              <span class="menu-title-wrap">Review</span>
          </NuxtLink>
          <NuxtLink :to="{ path: '/', hash: '#campaign' }" class="scrollto flexbox" @click="removeBodyClass">
              <span class="menu-title-wrap">Campaign</span>
          </NuxtLink>
          <NuxtLink :to="{ path: '/', hash: '#fee' }" class="scrollto flexbox" @click="removeBodyClass">
              <span class="menu-title-wrap">Fee</span>
          </NuxtLink>
        </div>
        <div class="navigation-button">
          <a href="https://page.line.me/301uojfv?oat_content=url&openQrModal=true" target="_blank">
              <img src="~/assets/icons/icon-line.svg" alt="東京予防医療クリニック公式LINEアカウント" />
          </a>
          <a href="https://www.instagram.com/tokyo_yobo_clinic/" target="_blank">
              <img src="~/assets/icons/icon-instagram.svg" alt="東京予防医療クリニック公式Instagramアカウント" />
          </a>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const baseDir = runtimeConfig.public.baseDir;

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

        text-align: center;
        margin-bottom: 50px;
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

      .button-wrap {
        display: grid;
        gap: 30px 0;

        a {
          max-width: unset;
          padding: 20px;
        }
      }
    }

    // &.contents {
    //   position: relative;
    //   width: 640px;
    //   flex-shrink: 0;
    //   margin: auto;

    //   @include mixin.max-screen(mixin.$large) {
    //     max-width: 640px;
    //     width: 100%;
    //   }

    //   $copyHeight: 200px;
    //   $heroSpace: 30px;

    //   .main-hero_contents {
    //     margin-bottom: 60px;
    //     max-height: 800px;
    //     box-shadow: 0px 3px 6px #00000029;
    //     border-radius: 0 0 15px 15px;

    //     @include mixin.max-screen(1060px) {
    //       border-radius: 0;
    //     }
    //   }

    //   .main-hero {
    //     width: 100%;
    //     height: calc(100vh - $copyHeight - $heroSpace);
    //     max-height: 570px;
    //     background-image: url(/images/img-hero.jpg);
    //     background-position: 65% bottom;
    //     background-size: cover;
    //     background-repeat: no-repeat;
    //     color: #fff;
    //     text-align: center;
    //     position: relative;

    //     @include mixin.max-screen(mixin.$small) {
    //       height: calc(100vh - 146px - $heroSpace);

    //     }

    //     .main-hero-inner {
    //       width: 100%;
    //       position: absolute;
    //       top: 50%;
    //       left: 50%;
    //       transform: translate(-50%,-50%);

    //       h2 {
    //         font-size: 1.875em;
    //         text-shadow: 0px 3px 6px #484848af;
    //         letter-spacing: 0.07em;

    //         @include mixin.max-screen(mixin.$small) {
    //           font-size: 1.5625em;
    //         }
    //       }
    //     }
    //   }

    //   .main-hero-copy {
    //     width: 100%;
    //     max-height: $copyHeight;
    //     background-color: white;
    //     border-radius: 0 0 15px 15px;
    //     text-align: center;
    //     padding: 55px 0;

    //     @include mixin.max-screen(mixin.$small) {
    //       padding: 30px 20px;
    //     }

    //     @include mixin.max-screen(1060px) {
    //       border-radius: 0;
    //     }

    //     h4 {
    //       font-size: 1.25em;
    //       font-weight: bold;
    //       margin-bottom: 20px;

    //       @include mixin.max-screen(mixin.$small) {
    //         font-size: 1em;
    //         line-height: 1.25;
    //       }
    //     }

    //     h1 {
    //       font-size: 3.125em;
    //       color: mixin.$main;

    //       @include mixin.max-screen(mixin.$small) {
    //         font-size: 2.875em;
    //       }
    //     }
    //   }

    //   .topic {
    //     color: white;

    //     .sub-heading {
    //       font-weight: bold;

    //       span {
    //         display: block;

    //         &.ja {
    //           font-size: 1.625em;
    //           display: inline;

    //           @include mixin.max-screen(mixin.$medium) {
    //             font-size: 1.25em;
    //           }
    //         }

    //         @include mixin.max-screen(mixin.$medium) {
    //           font-size: 1em;
    //           display: inline;
    //         }
    //       }
    //     }

    //     p {
    //       &:last-of-type {
    //         margin-top: 1em;
    //       }

    //       @include mixin.max-screen(mixin.$medium) {
    //         font-weight: normal;
    //       }

    //       span {
    //         display: block;
    //       }
    //     }
    //   }

    //   .trouble {
    //     width: 100%;
    //     background-color: white;
    //     background-image: url(/images/img-trouble.jpg);
    //     background-position: 85% 0;
    //     background-size: contain;
    //     background-repeat: no-repeat;

    //     @include mixin.max-screen(mixin.$medium) {
    //       background-position: 110% 0;
    //     }

    //     .trouble-inner {
    //       position: relative;

    //       @include mixin.max-screen(mixin.$medium) {
    //         margin-right: 0;
    //       }
    //     }

    //     .trouble-list {
    //       p {
    //         width: fit-content;
    //         font-weight: bold;
    //         background-color: white;
    //         border-radius: 15px;
    //         box-shadow: 0px 3px 6px #00000029;
    //         padding: 16px 10px;
    //         margin-bottom: 15px;

    //         &:last-of-type {
    //           margin-bottom: 0;
    //         }
    //       }
    //     }
    //   }

    //   .confidence {
    //     .confidence-inner {
    //       span {
    //         font-size: 1.25em;
    //         font-weight: bold;
    //         color: white;
    //         line-height: 1.5;
    //         letter-spacing: 0.05em;
    //         display: block;

    //         @include mixin.max-screen(mixin.$small) {
    //           font-size: 4.1vw;
    //           display: inline;
    //         }

    //         @include mixin.screen(mixin.$small, 1060px) {
    //           text-align: center;
    //         }
    //       }
    //     }
    //   }

    //   .treatment {
    //     background-color: white;

    //     .sub-heading {
    //       span {
    //         font-weight: bold;
    //       }
    //     }

    //     .treatment-inner {
    //       .treatment-point {
    //         width: 98%;
    //         margin-left: 2%;
    //         margin-top: 50px;
    //         counter-reset: count;

    //         @include mixin.max-screen(mixin.$medium) {
    //           width: 100%;
    //           margin-left: 0;
    //           margin-top: 30px;
    //         }

    //         .point {
    //           margin-bottom: 40px;

    //           &:last-of-type {
    //             margin-bottom: 0;
    //           }

    //           @include mixin.max-screen(mixin.$medium) {
    //             margin-bottom: 30px;
    //           }

    //           &:nth-of-type(2) {
    //             p {
    //               text-indent: -13px;
    //               padding-left: 13px;

    //               &::before {
    //                 content: '・';
    //                 margin-right: 5px;
    //               }
    //             }
    //           }

    //           &:last-of-type {
    //             margin-bottom: 0;
    //           }

    //           h4 {
    //             font-size: 1em;
    //             position: relative;
    //             margin-bottom: 20px;

    //             .point-label {
    //               font-family: 'adobe-handwriting-ernie', sans-serif;
    //               position: absolute;
    //               left: -20px;
    //               bottom: 30px;
    //               font-size: 1.125em;
    //               transform: rotate(-8deg);
    //               display: inline-block;
    //               background-color: #fff;
    //               padding: 0 10px;

    //               @include mixin.max-screen(mixin.$small) {
    //                 font-size: 0.875em;
    //               }
    //             }

    //             .point-title {
    //               display: inline-block;
    //               width: 250px;
    //               color: mixin.$main;
    //               border: 1px solid mixin.$main;
    //               padding: 10px 20px;
    //               border-radius: 0 50px 50px 0;

    //               @include mixin.max-screen(mixin.$medium) {
    //                 font-size: 1em;
    //               }
    //             }
    //           }

    //           p {
    //             span {
    //               font-weight: bold;
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }

    //   .what {
    //     color: white;

    //     .heading {
    //       color: white;
    //     }

    //     .what-img {
    //       width: 100%;
    //       height: auto;
    //       aspect-ratio: 5 / 2;
    //       background-repeat: no-repeat;
    //       border-radius: 5px;
    //       margin-bottom: 15px;

    //       @include mixin.max-screen(mixin.$medium) {
    //         margin-bottom: 10px;
    //       }
    //     }

    //     p {
    //       span {
    //         display: block;

    //         &:last-of-type {
    //           margin-top: 1em;
    //         }
    //       }
    //     }
    //   }

    //   .effect {
    //     &.box {
    //       background-color: white;
    //     }

    //     .sub-heading {
    //       margin-bottom: 0;
    //     }
    //   }

    //   .effect {
    //     .effect-inner {
    //       .effect-wrap {
    //         counter-reset: count;
    //         .effect-content {
    //           width: 90%;
    //           max-width: 295px;
    //           margin: 0 auto 30px;
    //           background-color: #fff;
    //           border-radius: 15px;
    //           box-shadow: 0px 3px 6px #00000029;
    //           padding: 25px 0 0;
    //           counter-increment: count;

    //           .image {
    //             max-width: 190px;
    //             width: 100%;
    //             height: auto;
    //             margin: 0 auto 25px;

    //             img {
    //               object-fit: cover;
    //             }
    //           }

    //           .e-cap {
    //             color: white;
    //             background-color: mixin.$main;
    //             padding: 25px;
    //             border-radius: 0 0 15px 15px;

    //             h4 {
    //               font-size: 1em;
    //               font-weight: bold;
    //               font-style: normal;

    //               &::before {
    //                 content: '0' counter(count) '.';
    //                 font-family: 'adobe-handwriting-ernie', sans-serif;
    //                 font-size: 2.5em;
    //                 vertical-align: -webkit-baseline-middle;
    //                 margin-right: 10px;
    //               }
    //             }

    //             p {
    //               span {
    //                 display: block;
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }

    //   .features {
    //     &.box {
    //       background-color: white;
    //     }

    //     .features-point {
    //       margin-top: 50px;

    //       @include mixin.max-screen(mixin.$medium) {
    //         margin-top: 30px;
    //       }

    //       .point {
    //         margin-bottom: 40px;

    //         &:last-of-type {
    //           margin-bottom: 0;
    //         }

    //         h4 {
    //           font-size: 1em;
    //           position: relative;
    //           margin-bottom: 20px;

    //           .point-label {
    //             font-family: 'adobe-handwriting-ernie', sans-serif;
    //             position: absolute;
    //             left: -20px;
    //             bottom: 28px;
    //             font-size: 1.125em;
    //             transform: rotate(-8deg);
    //             display: inline-block;
    //             background-color: #fff;
    //             padding: 0 10px;

    //             @include mixin.max-screen(mixin.$small) {
    //               font-size: 0.875em;
    //             }
    //           }

    //           .point-title {
    //             display: inline-block;
    //             width: 230px;
    //             color: mixin.$main;
    //             border: 1px solid mixin.$main;
    //             padding: 10px 20px;
    //             border-radius: 0 50px 50px 0;

    //             @include mixin.max-screen(mixin.$medium) {
    //               font-size: 1em;
    //             }
    //           }
    //         }

    //         .point-wrap {
    //           display: flex;

    //           .icon {
    //             margin-right: 20px;

    //             img {
    //               width: 60px;
    //               height: auto;
    //               aspect-ratio: 1 / 1;
    //             }
    //           }

    //           p {
    //             max-width: 390px;
    //             width: 90%;
    //             margin: -0.5625em 0;

    //             span {
    //               display: block;
    //             }

    //             @include mixin.max-screen(mixin.$small) {
    //               width: 76%;
    //             }

    //             @include mixin.screen(mixin.$small, 1060px) {
    //               max-width: unset;
    //               width: 95%;
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }

    //   .care {
    //     color: white;

    //     .heading {
    //       color: white;
    //     }

    //     p {
    //       span {
    //         display: block;

    //         &:last-of-type {
    //           margin-top: 1em;
    //         }
    //       }
    //     }
    //   }

    //   .difference {
    //     &.box {
    //       background-color: white;
    //     }

    //     .difference-wrap {
    //       margin-top: 50px;

    //       @include mixin.max-screen(mixin.$medium) {
    //         margin-top: 30px;
    //       }

    //       .point {
    //         margin-bottom: 40px;

    //         &:first-of-type {
    //           h4 {
    //             .point-title {
    //               color: black;
    //               border-color: black;
    //             }
    //           }
    //         }

    //         &:last-of-type {
    //           margin-bottom: 0;

    //           .point-label {
    //             color: mixin.$main;
    //             bottom: 32px;
    //           }
    //         }

    //         h4 {
    //           font-size: 1em;
    //           position: relative;
    //           margin-bottom: 20px;

    //           .point-label {
    //             font-family: 'adobe-handwriting-ernie', sans-serif;
    //             position: absolute;
    //             left: -20px;
    //             bottom: 28px;
    //             font-size: 1.125em;
    //             transform: rotate(-8deg);
    //             display: inline-block;
    //             background-color: #fff;
    //             padding: 0 10px;

    //             @include mixin.max-screen(mixin.$medium) {
    //               font-size: 0.875em;
    //             }
    //           }

    //           .point-title {
    //             display: inline-block;
    //             width: 230px;
    //             color: mixin.$main;
    //             border: 1px solid mixin.$main;
    //             padding: 10px 20px;
    //             border-radius: 0 50px 50px 0;
    //           }
    //         }

    //         .difference-desc {
    //           display: flex;
    //           @include mixin.max-screen(mixin.$medium) {
    //             flex-direction: column;
    //           }

    //           .image {
    //             margin-right: 20px;

    //             @include mixin.max-screen(mixin.$medium) {
    //               margin-right: 0;
    //             }

    //             img {
    //               width: 195px;
    //               aspect-ratio: 1 / 1;
    //               border-radius: 15px;

    //               @include mixin.max-screen(mixin.$medium) {
    //                 width: 100%;
    //                 aspect-ratio: 3 / 2;
    //               }
    //             }
    //           }

    //           p {
    //             max-width: 270px;
    //             width: 90%;
    //             margin: auto 0;

    //             @include mixin.max-screen(1060px) {
    //               max-width: unset;
    //               width: 80%;
    //             }

    //             @include mixin.max-screen(mixin.$medium) {
    //               width: 100%;
    //               margin-top: 15px;
    //             }

    //             span {
    //               display: block;
    //             }
    //           }
    //         }
    //       }

    //       .arrow-text {
    //         font-size: 1.0625em;
    //         margin-bottom: 40px;

    //         @include mixin.max-screen(mixin.$medium) {
    //           font-size: 1em;
    //           font-weight: bold;
    //           text-align: center;
    //           margin-bottom: 40px;
    //         }

    //         .arrow {
    //           position: relative;
    //           display: inline-block;
    //           width: 2.5px;
    //           height: 30px;
    //           margin-right: 8.5px;
    //           border-radius: 9999px;
    //           background-color: #000000;

    //           @include mixin.max-screen(mixin.$medium) {
    //             width: 3px;
    //           }
    //         }

    //         .arrow::before {
    //           content: '';
    //           position: absolute;
    //           bottom: 0;
    //           left: 50%;
    //           width: 2.5px;
    //           height: 15px;
    //           border-radius: 9999px;
    //           background-color: #000000;
    //           transform: rotate(45deg);
    //           transform-origin: 50% calc(100% - 2.5px);

    //           @include mixin.max-screen(mixin.$medium) {
    //             width: 3px;
    //             transform-origin: 50% calc(100% - 2px);
    //           }
    //         }

    //         span:last-of-type {
    //           vertical-align: super;
    //           margin-left: 15px;
    //         }
    //       }
    //     }
    //   }

    //   .review {
    //     color: white;

    //     .heading {
    //       color: white;
    //     }
    //   }

    //   .review {
    //     .review-inner {
    //       .review-wrap {
    //         .review-content {
    //           width: 90%;
    //           max-width: 350px;
    //           margin: 0 auto 30px;
    //           background-color: #fff;
    //           border-radius: 15px;
    //           box-shadow: 0px 3px 6px #00000029;
    //           padding: 25px 0 0;

    //           &:nth-of-type(2) {
    //             .icon {
    //               padding: 15px 0 0 20px;
    //               img {
    //                 object-position: 100% 0%;
    //                 width: 85%;
    //               }
    //             }
    //           }

    //           .icon {
    //             max-width: 180px;
    //             width: 100%;
    //             height: 180px;
    //             border: 2px solid mixin.$main;
    //             border-radius: 50%;
    //             box-shadow: 0px 3px 6px #00000029;
    //             filter: drop-shadow(0px 3px 6px #00000029);
    //             margin: 0 auto;
    //             overflow: hidden;
    //             padding: 15px 0 0;

    //             @include mixin.max-screen(mixin.$medium) {
    //               max-width: 160px;
    //               height: 160px;
    //             }

    //             img {
    //               width: 75%;
    //               height: 100%;
    //               object-fit: cover;
    //               object-position: top;
    //               margin: auto;
    //             }
    //           }

    //           .review-wrap_cap {
    //             color: black;
    //             padding: 30px;
    //             border-radius: 0 0 15px 15px;

    //             @include mixin.max-screen(mixin.$medium) {
    //               padding: 30px 20px;
    //             }

    //             h4 {
    //               font-size: 0.875em;
    //               font-weight: bold;
    //               font-style: normal;
    //               margin: 0 auto 30px;
    //               position: relative;

    //               &:last-of-type {
    //                 margin: 30px 0 0;

    //                 @include mixin.max-screen(mixin.$medium) {
    //                   margin: 20px 0 0;
    //                 }
    //               }

    //               @include mixin.max-screen(mixin.$medium) {
    //                 margin: 0 auto 20px;
    //               }
    //             }

    //             p {
    //               span {
    //                 display: block;
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }

    //   .campaign {
    //     @include mixin.max-screen(mixin.$medium) {
    //       &.box {
    //         padding: 30px 15px;
    //       }
    //     }

    //     .heading,
    //     .sub-heading {
    //       color: white;

    //       @include mixin.max-screen(mixin.$small) {
    //         padding-left: 5px;
    //       }

    //       @include mixin.screen(mixin.$small, 1060px) {
    //         padding-left: 20px;
    //       }
    //     }

    //     .campaign-wrap {
    //       width: 100%;
    //       border: 1px solid white;
    //       background-color: rgba(255, 255, 255, 0.35);
    //       border-radius: 15px;
    //       display: flex;
    //       justify-content: space-between;
    //       padding: 10px;

    //       @include mixin.max-screen(mixin.$medium) {
    //         padding: 5px;
    //         flex-direction: column-reverse;
    //       }

    //       .text-wrap {
    //         width: 100%;
    //         background-color: white;
    //         border-radius: 15px;
    //         text-align: center;
    //         align-content: center;
    //         padding: 15px;
    //         position: relative;

    //         @include mixin.max-screen(mixin.$medium) {
    //           background-color: unset;
    //         }

    //         .text-inner {
    //           width: fit-content;
    //           position: absolute;
    //           top: 50%;
    //           left: 32.5%;
    //           transform: translate(-50%, -50%);
    //         }

    //         .normal-price {
    //           margin-bottom: 15px;

    //           @include mixin.max-screen(mixin.$small) {
    //             margin-bottom: 12px;
    //           }

    //           p {
    //             font-size: 0.75em;
    //           }

    //           h5 {
    //             font-size: 1.8em;
    //             font-weight: bold;
    //             letter-spacing: 0.04em;

    //             @include mixin.max-screen(mixin.$small) {
    //               font-size: 1.25em;
    //             }

    //             &::before {
    //               content: '(1本)';
    //               font-size: 0.6em;
    //               font-weight: normal;
    //               margin-right: 8px;                  
    //             }

    //             span {
    //               font-size: 0.75em;
    //               margin-left: 3px;
    //             }
    //           }
    //         }

    //         .campaign-price {
    //           position: relative;
    //           margin-top: 5px;

    //           @include mixin.max-screen(mixin.$small) {
    //             margin-top: 2px;
    //           }

    //           .en {
    //             font-size: 1.1em;
    //             transform: rotate(-8deg);
    //             color: mixin.$main;
    //             margin-left: -8.5em;
    //             margin-bottom: -0.6em;

    //             @include mixin.max-screen(mixin.$small) {
    //               font-size: 0.875em;
    //             }
    //           }

    //           h5 {
    //             font-size: 2.4375em;
    //             font-weight: bold;
    //             letter-spacing: 0.04em;
    //             margin-bottom: 3px;

    //             @include mixin.max-screen(mixin.$small) {
    //               font-size: 1.9375em;
    //             }

    //             &::before {
    //               content: '(1本)';
    //               font-size: 0.5em;
    //               font-weight: normal;
    //               margin-right: 8px;                  
    //             }

    //             span {
    //               font-size: 0.65em;
    //               margin-left: 3px;
    //             }
    //           }
    //         }
    //       }

    //       .arrow {
    //         position: relative;
    //         display: inline-block;
    //         width: 2px;
    //         height: 24px;
    //         margin-right: 5.7px;
    //         border-radius: 9999px;
    //         background-color: #000000;

    //         &::before {
    //           content: "";
    //           position: absolute;
    //           bottom: 0;
    //           left: calc(50% - 1px);
    //           width: 2px;
    //           height: 14px;
    //           border-radius: 9999px;
    //           background-color: #000000;
    //           transform: rotate(45deg);
    //           transform-origin: 50% calc(100% - 1px);

    //           @include mixin.max-screen(mixin.$small) {
    //             height: 10px;
    //           }
    //         }

    //         @include mixin.max-screen(mixin.$small) {
    //           height: 16px;
    //         }
    //       }

    //       .campaign-img {
    //         width: 100%;
    //         height: auto;
    //         background-image: url(/images/img-campaign.jpg);
    //         background-size: 120%;
    //         background-position: 95% 10%;
    //         background-repeat: no-repeat;
    //         aspect-ratio: 3 / 2;

    //         @include mixin.max-screen(mixin.$small) {
    //           background-size: 145%;
    //           background-position: 95% 10%;
    //         }
    //       }
    //     }
    //   }

    //   .fee {
    //     &.box {
    //       background-color: white;
    //     }

    //     .fee-wrap {
    //       border: solid #666;
    //       border-width: 0.5px 0 0.5px 0;
    //       display: flex;
    //       justify-content: space-between;
    //       padding: 30px 0;
    //       margin-bottom: 20px;

    //       .title {
    //         font-size: 1em;
    //         font-weight: bold;
    //         margin: auto 0;

    //         @include mixin.max-screen(mixin.$medium) {
    //           font-size: 0.9375em;
    //           margin: auto 20px auto 0;
    //         }
    //       }

    //       .price-inner {
    //         // max-width: 280px;
    //         width: 100%;

    //         .price-wrap {
    //           display: flex;
    //           justify-content: space-between;
    //           align-items: center;

    //           &:first-of-type {
    //             border-bottom: 0.5px solid #666;
    //             padding: 0 20px 30px;
    //           }

    //           &:last-of-type {
    //             padding: 30px 20px 0;
    //           }

    //           p {
    //             span {
    //               display: block;
    //             }

    //             .price {
    //               font-weight: bold;

    //               &::after {
    //                 content: '円 (税込)';
    //                 margin-left: 3px;
    //               }

    //               @include mixin.max-screen(mixin.$medium) {
    //                 margin-left: 10px;
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }

    //     .note {
    //       font-size: 0.75em;

    //       &:first-of-type {
    //         margin-bottom: 15px;
    //       }

    //       span {
    //         margin-right: 3px;
    //       }
    //     }
    //   }

    //   .reservation {
    //     .inner {
    //       display: flex;

    //       .reservation-image {
    //         @include mixin.max-screen(mixin.$medium) {
    //           width: 45%;
    //         }
    //       }

    //       .reservation-cap {
    //         margin: auto 0 auto 30px;

    //         @include mixin.max-screen(mixin.$medium) {
    //           width: 80%;
    //           margin: auto 0 auto 10px;
    //         }
    //       }

    //       h4 {
    //         font-size: 1.25em;
    //         color: white;
    //         line-height: 1.5;

    //         @include mixin.max-screen(mixin.$medium) {
    //           font-size: 1em;
    //         }

    //         span {
    //           display: block;
    //         }
    //       }

    //       .button-wrap {
    //         margin-top: 20px;

    //         a {
    //           color: mixin.$sub;
    //           background-color: white;
    //           margin: 0;

    //           .arrow {
    //             background-color: mixin.$sub;

    //             &::before {
    //               background-color: mixin.$sub;
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }

    //   .footer {
    //     &.box {
    //       background-color: white;
    //     }

    //     @include mixin.max-screen(1060px) {
    //       margin-bottom: 90px;
    //     }

    //     .logo {
    //       margin-bottom: 30px;

    //       img {
    //         width: auto;
    //         height: 45px;
    //       }
    //     }

    //     .menu-list {
    //       margin-bottom: 30px;

    //       a {
    //         width: fit-content;
    //         letter-spacing: 1.5px;
    //         margin-bottom: 15px;
    //       }
    //     }

    //     .navigation-button {
    //       width: fit-content;
    //       display: flex;

    //       a {
    //         width: 35px;
    //         height: auto;

    //         &:first-of-type {
    //             margin-right: 25px;
    //         }
    //       }
    //     }
    //   }
    // }
  }
}
</style>
