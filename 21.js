let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
const speed = 4;
let position = 0;
let moveSpeed = speed;
let radius = 50;
function moveBall(){
    if(position + radius > 640){
        moveSpeed = -speed;
    } else if(position - radius < 0){
        moveSpeed = speed;
    }
    position += moveSpeed;
}
function drawBall(){
    ctx.clearRect(0, 0, 640, 480);
    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(position, 100, radius, 0, 2 * Math.PI);
    ctx.fill();
}
function animate(){
    moveBall();
    drawBall();
    window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);