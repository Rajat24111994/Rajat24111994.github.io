function myfunction(){
    document.getElementById("mytopnav").classList.toggle("responsive");
  }
  
  function sub(){
    event.preventDefault()
    alert("hello")
    emailjs.send("service_qanxv6w","template_5g7ruee",{
      from_name: "Rajat",
      message: "Hello !",
      },"h8s4g7h4yAgMruUze");   
  }
  GitHubCalendar(".calendar", "Rajat24111994");
  // or enable responsive functionality
  GitHubCalendar(".calendar", "Rajat24111994", { responsive: true });
  function resume(){
  window.open("https://drive.google.com/file/d/1dxFKB-ldWLtZiCgG26oEWYul-6c5jM6r/view?usp=drive_link", "_blank");
  }
  
  