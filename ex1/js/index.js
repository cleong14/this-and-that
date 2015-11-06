window.onload = function () {
  // add an event listener to each li element inside of the nav menu.
  // Make it listen for a Click event
    // this event should log to the console the text inside of the <a> tag
    // the event should only log one word per click.

  var navLinks = document.querySelectorAll('a');
  // var navLinkA = document.querySelectorAll('a');

  for (var i = 0; i < navLinks.length; i++) {
  	navLinks[i].addEventListener('click', function(event) {
  		// this.className += ' click';
  		// console.log(this);
  		// console.log(event);
  		console.log(this.innerHTML);
  	})
  }
};