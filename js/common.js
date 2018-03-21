		var link 				= document.querySelector('.login');
		var popup 			= document.querySelector('.modal-content');
		var mapPopup		=	document.querySelector('modal-content-map');
		var mapOpen			=	document.querySelector('.js-open-map');
		var close 			=	popup.querySelector('.modal-content-close');
		var login 			= popup.querySelector('[name=login]');
		var form 				=	popup.querySelector('form');
		var password 		= popup.querySelector('[name=password]');
		var storage 		= localStorage.getItem('login');
		var mapClose		=	mapPopup.querySelector('modal-content-close');

		 link.addEventListener('click', function(event) {
		 	event.preventDefault();
		 	popup.classList.toggle('modal-content-show');
		 	 
		 	if (storage) {
		 		login.value = storage;
		 		password.focus();
		 	}else {
		 		login.focus();
		 	}
		});

		 close.addEventListener('click', function() {
		 	event.preventDefault();
		 	popup.classList.remove('modal-content-show');
		 	popup.classList.remove('modal-error');
		 });

		 form.addEventListener("submit", function(event) {
		if (!login.value || !password.value) {
		 	event.preventDefault();
		 	popup.classList.add('modal-error');
		 } else {
		 	localStorage.setItem('login', login.value);
		 }
	});

  window.addEventListener('keydown', function(event) {
  	if (event.keyCode === 27) {
  		if (popup.classList.contains('modal-content-show')) {
  			popup.classList.remove('modal-content-show');
  		}
  	}
  });