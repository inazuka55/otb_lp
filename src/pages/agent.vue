<template>
  <p>エージェントページ</p>

  <div class="window-wrap" style="display: none;">
    <div class="background" />
    <div class="window hero">
      <div class="hero-inner">
        <h1 class="ja">東京予防医療クリニック</h1>
        <div class="hero-inner_desc">
          <p class="text">
            <span>病気を治す医療から病気にさせない予防医療へ。</span>
            <span>患者様一人ひとりの個性に合わせた個別化医療を提供します。</span>
          </p>
        </div>
        <div class="button-wrap">
          <a href="https://www.tokyo-yobo.com/?utm_medium=katarakulp&utm_content=hero" target="_blank">
            <p>ご予約はこちら<span class="arrow"></span></p>
          </a>
        </div>
      </div>
    </div>

    <div class="window contents">
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
    </div>
  </div>
</template>