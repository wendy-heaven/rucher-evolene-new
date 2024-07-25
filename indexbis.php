<?php
  include './assets/php/traduction.php';
  $tr = $tr["path"];
?>

<!DOCTYPE html>
<html lang="<?= $lang ?>">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link type="text/css" rel="stylesheet" href="./assets/css/main.css" />
    <title>Paco Rabanne Gift finder</title>
  </head>
  <body data-lang="<?= $lang ?>" class="js-path-animate screen__container">
    <!-- DECORATIONS start -->
    <img src="./assets/img/ruban.png" alt="" class="decoration--ruban decoration" />
    <img src="./assets/img/boule--big.png" alt="" class="decoration--boule-big decoration" />
    <img src="./assets/img/etoile.png" alt="" class="decoration--star decoration" />
    <img src="./assets/img/confettis--1.png" alt="" class="decoration--confettis-1 decoration" />
    <img src="./assets/img/tube.png" alt="" class="decoration--tube decoration" />
    <img src="./assets/img/confettis--2.png" alt="" class="decoration--confettis-2 decoration" />
    <img src="./assets/img/confettis--3.png" alt="" class="decoration--confettis-3 decoration" />
    <img src="./assets/img/flacon.png" alt="" class="decoration--flacon decoration" />
    <img src="./assets/img/confettis--4.png" alt="" class="decoration--confettis-4 decoration" />
    <!-- DECORATIONS end -->

    <!-- SCREEN INTRO start -->
    <div class="screen--intro screen intro js-screen screen--1">
      <img
        src="./assets/img/confettis--intro.png"
        alt=""
        class="decoration intro__decoration intro__decoration--confettis"
      />
      <img
        src="./assets/img/confettis--intro.png"
        alt=""
        class="decoration intro__decoration intro__decoration--confettis intro__decoration--confettis2"
      />
      <img
        src="./assets/img/boule--intro.png"
        alt=""
        class="decoration intro__decoration intro__decoration--boule-l"
      />
      <img
        src="./assets/img/boule--intro.png"
        alt=""
        class="decoration intro__decoration intro__decoration--boule-m"
      />
      <img
        src="./assets/img/boule-2--intro.png"
        alt=""
        class="decoration intro__decoration intro__decoration--boule-s"
      />
      <h1 class="intro__title"><?= $tr["intro"]["title"] ?></h1>
      <a href="#" class="js-button intro__button " data-index="0">
        <img
          src="<?= "./assets/img/btn_". $lang . ".png"?>"
          alt=""
          class=""
        />
      </a>
    </div>
    <!-- SCREEN INTRO end -->

    <!-- SCREEN Q1 start -->
    <div class="screen js-screen screen--2 ">
      <img src="./assets/img/confettis--3.png" alt="" class="screen__deco desktop-hidden" />
      <video
        class="screen__video screen__video--big"
        src="./assets/video/PACORABANNE-GiftFinder_question1.mp4"
        loop
        muted
        playsinline="true"
        autoplay="true"
      >
      </video>
      <video
        class="screen__video screen__video--small"
        src="./assets/video/small/PACORABANNE-GiftFinder_question1.mp4"
        loop
        muted
        playsinline="true"
        autoplay="true"
      >
      </video>
      <div class="screen__infos">
        <h2 class="screen__title"><?= $tr["question1"]["question"] ?></h2>
        <form class="form ">
          <div class="button form__input">
            <input
              class="js-button js-decision"
              type="radio"
              id="her"
              name="gender"
              value="fem"
              data-index="1"
            />
            <label for="her" class="button__txt"><?= $tr["question1"]["answers"][0] ?></label>
          </div>
          <div class="button form__input">
            <input
              class="js-button js-decision"
              type="radio"
              id="him"
              name="gender"
              value="mal"
              data-index="1"
            />
            <label for="him" class="button__txt"><?= $tr["question1"]["answers"][1] ?></label>
          </div>
        </form>
      </div>
      <nav class="screen__nav nav">
        <ul class="nav__list">
          <li>
            <a
              href="#"
              alt="aller à la question 1"
              data-index-current="1"
              data-index-next="1"
              class="nav__link js-nav"
              ><img src="./assets/img/puce--fill.png" alt=""
            /></a>
          </li>
          <li>
            <a
              href="#"
              alt="aller à la question 2"
              data-index-current="1"
              data-index-next="2"
              class="nav__link js-nav"
              disabled="disabled"
              ><img src="./assets/img/puce--disable.png" alt=""
            /></a>
          </li>
          <li>
            <a
              href="#"
              alt="aller à la question 3"
              data-index-current="1"
              data-index-next="3"
              class="nav__link js-nav"
              disabled="disabled"
              ><img src="./assets/img/puce--disable.png" alt=""
            /></a>
          </li>
          <li>
            <a
              href="#"
              alt="aller à la question 4"
              data-index-current="1"
              data-index-next="4"
              class="nav__link js-nav"
              disabled="disabled"
              ><img src="./assets/img/puce--disable.png" alt=""
            /></a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- SCREEN Q1 end -->

    <!-- SCREEN Q2 start -->
    <div class="screen screen--inverse js-screen screen--3">
      <video
        class="screen__video screen__video--big"
        src="./assets/video/PACORABANNE-GiftFinder_question2.mp4"
        loop
        muted
        playsinline="true"
        autoplay="true"
      ></video>
      <video
        class="screen__video screen__video--small"
        src="./assets/video/small/PACORABANNE-GiftFinder_question2.mp4"
        loop
        muted
        playsinline="true"
        autoplay="true"
      ></video>
      <div class="screen__infos">
        <h2 class="screen__title"><?= $tr["question2"]["question"] ?></h2>
        <form class="form form--range">
          <div class="form__range-container">
            <div class="form__range-hide form__range-hide--left"></div>
            <div class="form__range-stop form__range-stop--min"></div>
            <div class="form__range-stop form__range-stop--middle"></div>
            <div class="form__range-stop form__range-stop--max"></div>
            <div class="form__range-hide form__range-hide--right"></div>
            <input
              class="form__range js-range"
              type="range"
              min="50"
              max="100"
              data-index="2"
              step="0.01"
            />
          </div>

          <label
            class="form__label js-label"
            data-min="<?= $tr["question2"]["answers"][0] ?>"
            data-middle="<?= $tr["question2"]["answers"][1] ?>"
            data-max="<?= $tr["question2"]["answers"][2] ?>"
            for=""
          >
            <?= $tr["question2"]["label"] ?>
          </label>
        </form>
      </div>
      <nav class="screen__nav nav">
        <ul class="nav__list">
          <li>
            <a
              href="#"
              alt="aller à la question 1"
              data-index-current="2"
              data-index-next="1"
              class="nav__link js-nav"
              ><img src="./assets/img/puce--fill.png" alt=""
            /></a>
          </li>
          <li>
            <a
              href="#"
              alt="aller à la question 2"
              data-index-current="2"
              data-index-next="2"
              class="nav__link js-nav"
              ><img src="./assets/img/puce--fill.png" alt=""
            /></a>
          </li>
          <li>
            <a
              href="#"
              alt="aller à la question 3"
              data-index-current="2"
              data-index-next="3"
              class="nav__link js-nav"
              disabled="disabled"
              ><img src="./assets/img/puce--disable.png" alt=""
            /></a>
          </li>
          <li>
            <a
              href="#"
              alt="aller à la question 4"
              data-index-current="2"
              data-index-next="4"
              class="nav__link js-nav"
              disabled="disabled"
              ><img src="./assets/img/puce--disable.png" alt=""
            /></a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- SCREEN Q2 end -->

    <!-- SCREEN Q3 start -->
    <div class="screen js-screen screen--4">
      <video
        class="screen__video screen__video--big"
        src="./assets/video/PACORABANNE-GiftFinder_question3.mp4"
        loop
        muted
        autoplay="true"
        playsinline="true"
      ></video>
      <video
        class="screen__video screen__video--small"
        src="./assets/video/small/PACORABANNE-GiftFinder_question3.mp4"
        loop
        muted
        autoplay="true"
        playsinline="true"
      ></video>
      <div class="screen__infos">
        <h2 class="screen__title"><?= $tr["question3"]["question"] ?></h2>
        <form class="form">
          <div class="button form__input">
            <input
              class="js-button js-decision"
              type="radio"
              id="fragrance"
              name="type"
              value="fra"
              data-index="3"
            />
            <label for="fragrance" class="button__txt"><?= $tr["question3"]["answers"][0] ?></label>
          </div>
          <div class="button form__input">
            <input
              class="js-button js-decision"
              type="radio"
              id="gifset"
              name="type"
              value="gif"
              data-index="3"
            />
            <label for="gifset" class="button__txt"><?= $tr["question3"]["answers"][1] ?></label>
          </div>
        </form>
      </div>
      <nav class="screen__nav nav">
        <ul class="nav__list">
          <li>
            <a
              href="#"
              alt="aller à la question 1"
              data-index-current="3"
              data-index-next="1"
              class="nav__link js-nav"
              ><img src="./assets/img/puce--fill.png" alt=""
            /></a>
          </li>
          <li>
            <a
              href="#"
              alt="aller à la question 2"
              data-index-current="3"
              data-index-next="2"
              class="nav__link js-nav"
              ><img src="./assets/img/puce--fill.png" alt=""
            /></a>
          </li>
          <li>
            <a
              href="#"
              alt="aller à la question 3"
              data-index-current="3"
              data-index-next="3"
              class="nav__link js-nav"
              ><img src="./assets/img/puce--fill.png" alt=""
            /></a>
          </li>
          <li>
            <a
              href="#"
              alt="aller à la question 4"
              data-index-current="3"
              data-index-next="4"
              class="nav__link js-nav"
              disabled="disabled"
              ><img src="./assets/img/puce--disable.png" alt=""
            /></a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- SCREEN Q3 end -->

    <!-- SCREEN Q4 start -->
    <div class="screen screen--inverse js-screen screen--5">
      <img src="./assets/img/confettis--3.png" alt="" class="screen__deco desktop-hidden" />

      <video
        class="screen__video screen__video--big"
        src="./assets/video/PACORABANNE-GiftFinder_question4.mp4"
        loop
        muted
        autoplay="true"
        playsinline="true"

      ></video>
      <video
        class="screen__video screen__video--small"
        src="./assets/video/small/PACORABANNE-GiftFinder_question4.mp4"
        loop
        muted
        autoplay="true"
        playsinline="true"

      ></video>
      <div class="screen__infos">
        <h2 class="screen__title screen__title--bigger"><?= $tr["question4"]["question"] ?></h2>
        <form class="form">
          <div class="button form__input">
            <input
              class="js-decision js-send-decision"
              type="radio"
              id="sophisticated"
              name="personality"
              value="sop"
            />
            <label for="sophisticated" class="button__txt"><?= $tr["question4"]["answers"][0] ?></label>
          </div>
          <div class="button form__input">
            <input
              class="js-decision js-send-decision"
              type="radio"
              id="adventurous"
              name="personality"
              value="adv"
            />
            <label for="adventurous" class="button__txt"><?= $tr["question4"]["answers"][1] ?></label>
          </div>
          <div class="button form__input">
            <input class="js-decision js-send-decision" type="radio" id="sensual" name="personality" value="sen" />
            <label for="sensual" class="button__txt"><?= $tr["question4"]["answers"][2] ?></label>
          </div>
          <div class="button form__input">
            <input
              class="js-decision js-send-decision"
              type="radio"
              id="mysterious"
              name="personality"
              value="mys"
            />
            <label for="mysterious" class="button__txt"><?= $tr["question4"]["answers"][3] ?></label>
          </div>
        </form>
      </div>
      <nav class="screen__nav nav">
        <ul class="nav__list">
          <li>
            <a
              href="#"
              alt="aller à la question 1"
              data-index-current="4"
              data-index-next="1"
              class="nav__link js-nav"
              ><img src="./assets/img/puce--fill.png" alt=""
            /></a>
          </li>
          <li>
            <a
              href="#"
              alt="aller à la question 2"
              data-index-current="4"
              data-index-next="2"
              class="nav__link js-nav"
              ><img src="./assets/img/puce--fill.png" alt=""
            /></a>
          </li>
          <li>
            <a
              href="#"
              alt="aller à la question 3"
              data-index-current="4"
              data-index-next="3"
              class="nav__link js-nav"
              ><img src="./assets/img/puce--fill.png" alt=""
            /></a>
          </li>
          <li>
            <a
              href="#"
              alt="aller à la question 4"
              data-index-current="4"
              data-index-next="4"
              class="nav__link js-nav"
              ><img src="./assets/img/puce--fill.png" alt=""
            /></a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- SCREEN Q4 end -->

    <!-- SCREEN END start -->
    <div class="screen--end screen intro screen--5 js-screen-end">
      <img class="hero__deco hero__deco--1" src="./assets/img/results/confettis--1.png" alt="" />
      <img class="hero__deco hero__deco--2" src="./assets/img/results/confettis--2.png" alt="" />
      <h1 class="intro__title js-title"><?= $tr["end"]["title"] ?></h1>
    </div>
    <!-- SCREEN END end -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
    <script type="text/javascript" src="./assets/js/main.js"></script>
  </body>
</html>
