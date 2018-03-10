var xoter = [];
var xotakerner = [];
var gishatichner = [];
var amenakerner = [];
var matrix = [];
var side = 40;
var rnd = [0, 1];
var arr = [];
var n = 16;
var m = 16;


function setup() {
    frameRate(5);
    createCanvas(n * side, m * side);
    background('#acacac');

    for (i = 0; i < n; i++) {
        matrix[i] = [];
        for (a = 0; a < m; a++) {
            matrix[i][a] = random(rnd);
        }
    }

    matrix[7][6] = 2;
    matrix[12][8] = 3;
    matrix[8][12] = 3;
    matrix[3][6] = 3;
    matrix[15][4] = 4;

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var nx = new Grass(x, y, 1);
                xoter.push(nx);
            }
            else if (matrix[y][x] == 2) {
                xotakerner.push(new Xotaker(x, y, 2));
            }
            else if (matrix[y][x] == 3) {
                gishatichner.push(new Gishatich(x, y, 3));
            }
            else if (matrix[y][x] == 4) {
                amenakerner.push(new Amenaker(x, y, 4));
            }
        }
    }
}


function draw() {



    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            for(var a in xoter){
                if(xoter[a].x == x && xoter[a].y == y && matrix[y][x] == 0){
                    xoter.splice(a,1);
                }
            }
        }
    }

    

   
    for (var i in xotakerner) {
        if (xotakerner[i].yntrelvandak(1)[0]) {
            xotakerner[i].utel();
            for(var a in xoter){
                if(xoter[a].x == xotakerner[i].x && xoter[a].y == xotakerner[i].y){
                    //xoter[a].die(a);
                    xoter.splice(a,1);
                    break;
                }
            }
        }
        else {
            xotakerner[i].sharjvel();
        }
        if (xotakerner[i].kyanq == 5) {
            xotakerner[i].kyanq= 0;
            xotakerner.push(new Xotaker(xotakerner[i].x, xotakerner[i].y));
        }

        if (xotakerner[i].energy == 0) {
            for (var a in xotakerner) {
                if (xotakerner[a].x == xotakerner[i].x && xotakerner[a].y == xotakerner[i].y) {
                    matrix[xotakerner[i].y][xotakerner[i].x] = 0;
                    xotakerner.splice(a, 1);

                }
            }

        }
    }

     for (var i in xoter) {
        xoter[i].bazmanal();
    }


    for (var i in gishatichner) {
        if (gishatichner[i].yntrelvandak(2)[0]) {
            gishatichner[i].utel();
        }
        else {
            gishatichner[i].sharjvel();
        }

        if (gishatichner[i].kyanq == 5) {
            gishatichner[i].kyanq = 0;
            gishatichner.push(new Gishatich(gishatichner[i].x, gishatichner[i].y));
            matrix[gishatichner[i].y][gishatichner[i].x] = 3;
        }


        if (gishatichner[i].energy == 0) {
            for (var a in gishatichner) {
                if (gishatichner[a].x == gishatichner[i].x && gishatichner[a].y == gishatichner[i].y) {
                    matrix[gishatichner[i].y][gishatichner[i].x] = 0;
                    gishatichner.splice(a, 1);
                }
            }
        }
    }

    for (var i in amenakerner) {
        if (amenakerner[i].yntrelvandak(1)[0] || amenakerner[i].yntrelvandak(2)[0] || amenakerner[i].yntrelvandak(3)[0]) {
            amenakerner[i].utel();
        }
        else {
            amenakerner[i].sharjvel();
        }

        if (amenakerner[i].kyanq >= 15) {
            amenakerner[i].kyanq = 0;
            amenakerner.push(new Amenaker(amenakerner[i].x, amenakerner[i].y));
            matrix[amenakerner[i].y][amenakerner[i].x] = 4;
        }

        if (amenakerner[i].energy == 0) {
            for (var a in amenakerner) {
                if (amenakerner[a].x == amenakerner[i].x && amenakerner[a].y == amenakerner[i].y) {
                    matrix[amenakerner[i].y][amenakerner[i].x] = 0;
                    amenakerner.splice(a, 1);
                }
            }
        }
    } 
}

//https://github.com/hayk2596/programming-3