var tl = gsap.timeline();
tl.from(".logo", {
  y: -20,
  opacity: 0,
  delay: 0.6,
  duration: 0.4,
});
tl.from(".nav-part2 a", {
  y: -18,
  opacity: 0,
  stagger: 0.2,
});
tl.from("#first", {
  x: -40,
  duration: 0.6,
  opacity: 0,
  ease: "power2.out", // Smooth easing
});

// Animation for #second element
tl.from(
  "#second",
  {
    x: 40,
    duration: 0.6,
    opacity: 0,
    ease: "power2.out", // Smooth easing
  },
  "-=0.39" // Position relative to the previous animation
);
var tl2 = gsap.timeline();
tl2.to(".content", {
  right: "0%",
  duration: 0.6,
});
tl2.from(".content a", {
  opacity: 0,
  x: 20,
  stagger: 0.3,
});
tl2.from("ri-close-fill", {
  opacity: 0,
  x: 20,
});
tl2.pause();
var menu = document.querySelector(".ri-menu-2-fill");
var close = document.querySelector(".ri-close-fill");
menu.addEventListener("click", function () {
  tl2.play();
});
close.addEventListener("click", function () {
  tl2.reverse();
});
var circle = document.querySelector(".mouse-circle");
var body =document.querySelector("body")
body.addEventListener("mousemove",function(event){
  gsap.to(circle,{
    x:event.x,
    y:event.y,
    
    duration:0.8,
    
    

  },)
})

// second page ka animation
function breaktext(){
  var text = document.querySelector(".box1 h1").textContent;
  console.log(text);
  var splittedText = text.split("");
  var textlength = splittedText.length;
  var halflength = Math.floor(textlength / 2);
  console.log(halflength);
  
  console.log(splittedText);
  var clutter = "";
  splittedText.forEach(function (event, index) {
    if (index <= halflength) {
      clutter += `<span class="A">${event}</span>`;
    } else {
      clutter += `<span class="B">${event}</span>`;
    }
  });
  var h1 = document.querySelector("h1");
  h1.innerHTML = clutter;
}
breaktext();
gsap.from(".A", {
y: 30,
duration: 0.6,
delay: 1,
opacity: 0,
stagger: 0.3,
});
gsap.from(".B", {
y: 30,
duration: 0.6,
delay: 1,
opacity: 0,
stagger: 0.3,
});

// code for guitar string
var initialpath ="M 10 200 Q 500 200 990 200";
var finalpath ="M 10 200 Q 500 200 990 200";
var string = document.querySelector(".string");
string.addEventListener("mousemove",function(e){
finalpath =`M 10 200 Q 500 ${e.y} 990 200`;
// console.log(finalpath);
gsap.to("svg path",{
    attr:{d:finalpath},
duration:0.2,
ease:"power3.out"
})

})
string.addEventListener("mouseleave",function(e){
    finalpath =`M 10 200 Q 500 ${e.y} 990 200`;
    // console.log(finalpath);
    gsap.to("svg path",{
        attr:{d:initialpath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    
    });
    console.log(finalpath);
    })



// whatsapp url
const button = document.querySelector(".button button")
button.addEventListener("click",function redirectToWhatsApp() {
  var url = "https://rb.gy/wkix5h"; // Use your shortened link
  window.open(url, '_blank').focus();
})
