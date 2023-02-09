const load = gsap.timeline({
  paused: true,
  onStart: function(){
    enable();
  },
  onComplete: function(){
    disable();
  }
})
load.addLabel('label')
.to('.title-box', {opacity: 1, delay: .3, duration: 2},'label')
.to('.page-load', {yPercent: -100, delay: 2.5, ease: Power3.easeIn, duration: .8},'label')
.to('.title-box', {opacity: 0, delay: 2, duration: 1.7},'label')
.set('.page-load', {delay: 3.3},'label')
.fromTo('.visual, .btnPrev, .btnNext', {yPercent: 100, opacity: 0,}, {yPercent: 0, opacity: 1,duration: .3, ease: Power4.easeOut, delay: 3.3},'label')
load.play();


const frame = document.querySelector('section');
const list = frame.querySelectorAll('article');
const prev = document.querySelector('.btnPrev');
const next = document.querySelector('.btnNext');
const names = [`gncopc`, `gncomo`, `renwal`, `misu`, `plads`, `etape`, `covet`];
const len = list.length;
const deg = 360/len;
let num = 0;
let active = 0;

names.forEach((name, index) => {
  const pic = list[index].querySelector('.pic');
  list[index].style.transform = `rotate(${deg*index}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url(img/${name}.jpg)`;
})




prev.addEventListener('click', e => {
  frame.style.transform = `rotate(${deg* ++num}deg)`;

  (active===0) ? active = len-1 : active--;
  for(let el of list) el.classList.remove('on');
  list[active].classList.add('on');
})
next.addEventListener('click', e => {
  frame.style.transform = `rotate(${deg* --num}deg)`;

  (active === len-1) ? active = 0 : active++;
  for(let el of list) el.classList.remove('on');
  list[active].classList.add('on');
})




