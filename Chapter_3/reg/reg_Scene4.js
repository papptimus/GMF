(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/believe_rock.mp3?1498164302671", id:"believe_rock"},
		{src:"sounds/boo.mp3?1498164302672", id:"boo"},
		{src:"sounds/compete_copy.mp3?1498164302672", id:"compete_copy"},
		{src:"sounds/competed_copy.mp3?1498164302672", id:"competed_copy"},
		{src:"sounds/dive.mp3?1498164302672", id:"dive"},
		{src:"sounds/doveordived.mp3?1498164302672", id:"doveordived"},
		{src:"sounds/flew.mp3?1498164302672", id:"flew"},
		{src:"sounds/fly.mp3?1498164302672", id:"fly"},
		{src:"sounds/havedived.mp3?1498164302672", id:"havedived"},
		{src:"sounds/haveflown.mp3?1498164302672", id:"haveflown"},
		{src:"sounds/irregularpastga.mp3?1498164302672", id:"irregularpastga"},
		{src:"sounds/irregularpastparticiplega.mp3?1498164302672", id:"irregularpastparticiplega"},
		{src:"sounds/irregularpresentGA.mp3?1498164302672", id:"irregularpresentGA"},
		{src:"sounds/irregularverbs1.mp3?1498164302672", id:"irregularverbs1"},
		{src:"sounds/irregularverbsformthepasttense.mp3?1498164302672", id:"irregularverbsformthepasttense"},
		{src:"sounds/laymeanstoplaceortoput.mp3?1498164302672", id:"laymeanstoplaceortoput"},
		{src:"sounds/liemeanstoreclineortorest.mp3?1498164302672", id:"liemeanstoreclineortorest"},
		{src:"sounds/perc_techno.mp3?1498164302672", id:"perc_techno"},
		{src:"sounds/regularandirregularverbs.mp3?1498164302672", id:"regularandirregularverbs"},
		{src:"sounds/regularverbsformtheirpasttense.mp3?1498164302672", id:"regularverbsformtheirpasttense"},
		{src:"sounds/sound_over1.mp3?1498164302672", id:"sound_over1"},
		{src:"sounds/TherearemanymoreIrregularVerbsyoushouldknow.mp3?1498164302672", id:"TherearemanymoreIrregularVerbsyoushouldknow"},
		{src:"sounds/twotroublesomeverbsarelievslay.mp3?1498164302672", id:"twotroublesomeverbsarelievslay"},
		{src:"sounds/whistles_crowd.mp3?1498164302672", id:"whistles_crowd"},
		{src:"sounds/yeah.mp3?1498164302672", id:"yeah"}
	]
};



// symbols:



