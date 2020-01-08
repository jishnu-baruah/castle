
function setup() {
    var canvas = createCanvas(600, 600)
}
function draw() {
    background(236, 253, 254);
    rectMode(CENTER);


    fill(223, 196, 191);


    rect(170, 320, 60, 150)
    rect(430, 320, 60, 150);


    var base2y = 250;
    var baseVer2x = 130
    var baseVer3x = 390
    fill(64, 210, 249);
    triangle(baseVer2x, base2y, baseVer2x + 80, base2y, baseVer2x + 40, 150);
    triangle(baseVer3x, base2y, baseVer3x + 80, base2y, baseVer3x + 40, 150);



    fill(232, 218, 207);




    // 

    rect(300, 180, 130, 130);

    rect(300, 300, 170, 170);


    rect(300, 430, 250, 200);

    rect(460, 410, 80, 250);

    rect(140, 410, 80, 250);

    fill(185, 169, 155);
    rect(140, 300, 100, 10);
    rect(460, 300, 100, 10);
    rect(300, 210, 190, 10);

    var base1Y = 120
    var baseVer1X = 220
    fill(64, 210, 249);
    triangle(baseVer1X, base1Y, baseVer1X + 160, base1Y, 300, 20);



    fill(231, 138, 92);
    noStroke();
    ellipse(300, 410, 110, 90)
    rect(300, 470, 110, 120);



    // arc(100, 300, 120, 140, PI, QUARTER_PI);

    stroke(5, 90, 116);

    var lineX = 255;
    line(lineX, 520, lineX, 410);
    line(lineX + 10, 450, lineX + 10, 395);
    line(lineX + 10, 520, lineX + 10, 460);

    line(lineX + 20, 400, lineX + 20, 385);
    line(lineX + 20, 455, lineX + 20, 410);
    line(lineX + 20, 520, lineX + 20, 460);

    line(lineX + 30, 520, lineX + 30, 380);
    line(lineX + 44, 520, lineX + 44, 370);

    var line2X = lineX + 90;
    line(line2X, 520, line2X, 410);
    line(line2X - 10, 450, line2X - 10, 395);
    line(line2X - 10, 520, line2X - 10, 460);

    line(line2X - 20, 400, line2X - 20, 385);
    line(line2X - 20, 455, line2X - 20, 410);
    line(line2X - 20, 520, line2X - 20, 460);

    line(line2X - 30, 520, line2X - 30, 380);
    // line(line2X - 44, 520, lineX - 44, 370);


    createWindow(140, 400);
    createWindow(460, 400);
    createWindow(300, 280);
    createWindow(300, 170);
    createWindow(220, 370);
    createWindow(380, 370);
}

function createWindow(x, y) {
    var windowX = x;
    var windowY = y;
    noStroke();
    fill("white");
    ellipse(windowX, windowY - 10, 30, 20)
    rect(windowX, windowY, 30, 20);
    fill(228, 222, 224);
    stroke(138, 142, 154)
    rect(windowX, windowY + 10, 35, 10)
}