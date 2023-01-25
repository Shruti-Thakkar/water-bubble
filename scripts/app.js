(function () {
var requestAnimationFrame = window.requestAnimationFrame
|| window.mozRequestAnimationFrame
|| window.webkitRequestAnimationFrame
|| window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;
})();

let pageWidth = window.innerWidth;
let bodyHeight = window.innerHeight;

let body = document.querySelector('body');

let bubble;
let bubbles = [];
const MAX_BUBBLES = 250;
for(let i = 0; i < MAX_BUBBLES; i++) {
bubble = new Bubble(pageWidth, bodyHeight);
bubbles.push(bubble);
let bubb = document.createElement('div');
bubb.setAttribute('class', 'bubble');
bubb.setAttribute('style', bubble.x + bubble.y + bubble.radius +
    bubble.background + bubble.width + bubble.height + bubble.border);
body.appendChild(bubb);
}
let theBubbles = document.querySelectorAll('.bubble');
function MoveBubbles() {
for(let i = 0; i < MAX_BUBBLES; i++) {
    bubbles[i].Move();
    theBubbles[i].setAttribute('style', bubbles[i].x + bubbles[i].y + bubbles[i].radius +
        bubbles[i].background + bubbles[i].width + bubbles[i].height + bubbles[i].border);
    if(bubbles[i].yPos < -20) {
        bubbles[i].Reset();
        theBubbles[i].setAttribute('style', bubbles[i].x + bubbles[i].y + bubbles[i].radius +
            bubbles[i].background + bubbles[i].width + bubbles[i].height + bubbles[i].border);
    } 
}
} 
function Update() {
MoveBubbles(); 
requestAnimationFrame(Update); 
}
window.addEventListener('load', function() {
Update();
});