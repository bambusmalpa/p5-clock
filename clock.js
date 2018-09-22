let mainSize = 800;
let circleCenter = mainSize / 2;
let strokeSize = 10;
let clockStart = -90;

function setup() {
    createCanvas(mainSize, mainSize);
}

function draw() {

    background(255);

    seconds();
    munutes();
    hours();
    mils();
}

function mils() {
    var mil = map(millis(), 0, 1000, clockStart, 270);
    noFill();
    strokeWeight(strokeSize);
    stroke((255 - mil), 0, mil);
    angleMode(DEGREES);
    arc(circleCenter, circleCenter, 500, 500, clockStart, mil);
}

function seconds() {
    var s = map(second(), 0, 59, -90, 270);
    noFill();
    strokeWeight(strokeSize * 2)
    stroke(255 - s, 0, s);
    angleMode(DEGREES);
    arc(circleCenter, circleCenter, 450, 450, clockStart, s)
}

function munutes() {
    var m = map(minute(), 0, 59, -90, 270);
    noFill();
    strokeWeight(strokeSize * 4);
    stroke(255 - m, 0, m);
    angleMode(DEGREES);
    arc(circleCenter, circleCenter, 370, 370, clockStart, m)
}

function hours() {
    var h = hour();
    if (h > 12) {
        h = h - 12
    }
    let newH = map(h, 0, 12, -90, 270)
    noFill();
    strokeWeight(strokeSize * 6)
    stroke(255 - newH, 0, newH);
    angleMode(DEGREES);
    arc(circleCenter, circleCenter, 250, 250, clockStart, newH)
}
