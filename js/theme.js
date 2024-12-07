if (!localStorage.getItem('theme')) {
	console.log("making default theme");
    localStorage.setItem('theme', 'lightmode');
}

loadTheme(getTheme());

function loadTheme(storagetheme) {
	//console.log(storagetheme);
    let themeLink = document.getElementById('root-link');
	let	checkbox = document.getElementById('theme-selector');

    //kr je checkbox sam na index.html
    if(checkbox) {
        if (storagetheme === 'darkmode') {
                themeLink.setAttribute('href', 'css/root-dark.css');
                checkbox.checked = true;
            } else if(storagetheme === 'lightmode') {
                themeLink.setAttribute('href', 'css/root.css');
                checkbox.checked = false;
            }
        }
    else {
        if (storagetheme === 'darkmode') {
            themeLink.setAttribute('href', 'css/root-dark.css');
        } else if(storagetheme === 'lightmode') {
            themeLink.setAttribute('href', 'css/root.css');
        }
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

let themeSelector = document.getElementById('theme-selector');
if(themeSelector) {
    themeSelector.onclick = function() {
        if (this.checked) {
            setTheme("darkmode");
        }
        else {
            setTheme("lightmode");
        }
        loadTheme(getTheme());
    }
}
