descriptions = ['Camp Muhvič','Campsite Muhvič','upper dam','Kozice hill','Islands and dam', 'Kolpa', 'village beach', 'stream','river valley','island','upper dam', 'river valley'];

//usak image dobi description iz arraya
document.addEventListener('DOMContentLoaded', () => {
    let galleryDescriptions = document.querySelectorAll('.img-desc');
    galleryDescriptions.forEach((item, index) => {
    	//ce bi blo slucajn vec teh slik kt u arrayu
        if (index < descriptions.length) {
            item.textContent = descriptions[index];
        }
        else {
            item.textContent = `Image ${index}`;
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
	let galleryItems = document.querySelectorAll('.gallery-image');
	galleryItems.forEach((item, index) => {
		item.onclick = function() {
			removeHiddenClass();
			changeImage(this);
		};
		if (index < descriptions.length) {
            item.alt = descriptions[index];
        }
        else {
            item.alt = `Image ${index}`;
        }
	});
});

function changeImage(element) {
	let deteiledImg = document.getElementById('detailed-image');
	deteiledImg.src = element.src;
}

//for my speedrunning community
document.addEventListener('keydown', (event) => {
	if (event.key === "Escape" || event.keyCode === 27) {
		addHiddenClass();
	}
});