
AOS.init();


function sendWA(e){
e.preventDefault();
let t=`Service Booking%0AName:${name.value}%0ABike:${bike.value}%0APhone:${phone.value}%0AIssue:${msg.value}`;
window.open("https://wa.me/916361209588?text="+t,"_blank");
}


  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
  });


AOS.init({duration:1000,once:true,easing:"ease-in-out"});
