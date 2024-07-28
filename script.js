// --------THIS FUNCTION IS FOR LOCOMOTIVE AND SCROLL TRIGGER TO WORK TOGETHER AS THEY BOTH DONT WORK TOGETHER----------

function locoscroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    multiplier: 0.3,
    lerp: 0.09,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locoscroll();

// ----------------THIS IS FOR THE DIV MOVEMENT ON MOUSE NMOVE OBN PAGE ONE----------------------------------

var overlayer = document.querySelector(".overlaypageone");
var scroller = document.querySelector(".scroll");

overlayer.addEventListener("mouseenter", function () {
  scroller.style.scale = "1";
  // console.log("hello")
});
overlayer.addEventListener("mouseleave", function () {
  scroller.style.scale = "0";
});

overlayer.addEventListener("mousemove", function (dets) {
  scroller.style.left = `${dets.x - 45}px`;
  scroller.style.top = `${dets.y - 48}px`;
});

// -------------------------------THIS ONE IS FOR THE SRARTING EFFECT OF TEXT IN PAGE ONE------------------

$(".pageone>h1").textillate({
  in: {
    effect: "bounceIn",

    delayScale: 1,
  },
});

//----------------------------------THIS ONE IS FOR THE STRARTING EFFECT OF TEXT IN PAGETWO WHEN WE TRIGGGER OR REACH PAGE TWOO-----------------

gsap.to(".pagetwo>h1", {
  opacity: 1,

  onStart: function () {
    $(".pagetwo>h1").textillate({
      in: {
        effect: "bounceIn",
        delayScale: 0.7,
      },
    });
  },
  scrollTrigger: {
    trigger: ".pagetwo>h1",
    scroller: ".main",
    start: "top 90%",
  },
});

gsap.to(".pagetwo>h2", {
  opacity: 1,

  onStart: function () {
    $(".pagetwo>h2").textillate({
      in: {
        effect: "bounceIn",
        delayScale: 0.7,
      },
    });
  },
  scrollTrigger: {
    trigger: ".pagetwo>h2",
    scroller: ".main",
    start: "top 120%",
  },
});

// gsap.from(".pagetwo>h1",{
//   // transformOrigin:"100% 0%",
//   y:100,
//   // opacity:0,
//   // duration:0.9,
//   scrollTrigger:{
//     trigger:".pagetwo>h1",
//     scroller:".main",
//     start:"top 50%",
//     stagger:0.1

//   }
// })

// gsap.from(".pagetwo>h2",{
//   // transformOrigin:"100% 0%",
//   y:100,
//   // opacity:0,
//   duration:0.5,
//   scrollTrigger:{
//     trigger:".pagetwo>h2",
//     scroller:".main",
//     start:"top 80%",

//   }
// })

// ------------------------------PAGEFOUR IMAGE CHANGE ON  HOVER-----------------------------------

//  **********************************************************************************************************************************************************************************************************************************************************************************
var elem = document.querySelectorAll(".elem");
elem.forEach(function (e) {
  var a = e.getAttribute("data-img");
  e.addEventListener("mouseenter", function () {
    document.querySelector(".pagefour>img").setAttribute("src", a);
  });
});
// ************************************************************************************************************************************

gsap.from(".pagetwo img", {
  rotate: -10,
  y: -100,
  scale: 0.9,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".pagetwo>img",
    start: "top 80%",
    //  markers:true,
    scrub: 2,
  },
});

gsap.to("svg", {
  top: "4%",
  scale: 0.9,
  scrollTrigger: {
    scroller: ".main",
    trigger: "svg",
    start: "top 50%",
    end: "top -50%",

    // markers:true,
    scrub: 1,
  },
});

gsap.to("svg", {
  fill: "black",
  scrollTrigger: {
    scroller: ".main",
    trigger: "svg",
    start: "top -65%",
    // end:"top -65%",
    // markers:true,
    scrub: 2,
  },
});

gsap.to("svg", {
  fill: "white",
  scrollTrigger: {
    scroller: ".main",
    trigger: "svg",
    start: "top -335%",
    // end:"top -315%",
    // markers:true,
    scrub: true,
  },
});

gsap.to("nav", {
  background: "linear-gradient(rgb(0 0 0), rgb(0 0 0 / 51%), rgb(0 0 0 / 0%)) ",

  scrollTrigger: {
    scroller: ".main",
    trigger: "nav",
    start: "top -50%",
    // end:"top -50%",

    // markers:true,
    scrub: true,
  },
});

gsap.to("nav", {
  background: " linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)",
  color: "#111",
  scrollTrigger: {
    scroller: ".main",
    trigger: "nav",
    start: "top -100%",
    // end:"top -50%",

    // markers:true,
    scrub: true,
  },
});

gsap.to("nav", {
  background: "transparent",
  color: "white",
  scrollTrigger: {
    scroller: ".main",
    trigger: "nav",
    start: "top -385%",
    //  end:"top -50%",

    // markers:true,
    scrub: true,
  },
});

var opt = document.querySelector(".overlaypagethree");
var ob = document.querySelector(".overlaybox");

opt.addEventListener("mouseenter", function () {
  ob.style.scale = "1";
});

// opt.addEventListener("pageup",function(){

//   ob.style.left=`${dets.x }px`
//   ob.style.top=`${dets.y }px`
//   console.log("HUI HUI");

//   ob.style.scale="1";

// })

opt.addEventListener("mouseleave", function () {
  ob.style.scale = "0";
});

opt.addEventListener("mousemove", function (dets) {
  ob.style.left = `${dets.x}px`;
  ob.style.top = `${dets.y}px`;
});

// ------------PAGEFOUR--------------------

var pagefour = document.querySelector(".pagefour");
var image = document.querySelector(".pagefour>img");
var button = document.querySelector(".pagefour>button");

pagefour.addEventListener("mousemove", (dets) => {
  image.style.left = dets.x - 150 + "px";
  image.style.top = dets.y - 250 + "px";
  button.style.left = dets.x - 90 + "px";
  button.style.top = dets.y - 70 + "px";
  image.style.scale = 1;
  button.style.scale = 1;
});

var elem = document.querySelectorAll(".elem");

elem.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    image.style.scale = "1";
    button.style.scale = "1";
  });

  elem.addEventListener("mouseleave", () => {
    image.style.scale = "0";
    button.style.scale = "0";
  });
});
