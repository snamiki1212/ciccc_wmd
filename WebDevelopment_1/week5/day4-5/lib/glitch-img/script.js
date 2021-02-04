let windowW = window.innerWidth;
let windowH = window.innerHeight;
let isLoaded = false;
let glitch;
let imgSrc = 'data:image/png;base64,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'

function setup() {
    background(0);
    createCanvas(windowW, windowH);
    loadImage(imgSrc, function(img) {
        glitch = new Glitch(img);
        isLoaded = true;
    });
}

function draw() {
    clear();
    background(0);

    if (isLoaded) {
        glitch.show();
    }

    // fill(255, 255, 255);
    // textSize(14);
    // text('FPS: ' + floor(frameRate()), 20, 30);

}

class Glitch {
    constructor(img) {
        this.channelLen = 4;
        this.imgOrigin = img;
        this.imgOrigin.loadPixels();
        this.copyData = [];
        this.flowLineImgs = [];
        this.shiftLineImgs = [];
        this.shiftRGBs = [];
        this.scatImgs = [];
        this.throughFlag = true;
        this.copyData = new Uint8ClampedArray(this.imgOrigin.pixels);

        // flow line
        for (let i = 0; i < 1; i++) {
            let o = {
                pixels: null,
                t1: floor(random(0, 1000)),
                speed: floor(random(4, 24)),
                randX: floor(random(24, 80))
            };
            this.flowLineImgs.push(o);
        }

        // shift line
        for (let i = 0; i < 6; i++) {
            let o = null;
            this.shiftLineImgs.push(o);
        }

        // shift RGB
        for (let i = 0; i < 1; i++) {
            let o = null;
            this.shiftRGBs.push(o);
        }

        // scat imgs
        for (let i = 0; i < 3; i++) {
            let scatImg = {
                img: null,
                x: 0,
                y: 0
            };
            this.scatImgs.push(scatImg);
        }
    }

    replaceData(destImg, srcPixels) {
        for (let y = 0; y < destImg.height; y++) {
            for (let x = 0; x < destImg.width; x++) {
                let r, g, b, a;
                let index;
                index = (y * destImg.width + x) * this.channelLen;
                r = index;
                g = index + 1;
                b = index + 2;
                a = index + 3;
                destImg.pixels[r] = srcPixels[r];
                destImg.pixels[g] = srcPixels[g];
                destImg.pixels[b] = srcPixels[b];
                destImg.pixels[a] = srcPixels[a];
            }
        }
        destImg.updatePixels();
    }

    flowLine(srcImg, obj) {

        let destPixels,
            tempY;
        destPixels = new Uint8ClampedArray(srcImg.pixels);
        obj.t1 %= srcImg.height;
        obj.t1 += obj.speed;
        //tempY = floor(noise(obj.t1) * srcImg.height);
        tempY = floor(obj.t1);
        for (let y = 0; y < srcImg.height; y++) {
            if (tempY === y) {
                for (let x = 0; x < srcImg.width; x++) {
                    let r, g, b, a;
                    let index;
                    index = (y * srcImg.width + x) * this.channelLen;
                    r = index;
                    g = index + 1;
                    b = index + 2;
                    a = index + 3;
                    destPixels[r] = srcImg.pixels[r] + obj.randX;
                    destPixels[g] = srcImg.pixels[g] + obj.randX;
                    destPixels[b] = srcImg.pixels[b] + obj.randX;
                    destPixels[a] = srcImg.pixels[a];
                }
            }
        }
        return destPixels;
    }

    shiftLine(srcImg) {

        let offsetX;
        let rangeMin, rangeMax;
        let destPixels;
        let rangeH;

        destPixels = new Uint8ClampedArray(srcImg.pixels);
        rangeH = srcImg.height;
        rangeMin = floor(random(0, rangeH));
        rangeMax = rangeMin + floor(random(1, rangeH - rangeMin));
        offsetX = this.channelLen * floor(random(-40, 40));

        for (let y = 0; y < srcImg.height; y++) {
            if (y > rangeMin && y < rangeMax) {
                for (let x = 0; x < srcImg.width; x++) {
                        let r, g, b, a;
                        let r2, g2, b2, a2;
                        let index;

                        index = (y * srcImg.width + x) * this.channelLen;
                        r = index;
                        g = index + 1;
                        b = index + 2;
                        a = index + 3;
                        r2 = r + offsetX;
                        g2 = g + offsetX;
                        b2 = b + offsetX;
                        destPixels[r] = srcImg.pixels[r2];
                        destPixels[g] = srcImg.pixels[g2];
                        destPixels[b] = srcImg.pixels[b2];
                        destPixels[a] = srcImg.pixels[a];
                }
            }
        }
        return destPixels;
    }

