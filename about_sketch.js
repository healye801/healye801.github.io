var sketch1 = function(p) {
  	p.rval = [55,235];
	p.gval = [74,123];
	p.bval = [103,155];

	p.preload = function() {
		p.efont = p.loadFont('Fonts/JosefinSans-Regular.ttf');
		p.gfont = p.loadFont('Fonts/UnifrakturMaguntia/UnifrakturMaguntia-Regular.ttf');
	}

	p.setup = function() {
		p.firstSketch = p.createCanvas(p.windowWidth, p.windowHeight);
		p.firstSketch.parent('about-contact-sketch-container');
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
		//contact emma
			p.textAlign(p.CENTER,p.BOTTOM);
			p.fill('white');
			p.textFont(p.gfont);
			p.textSize(35+p.windowWidth/30);
			p.text('contact emma',p.windowWidth/2,p.windowHeight/2);
		p.pop();
		
		p.push();
		//reach out to emmahealy2021@u.northwestern.edu
			p.textAlign(p.CENTER,p.BOTTOM);
			p.textStyle(BOLD);
			p.fill('white');
			p.textFont(p.efont,20,600);
			p.textSize(13+p.windowWidth/95);
			p.text('Reach out to emmahealy2021@u.northwestern.edu',p.windowWidth/2,p.windowHeight*23/40);
		p.pop();
	}
};

var myp5_4 = new p5();

var myp5_1 = new p5(sketch1);
