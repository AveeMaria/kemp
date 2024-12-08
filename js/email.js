function sendMail() {
	let email = document.getElementById('email').value;
	let subject = document.getElementById('subject').value;
	let body = document.getElementById('body').value;

	//emajl velidation
	let emailRegex = /.+@.+\../;

	if (!email || !subject || !body) {
		alert('Please fill out all fields.');
		return;
	}

	if (!emailRegex.test(email)) {
		emailField = document.getElementById('email');
		emailField.style.backgroundColor = '#FFC8C8';//error color!

		alert('Please enter a valid email address.');
		return;
	}

	let grdeBesede = ['fu' + 'ck', 'piz' + 'da'];//za 'Trsten'+'jake'

	//join('|') joina vse iz arraya z OR gi=global+caseinsensitive
	let grdeBesedeRegex = new RegExp(grdeBesede.join('|'), 'gi');

	if(grdeBesedeRegex.test(subject) || grdeBesedeRegex.test(body)) {
		alert('Please don\'t swear.');
		return;
	}

	camp_email="nevemkakmejlmamo@gmail.com";

	//da se ne posle instantly kr je cute gumbek
	setTimeout(() => {
		//0%A je newline zato da pol napise kdo je mail poslou
		let mailtoLink = `mailto:${camp_email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}%0A%0ASent by: ${encodeURIComponent(email)}`;

		alert('Sent');

		window.location.href = mailtoLink;
	}, 250);
}