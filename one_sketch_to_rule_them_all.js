var sketch1 = function(p) {
	p.rval = [55,235];
	p.gval = [74,123];
	p.bval = [103,155];

	p.preload = function() {
		p.efont = p.loadFont('Josefin_Sans/JosefinSans-VariableFont_wght.ttf');
		p.gfont = p.loadFont('UnifrakturMaguntia/UnifrakturMaguntia-Regular.ttf');
		
	}

	p.setup = function() {
		p.firstSketch = p.createCanvas(p.windowWidth, p.windowHeight);
		p.firstSketch.parent('ultimate-sketch-container');
		//set random background
		p.bgr = p.random(p.rval);
		p.bgg = p.random(p.gval);
		p.bgb = p.random (p.bval);

		//set random accent
		p.accentr = p.random(p.rval);
		p.accentg = p.random(p.gval);
		p.accentb = p.random(p.bval);
		p.fill(p.accentr,p.accentg,p.accentb);
		p.noStroke();

		
	}

	p.draw = function() {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
		p.background(p.bgr,p.bgg,p.bgb);
		
		p.push();
			//create ellipses
			p.translate(p.windowWidth/2,p.windowHeight*6/10);
			p.rotate(-0.3);
			p.fill(255,255,255,50);
			p.ellipse(0,0,p.windowWidth*9/10,p.windowHeight*13/10);
			p.fill(p.bgr,p.bgg,p.bgb);
			p.ellipse(0,0,p.windowWidth*6/10,p.windowHeight);
		p.pop();

		p.push();
			//create foreground
			p.beginShape();

			p.vertex(0,p.windowHeight*4/5);
			p.vertex(p.windowWidth,p.windowHeight/3);
			p.vertex(p.windowWidth,p.windowHeight);
			p.vertex(0,p.windowHeight);

			p.endShape(p.CLOSE);
		p.pop();

		p.push();
		//create foreground stripe
			p.fill(p.bgr,p.bgg,p.bgb);
			p.beginShape();

			p.vertex(p.windowWidth/2,p.windowHeight);
			p.vertex(p.windowWidth,p.windowHeight*21/40);
			p.vertex(p.windowWidth,p.windowHeight*22/40);
			p.vertex(p.windowWidth*6/10,p.windowHeight);

			p.endShape(p.CLOSE);
		p.pop();

		p.push();
		//inital G
			p.textAlign(p.CENTER,p.CENTER);
			p.fill('white');
			p.textFont(p.gfont);
			p.textSize(400);
			p.translate(p.windowWidth/2,p.windowHeight/2);
			p.rotate(1.3);
			p.text('G',0,0);
		p.pop();
	}
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