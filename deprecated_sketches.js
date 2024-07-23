var sketch1 = function(p) {
	p.objs = [];
	
	p.rval = [55,235];
	p.gval = [74,123];
	p.bval = [103,155];
	p.introt = -0.8;
	p.introtslow = 1.3;

	p.preload = function() {
		p.efont = p.loadFont('Fonts/JosefinSans-Regular.ttf');
		p.gfont = p.loadFont('Fonts/UnifrakturMaguntia/UnifrakturMaguntia-Regular.ttf');
	}

	p.setup = function() {
		p.rectMode(CENTER);
		p.objs.push(new p.Grid());
		
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
		
		//p.window.onscroll(p.onscr);
	}

	p.draw = function() {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
		p.background(p.bgr,p.bgg,p.bgb);
		
		if (p.frameCount % 25 ==0) {
			p.objs.push(new p.Grid());
		}
		
		for (let p.i of p.objs) {
			p.i.run();
		}
		
		if (p.objs.length > 5) {
			p.obgjs.splic(0,1);
		}
		
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
		//initial e
			p.translate(p.windowWidth/2,p.windowHeight/2);
			p.fill('#ffffff');
			p.rotate(p.introt);
			p.ellipse(0,-p.windowHeight/2,125,125);
			p.textAlign(p.CENTER,p.CENTER);
			p.fill(p.bgr,p.bgg,p.bgb);
			p.strokeWeight(5);
			p.stroke(p.color(p.bgr,p.bgg,p.bgb));
			p.textFont(p.efont);
			p.textSize(175);
			p.text('e',0,-p.windowHeight*56/100);
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
		
		p.push();
			//postage stamp
			p.translate(p.windowWidth*18/20,p.windowHeight-p.windowWidth*2/20);
			p.textAlign(p.CENTER,p.CENTER);
			p.fill('white');
			p.textFont(p.efont);
			p.textSize(6+p.windowWidth/50);
			p.text('EMMA',0,0);
			p.textSize(5+p.windowWidth/50);
			p.text('GRACE',0,5+p.windowWidth/50);
			p.text('HEALY',0,10+p.windowWidth*2/50);
		p.pop();
	}
	
	//p.moveClock = function() {
	//p.window.onscroll
	p.onscro = function() {
		p.introt = p.introt+p.abs(p.onwheel.deltaY/100);
		p.introtslow = p.introtslow-p.abs(p.onwheel.deltaY/2000);
		p.function.draw();
		//p.rotate(p.introt);
	};
	
	p.class = p.Grid {
		p.constructor() {
			let p.c = p.int(p.random(0.5,100) * p.random() + 1);
			let p.r = p.int(p.random(50,100) * p.random() + 1);
			let p.w = p.width / p.c;
			let p.h = p.height / p.r;
			let p.col = p.color(255,255,255,random(1,10));
			let p.nScl = p.random(0.01,0.000001);
			let p.tmp = p.random(10000);
			for (let p.j = 0; p.i <p.c; p.i++) {
				let p.x = p.i * p.w + p.w /2;
				let p.y = p.j * p.h + p.h /2;
				let p.t = - p.noise(p.x * p.nScl, p.y * p.nScl, p.tmp) * 100;
				p.this.rects.push(p.new p.Rect(p.x,p.y,.wp.h,p.t,p.col,p.ste]));
			}
		}
	p.run() {
		for (let p.i of this.p.rects) {
			p.i.show();
			p.i.move();
		}
	}
	
	class p.Rect {
		p.constructor(p.x, p.y, p.w, p.h, p.st, p.col, p.step) {
			this.p.x = p.x;
			this.p.y = p.y;
			this.p.w = p.w;
			this.p.h = p.h;
			this.p.t = 0;
			this.p.st = p.st;
			this.p.col = p.col;
			this.p.step = p.step;
		}
	}
	
	p.show() {
		p.noStroke();
		p.fill(this.col);
		let p.ttt = this.t ** 0.4;
		if (this.st > 0) {
			p.rect(this.x, this.y, this.w * p.ttt, this.h *p.ttt);
		}
	}
		
	p.move() {
		if (this.st > 0) if (this.t <1) this.t += this.step;
		this.st++;
	}
}

var sketch2 = function(p) {
  	p.rval = [55,235];
	p.gval = [74,123];
	p.bval = [103,155];

	p.preload = function() {
		p.efont = p.loadFont('Fonts/JosefinSans-Regular.ttf');
		p.gfont = p.loadFont('Fonts/UnifrakturMaguntia/UnifrakturMaguntia-Regular.ttf');
	}

	p.setup = function() {
		p.secondSketch = p.createCanvas(p.windowWidth, p.windowHeight);
		p.secondSketch.parent('secondary-sketch-container');
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
var myp5_2 = new p5(sketch2);