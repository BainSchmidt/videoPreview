
const myVid = document.querySelector('.myVid');

myVid.addEventListener('mouseover', () => {
    myVid.play();
});

myVid.addEventListener('mouseout', () => {
    myVid.pause();
});


console.log("page loaded...");