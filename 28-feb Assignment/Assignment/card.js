// creating star using canvas 
var canvas = document.getElementById('can');
var ctx = canvas.getContext('2d');
can.width = 900;
can.height = 540;
function star() {
    ctx.fillStyle = "#99A799";
    ctx.beginPath();
    ctx.moveTo(45, 10.0);
    ctx.lineTo(57, 33.3);
    ctx.lineTo(82.6, 36.1);
    ctx.lineTo(64, 53.6);
    ctx.lineTo(68.3, 78.3);
    ctx.lineTo(46, 66.6);
    ctx.lineTo(23.73, 78.3);
    ctx.lineTo(28.3, 53.6);
    ctx.lineTo(10.3, 36);
    ctx.lineTo(35, 32.6);
    ctx.lineTo(46, 10);
    ctx.closePath();
    ctx.fill();
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
    ctx.fillStyle = '#99A799';
    ctx.fillText(text, 100, 200);
    ctx.fillText(text2, 100, 250);
    ctx.fillText(text3, 100, 300);
    ctx.fillText(text4, 100, 380);
    ctx.fillText(text5, 100, 430);
}

function card() {
    star();
    message();
}

