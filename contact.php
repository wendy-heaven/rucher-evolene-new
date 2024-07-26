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

<body class="bg-color">
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
    <main>
        <section class="contact-form">
            <div class="contact-form-part1">
                <h1>Contactez-nous</h1>
                <form action="/submit-your-form-handler" method="POST">
                    <div class="input">

                        <label for="name">Nom</label>
                        <input type="text" id="name" name="name" required>
                    </div>

                    <div class="input">

                        <label for="phone">Téléphone</label>
                        <input type="tel" id="phone" name="phone">
                    </div>

                    <div class="input">

                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email" required>
                    </div>

                    <div class="input">

                        <label for="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>

                    <div class="checkbox">
                        <input type="checkbox" id="consent" name="consent" required>
                        <label for="consent">J’accepte que les informations saisies soient exploitées dans le cadre de
                            ma demande et de la relation commerciale qui peut en découler. Pour connaître et exercer vos
                            droits, notamment de retrait de votre consentement à l’utilisation des données collectées
                            par ce formulaire, veuillez consulter notre politique de confidentialité.</label>
                    </div>

                    <button type="submit">Envoyer</button>
                </form>
            </div>
            <aside class="instagram-feed">
                <img class="stamp" src="assets/img/content/stamp_evolene.png" alt="">
                <h2>Découvrez notre compte Instagram</h2>
                <!-- Ici, vous pouvez intégrer un widget Instagram ou une image statique -->
                <img class="feed" src="path-to-instagram-image.jpg" alt="Instagram Feed">
            </aside>
        </section>
        <img class="end-drawing" src="assets/img/content/dessin-alveoles.png" alt="">

    </main>
    </div>
</body>

</html>