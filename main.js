window.addEventListener('load', function() {
  setTimeout(function() {
      document.getElementById('loader-container').style.display = 'none';
  }, 3000);
});



  const mybutton = document.getElementById("btn-back-to-top");

  window.onscroll = () => {
    mybutton.style.display = (window.scrollY > 20) ? "block" : "none";
  };
  
  mybutton.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  

function subscribe(){
  window.alert("Succesfully Subscribed!!")
}