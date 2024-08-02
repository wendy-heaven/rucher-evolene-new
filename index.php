<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <title>Le rucher d'évolene</title>
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="author" content="" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css" rel="stylesheet" />

  <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
  <link rel="icon" href="favicon.ico">
  <script defer src="assets/js/main.js"></script>
  <link href="assets/css/app.css" rel="stylesheet">
</head>

<body>
  <div id="loading-page" style="">
    <img src="assets/img/content/logo-black.svg" alt="Loading Logo" style="width: 150px; height: auto;">
  </div>

 
  <nav>
    <div class="navigation-expanded">
      <!-- <img
          class="navigation-expanded--logo"
          src="assets/img/content/logo-black.svg"
          alt=""
        /> -->
      <div class="navigation-expanded--content">
        <ul class="navigation-expanded--content-left">
          <div class="language-select">
            <select name="lang" id="">
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>
            <span>+</span>
          </div>
          <li><a href="index.php">Accueil</a></li>
          <li><a href="lesmaisons.php">Les maisons</a></li>
          <li><a href="experiences-nature.php">Maison des Expériences nature</a></li>
          <!-- <li><a href="">Le journal</a></li> -->
          <li><a href="contact.php">Contact</a></li>
        </ul>
      </div>
      <!-- <ul class="menu-links">
          <li><a class="underline" href="">Contact</a></li>
          <li><a class="underline" href="">Mentions légales</a></li>
          <li><a class="underline" href="">Conditions d'utilisations</a></li>
        </ul> -->
    </div>
    <div class="navigation-small">
      <div class="burger-menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="28.273" height="12.814" viewBox="0 0 28.273 12.814">
          <g id="burguer" transform="translate(-1359.056 -60.593)">
            <path id="Tracé_6" data-name="Tracé 6" d="M1354.056,76.093h28.273" transform="translate(5 -15)" fill="none"
              stroke="#000" stroke-width="1" />
            <path id="Tracé_7" data-name="Tracé 7" d="M1354.056,76.093h28.273" transform="translate(5 -9.093)"
              fill="none" stroke="#000" stroke-width="1" />
            <path id="Tracé_8" data-name="Tracé 8" d="M1354.056,76.093h28.273" transform="translate(5 -3.186)"
              fill="none" stroke="#000" stroke-width="1" />
          </g>
        </svg>
      </div>

    </div>
    <div class="border-frame">
      <div class="border-left"></div>
      <div class="border-right"></div>
      <div class="border-bottom"></div>
    </div>
  </nav>
  <!-- ICI  partie qui scrolle -->
  <div class="bg-texture container">
    <header class="full-height">
      <div class="hero-content">
        <img class="hero-logo hero-logo-white" src="assets/img/content/logo.svg" alt="" />
        <img class="hero-logo hero-logo-black" src="assets/img/content/logo-black.svg" alt="" />

      </div>
      <div class="video-background">
        <video playsinline loop muted autoplay>
          <source src="assets/video/header.mp4" type="video/mp4" />
        </video>
      </div>
    </header>

    <main>

      <section class="pin-section full-height" id="sectionPin0">
        <div class="sticky-language" data-scroll data-scroll-sticky data-scroll-target="#sectionPin0">
          <ul class="sticky-language-content">
            <li><a href="">Anglais</a></li>
            <li><a href="">Allemand</a></li>
            <li><a href="">Français</a></li>
          </ul>
        </div>
        <div class="pin-wrapper">
          <div class="full-height pin-item" id="pin-item-1">
            <div class="pin-item_text">
              <img class="accent-img" src="assets/img/content/accent.svg" alt="Image 1" />
              <h2>
                Au Rucher d’Évolène, aventurez-vous dans ce que la montagne
                Suisse a de plus singulier et de plus authentique.
              </h2>
            </div>
            <img src="assets/img/content/pin-1.png" alt="Image 1" />
          </div>
          <div class="full-height pin-item" id="pin-item-2">
            <div class="pin-item_text">
              <h2>
                Au cœur du village d’Évolène, vivez la rencontre de la
                tradition, de la sincérité et de l’excellence dans un
                orchestre de chalets aux caractères singuliers et étonnants,
                ensemble harmonieux et concertant de différentes voix.
              </h2>
            </div>
            <img src="assets/img/content/pin-2.png" alt="Image 2" />
          </div>
        </div>
      </section>

      <section class="full-height video-border-block">
        <h2 class="center video-border-text">
          Le sublime val d’Hérens s’offre en écrin au Rucher ; la majestueuse
          dent blanche en vigie.
        </h2>
        <div class="video-border-background">
          <div class="border-animation"></div>
          <video playsinline loop muted autoplay>
            <source src="assets/video/MASTER_LP_4X4.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <section class="title-people"">
          <h2>Ce sont les gens authentiques qui ont forgé l’âme d’Evolène au fil des siècles.
            Le Rucher leur rend hommage.</h2>
        </section>
        <section class=" text-imgPile-block bg-color" id="fixed-target">
        <div class="full-height imgPileElement " data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
          <div class="text-imgPile-block-text" id="imgPile-text-first">
            <img class="bg-people" src="assets/img/content/evolene-people.png" alt="">
            <img class="bg-people-mask" id="bg-people-mask-1" src="assets/img/content/evolene-people-mask-1.png" alt="">
            <img class='light-1 light' src="assets/img/content/alveole-1.png" alt="">
            <img class='light-2 light' src="assets/img/content/alveole-1.png" alt="">
          </div>
          <div class="text-imgPile-block-imgPile">
            <!-- ICI changer --index max 5 et changer le offset -->
            <div class="card js-open-popin-video" id="card1" data-popin="archipissier">

              <img class="card-bg" style="--index: 0" src="assets/img/content/archipissier.png" alt="" />
              <img class="arrow-play" src="assets/img/content/picto-arrow-plain-white.svg" alt="" />
            </div>

          </div>
        </div>
        <div class="full-height imgPileElement" data-scroll data-scroll-sticky data-scroll-target="#fixed-target"
          data-scroll-offset="100%">
          <div class="text-imgPile-block-text"></div>
          <div class="text-imgPile-block-imgPile">
            <div class="card js-open-popin-video" id="card2" data-popin="paolo">

              <img class="card-bg" style="--index: 0" src="assets/img/content/paolo.png" alt="" />
              <img class="arrow-play" src="assets/img/content/picto-arrow-plain-white.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="full-height imgPileElement " data-scroll data-scroll-sticky data-scroll-target="#fixed-target"
          data-scroll-offset="200%">
          <div class="text-imgPile-block-text"></div>
          <div class="text-imgPile-block-imgPile">
            <div class="card js-open-popin-video" id="card3" data-popin="claude">

              <img class="card-bg" style="--index: 0" src="assets/img/content/claude.png" alt="" />
              <img class="arrow-play" src="assets/img/content/picto-arrow-plain-white.svg" alt="" />
            </div>
          </div>
        </div>

      </section>
      <section class="houses-block full-height" id="houses-section">
        <img class="houses-drawing" src="assets/img/content/dessin-alveoles.png" alt="" />
        <img class="houses-img" src="assets/img/content/bg-windows.png" alt="" />
        <h3 class="houses-text">
          L’art est un voyage. Un voyage intime et singulier, une évasion
          intérieure. Il trouve donc tout naturellement sa place au Rucher
          d’Evolène, territoire de découvertes et d’expériences. Les artistes
          associés au projet depuis les prémices font vivre leur art dans les
          murs, et parfois même au-delà.
        </h3>
      </section>

      <section class="panorama-scroll-block full-height" id="sectionPin">
        <div class="pin-wrap panorama-content">
          <div class="panorama-element js-open-popin-video" data-popin="raymonde">
            <img src="assets/img/content/pano1.png" alt="" />
          </div>
          <div class="panorama-element js-open-popin-video" data-popin="andre-george">
            <img src="assets/img/content/pano2.png" alt="" />
          </div>
          <div class="panorama-element">
            <img src="assets/img/content/pano3.png" alt="" />
          </div>
          <div class="panorama-element">
            <img src="assets/img/content/pano4.png" alt="" />
          </div>
          <div class="panorama-element">
            <img src="assets/img/content/pano5.png" alt="" />
          </div>
        </div>
        <img class="fioriture" src="assets/img/content/fioriture.png" alt="" />
      </section>


      <section class="text-image-block" id="scroll-section">
        <div class="text-container ">
          <div class="text-step" id="step1">
            <p>Notre identité visuelle s’est imposée comme une évidence :
            </p>
          </div>
          <div class="text-step" id="step2">
            <p style="opacity: 0;">Notre identité visuelle s’est imposée comme une évidence :
            </p>
            <p>Le toit du raccard</p>
          </div>
          <div class="text-step" id="step3">
            <p style="opacity: 0;">Notre identité visuelle s’est imposée comme une évidence :
            </p>
            <p>les ailes de l’abeille</p>
          </div>
          <div class="text-step" id="step4">
            <p style="opacity: 0;">Notre identité visuelle s’est imposée comme une évidence :
            </p>
            <p>Une partie du kanji représentant le WA japonais</p>
          </div>
          <div class="text-step" id="step5">
            <p style="opacity: 0;">Notre identité visuelle s’est imposée comme une évidence :
            </p>
            <p>Une partie du kanji représentant le WA japonais</p>
          </div>
          <div class="text-step" id="step6">
            <p style="opacity: 0;">Notre identité visuelle s’est imposée comme une évidence :
            </p>
            <p>l’union de l’authentique et de l’excellence…</p>
          </div>
        </div>
        <div class="image-container">
          <div class="image-step" id="image1">
            <img src="assets/img/content/step1.png" alt="Image 1">
          </div>
          <div class="image-step" id="image2">
            <img src="assets/img/content/step2.png" alt="Image 2">
          </div>
          <div class="image-step" id="image3">
            <img src="assets/img/content/step3.png" alt="Image 3">
          </div>
          <div class="image-step" id="image4">
            <img src="assets/img/content/step4.png" alt="Image 4">
          </div>
          <div class="image-step" id="image5">
            <img src="assets/img/content/step5.png" alt="Image 5">
          </div>
          <div class="image-step" id="image6">
            <img src="assets/img/content/step6.png" alt="Image 6">
          </div>
          
        </div>
      </section>


      <section id="goHouses" class="link-bottom">
        <img class="bg-img" src="assets/img/content/goHouses.png" alt="">
        <div class="text-content">
          <h3>Antiques chalets et raccards
            pluri-centenaires rénovés
            en suites authentiques. </h3>
          <img src="assets/img/content/arrow-link.svg" alt="">
        </div>
      </section>
    </main>
  </div>
  <div class="js-popincontainer" style="display:none;">
    <div class="js-popincontent">
      <img class="btn_close" src="assets/img/content/picto-close.svg"></img>
      <video class="video" src="" playsinline autoplay controls></video>
    </div>
  </div>
</body>

</html>