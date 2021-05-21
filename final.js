let imgw = [];
let numw = 6;
let imgm = [];
let numm = 32;
let imgk = [];
let numk = 6;
let imgf = [];
let numf = 27;
let imge = [];
let nume = 13;
let imgc = [];
let numc = 22;
let bg;
let pos = 0;

var check = [false, false, false, false, false, false];

function preload() {
    bg = loadImage('img/bg.png')
    for (let i = 0; i < numw; i++) {
        imgw[i] = loadImage('animecode/water/water/w' + (i + 1) + '.png')
    }
    for (let i = 0; i < numm; i++) {
        imgm[i] = loadImage('animecode/mouth/mouth/m' + (i + 1) + '.png')
    }
    for (let i = 0; i < nume; i++) {
        imge[i] = loadImage('animecode/eye/eye/e' + (i + 1) + '.png')
    }
    for (let i = 0; i < numk; i++) {
        imgk[i] = loadImage('animecode/key/key/k' + (i + 1) + '.png')
    }
    for (let i = 0; i < numf; i++) {
        imgf[i] = loadImage('animecode/fukushima/fu/f' + (i + 1) + '.png')
    }
    for (let i = 0; i < numc; i++) {
        imgc[i] = loadImage('animecode/can/can/can' + (i + 1) + '.png')
    }

}

function setup() {
    createCanvas(windowWidth-15, windowHeight-15);
    imageMode(CENTER);
    document.getElementById("gg").style.left="85vw";
    for (let i = 0; i < numw; i++) {
        imgw[i].resize(windowWidth / 4, windowWidth / 4);
    }
    for (let i = 0; i < numk; i++) {
        imgk[i].resize(windowWidth / 4, windowWidth / 4);
    }
    for (let i = 0; i < numm; i++) {
        imgm[i].resize(windowWidth / 4, windowWidth / 4);
    }
    for (let i = 0; i < numf; i++) {
        imgf[i].resize(windowWidth / 4, windowWidth / 4);
    }
    for (let i = 0; i < nume; i++) {
        imge[i].resize(windowWidth / 4.5, windowWidth / 4.5);
    }
    for (let i = 0; i < numc; i++) {
        imgc[i].resize(windowWidth / 3, windowWidth / 3);
    }
}
let iw = 0,
    im = 0,
    ie = 0,
    ic = 0,
    i = 0,
    ik = 0;

function draw() {
    image(bg, 0, 0)
    background(245);

    frameRate(20)

    //water
    push()
    translate(0, windowHeight / 5)
    image(imgw[iw], width / 2, height / 2)
    pop()
    if (iw == numw - 1) {
        iw = 0
    } else if (frameCount % 4 == 0) { iw++ }

    //mouth
    push()
    translate(-windowWidth / 3.5, -windowHeight / 4)
    image(imgm[im], width / 2, height / 2)
    pop()
    if (im == numm - 1) {
        im = 0
    } else { im++ }

    //key
    push()
    translate(windowWidth / 3.5, -windowHeight / 4)
    image(imgk[ik], width / 2, height / 2)
    pop()
    if (ik == numk - 1) {
        ik = 0
    } else if (frameCount % 5 == 0) { ik++ }

    //fu
    push()
    translate(windowWidth / 3.5, windowHeight / 6)
    image(imgf[i], width / 2 - 20, height / 2)
    pop()
    if (i == numf - 1) {
        i = 0
    } else if (frameCount % 2 == 0) { i++ }

    //eye
    push()
    translate(0, -windowHeight / 4)
    image(imge[ie], width / 2, height / 2)
    pop()
    if (ie == 12) {
        ie = 0
    } else if (frameCount % 2 == 0) { ie++ }

    //can
    push()
    translate(-windowWidth / 3.5, windowHeight / 6)
    image(imgc[ic], width / 2 + 20, height / 2 - 30)
    pop()
    if (ic == numc - 1) {
        ic = 0
    } else if (frameCount % 2 == 0) { ic++ }

    console.log(check)

    //1
    if (mouseX >= width / 8 && mouseX < width / 3.5 && mouseY > height / 8 && mouseY < height / 3) {
        document.getElementById("fish1").style.left = "8vw";
        if (!check[0]) {
            check[0] = true
            document.getElementById("fish1").src = document.getElementById("fish1").src
        }
    } else {
        check[0] = false;
        document.getElementById("fish1").style.left = "-50vw";
    }


    //2
    if (mouseX >= width / 3.5 && mouseX < width / 1.8 && mouseY > height / 8 && mouseY < height / 3) {
        document.getElementById("seaglass").style.left = "36vw";
        if (!check[1]) {
            check[1] = true
            document.getElementById("seaglass").src = document.getElementById("seaglass").src
        }
    } else {
        check[1] = false;
        document.getElementById("seaglass").style.left = "-50vw";
    }



    //3
    if (mouseX >= width / 1.4 && mouseX < width / 1.15 && mouseY > height / 8 && mouseY < height / 3) {
        document.getElementById("whale").style.left = "68vw";
        if (!check[2]) {
            check[2] = true
            document.getElementById("whale").src = document.getElementById("whale").src
        }
    } else {
        check[2] = false;
        document.getElementById("whale").style.left = "-50vw";
    }

    //4
    if (mouseX >= width / 8 && mouseX < width / 3.5 && mouseY > height / 1.9 && mouseY < height / 1.3) {
        document.getElementById("u").style.left = "8vw";
        if (!check[3]) {
            check[3] = true
            document.getElementById("u").src = document.getElementById("u").src
        }
    } else {
        check[3] = false;
        document.getElementById("u").style.left = "-50vw";
    }

    //5
    if (mouseX >= width / 3.5 && mouseX < width / 1.8 && mouseY > height / 1.9 && mouseY < height / 1.3) {
        document.getElementById("fish2").style.left = "38vw";
        if (!check[4]) {
            check[4] = true
            document.getElementById("fish2").src = document.getElementById("fish2").src
        }
    } else {
        check[4] = false;
        document.getElementById("fish2").style.left = "-50vw";
    }

    //6
    if (mouseX >= width / 1.4 && mouseX < width / 1.15 && mouseY > height / 1.9 && mouseY < height / 1.3) {
        document.getElementById("star").style.left = "68vw";
        if (!check[5]) {
            check[5] = true
            document.getElementById("star").src = document.getElementById("star").src
        }
    } else {
        check[5] = false;
        document.getElementById("star").style.left = "-50vw";
    }
}
