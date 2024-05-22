var sketch1 = function(p) {
  p.x = 50;
  p.y = 50;
  p.setup = function() {
    p.firstSketch = p.createCanvas(p.windowWidth, p.windowHeight);
	p.firstSketch.parent('ultimate-sketch-container');
    p.background(51,32,150);
  };
  p.draw = function() {
    p.fill(0, 255, 200, 25);
    p.noStroke();
    p.ellipse(p.x, p.y, 100, 100);

    p.x = p.x + p.random(-50, 50);
    p.y = p.y + p.random(-20, 20);
  };
};

var sketch2 = function(p) {
  p.x = 100;
  p.y = 100;
  p.setup = function() {
    p.secondSketch = p.createCanvas(p.windowWidth, p.windowHeight);
	p.secondSketch.parent('secondary-sketch-container');
    p.background(51);
  };
  p.draw = function() {
    p.fill(255, 200, 0, 25);
    p.noStroke();
    p.ellipse(p.x, p.y, 48, 48);

    p.x = p.x + p.random(-80, 80);
    p.y = p.y + p.random(-30, 30);
  };
};

var bauhausSketch = function(p) {
	
	p.setup = function() {
		p.bauhausSketch = p.createCanvas(p.windowWidth, p.windowHeight);
		p.bauhausSketch.parent('bauhaus-container');
		p.background(50,50,200);
	};
	p.draw = function() {
		p.noStroke();
		p.fill(199, 30, 199, 25);
		p.circle(p.mouseX, p.mouseY, p.windowHeight/2);
	}
};

var myp5_4 = new p5();

var myp5_3 = new p5(bauhausSketch);
var myp5_1 = new p5(sketch1);
var myp5_2 = new p5(sketch2);

function resetBackground() {
  myp5_1.x = myp5_1.width / 2;
  myp5_1.y = myp5_1.height / 2;
  myp5_1.background(51,32,150);
}

setInterval(resetBackground, 3000);