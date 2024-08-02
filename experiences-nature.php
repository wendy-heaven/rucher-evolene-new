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
                        <path id="Tracé_6" data-name="Tracé 6" d="M1354.056,76.093h28.273" transform="translate(5 -15)"
                            fill="none" stroke="#000" stroke-width="1" />
                        <path id="Tracé_7" data-name="Tracé 7" d="M1354.056,76.093h28.273"
                            transform="translate(5 -9.093)" fill="none" stroke="#000" stroke-width="1" />
                        <path id="Tracé_8" data-name="Tracé 8" d="M1354.056,76.093h28.273"
                            transform="translate(5 -3.186)" fill="none" stroke="#000" stroke-width="1" />
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
        <main>
            <section class="link-bottom">
                <img class="bg-img" src="assets/img/content/experiences-header.png" alt="">
                <img class="bg-img-activities" src="assets/img/content/experiences-header-2.png" alt="">
            </section>

            <section class="slider-seasons">
                <div class="bg-content">
                    <img class="img-season active" src="assets/img/content/hiver.png" alt="">
                    <img class="img-season" src="assets/img/content/printemps.png" alt="">
                    <img class="img-season" src="assets/img/content/ete.png" alt="">
                    <img class="img-season" src="assets/img/content/automne.png" alt="">
                </div>
                <div class="text-content">
                    <h3>Maison des expériences Nature</h3>
                    <p id="text-discover" class="first">Découvrez les autres saisons</p>
                    <div class="cta-slider">
                        <p class="button-season active first">Hiver</p>
                        <p class="button-season first">Printemps</p>
                        <p class="button-season first">Été</p>
                        <p class="button-season first">Automne</p>
                    </div>
                </div>
            </section>
            <section class="blason-section">
                <h2>Le rucher a pour vocation de vous proposer toutes les activités du Val d’Hérens, de la plus
                    classique à la plus excentrique; de la plus accessible à la plus engagée</h2>
                <img src="assets/img/content/blason.png" alt="">
            </section>
            <section class="panorama-scroll-block full-height" id="sectionPin2">
                <div class="pin-wrapBis panorama-content">
                    <div class="panorama-element">
                        <img src="assets/img/content/panoA.png" alt="" />
                    </div>
                    <div class="panorama-element">
                        <img src="assets/img/content/panoB.png" alt="" />
                    </div>
                    <div class="panorama-element js-open-popin-video" data-popin="">
                        <img src="assets/img/content/panoC.png" alt="" />
                    </div>
                    <div class="panorama-element">
                        <img src="assets/img/content/panoD.png" alt="" />
                    </div>
                    <div class="panorama-element">
                        <img src="assets/img/content/panoE.png" alt="" />
                    </div>
                </div>
            </section>

            <section id="text-slider-section-pin" class="text-slider-section">

                <div class="text-slider-section-part">
                    <img class="bee-top" src="assets/img/content/bee-exp.png" alt="">
                    <h3 class="rucherFont">L’hotel central a retrouvé son toit.</h3>
                    <p>C’est maintenant hors d’eau que l’agencement intérieur va être façonné pour écrire la nouvelle
                        page de l’histoire de ce bâtiment iconique du village. Les maître-mots de cette nouvelle
                        rénovation : authenticité, charme et confort.</p>
                </div>
                <div class="text-slider-section-part">
                    <div class="slider-diag-content">
                        <img src="assets/img/content/slider-diag1.png" alt="">
                        <img src="assets/img/content/slider-diag2.png" alt="">
                    </div>

                </div>

                <div class="bee-part">
                    <img src="assets/img/content/bee-exp.png" alt="">
                </div>
            </section>

            <section class="watercolor-section">
                <p>Le Rucher d’Evolène est un ensemble harmonieux et concertant de raccards, chalets et hôtels dont la
                    rénovation dans les règles de l’art sera achevée pour le Carnaval 2026 afin de pour vous recevoir
                    dans un parfait équilibre de confort et d’authenticité.</p>
            </section>

            <section id="goContact" class="link-bottom">
                <div class="text-content">
                    <h3>Contactez-nous</h3>
                    <img src="assets/img/content/arrow-link-black.svg" alt="">
                </div>
            </section>
        </main>
    </div>
</body>

</html>