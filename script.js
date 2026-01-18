// LOCOMOTIVE SCROLL INIT
const locoScroll = new LocomotiveScroll({
el: document.querySelector('[data-scroll-container]'),
smooth: true,
smartphone: { smooth: true },
tablet: { smooth: true }
});


// GSAP SCROLLTRIGGER PROXY
gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.scrollerProxy('[data-scroll-container]', {
scrollTop(value) {
return arguments.length
? locoScroll.scrollTo(value, 0, 0)
: locoScroll.scroll.instance.scroll.y;
},
getBoundingClientRect() {
return { top:0, left:0, width:window.innerWidth, height:window.innerHeight };
}
});


locoScroll.on('scroll', ScrollTrigger.update);
ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
ScrollTrigger.refresh();


// HORIZONTAL SCROLL
gsap.to('.horizontal', {
xPercent: -200,
ease: 'none',
scrollTrigger: {
trigger: '.horizontal-section',
scroller: '[data-scroll-container]',
pin: true,
scrub: 1,
end: '+=2000'
}
});


// ROTATING TEXT
const words = ['Practice', 'Upskill', 'Play', 'Improve'];
let i = 0;
const text = document.querySelector('.rotate-text');


setInterval(() => {
gsap.fromTo(text,{opacity:0,y:20},{opacity:1,y:0,duration:0.6});
text.textContent = words[i];
i = (i + 1) % words.length;
}, 2000);