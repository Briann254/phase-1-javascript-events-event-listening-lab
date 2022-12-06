function addingEventListener() {
    const input = document.getElementById('input');
    function clickAlert() {
        alert('Hee hee that tickles!');
    }
    input.addEventListener('click', clickAlert);
}
