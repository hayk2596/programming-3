class Xot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.index = 1;
        this.multiply = 0;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];


    }

    yntrelvandak(ch) {
        var vnd = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    vnd.push(this.directions[i]);
                }
            }
        }
        return vnd;
    }

    bazmanal() {
        this.multiply++;
        var norkordinat = random(this.yntrelvandak(0));
        if (this.multiply >= 8 && norkordinat && matrix[this.y][this.x] != 0) {
            xoter.push(new Xot(norkordinat[0], norkordinat[1]));
            matrix[norkordinat[1]][norkordinat[0]] = 1;
            this.multiply = 0;
        }
    }
}

class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.kyanq = 0;
        this.directions = [];
        this.index = 2;
    }

    norkordinatner() {
        this.directions = [];
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    yntrelvandak(c) {
        var vnd = [];
        this.norkordinatner();
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == c) {
                    vnd.push(this.directions[i]);
                }
            }
        }
        return vnd;

    }

    sharjvel() {
        var nv = random(this.yntrelvandak(0));
        if (nv) {
            matrix[this.y][this.x] = 0;
            this.x = nv[0];
            this.y = nv[1];
            matrix[this.y][this.x] = 2;
            this.kyanq = 0;
            this.energy -= 1;
        }
    }




    utel() {
      var nv = random(this.yntrelvandak(1));
      if(nv){
            matrix[this.y][this.x] = 0;
            this.x = nv[0];
            this.y = nv[1];
            matrix[nv[1]][nv[0]] = 2;


            this.kyanq += 1;
            this.energy = 5;

        }

        

    }


}

class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 15;
        this.kyanq = 0;
        this.directions = [];
        this.index = 3;
    }

    norkordinatner() {
        this.directions = [];
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    yntrelvandak(ch) {
        var vnd = [];
        this.norkordinatner();
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    vnd.push(this.directions[i]);
                }
            }
        }
        return vnd;
    }

    sharjvel() {
        this.norkordinatner();
        var nv = random(this.yntrelvandak(0));
        if (nv) {
            matrix[this.y][this.x] = 0;
            this.x = nv[0];
            this.y = nv[1];
            matrix[this.y][this.x] = 3;
            this.energy -= 1;
    
        }
    }

    utel() {
        var nv = random(this.yntrelvandak(2));
        if (nv) {
            matrix[this.y][this.x] = 0;
            this.x = nv[0];
            this.y = nv[1];
            matrix[this.y][this.x] = 3;
            for (var a in xotakerner) {
                if (xotakerner[a].x == nv[0] && xotakerner[a].y == nv[1]) {
                    xotakerner.splice(a, 1);
                }
            }

            this.kyanq += 1;
            this.energy = 15;
        }
    }
}

class Amenaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 15;
        this.kyanq = 0;
        this.directions = [];
        this.index = 4;
    }

    norkordinatner() {
        this.directions = [];
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    yntrelvandak(ch) {
        var vnd = [];
        this.norkordinatner();
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    vnd.push(this.directions[i]);
                }
            }
        }
        return vnd;
    }

    sharjvel() {
        this.norkordinatner();
        var nv = random(this.yntrelvandak(0));
        if (nv) {
            matrix[this.y][this.x] = 0;
            this.x = nv[0];
            this.y = nv[1];
            matrix[this.y][this.x] = 4;
            this.energy -= 1;
            this.kyanq = 0;
        }
    }


    utel() {
        if (this.yntrelvandak(3)[0]) {
            var nv = random(this.yntrelvandak(3));
            var axb = gishatichner;
            var liv = 3;
        }
        else if (this.yntrelvandak(2)[0]) {
            var nv = random(this.yntrelvandak(2));
            var axb = xotakerner;
            var liv = 2;
        }
        else if (this.yntrelvandak(1)[0]) {
            var nv = random(this.yntrelvandak(1));
            var axb = xoter;
            var liv = 1;
        }


        if (nv) {
            matrix[this.y][this.x] = 0;
            this.x = nv[0];
            this.y = nv[1];
            matrix[this.y][this.x] = 4;
            for (var a in axb) {
                if (axb[a].x == nv[0] && axb[a].y == nv[1]) {
                    axb.splice(a, 1);
                }
            }

            this.kyanq += liv;
            this.energy = 15;
        }
    }
}