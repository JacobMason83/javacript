// this is kinda like self in python but more powerful 
$('.btn-guide').click(function(event) { // how to make a hover event over the course content and in jquery
    event.preventDefault();
    console.log($(this));
}); 
// grabbed the btn-guide , and building a listener waiting for us to click on the btn guide 
// and added a function that waited for the event which is the click event
// but prevents it from clicking to go to the guide itself 
// then just just console log this and it found 17 btn guides 
// this is looking for the specific item you want this to show this set of values , and only show the specific 
// items description this is looking for whatever its clicked on 
// vanilla js way of doing it 
var guide = {
    title: 'Guide to Programming',
    content: 'Content goes here...',
    visibleToUser: function (viewingUserRole) { // anoymus function using viewingUserRole as the arg
      if (viewingUserRole === 'paid') { // if its paid return true 
        return true;
      } else {
        return false;
      }
    },
    renderContent: function(userRole) {
        if (this.visibleToUser(userRole)) {
            console.log(this.title + " - " + this.content)
        } else {
            this.content = ''
            console.log(this.title + " - " + this.content)
        } // if you try to use visiable(userRole) js will skip over it, and you have to tell js to look for this.visableUser
        // were telling js that were refrencing this objects visibleToUser and this is how you do it
    }
  }

user = {role: 'paid'} // or you could do {role: 'free} would print guide to programm -  the paid role will print 
// guide to programming - Content will go here 
guide.renderContent(user)
