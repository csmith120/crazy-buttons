// grab everything we need
const crazyButton = document.querySelector('.btn-crazy')

//define our functions
function goCrazy() {
    //get random number for left offset
    //get random number for top offset
    const offsetLeft = Math.random() * (window.innerWidth - crazyButton.clientWidth);
    const offsetTop = Math.random() * (window.innerWidth - crazyButton.clientHeight);


    //apply those numbers to the button
    crazyButton.style.top = offsetTop + 'px';
    crazyButton.style.left = offsetLeft + 'px';
}

// add event listener
crazyButton.addEventListener('mouseenter', goCrazy);