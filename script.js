var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

context.fillStyle = "#FF0000";
context.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener('click', function(event) {
    context.beginPath();
    context.arc(event.clientX, event.clientY, 20, 0, 2 * Math.PI, false);
    context.fillStyle = "#00ff00";
    context.fill();

});