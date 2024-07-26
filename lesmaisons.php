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
                    <li><a href="">Le journal</a></li>
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
            <section id="goHouses" class="link-bottom">
                <img class="bg-img" src="assets/img/content/goHouses.png" alt="">
                <div class="text-content">
                    <h3>Antiques chalets et raccards
                        pluri-centenaires rénovés
                        en suites authentiques. </h3>
                    <img src="assets/img/content/arrow-link.svg" alt="">
                </div>
            </section>
            <section id="allHouses">
                <img class="houses-bg" src="assets/img/content/allHouses1.png" alt="" usemap="#houses-map">

                <map name="houses-map" id="houses-map">
                    <area target="" alt="House 1" coords="474,432,75" shape="circle"></area>
                    <area target="" alt="House 2" coords="821,470,70" shape="circle"></area>
                    <area target="" alt="House 3" coords="932,292,86" shape="circle"></area>
                </map>

                <img class="house-zone" src="assets/img/content/house1.png" alt="">

            </section>
            <section id="goExperiences" class="link-bottom">
                <img class="bg-img" src="assets/img/content/goExperiences.png" alt="">
                <div class="text-content">
                    <h3>Maison des expériences Nature</h3>
                    <img src="assets/img/content/arrow-link.svg" alt="">
                </div>
            </section>
    </div>
    <div class="popin-house" id="popin-house-3">
        <div class="bg-texture">

            <div class="popin-house-header">
                <div class="button-close popin-close">
                    <img src="assets/img/content/picto-close.svg" alt="">
                </div>
                <img src="assets/img/content/popin-house-3.png" alt="">
                <h2 class="rucherFont">Chez Catherine & Joseph</h2>
                <p>Dans ces 2 antiques granges à foin, parmi les plus anciennes du village, Catherine et Joseph se
                    sont
                    aimés.
                    Nous avons découvert les traces de leurs amours naissantes dans les vestiges de ces bâtisses.
                    Lui
                    était
                    instituteur à quelques vallées d’ici, elle l’attendait à Évolène.</p>
            </div>
            <div class="popin-house-content">
                <img src="assets/img/content/popin-house-3A.png" alt="">
                <p>Il se sont mariés… Ces 2 raccards intimement entremêlés ont été rénovés comme un tout,
                    astucieusement unifié.</p>
            </div>
            <div class="popin-house-content reverse">
                <img src="assets/img/content/popin-house-3B.png" alt="">
                <p>Sans modifier l’aspect extérieur, vous passez d’une grange à l’autre, par de subtiles coulisses
                    intérieures, pour rejoindre un salon, puis l’autre, la suite, l’une des 2 chambres ou le Hammam…
                </p>
            </div>
            <div class="popin-house-content">
                <img src="assets/img/content/popin-house-3C.png" alt="">
                <p>Quel bonheur que celui de se plonger dans ce hammam privatif pour prolonger le plaisir d’une
                    journée de ski.</p>
            </div>
            <div class="popin-house-content reverse">
                <img src="assets/img/content/popin-house-3D.png" alt="">
                <p>Une vraie maison de poupées, théâtre d’une idylle ; recoins romantiques et trésors de créativité
                    (attente photo dillustration chaîne de vélo à manivelle pour ouvrir et fermer les volets) vont
                    enchanter votre âme d’enfant.</p>
            </div>
            <div class="popin-house-description">
                ************ <br>
                1 suite de 35m2 <br>
                2 chambres de 30m2 <br>
                ************ <br>
                Chalet de 140 m2 avec jardin <br>
                ************ <br>
                6 personnes <br>
                ************ <br>
                Construit en 1595 <br>
                ************ <br>
                <button class="popin-close">fermer</button>
            </div>
        </div>
    </div>
    </main>
</body>

</html>