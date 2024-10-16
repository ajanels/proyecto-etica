let angle = 0; 
const numOfCards = 9; 
const rotateAngle = 360 / numOfCards; 

document.getElementById('btn-next').addEventListener('click', () => {
    angle -= rotateAngle; 
    document.querySelector('.cylinder-inner').style.transform = `rotateY(${angle}deg)`;
});

document.getElementById('btn-prev').addEventListener('click', () => {
    angle += rotateAngle; 
    document.querySelector('.cylinder-inner').style.transform = `rotateY(${angle}deg)`;
});
