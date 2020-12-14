    const breakFastMenu = document.getElementById('breakfast')
    const lunchMenu = document.getElementById('lunch')
    const dinnerMenu = document.getElementById('dinner')
    

    const breakBtn = (breakFastMenu) => {
      const showMenu = document.getElementById(breakFastMenu).classList('breakContent').toggle('.display')
      
      window.onclick(event => {
      const menu = document.createTextNode(newDiv)
      if(event) {
      menu.appendChild(showMenu)
      } else {
        menu.remove(showMenu)
      }

      })
    }
    
    
    
    
    
    /*function alert(){
    //    return alert('Hi there Welcome to Masons Diner, How can i help you today')
    //  }*/
    // /*  function myFunction() {
    //    var x = document.getElementById("myDropdown");
    //    if (x.style.display === "none") {
    //    x.style.display = "block";
    //  } else {
    //    x.style.display = "none";
    //  }
    // }*/
    // /* When the user clicks on the button,
    // toggle between hiding and showing the dropdown content */
    // function myFunction() {
    //   const dropdown = document.getElementById("myDropdown");
    //   dropdown.classList.toggle('show')
    //  }
 
    //  // Close the dropdown menu if the user clicks outside of it
 
    //  // Get the modal
    //  var modal = document.getElementById("myModal");
 
    //  // Get the button that opens the modal
    //  var btn = document.getElementById("myBtn");
 
    //  // Get the <span> element that closes the modal
    //  var span = document.getElementsByClassName("close")[0];
 
    //  // When the user clicks the button, open the modal
    //  btn.onclick = function() {
    //   modal.style.display = "block";
    //  }
 
    //  // When the user clicks on <span> (x), close the modal
    //  span.onclick = function() {
    //   modal.style.display = "none";
    //  }
 
    //   // When the user clicks anywhere outside of the modal, close it
    //  window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    //  }
    //  function question() {
    //   var question = prompt('What can i get for you today?')
    //  if (question === 'Breakfast') {
    //       var choice = prompt("Would you like Breakfast Pizza, Biscuts and gravy or french Toast?");
    //        if (choice === 'Breakfast Pizza'){
    //          prompt('Ok thats a ok choice, but thatll be 10.99')
    //        }else if(choice === 'Biscuts and gravy') {
    //          prompt("Yum , you chose my favorite thing, dude you are cool , want my number?")
    //        }else {
    //          prompt('You chose my bosses favorite food, your gonna get the hook up its only 4.35 too')
    //        }}
    //  else if(question === 'Lunch') {
    //         var choice = prompt('What can i get ya, our Pepperoni Pizza, Grilled Cheese, or Seasonal Soup?')
    //         if (choice === 'Pepperoni Pizza') {
    //           console.log('You made a ok Descision, just so you know our pizza is frozen not fresh shhhhhh')
    //         }else if(choice === 'Grilled Cheese') {
    //           console.log('Grilled Cheese is my favorite, and omg your gonna love it, itll be 4.99')
    //        } else {
    //              console.log('Our Season Soup is pretty good, just remember the bones are the stock, but they shouldnt be human i think!!!'
    //            }}
    //  else{
    //       var choice = prompt('Would you like to try our dinner specials, PorterHouse steak, Grandmas Special, or Hot Roastbeef Sandwich?')
    //       if (choice == 'PorterHouse') {
    //         console.log("Thats the best steak we have, and that meat will taste so good in your mouth and its only 15.99")
    //       }else if( choice === "Grandmas Special"){
    //           console.log('Grandmas special is one of the best around she puts her all into that one and its only 9.99')
    //       }else{
    //         console.log('OOO Ribs are everyones favorite , the bbq sauce is made fresh in house daily , its Amazing bro and its only 12.99')
    //       }
    //     }
 
    //    }
 
 
 
 
 
    //   // Close the dropdown if the user clicks outside of it
    //   // window.onclick = function(event) {
    //     //if (!event.target.matches('.dropbtn')) {
    //       //var dropdowns = document.getElementsByClassName("dropdown-content");
    //       //
    //       //for (var i = 0; i < dropdowns.length; i++) {
    //         //var openDropdown = dropdowns[i];
    //       //
    //        // if (openDropdown.classList.contains('show')) {
    //          // openDropdown.classList.remove('show');
    //     /*    }
    //       }
    //     }
    //   };*/
    //   // for the breakfast dropdown
    //    function breakfast() {
    //      var x = document.getElementById("myBreakfast");
    //      if (x.style.display === "none") {
    //       x.style.display = "inline-block";
    //    } else {
    //       x.style.display = "none";
    //   }
    //  };
 
    //   /* window.onclick = function(event) {
    //     if (!even.target.matches('.breakbtn'))  {
    //       var dropdowns = document.getElementByClassName('.breakContent');
 
    //     for(var i =0; i< dropdowns.length; i++) {
    //       var openDropdown = dropdowns[i];
 
    //       if (openDropdown.classList.contains('show')) {
    //         openDropdown.classList.remove('show');
    //       }
    //     }
    //     }
    //    };*/
    //      function lunch() {
    //       var x =document.getElementById("myLunch");
    //       if (x.style.display === "none") {
    //        x.style.display = "inline-block";
    //     } else {
    //       x.style.display = "none";
    //   };
    //  }
 
    //     /*
    //      window.onclick = function(event) {
    //     if (!even.target.matches('.lunchbtn'))  {
    //       var dropdowns = document.getElementByClassName('.lunchContent');
 
    //     for(var i =0; i < dropdowns.length; i++) {
    //       var openDropdown = dropdowns[i];
 
    //       if (openDropdown.classList.contains('display')) {
    //         openDropdown.classList.remove('display');
    //       }
    //     }
    //     }
    //    };*/
    //      function dinner() {
    //       var x =document.getElementById("myDinner").classList.toggle('display');
    //         if (x.style.display === "none") {
    //        x.style.display = "inline-block";
    //       } else {
    //         x.style.display = "none";
    //   }
    //  }
 
    //      /*
    //    window.onclick = function(event) {
    //     if (!even.target.matches('.dinnerbtn'))  {
    //       var dropdowns = document.getElementByClassName('.dinnerContent');
 
    //     for(var i =0; i< dropdowns.length; i++) {
    //       var openDropdown = dropdowns[i];
 
    //       if (openDropdown.classList.contains('display')) {
    //         openDropdown.classList.remove('display')
    //       }
    //     }
    //     }
    //    };*/