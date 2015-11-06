window.onload = function () {
  // add an event listener to the `child` class.
  // inspect the .css file
    // when a `child` class is clicked you code will add CSS styles which will show the
    // secret toy element. Click on an element will only show that element's toy, no one elses.

  var childClass = document.querySelectorAll('.child');

  for (var i = 0; i < childClass.length; i++) {
  	childClass[i].addEventListener('click', function(event) {
  		var secretToyClass = this.querySelectorAll('.secret-toy')[0];
  		console.log(this);
  		secretToyClass.className += ' show';
  	})

  	childClass[i].addEventListener('mouseout', function(event) {
  		var secretToyClass = this.querySelectorAll('.secret-toy.show')[0];
  		console.log(this);
  		console.log(event);
  		secretToyClass.className = 'secret-toy'; //????
  	})
  }

  // CODE BELOW POTENTIALLY BETTER/PREFERRED METHOD

  // var children = document.getElementsByClassName('child');

  // for (var i = 0; i < children.length; i++) {
  // 	children[i].addEventListener('click', showSecretToy);
  // }

  // function showSecretToy (event) {
  // 	var secretToy = this.querySelector('p');

  // 	if (secretToy.classList.contains('show') === false) {
  // 		return secretToy.className += ' show';
  // 	} else {
  // 		return secretToy.className = 'secret-toy';
  // 	}
  // }

};