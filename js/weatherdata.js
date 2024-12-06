async function fetchWeatherData() {
	try {
		//dobi podatke od arsota
		let response = await fetch('https://www.arso.gov.si/xml/vode/hidro_podatki_zadnji.xml');
		let xmlText = await response.text();//jih nardi u text
		//najde postajo
		let regex = await /<postaja[^>]*sifra="4828"[^>]*>(.*?)<\/postaja>/gs;

		let match = await regex.exec(xmlText);

		if(match) {
			//to dobi use kar najde un (.*?) k captura use med > in <	
			let postajaData = await match[1];
	
			//fancy regex za dobit postajo vode
			let temp = await /<temp_vode>(.*?)<\/temp_vode>/.exec(postajaData)[1];
			
			document.getElementById('river-temp').textContent = "Kolpa: " + temp + "˚C";
		}
		else {
			await console.log("Weather station not found.\n");
		}
	}
	catch (error) {
		await console.log(error);
	}
}

(async () => {
    await fetchWeatherData();
    //posodobi na 60min
    setInterval(fetchWeatherData, 60 * 60 * 1000); 
})();