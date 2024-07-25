function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ownKeys(t,e){var o,r=Object.keys(t);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(t),e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,o)),r}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(o),!0).forEach(function(e){_defineProperty(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function _defineProperty(e,t,o){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"==_typeof(e)?e:e+""}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0===o)return("string"===t?String:Number)(e);o=o.call(e,t||"default");if("object"!=_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}gsap.registerPlugin(ScrollTrigger),window.addEventListener("load",function(){document.querySelector(".splide")&&document.querySelectorAll(".splide").forEach(function(e){new Splide(e,{arrows:!1}).mount()}),document.querySelector(".splide-small")&&document.querySelectorAll(".splide.splide-small").forEach(function(e){new Splide(e,{pagination:!1,padding:{left:0,right:"20%"},type:"loop",arrowPath:"M0 21h38l-4 6v1l6-8-6-6v1l4 5H0z"}).mount()}),document.querySelector(".container")&&(r=document.querySelector(".container"),t=new LocomotiveScroll({el:r,smooth:!0,getDirection:!0,mobile:{breakpoint:0,smooth:!0,getDirection:!0},tablet:{breakpoint:0,smooth:!0,getDirection:!0}}),ScrollTrigger.scrollerProxy(r,{scrollTop:function(e){return arguments.length?t.scrollTo(e,0,0):t.scroll.instance.scroll.y},getBoundingClientRect:function(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}},pinType:r.style.transform?"transform":"fixed"}),t.on("scroll",ScrollTrigger.update),ScrollTrigger.addEventListener("refresh",function(){return t.update()}),window.innerWidth<576&&document.querySelector("#imgPile-text-first")&&document.getElementById("imgPile-text-first").classList.add("hide"),document.querySelector(".js-popincontainer")&&(document.body.addEventListener("click",function(e){var t,o;e.target.closest(".js-open-popin-video")&&(console.log("click"),e.preventDefault(),e=e.target.closest(".js-open-popin-video").getAttribute("data-popin"),(o=(t=document.querySelector(".js-popincontainer")).querySelector(".video")).src="assets/video/".concat(e,".mp4"),o&&o.play(),t.style.display="block",setTimeout(function(){t.style.opacity=1},10))}),document.body.addEventListener("click",function(e){var t;e.target.closest(".js-popincontent .btn_close")&&((e=document.querySelector(".js-popincontainer video"))&&(e.pause(),e.currentTime=0),(t=document.querySelector(".js-popincontainer")).style.opacity=0,setTimeout(function(){t.style.display="none"},300))}),document.body.addEventListener("click",function(e){var t;e.target.closest(".js-popincontainer")&&!e.target.closest(".video")&&(t=document.querySelector(".js-popincontainer"),e=document.querySelector(".js-popincontainer video"),t.style.opacity=0,setTimeout(function(){t.style.display="none"},300),e)&&(e.pause(),e.currentTime=0)}),document.body.addEventListener("click",function(e){e.target.closest(".js-popincontent")&&e.stopPropagation()})),document.querySelector(".pin-item")&&(o=gsap.fromTo(".pin-wrapper",{y:0},{y:"-100vh",duration:1,ease:"SlowMo.ease",paused:!0}),ScrollTrigger.create({scroller:r,trigger:"#sectionPin0",pin:!0,start:"top top",end:"+=300%",onUpdate:function(e){.5<=e.progress&&0===o.progress()?o.play():e.progress<=.49&&o.reverse()}})),document.querySelector(".video-border-block ")&&(d=document.querySelector(".video-border-block"),ScrollTrigger.create({scroller:r,trigger:d,start:"top top",end:"bottom top",onEnter:function(){document.querySelector(".border-animation").classList.add("animate")},onLeave:function(){document.querySelector(".border-animation").classList.remove("animate")}})),document.querySelector(".light-1")&&([{id:"#card1",startProps:{top:"250px",left:"25px"},endProps:{top:"45px",left:"25px"}},{id:"#card2",startProps:{top:"250px",left:"-250px"},endProps:{top:"65px",left:"5px"}},{id:"#card3",startProps:{top:"250px",left:"250px"},endProps:{top:"25px",left:"45px"}}].forEach(function(e,t){var o=document.querySelector(e.id);o&&gsap.fromTo(o,e.startProps,_objectSpread(_objectSpread({},e.endProps),{},{scrollTrigger:{trigger:e.id,scroller:r,start:"top bottom",end:"bottom bottom",scrub:!0}}))}),document.querySelector(".light-1"),gsap.timeline({scrollTrigger:{trigger:"#card2",scroller:r,start:"top bottom",end:"bottom bottom",scrub:!0}}).fromTo(".light-1",{x:"0",y:"0"},{x:"-174%",y:"131%"}).fromTo(".light-2",{opacity:0},{opacity:1,delay:.5},"<"),ScrollTrigger.create({trigger:"#card3",scroller:r,start:"top bottom",end:"bottom bottom",onEnter:function(){gsap.fromTo(".light-1",{x:"-174%",y:"131%"},{x:"24%",y:"131%"}),gsap.fromTo(".light-2",{opacity:1},{opacity:0})},onLeaveBack:function(){gsap.fromTo(".light-1",{x:"24%",y:"131%"},{x:"-174%",y:"131%"}),gsap.fromTo(".light-2",{opacity:0},{opacity:1})}})),document.querySelector(".pin-wrap")&&(d=(e=document.querySelector(".pin-wrap").offsetWidth)-window.innerWidth,gsap.to(".pin-wrap",{scrollTrigger:{scroller:r,scrub:.5,trigger:"#sectionPin",pin:!0,start:"top top",end:function(){return"+=".concat(3*e)}},x:-d,ease:"none"})),document.querySelector(".text-image-block")&&(d=document.querySelectorAll(".text-step"),n=document.querySelectorAll(".image-step"),y=d.length,l=document.getElementById("scroll-section"),y=window.innerHeight*y,s=document.querySelector(".container"),ScrollTrigger.create({scroller:s,trigger:l,start:"top top",end:"+=".concat(y," - 10"),pin:!0,pinSpacing:!0,scrub:.5}),i=gsap.timeline({scrollTrigger:{scroller:s,trigger:l,start:"top top",end:"+=".concat(y),scrub:!0}}),c=gsap.timeline({scrollTrigger:{scroller:s,trigger:l,start:"top top",end:"+=".concat(y),scrub:!0}}),d.forEach(function(e,t){0!==t&&(i.fromTo(e,{opacity:0},{opacity:1,duration:1},"".concat(t*window.innerHeight)),6!==t)&&c.to(e,{opacity:0,duration:1},"".concat((t+1)*window.innerHeight))}),n.forEach(function(e,t){0!==t&&(c.fromTo(e,{opacity:0},{opacity:1,duration:1},"".concat(t*window.innerHeight)),1===t&&c.to(n[0],{scale:.7,duration:1,ease:"SlowMo.ease"},"".concat(t*window.innerHeight)),2===t&&c.to(n[0],{opacity:0,duration:1},"".concat(t*window.innerHeight)),6!==t)&&c.to(e,{opacity:0,duration:1},"".concat((t+1)*window.innerHeight))}),i.fromTo("#step6",{opacity:0},{opacity:1,duration:1},"400vh").to("#step6",{opacity:0,duration:1},"500vh")),document.querySelector("#goHouses")&&(s=document.querySelector("#goHouses"),ScrollTrigger.create({scroller:r,trigger:s,start:"top top",end:"bottom bottom",onEnter:function(){console.log("here"),g.classList.add("open"),setTimeout(function(){f.classList.add("open")},10);var e=new XMLHttpRequest;e.open("GET","lesmaisons.php",!0),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&setTimeout(function(){window.location.href="lesmaisons.php"},2e3)},e.send()},onLeaveBack:function(){console.log("here2"),g.classList.remove("open"),setTimeout(function(){f.classList.remove("open")},10)}})),document.querySelector("#goExperiences")&&(console.log("here exper"),l=document.querySelector("#goExperiences"),ScrollTrigger.create({scroller:r,trigger:l,start:"top top",end:"bottom bottom",onEnter:function(){console.log("here"),g.classList.add("open"),setTimeout(function(){f.classList.add("open")},10);var e=new XMLHttpRequest;e.open("GET","lesmaisons.php",!0),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&setTimeout(function(){window.location.href="experiences-nature.php"},2e3)},e.send()},onLeaveBack:function(){console.log("here2"),g.classList.remove("open"),setTimeout(function(){f.classList.remove("open")},10)}})),t.on("call",function(e){"test"===e?window.innerWidth<576&&document.querySelector(".imgPileElement:last-of-type").classList.contains("is-inview")&&document.getElementById("imgPile-text-first").classList.remove("hide"):"video-border-block"===e?(console.log("video-border-block"),document.querySelector(".video-border-background .border-animation").classList.add("animate")):"video-border-block-back"===e&&(console.log("video-border-block-back"),document.querySelector(".video-border-background .border-animation").classList.remove("animate"))}),ScrollTrigger.refresh());var r,t,o,e,n,i,c,s,l,a,u,p,d,m,g=document.querySelector("nav"),y=document.querySelector(".navigation-small"),f=document.querySelector(".navigation-expanded");document.querySelector("nav")&&(a=function(){p=setTimeout(function(){u||(g.classList.remove("open"),f.classList.remove("open"))},10)},f.addEventListener("mouseenter",function(){u=!0,clearTimeout(p)}),f.addEventListener("mouseleave",function(){u=!1,a()}),y.addEventListener("mouseenter",function(){g.classList.add("open"),setTimeout(function(){f.classList.add("open")},10)}),y.addEventListener("mouseleave",function(){a()})),document.querySelector("#allHouses")&&(d=document.querySelectorAll("#allHouses area"),m=document.querySelector(".house-zone"),d.forEach(function(t){t.addEventListener("mouseover",function(){console.log("hover",t);var e=this.alt.split(" ")[1];m.src="assets/img/content/house"+e+".png",m.style.opacity=1}),t.addEventListener("mouseout",function(){m.src=""}),t.addEventListener("click",function(e){e.preventDefault(),console.log("click");e=this.alt.split(" ")[1];document.getElementById("popin-house-"+e).style.display="block"}),document.querySelectorAll(".popin-house .popin-close").forEach(function(e){e.addEventListener("click",function(){document.querySelector(".popin-house").style.display="none"})})}))});
//# sourceMappingURL=main.js.map