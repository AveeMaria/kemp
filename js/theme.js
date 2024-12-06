if (!localStorage.getItem('theme')) {
	console.log("making default theme");
    localStorage.setItem('theme', 'lightmode');
}

loadTheme(getTheme());

function loadTheme(storagetheme) {
	//console.log(storagetheme);
    let themeLink = document.getElementById('root-link');
	let	checkbox = document.getElementById('theme-selector');

	if (storagetheme === 'darkmode') {
        themeLink.setAttribute('href', 'css/root-dark.css');
		checkbox.checked = true;
    } else if(storagetheme === 'lightmode') {
        themeLink.setAttribute('href', 'css/root.css');
		checkbox.checked = false;
    }
}

function getTheme() {
    let storagetheme = localStorage.getItem('theme');
    return storagetheme;
}

function setTheme(set) {
    if (set === 'darkmode') {
        localStorage.setItem('theme', 'darkmode');
    }
    else if(set === 'lightmode'){
        localStorage.setItem('theme', 'lightmode');
    }
}

document.getElementById('theme-selector').onclick = function() {
	if (this.checked) {
		setTheme("darkmode");
  	}
  	else {
		setTheme("lightmode");
  	}
  	loadTheme(getTheme());
}