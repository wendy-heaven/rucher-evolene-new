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
                    <li><a href="">Maison des Expériences nature</a></li>
                    <li><a href="">Le journal</a></li>
                    <li><a href="">Contact</a></li>
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
            <section id="goExperiences" class="link-bottom">
                <img class="bg-img" src="assets/img/content/goExperiences.png" alt="">
                <div class="text-content">
                    <h3>Maison des expériences Nature</h3>
                    <img src="assets/img/content/arrow-link.svg" alt="">
                </div>
            </section>

            <section class="slider-seasons">
                <div class="text-content">
                    <h3>Maison des expériences Nature</h3>
                    <p>Découvrez les autres saisons</p>
                    <div class="cta-slider">
                        <p>Hiver</p>
                        <p>Printemps</p>
                        <p>Été</p>
                        <p>Automne</p>
                    </div>
                </div>
            </section>

            <section id="goContact" class="link-bottom">
                <div class="text-content">
                    <h3>Contactz-nous</h3>
                    <img src="assets/img/content/arrow-link.svg" alt="">
                </div>
            </section>
    </div>
    </main>
</body>

</html>