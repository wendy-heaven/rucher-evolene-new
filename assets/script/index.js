
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", function () {
	const loadingPage = document.getElementById('loading-page');
	if (loadingPage) {
		loadingPage.style.opacity = 0;
		setTimeout(() => {
			loadingPage.style.display = 'none';
		}, 2000);
	}
	///////////// SLIDERS //////////////
	if (document.querySelector(".splide")) {
		const sliders = document.querySelectorAll(".splide");
		sliders.forEach(el => {
			const slider = new Splide(el, {
				arrows: false,
			});
			slider.mount();
		});
	}
	if (document.querySelector(".splide-small")) {
		const slidersV2 = document.querySelectorAll(".splide.splide-small");
		slidersV2.forEach(el => {
			const sliderV2 = new Splide(el, {
				pagination: false,
				padding: { left: 0, right: '20%' },
				type: 'loop',
				arrowPath: "M0 21h38l-4 6v1l6-8-6-6v1l4 5H0z"
			});
			sliderV2.mount();
		});
	}
	///////////// SMOOTH SCROLL //////////////
	if (document.querySelector(".container")) {
		const pageContainer = document.querySelector(".container");

		const scroller = new LocomotiveScroll({
			el: pageContainer,
			smooth: true,
			getDirection: true,
			mobile: {
				breakpoint: 0,
				smooth: true,
				getDirection: true,
			},
			tablet: {
				breakpoint: 0,
				smooth: true,
				getDirection: true,
			},
		});

		ScrollTrigger.scrollerProxy(pageContainer, {
			scrollTop(value) {
				return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
			},
			getBoundingClientRect() {
				return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
			},
			pinType: pageContainer.style.transform ? "transform" : "fixed",
		});

		scroller.on("scroll", ScrollTrigger.update);
		ScrollTrigger.addEventListener("refresh", () => scroller.update());


		////////////////////////////////////

		if (window.innerWidth < 576 && document.querySelector("#imgPile-text-first")) {
			document.getElementById("imgPile-text-first").classList.add("hide");
		}
		if (document.querySelector(".js-popincontainer")) {
			// Function to handle opening the video popin
			document.body.addEventListener('click', function (e) {
				if (e.target.closest('.js-open-popin-video')) {
					e.preventDefault();
					const name = e.target.closest('.js-open-popin-video').getAttribute('data-popin');
					const popinContainer = document.querySelector('.js-popincontainer');
					const videoElement = popinContainer.querySelector('.video');
					videoElement.src = `assets/video/${name}.mp4`;

					if (videoElement) {
						//play the video
						videoElement.play();
					}

					popinContainer.style.display = 'block';
					setTimeout(() => {
						popinContainer.style.opacity = 1;
					}, 10);
				}
			});

			// Function to handle closing the video popin when clicking the close button
			document.body.addEventListener('click', function (e) {
				if (e.target.closest('.js-popincontent .btn_close')) {
					const videoElement = document.querySelector('.js-popincontainer video');
					if (videoElement) {
						videoElement.pause();
						videoElement.currentTime = 0;
					}

					const popinContainer = document.querySelector('.js-popincontainer');
					popinContainer.style.opacity = 0;
					setTimeout(() => {
						popinContainer.style.display = 'none';
					}, 300);
				}
			});

			// Function to handle closing the video popin when clicking outside the popin content
			document.body.addEventListener('click', function (e) {
				if (e.target.closest('.js-popincontainer') && !e.target.closest('.video')) {
					const popinContainer = document.querySelector('.js-popincontainer');
					const videoElement = document.querySelector('.js-popincontainer video');
					popinContainer.style.opacity = 0;
					setTimeout(() => {
						popinContainer.style.display = 'none';
					}, 300);
					if (videoElement) {
						videoElement.pause();
						videoElement.currentTime = 0;
					}
				}
			});

			// Function to stop propagation when clicking inside the popin content
			document.body.addEventListener('click', function (e) {
				if (e.target.closest('.js-popincontent')) {
					e.stopPropagation();
				}
			});

		}
		if (document.querySelector(".pin-item")) {
			// Create the animation
			let animation = gsap.fromTo(".pin-wrapper",
				{ y: 0 },
				{
					y: "-100vh",
					duration: 1,
					ease: "SlowMo.ease",
					paused: true // Pause the animation initially
				}
			);

			// Add the scroll trigger for pinning and animation
			ScrollTrigger.create({
				scroller: pageContainer, // locomotive-scroll
				trigger: "#sectionPin0",
				pin: true,
				start: "top top", // start after scrolling 50vh
				end: "+=300%", // keep the section pinned for 300%
				onUpdate: (self) => {
					if (self.progress >= 0.5 && animation.progress() === 0) {
						animation.play(); // Play the animation
					} else if (self.progress <= 0.49) {
						animation.reverse()
					}
				},

			});
		}
		if (document.querySelector(".video-border-block ")) {

			const videoBlock = document.querySelector('.video-border-block')
			// quand cet element est inview ajoute la class animate 
			ScrollTrigger.create({
				scroller: pageContainer, // locomotive-scroll
				trigger: videoBlock,
				start: "top top", // start after scrolling 50vh
				end: "bottom top", // keep the section pinned for 300%
				onEnter: () => {
					document.querySelector('.border-animation').classList.add("animate")
				},
				onLeave: () => {
					document.querySelector('.border-animation').classList.remove('animate')
				}
			})
		}
		if (document.querySelector(".light-1")) {


			// Animation des cartes venant du haut à gauche
			const cards = [
				{ id: '#card1', startProps: { top: '250px', left: '25px' }, endProps: { top: '45px', left: '25px' } },
				{ id: '#card2', startProps: { top: '250px', left: '-250px' }, endProps: { top: '65px', left: '5px' } },
				{ id: '#card3', startProps: { top: '250px', left: '250px' }, endProps: { top: '25px', left: '45px' } }
			];

			cards.forEach((card, index) => {
				const element = document.querySelector(card.id);
				if (element) {
					gsap.fromTo(element, card.startProps, {
						...card.endProps,
						scrollTrigger: {
							trigger: card.id,
							scroller: pageContainer,
							start: 'top bottom',
							end: 'bottom bottom',
							scrub: true,

						}
					});
				}
			});

			const light1 = document.querySelector('.light-1');
			// Timeline pour animer light-1 et light-2 séquentiellement
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: '#card2',
					scroller: pageContainer,
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: true,
				}
			});

			tl.fromTo('.light-1', {
				x: '0',
				y: '0'
			}, {
				x: '-174%',
				y: '131%'
			})
				.fromTo('.light-2', { opacity: 0 }, { opacity: 1, delay: 0.5 }, "<");

			ScrollTrigger.create({
				trigger: '#card3',
				scroller: pageContainer,
				start: 'top bottom',
				end: 'bottom bottom',
				onEnter: () => {
					gsap.fromTo('.light-1', { x: '-174%', y: '131%' }, { x: '24%', y: '131%' });
					gsap.fromTo('.light-2', { opacity: 1 }, { opacity: 0 });
				},
				onLeaveBack: () => {
					gsap.fromTo('.light-1', { x: '24%', y: '131%' }, { x: '-174%', y: '131%' });
					gsap.fromTo('.light-2', { opacity: 0 }, { opacity: 1 });
				}
			});

		}
		if (document.querySelector(".pin-wrap")) {
			let pinWrap = document.querySelector(".pin-wrap");
			let pinWrapWidth = pinWrap.offsetWidth;
			let horizontalScrollLength = pinWrapWidth - window.innerWidth;
			// Pinning and horizontal scrolling
			gsap.to(".pin-wrap", {
				scrollTrigger: {
					scroller: pageContainer, // locomotive-scroll
					scrub: 0.5,
					trigger: "#sectionPin",
					pin: true,
					start: "top top",
					end: () => `+=${pinWrapWidth * 3}`,
				},
				x: -horizontalScrollLength,
				ease: "none",
			});


		}
		if (document.querySelector(".text-image-block")) {
			const textSteps = document.querySelectorAll('.text-step');
			const imageSteps = document.querySelectorAll('.image-step');
			const totalSteps = textSteps.length;
			const container = document.getElementById('scroll-section');
			const heightToScroll = window.innerHeight * totalSteps;

			const pageContainer = document.querySelector('.container'); // Assurez-vous que .container est défini dans votre HTML

			// Épingler la section pendant le défilement
			ScrollTrigger.create({
				scroller: pageContainer,
				trigger: container,
				start: "top top",
				end: `+=${heightToScroll} - 10`,
				pin: true,
				pinSpacing: true,
				scrub: 0.5,
			});

			// Initialiser les timelines pour les animations de texte et d'image
			const tlText = gsap.timeline({
				scrollTrigger: {
					scroller: pageContainer,
					trigger: container,
					start: "top top",
					end: `+=${heightToScroll}`,
					scrub: true,

				}
			});

			const tlImage = gsap.timeline({
				scrollTrigger: {
					scroller: pageContainer,
					trigger: container,
					start: "top top",
					end: `+=${heightToScroll}`,
					scrub: true,
				}
			});

			// Ajouter des animations pour chaque étape de texte
			textSteps.forEach((step, i) => {
				if (i === 0) return; // Skip the first step
				tlText.fromTo(step, { opacity: 0 }, { opacity: 1, duration: 1 }, `${i * window.innerHeight}`)
				if (i !== 6) {
					tlImage.to(step, { opacity: 0, duration: 1 }, `${(i + 1) * window.innerHeight}`);
				}
			});

			// Ajouter des animations pour chaque étape d'image
			imageSteps.forEach((step, i) => {
				if (i === 0) return; // Skip the first step
				tlImage.fromTo(step, { opacity: 0 }, { opacity: 1, duration: 1 }, `${i * window.innerHeight}`)

				// Ajoutez une animation de mise à l'échelle pour l'image de l'étape 1 à l'étape 2
				if (i === 1) {
					tlImage.to(imageSteps[0], { scale: 0.7, duration: 1, ease: 'SlowMo.ease' }, `${i * window.innerHeight}`);
				}
				if (i === 2) {
					tlImage.to(imageSteps[0], { opacity: 0, duration: 1 }, `${i * window.innerHeight}`);
				}
				// Condition spécifique pour l'étape 7 : ne pas passer à opacité 0 lorsqu'on continue à scroller vers le bas
				if (i !== 6) {
					tlImage.to(step, { opacity: 0, duration: 1 }, `${(i + 1) * window.innerHeight}`);
				}
			});

			// Cas spécial pour l'étape 5 et 6
			tlText.fromTo('#step6', { opacity: 0 }, { opacity: 1, duration: 1 }, `400vh`)
				.to('#step6', { opacity: 0, duration: 1 }, `500vh`);
			// Empêcher l'image de l'étape 7 de passer à opacité 0 lors du défilement vers le bas


		}

		if (document.querySelector('#goHouses')) {
			const goHousesSection = document.querySelector('#goHouses');

			// Create a ScrollTrigger instance for the section
			ScrollTrigger.create({
				scroller: pageContainer,
				trigger: goHousesSection,
				start: 'top top',
				end: 'bottom bottom',
				onEnter: () => {
					nav.classList.add("open");
					setTimeout(function () {
						navExpanded.classList.add("open");
					}, 10);
					// INSERT_YOUR_CODE

					const xhr = new XMLHttpRequest();
					xhr.open('GET', 'lesmaisons.php', true);
					xhr.onreadystatechange = function () {
						if (xhr.readyState === 4 && xhr.status === 200) {
							setTimeout(() => {
								window.location.href = 'lesmaisons.php';
							}, 2000); // 2 seconds timeout
						}
					};
					xhr.send();
				},
				onLeaveBack: () => {
					nav.classList.remove("open");
					setTimeout(function () {
						navExpanded.classList.remove("open");
					}, 10);
					// Add your custom function or animation here
				},

			});
		}

		if (document.querySelector('#goExperiences')) {
			const goExperiencesSection = document.querySelector('#goExperiences');

			// Create a ScrollTrigger instance for the section
			ScrollTrigger.create({
				scroller: pageContainer,
				trigger: goExperiencesSection,
				start: 'top top',
				end: 'bottom bottom',
				onEnter: () => {
					nav.classList.add("open");
					setTimeout(function () {
						navExpanded.classList.add("open");
					}, 10);
					// INSERT_YOUR_CODE

					const xhr = new XMLHttpRequest();
					xhr.open('GET', 'experiences-nature.php', true);
					xhr.onreadystatechange = function () {
						if (xhr.readyState === 4 && xhr.status === 200) {
							setTimeout(() => {
								window.location.href = 'experiences-nature.php';
							}, 2000); // 2 seconds timeout
						}
					};
					xhr.send();
				},
				onLeaveBack: () => {
					nav.classList.remove("open");
					setTimeout(function () {
						navExpanded.classList.remove("open");
					}, 10);
					// Add your custom function or animation here
				},

			});
		}


		if (document.querySelector('.slider-seasons')) {

			const imagesSeason = document.querySelectorAll('.img-season');
			const totalSteps = imagesSeason.length;
			const container = document.querySelector('.slider-seasons');
			const heightToScroll = window.innerHeight * 5;
			const buttonsSeason = document.querySelectorAll('.button-season')
			const pageContainer = document.querySelector('.container'); // Assurez-vous que .container est défini dans votre HTML
			// Épingler la section pendant le défilement
			ScrollTrigger.create({
				scroller: pageContainer,
				trigger: container,
				start: "top top",
				end: `+=${heightToScroll} `,
				pin: true,
				pinSpacing: true,
				scrub: 0.5,
			});


			const tlImage = gsap.timeline({
				scrollTrigger: {
					scroller: pageContainer,
					trigger: container,
					start: "top top",
					end: `+=${window.innerHeight * 4}`,
					scrub: true,
				}
			});
			tlImage.fromTo(imagesSeason[0], { opacity: 1 }, {
				opacity: 1, duration: 1
			}, "0")
				.to(imagesSeason[0], {
					opacity: 0, duration: 1, onComplete: function () {
						buttonsSeason[0].classList.remove('active');
						buttonsSeason[1].classList.add('active');
						document.getElementById("text-discover").classList.remove('first')
						buttonsSeason.forEach((button) => {
							button.classList.remove('first')
						})
					}, onReverseComplete: function () {
						buttonsSeason[1].classList.remove('active');
						buttonsSeason[0].classList.add('active');
						buttonsSeason.forEach((button) => {
							button.classList.add('first')
						})
						document.getElementById("text-discover").classList.add('first')
					}
				}, window.innerHeight);

			tlImage.fromTo(imagesSeason[1], { opacity: 0 }, {
				opacity: 1, duration: 1
			}, window.innerHeight)
				.to(imagesSeason[1], {
					opacity: 0, duration: 1, onComplete: function () {
						buttonsSeason[1].classList.remove('active');
						buttonsSeason[2].classList.add('active');
					}, onReverseComplete: function () {
						buttonsSeason[2].classList.remove('active');
						buttonsSeason[1].classList.add('active');
					}
				}, window.innerHeight * 2);

			tlImage.fromTo(imagesSeason[2], { opacity: 0 }, {
				opacity: 1, duration: 1
			}, window.innerHeight * 2)
				.to(imagesSeason[2], {
					opacity: 0, duration: 1, onComplete: function () {
						buttonsSeason[2].classList.remove('active');
						buttonsSeason[3].classList.add('active');
					}, onReverseComplete: function () {
						buttonsSeason[3].classList.remove('active');
						buttonsSeason[2].classList.add('active');
					}
				}, window.innerHeight * 3);

			tlImage.fromTo(imagesSeason[3], { opacity: 0 }, {
				opacity: 1, duration: 1
			}, window.innerHeight * 3);
		}
		if (document.querySelector(".pin-wrapBis")) {
			let pinWrap = document.querySelector(".pin-wrapBis");
			let pinWrapWidth = pinWrap.offsetWidth;
			let horizontalScrollLength = pinWrapWidth - window.innerWidth;
			console.log("here", pinWrapWidth, window.innerWidth, horizontalScrollLength)
			// Pinning and horizontal scrolling
			gsap.to(".pin-wrapBis", {
				scrollTrigger: {
					scroller: pageContainer, // locomotive-scroll
					scrub: 0.5,
					trigger: "#sectionPin2",
					pin: true,
					start: "top top",
					end: () => `+=${pinWrapWidth}`,
				},
				x: -horizontalScrollLength,
				ease: "none",
			});
		}
		if (document.querySelector(".text-slider-section")) {
			let imagesSlider = document.querySelectorAll('.slider-diag-content img')


			let animation = gsap.fromTo(imagesSlider[1],
				{ left: "100%", top: "50%" },
				{
					left: "-5%", top: "25%",
					duration: 1,
					ease: "SlowMo.ease",
					paused: true // Pause the animation initially
				}
			);
			ScrollTrigger.create({
				scroller: pageContainer, // locomotive-scroll
				trigger: "#text-slider-section-pin",
				pin: true,
				start: "top top", // start after scrolling 50vh
				end: "+=300%", // keep the section pinned for 300%
				onEnter: () => {
					animation.play();
					gsap.to(document.querySelector('.bee-part img'), { left: '100%', duration: 5, ease: "SlowMo.ease" });
				},
				onLeaveBack: () => {
					animation.reverse();
					gsap.to(document.querySelector('.bee-part img'), { left: '-200px', duration: 5, ease: "SlowMo.ease" });

				}
			});
		}
		if (document.querySelector('#goContact')) {
			const goContactSection = document.querySelector('#goContact');

			// Create a ScrollTrigger instance for the section
			ScrollTrigger.create({
				scroller: pageContainer,
				trigger: goContactSection,
				start: 'top 80%',
				
				onEnter: () => {
					console.log('here')
					nav.classList.add("open");
					setTimeout(function () {
						navExpanded.classList.add("open");
					}, 10);
					// INSERT_YOUR_CODE

					const xhr = new XMLHttpRequest();
					xhr.open('GET', 'contact.php', true);
					xhr.onreadystatechange = function () {
						if (xhr.readyState === 4 && xhr.status === 200) {
							setTimeout(() => {
								window.location.href = 'contact.php';
							}, 2000); // 2 seconds timeout
						}
					};
					xhr.send();
				},
				onLeaveBack: () => {
					nav.classList.remove("open");
					setTimeout(function () {
						navExpanded.classList.remove("open");
					}, 10);
					// Add your custom function or animation here
				},

			});
		}
		////////////////////////////////////
		scroller.on("call", (value) => {
			if (value === "test") {
				if (window.innerWidth < 576) {
					if (document.querySelector(".imgPileElement:last-of-type").classList.contains("is-inview")) {
						document.getElementById("imgPile-text-first").classList.remove("hide");
					}
				}
			} else if (value === "video-border-block") {
				document.querySelector(".video-border-background .border-animation").classList.add("animate");
			} else if (value === "video-border-block-back") {
				document.querySelector(".video-border-background .border-animation").classList.remove("animate");
			}
		});

		ScrollTrigger.refresh()
	}
	const nav = document.querySelector("nav");
	const navSmall = document.querySelector(".navigation-small");
	const navExpanded = document.querySelector(".navigation-expanded");
	///////////// NAVIGATION //////////////
	if (document.querySelector("nav")) {


		let navExpandedhover;
		let closeNavTimeout;

		navExpanded.addEventListener("mouseenter", function () {
			navExpandedhover = true;
			clearTimeout(closeNavTimeout); // Cancel the closing if mouse enters navExpanded
		});
		navExpanded.addEventListener("mouseleave", function () {
			navExpandedhover = false;
			closeNav();
		});

		navSmall.addEventListener("mouseenter", function () {
			nav.classList.add("open");
			setTimeout(function () {
				navExpanded.classList.add("open");
			}, 10);
		});

		navSmall.addEventListener("mouseleave", function () {
			closeNav();
		});

		function closeNav() {
			closeNavTimeout = setTimeout(function () {
				if (!navExpandedhover) { // Only close if mouse is not over navExpanded
					nav.classList.remove("open");
					navExpanded.classList.remove("open");
				}
			}, 10);
		}
	}
	if (document.querySelector("#allHouses")) {
		var areas = document.querySelectorAll('#allHouses area');
		var houseImage = document.querySelector('.house-zone');
		areas.forEach(function (area) {
			area.addEventListener('mouseover', function () {
				var houseNumber = this.alt.split(' ')[1]; // Get the house number from the alt attribute
				houseImage.src = 'assets/img/content/house' + houseNumber + '.png'; // Change the image source
				houseImage.style.opacity = 1; // Set the opacity to 1
			});

			area.addEventListener('mouseout', function () {
				houseImage.src = ''; // Remove the image source when not hovering
			});
			area.addEventListener('click', function (event) {
				event.preventDefault(); // Prevent the default action (navigation)
				var houseNumber = this.alt.split(' ')[1]; // Get the house number from the alt attribute
				var popin = document.getElementById('popin-house-' + houseNumber); // Get the corresponding popin
				popin.style.display = 'block'; // Show the popin
				setTimeout(() => {
					popin.style.opacity = 1; // Show the popin
				}, 10)

			});
			var popinCloseButtons = document.querySelectorAll('.popin-house .popin-close');

			popinCloseButtons.forEach(function (button) {
				button.addEventListener('click', function () {
					document.querySelector('.popin-house').style.opacity = 0 // Show the popin
					setTimeout(() => {
						document.querySelector('.popin-house').style.display = 'none'; // Show the popin
					}, 1000)
				});
			});
		});
	}
});
