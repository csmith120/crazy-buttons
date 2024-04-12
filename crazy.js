// grab everything we need
const crazyButtons = document.querySelectorAll('.btn-crazy')

//define our functions
function goCrazy(e) {
    const button = e.target;
    //get random number for left offset
    //get random number for top offset
    const offsetLeft = Math.random() * (window.innerWidth - button.clientWidth);
    const offsetTop = Math.random() * (window.innerHeight - button.clientHeight);


    //apply those numbers to the button
    button.style.top = offsetTop + 'px';
    button.style.left = offsetLeft + 'px';
}

// add event listener
crazyButtons.forEach(button => button.addEventListener('mouseenter', goCrazy));