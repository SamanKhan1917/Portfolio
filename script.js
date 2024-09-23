// Animating 'View My Work' Button
const viewMyWorkButton = document.querySelector('.view-my-work-button');
viewMyWorkButton.addEventListener('mouseover', () => {
    viewMyWorkButton.classList.add('button-animated');
});

viewMyWorkButton.addEventListener('mouseleave', () => {
    viewMyWorkButton.classList.remove('button-animated');
});
