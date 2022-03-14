// creating star using canvas 
var canvas = document.getElementById('can');
var ctx = canvas.getContext('2d');
can.width = 900;
can.height = 540;
function star1(i, j) {
    ctx.fillStyle = "#99A799";
    ctx.beginPath();
    ctx.moveTo(i + 35, j + 0.0);
    ctx.lineTo(i + 47, j + 23.3);
    ctx.lineTo(i + 72.6, j + 26.1);
    ctx.lineTo(i + 54, j + 43.6);
    ctx.lineTo(i + 58.3, j + 68.3);
    ctx.lineTo(i + 36, j + 56.6);
    ctx.lineTo(i + 13.73, j + 68.3);
    ctx.lineTo(i + 18.3, j + 43.6);
    ctx.lineTo(i + 0.3, j + 26);
    ctx.lineTo(i + 25, j + 22.6);
    ctx.lineTo(i + 36, j + 0);
    ctx.closePath();
    ctx.fill();
}

function star2(i, j) {
    ctx.fillStyle = "#B6C6B3";
    ctx.beginPath();
    ctx.moveTo(i + 35, j + 0.0);
    ctx.lineTo(i + 47, j + 23.3);
    ctx.lineTo(i + 72.6, j + 26.1);
    ctx.lineTo(i + 54, j + 43.6);
    ctx.lineTo(i + 58.3, j + 68.3);
    ctx.lineTo(i + 36, j + 56.6);
    ctx.lineTo(i + 13.73, j + 68.3);
    ctx.lineTo(i + 18.3, j + 43.6);
    ctx.lineTo(i + 0.3, j + 26);
    ctx.lineTo(i + 25, j + 22.6);
    ctx.lineTo(i + 36, j + 0);
    ctx.closePath();
    ctx.fill();
}

function printStar() {
    star1(0, 0);
    star2(150, 90);
    star1(320, 0);
    star2(470, 85);
    star1(640, 0);
    star2(790, 90);
    star2(20, 250);
    star2(320, 340);
    star1(130, 450);
    star1(500, 480);
    star2(640, 340);
    star1(790, 470);
    
}

// calculating age. Printing the name and age
function friend() {
    var name = document.getElementById('name').value;
    var bdate = document.getElementById('bdate').valueAsNumber;

    let now = new Date();
    let diff = Math.abs(now - bdate);
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

    // initial message
    let text = `Hey ${name}, today you turned ${age} `;
    return text
}

// adding birthday message 
function message() {
    let text = friend();
    let text2 =  `On your birthday may your spirit be enriched in`;
    let text3 = `light, love, and hope for a prosperous year ahead.`;
    let text4 = `Yours lovingly,`;
    let text5 = `Harshita Verma`;
    ctx.font = '30px Georgia';
    ctx.fillStyle = '#677367';
    ctx.fillText(text, 100, 200);
    ctx.fillText(text2, 100, 250);
    ctx.fillText(text3, 100, 300);
    ctx.fillText(text4, 100, 380);
    ctx.fillText(text5, 100, 430);
}

function card() {
    printStar();
    message();
}

