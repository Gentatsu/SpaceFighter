(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 720,
	fps: 30,
	color: "#000000",
	manifest: [
		{src:"images/background.jpg", id:"background"},
		{src:"images/dot.png", id:"dot"},
		{src:"images/flame1.png", id:"flame1"},
		{src:"images/flame2.png", id:"flame2"},
		{src:"images/gem.png", id:"gem"},
		{src:"images/rock1.png", id:"rock1"},
		{src:"images/rock2.png", id:"rock2"},
		{src:"images/rock3.png", id:"rock3"},
		{src:"images/shield.png", id:"shield"},
		{src:"images/ship.png", id:"ship"},
		{src:"images/timer.png", id:"timer"}
	]
};

// stage content:
(lib.game = function() {
	this.initialize();

	// Layer 1
	this.bullet = new lib.bullet();
	this.bullet.setTransform(166,371,1,1,0,0,0,-5,-2);

	this.text = new cjs.Text("", "20px 'TimesNewRomanPSMT'", "#0066CC");
	this.text.lineHeight = 22;
	this.text.lineWidth = 100;
	this.text.setTransform(107,325.2);

	this.gameOver = new lib.GameOver();
	this.gameOver.setTransform(458,241.5,1,1,0,0,0,201,134.9);

	this.score = new cjs.Text("0 ", "20px 'Times New Roman'", "#D3E1E7");
	this.score.name = "score";
	this.score.lineHeight = 22;
	this.score.lineWidth = 63;
	this.score.setTransform(758,141.3);

	this.text_1 = new cjs.Text("Score: ", "20px 'Times New Roman'", "#D2E0E6");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 63;
	this.text_1.setTransform(698,141.3);

	this.power = new lib.power();
	this.power.setTransform(824,499);

	this.meteor3 = new lib.meteor3();
	this.meteor3.setTransform(825,433);

	this.meteor2 = new lib.meteor2();
	this.meteor2.setTransform(857,367,1,1,0,0,0,28,30);

	this.meteor1 = new lib.meteor1();
	this.meteor1.setTransform(832,223);

	this.hero = new lib.hero();
	this.hero.setTransform(102,342,1,1,0,0,0,-12.4,0);

	this.instance = new lib.background();
	this.instance.setTransform(-21,0,1,0.702);

	this.addChild(this.instance,this.hero,this.meteor1,this.meteor2,this.meteor3,this.power,this.text_1,this.score,this.gameOver,this.text,this.bullet);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(459,360,1024,718.4);


// symbols:
(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,1024);


(lib.dot = function() {
	this.initialize(img.dot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.flame1 = function() {
	this.initialize(img.flame1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,14);


(lib.flame2 = function() {
	this.initialize(img.flame2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,14);


(lib.gem = function() {
	this.initialize(img.gem);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,30);


(lib.rock1 = function() {
	this.initialize(img.rock1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,82);


(lib.rock2 = function() {
	this.initialize(img.rock2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,96);


(lib.rock3 = function() {
	this.initialize(img.rock3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,18);


(lib.shield = function() {
	this.initialize(img.shield);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.ship = function() {
	this.initialize(img.ship);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,99);


(lib.timer = function() {
	this.initialize(img.timer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.power = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// detail
	this.instance = new lib.gem();
	this.instance.setTransform(-20,-15);

	this.instance_1 = new lib.shield();
	this.instance_1.setTransform(-19.8,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// shape
	this.instance_2 = new lib.timer();
	this.instance_2.setTransform(-13.9,-24);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-15,31,30);


(lib.meteor3 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.rock3();
	this.instance.setTransform(-10,-10);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-10,18,18);


(lib.meteor2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996633").s().p("AhXA0IABgDIBDgGIACgCIAGBJIgFAEgAAOhzIADgCIBEAxIADAAIgpBeIgIABg");
	this.shape.setTransform(7.6,-1.2);

	// Layer 1
	this.instance = new lib.rock2();
	this.instance.setTransform(-20,-20);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-20,98,96);


(lib.meteor1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.rock1();
	this.instance.setTransform(-40,-40);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40,-40,89,82);


(lib.GameOver = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("", "26px 'ArialMT'", "#0066CC");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 100;
	this.text.setTransform(210,213.5);

	this.playButton = new cjs.Text("PLAY", "26px 'Arial'", "#FFFFFF");
	this.playButton.name = "playButton";
	this.playButton.textAlign = "center";
	this.playButton.lineHeight = 28;
	this.playButton.lineWidth = 71;
	this.playButton.setTransform(202.5,233.8);

	this.text_1 = new cjs.Text("GAME OVER", "62px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 64;
	this.text_1.lineWidth = 398;
	this.text_1.setTransform(199,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnGjCIONAAIAAGFIuNAAg");
	this.shape.setTransform(203.5,250);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660000").s().p("AnFDDIAAmEIOMAAIAAGEg");
	this.shape_1.setTransform(203.5,250);

	this.addChild(this.shape_1,this.shape,this.text_1,this.playButton,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,402,270.5);


(lib.fire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flame2();
	this.instance.setTransform(-11.8,-10);

	this.instance_1 = new lib.flame1();
	this.instance_1.setTransform(-10,-7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-10,35,14);


(lib.bullet = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.dot();
	this.instance.setTransform(-10,-7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-7,10,10);


(lib.hero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fly:0,shield:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.gotoAndPlay("shield");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// shield
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FE9900").ss(2.5,0,0,4).p("AF7AAQAACdhvBvQhvBvidAAQicAAhvhvQhvhvAAidQAAicBvhvQBvhvCcAAQCdAABvBvQBvBvAACcg");
	this.shape.setTransform(0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(2.5,0,0,4).p("AF7AAQAACdhvBvQhvBvidAAQicAAhvhvQhvhvAAidQAAicBvhvQBvhvCcAAQCdAABvBvQBvBvAACcg");
	this.shape_1.setTransform(0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#33FF99").ss(2.5,0,0,4).p("AF7AAQAACdhvBvQhvBvidAAQicAAhvhvQhvhvAAidQAAicBvhvQBvhvCcAAQCdAABvBvQBvBvAACcg");
	this.shape_2.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).wait(2));

	// flames
	this.instance = new lib.fire();
	this.instance.setTransform(-47,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7));

	// detail
	this.instance_1 = new lib.ship();
	this.instance_1.setTransform(-30,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.8,-20,103.8,99);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;