(lib.skiptomenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AATApQgLAGgMAAQgMAAgHgFQgJgGgBgKQgEgYABgQQgBgMADgPQABgIAHAAQAEAAADADQACACAAAEIgBANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIgBgPQAAgTACgOQABgIAIAAQADAAADACQADADgBADIgBAhIAAARIAAATIAAAGIAAAGQABAEgDACQgDADgDAAQgHAAgCgJg");
	this.shape.setTransform(16.7,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAVAqIgDgTIgBgTIABgGIAAgJQAAgSgHgBQgKAAgHAMQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDACgEAAQgDAAgDgCQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgDACgDQADgDADABQAIAAABALIAAAKQAPgUAOAAQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCADQgDABgEAAQgHABgBgJg");
	this.shape_1.setTransform(7.5,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgQATgBQAOAAAJAGQALAFAAANQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIADAIAAQAGAAAIgBQAKgDADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKABgHAIg");
	this.shape_2.setTransform(-2.2,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_3.setTransform(-14.1,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AkZh7IIzAAIAAD3IozAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkZB8IAAj3IIzAAIAAD3g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAVAuQgMAGgOAAQgMAAgJgGQgJgGgBgMQgEgZAAgSQAAgNADgRQABgJAIAAQAEAAADADQADADAAAEIgCAOIgBAPIABAZQABAMACAHIAGADIAGAAQALAAAPgEIAAgTIAAgRQAAgVABgPQABgJAJAAQAEAAADACQADADgBAEIgBAlIAAATIAAAVIAAAGIAAAHQAAAEgCACQgDADgEAAQgIAAgCgJg");
	this.shape_6.setTransform(18.3,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAvIgDgWIgBgVIAAgHIABgJQAAgVgIAAQgLAAgIANQgJALgFAQIgBAKIAAAJIAAAJIABAJQAAAEgDADQgCACgFAAQgEAAgCgCQgDgDAAgEIgBgJIAAgJIABgaIACgbIgBgJIAAgJQAAgFADgCQACgDAEAAQAJAAABANIAAALQARgWAPAAQAPAAAGAOQAFAJAAASIAAAKIAAAHQAAAIACAMQACANAAAIQAAAEgDADQgDADgEAAQgIAAgBgJg");
	this.shape_7.setTransform(8.2,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggApQgPgMAAgWQAAgXAMgRQAOgSAVAAQAPAAAKAFQANAHAAAOQAAAJgMAIQgEAEgQAFIgjASQAFAIAJAEQAIAEAJAAQAHAAAIgDQALgDAEgFQADgFAEAAQADAAADACQADADAAADQAAALgRAIQgPAGgOAAQgVAAgNgLgAgTgZQgHAJgEARIAdgMQAQgJAIgGQgJgIgOAAQgLAAgIAJg");
	this.shape_8.setTransform(-2.4,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEA5QgDgDAAgFQAAgLgCgXQgDgVAAgMQAAgKgCgGQgHADgHAHIgMANIgEAGIgCAPIgBARIABAIIABAIQAAAEgDACQgDADgEAAQgLAAAAgZIACgRIABgPIgBgQIgBgPQAAgWAKAAQADAAAEADQADAEAAADIgBAGIAAAGIAAAKQAFgKAKgJQAJgIAHAAQAPAAAEAPQAGgHAHgDQAHgEAKAAQAQAAAGARIAEAcIAHA1QAAAEgDADQgDACgEAAQgIAAgBgIQgCgLgCgTIgDgcIgDgNQgEgJgEAAQgDAAgKAGQgJAGgDADIAAASIADAYQACAQAAAJQAAAFgCADQgDACgEAAQgCAAgDgCg");
	this.shape_9.setTransform(-15.6,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AE3CJIptAAIAAkRIJtAAg");
	this.shape_10.setTransform(0,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFFF").s().p("Ak2CJIAAkRIJsAAIAAERg");
	this.shape_11.setTransform(0,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATApQgLAGgMAAQgMAAgHgFQgJgGgBgKQgEgYABgQQgBgMADgPQABgIAHAAQAEAAADADQACACAAAEIgBANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIgBgPQAAgTACgOQABgIAIAAQADAAADACQADADgBADIgBAhIAAARIAAATIAAAGIAAAGQABAEgDACQgDADgDAAQgHAAgCgJg");
	this.shape_12.setTransform(16.7,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVArIgDgUIgBgTIABgHIAAgHQAAgUgHAAQgKAAgHAMQgIALgFAOIgBAJIAAAIIAAAIIABAIQAAAEgCACQgDACgEAAQgDAAgDgCQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgEACgCQADgCADgBQAIAAABAMIAAAKQAPgTAOgBQAOAAAFANQAEAIAAARIAAAIIAAAGIACAUQACALAAAHQAAAEgCACQgDACgEABQgHgBgBgHg");
	this.shape_13.setTransform(7.5,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAlQgNgLAAgTQAAgVALgPQAMgSATABQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIAEAIAAQAGgBAIgCQAKgDADgEQADgFAEAAQADAAACACQACACAAAEQAAAJgPAIQgOAFgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNgBQgKAAgHAJg");
	this.shape_14.setTransform(-2.2,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_15.setTransform(-14.1,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AEah7IAAD3IozAAIAAj3g");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AkZB8IAAj3IIzAAIAAD3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-16.9,58.6,30.5);


(lib.general_buttoncolor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{resetRed:1});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_8 = function() {
		this.gotoAndPlay("resetRed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D5FFD7","#61EF01","#1DA400","#004A00"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgvAAgjgjQgjgjAAgwQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvQAAAwgjAjQgjAjgwAAIAAAAg");
	this.shape.setTransform(11.9,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#EC0000","#9D0000","#480000"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgvAAgjgjQgjgjAAgwQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvQAAAwgjAjQgjAjgwAAIAAAAg");
	this.shape_1.setTransform(11.9,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},8).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.7,23.6);


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj9CqIAAlSIH7AAIAAFSg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.Copyright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbAHIgDgKIgEAKQgEAIgDAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAgBIgCgIIgBgHQgGASgCAAIgDgBIgBgCIABgCQADgFABgFIACgNQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAEAAACAJIADAKIACgGIADgJQADgEACAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAEAKIACAGIACAIIABACIgBACIgCABQgDAAgDgJgAgTANIgBgIIAAgGIgBgHIgFAAIgGAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAFABIAEAAIAPAAIADgBIAEAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAAAAAABQAAAAgBAAIgOAAIAAAIIABAFIABAEIABAEIgCACIgCABQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAg");
	this.shape.setTransform(57.3,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAYQgGgDgBgEIABgDQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEACIAEABIAFABIAFgBQADgBAAgDQABgGgJgCIgCgBIgIgDQgEAAAAgFQAAgKAIgEIAHgCIAIgDIAEgBIADABIABAEIABADIAAAEIgBADIgCABQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgCgFIgJADQgFADgBAEIADABQAIACAFACQAHADAAAJQAAAHgGAEQgFADgGAAQgFAAgGgCg");
	this.shape_1.setTransform(51,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLATQgHgGABgKQAAgGAFgKQAHgKAGAAQAEAAAGACQAGACABAEIgBADQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBIgBgBQgDgCgGAAQgCAAgFAIQgDAHAAADQAAAGADAEQAEADAEAAIAGgCIAEgCIACgBIAEABIABADQgBADgGADQgGADgEAAQgHAAgGgFg");
	this.shape_2.setTransform(46.6,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAfQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIAAgJIAAgIIAAgKIAAgIQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIACgBIACABQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAIIgBAKIAAAIIABAJQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAIgBABIgDgBgAgBgXQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQABABAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_3.setTransform(43.1,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAKAVIgBgJIgBgKIABgDIAAgDQAAgKgEAAQgFAAgCAFQgEAGgCAGIgBAEIAAAFIAAADIAAAFIgBADIgDABIgDgBIgBgDIAAgFIgBgDIABgMIAAgLIAAgFIAAgEIABgDIAEgBQAEAAAAAFIAAAGQAHgKAGAAQAHAAADAGQACAEAAAJIAAAEIAAACIABAKIABAJIgBADIgDABQgEAAgBgEg");
	this.shape_4.setTransform(39.5,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAWIgDgDIgIADIgDABQgKABgFgHQgFgFAAgLQAAgJAIgHQAHgIAIAAQAEAAAFACQAGADAAADIgBACIgBAFIAAAJIABAIIACAIIACACIAAABIgBADIgDABIgDgCgAgGgKQgFAGAAAGQAAAGADAEQACAEAFgBQADABADgCIAEgDIgBgPIAAgFIABgEIgDgBIgCgBQgFAAgFAFg");
	this.shape_5.setTransform(34.8,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AALAhIgBgLIgBgKIAAgDIAAgEQAAgGgEAAQgFAAgDADIgGAKQAAARgCACQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgDIABgBIAAgHIAAgHIAAgeIABgHIgBgFIAAgEQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAEAAAAAEIABAIIAAAKIAAAJIAAAEQADgFAEgCQACgDAFAAQAHAAADAFQABADABAGIABAJIAAAIIACAKIAAABQAAABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIgDABQgEAAgBgDg");
	this.shape_6.setTransform(30,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLATQgHgGABgKQAAgGAFgKQAHgKAGAAQAEAAAGACQAGACABAEIgBADQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBIgBgBQgDgCgGAAQgCAAgFAIQgDAHAAADQAAAGADAEQAEADAEAAIAGgCIAEgCIACgBIAEABIABADQgBADgGADQgGADgEAAQgHAAgGgFg");
	this.shape_7.setTransform(25,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOATQgGgGAAgKQAAgKAFgHQAGgJAJAAQAGABAFACQAGADAAAHQAAAEgFADIgKAEIgOAHQACAEAEABQAEADACAAIAIgBQAFgCABgDQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIADAAIABADQAAAFgIADQgGADgHABQgIgBgGgEgAgIgKQgDAEgCAGIANgFQAGgDAEgDQgEgDgGgBQgEAAgEAFg");
	this.shape_8.setTransform(20.3,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAaAgIgCgGIgBgIQgCgHgEgWIgJAYIgDAJIgDAIQgBAEgCAAQgDgBgBgDIgCgEIgBgFIgIgfIgCAHIgFAWIgCAMQgBAEgDAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgEQAAgHADgLIAFgPIADgOQACgKABgDQACgCADAAQACAAACADQACAEABAMQADAOAFAPQAFgPAEgSIACgGIACgHQABgDADAAQAEAAACAIIACAKQADASADAOIACAHIACAHQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgCABQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBgBg");
	this.shape_9.setTransform(13.8,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAUIAAgdIAAgEIABgFQAAgEADAAQAFAAAAAHQAHgIAKAAQADAAACADQACACAAAGIAAADQgBAFgEAAQgEAAAAgEIAAgDIAAgEQgHABgCADQgEADgDAGIABAWQAAAEgFAAQgEAAAAgEg");
	this.shape_10.setTransform(5.1,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAOAWIgDgDIgIADIgDABQgKABgFgHQgFgFAAgLQAAgJAIgHQAHgIAIAAQAEAAAFACQAGADAAADIgBACIgBAFIAAAJIABAIIACAIIACACIAAABIgBADIgDABIgDgCgAgGgKQgFAGAAAGQAAAGADAEQACAEAFgBQADABADgCIAEgDIgBgPIAAgFIABgEIgDgBIgCgBQgFAAgFAFg");
	this.shape_11.setTransform(0.5,2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBAZQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIgBgPIgBgOQAAgFgBgCQgDABgDADIgFAGIgDADIAAAGIgBAHIABAEIAAADQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgDABQgFAAAAgLIAAgIIABgGIgBgHIAAgHQAAgKAFAAIACACQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAAADIgBACIAAAFQADgFAEgDQAFgEADAAQAGAAACAHQACgEADgBQAEgCAEAAQAHAAADAIIACAMIADAYIgBADIgDABQgEAAgBgEIgBgOIgCgLIgBgGQgCgEgCAAIgFADIgGAEIAAAHIABALIABALIgBADIgDACQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape_12.setTransform(-5.2,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBAZQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIgBgPIgBgOQABgFgCgCQgDABgDADIgFAGIgCADIgBAGIgBAHIABAEIABADQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAIgDABQgFAAAAgLIABgIIAAgGIAAgHIgBgHQAAgKAEAAIADACQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAAADIgBACIAAAFQADgFAEgDQAFgEADAAQAGAAABAHQADgEADgBQADgCAFAAQAHAAADAIIACAMIADAYIgCADIgCABQgEAAgBgEIgCgOIgBgLIgBgGQgCgEgCAAIgFADIgGAEIAAAHIABALIABALIgBADIgDACQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape_13.setTransform(-12.2,2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAOAWIgDgDIgIADIgDABQgKABgFgHQgFgFAAgLQAAgJAIgHQAHgIAIAAQAEAAAFACQAGADAAADIgBACIgBAFIAAAJIABAIIACAIIACACIAAABIgBADIgDABIgDgCgAgGgKQgFAGAAAGQAAAGADAEQACAEAFgBQADABADgCIAEgDIgBgPIAAgFIABgEIgDgBIgCgBQgFAAgFAFg");
	this.shape_14.setTransform(-18.1,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAUIAAgdIAAgEIABgFQAAgEADAAQAFAAAAAHQAHgIAKAAQADAAACADQACACAAAGIAAADQgBAFgEAAQgEAAAAgEIAAgDIAAgEQgHABgCADQgEADgDAGIABAWQAAAEgFAAQgEAAAAgEg");
	this.shape_15.setTransform(-22.4,2.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAeQgFgGgBgMQABgMAFgKQAFgMAIgIQAHgEAEAAQAEAAAGACQAIAEAAADIgBADIgEABIgCgBQgHgDgEAAQgDgBgCAEIgGAGQgKAOAAAOQABAIACADQACAEAIAAQAGgBAGgFQAGgEACgLQgMABgGAEIgDABQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAIgEAXAAIADABIABACQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgDANgIAJQgJAHgKABQgKgBgGgFg");
	this.shape_16.setTransform(-27.7,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAhIgBgDIACgJIAKgWQAFgOAHgIIABgBIgVAAIgJgBQgFAAAAgEQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAQAAIAPABIAIAAQAFAAAAACQAAADgDADIgEAFQgGAGgFAKIgHAPIgCAKIgEAKQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgDgBg");
	this.shape_17.setTransform(-36.2,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AABAiIgHAAIgFgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgEAIAAIACAAIABAAIAAgHIgBgGIABgPIABgRQgFAFgCAAIgDgBIgBgDQAAgDADgCIAHgGQACgEAEAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAADIAAADIAAAEIAAAEIgBAPIgBANIAAAGIABAGIAFAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABIAAADIAAADIgDABg");
	this.shape_18.setTransform(-41,1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSAXQgFgKAAgNQAAgMAGgKQAHgMAKAAQAMABAGAJQAGAJAAANQAAARgGAKQgGAJgMAAQgMABgGgMgAgLgRQgEAIAAAJQAAAMAEAHQAEAHAHAAQAIABAEgLQADgIAAgJQAAgMgDgGQgEgGgIAAQgGAAgFAIg");
	this.shape_19.setTransform(-45.9,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AANAhIgDgBIgHAAIgFABIgFAAIgFAAIgBAAIgCAAQgDAAgBgDIAAgFQAAgKAGgHQACgDALgFIAHgHQADgEAAgGQAAgDgDgCQgDgCgDAAQgDAAgDADIgGAEIgDACQgFAAAAgEQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAFgFAEgCQAFgDAEAAQAHAAAFAEQAGAEAAAHIgBAIIgEAHQgDACgIAFQgGAFgDADQgFAFABAHIAJgBIALAAIAGABQAEABAAADQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgDABIgDAAg");
	this.shape_20.setTransform(-51.3,1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAAQAAgKALgJQALgKALAAQAOAAAHAIQAHAIAAAMQAAAJgJAKQgKALgMAAIAAABQgeAAAAgegAgOgOQgIAGAAAIQAAAMAGAFQAGAEAKAAQAJAAAIgIQAGgIAAgGQAAgJgEgFQgFgGgIAAIgCAAQgKAAgIAHgAgKAJQgGgEAAgFQAAgGAIgFQAGgFAFAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAABAAAAQgBABAAAAQgBAAgBAAIgCgBIgBAAQgDAAgEADQgEACAAADQAAABADACIAFABQABAAAEgCIAEgCIADAAIABADQAAADgEADQgGADgDAAQgFAAgFgDg");
	this.shape_21.setTransform(-57.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-7.1,126.6,16.6);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAlaAVAMhKzAAAMAAAgp/MBKzAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DDF5FF","#3399FF"],[0,1],0,-134.5,0.1,134.6).s().p("EglZAVAMAAAgp/MBKzAAAMAAAAp/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240.9,-135.9,481.9,272);


(lib.goNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,11.3).s().p("AhLAqQghgSACgYQgCgXAhgRQAggTArAAQAsAAAgATQAfARAAAXQAAAYgfASQggASgsAAQgrAAgggSg");
	this.shape.setTransform(22.8,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.502)").s().p("AhThcICoBdIioBcg");
	this.shape_1.setTransform(25.1,20.4);

	this.blinker = new lib.general_buttoncolor();
	this.blinker.setTransform(23.4,20.1,1.5,1.5,0,0,0,11.9,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,14.8).s().p("AhiA3QgrgXACggQgCgfArgWQApgYA5AAQA5AAAqAYQAqAWAAAfQAAAggqAXQgqAXg5AAQg5AAgpgXg");
	this.shape_2.setTransform(23.4,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1,3,true).p("AAACxQhIAAg0g0Qg0g1AAhIQAAhHA0g1QA0g0BIAAQBJAAA0A0QA0A1AABHQAABIg0A1Qg0A0hJAAg");
	this.shape_3.setTransform(23.3,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(103,103,103,0.839)","rgba(134,134,134,0)"],[0.678,0.918],-0.8,0,0,-0.8,0,24.9).s().p("AisCkQhFhEAAhgQAAhgBFhDQBEhFBhAAQBfAABBAwQBCAwAVCqQAVCskMAbQhhAAhEhFgAgHCQQBEAAAzgwIABAAIADgEQA0g0AAhHQAAhJg0g0IgFgFIgBgBQgyguhDAAIAAAAIgBAAIAAAAIgBAAQhEAAgyAuIgBABIgCACIgBABIAAAAIgCACQg0A0AABJQAABHA0A0IACACIABABQAzAxBHAAIAAAAIAAAAIAAAAIAAAAQhHAAgzgxIgBgBIgCgCQg0g0AAhHQAAhJA0g0IACgCIAAAAIABgBIACgCIABgBQAyguBEAAIABAAIAAAAIABAAIAAAAQBDAAAyAuIABABIAFAFQA0A0AABJQAABHg0A0IgDAEIgBAAQgzAwhEAAIAAAAIgBAAIABAAIAAAAg");
	this.shape_4.setTransform(24.2,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33FFFF").s().p("AioCqQhGhHAAhjQAAhiBGhGQBGhHBiAAQBjAABGBHQBHBGgBBiQABBjhHBHQhGBGhjAAQhiAAhGhGg");
	this.shape_5.setTransform(24.4,21.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099FF").s().p("AioCqQhGhHAAhjQAAhiBGhGQBGhHBiAAQBjAABGBHQBHBGgBBiQABBjhHBHQhGBGhjAAQhiAAhGhGg");
	this.shape_6.setTransform(24.4,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.5,46.7);


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,65,34);


// stage content:
(lib.reg_Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene4:0,"scene4":328,scene4_repeat:330});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		
		function openNext(){
		
		 window.open ("reg_Scene5.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("reg_Scene3.html","_self");
		}
		playSound("perc_techno",-1);
	}
	this.frame_2 = function() {
		playSound("irregularverbs1");
	}
	this.frame_71 = function() {
		playSound("irregularpresentGA");
	}
	this.frame_151 = function() {
		playSound("irregularpastga");
	}
	this.frame_237 = function() {
		playSound("irregularpastparticiplega");
	}
	this.frame_328 = function() {
		this.play();
	}
	this.frame_329 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_335 = function() {
		this.gotoAndPlay("scene4_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(69).call(this.frame_71).wait(80).call(this.frame_151).wait(86).call(this.frame_237).wait(91).call(this.frame_328).wait(1).call(this.frame_329).wait(6).call(this.frame_335).wait(1));

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgeA8QgMgNAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgHAGAAQAIAAAAAIQAAAMgDAqIgBAYQAAAdADAPIAAACQAAAEgDACQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgGAAQgSABgMgMgAgTABQgIAIAAASQAAALAIAJQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgKQgDgHgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape.setTransform(446.6,211.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgRATAAQAOABAJAFQALAGAAAMQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgCADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_1.setTransform(436.7,213.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgJAoIgNgjIgQgnIAAgEQgBgDADgDQADgDAEAAQAFAAACAGIAWA7QAFgOAKgZIAIgTQACgGAFAAQAEAAACADQAEACAAAEQAAADgPAiIgTAoQABAIgHAAQgGAAgDgIg");
	this.shape_2.setTransform(427.4,213.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgHA/QgCgDgBgEIAAgPIAAgQIAAgVIABgSQABgEACgDQACgCAEAAQACAAADACQABADAAAEIAAASIgBAVIABAQIAAAPQgBAEgCADQgCADgCgBQgEABgCgDgAgEgwQgEgCAAgEQAAgFAEgCQADgDACgBQAEABADADQADACABAFQgBAEgDACQgDAEgEAAQgCAAgDgEg");
	this.shape_3.setTransform(420.5,211.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgeA8QgMgNAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgHAGAAQAIAAAAAIQAAAMgDAqIgBAYQAAAdADAPIAAACQAAAEgDACQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgGAAQgSABgMgMgAgTABQgIAIAAASQAAALAIAJQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgKQgDgHgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_4.setTransform(412.5,211.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgXAwQgOgFAAgIQAAgEADgDQADgCADAAQADAAAEAEQADACAHACIAKABQAFAAAGgCQAIgDAAgFQAAgMgRgEIgHgCQgLgDgFgDQgIgDAAgLQAAgRASgJIAPgFIAQgGQAEgCAEABQAEgBACADQADADAAAEIABAHIABAIQAAAEgCACQgDADgEAAQgFAAgBgEQgCgCgBgIIgUAHQgMAGAAAHIAFACQASAEAKAGQAOAHAAASQAAAOgMAHQgKAGgOABQgMAAgKgFg");
	this.shape_5.setTransform(397.2,213.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAcAtIgGgHIgPAHQgHACgCAAQgUAAgKgLQgJgMAAgWQAAgTAPgPQAPgQASAAQAHAAAKAFQAMAFAAAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAALACAHIAFAPIACAEIABACQAAADgDADQgCADgDgBQgCAAgEgDgAgOgVQgJAMAAAMQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEgBQgMABgKAKg");
	this.shape_6.setTransform(388.5,214);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAYBCIgEgUIgCgVIAAgHIABgHQAAgPgJAAQgKAAgHAIQgFAGgHAOQgBAigDAGQgCAFgFAAQgEAAgCgCQgEgDAAgDIABgEIACgNIAAgNIAAg/IABgOIgBgJIgBgIQAAgEADgCQACgDAEAAQAHAAABAIIACAQIgBATIgBATIAAAIQAIgKAIgFQAGgEAJAAQAPAAAFAJQAFAHAAAOIABAQIABATIADASIAAACQAAAEgCACQgDADgDAAQgGAAgCgHg");
	this.shape_7.setTransform(378.8,211.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgeA8QgMgNAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgHAGAAQAIAAAAAIQAAAMgDAqIgBAYQAAAdADAPIAAACQAAAEgDACQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgGAAQgSABgMgMgAgTABQgIAIAAASQAAALAIAJQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgKQgDgHgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_8.setTransform(292.8,211.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgRATAAQAOABAJAFQALAGAAAMQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgCADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_9.setTransform(282.9,213.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgJAoIgNgjIgQgnIgBgEQABgDACgDQADgDADAAQAGAAACAGIAWA7QAFgOAKgZIAIgTQACgGAFAAQAEAAADADQADACAAAEQAAADgPAiIgTAoQABAIgHAAQgFAAgEgIg");
	this.shape_10.setTransform(273.6,213.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgHA/QgCgDgBgEIAAgPIAAgQIAAgVIABgSQABgEACgDQACgCAEAAQACAAADACQABADAAAEIAAASIgBAVIAAAQIAAAPQAAAEgCADQgCADgCgBQgEABgCgDgAgEgwQgEgCAAgEQAAgFAEgCQADgDACgBQAEABADADQAEACAAAFQAAAEgEACQgDAEgEAAQgCAAgDgEg");
	this.shape_11.setTransform(266.7,211.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgeA8QgMgNAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgHAGAAQAIAAAAAIQAAAMgDAqIgBAYQAAAdADAPIAAACQAAAEgDACQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgGAAQgSABgMgMgAgTABQgIAIAAASQAAALAIAJQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgKQgDgHgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_12.setTransform(258.7,211.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgjBJQgCgCAAgEIAAgCQAHgUATgjQARghAHgTQALggAGAAQADAAADACQACADAAADIgBAFIgKAXQgFARgMAVIgRAiIgQAjQgCAGgEAAQgDAAgDgCg");
	this.shape_13.setTransform(248.9,211.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgRATAAQAOABAJAFQALAGAAAMQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgCADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_14.setTransform(239.5,213.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgIAoIgOgjIgQgnIgBgEQAAgDADgDQADgDADAAQAGAAACAGIAWA7QAFgOAKgZIAHgTQADgGAFAAQAEAAADADQACACAAAEQAAADgOAiIgSAoQgBAIgGAAQgGAAgCgIg");
	this.shape_15.setTransform(230.2,213.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgZAlQgMgMAAgVQgBgSALgPQAMgRAUgBQARAAAJAQQAIANgBASQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgQQgGAKAAAKQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgNQABgfgTgBQgLAAgHANg");
	this.shape_16.setTransform(220.9,214);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgeA8QgMgNAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgHAGAAQAIAAAAAIQAAAMgDAqIgBAYQAAAdADAPIAAACQAAAEgDACQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgGAAQgSABgMgMgAgTABQgIAIAAASQAAALAIAJQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgKQgDgHgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_17.setTransform(211,211.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgRATAAQAOABAJAFQALAGAAAMQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgCADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_18.setTransform(130.1,213.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgJAoIgNgjIgPgnIgBgEQgBgDADgDQADgDAEAAQAFAAACAGIAWA7QAFgOAKgZIAIgTQACgGAFAAQAEAAACADQAEACAAAEQAAADgPAiIgSAoQAAAIgHAAQgFAAgEgIg");
	this.shape_19.setTransform(120.8,213.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgHA/QgDgDABgEIgBgPIAAgQIABgVIAAgSQABgEACgDQACgCAEAAQACAAADACQACADAAAEIgBASIgBAVIABAQIAAAPQgBAEgCADQgCADgCgBQgEABgCgDgAgFgwQgDgCAAgEQAAgFADgCQAEgDACgBQAEABADADQADACAAAFQAAAEgDACQgDAEgEAAQgCAAgEgEg");
	this.shape_20.setTransform(114,211.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgeA8QgMgNAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgHAGAAQAIAAAAAIQAAAMgDAqIgBAYQAAAdADAPIAAACQAAAEgDACQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgGAAQgSABgMgMgAgTABQgIAIAAASQAAALAIAJQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgKQgDgHgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_21.setTransform(105.9,211.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AAVAqIgDgTIgBgTIABgGIAAgIQAAgUgHABQgKAAgHALQgIAKgFAPIgBAJIAAAIIAAAIIABAIQAAAEgCACQgDADgEAAQgDAAgDgDQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgDACgDQADgCADAAQAIgBABAMIAAAKQAPgTAOAAQAOAAAFAMQAEAIAAARIAAAIIAAAHIACATQACALAAAHQAAAEgCADQgDACgEAAQgHAAgBgJg");
	this.shape_22.setTransform(452.1,279.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgdAmQgNgMAAgTQAAgVALgPQAMgRATgBQAOAAAJAGQALAFAAANQAAAJgKAHQgEAEgOAEIggAQQAFAHAHAEQAIADAIABQAGAAAIgCQAKgEADgEQADgFAEAAQADAAACADQACABAAAEQAAAJgPAHQgOAGgMABQgSgBgNgJgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNABQgKAAgHAIg");
	this.shape_23.setTransform(442.5,279.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgeA7QgMgMAAgTQAAgYAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgIAGABQAIgBAAAJQAAAMgDAqIgBAXQAAAeADAPIAAACQAAADgDADQgCACgDAAQgGAAgCgIQgHAFgHACQgGADgGAAQgSAAgMgNgAgTABQgIAJAAARQAAAMAIAIQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgLQgDgGgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_24.setTransform(432.1,277.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgeA7QgMgMAAgTQAAgYAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgIAGABQAIgBAAAJQAAAMgDAqIgBAXQAAAeADAPIAAACQAAADgDADQgCACgDAAQgGAAgCgIQgHAFgHACQgGADgGAAQgSAAgMgNgAgTABQgIAJAAARQAAAMAIAIQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgLQgDgGgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_25.setTransform(421.5,277.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgHA/QgCgCgBgEIAAgQIgBgQIABgUIABgTQAAgEADgDQADgCADAAQACAAACACQACADAAAEIAAATIgBAUIAAAQIAAAQQABAEgDACQgCACgCABQgEgBgCgCgAgEgwQgDgCgBgFQABgDADgEQADgDACAAQAEAAADADQAEAEAAADQAAAFgEACQgDADgEAAQgCAAgDgDg");
	this.shape_26.setTransform(414,277.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_27.setTransform(407.2,279.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgXAxQgOgFAAgKQAAgDADgCQADgDADAAQADAAAEAEQADACAHABIAKABQAFAAAGgBQAIgDAAgGQAAgLgRgFIgHgCQgLgCgFgDQgIgDAAgKQAAgSASgJIAPgFIAQgGQAEgBAEAAQAEAAACACQADADAAAEIABAHIABAHQAAAFgCACQgDADgEgBQgFABgBgEQgCgCgBgHIgUAFQgMAGAAAJIAFABQASADAKAHQAOAHAAARQAAAPgMAIQgKAFgOAAQgMAAgKgDg");
	this.shape_28.setTransform(392.6,279.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgKAAgXQAAgTAPgPQAPgQASAAQAHAAAKAEQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBASQAAAKACAHIAFAPIACAFIABABQAAAEgDACQgCACgDABQgCAAgEgFgAgOgVQgJAMAAAMQAAAPAFAGQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEAAQgMgBgKALg");
	this.shape_29.setTransform(383.9,279.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AAYBCIgEgUIgCgVIAAgHIABgHQAAgPgJAAQgKAAgIAIQgEAGgHAOQAAAigDAGQgDAFgFAAQgEAAgCgCQgDgDAAgDIABgEIABgNIAAgNIAAg/IABgOIgBgJIgBgIQAAgEACgCQADgDAEAAQAHAAABAIIACAQIgBATIAAATIAAAIQAHgKAIgFQAHgEAIAAQAPAAAGAJQAEAHAAAOIAAAQIACATIAEASIAAACQgBAEgCACQgCADgEAAQgGAAgCgHg");
	this.shape_30.setTransform(374.2,277.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgdAmQgNgMAAgTQAAgVALgPQAMgRATgBQAOAAAJAGQALAFAAANQAAAJgKAHQgEAEgOAEIggAQQAFAHAHAEQAIADAIABQAGAAAIgCQAKgEADgEQADgFAEAAQADAAACADQACABAAAEQAAAJgPAHQgOAGgMABQgSgBgNgJgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNABQgKAAgHAIg");
	this.shape_31.setTransform(266.4,279.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgeA7QgMgMAAgTQAAgYAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgIAGABQAIgBAAAJQAAAMgDAqIgBAXQAAAeADAPIAAACQAAADgDADQgCACgDAAQgGAAgCgIQgHAFgHACQgGADgGAAQgSAAgMgNgAgTABQgIAJAAARQAAAMAIAIQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgLQgDgGgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_32.setTransform(256,277.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgZAlQgMgMAAgVQgBgRALgQQAMgSAUAAQARABAJAQQAIANgBARQAAASgKAOQgLAQgRAAQgOAAgLgLgAgOgRQgGALAAAKQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgMQABghgTAAQgLAAgHAMg");
	this.shape_33.setTransform(246,279.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_34.setTransform(237.3,279.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgdAmQgNgMAAgTQAAgVALgPQAMgRATgBQAOAAAJAGQALAFAAANQAAAJgKAHQgEAEgOAEIggAQQAFAHAHAEQAIADAIABQAGAAAIgCQAKgEADgEQADgFAEAAQADAAACADQACABAAAEQAAAJgPAHQgOAGgMABQgSgBgNgJgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNABQgKAAgHAIg");
	this.shape_35.setTransform(130.1,279.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgeA7QgMgMAAgTQAAgYAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgIAGABQAIgBAAAJQAAAMgDAqIgBAXQAAAeADAPIAAACQAAADgDADQgCACgDAAQgGAAgCgIQgHAFgHACQgGADgGAAQgSAAgMgNgAgTABQgIAJAAARQAAAMAIAIQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgLQgDgGgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_36.setTransform(119.7,277.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgHA/QgDgCAAgEIAAgQIgBgQIABgUIABgTQAAgEADgDQACgCAEAAQACAAACACQACADAAAEIAAATIgBAUIAAAQIAAAQQABAEgDACQgCACgCABQgEgBgCgCgAgEgwQgDgCAAgFQAAgDADgEQADgDACAAQAEAAAEADQADAEAAADQAAAFgDACQgEADgEAAQgCAAgDgDg");
	this.shape_37.setTransform(112.1,277.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_38.setTransform(105.3,279.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AAVArIgDgUIgBgTIABgGIAAgIQAAgUgHABQgKAAgHALQgIAKgFAPIgBAJIAAAIIAAAIIABAIQAAAEgCACQgDACgEABQgDgBgDgCQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgEACgCQADgDADAAQAIAAABAMIAAAKQAPgTAOAAQAOAAAFAMQAEAIAAARIAAAIIAAAHIACATQACALAAAHQAAAEgCADQgDACgEAAQgHgBgBgHg");
	this.shape_39.setTransform(448.9,246.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AgdAlQgNgKAAgUQAAgVALgPQAMgRATAAQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIADAIABQAGAAAIgCQAKgDADgFQADgFAEAAQADAAACACQACADAAADQAAAJgPAIQgOAFgMABQgSAAgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNAAQgKgBgHAJg");
	this.shape_40.setTransform(439.2,246.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgIA/IABggIAAgfIABgfIAAgfQAAgJAHAAQAIAAABAJIgBAfIAAAfIgCArIgBAUQAAAJgGAAQgJAAABgJg");
	this.shape_41.setTransform(431.7,244.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AgIA/IABggIAAgfIABgfIAAgfQAAgJAHAAQAIAAABAJIgBAfIAAAfIgCArIgBAUQAAAJgGAAQgJAAABgJg");
	this.shape_42.setTransform(426.8,244.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgKAAgXQAAgTAPgPQAPgPASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBASQAAAKACAGIAFAQIACAFIABABQAAAEgDACQgCACgDABQgCAAgEgFgAgOgUQgJALAAAMQAAAPAFAGQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEAAQgMAAgKALg");
	this.shape_43.setTransform(419.7,246.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AgNBLQgCgDAAgDIAAgCQACgMgBgNIAAgYIAAgXIgNAAQgJAAAAgIQAAgJAPAAIAIgBIABgNQADgTAIgKQAGgLAUAAQAMAAAAAJQABAIgLAAQgWAAgDAeIAAAFIATgBQAOAAABAJQAAAGgIACIgHAAIgUABIgBASIABARIAAAQQAAAQgBAKQAAAHgHAAQgDAAgDgCg");
	this.shape_44.setTransform(410.3,244.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgXAxQgOgGAAgJQAAgDADgCQADgDADAAQADAAAEAEQADACAHABIAKABQAFABAGgCQAIgDAAgGQAAgLgRgFIgHgCQgLgCgFgEQgIgCAAgKQAAgTASgHIAPgGIAQgGQAEgCAEAAQAEAAACADQADACAAAEIABAIIABAHQAAAEgCADQgDADgEgBQgFAAgBgDQgCgCgBgHIgUAFQgMAGAAAJIAFABQASADAKAHQAOAHAAARQAAAPgMAIQgKAFgOAAQgMAAgKgDg");
	this.shape_45.setTransform(395.9,246.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgKAAgXQAAgTAPgPQAPgPASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBASQAAAKACAGIAFAQIACAFIABABQAAAEgDACQgCACgDABQgCAAgEgFgAgOgUQgJALAAAMQAAAPAFAGQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEAAQgMAAgKALg");
	this.shape_46.setTransform(387.2,246.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AAYBCIgEgUIgBgVIAAgHIAAgHQAAgPgJAAQgKAAgHAIQgFAGgHAOQgBAigDAGQgCAFgFAAQgEAAgCgCQgEgDAAgDIABgEIACgNIAAgNIAAg/IABgOIgBgJIgBgIQAAgEADgCQACgDAEAAQAHAAABAIIACAQIgBATIgBATIAAAIQAIgKAIgFQAGgEAJAAQAPAAAFAJQAFAHAAAOIABAQIABATIADASIAAACQAAAEgCACQgDADgDAAQgGAAgCgHg");
	this.shape_47.setTransform(377.5,244.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AgJA/IABggIABgfIAAgfIABgfQAAgJAGAAQAJAAAAAJIAAAfIgBAfIgBArIAAAUQgCAJgFAAQgJAAAAgJg");
	this.shape_48.setTransform(263.9,244.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AgJA/IABggIABgfIAAgfIABgfQAAgJAGAAQAJAAAAAJIAAAfIgBAfIgBArIgBAUQgBAJgFAAQgJAAAAgJg");
	this.shape_49.setTransform(259,244.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AgdAlQgNgKAAgUQAAgVALgPQAMgRATAAQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIADAIABQAGAAAIgCQAKgDADgFQADgFAEAAQADAAACACQACADAAADQAAAJgPAIQgOAFgMABQgSAAgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNAAQgKgBgHAJg");
	this.shape_50.setTransform(251.7,246.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AgNBLQgDgDABgDIAAgCQACgMgBgNIAAgYIAAgXIgNAAQgJAAAAgIQAAgJAPAAIAIgBIABgNQADgTAHgKQAIgLATAAQAMAAAAAJQABAIgLAAQgWAAgDAeIAAAFIATgBQAOAAABAJQAAAGgHACIgIAAIgUABIAAASIAAARIAAAQQAAAQgBAKQAAAHgGAAQgEAAgDgCg");
	this.shape_51.setTransform(241.9,244.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgJA/IABggIABgfIAAgfIABgfQAAgJAGAAQAJAAAAAJIAAAfIgBAfIgBArIgBAUQgBAJgFAAQgJAAAAgJg");
	this.shape_52.setTransform(129.5,244.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AgJA/IABggIABgfIAAgfIABgfQAAgJAGAAQAJAAAAAJIAAAfIgBAfIgBArIgBAUQgBAJgFAAQgJAAAAgJg");
	this.shape_53.setTransform(124.5,244.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgKAAgXQAAgTAPgPQAPgPASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBASQAAAKACAGIAFAQIACAFIABABQAAAEgDACQgCACgDABQgCAAgEgFgAgOgUQgJALAAAMQAAAPAFAGQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEAAQgMAAgKALg");
	this.shape_54.setTransform(117.4,246.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AgNBLQgCgDAAgDIAAgCQABgMABgNIAAgYIAAgXIgPAAQgIAAgBgIQAAgJAQAAIAJgBIAAgNQADgTAHgKQAHgLAUAAQANAAAAAJQgBAIgKAAQgWAAgCAeIgBAFIAUgBQAOAAAAAJQgBAGgGACIgHAAIgUABIgBASIAAARIABAQQAAAQgCAKQAAAHgGAAQgEAAgDgCg");
	this.shape_55.setTransform(108.1,244.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AAVArIgDgUIgBgTIABgGIAAgIQAAgUgHABQgKgBgHAMQgIAKgFAPIgBAJIAAAIIAAAIIABAIQAAAEgCACQgDACgEAAQgDAAgDgCQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgDACgDQADgDADAAQAIAAABAMIAAAKQAPgTAOAAQAOAAAFAMQAEAIAAARIAAAIIAAAHIACATQACALAAAHQAAAEgCACQgDADgEAAQgHgBgBgHg");
	this.shape_56.setTransform(447.7,180.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AAFAZIgEgVIgBgRIgHAPIgNAkQgBADgDACQgCAFgGAAQgHABgGgbQgDgNgDgWIgCgNIgBgNQgBgEADgCQADgDADAAQAHAAACAIIABAMIACANIAFAmQAKgZAKgkQAEgJAFAAQAHAAACALIAGAfIAGAhIAGgYIAMguQABgFAGAAQAEAAACACQADADAAADIgBAEQgGAdgMAiQgCAIgGAIQgDAFgFAAQgJAAgGgYg");
	this.shape_57.setTransform(436.7,181.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AgZAlQgMgMAAgVQgBgSALgPQAMgRAUAAQARgBAJARQAIANgBARQAAASgKAOQgLAPgRABQgOAAgLgLgAgOgRQgGAKAAALQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgMQABghgTAAQgLAAgHAMg");
	this.shape_58.setTransform(425.7,181.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AgIA/IABggIAAgfIABgfIAAgfQAAgJAHAAQAIAAABAJIgBAfIAAAfIgCArIgBAUQAAAJgGAAQgJAAABgJg");
	this.shape_59.setTransform(418.7,178.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AgNBLQgCgDgBgDIABgCQABgMAAgNIAAgYIAAgXIgNAAQgKAAABgIQAAgJAPAAIAJgBIABgNQACgTAIgKQAGgLAUAAQAMAAAAAJQAAAIgLAAQgVAAgDAeIAAAFIAUgBQAOAAgBAJQABAGgIACIgGAAIgVABIgBASIABARIAAAQQAAAQgBAKQAAAHgHAAQgEAAgCgCg");
	this.shape_60.setTransform(411.4,179.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("AgXAxQgOgGAAgJQAAgDADgDQADgCADAAQADAAAEAEQADACAHACIAKAAQAFABAGgCQAIgDAAgGQAAgLgRgFIgHgCQgLgCgFgEQgIgDAAgJQAAgTASgHIAPgGIAQgGQAEgCAEAAQAEAAACADQADACAAAEIABAIIABAIQAAADgCADQgDACgEAAQgFAAgBgDQgCgCgBgHIgUAFQgMAHAAAIIAFABQASAEAKAGQAOAHAAARQAAAPgMAHQgKAHgOgBQgMAAgKgDg");
	this.shape_61.setTransform(397,180.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgLAAgWQAAgTAPgPQAPgPASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBARQAAAMACAFIAFAQIACAFIABABQAAADgDADQgCADgDAAQgCAAgEgFgAgOgUQgJALAAAMQAAAOAFAHQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEAAQgMAAgKALg");
	this.shape_62.setTransform(388.3,181.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AAYBCIgEgUIgCgVIAAgHIABgHQAAgPgJAAQgKAAgIAIQgEAGgHAOQAAAigEAGQgCAFgFAAQgEAAgCgCQgDgDAAgDIABgEIABgNIAAgNIAAg/IABgOIgBgJIgBgIQAAgEADgCQACgDAEAAQAHAAABAIIACAQIgBATIAAATIAAAIQAHgKAIgFQAHgEAIAAQAPAAAGAJQAEAHAAAOIAAAQIACATIAEASIAAACQAAAEgDACQgDADgDAAQgGAAgCgHg");
	this.shape_63.setTransform(378.6,178.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AAFAZIgEgVIgBgRIgGAPIgOAkQgBADgDACQgCAFgGAAQgHABgFgbQgEgNgDgWIgCgNIgBgNQAAgEADgCQACgDAEAAQAGAAACAIIACAMIABANIAFAmQAKgZALgkQACgJAGAAQAGAAADALIAFAfIAHAhIAHgYIAKguQACgFAGAAQAEAAADACQACADAAADIAAAEQgIAdgKAiQgDAIgFAIQgEAFgFAAQgKAAgFgYg");
	this.shape_64.setTransform(264,181.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AgdAlQgNgKAAgUQAAgVALgPQAMgSATABQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIAEAIAAQAGAAAIgDQAKgDADgEQADgFAEAAQADAAACACQACACAAAEQAAAJgPAIQgOAFgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNAAQgKgBgHAJg");
	this.shape_65.setTransform(253,181);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AgIA/IABggIAAgfIABgfIAAgfQAAgJAHAAQAJAAAAAJIgBAfIAAAfIgCArIAAAUQgCAJgFAAQgJAAABgJg");
	this.shape_66.setTransform(245.5,178.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AgNBLQgDgDAAgDIABgCQACgMAAgNIAAgYIAAgXIgPAAQgJAAAAgIQAAgJAQAAIAJgBIABgNQACgTAIgKQAHgLATAAQAMAAAAAJQAAAIgLAAQgVAAgCAeIgBAFIAUgBQAOAAgBAJQABAGgIACIgGAAIgVABIgBASIABARIAAAQQAAAQgBAKQAAAHgHAAQgEAAgCgCg");
	this.shape_67.setTransform(238.3,179.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AgWBEQgDgCAAgEQAAgJATgqIgfg6IgEgHQgDgEAAgCQAAgEADgDQADgCADAAQAEAAADADQAPAUAPAnIANgfIANgbQADgFAFAAQADAAADADQADACAAAEIgBAEIgfBAQgLAYgEAQIgGARQgCAHgGAAQgDAAgDgDg");
	this.shape_68.setTransform(124.6,183.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AgIA/IABggIAAgfIABgfIAAgfQAAgJAHAAQAJAAAAAJIgBAfIAAAfIgCArIAAAUQgCAJgFAAQgJAAABgJg");
	this.shape_69.setTransform(117.7,178.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AgNBLQgDgDAAgDIABgCQACgMAAgNIAAgYIAAgXIgPAAQgJAAABgIQgBgJAQAAIAJgBIABgNQACgTAIgKQAHgLATAAQAMAAAAAJQAAAIgLAAQgVAAgCAeIgBAFIAUgBQAOAAgBAJQABAGgIACIgGAAIgVABIgBASIABARIAAAQQAAAQgBAKQAAAHgHAAQgEAAgCgCg");
	this.shape_70.setTransform(110.5,179.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(2,1,1).p("Avao8IWrAAIaiAAAvao8IAAkMEghygI8ISYAAIAAWF");
	this.shape_71.setTransform(280.4,210);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(2,1,1).p("AAAtIIAAEMIAAWF");
	this.shape_72.setTransform(327,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(336));

	// Layer 9
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgHAHQgCgDAAgEQAAgDACgDQAEgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgEgDg");
	this.shape_73.setTransform(442.7,95.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgeA8QgMgNAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgHAGgBQAIAAAAAJQAAAMgDAqIgBAYQAAAdADAPIAAACQAAAEgDACQgCACgDAAQgGAAgCgIQgHAFgHACQgGADgGgBQgSABgMgMgAgTABQgIAIAAASQAAAMAIAIQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgKQgDgHgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_74.setTransform(435.1,88.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_75.setTransform(425.8,91.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgRAUAAQARAAAJAPQAIANgBASQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgQQgGAKAAAKQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgNQABgfgTgBQgLAAgHANg");
	this.shape_76.setTransform(416.4,91.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAFAZIgEgVIgBgRIgGAPIgOAkQgBADgDACQgCAFgGAAQgHABgFgbQgEgNgDgWIgCgNIgBgNQAAgEADgCQACgDAEAAQAGAAACAIIACAMIABANIAFAmQAKgZALgkQACgJAGAAQAGAAADALIAFAfIAHAhIAHgYIAKguQACgFAGAAQAEAAADACQACADAAADIAAAEQgIAdgKAiQgDAIgFAIQgEAFgFAAQgKAAgFgYg");
	this.shape_77.setTransform(405.7,91.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgEA+QgCgDgBgDIAAgKIABgKIgCgxIgTgCQgJgBABgIQAAgEACgCQACgDAEAAIASACIAAgMIAAgLQAAgEACgCQADgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCIANABQAEACAAAGQAAAEgCADQgCACgEAAIgEAAIgFAAIgLABIABAyIAAAEIAAAFQAAATgJAAQgCAAgCgCg");
	this.shape_78.setTransform(389.8,89.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAVAqIgDgTIgBgTIABgHIAAgIQAAgSgHgBQgKAAgHAMQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDABgEAAQgDAAgDgBQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgEACgCQADgCADgBQAIAAABAMIAAAKQAPgUAOAAQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCACQgDACgEAAQgHAAgBgIg");
	this.shape_79.setTransform(381.1,91.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgRATAAQAOABAJAEQALAGAAANQAAAJgKAHQgEAEgOAEIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_80.setTransform(371.5,91.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_81.setTransform(362.3,91.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgRATAAQAOABAJAEQALAGAAANQAAAJgKAHQgEAEgOAEIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_82.setTransform(353,91.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNBLQgDgDAAgDIABgCQACgMAAgNIAAgYIAAgXIgPAAQgJAAAAgIQAAgJAQAAIAJgBIABgNQACgTAHgKQAIgLATAAQANAAAAAJQAAAIgMAAQgVAAgCAeIgBAFIAUgBQANAAAAAJQAAAGgGACIgHAAIgUABIgCASIABARIABAQQgBAQgBAKQAAAHgHAAQgEAAgCgCg");
	this.shape_83.setTransform(343.2,89.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNBLQgDgDABgDIAAgCQABgMAAgNIAAgYIAAgXIgOAAQgIAAgBgIQABgJAPAAIAIgBIABgNQADgTAHgKQAIgLATAAQANAAAAAJQgBAIgKAAQgWAAgCAeIgBAFIATgBQAPAAAAAJQgBAGgGACIgIAAIgTABIgBASIAAARIABAQQAAAQgCAKQAAAHgGAAQgFAAgCgCg");
	this.shape_84.setTransform(334.1,89.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgHA/QgDgCAAgFIAAgPIgBgQIABgVIACgSQAAgEACgDQADgCADAAQACAAACACQACADAAAEIAAASIgBAVIAAAQIAAAPQAAAFgCACQgCADgCgBQgEABgCgDgAgFgwQgCgCAAgEQAAgFACgCQAEgDACAAQAEAAAEADQACACAAAFQAAAEgCACQgEAEgEAAQgCAAgEgEg");
	this.shape_85.setTransform(327.3,89);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgeA8QgMgNAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgHAGgBQAIAAAAAJQAAAMgDAqIgBAYQAAAdADAPIAAACQAAAEgDACQgCACgDAAQgGAAgCgIQgHAFgHACQgGADgGgBQgSABgMgMgAgTABQgIAIAAASQAAAMAIAIQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgKQgDgHgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_86.setTransform(319.3,88.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHQgHACgCAAQgUAAgKgLQgJgMAAgWQAAgTAPgPQAPgPASgBQAHABAKAEQAMAFAAAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAAMACAGIAFAPIACAEIABACQAAADgDADQgCACgDAAQgCAAgEgDgAgOgVQgJAMAAAMQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEgBQgMABgKAKg");
	this.shape_87.setTransform(304.1,91.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgeBEQgLgCAAgHQABgIAHAAIALABQAHACAJAAQAPgBAHgQQADgKABgXQgFAJgGAFQgHAEgHAAQgQAAgJgLQgKgLAAgPQAAgYAOgOQAOgPAWAAQAIAAAFACQAGACADAEQAKAAgBALIgCAQIgCARIgCAbQAAASgEALQgDAOgJAHQgLAIgRAAQgMAAgJgBgAgPgrQgIALAAAQQAAAMAFAFQAEAGAKAAQAHAAAIgIQAIgJABgJIAEgeQgDgDgEgBQgEgBgEAAQgPAAgJALg");
	this.shape_88.setTransform(289.2,93.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAVAqIgDgTIgBgTIABgHIAAgIQAAgSgHgBQgKAAgHAMQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDABgEAAQgDAAgDgBQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgEACgCQADgCADgBQAIAAABAMIAAAKQAPgUAOAAQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCACQgDACgEAAQgHAAgBgIg");
	this.shape_89.setTransform(280,91.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgHA/QgDgCAAgFIAAgPIgBgQIABgVIABgSQAAgEADgDQACgCAEAAQACAAACACQACADAAAEIAAASIgBAVIAAAQIAAAPQABAFgDACQgCADgCgBQgEABgCgDgAgEgwQgDgCAAgEQAAgFADgCQADgDACAAQAEAAAEADQADACAAAFQAAAEgDACQgEAEgEAAQgCAAgDgEg");
	this.shape_90.setTransform(272.8,89);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgXAwQgOgFAAgIQAAgEADgDQADgCADAAQADAAAEAEQADACAHACIAKABQAFgBAGgBQAIgDAAgFQAAgNgRgDIgHgCQgLgDgFgDQgIgDAAgLQAAgRASgJIAPgFIAQgGQAEgBAEAAQAEAAACACQADADAAAEIABAHIABAIQAAAEgCACQgDADgEAAQgFAAgBgEQgCgCgBgIIgUAHQgMAFAAAIIAFACQASADAKAHQAOAHAAASQAAAOgMAHQgKAHgOAAQgMAAgKgFg");
	this.shape_91.setTransform(265.4,90.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAUApQgLAGgNAAQgLAAgIgFQgJgGgBgKQgEgYAAgQQAAgMADgPQABgIAIAAQAEAAACADQADACAAAEIgCANIgBANIABAXQABALACAGIAFADIAGAAQAKAAANgDIAAgSIAAgPQAAgTACgOQABgIAHAAQAEAAACACQACADABADIgCAhIAAARIAAATIABAGIAAAGQgBAEgCACQgCADgEAAQgHAAgBgJg");
	this.shape_92.setTransform(256.7,91.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgWBEQgDgCAAgEQAAgJATgqIgfg6IgEgHQgDgEAAgCQAAgEADgDQADgCADAAQAEAAADADQAPAUAPAnIANgfIANgbQADgFAFAAQADAAADADQADACAAAEIgBAEIgfBAQgLAYgEAQIgGARQgCAHgGAAQgDAAgDgDg");
	this.shape_93.setTransform(241.6,93.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgaBCQgDADgDAAQgEAAgCgCQgCgCAAgDIAAgHIAAgHIAAgcIgBgaIAAgYIAAgZQAAgFADgEQACgGAGABQAGAAAAAHIgBAEIAAADIAAAUIgBAWQAIgFAHgDQAHgCAEAAQATAAAMAOQALAMAAATQAAAVgNANQgNAPgRAAQgNgBgMgEgAgMgDIgOAHIAAAQIAAANIAAAOIANAGQAFABAHAAQAKAAAIgJQAJgJAAgOQAAgNgGgIQgIgHgMAAQgFAAgHADg");
	this.shape_94.setTransform(232.1,88.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgRATAAQAOABAJAEQALAGAAANQAAAJgKAHQgEAEgOAEIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_95.setTransform(216.4,91.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgJA/IACggIAAgfIABgfIAAgfQAAgJAHAAQAIAAABAJIgBAfIAAAfIgCArIgBAUQgBAJgFAAQgJAAAAgJg");
	this.shape_96.setTransform(208.9,88.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AggBHQgDgDAAgDIAAgkIAAghIgBgjIgCgSQAAgGACgEQAEgFAEAAQAEAAACACQADACgBAEIAAADIgBAFQAIgFAHgDQAGgCAFAAQATAAAIAQQAGAMABAVQAAARgKAMQgMANgRAAQgHAAgLgCIAAAqQAAADgDADQgCACgEAAQgEAAgBgCgAgHgtQgEACgIAHIABAoQAKAEAIAAQAKAAAGgIQAGgGgBgLQAAgQgDgIQgFgIgIAAQgFAAgHAEg");
	this.shape_97.setTransform(201.7,93.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgHA/QgDgCABgFIgBgPIAAgQIABgVIABgSQgBgEADgDQADgCADAAQACAAADACQACADAAAEIgBASIgBAVIABAQIAAAPQAAAFgDACQgCADgCgBQgEABgCgDgAgFgwQgCgCAAgEQAAgFACgCQAEgDACAAQAEAAAEADQACACAAAFQAAAEgCACQgEAEgEAAQgCAAgEgEg");
	this.shape_98.setTransform(194.4,89);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgYAmQgMgLAAgTQAAgQALgTQAOgVAOAAQAJAAAKAEQAOAGAAAHQAAADgCADQgDACgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAIgEgDQgFgFgMAAQgGABgKAQQgHAOgBAJQABALAHAIQAIAFAJAAQAFAAAHgDIAKgEIADgCQAEAAADADQABACAAADQAAAHgNAGQgMAFgIAAQgPAAgNgLg");
	this.shape_99.setTransform(187.1,91.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgHA/QgDgCABgFIgBgPIAAgQIABgVIAAgSQABgEACgDQACgCAEAAQACAAADACQACADAAAEIgBASIgBAVIABAQIAAAPQgBAFgCACQgCADgCgBQgEABgCgDgAgFgwQgDgCAAgEQAAgFADgCQAEgDACAAQAEAAADADQADACAAAFQAAAEgDACQgDAEgEAAQgCAAgEgEg");
	this.shape_100.setTransform(180.1,89);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgEA+QgDgDAAgDIAAgKIABgKIgCgxIgUgCQgHgBgBgIQABgEACgCQACgDAEAAIASACIAAgMIAAgLQAAgEACgCQADgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIAMABQAEACAAAGQAAAEgCADQgCACgEAAIgFAAIgDAAIgNABIACAyIAAAEIAAAFQABATgKAAQgCAAgCgCg");
	this.shape_101.setTransform(173.1,89.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_102.setTransform(164.8,91.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHQgHACgCAAQgUAAgKgLQgJgMAAgWQAAgTAPgPQAPgPASgBQAHABAKAEQAMAFAAAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAAMACAGIAFAPIACAEIABACQAAADgDADQgCACgDAAQgCAAgEgDgAgOgVQgJAMAAAMQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEgBQgMABgKAKg");
	this.shape_103.setTransform(155.7,91.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AghBHQgCgDAAgDIAAgkIAAghIgBgjIgBgSQAAgGABgEQAEgFAFAAQADAAACACQACACABAEIgBADIAAAFQAHgFAHgDQAGgCAGAAQASAAAIAQQAHAMgBAVQAAARgKAMQgKANgSAAQgHAAgLgCIAAAqQAAADgCADQgDACgDAAQgFAAgCgCgAgHgtQgFACgGAHIAAAoQAKAEAIAAQALAAAGgIQAEgGABgLQgBgQgEgIQgEgIgHAAQgHAAgGAEg");
	this.shape_104.setTransform(146.4,93.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgEA+QgCgDgBgDIAAgKIABgKIgCgxIgTgCQgJgBABgIQgBgEADgCQADgDADAAIATACIAAgMIgBgLQAAgEACgCQADgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCIAMABQAGACgBAGQAAAEgBADQgDACgEAAIgEAAIgFAAIgLABIABAyIAAAEIAAAFQAAATgJAAQgCAAgCgCg");
	this.shape_105.setTransform(131.8,89.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgXAwQgOgFAAgIQAAgEADgDQADgCADAAQADAAAEAEQADACAHACIAKABQAFgBAGgBQAIgDAAgFQAAgNgRgDIgHgCQgLgDgFgDQgIgDAAgLQAAgRASgJIAPgFIAQgGQAEgBAEAAQAEAAACACQADADAAAEIABAHIABAIQAAAEgCACQgDADgEAAQgFAAgBgEQgCgCgBgIIgUAHQgMAFAAAIIAFACQASADAKAHQAOAHAAASQAAAOgMAHQgKAHgOAAQgMAAgKgFg");
	this.shape_106.setTransform(122.9,90.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHQgHACgCAAQgUAAgKgLQgJgMAAgWQAAgTAPgPQAPgPASgBQAHABAKAEQAMAFAAAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAAMACAGIAFAPIACAEIABACQAAADgDADQgCACgDAAQgCAAgEgDgAgOgVQgJAMAAAMQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEgBQgMABgKAKg");
	this.shape_107.setTransform(114.2,91.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AggBHQgDgDAAgDIAAgkIAAghIgBgjIgCgSQAAgGACgEQAEgFAEAAQAEAAACACQADACgBAEIAAADIgBAFQAIgFAHgDQAGgCAFAAQATAAAIAQQAGAMABAVQAAARgKAMQgMANgRAAQgHAAgLgCIAAAqQAAADgDADQgCACgEAAQgEAAgBgCgAgHgtQgEACgIAHIABAoQAKAEAIAAQAKAAAGgIQAGgGgBgLQAAgQgDgIQgFgIgIAAQgFAAgHAEg");
	this.shape_108.setTransform(104.9,93.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgRATAAQAOABAJAFQALAGAAAMQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgCADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_109.setTransform(472.3,64.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAXBCIgDgUIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAIQgEAGgIAOQAAAigCAGQgDAFgFAAQgEAAgDgCQgCgDAAgDIABgEIAAgNIABgNIAAg/IAAgOIAAgJIgBgIQAAgEACgCQADgDAEAAQAHAAABAIIABAQIAAATIgBATIAAAIQAIgKAIgFQAHgEAJAAQAOAAAGAJQADAHABAOIAAAQIADATIACASIAAACQAAAEgCACQgCADgEAAQgHAAgCgHg");
	this.shape_110.setTransform(462.1,61.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgEA+QgDgDABgDIAAgKIAAgKIgCgxIgTgCQgIgBAAgIQAAgEACgCQADgDADAAIATACIAAgMIgBgLQAAgEADgCQACgDAEAAQAFAAACANIAAAIIAAAFIAAAGIANgCIALABQAGACAAAGQAAAEgCADQgDACgEAAIgFAAIgDAAIgMABIABAyIAAAEIAAAFQAAATgJAAQgBAAgDgCg");
	this.shape_111.setTransform(452.5,62.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgeA8QgMgNAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgHAGAAQAIAAAAAIQAAAMgDAqIgBAYQAAAdADAPIAAACQAAAEgDACQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgGAAQgSABgMgMgAgTABQgIAIAAASQAAALAIAJQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgKQgDgHgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_112.setTransform(437.6,61.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAVAqIgDgTIgBgTIABgHIAAgIQAAgSgHgBQgKAAgHAMQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDACgEgBQgDABgDgCQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgDACgDQADgDADABQAIAAABALIAAAKQAPgUAOAAQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCACQgDACgEAAQgHABgBgJg");
	this.shape_113.setTransform(427.9,64);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHQgHACgCAAQgUAAgKgLQgJgMAAgWQAAgTAPgPQAPgQASAAQAHAAAKAFQAMAFAAAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAALACAHIAFAPIACAEIABACQAAADgDADQgCADgDgBQgCAAgEgDgAgOgVQgJAMAAAMQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEgBQgMABgKAKg");
	this.shape_114.setTransform(418.4,64.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgRATAAQAOABAJAFQALAGAAAMQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgCADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_115.setTransform(403.6,64.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgXAwQgOgFAAgIQAAgEADgDQADgCADAAQADAAAEAEQADACAHACIAKABQAFAAAGgCQAIgDAAgFQAAgMgRgEIgHgCQgLgDgFgDQgIgDAAgLQAAgRASgJIAPgFIAQgGQAEgCAEABQAEgBACADQADADAAAEIABAHIABAIQAAAEgCACQgDADgEAAQgFAAgBgEQgCgCgBgIIgUAHQgMAGAAAHIAFACQASAEAKAGQAOAHAAASQAAAOgMAIQgKAFgOABQgMAAgKgFg");
	this.shape_116.setTransform(393.9,63.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAVAqIgDgTIgBgTIABgHIAAgIQAAgSgHgBQgKAAgHAMQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDACgEgBQgDABgDgCQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgDACgDQADgDADABQAIAAABALIAAAKQAPgUAOAAQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCACQgDACgEAAQgHABgBgJg");
	this.shape_117.setTransform(385.3,64);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgRATAAQAOABAJAFQALAGAAAMQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgCADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_118.setTransform(375.7,64.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgEA+QgCgDgBgDIAAgKIABgKIgCgxIgTgCQgJgBABgIQgBgEADgCQADgDADAAIATACIAAgMIgBgLQAAgEACgCQADgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCIANABQAEACAAAGQAAAEgBADQgDACgEAAIgEAAIgFAAIgLABIABAyIAAAEIAAAFQAAATgJAAQgCAAgCgCg");
	this.shape_119.setTransform(366.3,62.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgEA+QgCgDAAgDIAAgKIAAgKIgCgxIgUgCQgHgBgBgIQAAgEADgCQACgDAEAAIASACIAAgMIAAgLQAAgEADgCQACgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIALABQAFACABAGQAAAEgDADQgCACgEAAIgFAAIgDAAIgNABIACAyIAAAEIAAAFQABATgKAAQgBAAgDgCg");
	this.shape_120.setTransform(352.4,62.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgXAwQgOgFAAgIQAAgEADgDQADgCADAAQADAAAEAEQADACAHACIAKABQAFAAAGgCQAIgDAAgFQAAgMgRgEIgHgCQgLgDgFgDQgIgDAAgLQAAgRASgJIAPgFIAQgGQAEgCAEABQAEgBACADQADADAAAEIABAHIABAIQAAAEgCACQgDADgEAAQgFAAgBgEQgCgCgBgIIgUAHQgMAGAAAHIAFACQASAEAKAGQAOAHAAASQAAAOgMAIQgKAFgOABQgMAAgKgFg");
	this.shape_121.setTransform(343.6,63.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHQgHACgCAAQgUAAgKgLQgJgMAAgWQAAgTAPgPQAPgQASAAQAHAAAKAFQAMAFAAAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAALACAHIAFAPIACAEIABACQAAADgDADQgCADgDgBQgCAAgEgDgAgOgVQgJAMAAAMQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEgBQgMABgKAKg");
	this.shape_122.setTransform(334.9,64.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AghBHQgCgDAAgDIAAgkIAAghIgBgjIgBgSQAAgGABgEQAEgFAEAAQAEAAACACQACACABAEIgBADIAAAFQAHgFAHgDQAGgCAGAAQASAAAIAQQAHAMAAAVQAAARgLAMQgKANgSAAQgHAAgLgCIAAAqQAAADgCADQgDACgEAAQgDAAgDgCgAgHgtQgFACgHAHIABAoQAKAEAIAAQALAAAFgIQAFgGABgLQAAgQgFgIQgEgIgHAAQgHAAgGAEg");
	this.shape_123.setTransform(325.6,66.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgRATAAQAOABAJAFQALAGAAAMQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgCADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_124.setTransform(310.5,64.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAYBCIgEgUIgCgVIAAgHIABgHQAAgPgJAAQgKAAgIAIQgEAGgHAOQAAAigDAGQgDAFgFAAQgEAAgDgCQgCgDAAgDIABgEIABgNIAAgNIAAg/IAAgOIAAgJIgBgIQAAgEACgCQADgDAEAAQAHAAABAIIACAQIgBATIAAATIAAAIQAHgKAIgFQAHgEAIAAQAPAAAGAJQAEAHAAAOIAAAQIACATIAEASIAAACQgBAEgCACQgCADgEAAQgGAAgCgHg");
	this.shape_125.setTransform(300.4,61.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgEA+QgCgDAAgDIAAgKIAAgKIgCgxIgUgCQgHgBgBgIQAAgEADgCQACgDAEAAIASACIAAgMIAAgLQAAgEADgCQACgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIALABQAFACABAGQAAAEgDADQgCACgEAAIgFAAIgDAAIgNABIACAyIAAAEIAAAFQABATgKAAQgBAAgDgCg");
	this.shape_126.setTransform(290.8,62.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_127.setTransform(274.3,64.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_128.setTransform(263.1,64.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgZAlQgMgMAAgVQgBgSALgPQAMgRAUgBQARAAAJAQQAIANgBASQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgQQgGAKAAAKQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgNQABgfgTgBQgLAAgHANg");
	this.shape_129.setTransform(253.7,64.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgNBLQgCgDgBgDIABgCQABgMAAgNIAAgYIAAgXIgNAAQgKAAABgIQAAgJAPAAIAIgBIACgNQACgTAIgKQAGgLAUAAQAMAAAAAJQABAIgLAAQgWAAgDAeIAAAFIATgBQAOAAAAAJQABAGgIACIgHAAIgUABIgBASIABARIAAAQQAAAQgBAKQAAAHgHAAQgDAAgDgCg");
	this.shape_130.setTransform(244.4,62.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF0000").s().p("AgiA8QgQgHAAgOQgBgDADgDQADgCADAAQAFABADAEQAEAHAEACQAHAFAPAAQALAAAMgFQAPgJAAgNQAAgLgNgGQgKgGgOAAQgOAAgKgFQgMgHAAgMQAAgQASgNQARgNAQAAQAIAAALAEQAOADAAAGQAAAIgIAAIgMgCIgOgCQgLABgKAGQgKAHAAAKQAAAHANADQAFABAMABQAUACALAKQALAIAAAPQAAAVgTANQgRALgUgBQgRABgNgHg");
	this.shape_131.setTransform(228.4,62.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FF0000").s().p("AgoBDQgDgDAAgEIAAgaIACgiIACgkQgBgIABgQQABgFACgBQAMgDAPgBQAOAAAOALQAQAMAAASQAAAXgRALQANAFAHAHQAGAHAAAIQAAAKgMAKQgHAHgJAEQgSAHgeAAQgEAAgEgDgAgaAjIAAARQAXAAANgGQAGgCAGgFQAFgFAAgCQAAgEgMgFQgIgFgHgBIgIgBIgDAAIgEAAIgLgBIAAAUgAgWgzIAAAPIgCAjIANABQALgBAJgIQAJgIAAgMQAAgIgJgIQgJgHgJAAIgNABg");
	this.shape_132.setTransform(216.9,61.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF0000").s().p("AgsBCQgCgCAAgEIgBgVIAAgVIABgWIACgYIgBgNIgBgNQAAgFADgEQAEgFAFABIAWABQAMACAGAEQAkATAAAbQAAAOgNAIQgJAIgPAFQAbAOAOARQACACAAAEQAAADgCADQgDADgEAAQgDAAgDgDQgdgdgigKIABARIAAASQAAAEgCACQgDADgDAAQgEAAgDgDgAgbgmIABALIgBARIgCAQIAEAAIADAAQAWAAAKgGQAFgBAEgEQAFgFAAgEQAAgMgOgKQgLgKgOgBIgNgCg");
	this.shape_133.setTransform(205.4,61.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF0000").s().p("AglBDQgJgIAAgcIAAgMIABgPIgBgEQABgBABgCIABgmIAAgJIgBgKQAAgKAJAAQADAAADACQAKgDAKgBIAPgBQAWAAANAFQAFACAAAGQAAAEgCACQgCADgEAAIgDAAQgPgEgOAAIgNABQgJABgKADIABAJIgBAiIAkgEIAVgCQAEAAACADQAEACAAAEQAAAGgJABIgUACIgnAEIgBAMIAAAKQAAAUACADQADADAMAAIAOgBIAQAAIAFgBIAGAAQAJAAAAAJQAAAHgHACQgJABgZAAQgcAAgHgHg");
	this.shape_134.setTransform(194.2,61.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FF0000").s().p("AgOBAQgLgbgNgwIgHgZQgGgSABgFQAAgEADgDQACgCAEAAQAGAAADAHIADAPIAIAeQAIAfAJAYIAAgCIAVg9IAIgWQAFgNAFgHQAEgDADAAQAEAAADADQADACgBAEQABACgCADQgFAIgEAJIgHATIgXA+IgKAXQgBAEgFAAQgHAAgCgGg");
	this.shape_135.setTransform(183,62.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FF0000").s().p("AgsBCQgCgCAAgEIgBgVIAAgVIABgWIACgYIgBgNIgBgNQAAgFADgEQAEgFAFABIAWABQAMACAGAEQAkATAAAbQAAAOgNAIQgJAIgPAFQAbAOAOARQACACAAAEQAAADgCADQgDADgEAAQgDAAgDgDQgdgdgigKIABARIAAASQAAAEgCACQgDADgDAAQgEAAgDgDgAgbgmIABALIgBARIgCAQIAEAAIADAAQAWAAAKgGQAFgBAEgEQAFgFAAgEQAAgMgOgKQgLgKgOgBIgNgCg");
	this.shape_136.setTransform(165.8,61.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FF0000").s().p("AAeAtQgCgIgEgUIgXAFIgWAFQgEALgLAWQgCAFgFAAQgEAAgCgCQgDgDAAgEQAAgEANgcQgBgCAAgDQAAgHAIgCIAZgpQATgiAFAAQAHAAADAKIAFAeIAOA7IAFAOIACAJQAAAEgDACQgCADgEAAQgIAAgGgVgAgKAGIAegGIgHghg");
	this.shape_137.setTransform(153.3,62.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF0000").s().p("AglBFQgFgEAAgKIACgdQACgmAAgxQAAgEADgDQACgCAEAAQAEAAACACQADADAAAEQAAAxgDAnIgBANIAAANQAXABAhgLIACgBQAEAAADADQACADAAADQAAAGgGADQgKAEgVAEQgRADgNAAQgJAAgEgCg");
	this.shape_138.setTransform(142.1,62.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FF0000").s().p("AgmA0QgKgNgDgZQgCgLAAgfIABgUIABgLQADgHAFAAQAIAAAAAPIAAAzQAAA0AkAAQAjAAAAhYIAAgIIAAgHQAAgGACgEQACgFAFAAQAJAAAAAMIAAALIAAAKQAABkg1AAQgZAAgOgPg");
	this.shape_139.setTransform(130.4,62);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF0000").s().p("AgsA8QgLgNAAgYQAAgXALgVQALgZARgPQALgJALgBQAHAAAOAGQAQAGAAAHQAAAEgDADQgCADgEAAQgCAAgEgDQgNgHgJgBQgGAAgGAHIgLANQgUAbAAAdQAAARAGAGQAFAIAPgBQANABAMgLQAMgKAFgTQgZABgPAIIgDABQgEAAgDgDQgCgDAAgDQgBgFAFgDQARgKAuAAQAEAAADACQACABAAAEQABAGgFADQgGAbgRAPQgRARgWgBQgWABgLgMg");
	this.shape_140.setTransform(117.7,61.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FF0000").s().p("AglBDQgJgIAAgcIAAgMIABgPIgBgEQABgBABgCIABgmIAAgJIgBgKQAAgKAJAAQADAAADACQAKgDAKgBIAPgBQAWAAANAFQAFACABAGQgBAEgCACQgCADgEAAIgDAAQgPgEgOAAIgNABQgJABgKADIABAJIgBAiIAlgEIAUgCQAEAAADADQADACAAAEQAAAGgJABIgUACIgoAEIAAAMIAAAKQAAAUACADQADADAMAAIAOgBIARAAIAEgBIAGAAQAJAAAAAJQAAAHgHACQgJABgZAAQgbAAgIgHg");
	this.shape_141.setTransform(106.1,61.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF0000").s().p("AgsBCQgCgCAAgEIgBgVIAAgVIABgWIACgYIgBgNIgBgNQAAgFADgEQAEgFAFABIAWABQAMACAGAEQAkATAAAbQAAAOgNAIQgJAIgPAFQAbAOAOARQACACAAAEQAAADgCADQgDADgEAAQgDAAgDgDQgdgdgigKIABARIAAASQAAAEgCACQgDADgDAAQgEAAgDgDgAgbgmIABALIgBARIgCAQIAEAAIADAAQAWAAAKgGQAFgBAEgEQAFgFAAgEQAAgMgOgKQgLgKgOgBIgNgCg");
	this.shape_142.setTransform(94.8,61.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FF0000").s().p("AgsBCQgCgCAAgEIgBgVIAAgVIABgWIACgYIgBgNIgBgNQAAgFADgEQAEgFAFABIAWABQAMACAGAEQAkATAAAbQAAAOgNAIQgJAIgPAFQAbAOAOARQACACAAAEQAAADgCADQgDADgEAAQgDAAgDgDQgdgdgigKIABARIAAASQAAAEgCACQgDADgDAAQgEAAgDgDgAgbgmIABALIgBARIgCAQIAEAAIADAAQAWAAAKgGQAFgBAEgEQAFgFAAgEQAAgMgOgKQgLgKgOgBIgNgCg");
	this.shape_143.setTransform(83.5,61.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FF0000").s().p("AglBAQgDgCAAgEQAAgEADgCQACgDAEAAIATgCIABgQIgBgPIAAgPQAAgSACgeIgLAAIgMAAQgEAAgCgCQgDgDAAgEQAAgIAJgBIAagBQAQAAAaAEQAIABAAAJQAAAEgDACQgDACgDAAIgOgBIgOgCQgCAaAAAVIAAAPIAAAQIAAAPIAbgBQAEAAADADQACACAAAEQAAAEgCADQgDACgEAAIgOAAIgPABIgQABIgRACQgEAAgCgDg");
	this.shape_144.setTransform(72.8,62);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgkAuQgQgNAAgZQAAgZANgTQAPgVAYAAQARAAALAGQANAHAAAQQABALgMAIQgGAEgRAGIgnAUQAFAJAKAEQAJAFAKAAQAHAAAKgDQAMgEAFgFQADgGAEAAQAEAAADADQADADAAADQAAAMgUAJQgQAHgPAAQgWAAgQgMgAgVgbQgJAKgEASIAhgOQASgJAHgHQgIgJgQAAQgNAAgIALg");
	this.shape_145.setTransform(489.2,141.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgLBNIACgnIABgmIAAglIABgnQAAgLAIAAQALAAAAALIgBAnIgBAlIgBA1IgBAZQgBAKgHAAQgLAAAAgLg");
	this.shape_146.setTransform(480,138.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgpBXQgDgDAAgFIABgrIAAgpIgCgrIgBgWQAAgHACgFQAEgHAGAAQAEAAADADQADADAAAEIgBAEIgBAGQAKgGAIgDQAIgEAHAAQAWAAAKAUQAIAPAAAaQAAAVgMAPQgOAQgVAAQgJAAgNgDIgBAzQAAAFgCADQgDADgFAAQgFAAgDgDgAgJg4QgGADgIAJIABAxQAMAEAKAAQANAAAHgJQAGgHAAgOQAAgUgFgJQgFgKgJAAQgIAAgIAEg");
	this.shape_147.setTransform(471.2,144);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgJBNQgDgDAAgEIgBgUIAAgTIABgZIABgXQAAgFAEgDQADgDAEAAQACAAADADQAEADAAAFIgBAXIgCAZIAAATIABAUQAAAEgDADQgDADgDAAQgEAAgDgDgAgFg6QgEgEAAgFQAAgFAEgEQADgDAEAAQAFAAAEADQADAEAAAFQAAAFgDAEQgEAEgFAAQgEAAgDgEg");
	this.shape_148.setTransform(462.3,138.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgeAuQgPgOAAgXQAAgTAPgYQAQgZASAAQAKAAANAFQARAGAAAJQAAAEgDADQgDAEgEAAQgDgBgCgBIgEgEQgHgFgOAAQgJAAgLAUQgKARAAALQAAAPAKAIQAJAIAMAAQAHAAAHgEIAMgHIAFgBQAEAAADADQADADAAAEQAAAIgRAHQgOAHgKAAQgUAAgPgOg");
	this.shape_149.setTransform(453.4,141.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgJBNQgDgDAAgEIgBgUIAAgTIABgZIABgXQABgFADgDQADgDAEAAQACAAADADQAEADAAAFIgBAXIgBAZIAAATIAAAUQAAAEgDADQgDADgDAAQgEAAgDgDgAgGg6QgDgEAAgFQAAgFADgEQAFgDACAAQAFAAAEADQAEAEAAAFQAAAFgEAEQgEAEgFAAQgCAAgFgEg");
	this.shape_150.setTransform(444.9,138.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIABgMIgCg9IgYgCQgKgBAAgJQAAgGADgCQADgDAFgBIAWADIAAgQIgBgMQAAgFADgDQADgDAFAAQAIAAABAPIAAAKIAAAHIAAAGIAPgCQAMAAADACQAHABAAAJQAAAEgDAEQgDADgFAAIgFAAIgGgBIgOABIACA+IAAAFIAAAFQAAAYgLAAQgDAAgDgDg");
	this.shape_151.setTransform(436.4,139.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgoAxIAAhJIAAgLIAAgLQAAgLAKAAQAKAAAAASQAUgUAYAAQAJABAEAGQAEAHAAANIAAAHQAAANgKAAQgKAAAAgKIAAgIIAAgJQgRACgJAIQgJAHgGAOIAAA5QAAAKgLAAQgJAAAAgKg");
	this.shape_152.setTransform(426.3,141.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AAiA2IgIgIIgSAJQgIADgDAAQgZAAgLgPQgLgNAAgbQAAgYASgSQASgTAWAAQAKAAALAEQAPAHAAAIQAAADgCACIgCAOIgBAVQAAAOACAIIAHATIACAGIABABQAAAFgDADQgDACgEAAQgCAAgFgFgAgRgaQgMAOAAAQQAAASAGAIQAGAJANAAQAIAAAHgEIALgIQgDgbAAgNIAAgLIACgLIgHgDIgEgBQgPAAgMANg");
	this.shape_153.setTransform(415.1,141.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgsBSQgDgDAAgEIAAgfIACgsQACgeAAgNIAAgPQAAgLACgFQACgJAIABIAKgBIAPgBQASAAARANQATAPAAAVQAAAbgUAOQgSAOgXAAIgNgCIgBA5QAAAEgDADQgDADgEAAQgEAAgDgDgAgQg/IgHAAIAAAUIgCArIAMAAQAQAAAMgIQAOgKAAgRQAAgMgNgJQgMgIgMAAIgIABg");
	this.shape_154.setTransform(403.9,138.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIABgMIgCg9IgYgCQgKgBAAgJQAAgGADgCQADgDAFgBIAWADIAAgQIgBgMQAAgFADgDQADgDAFAAQAIAAABAPIAAAKIAAAHIAAAGIAPgCQAMAAADACQAHABAAAJQAAAEgDAEQgDADgFAAIgFAAIgGgBIgOABIACA+IAAAFIAAAFQAAAYgLAAQgDAAgDgDg");
	this.shape_155.setTransform(386.3,139.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgdA7QgQgGAAgKQAAgFADgDQADgEAFABQADgBAFAGQADACAJACIAMABQAHAAAHgCQAKgDAAgHQAAgOgUgGIgKgCQgOgDgGgFQgJgDAAgNQAAgWAWgJQAGgEAMgDIAUgHQAFgCAFAAQAFAAADADQADADAAAEIABAKIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAHQgPAIgBAJIAHADQAWAEAMAIQASAJAAAVQAAASgPAIQgNAIgRAAQgOAAgNgFg");
	this.shape_156.setTransform(375.5,141);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AAiA2IgIgIIgSAJQgIADgDAAQgZAAgLgPQgLgNAAgbQAAgYASgSQASgTAWAAQAKAAALAEQAPAHAAAIQAAADgCACIgCAOIgBAVQAAAOACAIIAHATIACAGIABABQAAAFgDADQgDACgEAAQgCAAgFgFgAgRgaQgMAOAAAQQAAASAGAIQAGAJANAAQAIAAAHgEIALgIQgDgbAAgNIAAgLIACgLIgHgDIgEgBQgPAAgMANg");
	this.shape_157.setTransform(364.8,141.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgsBSQgDgDAAgEIAAgfIACgsQACgeAAgNIAAgPQAAgLACgFQACgJAIABIAKgBIAPgBQASAAARANQATAPAAAVQAAAbgUAOQgSAOgXAAIgNgCIgBA5QAAAEgDADQgDADgEAAQgEAAgDgDgAgQg/IgHAAIAAAUIgCArIAMAAQAQAAAMgIQAOgKAAgRQAAgMgNgJQgMgIgMAAIgIABg");
	this.shape_158.setTransform(353.6,138.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIABgMIgCg9IgYgCQgKgBAAgJQAAgGADgCQADgDAFgBIAWADIAAgQIgBgMQAAgFADgDQADgDAFAAQAIAAABAPIAAAKIAAAHIAAAGIAPgCQAMAAADACQAHABAAAJQAAAEgDAEQgDADgFAAIgFAAIgGgBIgOABIACA+IAAAFIAAAFQAAAYgLAAQgDAAgDgDg");
	this.shape_159.setTransform(270.5,139.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgdA7QgQgGAAgKQAAgFADgDQADgEAFABQADgBAFAGQADACAJACIAMABQAHAAAHgCQAKgDAAgHQAAgOgUgGIgKgCQgOgDgGgFQgJgDAAgNQAAgWAWgJQAGgEAMgDIAUgHQAFgCAFAAQAFAAADADQADADAAAEIABAKIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAHQgPAIgBAJIAHADQAWAEAMAIQASAJAAAVQAAASgPAIQgNAIgRAAQgOAAgNgFg");
	this.shape_160.setTransform(259.7,141);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AAiA2IgIgIIgSAJQgIADgDAAQgZAAgLgPQgLgNAAgbQAAgYASgSQASgTAWAAQAKAAALAEQAPAHAAAIQAAADgCACIgCAOIgBAVQAAAOACAIIAHATIACAGIABABQAAAFgDADQgDACgEAAQgCAAgFgFgAgRgaQgMAOAAAQQAAASAGAIQAGAJANAAQAIAAAHgEIALgIQgDgbAAgNIAAgLIACgLIgHgDIgEgBQgPAAgMANg");
	this.shape_161.setTransform(249.1,141.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgsBSQgDgDAAgEIAAgfIACgsQACgeAAgNIAAgPQAAgLACgFQACgJAIABIAKgBIAPgBQASAAARANQATAPAAAVQAAAbgUAOQgSAOgXAAIgNgCIgBA5QAAAEgDADQgDADgEAAQgEAAgDgDgAgQg/IgHAAIAAAUIgCArIAMAAQAQAAAMgIQAOgKAAgRQAAgMgNgJQgMgIgMAAIgIABg");
	this.shape_162.setTransform(237.9,138.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIABgMIgCg9IgYgCQgKgBAAgJQAAgGADgCQADgDAFgBIAWADIAAgQIgBgMQAAgFADgDQADgDAFAAQAIAAABAPIAAAKIAAAHIAAAGIAPgCQAMAAADACQAHABAAAJQAAAEgDAEQgDADgFAAIgFAAIgGgBIgOABIACA+IAAAFIAAAFQAAAYgLAAQgDAAgDgDg");
	this.shape_163.setTransform(154.8,139.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AAaA0IgDgXIgCgYIABgIIAAgKQAAgYgJAAQgMABgJAOQgKANgFARIgBALIgBALIABAJIABAKQAAAFgDADQgDACgFAAQgFAAgDgCQgDgDAAgFIAAgKIgBgJIACgeIABgeIAAgKIgBgKQAAgFAEgDQADgDAEAAQAKAAABAOIAAAMQASgXARAAQARAAAHAPQAFAKAAAUIAAAKIAAAIQAAAKADAOQACAOAAAIQAAAFgDADQgDADgFAAQgJAAgBgKg");
	this.shape_164.setTransform(144.2,141.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgkAuQgQgNAAgZQAAgZANgTQAPgVAYAAQARAAALAGQANAHAAAQQABALgMAIQgGAEgRAGIgnAUQAFAJAKAEQAJAFAKAAQAHAAAKgDQAMgEAFgFQADgGAEAAQAEAAADADQADADAAADQAAAMgUAJQgQAHgPAAQgWAAgQgMgAgVgbQgJAKgEASIAhgOQASgJAHgHQgIgJgQAAQgNAAgIALg");
	this.shape_165.setTransform(132.4,141.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgdA7QgQgGAAgKQAAgFADgDQADgEAFABQADgBAFAGQADACAJACIAMABQAHAAAHgCQAKgDAAgHQAAgOgUgGIgKgCQgOgDgGgFQgJgDAAgNQAAgWAWgJQAGgEAMgDIAUgHQAFgCAFAAQAFAAADADQADADAAAEIABAKIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAHQgPAIgBAJIAHADQAWAEAMAIQASAJAAAVQAAASgPAIQgNAIgRAAQgOAAgNgFg");
	this.shape_166.setTransform(120.5,141);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgjAuQgRgNAAgZQAAgZANgTQAPgVAYAAQARAAALAGQANAHAAAQQAAALgMAIQgFAEgRAGIgoAUQAHAJAJAEQAJAFAJAAQAIAAAKgDQAMgEAFgFQADgGAEAAQAEAAADADQADADAAADQAAAMgTAJQgRAHgQAAQgWAAgOgMgAgVgbQgJAKgEASIAhgOQARgJAJgHQgKgJgPAAQgNAAgIALg");
	this.shape_167.setTransform(109.6,141.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgoAxIAAhJIAAgLIAAgLQAAgLAKAAQAKAAAAASQAUgUAYAAQAJABAEAGQAEAHAAANIAAAHQAAANgKAAQgKAAAAgKIAAgIIAAgJQgRACgJAIQgJAHgGAOIAAA5QAAAKgLAAQgJAAAAgKg");
	this.shape_168.setTransform(98.4,141.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgsBSQgDgDAAgEIAAgfIACgsQACgeAAgNIAAgPQAAgLACgFQACgJAIABIAKgBIAPgBQASAAARANQATAPAAAVQAAAbgUAOQgSAOgXAAIgNgCIgBA5QAAAEgDADQgDADgEAAQgEAAgDgDgAgQg/IgHAAIAAAUIgCArIAMAAQAQAAAMgIQAOgKAAgRQAAgMgNgJQgMgIgMAAIgIABg");
	this.shape_169.setTransform(87.3,138.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]}).wait(336));

	// highlight
	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(255,255,102,0.553)").s().p("AnFNqIAA7UIOLAAIAAbUg");
	this.shape_170.setTransform(121.5,213.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(255,255,102,0.553)").s().p("AsZNrIAA7VIYzAAIAAbVg");
	this.shape_171.setTransform(421.6,213.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_170,p:{scaleX:1,x:121.5,y:213.5}}]},68).to({state:[{t:this.shape_170,p:{scaleX:1.252,x:253.1,y:213.4}}]},79).to({state:[{t:this.shape_171}]},87).wait(102));

	// main
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance = new lib.Copyright("synched",0);
	this.instance.setTransform(275,393.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.instance_1 = new lib.Background();
	this.instance_1.setTransform(275,192.3,1,1.089);

	this.instance_2 = new lib.Background();
	this.instance_2.setTransform(275,196.3,1,1.089);

	this.instance_3 = new lib.Background();
	this.instance_3.setTransform(274.8,193,1,1.089);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance},{t:this.btn_menu}]}).wait(336));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.8,537.1,401.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;