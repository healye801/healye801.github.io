rval = [55,235];
gval = [74,123];
bval = [103,155];
locations = [150,170,200,215,230,250,270,300,320,350,370,398];
x = 0;
y = 0;
l = 0;
let img;
function preload() {
	img = loadImage('Images/beech_leaf_1.png');
	img2 = loadImage('Images/beech_leaf_2.png');
	imagebank = [img,img2];
}

function setup() {
	var beechCanvas = createCanvas(400, 400);
	beechCanvas.parent('beeches-sketch-containers');
	bgr = random(rval);
	bgg = random(gval);
	bgb = random(bval);
	background(bgr,bgg,bgb);
	
	nfr = random(rval);
	nfg = random(gval);
	nfb = random(bval);
	fill(nfr,nfg,nfb);

}

function draw() {
	
	noStroke();
	frameRate(60);

		if ((l >= 190) || (l == 0)) {
		nfr = random(rval);
		nfg = random(gval);
		nfb = random(bval);
		fill(nfr,nfg,nfb);
		pfr = random(rval);
		pfg = random(gval);
		pfb = random(bval);
		m = 0;
		l = 0;
		x = 0;
		y = 0;
		i = 0;
		j = 0;
	}
	
	if ((l == 50) || (l == 100) || (l == 120)) {
		push();
			//translate(random(150,400),random(locations));
			xval = random(locations);
			translate(xval,xval+random(-100,100));
			rotate(radians(random(5,360)));
			makeLeaf();
			translate(xval,random(0,200));
			rotate(radians(random(5,360)));
			makeLeaf();
		pop();
	}
	
	push();
		fill(nfr,nfg,nfb);
		beech(0,0);
	pop();
	
	push();
		fill(pfr,pfg,pfb);
		translate(10,10);
		beech(0,0);
	pop();
		fill(239, 231, 218)
		thinbeech();
		
	l = l+1;
	
}


// this is the heart of my code!  I wanted to try to make a piece that centers around typography this week, so I used this function to write the word "beech" as in beech tree
function beech() {
		if ((y>=20) && (y<= 170)) {
			//b vert
			rect(20,y,20,20,10);
			rect(103,y,20,20,10);
			//e vert
			rect(143,y,20,20,10);
			//e2 vert
			rect(266,y,20,20,10);
			//c vert
			rect(20,y+190,20,20,10);
			//h vert
			rect(143,y+190,20,20,10);
			rect(226,y+190,20,20,10);
		}
		if ((x>=20) && (x<= 103)) {
			//b hoz
			rect(x,20,20,20,10);
			rect(x,95,20,20,10);
			rect(x,170,20,20,10);
			//e hoz
			rect(x+123,20,20,20,10);
			rect(x+123,95,20,20,10);
			rect(x+123,170,20,20,10);
			//e2 hoz
			rect(x+246,20,20,20,10);
			rect(x+246,95,20,20,10);
			rect(x+246,170,20,20,10);
			//c hoz
			rect(x,210,20,20,10);
			rect(x,360,20,20,10);
			//h hoz
			rect(x+123,285,20,20,10);
	}
	x = x+1;
	y = y+1;
}

function makeLeaf() {
	image(random(imagebank),0,0,100,70);
}

function thinbeech() {
		if ((y>=20) && (y<= 170)) {
			//b vert
			rect(20,y,10,10,10);
			rect(103,y,10,10,10);
			//e vert
			rect(143,y,10,10,10);
			//e2 vert
			rect(266,y,10,10,10);
			//c vert
			rect(20,y+190,10,10,10);
			//h vert
			rect(143,y+190,10,10,10);
			rect(226,y+190,10,10,10);
		}
		if ((x>=20) && (x<= 103)) {
			//b hoz
			rect(x,20,10,10,10);
			rect(x,95,10,10,10);
			rect(x,170,10,10,10);
			//e hoz
			rect(x+123,20,20,20,10);
			rect(x+123,95,20,20,10);
			rect(x+123,170,20,20,10);
			//e2 hoz
			rect(x+246,20,20,20,10);
			rect(x+246,95,20,20,10);
			rect(x+246,170,20,20,10);
			//c hoz
			rect(x,210,20,20,10);
			rect(x,360,20,20,10);
			//h hoz
			rect(x+123,285,20,20,10);
	}
	x = x+1;
	y = y+1;
}