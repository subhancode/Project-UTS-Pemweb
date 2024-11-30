// change background header
function scrollHeader() {
    const nav = document.getElementById("header");
  
    if (this.scrollY >= 300) {
      nav.classList.add("scroll-header");
    } else {
      nav.classList.remove("scroll-header");
    }
}
window.addEventListener("scroll", scrollHeader);



// Countdown
const countDownDate = new Date("feb 22, 2021 16:30:25").getTime();

const x = setInterval(function() {
  let now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 *60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hari").innerHTML = days;
  document.getElementById("jam").innerHTML = hours;
  document.getElementById("menit").innerHTML = minutes;
  document.getElementById("detik").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "<h1 class=\"expired\">CONFERENCE IS BEGIN NOW</h1>"
  }


}, 1000);


//   scrollreveal
const sr = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 3000,
    reset: false,
  });
  
  sr.reveal(`.home, .about, 
              .speaker, .schedule, 
              .pricing, .place, 
              .sponsor, .footer`, {
    interval: 200,});