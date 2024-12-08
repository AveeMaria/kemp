const descriptions = ['Camp Muhvič', 'Campsite Muhvič', 'Upper dam', 'Kozice hill', 'Islands and dam', 'Kolpa', 'Village beach', 'Stream', 'River valley', 'Island', 'Upper dam', 'River valley'];

document.addEventListener('DOMContentLoaded', () => {
    let galleryItems = document.querySelectorAll('.gallery-item img');
    
    //da use slike*alte modifyja
    galleryItems.forEach((img, index) => {
        //dobi alt text iz arreya
        img.alt = descriptions[index] || `Image ${index + 1}`;
        
        let descriptionElement = img.parentElement.querySelector('.img-desc');
        descriptionElement.textContent = descriptions[index] || `Image ${index + 1}`;

        //usm da onclick za slikco menat
        img.addEventListener('click', () => {
            changeImage(index + 1);
        });
    });
});

function changeImage(imgNumber) {
    let detailedImg = document.getElementById('detailed-image');
    
    let src1x = `gallery/1x/img${imgNumber}.jpg`;
    let src2x = `gallery/2x/img${imgNumber}.jpg`;

	//da ve ker src dat glede na resolution
    if (window.devicePixelRatio > 1) {
		detailedImg.src = src2x;
	}
	else {
		detailedImg.src = src1x;
	}

    //damo alt, da bo loh hawking vedel kaj je na sliki
    detailedImg.alt = document.querySelector(`[data-img-number="${imgNumber}"]`).alt;

    //pokaze detailed container
    document.getElementById('detailed-view').classList.remove('hidden');
}

function addHiddenClass() {
    document.getElementById('detailed-view').classList.add('hidden');
}

//for my speedrunning community
document.addEventListener('keydown', (event) => {
	if (event.key === "Escape" || event.keyCode === 27) {
		addHiddenClass();
	}
});