function removeHiddenClass() {
    let element = document.getElementById('detailed-view');
    if (element) {
        element.classList.remove('hidden');
    }
}

function addHiddenClass() {
    let element = document.getElementById('detailed-view');
    if (element) {
        element.classList.add('hidden');
    }
}

function toggleHiddenClass(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle('hidden');
    }
}