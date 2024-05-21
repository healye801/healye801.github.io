function setup() {
	createCanvas(500, 500);
	background(0,0,5);
	fill(0, 0, 35);
	noStroke();
	triangle(100,140,300,140,350,50);
	triangle(100+50,140+200,300+100,140+300,350,50+300);
	rotate(radians(30));
	triangle(100,140,300,140,350,50);
	triangle(100+50,140+200,300+100,140+300,350,50+300);
	rotate(radians(-30));
	fill(252, 202, 70);
	ellipse(50,400,500,400);
	fill(11, 79, 108);
	rect(0,100,200,20);
	fill(70-50, 47-50, 128-50);
	rect(0,130,350,10);
	rotate(radians(75));
	fill(42, 127, 98);
	stroke(63, 64, 80);
	rect(0,30,500,5);
	line(0,60,500,60);
	stroke(176, 72, 68);
	strokeWeight(1);
	line(0,20,600,-30);
	strokeWeight(0);
	//ellipse(200,20,400,9);
	rotate(radians(-80));
	fill(209, 124, 176);
	//rect(0,30+100,500,10);
	strokeWeight(2);
	stroke(176, 72, 68);
	
	line(0,60+100,500,60);
	line(0,20+100,600,-30);
	stroke(70, 47, 128);
	strokeWeight(0);
	fill(189, 15, 93);
	ellipse(200,20+100,400,9);
	fill(153, 225, 217);
	rotate(radians(10));
	ellipse(300,400,50,50);
	fill(91, 77, 160);
	ellipse(400,450,75,75);
	fill(91+20, 77+20, 160+20);
	triangle(180,150,450,100,470,130);
	rotate(radians(25));
	rect(390,45,100,120);
	fill(11, 79, 108);
	rotate(radians(-25));
	stroke(36, 16, 35);
	strokeWeight(20);
	line(400,100,300,400);
	stroke(124, 158, 178);
	strokeWeight(10);
	line(430,150,330,380);
	strokeWeight(1);
	line(120,150,90,200);
	//stroke(36, 16, 35);
	line(130,160,100,250);
	fill(70, 47, 128);
	line(125,155,80,260);
	line(100,150,70,230);
	line(150,200,50,270);
	rotate(radians(25));
	//rect(390,45,100,120);
	rect(440,40,40,40);
	fill(0, 48, 47)
	rect(420,20,20,10);
	rect(440,50,30,30);
	strokeWeight(10);
	line(400,40,400,50);
	rotate(radians(-25));
	strokeWeight(1);
	
	
}

function draw() {
}