function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ownKeys(t,e){var o,n=Object.keys(t);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(t),e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)),n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(o),!0).forEach(function(e){_defineProperty(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function _defineProperty(e,t,o){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"==_typeof(e)?e:e+""}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0===o)return("string"===t?String:Number)(e);o=o.call(e,t||"default");if("object"!=_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}gsap.registerPlugin(ScrollTrigger),window.addEventListener("load",function(){var n,t,o,e,r,i,c,s,a,l,u,d,p,m,g,y,f,v=document.getElementById("loading-page"),S=(v&&(v.style.opacity=0,setTimeout(function(){v.style.display="none"},2e3)),document.querySelector(".splide")&&document.querySelectorAll(".splide").forEach(function(e){new Splide(e,{arrows:!1}).mount()}),document.querySelector(".splide-small")&&document.querySelectorAll(".splide.splide-small").forEach(function(e){new Splide(e,{pagination:!1,padding:{left:0,right:"20%"},type:"loop",arrowPath:"M0 21h38l-4 6v1l6-8-6-6v1l4 5H0z"}).mount()}),document.querySelector(".container")&&(n=document.querySelector(".container"),t=new LocomotiveScroll({el:n,smooth:!0,getDirection:!0,mobile:{breakpoint:0,smooth:!0,getDirection:!0},tablet:{breakpoint:0,smooth:!0,getDirection:!0}}),ScrollTrigger.scrollerProxy(n,{scrollTop:function(e){return arguments.length?t.scrollTo(e,0,0):t.scroll.instance.scroll.y},getBoundingClientRect:function(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}},pinType:n.style.transform?"transform":"fixed"}),t.on("scroll",ScrollTrigger.update),ScrollTrigger.addEventListener("refresh",function(){return t.update()}),window.innerWidth<576&&document.querySelector("#imgPile-text-first")&&document.getElementById("imgPile-text-first").classList.add("hide"),document.querySelector(".js-popincontainer")&&(document.body.addEventListener("click",function(e){var t,o;e.target.closest(".js-open-popin-video")&&(e.preventDefault(),e=e.target.closest(".js-open-popin-video").getAttribute("data-popin"),(o=(t=document.querySelector(".js-popincontainer")).querySelector(".video")).src="assets/video/".concat(e,".mp4"),o&&o.play(),t.style.display="block",setTimeout(function(){t.style.opacity=1},10))}),document.body.addEventListener("click",function(e){var t;e.target.closest(".js-popincontent .btn_close")&&((e=document.querySelector(".js-popincontainer video"))&&(e.pause(),e.currentTime=0),(t=document.querySelector(".js-popincontainer")).style.opacity=0,setTimeout(function(){t.style.display="none"},300))}),document.body.addEventListener("click",function(e){var t;e.target.closest(".js-popincontainer")&&!e.target.closest(".video")&&(t=document.querySelector(".js-popincontainer"),e=document.querySelector(".js-popincontainer video"),t.style.opacity=0,setTimeout(function(){t.style.display="none"},300),e)&&(e.pause(),e.currentTime=0)}),document.body.addEventListener("click",function(e){e.target.closest(".js-popincontent")&&e.stopPropagation()})),document.querySelector(".pin-item")&&(o=gsap.fromTo(".pin-wrapper",{y:0},{y:"-100vh",duration:1,ease:"SlowMo.ease",paused:!0}),ScrollTrigger.create({scroller:n,trigger:"#sectionPin0",pin:!0,start:"top top",end:"+=300%",onUpdate:function(e){.5<=e.progress&&0===o.progress()?o.play():e.progress<=.49&&o.reverse()}})),document.querySelector(".video-border-block ")&&(l=document.querySelector(".video-border-block"),ScrollTrigger.create({scroller:n,trigger:l,start:"top top",end:"bottom top",onEnter:function(){document.querySelector(".border-animation").classList.add("animate")},onLeave:function(){document.querySelector(".border-animation").classList.remove("animate")}})),document.querySelector(".light-1")&&([{id:"#card1",startProps:{top:"250px",left:"25px"},endProps:{top:"45px",left:"25px"}},{id:"#card2",startProps:{top:"250px",left:"-250px"},endProps:{top:"65px",left:"5px"}},{id:"#card3",startProps:{top:"250px",left:"250px"},endProps:{top:"25px",left:"45px"}}].forEach(function(e,t){var o=document.querySelector(e.id);o&&gsap.fromTo(o,e.startProps,_objectSpread(_objectSpread({},e.endProps),{},{scrollTrigger:{trigger:e.id,scroller:n,start:"top bottom",end:"bottom bottom",scrub:!0}}))}),document.querySelector(".light-1"),gsap.timeline({scrollTrigger:{trigger:"#card2",scroller:n,start:"top bottom",end:"bottom bottom",scrub:!0}}).fromTo(".light-1",{x:"0",y:"0"},{x:"-174%",y:"131%"}).fromTo(".light-2",{opacity:0},{opacity:1,delay:.5},"<"),ScrollTrigger.create({trigger:"#card3",scroller:n,start:"top bottom",end:"bottom bottom",onEnter:function(){gsap.fromTo(".light-1",{x:"-174%",y:"131%"},{x:"24%",y:"131%"}),gsap.fromTo(".light-2",{opacity:1},{opacity:0})},onLeaveBack:function(){gsap.fromTo(".light-1",{x:"24%",y:"131%"},{x:"-174%",y:"131%"}),gsap.fromTo(".light-2",{opacity:0},{opacity:1})}})),document.querySelector(".pin-wrap")&&(l=(e=document.querySelector(".pin-wrap").offsetWidth)-window.innerWidth,gsap.to(".pin-wrap",{scrollTrigger:{scroller:n,scrub:.5,trigger:"#sectionPin",pin:!0,start:"top top",end:function(){return"+=".concat(3*e)}},x:-l,ease:"none"})),document.querySelector(".text-image-block")&&(l=document.querySelectorAll(".text-step"),r=document.querySelectorAll(".image-step"),b=l.length,y=document.getElementById("scroll-section"),b=window.innerHeight*b,d=document.querySelector(".container"),ScrollTrigger.create({scroller:d,trigger:y,start:"top top",end:"+=".concat(b," - 10"),pin:!0,pinSpacing:!0,scrub:.5}),i=gsap.timeline({scrollTrigger:{scroller:d,trigger:y,start:"top top",end:"+=".concat(b),scrub:!0}}),c=gsap.timeline({scrollTrigger:{scroller:d,trigger:y,start:"top top",end:"+=".concat(b),scrub:!0}}),l.forEach(function(e,t){0!==t&&(i.fromTo(e,{opacity:0},{opacity:1,duration:1},"".concat(t*window.innerHeight)),6!==t)&&c.to(e,{opacity:0,duration:1},"".concat((t+1)*window.innerHeight))}),r.forEach(function(e,t){0!==t&&(c.fromTo(e,{opacity:0},{opacity:1,duration:1},"".concat(t*window.innerHeight)),1===t&&c.to(r[0],{scale:.7,duration:1,ease:"SlowMo.ease"},"".concat(t*window.innerHeight)),2===t&&c.to(r[0],{opacity:0,duration:1},"".concat(t*window.innerHeight)),6!==t)&&c.to(e,{opacity:0,duration:1},"".concat((t+1)*window.innerHeight))}),i.fromTo("#step6",{opacity:0},{opacity:1,duration:1},"400vh").to("#step6",{opacity:0,duration:1},"500vh")),document.querySelector("#goHouses")&&(d=document.querySelector("#goHouses"),ScrollTrigger.create({scroller:n,trigger:d,start:"top top",end:"bottom bottom",onEnter:function(){S.classList.add("open"),setTimeout(function(){h.classList.add("open")},10);var e=new XMLHttpRequest;e.open("GET","lesmaisons.php",!0),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&setTimeout(function(){window.location.href="lesmaisons.php"},2e3)},e.send()},onLeaveBack:function(){S.classList.remove("open"),setTimeout(function(){h.classList.remove("open")},10)}})),document.querySelector("#goExperiences")&&(y=document.querySelector("#goExperiences"),ScrollTrigger.create({scroller:n,trigger:y,start:"top top",end:"bottom bottom",onEnter:function(){S.classList.add("open"),setTimeout(function(){h.classList.add("open")},10);var e=new XMLHttpRequest;e.open("GET","experiences-nature.php",!0),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&setTimeout(function(){window.location.href="experiences-nature.php"},2e3)},e.send()},onLeaveBack:function(){S.classList.remove("open"),setTimeout(function(){h.classList.remove("open")},10)}})),document.querySelector(".slider-seasons")&&((b=document.querySelectorAll(".img-season")).length,l=document.querySelector(".slider-seasons"),d=5*window.innerHeight,s=document.querySelectorAll(".button-season"),y=document.querySelector(".container"),ScrollTrigger.create({scroller:y,trigger:l,start:"top top",end:"+=".concat(d," "),pin:!0,pinSpacing:!0,scrub:.5}),(d=gsap.timeline({scrollTrigger:{scroller:y,trigger:l,start:"top top",end:"+=".concat(4*window.innerHeight),scrub:!0}})).fromTo(b[0],{opacity:1},{opacity:1,duration:1},"0").to(b[0],{opacity:0,duration:1,onComplete:function(){s[0].classList.remove("active"),s[1].classList.add("active"),document.getElementById("text-discover").classList.remove("first"),s.forEach(function(e){e.classList.remove("first")})},onReverseComplete:function(){s[1].classList.remove("active"),s[0].classList.add("active"),s.forEach(function(e){e.classList.add("first")}),document.getElementById("text-discover").classList.add("first")}},window.innerHeight),d.fromTo(b[1],{opacity:0},{opacity:1,duration:1},window.innerHeight).to(b[1],{opacity:0,duration:1,onComplete:function(){s[1].classList.remove("active"),s[2].classList.add("active")},onReverseComplete:function(){s[2].classList.remove("active"),s[1].classList.add("active")}},2*window.innerHeight),d.fromTo(b[2],{opacity:0},{opacity:1,duration:1},2*window.innerHeight).to(b[2],{opacity:0,duration:1,onComplete:function(){s[2].classList.remove("active"),s[3].classList.add("active")},onReverseComplete:function(){s[3].classList.remove("active"),s[2].classList.add("active")}},3*window.innerHeight),d.fromTo(b[3],{opacity:0},{opacity:1,duration:1},3*window.innerHeight)),document.querySelector(".pin-wrapBis")&&(y=(a=document.querySelector(".pin-wrapBis").offsetWidth)-window.innerWidth,console.log("here",a,window.innerWidth,y),gsap.to(".pin-wrapBis",{scrollTrigger:{scroller:n,scrub:.5,trigger:"#sectionPin2",pin:!0,start:"top top",end:function(){return"+=".concat(a)}},x:-y,ease:"none"})),document.querySelector(".text-slider-section")&&(l=document.querySelectorAll(".slider-diag-content img"),u=gsap.fromTo(l[1],{left:"100%",top:"50%"},{left:"-5%",top:"25%",duration:1,ease:"SlowMo.ease",paused:!0}),ScrollTrigger.create({scroller:n,trigger:"#text-slider-section-pin",pin:!0,start:"top top",end:"+=300%",onEnter:function(){u.play(),gsap.to(document.querySelector(".bee-part img"),{left:"100%",duration:5,ease:"SlowMo.ease"})},onLeaveBack:function(){u.reverse(),gsap.to(document.querySelector(".bee-part img"),{left:"-200px",duration:5,ease:"SlowMo.ease"})}})),document.querySelector("#goContact")&&(d=document.querySelector("#goContact"),ScrollTrigger.create({scroller:n,trigger:d,start:"top 80%",onEnter:function(){console.log("here"),S.classList.add("open"),setTimeout(function(){h.classList.add("open")},10);var e=new XMLHttpRequest;e.open("GET","contact.php",!0),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&setTimeout(function(){window.location.href="contact.php"},2e3)},e.send()},onLeaveBack:function(){S.classList.remove("open"),setTimeout(function(){h.classList.remove("open")},10)}})),t.on("call",function(e){"test"===e?window.innerWidth<576&&document.querySelector(".imgPileElement:last-of-type").classList.contains("is-inview")&&document.getElementById("imgPile-text-first").classList.remove("hide"):"video-border-block"===e?document.querySelector(".video-border-background .border-animation").classList.add("animate"):"video-border-block-back"===e&&document.querySelector(".video-border-background .border-animation").classList.remove("animate")}),ScrollTrigger.refresh()),document.querySelector("nav")),b=document.querySelector(".navigation-small"),h=document.querySelector(".navigation-expanded");document.querySelector("nav")&&(p=function(){g=setTimeout(function(){m||(S.classList.remove("open"),h.classList.remove("open"))},10)},h.addEventListener("mouseenter",function(){m=!0,clearTimeout(g)}),h.addEventListener("mouseleave",function(){m=!1,p()}),b.addEventListener("mouseenter",function(){S.classList.add("open"),setTimeout(function(){h.classList.add("open")},10)}),b.addEventListener("mouseleave",function(){p()})),document.querySelector("#allHouses")&&(y=document.querySelectorAll("#allHouses circle"),f=document.querySelector(".house-zone"),y.forEach(function(e){e.addEventListener("mouseover",function(){var e=this.dataset.index;f.src="assets/img/content/house"+e+".png",f.style.opacity=1}),e.addEventListener("mouseout",function(){f.src=""}),e.addEventListener("click",function(e){e.preventDefault();var e=this.dataset.index,t=document.getElementById("popin-house-"+e);t.style.display="block",setTimeout(function(){t.style.opacity=1},10)}),document.querySelectorAll(".popin-house .popin-close").forEach(function(e){e.addEventListener("click",function(){document.querySelector(".popin-house").style.opacity=0,setTimeout(function(){document.querySelector(".popin-house").style.display="none"},1e3)})})}))});
//# sourceMappingURL=main.js.map
