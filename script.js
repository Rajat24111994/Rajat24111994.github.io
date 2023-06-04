function myfunction(){
    document.getElementById("mytopnav").classList.toggle("responsive");
    
  }
  //navbar sticky
  window.onscroll = function() {myFunction()};
  
  var mytopnav = document.getElementById("mytopnav");
  
  var sticky = mytopnav.offsetTop;
  
  function myFunction() {
  if (window.pageYOffset >= sticky) {
    mytopnav.classList.add("sticky")
  } else {
    mytopnav.classList.remove("sticky");
  }
  }
  
  GitHubCalendar(".calendar", "alokrai0607");
  // or enable responsive functionality
  GitHubCalendar(".calendar", "alokrai0607", { responsive: true });
  
  function resume(){
  window.open("https://drive.google.com/file/d/1dqrZwZVdgsglZYSeyfu-T3p79mbIhj2y/view?usp=drive_link", "_blank");
  }