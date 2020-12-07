// $(document).ready(function() {
//     $('.menu-drpdwn').fadeIn(1000),
//     $('.home-dropdwn').fadeIn(1000),
//     $('price-dropdwn').fadeIN(1000)
// })
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('.show')) {
          openDropdown.classList.remove('.show');
        }
      }
    }
  }