    shiftRGB(srcImg) {

        let randR, randG, randB;
        let destPixels;
        let range;

        range = 16;
        destPixels = new Uint8ClampedArray(srcImg.pixels);
        randR = (floor(random(-range, range)) * srcImg.width + floor(random(-range, range))) * this.channelLen;
        randG = (floor(random(-range, range)) * srcImg.width + floor(random(-range, range))) * this.channelLen;
        randB = (floor(random(-range, range)) * srcImg.width + floor(random(-range, range))) * this.channelLen;

        for (let y = 0; y < srcImg.height; y++) {
            for (let x = 0; x < srcImg.width; x++) {
                let r, g, b, a;
                let r2, g2, b2, a2;
                let index;

                index = (y * srcImg.width + x) * this.channelLen;
                r = index;
                g = index + 1;
                b = index + 2;
                a = index + 3;
                r2 = (r + randR) % srcImg.pixels.length;
                g2 = (g + randG) % srcImg.pixels.length;
                b2 = (b + randB) % srcImg.pixels.length;
                destPixels[r] = srcImg.pixels[r2];
                destPixels[g] = srcImg.pixels[g2];
                destPixels[b] = srcImg.pixels[b2];
                destPixels[a] = srcImg.pixels[a];
            }
        }

        return destPixels;
    }

    getRandomRectImg(srcImg) {
        let startX;
        let startY;
        let rectW;
        let rectH;
        let destImg;
        startX = floor(random(0, srcImg.width - 30));
        startY = floor(random(0, srcImg.height - 50));
        rectW = floor(random(30, srcImg.width - startX));
        rectH = floor(random(1, 50));
        destImg = srcImg.get(startX, startY, rectW, rectH);
        destImg.loadPixels();
        return destImg;
    }

    show() {
      
        // restore the original state
        this.replaceData(this.imgOrigin, this.copyData);

        // sometimes pass without effect processing
        let n = floor(random(100));
        if (n > 75 && this.throughFlag) {
            this.throughFlag = false;
            setTimeout(() => {
                this.throughFlag = true;
            }, floor(random(40, 400)));
        }
        if (!this.throughFlag) {
            push();
            translate((width - this.imgOrigin.width) / 2, (height - this.imgOrigin.height) / 2);
            image(this.imgOrigin, 0, 0);
            pop();
            return;
        }

        // flow line
        this.flowLineImgs.forEach((v, i, arr) => {
            arr[i].pixels = this.flowLine(this.imgOrigin, v);
            if (arr[i].pixels) {
                this.replaceData(this.imgOrigin, arr[i].pixels);
            }
        })

        // shift line
        this.shiftLineImgs.forEach((v, i, arr) => {
            if (floor(random(100)) > 50) {
                arr[i] = this.shiftLine(this.imgOrigin);
                this.replaceData(this.imgOrigin, arr[i]);
            } else {
                if (arr[i]) {
                    this.replaceData(this.imgOrigin, arr[i]);
                }
            }
        })

        // shift rgb
        this.shiftRGBs.forEach((v, i, arr) => {
            if (floor(random(100)) > 65) {
                arr[i] = this.shiftRGB(this.imgOrigin);
                this.replaceData(this.imgOrigin, arr[i]);
            }
        })

        push();
        translate((width - this.imgOrigin.width) / 2, (height - this.imgOrigin.height) / 2);
        image(this.imgOrigin, 0, 0);
        pop();

        // scat image
        this.scatImgs.forEach((obj) => {
            push();
            translate((width - this.imgOrigin.width) / 2, (height - this.imgOrigin.height) / 2);
            if (floor(random(100)) > 80) {
                obj.x = floor(random(-this.imgOrigin.width * 0.3, this.imgOrigin.width * 0.7));
                obj.y = floor(random(-this.imgOrigin.height * 0.1, this.imgOrigin.height));
                obj.img = this.getRandomRectImg(this.imgOrigin);
            }
            if (obj.img) {
                image(obj.img, obj.x, obj.y);
            }
            pop();
        })

    }

}
