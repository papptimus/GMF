(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"sounds/SE1stThought.mp3", id:"SE1stThought"},
		{src:"sounds/SE2ndThought.mp3", id:"SE2ndThought"},
		{src:"sounds/SE3rdThought.mp3", id:"SE3rdThought"},
		{src:"sounds/arealways.mp3", id:"arealways"},
		{src:"sounds/arearticles.mp3", id:"arearticles"},
		{src:"sounds/SEAdjetiveAnswers.mp3", id:"SEAdjetiveAnswers"},
		{src:"sounds/modifies.mp3", id:"modifies"},
		{src:"sounds/nounmarkers.mp3", id:"nounmarkers"},
		{src:"sounds/Auchwhichwhathowmany.mp3", id:"Auchwhichwhathowmany"},
		{src:"sounds/SEBlackHair.mp3", id:"SEBlackHair"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/SEBrownHair.mp3", id:"SEBrownHair"},
		{src:"sounds/bushrattle.mp3", id:"bushrattle"},
		{src:"sounds/SERitaChopsMick.mp3", id:"SERitaChopsMick"},
		{src:"sounds/crowdohh.mp3", id:"crowdohh"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/HOWMANY.mp3", id:"HOWMANY"},
		{src:"sounds/JingleAdjetives.mp3", id:"JingleAdjetives"},
		{src:"sounds/lowclick.mp3", id:"lowclick"},
		{src:"sounds/signalthecomingofanoun.mp3", id:"signalthecomingofanoun"},
		{src:"sounds/Oowhwav.mp3", id:"Oowhwav"},
		{src:"sounds/eyepopsout.mp3", id:"eyepopsout"},
		{src:"sounds/eagleleaves.mp3", id:"eagleleaves"},
		{src:"sounds/eaglemove.mp3", id:"eaglemove"},
		{src:"sounds/_1b.mp3", id:"_1b"},
		{src:"sounds/parrotleaves.mp3", id:"parrotleaves"},
		{src:"sounds/parrotmove1.mp3", id:"parrotmove1"},
		{src:"sounds/parrotmove2.mp3", id:"parrotmove2"},
		{src:"sounds/percussionloop.mp3", id:"percussionloop"},
		{src:"sounds/pianoe.mp3", id:"pianoe"},
		{src:"sounds/pianof.mp3", id:"pianof"},
		{src:"sounds/pianof_1.mp3", id:"pianof_1"},
		{src:"sounds/SERedHair.mp3", id:"SERedHair"},
		{src:"sounds/scaryloop.mp3", id:"scaryloop"},
		{src:"sounds/ack.mp3", id:"ack"},
		{src:"sounds/articlesareadjectivescallednounmarkers.mp3", id:"articlesareadjectivescallednounmarkers"},
		{src:"sounds/SE3questions.mp3", id:"SE3questions"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/SEWaterHits.mp3", id:"SEWaterHits"},
		{src:"sounds/SEWaterSpill.mp3", id:"SEWaterSpill"},
		{src:"sounds/WHATKIND.mp3", id:"WHATKIND"},
		{src:"sounds/WHICHONE.mp3", id:"WHICHONE"},
		{src:"sounds/SEWhichOne.mp3", id:"SEWhichOne"},
		{src:"sounds/whistles_crowd.mp3", id:"whistles_crowd"},
		{src:"sounds/_1d.mp3", id:"_1d"},
		{src:"sounds/yeah.mp3", id:"yeah"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



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


(lib.WhichOneLoopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990066").s().p("AATBMQgFgEAAgGQgFgLgBgHIgKg9QgHASgHAPQgKAYgEANIABAFQAAAGgGAEQgFADgFAAQgHAAgFgEQgFgEAAgHIgDgLIgKguQgHgVgPgqIgBgFQAAgGAFgEQAEgDAFAAQAHAAAFAGQADAEADAJQAJAbAMAzQAIgTAIgYQAHgVADgJQALgVAIAAQAJAAAFAKQABAFACANIADAUQACARALAqQAKgYARgsIAGgSQACgKAEgHQAFgHAIAAQAGAAAEAEQAEAEAAAFIgEALIgDAKIgGARIgRAnIgTAqIgHARQgFAIgJAAQgFAAgFgDg");
	this.shape.setTransform(12.5,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({y:13.4},0).wait(1).to({y:9.7},0).wait(1).to({y:6.1},0).wait(1).to({y:9.7},0).wait(1).to({y:13.4},0).wait(1).to({y:17.1},0).wait(17));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990066").s().p("AAzBOIgBAAQgGAAgEgEQgEgEAAgFIgBgVIgBgWIAAgKQgOABgUAEIglAHIgBAVIgBAVQAAAFgEADQgDAEgHAAIgBAAIgBAAQgFAAgEgEQgDgEAAgFIABgdIACgcIAAgjIABglQAAgFAEgEQADgEAHAAIABAAIABAAQAFAAAEAEQAEAEgBAFIAAAXIgBAWIAAAJIgBAKIAkgHQAUgEAPAAIACgkQAAgIAFgJQAFgNAHAAIABAAIABAAQAFAAAEAEQAEAEABAFIgBADQgCAHAAAGIAAAIIgBAJIgBAbIgBAaIABAVIACAWQgBAFgEAEQgDAEgGAAIgBAAg");
	this.shape_1.setTransform(30.8,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(5).to({y:12.8},0).wait(1).to({y:9},0).wait(1).to({y:5.2},0).wait(1).to({y:9},0).wait(1).to({y:12.8},0).wait(1).to({y:16.7},0).wait(15));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990066").s().p("AgjBKQgHAAgDgEQgFgDAAgGQAAgFAFgEQAEgEAGAAIACAAIARgCIAAgsQAAgYABgYIgVAAQgFAAgEgEQgFgEAAgFQABgGADgEQAEgDAFAAIAJgBIAUAAIABAAIAfACIAPACQAMACgBALQABAHgFADQgEADgEAAIgBAAIAAAAIgZgCIgBAtIgBAsIAaAAIABAAQAGAAAEAEQADAEAAAFQAAAGgDAEQgEADgGAAIgBAAIAAAAIgQABIgBAAIgQAAIgBAAIgRACIgTABIgBAAg");
	this.shape_2.setTransform(43.5,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990066").s().p("AgjBKQgHAAgDgEQgFgDAAgGQAAgFAFgEQAEgEAGAAIACAAIARgCIAAgsQAAgYABgYIgVAAQgFAAgEgEQgFgEAAgFQABgGADgEQAEgDAFAAIAJgBIAUAAIABAAIAgACIAOACQAMACgBALQABAHgFADQgEADgEAAIgBAAIAAAAIgZgCIgBAtIgBAsIAaAAIABAAQAGAAAEAEQADAEAAAFQAAAGgDAEQgEADgGAAIgBAAIAAAAIgQABIgBAAIgQAAIgBAAQgFAAgMACIgTABIgBAAg");
	this.shape_3.setTransform(43.5,12.9);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_2}]},6).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(7).to({_off:false},0).wait(1).to({y:8.9},0).wait(1).to({y:4.9},0).wait(1).to({y:8.9},0).wait(1).to({y:12.9},0).to({_off:true},1).wait(13));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990066").s().p("AgGBLIgKgBQgPgDgMgMQgOgQAAgUQAAgfAcgjQAZgcAXAAIAIAAIABAAIAFABQAEgEAGAAIABAAQAKAAACALQACAIAAALQAAAFgDAEQgDAGgHAAIgBAAQgJAAgEgKQgCgEgCgBIgFgBIgCAAIgBAAQgMABgNASQgXAaAAAXQAAAKAHAIQAHAHAJABIABAAQAHgBAKgFIAPgJQAHgFAEgBIABAAQAGAAAEAFQAEAEAAAFQAAAGgFAEQgUARgVAEIgMACIgBAAg");
	this.shape_4.setTransform(55.4,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990066").s().p("AgGBLIgKgBQgPgDgMgMQgOgQAAgUQAAgfAcgjQAZgcAXAAIAIAAIABAAIAFABQAEgEAGAAIABAAQAKAAACALQACAIAAALQAAAFgDAEQgDAGgHAAIgBAAQgJAAgEgKQgCgEgCgBIgFAAIgCAAIgBAAQgMABgNARQgXAaAAAXQAAAKAHAIQAHAHAJAAIABAAQAHAAAKgEIAPgKQAHgGAEAAIABAAQAGABAEAEQAEAEAAAFQAAAGgFAEQgUASgVADIgMACIgBAAg");
	this.shape_5.setTransform(55.4,12.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990066").s().p("AgGBLIgKgBQgPgDgMgMQgOgQAAgUQAAgfAcgjQAZgcAXAAIAIAAIABAAIAFABQAEgEAGAAIABAAQAKAAACALQACAJAAAKQAAAFgDAEQgDAFgHABIgBAAQgJAAgEgKQgCgEgCgBIgFgBIgCAAIgBAAQgMABgNASQgXAaAAAXQAAAKAHAIQAHAHAJABIABAAQAHgBAKgFIAPgKQAHgEAEAAIABAAQAGgBAEAFQAEAEAAAFQAAAGgFAEQgUARgVAFIgMABIgBAAg");
	this.shape_6.setTransform(55.4,8.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990066").s().p("AgGBLIgKgBQgPgDgMgMQgOgQAAgUQAAgfAcgjQAZgcAXAAIAIAAIABAAIAFABQAEgEAGAAIABAAQAKAAACALQACAIAAALQAAAFgDAEQgDAFgHABIgBAAQgJAAgEgKQgCgEgCgBIgFgBIgCAAIgBAAQgMACgNARQgXAaAAAXQAAAKAHAIQAHAHAJABIABAAQAHgBAKgFIAPgJQAHgFAEgBIABAAQAGAAAEAFQAEAEAAAFQAAAGgFAEQgUARgVAEIgMACIgBAAg");
	this.shape_7.setTransform(55.4,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_4}]},8).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).wait(11));

	// Layer 6
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990066").s().p("AApBKQgEgEAAgFIgBgVIAAgWIAAgKQgQABgUAEIgmAHIgBAVIgBAVQAAAFgEADQgDAEgHAAQgFAAgEgEQgDgEgBgFIACgdIACgcIAAgjIABglQAAgFAEgEQAEgEAFAAQAGAAAEAEQADAEAAAFIAAAXIgBAWIAAAJIgBAKIAmgHQAUgEAQAAIABgkQAAgIAEgJQAGgNAHAAQAFAAAEAEQAEAEAAAFIAAADQgCAHAAAGIAAAIIgBAJIgBAbIgBAaIABAVIACAWQAAAFgFAEQgEAEgFAAQgGAAgEgEg");
	this.shape_8.setTransform(69.4,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(11).to({y:12.3},0).wait(1).to({y:8},0).wait(1).to({y:3.7},0).wait(1).to({y:8},0).wait(1).to({y:12.3},0).wait(1).to({y:16.7},0).wait(9));

	// Layer 7
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990066").s().p("AgBBNIgbgFQgNgEgKgIQgWgSAAgcQAAgfAVgcQAMgPAPgIIAegHIAAAAIAeADQANAEAJAIQARAQAAAfQAAAggUAaQgLAQgOAIIgeAIgAgNgsQgJAGgIAKQgPAUAAAWQAAAQANAKQAGAFAIADIARACIAAAAIAIgBQAOgEALgQQANgTAAgXQABgUgKgIQgEgEgIgCIgSgCIgBAAg");
	this.shape_9.setTransform(93.5,17);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990066").s().p("AgBBNIgbgFQgMgDgLgJQgWgSAAgcQAAgfAVgcQAMgPAPgHIAegIIAAAAIAeADQANAEAJAIQARAQAAAfQAAAggUAaQgKAQgPAIIgeAIgAgegcQgPAUAAAWQAAAQANAKQAGAFAIADIARACIAIgBQAPgEAKgQQANgTAAgXQABgUgKgJQgEgDgIgCIgTgCg");
	this.shape_10.setTransform(93.5,12.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990066").s().p("AgBBMIgbgDQgMgFgLgIQgWgSAAgcQAAggAVgbQAMgPAPgHIAegJIAAAAIAeAEQANAEAJAIQARAQAAAfQAAAggUAbQgKAPgPAIIgeAHgAgegcQgPAUAAAWQAAAQANAKQAGAFAIADIARACIAIgBQAPgFAKgPQANgTAAgXQABgVgKgHQgEgEgIgCIgTgCg");
	this.shape_11.setTransform(93.5,8.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990066").s().p("AgBBMIgbgDQgMgFgLgIQgWgSAAgcQAAggAVgbQAMgPAPgHIAegIIAAAAIAeADQANAEAJAIQARAQAAAfQAAAggUAbQgKAPgPAIIgeAHgAgNgsQgJAGgIAKQgPAUAAAWQAAAQANAKQAGAFAIADIARACIAAAAIAIgBQAPgFAKgPQANgTAAgXQABgVgKgHQgEgEgIgCIgSgCIgBAAg");
	this.shape_12.setTransform(93.5,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_9}]},12).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).wait(7));

	// Layer 8
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990066").s().p("Ag4BPIgCAAQgHAAgEgEQgEgEAAgFIABgNIABgLIAAgRIAAgSIAAgRIAAgSIgBgSIgCgRQAAgGAFgEQAFgFAGAAIACAAIADAAQAHAAAJANQAoA8ApAlIAAgLIgBg/IgBgLIgBgLQAAgNAOAAIACAAIADAAQAPAAAAAxIAAAQIgBA8IgCAPQgBANgMAAIgCAAIgDAAQgGAAgJgIQgkghgrg3IgBAYIABAXIAAAYQAAAcgOAAIgCAAg");
	this.shape_13.setTransform(109.4,16.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#990066").s().p("Ag4BPIgCAAQgHAAgEgEQgEgEAAgGIABgLIABgNIAAgQIAAgSIAAgQIAAgTIgBgRIgCgSQAAgGAFgFQAFgEAGAAIADAAIACAAQAHAAAJAMQAoA9ApAlIAAgLIgBg/IgBgKIgBgLQAAgOAOAAIACAAIADAAQAPAAAAAyIAAAPIgBA7IgCAQQgBAMgMAAIgCAAIgDAAQgGAAgJgHQgkghgrg3IgBAYIABAXIAAAXQAAAdgOAAIgCAAg");
	this.shape_14.setTransform(109.4,12.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#990066").s().p("Ag4BPIgCAAQgHAAgEgEQgEgEAAgFIABgNIABgLIAAgSIAAgRIAAgRIAAgSIgBgSIgCgRQAAgGAFgEQAFgFAGAAIADABIACgBQAHAAAJANQAoA8ApAlIAAgLIgBg/IgBgLIgBgLQAAgNAOAAIACAAIADAAQAPAAAAAxIAAAQIgBA8IgCAPQgBANgMAAIgCAAIgDAAQgGAAgJgIQgkgggrg4IgBAYIABAXIAAAXQAAAdgOAAIgCAAg");
	this.shape_15.setTransform(109.4,8.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#990066").s().p("Ag4BPIgCAAQgHAAgEgEQgEgEAAgGIABgLIABgMIAAgRIAAgSIAAgQIAAgTIgBgRIgCgSQAAgGAFgEQAFgFAGAAIADAAIACAAQAHAAAJAMQAoA9ApAmIAAgMIgBg/IgBgKIgBgLQAAgOAOAAIACAAIADAAQAPAAAAAyIAAAPIgBA7IgCAQQgBAMgMAAIgCAAIgDAAQgGABgJgIQgkgggrg4IgBAYIABAXIAAAYQAAAcgOAAIgCAAg");
	this.shape_16.setTransform(109.4,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_13}]},14).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).wait(5));

	// Layer 9
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#990066").s().p("AgDBTIgUgCQgQgCgGgFQgLgJAAggIACglIACgnIgBgLIgBgKQAAgOAOAAIAAAAIABAAQAEAAAEACIAUgFIALAAIAHgBIABAAIAWACQAKABAIADQAJAEAAAIQAAAGgEADQgEAFgGAAIgBAAIAAAAIgFgBQgLgDgLgBIgHAAIgBAAIgHAAIgGABIgRAEIgBAmIAigDIAYgDIABAAIABAAQAFABAEAEQAEADAAAGQAAAJgMACIgXACIgoAEIgBAUQAAATADADIAGABIAEAAIACAAIAPAAIABAAIARAAIABAAIAFgBIAFAAIABAAIABAAQAFAAAEADQAFADAAAGQAAAMgLACIgMABIgbABIgBAAg");
	this.shape_17.setTransform(124.1,16.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#990066").s().p("AgDBSIgUgBQgQgCgGgFQgLgJAAggIACglIACgnIgBgKIgBgKQAAgPAOgBIAAAAIABAAQAEABAEACIAUgEIALgBIAHAAIABAAIAWABQAKABAIADQAJADAAAKQAAAEgEAFQgEAEgGAAIAAAAIgBAAIgFgBQgLgDgKAAIgIgBIgBAAIgHABIgGAAIgRADIgBAnIAigEIAYgBIABAAIABAAQAFAAAEADQAEAEAAAGQAAAKgMACIgXABIgoAEIgBAUQAAATADADIAGABIAEAAIACAAIAPAAIABAAIARgBIABAAIAFAAIAFgBIABAAIABAAQAFAAAEADQAFAEAAAHQAAAKgLADIgMABIgbAAIgBAAg");
	this.shape_18.setTransform(124.1,13.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990066").s().p("AgDBSIgUgBQgQgCgGgFQgLgKAAgfIACglIACgnIgBgKIgBgKQAAgPAOAAIAAAAIABAAQAEAAAEACIAUgEIALgBIAHAAIABAAIAWABQAKABAIADQAJADAAAKQAAAEgEAFQgEAEgGAAIAAAAIgBAAIgFgBQgLgDgKAAIgIgBIgBAAIgHABIgGAAIgRADIgBAnIAigDIAYgCIABAAIABAAQAFAAAEADQAEAEAAAGQAAAKgMACIgXABIgoAEIgBAUQAAATADADIAGABIAEAAIACAAIAPAAIABAAIARgBIABAAIAFAAIAFgBIABAAIABAAQAFAAAEADQAFAEAAAGQAAALgLADIgMABIgbAAIgBAAg");
	this.shape_19.setTransform(124.1,9.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#990066").s().p("AgDBTIgUgCQgQgBgGgGQgLgKAAgfIACglIACgoIgBgKIgBgKQAAgPAOAAIAAAAIABAAQAEAAAEADIAUgFIALAAIAHgBIABAAIAWACQAKABAIADQAJADAAAJQAAAFgEAEQgEAFgGAAIAAAAIgBAAIgFgBQgLgDgKgBIgIAAIgBAAIgHAAIgGABIgRAEIgBAmIAigEIAYgCIABAAIABAAQAFAAAEAFQAEADAAAGQAAAJgMACIgXACIgoAEIgBAUQAAATADADIAGABIAEAAIACAAIAPAAIABAAIARAAIABAAIAFgBIAFgBIABAAIABAAQAFABAEADQAFADAAAHQAAALgLACIgMABIgbABIgBAAg");
	this.shape_20.setTransform(124.1,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17}]}).to({state:[{t:this.shape_17}]},16).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).wait(3));

	// Layer 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#3333CC").ss(2,1,1).p("ALOCfI2bAAIAAk9IWbAAg");
	this.shape_21.setTransform(71.8,16);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AEFF77").s().p("ArNCfIAAk9IWbAAIAAE9g");
	this.shape_22.setTransform(71.8,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,145.7,33.9);


(lib.WHatKindLoopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990066").s().p("AATBMQgFgEgBgGQgEgLgBgHIgKg9QgGASgIAPQgLAYgDANIAAAFQAAAGgEAEQgGADgFAAQgHAAgFgEQgFgEAAgHIgDgLIgLguQgGgVgPgqIgBgFQAAgGAFgEQADgDAGAAQAIAAAEAGQADAEACAJQAKAbAMAzQAIgTAIgYQAGgVAEgJQALgVAIAAQAJAAAEAKQACAFADANIACAUQACARAKAqQALgYARgsIAGgSQACgKAFgHQAEgHAIAAQAGAAAEAEQAEAEAAAFIgEALIgDAKIgGARIgSAnIgSAqIgHARQgEAIgKAAQgFAAgFgDg");
	this.shape.setTransform(14.9,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({y:13.9},0).wait(1).to({y:10.8},0).wait(1).to({y:7.7},0).wait(1).to({y:4.5},0).wait(1).to({y:7.7},0).wait(1).to({y:10.8},0).wait(1).to({y:13.9},0).wait(1).to({y:17},0).wait(15));

	// Layer 9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990066").s().p("AApBKQgEgEAAgFIgBgVIAAgWIAAgKQgQABgUAEIgmAHIgBAVIgBAVQAAAFgEADQgDAEgHAAQgFAAgEgEQgDgEAAgFIABgdIACgcIAAgjIABglQAAgFAEgEQAEgEAFAAQAGAAAEAEQADAEAAAFIAAAXIgBAWIAAAJIgBAKIAmgHQAUgEAQAAIABgkQAAgIAEgJQAGgNAHAAQAFAAAEAEQAEAEAAAFIAAADQgCAHAAAGIAAAIIgBAJIgBAbIgBAaIABAVIACAWQAAAFgFAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1.setTransform(32.9,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(5).to({y:13.6},0).wait(1).to({y:10.4},0).wait(1).to({y:7.3},0).wait(1).to({y:4.2},0).wait(1).to({y:7.3},0).wait(1).to({y:10.4},0).wait(1).to({y:13.6},0).wait(1).to({y:16.7},0).wait(13));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990066").s().p("AAhA3QgEgMgFgPQgHACgQABIgWACIgPAgQgEAHgIAAQgFAAgFgDQgEgEAAgFQAAgFAOgdIgBgGQAAgFAJgCIAfgwQAWglAHAAQAKAAADANIAHAfIAPA/IAEAMQAEAJAAAEQAAAGgFAEQgDADgGAAQgHAAgJgSgAgGAJIALgCIAOgBIgHgfIgSAig");
	this.shape_2.setTransform(47.8,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990066").s().p("AAwBJQgHgCgHgPIgBgCQgFgLgDgOIgDgBIgUADIgCAAIgUACIgBACIgJATIgGALQgEAHgHAAIgBAAIgBAAQgEAAgEgDIgBgBQgDgCAAgEIgBgCQAAgFAOgdIgBgGQABgFAIgCIAfgwIABgBQAVgkAHAAIABAAQAJAAADAMIAAACIAHAeIAAACIAPA8IABADIADAKIABACQADAGAAAEIAAADQgBAEgDADIgCACQgDACgEAAIgBAAIgBAAgAgGAJIAZgDIgHgfIgSAig");
	this.shape_3.setTransform(47.8,13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990066").s().p("AAwBJQgGgBgIgPIgBgDQgFgLgDgOIgCgBIgUADIgDAAIgTACIgCABIgJATIgGAMIgBABQgDAGgIAAIgBAAQgEAAgEgDIgBgBQgDgDAAgEIgBgBQAAgFAOgdIAAAAIgBgFIAAgBQABgFAIgCIAAAAIAfgwIABgBQAVgjAGgBIACAAQAJAAADAMIAAACIAHAdIAAACIAOA8IABADIAEAKIABADIADAKIAAADQgBAEgDADIgCACQgCACgFAAIgCAAgAgGAJIAZgDIgHgfIgSAig");
	this.shape_4.setTransform(47.8,10.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990066").s().p("AAwBJQgHgBgHgPIgBgCQgEgLgEgOIgBgCIgVADIgCAAIgTACIgDABIgJATIgGAMIgBABQgDAGgIAAIgBAAIAAAAQgFAAgEgDIAAgBQgDgDgBgFIAAAAQAAgFAOgdIAAAAIgBgFIAAgBQAAgFAJgCIAAAAIAfgwIAAgBQAWgjAGgBIABAAQAKAAADALIAAACIAHAeIAAACIAOA7IABADIAEALIABACIADAKIAAADQAAAEgEADIgBACQgDACgEABIgBAAIgCAAgAgGAJIAZgDIgHgfIgSAig");
	this.shape_5.setTransform(47.8,7.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990066").s().p("AAhA3QgEgMgFgPQgHACgQABIgWACIgJATIgGANQgEAHgIAAIgBAAQgFAAgEgDQgEgEAAgFQAAgFAOgdIgBgGQAAgFAJgCIAfgwQAWglAHAAQAKAAADANIAHAfIAPA/IAEAMQAEAJAAAEQAAAGgFAEQgDADgGAAQgHAAgJgSgAgGAJIALgCIAOgBIgHgfIgSAig");
	this.shape_6.setTransform(47.8,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).wait(12));

	// Layer 7
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990066").s().p("AgIBHQgFgEAAgGIABgEIAAgEIAAgOIgBgOQAAgNgCgUIgDgjIgFAAQgWAAgMgEQgLgCAAgKQAAgFADgEQAEgFAHAAIAQACIAPABIASAAIAQAAIAWABIAWABQAGAAAEAEQAEADAAAGQAAAFgEAEQgEAEgGAAIgXgBIgYgBIACAoQADAXAAAPIAAAJIABAKQAAAIgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_7.setTransform(62.6,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(8).to({y:13.5},0).wait(1).to({y:10.4},0).wait(1).to({y:7.3},0).wait(1).to({y:4.1},0).wait(1).to({y:7.3},0).wait(1).to({y:10.4},0).wait(1).to({y:13.5},0).wait(1).to({y:16.6},0).wait(10));

	// Layer 6
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990066").s().p("AgxBKQgEgGAAgFIACg/IABhBQAAgGAEgEQAEgDAGAAQAGAAADADQAEAEAAAGIgBAYIgBAXIAxg2QAEgFAGAAQAGAAAEAEQAEAEAAAFQAAAHgXAZQgRASgRARIATAUIAWATQAFADAGACQALADAAAKQAAAEgDAEQgEAGgGAAQgOgBgWgSIgegeIAAAqQAAAEgCAEQgEAFgGgBQgIAAgEgFg");
	this.shape_8.setTransform(84.5,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990066").s().p("AgxBJQgEgEAAgGIACg/IABhBQAAgFAEgEQAEgFAGAAQAGAAADAFQAEAEAAAFIgBAXIgBAYIAxg2QAEgFAGAAQAGAAAEAEQAEAEAAAGQAAAFgXAaQgRASgRAQIATAVIAWATQAFADAGACQALAEAAAJQAAAEgDAEQgEAGgGgBQgOAAgWgSIgegdIAAApQAAAEgCAEQgEAEgGABQgIAAgEgHg");
	this.shape_9.setTransform(84.5,14);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990066").s().p("AgxBKQgEgFAAgGIACg/IABhBQAAgGAEgEQAEgDAGAAQAGAAADADQAEAEAAAGIgBAYIgBAXIAxg2QAEgFAGAAQAGAAAEAEQAEAEAAAFQAAAGgXAaQgRATgRAQIATAUIAWATQAFADAGACQALAEAAAJQAAAEgDAEQgEAFgGABQgOAAgWgTIgegeIAAAqQAAAEgCAEQgEAFgGgBQgIAAgEgFg");
	this.shape_10.setTransform(84.5,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_8}]},9).to({state:[{t:this.shape_9,p:{y:14}}]},1).to({state:[{t:this.shape_9,p:{y:10.8}}]},1).to({state:[{t:this.shape_10,p:{y:7.7}}]},1).to({state:[{t:this.shape_10,p:{y:4.6}}]},1).to({state:[{t:this.shape_10,p:{y:7.7}}]},1).to({state:[{t:this.shape_9,p:{y:10.8}}]},1).to({state:[{t:this.shape_9,p:{y:14}}]},1).to({state:[{t:this.shape_8}]},1).wait(8));

	// Layer 5
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990066").s().p("AgtBGQgEgDAAgGQAAgFAEgEQAEgEAHAAIASgCIAAgsQAAgYACgYIgVAAQgGAAgEgEQgEgEAAgFQAAgGAEgEQADgDAGAAIAcgBQARAAAdAEQAMACAAALQAAAHgFADQgDADgFAAIgagCIgBAtIAAAsIAaAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEADgGAAIgRABIgQAAIgSACIgUABQgGAAgEgEg");
	this.shape_11.setTransform(95.3,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(12).to({y:13.8},0).wait(1).to({y:10.6},0).wait(1).to({y:7.5},0).wait(1).to({y:4.4},0).wait(1).to({y:7.5},0).wait(1).to({y:10.6},0).wait(1).to({y:13.8},0).wait(1).to({y:16.9},0).wait(6));

	// Layer 4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990066").s().p("AhDBLQgEgEAAgGIABgLIABgNIAAgRIAAgRIAAgRIAAgSIgBgSIgCgRQAAgGAFgFQAFgEAGAAQAIAAAIAMQArBAArAmIAAgPIgBg/IgBgKIgBgMQAAgNAOAAQAQAAAAAxIAAAQIAAA8IgCAPQgCAMgNAAQgGAAgJgHQglgigug7IAAAdIAAAXIAAAXQAAAdgOAAQgHAAgEgEg");
	this.shape_12.setTransform(109.2,16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990066").s().p("AhDBLQgEgEAAgFIABgNIABgLIAAgSIAAgRIAAgRIAAgSIgBgRIgCgSQAAgGAFgEQAFgFAGAAQAIAAAIANQArA/ArAmIAAgPIgBg/IgBgLIgBgLQAAgNAOAAQAQAAAAAyIAAAPIAAA8IgCAPQgCANgNAAQgGAAgJgIQglgigug7IAAAdIAAAXIAAAYQAAAcgOAAQgHAAgEgEg");
	this.shape_13.setTransform(109.2,13.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#990066").s().p("AhDBLQgEgEAAgFIABgNIABgLIAAgRIAAgSIAAgRIAAgSIgBgSIgCgRQAAgGAFgEQAFgFAGAAQAIAAAIANQArA/ArAmIAAgPIgBg/IgBgLIgBgLQAAgNAOAAQAQAAAAAyIAAAPIAAA8IgCAPQgCANgNAAQgGAAgJgIQglgigug7IAAAdIAAAXIAAAYQAAAcgOAAQgHAAgEgEg");
	this.shape_14.setTransform(109.2,10.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#990066").s().p("AhDBLQgEgEAAgGIABgLIABgNIAAgQIAAgSIAAgQIAAgTIgBgRIgCgSQAAgGAFgFQAFgEAGAAQAIAAAIAMQArBAArAmIAAgPIgBg/IgBgKIgBgLQAAgOAOAAQAQAAAAAyIAAAPIAAA7IgCAQQgCAMgNAAQgGAAgJgHQglgigug7IAAAdIAAAXIAAAXQAAAdgOAAQgHAAgEgEg");
	this.shape_15.setTransform(109.2,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_12}]},13).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{y:7.5}}]},1).to({state:[{t:this.shape_15,p:{y:4.3}}]},1).to({state:[{t:this.shape_15,p:{y:7.5}}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).wait(4));

	// Layer 2
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#990066").s().p("AgeBOQgLgCgGgEQgGAAgEgEQgEgEAAgGIABgdIABgdIAAgfIgBggQAAgGAFgFQAGgFAFAAQAEAAANAGQAPAHADABQAaAJAUAUQAZAXAAAaQAAARgJAPQgIAPgPAKQgQAKgbAAQgHAAgKgCgAghAxQAEADAFABQAFABAGAAQATAAAJgGQAJgFAFgKQAFgJAAgLQAAgWgcgSQgIgGgfgMg");
	this.shape_16.setTransform(125.1,16.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#990066").s().p("AgeBOQgLgCgGgEQgGAAgEgEQgEgEAAgGIABgdIABgdIAAgfIgBggQAAgGAFgFQAGgFAFAAQAEAAANAGQAPAHADABQAaAJAUAUQAZAXAAAaQAAARgJAPQgIAPgPAKQgQAKgbAAQgHAAgKgCgAghAxQAEADAQACQATAAAJgGQAJgFAKgeQAAgWgcgSQgIgGgfgMg");
	this.shape_17.setTransform(125.1,13.8);
	this.shape_17._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16,p:{y:16.9}}]}).to({state:[{t:this.shape_16,p:{y:16.9}}]},15).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16,p:{y:4.4}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16,p:{y:16.9}}]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(16).to({_off:false},0).wait(1).to({y:10.6},0).wait(1).to({y:7.5},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({y:10.6},0).wait(1).to({y:13.8},0).to({_off:true},1).wait(2));

	// Layer 3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#990066").s().p("AgcBKQgEgDAAgGQAAgHADgFQAFgIAJABQAGAAAEAEQACAFAAAGQAAAFgCAGQgFAGgHAAQgGAAgFgEgAgVAhQgEgEgBgGQAAgHANgKIAVgOQANgKAAgHQgBgKgIgHQgKgJgHAAQgGAAgJAHQgKAFgDAAIgGgBIgEgDQgEgEAAgFQAAgHAIgGIAKgFQANgHALAAQASAAASAQQARAPAAAVQAAATgUAOIgQALIgOAMQgEAGgGAAQgFAAgEgEg");
	this.shape_18.setTransform(137.7,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(25));

	// Layer 1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF3300").ss(2,1,1).p("ALpCfI3RAAIAAk9IXRAAg");
	this.shape_19.setTransform(74.5,16);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFD81").s().p("AroCfIAAk9IXRAAIAAE9g");
	this.shape_20.setTransform(74.5,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,151.1,33.9);


(lib.HowManyLoopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990066").s().p("AApBKQgEgEAAgFIgBgVIAAgWIAAgKQgPABgVAEIgmAHIgBAVIgBAVQAAAFgEADQgEAEgFAAQgGAAgEgEQgDgEgBgFIACgdIACgcIABgjIAAglQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFIgBAXIAAAWIgBAJIgBAKIAmgHQAUgEAQAAIABgkQAAgIAEgJQAGgNAHAAQAFAAAEAEQAFAEgBAFIAAADQgCAHAAAGIgBAIIAAAJIgBAbIgBAaIABAVIABAWQAAAFgDAEQgFAEgFAAQgGAAgEgEg");
	this.shape.setTransform(13.3,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({y:12.4},0).wait(1).to({y:8.1},0).wait(1).to({y:3.8},0).wait(1).to({y:8.1},0).wait(1).to({y:12.4},0).wait(1).to({y:16.8},0).wait(17));

	// Layer 8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990066").s().p("AgzA8QgVgSAAgcQAAgfAUgcQAYgeAhAAQAiAAARAPQARAQAAAfQAAAggTAaQgWAgghAAQgdAAgVgRgAgegcQgPAUAAAWQAAAQANAKQAMAKATAAQATAAAOgVQAOgTAAgXQAAgUgKgIQgIgIgXAAQgUAAgPAVg");
	this.shape_1.setTransform(29,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990066").s().p("AgzA8QgVgSAAgcQAAgfAUgbQAYgfAhgBQAiABARAPQARAQAAAfQAAAfgTAbQgWAfghABQgdgBgVgQgAgegcQgPAUAAAWQAAAQANAKQAMAKATAAQATAAAOgVQAOgUgKgzQgIgHgXAAQgUAAgPAVg");
	this.shape_2.setTransform(29,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990066").s().p("AgzA8QgVgSAAgcQAAgfAUgcQAYgeAhAAQAiAAARAPQARAQAAAfQAAAggTAaQgWAgghAAQgdAAgVgRgAgegcQgPAUAAAWQAAAQANAKQAMAKATAAQATAAAOgVQAOgTgKg0QgIgHgXAAQgUAAgPAVg");
	this.shape_3.setTransform(29,8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990066").s().p("AgzA8QgVgSAAgcQAAgfAUgbQAYggAhAAQAiAAARAQQARAQAAAfQAAAfgTAcQgWAeghAAQgdAAgVgQgAgegcQgPAUAAAWQAAAQANAKQAMAKATAAQATAAAOgVQAOgUAAgWQAAgVgKgIQgIgHgXAAQgUAAgPAVg");
	this.shape_4.setTransform(29,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(15));

	// Layer 7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990066").s().p("AATBMQgFgEgBgGQgEgLgBgHIgKg9QgHASgHAPQgLAYgDANIAAAFQAAAGgEAEQgGADgFAAQgHAAgFgEQgFgEAAgHIgDgLIgLguQgGgVgPgqIgBgFQAAgGAEgEQAEgDAGAAQAIAAAEAGQACAEADAJQAKAbAMAzQAIgTAIgYQAGgVAEgJQAKgVAJAAQAJAAAEAKQADAFACANIACAUQACARAKAqQALgYARgsIAFgSQADgKAFgHQAEgHAIAAQAGAAAEAEQAEAEAAAFIgEALIgDAKIgGARIgSAnIgSAqIgHARQgEAIgKAAQgFAAgFgDg");
	this.shape_5.setTransform(47,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(7).to({y:12.3},0).wait(1).to({y:8},0).wait(1).to({y:3.7},0).wait(1).to({y:8},0).wait(1).to({y:12.3},0).wait(1).to({y:16.7},0).wait(13));

	// Layer 6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990066").s().p("AA0BAIgFgYQgFgSgGgfIgOAoIgGASIgHARQgGAJgGAAQgKAAgFgLIgFgSQgIgZgGgZIgMAtIgEAWQgEAOgKAAQgHAAgEgEQgDgFgBgFQAAgPAIgYIAKgkIAGgdQAFgVAFgHQAFgHAHAAQAJAAAFAJQAEAIAEAbQAEAZAIAcQAKgbAJgjIAGgXQAFgNALAAQALAAAFAQQACAGADASQAFAoAJAdIAJAiQAAAFgFAEQgFAEgFgBQgKABgGgPg");
	this.shape_6.setTransform(75,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990066").s().p("AA0A/IgFgXQgFgSgGgfIgOAoIgGASIgHARQgGAJgGAAQgKAAgFgLIgFgSQgIgZgGgaIgMAuIgEAWQgEAOgKAAQgHAAgEgFQgDgEgBgFQAAgPAIgXIAKgkIAGgfQAFgUAFgHQAFgHAHAAQAJAAAFAJQAEAJAEAaQAEAaAIAbQAKgbAJgjIAGgWQAFgPALAAQALAAAFARQACAHADASQAFAnAJAeIAJAgQAAAGgFAEQgFADgFABQgKgBgGgPg");
	this.shape_7.setTransform(75,12.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990066").s().p("AA0A/IgFgXQgFgSgGgfIgOAoIgGASIgHARQgGAJgGAAQgKAAgFgLIgFgSQgIgZgGgZIgMAtIgEAWQgEAOgKAAQgHAAgEgFQgDgEgBgFQAAgPAIgYIAKgjIAGgeQAFgVAFgHQAFgHAHAAQAJAAAFAJQAEAJAEAaQAEAaAIAbQAKgbAJgjIAGgXQAFgNALAAQALAAAFAQQACAGADASQAFAoAJAdIAJAiQAAAFgFAEQgFADgFAAQgKABgGgQg");
	this.shape_8.setTransform(75,8.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990066").s().p("AA0A/IgFgYQgFgRgGgeIgOAmIgGASIgHASQgGAJgGAAQgKAAgFgLIgFgSQgIgZgGgaIgMAuIgEAWQgEAOgKAAQgHAAgEgFQgDgDgBgGQAAgQAIgWIAKgkIAGgfQAFgUAFgHQAFgHAHAAQAJAAAFAJQAEAJAEAaQAEAaAIAbQAKgbAJgjIAGgWQAFgOALgBQALAAAFARQACAGADATQAFAnAJAeIAJAgQAAAGgFAEQgFADgFABQgKgBgGgPg");
	this.shape_9.setTransform(75,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_6}]},8).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).wait(11));

	// Layer 5
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990066").s().p("AAiA3QgGgMgDgPQgIACgQABIgWACIgPAgQgFAHgHAAQgGAAgEgDQgEgEAAgFQAAgFAOgdIgBgGQABgFAIgCIAggwQAWglAFAAQALAAAEANIAGAfIAPA/IAFAMQADAJAAAEQAAAGgFAEQgEADgFAAQgIAAgHgSgAgHAJIANgCIANgBIgHgfIgTAig");
	this.shape_10.setTransform(91.3,17.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990066").s().p("AAiA3QgGgMgDgPQgIACgQABIgWACIgPAgQgFAHgHAAQgGAAgEgDQgEgEAAgFQAAgFAOgdIgBgGQABgFAIgCQAPgWARgaQAWglAFAAQALAAAEANIAGAfIAPA/IAFAMQADAJAAAEQAAAGgFAEQgEADgFAAQgIAAgHgSgAgHAJIAagDIgHgfIgTAig");
	this.shape_11.setTransform(91.3,12.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990066").s().p("AAiA3QgGgMgDgPQgIACgQABIgWACIgPAgQgFAHgHAAQgGAAgEgDQgEgEAAgFQAAgFAOgdIgBgGQABgFAIgCIAggwQAWglAFAAQALAAAEANIAGAfIAPA/IAFAMQADAJAAAEQAAAGgFAEQgEADgFAAQgIAAgHgSgAgHAJIAagDIgHgfIgTAig");
	this.shape_12.setTransform(91.3,8.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990066").s().p("AAiA3QgGgMgDgPQgIACgQABIgWACIgPAgQgFAHgHAAQgGAAgEgDQgEgEAAgFQAAgFAOgdIgBgGQABgFAIgCQAPgWARgaQAWglAFAAQALAAAEANIAGAfIAPA/IAFAMQADAJAAAEQAAAGgFAEQgEADgFAAQgIAAgHgSgAgHAJIANgCIANgBIgHgfIgTAig");
	this.shape_13.setTransform(91.3,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_10}]},10).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).wait(9));

	// Layer 4
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#990066").s().p("AhDBLQgEgEAAgFIAAgNIABgMIAAgRIABgRIgBgRIAAgSIgBgSIgBgRQAAgGAFgFQAFgEAHAAQAHAAAIANQArA/ArAmIAAgPIgBg/IgBgLIgBgLQAAgNAOAAQAQAAAAAxIAAAQIgBA8IgBAPQgCANgNAAQgGAAgJgIQgmgigtg7IgBAdIABAXIAAAXQAAAdgOAAQgHAAgEgEg");
	this.shape_14.setTransform(106.7,17);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#990066").s().p("AhDBLQgEgEAAgGIAAgMIABgLIAAgRIABgSIgBgQIAAgTIgBgRIgBgSQAAgGAFgEQAFgFAHAAQAHAAAIANQArA/ArAmIAAgPIgBg/IgBgLIgBgKQAAgOAOAAQAQAAAAAyIAAAPIgBA7IgBAQQgCAMgNAAQgGABgJgIQgmgigtg7IgBAdIABAXIAAAYQAAAcgOAAQgHAAgEgEg");
	this.shape_15.setTransform(106.7,12.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#990066").s().p("AhDBLQgEgEAAgFIAAgNIABgLIAAgRIABgSIgBgRIAAgSIgBgSIgBgRQAAgGAFgEQAFgFAHAAQAHAAAIANQArA/ArAmIAAgPIgBg/IgBgLIgBgLQAAgNAOAAQAQAAAAAyIAAAPIgBA8IgBAPQgCANgNAAQgGAAgJgIQgmgigtg7IgBAdIABAXIAAAYQAAAcgOAAQgHAAgEgEg");
	this.shape_16.setTransform(106.7,8.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#990066").s().p("AhDBLQgEgEAAgGIAAgLIABgMIAAgRIABgSIgBgQIAAgTIgBgRIgBgSQAAgGAFgEQAFgFAHAAQAHAAAIAMQArBAArAmIAAgPIgBg/IgBgKIgBgLQAAgOAOAAQAQAAAAAyIAAAPIgBA7IgBAQQgCAMgNAAQgGABgJgIQgmgigtg7IgBAdIABAXIAAAYQAAAcgOAAQgHAAgEgEg");
	this.shape_17.setTransform(106.7,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_14}]},12).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).wait(7));

	// Layer 3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#990066").s().p("AgWBKQgFgEAAgGQAAgFAVgjIgWgfIgfgxQgCgDAAgEQAAgGAFgEQAEgDAFAAQAHAAAFAGIAHAMIARAcIAQAcIAVgtIAJgUQAEgJAJAAQAFAAAEADQAFAEAAAGQAAADgGAMIgUAsQgMAbgJAQIgPAeQgFAIgIAAQgFAAgEgDg");
	this.shape_18.setTransform(120.6,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(15).to({y:12.2},0).wait(1).to({y:7.9},0).wait(1).to({y:3.6},0).wait(1).to({y:7.9},0).wait(1).to({y:12.2},0).wait(1).to({y:16.6},0).wait(5));

	// Layer 2
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990066").s().p("AgcBLQgEgFAAgFQAAgHAEgGQAEgGAIgBQAHABAEAFQADAEAAAFQAAAGgDAFQgFAHgHAAQgGAAgFgDgAgVAhQgFgEAAgFQAAgJANgJIAVgPQANgJAAgIQgBgJgIgIQgKgHgHgBQgGABgJAFQgJAHgEAAQgGgBgEgEQgEgEAAgGQAAgJASgJQAOgGAKAAQATAAARAPQARAQAAAUQAAAVgUANIgQALIgOANQgEAFgFAAQgHAAgDgEg");
	this.shape_19.setTransform(133.1,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(25));

	// Layer 1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#9900FF").ss(2,1,1).p("ALpCfI3RAAIAAk9IXRAAg");
	this.shape_20.setTransform(74.5,17.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCCFF").s().p("AroCfIAAk9IXRAAIAAE9g");
	this.shape_21.setTransform(74.5,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0.6,151.1,33.9);


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
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AE3iIIAAERIptAAIAAkRg");
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
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AEaB8IozAAIAAj3IIzAAg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AkZB8IAAj3IIzAAIAAD3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-16.9,58.6,30.5);


(lib.general_buttoncolor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* play();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D5FFD7","#61EF01","#1DA400","#004A00"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgvAAgjgjQgjgjAAgwQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvQAAAwgjAjQgjAjgwAAIAAAAg");
	this.shape.setTransform(11.9,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.7,23.6);


(lib.frb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgpAbIAHgGQALALARAAQAPAAAMgLQALgMAAgPQAAgPgLgNIAGgHQAPAOAAAVQAAATgPAOQgPAPgSAAQgVAAgOgPg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.5,8.5);


(lib.frb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AghAWIAIgHQAIAJAMgBQALABAIgJQAJgJAAgLQABgLgJgJIAHgIQAMANAAAPQAAAPgMAMQgMAMgPAAQgRAAgLgMg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.8,6.8);


(lib.frb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_22:0});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgpAHQAAgTAOgPQAPgOATAAQAUAAAPAPIgHAHQgNgMgPAAQgPAAgLAMQgMALAAAPQAAARAMALIgHAHQgPgOAAgVg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.6,8.6);


(lib.frb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_23:0});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AghAFQAAgOAMgMQAMgMAOAAQAQAAANAMIgHAHQgJgJgNAAQgKAAgJAJQgJAJAAAKQAAANAJAJIgHAHQgMgLAAgSg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,6.9);


(lib.frb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABAIAAiAICAAAIAACAg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.frb_dot_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgMAOQgHgGAAgIQAAgGAHgGQAGgHAGAAQAIAAAGAHQAFAGAAAGQAAAIgFAGQgGAFgIAAQgGAAgGgFg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4,4);


(lib.frb_dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAOQgHgGAAgIQAAgGAHgGQAGgHAGAAQAIAAAGAHQAFAGAAAGQAAAIgFAGQgGAFgIAAQgGAAgGgFg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4,4);


(lib.frb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAKAAAKQgBAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,6);


(lib.frb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAKAAAKQgBAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,6);


(lib.frb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAKAAAKQgBAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,6);


(lib.fcb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABAIAAgKIB2AAIAAh2IAKAAIAACAg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.fcb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("Ag2A2IAAgKIBiAAIAAhiIAKAAIAABsg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,11,11);


(lib.fcb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("Ag7A7IAAh2IB2AAIAAAKIhsAAIAABsg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,12);


(lib.fcb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AgxAxIAAhiIBiAAIAAAKIhYAAIAABYg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,10,10);


(lib.fcb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABAIAAiAICAAAIAACAg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.fcb_check_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgLAiIAAAAIgVgWIgCgDIABgRQgBgGAGAAIAEACIAQAQIAggjIAFgCQAGAAAAAGIAAARIgCAEIgmAmIgEACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,7);


(lib.fcb_check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAiIAAAAIgVgWIgCgDIABgRQgBgGAGAAIAEACIAQAQIAggjIAFgCQAGAAAAAGIAAARIgCAEIgmAmIgEACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,7);


(lib.fcb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.fcb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.fcb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj9CqIAAlSIH7AAIAAFSg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.TalkieMick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiBbQgFgFgBgHQABgIAEgHQAGgIAKAAQAHAAAFAFQAEAFAAAIQAAAGgEAHQgFAIgJAAQgHAAgGgEgAgaAoQgFgEgBgHQAAgJAQgNIAagSQAQgLAAgJQAAgLgMgKQgLgKgKABQgHAAgLAGQgLAIgFAAQgGAAgFgFQgFgFAAgHQAAgMAVgJQARgJAMAAQAXAAAVATQAVATAAAZQAAAYgYARIgTANQgMAJgFAHQgFAGgIAAQgGAAgFgFg");
	this.shape.setTransform(104,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiBbQgFgEAAgHQAAgLAZg2QgNgYgcgyIgGgJQgDgFAAgFQAAgHAFgEQAFgFAHAAQAIAAAEAGQARAWAUAtIAQgiQAIgRAIgOQAFgJAJAAQAHABAFAEQAFAFAAAHQAAADgCAEIgpBSQgPAfgHAVIgHAVQgEALgLAAQgHABgFgFg");
	this.shape_1.setTransform(90.3,38.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXA2IgCgZQgCgNAAgLIAAgJIABgKIAAgEIAAgGQAAgKgFAAQgKABgIANQgKANgFARIgBALIgBALIgBAKIAAALQAAAGgFAFQgEAFgIAAQgHAAgFgFQgEgFAAgGIgBgKIgBgLIACggIACgfIAAgKIgBgLQAAgGAFgFQAFgFAGAAQAQABABASIAAACQASgSARAAQAXAAAIATQAGAMgBAaIAAAIIAAAGQAAAIADAPQACAPABAJQAAAGgGAFQgEAFgHAAQgPAAgCgPg");
	this.shape_2.setTransform(77.6,35.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAcA2IgTAIQgIACgEAAQgdAAgOgPQgOgPAAgeQAAgbAVgVQAVgTAbgBQAMAAAPAHQARAHAAALQAAADgCADIgCANIgBAQQAAAUADAKIAGANIAEALQAAAHgEADQgFAEgGAAQgGABgMgLgAgPgWQgMAMAAAPQAAAQAFAHQAGAIALAAQAGAAAGgCQAHgDAGgFQgEgaAAgNIABgJIABgLIgEgCIgDgBQgOABgMANg");
	this.shape_3.setTransform(64.4,35.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJBEQgFgEAAgHQAAgNgCgbQgDgYAAgNQAAgIgCgFQgNAJgOASIgCACIgBAkIAAAJIAAAIQAAAHgFADQgFAEgHgBQgKAAgEgIQgCgGAAgNIAAgqIgBgSIAAgRQAAgLADgIQAFgLAJAAQAGAAAFAGQAGAFAAAGIgBAKQARgVAQABQATAAAGANQAHgGAJgEQAJgCAKAAQAXAAAJAWIAFAhQADARAFAsQABAIgFAEQgFAEgHAAQgOAAgCgOIgFgiIgEggQgDgWgFAAQgCAAgKAGIgOAJQAAANADAYQADAaAAANQAAAHgFAEQgEAFgHgBQgFABgFgFg");
	this.shape_4.setTransform(48.4,35.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AADAlQgDgLgCgbIgDAEIgTAuQgBAFgEADQgEAIgKAAQgGABgGgLQgGgKgFgQQgEgPgHgvIgBgRQAAgGAEgFQAFgEAHAAQANAAACANQADAHABAJIABARIAFAcIAUg6QAFgPAMAAQAMAAAFARIAGAfIAGAgIAShGQADgKAMAAQAHAAAFADQAGAFAAAGIgBAEQgNAugMAkQgEALgIALQgFAIgKAAQgPAAgJgdg");
	this.shape_5.setTransform(20.1,35.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmAxQgRgQgBgcQAAgXAPgVQASgYAeAAQAYgBAOAUQAMAQAAAaQAAAagPATQgQAWgagBQgWAAgQgPgAgQgTQgHALAAANQAAAOAIAJQAHAFAIABQAIgBAIgGQAJgJAAgOQACgkgWAAQgMAAgJANg");
	this.shape_6.setTransform(5.2,35.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAxBaQgEgEAAgHIgBgaIgBgaIABgMQgUABgYAFIguAIIgCAaIgBAZQAAAGgEAEQgFAEgHAAQgHAAgFgEQgEgEAAgHIACgjIACgjIAAgqIABgtQABgGAEgFQAFgEAGAAQAHAAAFAFQAEAEABAGIgBAbIAAAbIgBAMIgBAMIAugIQAYgGAUAAIABgsQAAgIAFgMQAHgPAIAAQAHAAAEAEQAGAFAAAGIAAAEQgDAJAAAGIAAAKIgCAKIgBAiIgBAgIABAaIACAaQAAAGgFAFQgEAEgHAAQgHAAgGgEg");
	this.shape_7.setTransform(-10.1,32.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBbQgFgFAAgHQAAgIAEgHQAGgIAJAAQAJAAAEAFQAEAFAAAIQAAAGgEAHQgFAIgJAAQgHAAgGgEgAgbAoQgEgEAAgHQAAgJAPgNIAagSQAPgLAAgJQAAgLgLgKQgLgKgKABQgHAAgLAGQgLAIgEAAQgIAAgEgFQgFgFAAgHQAAgMAUgJQASgJAMAAQAYAAAVATQAUATAAAZQAAAYgYARIgUANQgLAJgFAHQgGAGgGAAQgHAAgGgFg");
	this.shape_8.setTransform(-37,32.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJBSQgGgEAAgHIABgNIAAgMIgCg7IgWgCQgPgCAAgOQAAgHAEgEQAFgFAHAAIAUABIAAgMIgBgLQAAgHAFgFQAFgEAHAAQAPAAAAAdIAAAKIAMgBQANAAAGACQAJADAAAMQAAAGgFAEQgEAFgHAAIgGAAIgGAAIgLABIACA9IAAAFIAAAHQAAAbgRAAQgEAAgFgEg");
	this.shape_9.setTransform(-60,33.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAcA2IgTAIQgIACgEAAQgdAAgOgPQgOgPAAgeQAAgbAVgVQAVgTAbgBQAMAAAPAHQARAHAAALQAAADgCADIgCANIgBAQQAAAUADAKIAGANIAEALQAAAHgEADQgFAEgGAAQgGABgMgLgAgPgWQgMAMAAAPQAAAQAFAHQAGAIALAAQAGAAAGgCQAHgDAGgFQgEgaAAgNIABgJIABgLIgEgCIgDgBQgOABgMANg");
	this.shape_10.setTransform(-72.5,35.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAbBWIgFgbQgCgQAAgLIAAgJIAAgJIAAgKQgBgFgFAAQgNAAgJAKQgGAGgJARQAAArgEAJQgEAKgLAAQgGAAgFgFQgGgEAAgHIABgGQABgDABgdIABhNIAAgEIABgTIgBgLIgCgLQAAgGAFgFQAFgEAGAAQANAAADAMQACAIAAAOIAAAYIgBAXQAJgIAKgEQAHgFAMAAQAVAAAIAMQAHAIABAQIACAdIACAXQACAOACAJIABAFQgBAGgFAFQgEAEgHAAQgMAAgEgMg");
	this.shape_11.setTransform(-86,32);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAXBcQgGgEAAgHQgGgOgBgJIgNhKQgIAWgIATQgOAcgEARIABAFQAAAIgGAEQgGAEgHAAQgJAAgFgEQgGgFgBgJIgDgNIgNg4QgIgagSg0IgBgGQAAgHAFgEQAFgEAHAAQAJAAAFAIQADAEAEALQAMAhAOA+QAKgXAJgdQAIgaAFgKQAMgaALAAQALAAAGAMQACAGADAQIADAYQACAVANAzIAhhSIAHgWQADgNAFgIQAGgIAJAAQAIAAAEAEQAFAEAAAHQAAADgEAKIgFAMIgGAVIgWAwIgVAzIgJAUQgGAKgLAAQgHAAgGgEg");
	this.shape_12.setTransform(-105.9,32.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghBbQgGgFgBgHQABgIAFgHQAFgJAKAAQAHABAFAFQAEAFAAAHQAAAIgEAGQgFAIgJAAQgHAAgFgEgAgaApQgGgGAAgGQAAgKAQgMIAagRQAQgMAAgJQAAgMgMgJQgLgKgKAAQgGAAgMAHQgLAIgFAAQgGAAgFgFQgFgGAAgGQAAgMAVgJQARgJAMAAQAYAAAUATQAVATAAAZQAAAYgYARIgTAOQgNAIgEAHQgFAGgIAAQgGAAgFgEg");
	this.shape_13.setTransform(20.6,-3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAbBWIgFgbQgCgQAAgLIAAgJIABgJIgBgKQgBgFgFAAQgNAAgJAKQgGAGgJARQAAArgEAJQgFAKgKAAQgGAAgGgFQgEgEAAgHIABgGQAAgDABgdIABhNIAAgEIABgTIgBgLIgCgLQAAgGAFgFQAFgEAHAAQALAAAEAMQACAIABAOIgBAYIgBAXQAJgIAKgEQAHgFAMAAQAVAAAIAMQAHAIABAQIABAdIADAXQABAOADAJIABAFQAAAGgGAFQgEAEgHAAQgNAAgDgMg");
	this.shape_14.setTransform(7,-4.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgkAzQgSgPAAgaQAAgVAQgaQATgcAXAAQANAAAQAGQAUAJAAAKQAAAGgEAFQgEAEgHAAQgFAAgHgFQgHgGgPAAQgHAAgKASQgLASAAAKQAAANAJAHQAJAGAMAAQAIAAALgGQAMgGADAAQAGAAAFAFQAEAFAAAGQAAAJgUAJQgSAIgLAAQgYAAgSgPg");
	this.shape_15.setTransform(-6.7,-1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNBWQgFgFAAgGIgBgXIAAgVIABgaIABgZQAAgHAFgEQAFgEAGgBQAGABAFAEQAEAEAAAHIgBAZIgBAaIAAAVIABAXQgBAGgEAFQgEAEgGAAQgHAAgEgEgAgKg7QgFgFAAgIQAAgHAFgFQAGgFAGAAQAHAAAGAFQAFAFAAAHQAAAIgFAFQgGAFgHAAQgGAAgGgFg");
	this.shape_16.setTransform(-15.8,-3.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAbBWIgFgbQgCgQAAgLIAAgJIAAgJIAAgKQgBgFgFAAQgNAAgJAKQgGAGgJARQAAArgEAJQgEAKgLAAQgGAAgFgFQgGgEAAgHIABgGQABgDABgdIAAhNIAAgEIACgTIgCgLIgBgLQAAgGAFgFQAFgEAGAAQANAAAEAMQABAIAAAOIAAAYIgBAXQAJgIAKgEQAHgFAMAAQAUAAAJAMQAHAIABAQIACAdIACAXQACAOACAJIAAAFQAAAGgEAFQgFAEgHAAQgMAAgEgMg");
	this.shape_17.setTransform(-26.3,-4.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAXBcQgGgEAAgHQgGgOgBgJIgNhKQgIAWgIATQgOAcgEARIABAFQAAAIgGAEQgGAEgHAAQgJAAgFgEQgGgFgBgJIgDgNIgNg4QgIgagSg0IgBgGQAAgHAFgEQAFgEAHAAQAJAAAFAIQADAEAEALQAMAhAOA+QAKgXAJgdQAIgaAFgKQAMgaALAAQALAAAGAMQACAGADAQIADAYQACAVANAzQAMgdAVg1IAHgWQADgNAFgIQAGgIAJAAQAIAAAEAEQAFAEAAAHQAAADgEAKIgFAMIgGAVIgWAwIgVAzIgJAUQgGAKgLAAQgHAAgGgEg");
	this.shape_18.setTransform(-46.1,-3.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgKBbQgGgIAAgGQAAgFAFgFQAFgEAGAAQAFAAAGAIQAGAHAAAFQAAAHgFAEQgFAEgGABQgFgBgGgHgAgHAzQgFgEAAgHIAAgNIAAgOIAAgvIAAgxQAAgGAFgFQAEgDAEAAQAHAAAEADQAFAFAAAGIAAB7QAAAHgFAEQgEAEgHABQgEgBgEgEg");
	this.shape_19.setTransform(-72.4,-4.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAbBYQgGgLgMgPIgRgYIgPALIgCAfQABAHgFAEQgFAFgGAAQgSAAABgUIABgbIABgdIABglIAAgnIAAgMIgBgMQABgHAEgEQAEgFAIAAQAHAAAEAFQAFAEAAAHIABAMIABANIgBAhIgBAfQAQgKAfgiQAFgEAHAAQAGgBAGAFQAEAFAAAGQABAGgFAFQgOAOgTAQIAZAhQARAXABAIQgBAGgFAFQgFAFgHAAQgJAAgFgJg");
	this.shape_20.setTransform(-81.1,-4.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAXA6QgPAGgOAAQgRgBgLgGQgNgJgDgPQgEgeAAgVQAAgPADgUQACgNAOAAQAHAAAFAEQAFAFAAAGIgCAQIgCARIABAbQABAMADAJIAGACIAFAAQALAAAQgDIAAgVIgBgSQAAgZADgRQABgOAPAAQAHAAAFAEQAFAFgBAHIgCApIAAAWIAAAYIABAHIAAAHQAAAIgFADQgEAFgHAAQgKAAgFgJg");
	this.shape_21.setTransform(-94.5,-0.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AA7BZQgIgBgKgVQgGgOgFgSIgcACQgSABgJACIgUAnQgEAJgKAAQgGAAgFgEQgGgFAAgHQABgGARgjIgCgHQAAgFALgEQARgbAVgfQAcgtAGAAQANAAAFAQIAHAmIASBMIAGAQQAEAKAAAFQAAAHgEAEQgGAFgFAAIgCAAgAgIAKIAOgBIARgCIgIgmIgXApg");
	this.shape_22.setTransform(-109.7,-3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},14).wait(46));

	// Layer 1
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgdAaIAAgCIAEgDIABACQAAAEgCAAIgDgBgAAZgVIAAgCIAEgDIABACQAAAFgCAAIgDgCg");
	this.shape_23.setTransform(86.9,52);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AHtFjQi9gdh9g1Qh3gzgyhDQACgGAFgFIABgBIgDgFIgNAAIgPADIkVgBQgpgFgkgJIgDgEIgJgKQgDgCgFAAIgDgMQgEAGAFAEIAAAAIABAAIAIAMIAAAAIAAABQAEgBADADIABACIgPgEQg+gRgvgaIgDgCQgdgQgYgVIgIgHIgEgEQhDg+AAhHQAAg0AUgjQAWgoA0gdQBwg9EqgXICKgBQAFgBAmgCIAtgDIEhAAQBygNBKB5QAbAsAQA1QANAsAAAaQAAAegXAoQgYAogeATQiKBVg0AFQgSADgkgFQgqgGgjAAIgsAAQglABgCACIg0gCIgBAHIADACIAAAAQAAAdApAjQAnAiBCAhQB9A9CGATgABTCIIACAAIAAgBIgBAAIgBABgAjXkhIAAACQAFAFAAgIIgBgCIgEADgAiflSIAAACQAFAFAAgIIgBgCIgEADg");
	this.shape_24.setTransform(105.5,83.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AJ4FsIiRgBQibgUiLgzQigg8ghhHIAAABQgLgJgKgDIkRABQgkgEgigHIgFgBIgBgBIgPAOQADgIAAgIIgMgEQgWgFgVgHIgGgCQgmgOgfgSIgCgBQgSgLgRgMIgGgFIgXgUIgBgBIgGgGQghgfgRgmQgPgiAAgeQAAg2AUglQAWgrA1geQB0hCE1gXICHgBIAsgEQApgCAGgCIEaAAQCFgMBJCBQAZAtAOA4QALArgBAaQABAOgPAgQgUApgfAjQheBqicAAIirgGQgBACgoABQAtBJBKApQBsA9DWAgIBTgBIADAAIAOgBQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIACAEIAAAGIgEABQgNgBgCgCgAHwFiQiGgTh8g9QhDgggmgiQgpgkAAgcIAAgBIgDgCIABgGIA0ABQACgBAlgBIAsgBQAjAAAqAGQAkAFARgCQA1gFCKhWQAegSAYgpQAXgoAAgdQAAgagNgtQgRg1gagrQhKh6hyANIkhAAIgtADQgnACgEACIiKABQkqAXhwA9Qg1AcgVAoQgVAkAAA0QAABGBEA+IAEAFIAIAGQAXAVAeARIADACQAvAaA+AQIAOAEIgBgCQgCgCgEAAIAAAAIgBgBIgIgLIAAAAIAAgBQgFgDADgGIAEALQAFAAACADIAJAKIAEAEQAkAIAoAFIEVABIASgCIAKgBIAEAFIgBACQgFAFgCAGQAyBDB3AyQB9A2C9AcIAMAAIAAAAgABKCHIAAgBIABAAIAAACIgBgBg");
	this.shape_25.setTransform(106.5,83.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgEAAIAAgBIAJADIgJgCg");
	this.shape_26.setTransform(115.9,103.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F4F4F4").s().p("AHFFNIgKgBIgEgBIgKgCIgRgDIjDgwIgMgEIgJgDIgOgGIgPgGIgFgCQhvgvgvg+QADgGAEgFQAAgEgCgCIgKABIgQACIjtgBIgUAAQgmgEghgIIgMgNIAAgBIgHgCIAGAKIABAAIAAABQAEgBACACIABACIgOgDQg5gQgsgYIgDgCQgbgPgWgUIgHgGIgEgEQg/g5AAhCQAAgwATghQAOgZAZgUQARgOAVgMQBpg4EVgWICAgBIAOgBIAKAAIAGgBIAJgBIArgDIEMAAQBqgMBFBxQAYAoAQAxQAMAqAAAYQAAAbgWAlQgSAfgXASQgIAIgJAFQiBBQgwAFQgRACghgFQgngFggAAIgpAAQgjABgBACIgngBIgKgBQACAjAmAhIAKAJIAaASIgLgQIAIAAQAfAVAqAWQBdAtBjAUQAYAFAYAEIgMAAQhTgNhFgSQBMAcBPALIgMAAgACYDxIAIADIgIgEIgUgJIAUAKgACQDDIAAAAIAIAGIgIgGg");
	this.shape_27.setTransform(94.8,75.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AKsGLIicgCQipgViWg4QiuhBgjhMIAAABQgMgKgKgDIkoAAQgogEgkgIIgFgBIgCAAIgQAPQADgJABgJIgOgEQgYgGgWgHIgGgCQgqgPgigUIgCgBQgTgMgTgNIgGgFIgZgWIgBgBIgHgHQgjghgSgpQgRglAAghQAAg6AVgoQAYgvA6ggQB+hIFOgZICTgBIAvgEQAtgCAGgCIExAAQCRgNBOCMQAbAwAPA9QAMAuAAAcQAAAPgQAkQgVAsgjAmQhkBziqAAIi4gHQgCABgkACIgHABIAKAQIgagTIgKgIQglghgCgjIAJAAIAnABQABgBAjgBIApgBQAgAAAoAGQAgAEARgCQAxgFCAhPQAJgEAIgHQAXgSASghQAWglAAgcQAAgYgMgpQgPgxgZgpQhEhwhrAMIkMAAIgqADIgKAAIgGABIgIAAIgOACIiCABQkVAVhoA5QgWAMgQAOQgaAUgOAYQgSAhgBAxQAABBA/A8IAEAEIAHAGQAXARAbAQIACACQAsAYA5APIAOAEIgBgCQgCgCgEAAIAAAAIAAgBIgHgJIAHABIABABIALANQAhAIAmAFIAUAAIDuABIAQgDIAMAAQABACAAAEQgEAFgDAFQAuA+BuAvIAGADIAOAGIAPAFIAJADQAhAiArAYQB1BCDoAiIBaAAIADgBIAPAAQAAAAAAABQAAAAAAABQABAAAAABQABAAAAABIADAEIAAAGIgFABQgOgBgCgBgAByCZIgJgHIAAAAIAJAHgABdC2IAUAKIAAAAIgUgKg");
	this.shape_28.setTransform(98.7,80.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AACABIgDgBIADABg");
	this.shape_29.setTransform(109.1,94.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E9E9E9").s().p("AE2EyQhNgMhAgQIAiABQAkAMAlAHIAtAIIgLAAgABdEXIAAAAIAFABIgFgBgAErEPIgCAAQgwgHgoAAIgBAAIgwAAIgBAAIgEAAIgfABIgLACIgEAAIAAAAIg3gCIgggMQhjgsgsg5QACgGAEgEQAAgEgBgBIgLAAIgPACIjbgBIgSAAQgjgEgggHIgKgMQgCgDgEAAIgDgJQgDAFAEADIAAAAIAHAKIABAAIAAABQAEgBACADIABABIgNgDQg1gOgpgXIgCgBQgagPgTgSIgHgFIgEgEQg6g1AAg8IAAgBQABgsARgfQAOgaAcgUIABAAQAPgOAXgMQBgg1D/gTIB5gBQAEgBAhgCIANgBQAKgCApgCIA0gDIFPAAQCFgPBWCMQAgA0AUA9QAOA1ABAcQgBAjgaAuQgcAxgjAWQiiBkg8AGIgPABQgTAAgcgEg");
	this.shape_30.setTransform(96.2,66.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ALhGpIipgBQi1gYiig8Qi7hGgmhSIgBABQgMgKgLgEIk/ABQgqgFgogIIgGgBIgBgBIgRARQADgKABgKIgPgEQgZgGgYgIIgHgDQgsgQglgVIgCgBQgWgNgUgOIgGgFIgbgYIgBAAIgIgIQglgkgUgsQgSgoAAgjQAAg/AXgrQAagzA+gjQCHhNFpgaICdgBQAGgCAugCQAvgDAHgCIFIAAQCcgPBUCXQAdA1AQBBQAOAxAAAfQgBAQgRAmQgWAvglAqQhuB7i1AAIhzgEIgigBIglgBIgGgDIgRgHIABAAIADAAIALgCIAggBIADAAIACAAIAwAAIABAAQAnAAAwAHIADAAQApAFAVgCQA8gGChhkQAkgWAbgvQAbguAAgjQAAgegPg1QgTg9ggg0QhWiMiGAPIlPAAIg2ADQgpACgJACIgMABQghACgEABIh4ABQkAAThgA1QgWALgQAPIgBAAQgcAUgOAaQgRAfAAAsIAAABQAAA8A5A3IAEAEIAHAFQAUASAZAPIADABQAoAVA2AOIAMADIgBgBQgCgDgDABIAAgBIgBAAIgHgKIAAAAQgFgDAEgDIADAHQADAAADADIAKAMQAgAHAiAEIASAAIDbABIAPgCIALAAQACABAAAEQgEAEgCAGQAsA5BjAsIAfAMIAjAMIAFACIgYABQA1BUBWAxQB9BGD6AmIBhgBIAEgBIAPAAQABACACADIADAEIAAAHIgGABQgOgBgCgCg");
	this.shape_31.setTransform(90.9,77.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DEDEDE").s().p("AF2EiQiUgWhjgrQhdgogmg1QACgEACgEQAAgEAAgBIgKAAIgOACIjJgBIgRAAQgfgEgdgGIgJgLQgCgCgEAAIgDgJQgDAEAEADIABAAIAGAJIAAABIAAAAQADAAACACIABABIgLgDQgxgNglgUIgCgCQgXgNgTgQIgGgGIgDgDQg2gwABg4IAAAAQAAgpAPgcQAPgaAdgUQAQgQAZgNQBYgwDrgSIBsAAIAigDIAkgCIDjgBQBagKA5BfQAWAiANAqQAKAjAAAUQAAAXgSAgQgTAfgYAPIgCABQgLANgMAIQhtBDgpAEQgOACgdgEQghgEgbAAIgiAAQgeABgBACIgIgBQAJAQARAQQAfAbA0AZQBPAmBTARQAVAFAUACIgKAAQiUgWhjgqQghgOgagPIAEAEQAeAbA1AZQBhAwBqAPIgLAAg");
	this.shape_32.setTransform(73.3,59.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AJnG7QjrgkidhDQiTg/hAhTIAAgBQADgHAFgFIABgBIABgCIABAAIgDgFIgDgBIgNAAIgCAAIgSADIgBAAIlYgBIgCAAQgygGgsgLIgDgBIgBgBIgDgEIgJgKIgBgBQgDgCgEgBIgDgCIgDgKIgBgBQgDAGAFAEIAAABIABAAIAJANIABABIAAABIABAAIABAAIABABQADAAACACIABABIABABIAAABIgSgFQhNgVg7ghIgBAAIgDgCQglgVgdgaIgJgHIgDgDIgCgDIgDgCQhShNAAhXIAAAAQAAhBAYgtQAcgxBAgjQCOhNFygdICsgBQALgCArgDIA5gDIFoAAQCPgRBcCWQAiA5AVBBQAQA4AAAgQAAAmgcAxQgeAzgmAXQitBrhBAGQgWADgsgGIgCAAQg0gHgqAAIgBAAIg1AAIgEAAQgoACgFABIgEAAIg8gBIgDACIgBAFIACACIABABIAAAAIABADQACAiAwArIACACQAxAqBRAnIACACQCbBLCmAYgAEqCSQhpgPhhgwQg1gagegbIgEgDQAaAPAgAOQBjAqCVAWIAKAAQgVgDgUgEQhTgRhPgmQg0gagfgaQgSgOgIgQIAIAAQABgBAdgBIAjgBQAbAAAhAFQAcAEAOgCQApgFBthDQAMgHALgNIADgCQAYgOASgiQASgfAAgXQAAgVgKgjQgNgpgVgiQg6hghaALIjjAAIgiACIghADIhvABQjqAShZAvQgYAOgQAQQgdAUgPAZQgQAcAAApIAAABQAAA3A1AyIADAEIAHAFQASARAXANIADABQAkAVAxANIAMADIgBgCQgCgCgDABIAAgBIgBAAIgGgJIAAAAQgEgDADgFIACAJQAEAAACACIAKALQAcAHAgAEIARAAIDJABIANgCIAKgBQACACAAADQgEAEgCAFQAoAzBcAoQBjAqCUAXIAKAAIAAAAg");
	this.shape_33.setTransform(81.9,74.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AMVHHIi1gCQjCgZithAQjIhLgqhYIAAABQgNgLgMgEIlVABQgugFgqgJIgGgBIgBAAIgTARQADgKABgLIgQgEQgbgHgZgJIgIgCQgvgRgogXIgCgBQgXgOgVgPIgHgGIgdgZIgBgBIgIgIQgogngVgvQgUgrAAgmQAAhDAZguQAbg2BDglQCRhTGCgcICpgBQAGgCAxgDQAygDAIgCIFfAAQCngPBaChQAgA4ARBGQAOA1AAAhQAAARgTApQgYAzgoAsQh0CEjDAAIjVgHQgCACgyACQA4BaBcA0QCHBMELAoIBogBIAEgBIARAAQAAACACADIAEAFIAAAGIgGACQgQgBgCgCgAJrG6QimgYiahLIgDgBQhRgogwgpIgCgCQgxgrgBgiIgBgDIAAgBIgCAAIgBgDIABgEIACgDIA9ACIAEAAQAEgCApgBIAEAAIA0gBIABAAQAqAAA0AIIADAAQArAGAXgDQBBgHCthqQAlgXAegzQAcgyABglQAAgggRg5QgUhBgig4QhciWiPAQIloAAIg5AEQgrACgLACIitABQlyAdiNBNQhBAjgbAyQgZAsAABBIAAABQAABXBTBMIACADIADADIACACIAJAIQAeAaAkAUIAEADIAAAAQA7AhBNAUIASAFIAAAAIAAgCIgBgBQgCgCgDAAIgBAAIgBAAIgCgBIAAAAIAAgBIgKgOIAAAAIAAAAQgGgEADgHIACACIADAKIADACQAEAAACACIABABIAKALIACADIACACIACABQAsAKAyAHIACAAIFYABIABAAIAUgDIACAAIAMgBIACACIADAEIAAABIgBABIgBABQgFAGgDAHIAAAAQA/BUCUA/QCcBCDsAkIAPAAIAAAAg");
	this.shape_34.setTransform(83.1,74.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D3D3D3").s().p("AFPEMQiIgUhagnQhVgkgigwQACgEADgEIgBgFIgKABIgMABIi3AAIgPAAQgdgEgagGIgIgKQgCgCgEAAIgCgIQgDAEAEADIAAAAIAGAIIAAABQADAAACABIABACIgLgDQgsgMgigTIgCgBQgVgMgRgPIgFgEIgDgEQgwgsAAgyQAAgmAOgZQAPgaAfgTIAAAAQAKgLAOgKIAMgIIAGgDQBRgrDVgRIBiAAIAfgDIAhgCIDOAAQBSgKA1BXQATAfAMAlQAJAgAAATQAAAVgQAcQgSAdgVANIgJAFQgMAQgOAIQhiA+gmADQgMACgagDQgegEgZAAIgfABIgSAAQAHAKALAKQAcAYAvAXQBHAjBMAPQASAEATACIgJAAQiHgUhagmIhOgrIgJgGQAGATAVASQAcAYAvAXQBZAsBfANIgJAAg");
	this.shape_35.setTransform(62.6,52.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AKQHYQj7gminhHQidhDhEhaQAEgHAFgGIABgBIABgCIAAgBIgDgEIgCgCIgPABIgCAAQgPACgEABIgCAAIlugBIgDAAQg0gHgwgLIgCgBIgCgCIgCgEIgKgLIgCgBQgCgCgFgBIgDgCIgDgLIgCgBQgDAHAGAEIAAABIABAAIAJAOIABABIAAABIACAAIABAAIABABQADAAACACIABABIABACIAAAAIAAAAIgKgDIgJgCQhSgWg/gjIgBAAIgDgDQgogWgfgbIgJgIIgDgDIgDgDIgCgCQhYhTgBhcIAAgBQAAhFAbgwQAdg1BFglQCXhSGKgfIC5gBQAMgCAtgDIA9gEIGAAAQCYgRBjCgQAjA8AWBGQASA7AAAjQgBAogdA0QghA3gnAYIgBABQi4BxhFAHQgYADgugGIgDAAQg3gIgtAAIgCAAIg3ABIgFAAQgqABgGACIgEAAIhAgCIgDADIgBAEIABADIAAAAIABAAIABABIABADQACAkAzAuIACACQA0AtBWAqIADABQClBRCxAZgADlBMQhfgNhZgsQgtgVgcgZQgUgSgHgTIAJAHIBNArQBaAkCHAUIAJAAQgTgDgTgEQhLgPhHggQgwgYgcgYQgJgJgHgKIAQgBIAggBQAYAAAfAEQAZAEANgCQAlgEBjg9QANgJAMgPIAKgGQAVgNARgeQARgdAAgVQAAgSgKggQgMgmgSgfQg1hWhSAJIjNABIghACIgeACIhlABQjVAQhRArIgFAEIgNAIQgNAJgKALIAAABQggATgOAZQgPAaAAAlQAAAzAwAuIADADIAGAFQARAPAVALIACACQAiATAsAMIAKACIAAgBQgCgCgDABIAAgBIgGgIIAAgBQgEgCACgFIADAJQAEAAABABIAJAKQAaAHAdADIAPAAIC3ABIAMgCIAJAAIACAEQgEAEgBAEQAkAwBVAjQBYAmCHAVIAJAAIAAAAg");
	this.shape_36.setTransform(74,71.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("ANKHlIjCgBQjOgbi4hFQjXhPgrheIgBABQgOgMgMgEIltABQgwgGgtgJIgHgBIgBgBIgTATQACgLACgLIgRgFQgegHgagJIgJgDQgygTgrgYIgBgBQgZgPgWgQIgHgGQgRgNgPgOIgBgBIgJgIQgqgqgXgyQgVguABgoQAAhIAagxQAdg5BHgoQCbhYGbgfIC1gBIA6gFQA2gDAIgCIF3AAQCygRBgCtQAhA8ATBKQAPA5AAAiQgBATgTArQgaA3grAvQh8CNjQAAIjjgIQgCACg1ACQA8BhBiA3QCQBQEdArIBugBIAFAAQAGgBAMAAQAAACACADIADAGIAAAHIgFABQgRgBgCgCgAKVHYQiygaikhQIgDgBQhXgrgzgsIgCgCQg0gugBglIgBgCIgBgBIgBAAIAAgBIgCgCIACgFIADgCIBAABIAEAAQAGgCAqgBIAEAAIA4gBIACAAQAsAAA4AIIADABQAtAGAZgDQBFgHC4hyIABAAQAngZAhg2QAdg1AAgoQAAgigRg8QgWhFgjg8QhjigiZARImAAAIg8AEQgtACgNACIi4ACQmLAeiXBSQhFAmgdA1QgaAvAABFIAAABQAABdBYBSIADADIADADIADACIAJAIQAfAcAoAWIADACIAAAAQBAAjBRAWIAKADIAJACIABAAIgBAAIAAgBIgBgBQgCgDgDAAIgBAAIgCAAIgBgBIAAgBIgBAAIgKgPIAAAAIAAAAQgGgEADgHIACABIADAKIADADQAEAAADACIACACIAKALIACADIABACIADABQAvALA1AHIADAAIFuACIACAAQAEgCAQgBIADAAIANgBIACABIADAFIAAABIgCABIAAABQgGAGgDAIQBDBZCeBDQCnBID7AmIARAAIAAAAg");
	this.shape_37.setTransform(75.3,71.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C8C8C8").s().p("AEnD3Qh6gThRgjQhMgggfgsQABgEADgDIgBgEIgIAAIgLACIilgBIgNAAQgagDgYgGIgIgJQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgDgIQgCAEADACIABABIAFAHIAAABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABABIgJgCQgogLgfgRIgCgBQgTgLgPgNIgFgEIgCgDQgsgoAAgtQABgiANgXQAOgaAigSIAAgBQAPgUAbgOQBJgnDAgPIBZAAQADgBAZgBIAdgCIC6gBQBKgIAwBNQARAcAKAiQAJAdAAAQQAAATgPAaQgQAZgTAMIgMAHIgEADQgNASgOAJQhZA3giAEQgLABgXgDQgbgDgWAAIgYAAIAFAFIACACQAZAWArAVQBAAfBEANIAiAGIgIAAQh6gShRgiQgygVgfgZIgMgBQABAZAaAXQAZAWAqAUQBQAoBVAMIgIAAg");
	this.shape_38.setTransform(51.8,44.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AK5H2QkLgpixhLQinhIhIhfQAEgIAGgGIABgBIABgCIAAgBIgDgFIgEgBIgPABIgDAAQgPABgEACIgCAAImGgBIgCAAQg4gIgzgMIgCgBIgBgCIgEgEIgKgMIgCgBQgCgCgFgBIgDgCIgDgMIgCAAQgDAHAGAEIAAABIABAAIAKAPIAAABIAAAAIACABIABAAIABABQADAAADACIABABIABACIAAAAIgUgFIAAAAQhXgYhDglIgBAAIgEgCQgpgYgigdIgJgIIgDgDIgDgDIgDgDQhdhYgBhiIAAgBQAAhJAcgzQAfg4BJgoQCghXGkggIDEgCQAOgCAugDIBBgEIGYAAQCigSBpCqQAlBAAXBJQATBAAAAkQAAArggA4QgiA6gqAaIgBAAQjDB5hKAHQgaADgwgGIgDgBQg7gIgwAAIgBAAIg7ABIgFAAQgrABgIACIgEAAQgtAAgYgCIgCADIgCAFIABADIACAAIAAABIABACIAAABQACAnA2AwIADADQA2AvBdAtIACABQCwBVC7AcgACgAGQhVgKhOgnQgqgVgZgWQgbgXAAgYIAMABQAfAZAxAVQBPAiB7ASIAIAAIgigGQhEgOhAgfQgpgUgZgWIgDgDIgEgEIAYgBQATAAAcAEQAXADALgCQAigDBZg4QAOgJANgSIAEgCIAMgIQATgLAPgbQAPgaABgTQAAgRgJgcQgKgigRgcQgwhOhKAJIi4AAIgeACQgYABgDABIhbABQjAAPhJAmQgcAPgOAUIgBAAQghATgOAZQgNAXgBAiQAAAuArApIADADIAFAEQAPAOATAKIACACQAfARAoAKIAJADIgBgBQAAgBgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgBAAIgEgIIgBAAQgDgCACgEIADAHQAAAAABAAQABABAAAAQABAAAAAAQABAAAAABIAIAJQAXAFAbAEIANAAICkAAIAMgBIAIgBIABAFQgDADgCAEQAiArBMAhQBPAjB6AQIAIAAIAAAAg");
	this.shape_39.setTransform(66.2,68.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AN+IDIjNgBQjcgdjDhJQjkhUgvhkIAAACQgPgNgOgFImCABQgzgGgwgJIgHgCIgCAAIgUATQADgLABgMIgTgFQgegIgcgJIgKgDQg1gUgtgaIgCgBQgbgQgXgRIgIgGQgRgOgQgPIgBgBIgJgJQgugsgXg2QgXgwAAgrQABhMAbg0QAgg9BLgrQClhdG1ggIC/gCQAHgBA3gEQA6gDAIgCIGOAAQC9gSBmC3QAkBAATBPQAQA8AAAlQAAAUgVAtQgbA6gtAzQiFCVjcAAIjxgIQgCACg6ADQBBBmBoA6QCYBWEvAtIB1AAIAGgBQAHgBALAAQABADACADIAEAGIAAAHIgHACQgRgCgDgCgAK9H1Qi7gbiwhVIgCgCQhdgtg2gvIgDgCQg2gxgCgnIAAAAIgBgDIAAAAIgCgBIgBgDIACgFIACgCQAYABAtABIAEgBQAIgBArgCIAFAAIA7gBIABAAQAwAAA7AJIADAAQAwAHAagDQBKgIDDh4IABgBQAqgaAig6QAgg4AAgqQAAglgTg/QgXhKglg/QhpiriiASImYAAIhBAFQguACgOADIjEABQmkAhigBWQhJAogfA5QgcAyAABKIAAABQABBiBdBYIADACIADAEIADACIAJAIQAiAeApAXIAEADIABAAQBDAlBWAXIABAAIAUAGIAAgBIgBgBIgBgBQgDgDgDAAIgBAAIgBAAIgCgBIAAgBIAAgBIgKgPIgBAAIAAAAQgGgEADgHIACAAIADALIADADQAFAAACACIACACIAKALIAEAEIABACIACACQAzAMA4AHIACAAIGGABIACAAQAEgBARgCIADAAIANgBIAEABIADAGIAAABIgBABIgBABQgGAHgEAIQBIBfCnBHQCxBMELAoIARAAIAAAAg");
	this.shape_40.setTransform(67.5,68.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BDBDBD").s().p("AEADhQhtgQhIgfQhEgegbgmQABgEADgDIgCgDIgHAAIgKABIiSAAIgMAAQgXgDgVgFIgHgIQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgCgGQgCADADACIAAABIAFAGIAAABQAAgBABAAQABAAAAABQABAAAAAAQAAAAABABIAAABIgIgCQgkgKgbgPIgBgBQgRgKgOgMIgEgDIgDgDQgmgkAAgnIAAgBQAAgeAMgUQANgXAegRIAKgFQANgVAcgPQBBgjCrgNIBPAAQADgBAVgBIAbgCIClAAQBCgIAqBFQAPAZAKAeQAHAZAAAPQAAARgNAXQgOAYgRAIIgYAPQgNAUgPAJQhPAygeADQgKACgUgDQgVgDgRAAIAIAGIAeASIAHAEIAIAEQA5AbA8AMIAeAFIgHAAQhsgQhIgeIgEgCIgrgWIgJgFIgLABIgdgBQABAWAXAVQAWATAlATQBHAjBMAKIgHAAg");
	this.shape_41.setTransform(41.1,36.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("ALjITIgBAAQkagri8hQQixhLhNhlIAAAAQAFgJAGgGIABgBIABgCIAAgBIgEgGIgDgBIgQABIgCAAIgWAEIgCAAImcgCIgDAAQg7gIg1gMIgDgCIgCgCIgCgEIgLgMIgCgCQgDgCgGAAIgDgEIgDgMIgCABQgDAHAHAEIAAABIAAAAIAKAQIABAAIAAABIACABIACAAIAAABQAEAAADADIABABIABABIAAABIgWgGIAAAAQhcgZhHgnIgBAAIgDgDQgtgZgigfIgKgIIgEgDIgDgDIgDgDQhjhdAAhoIAAgCQAAhNAdg2QAhg7BNgrQCrhcG7giIDQgCQAPgCAxgDIBEgEIGwAAQCrgTBvC0QAoBEAZBNQATBDABAnQgBAtgiA7QgkA9gtAcIAAAAQjPCAhOAIQgaADg0gGIgDgBQg/gJgyAAIgCAAIg+ABIgFAAQguABgIACIgEABIhIgCIgFACIgBAFIABADIAAABIABAAIAAABIADACQABAqA5AzIAEADQA5AyBiAwIACABQC6BaDHAdgABbg9QhMgLhFgjQglgSgXgUQgXgUgBgWIAeABIALgCIAJAGIArAVIAEACQBFAfBtAPIAHAAIgegFQg8gLg3gcIgIgEIgHgDIgegTIgIgGQARABAVACQASADAKgCQAegDBPgxQAPgKANgUIAYgOQARgLAOgYQANgXAAgQQAAgPgIgaQgJgegPgYQgqhFhCAHIijABIgbACQgVABgEABIhRAAQiqANhBAiQgdAPgNAWIgKAFQgdAQgNAXQgMAVAAAeIgBAAQAAApAnAlIADACIAEAEQAOAMARAJIABABQAbAQAkAJIAIACIAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIAAAAIgEgHIAAAAQgDgCACgEIACAHQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAIAGAIQAWAFAXADIALAAICTABIAKgCIAHAAIACAEQgEADgBADQAdAnBEAdQBJAfBqARIAIAAIAAAAg");
	this.shape_42.setTransform(58.3,65.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AOyIhIjYgBQjpgejPhNQjxhagxhpIgBABQgQgNgOgFImZABQg3gGgygKIgIgCIgBgBIgWAVQADgMABgNIgTgFQghgIgegKIgJgEQg4gUgxgbQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgbgQgagSIgIgHQgSgPgRgQIgBAAIgKgKQgwgvgZg5QgYgzAAgtQAAhRAeg3QAihBBPgtQCuhjHOgiIDMgBQAHgCA6gDQA9gEAJgCIGmAAQDHgTBtDCQAlBDAVBUQAQA/AAAnQABAVgXAxQgcA9gxA1QiLCfjqAAIj/gJQgCACg9ADQBEBsBuA+QCiBbFBAwIB8gBIAFgBQAHgBANABQAAACADAEIADAGIAAAIIgGABQgTgBgDgDgALmITQjGgdi6hbIgDgBQhhgwg6gyIgDgCQg6g0gBgpIgCgDIAAgBIgBAAIAAAAIgBgDIABgGIAEgCIBIACIAFAAQAIgCAugBIAEAAIA+gBIACAAQAzAAA+AJIADAAQA0AHAagDQBOgIDQiAIAAgBQAtgbAkg+QAig7AAgtQgBgmgThDQgZhOgohDQhui1irATImwAAIhFAFQgxACgPADIjPACQm8AiiqBcQhOAqghA8QgdA1AABOIAAABQABBoBiBdIADADIAEAEIADACIAKAJQAjAfAsAZIAEACIABAAQBHAoBcAYIAAAAIAVAGIAAAAIgBgCIAAgBQgEgDgEAAIAAAAIgBAAIgCgBIAAgBIgBgBIgLgQIAAAAIAAAAQgHgFADgHIACAAIAEAMIADADQAFAAAEADIABABIALAMIADAEIACADIACABQA2ANA7AIIADAAIGcABIACAAIAXgDIADAAIAOgBIADABIADAFIAAABIgBACIgBABQgGAHgEAIIAAABQBMBkCxBMQC8BQEaArIABAAIARAAIAAAAg");
	this.shape_43.setTransform(59.7,65.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B3B3B3").s().p("ADYDMQhfgPg/gbQg6gagagiIAEgFIgCgEIgGABIgIABIiAgBIgLAAQgUgCgSgFIgHgHIgDgBIgCgGQgBADACACIAEAGIAAAAIAAABQABgBAAAAQABAAAAABQABAAAAAAQAAAAABABIAAABIgHgCQgfgJgYgNIgBgBQgPgIgMgLIgEgDIgCgCQgighAAghIAAgBQABgaAKgSQAMgUAagPIATgJIADgGQAMgTAZgOQA6geCVgLIBGgBIAVgBIAXgCICRgBQA6gGAlA8QANAVAIAbQAHAWAAANQAAAPgMAUQgMAVgPAJIghARIAAABQgMAWgPAJQhFArgbADQgGABgMgBIAUALQAyAXA1AKQANADANACIgGAAQhfgOhAgaIgBgBIgSgIIgGgDIgGAAIgWABIgTABIgaAAQABATAUASQASARAiAQQA9AfBDAJIgHAAg");
	this.shape_44.setTransform(30.3,28.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AMLIwQkqgtjGhUQi7hQhQhqIAAgBQAEgJAGgHIABgBIACgCIAAgBIgEgGIgEgBIgRABIgCAAQgSACgFACIgCAAImzgBIgDAAQg/gJg4gNIgCgCIgCgDIgEgEIgLgMIgCgCQgDgCgGgBIgCgDIgFgNIgBABQgDAHAGAFIAAABIABAAQAFAIAGAIIABABIAAABIACABIABAAIAAABQAFgBADADIABABIABACIAAABIgWgGIgBAAQhhgahLgqIAAAAIgFgDQgugaglghIgKgIIgEgDIgDgEIgDgDQhphigBhuIAAgCQAAhSAgg4QAig/BSgtQC0hhHUgkIDbgCQAQgCA0gDIBHgFIHIAAQC1gUB1C/QAqBHAaBSQAVBGAAApQAAAvgkA/QgmBBgvAdIgBAAQjaCHhSAJQgdADg2gHIgDgBQhCgJg2AAIgBAAIhBABIgGAAQgvABgKACIgEABIhNgCIgEABIgBAGIAAAEIABAAIABABIACADQABAsA9A2IADADQA9A1BnAyIADABQDEBgDSAegAAWiDQhAgJg+gfQghgQgTgRQgUgSgBgTIAaAAIATgBIAWgBIAGAAIAGADIASAIIABABQBAAaBdAOIAGAAQgNgCgNgDQg1gKgwgXIgTgKQALABAHgCQAagDBDgrQAPgJAMgWIAAgBIAhgTQAPgJAMgVQAMgUAAgPQAAgNgHgWQgIgbgNgVQglg8g6AGIiPABIgXACIgVABIhHABQiWALg5AeQgaAOgMATIgDAGIgTAJQgaAPgMAUQgKASAAAaIAAABQgBAjAiAhIACACIAEADQAMALAPAIIABABQAYANAfAJIAHACIAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAIAAgBIgBAAIgEgGQgCgCABgDIACAGIAEABIAGAHQASAFAUACIALAAICAABIAIgBIAHgBIABAEIgEAFQAaAiA8AaQA/AbBdAPIAHAAIAAAAg");
	this.shape_45.setTransform(50.4,62.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("APnI/IjlgBQj1ggjchRQj9hfg1hvIAAABQgRgOgPgFImwABQg5gGg1gLIgJgCIgBAAIgYAWQAEgNACgOIgVgFQgigJgggLIgKgDQg8gWgygdIgDgBQgdgRgagUIgJgHQgTgPgSgRIgBgBIgKgKQgzgxgbg8QgYg3AAgvQAAhWAfg6QAjhEBUgvQC4hpHogkIDWgBQAHgCA/gEQBAgEAJgCIG9AAQDTgUByDNQAoBHAWBYQARBDAAApQAAAXgYAzQgeBBgyA4QiUCnj3AAIkNgJQgCAChAADQBIByB0BCQCrBfFSAzICDgBIAFgBQAIgBANABQAAACADAEIAEAGIAAAJIgHABQgTgBgDgDgAMPIwQjSgfjEhfIgDgCQhmgyg9g1IgDgCQg9g3gBgsIgDgCIAAgBIgCgBIAAgDIABgGIAFgCIBMACIAFAAQAJgCAwgCIAFAAIBBgBIACAAQA1AABCAKIADAAQA3AIAcgEQBSgIDbiHIAAgBQAvgdAnhBQAjg+AAgvQAAgpgUhHQgahSgrhHQh0i/i1AVInIAAIhIAEQgzADgQADIjcACQnUAkizBhQhSAsgjBAQgfA4AABSIAAABQABBuBoBiIADADIAEAEIADADIAKAJQAlAhAvAaIAEACIABABQBKApBiAaIAAAAIAXAGIgBAAIAAgCIgBgBQgEgDgEAAIgBAAIgBgBIgBgBIgBgBIgBgBQgGgHgEgJIgBAAIAAgBQgHgEADgHIACgCIAEANIADAEQAFAAAEADIABABIAMANIADAEIACACIADADQA4ANA/AIIACAAIG0ABIABAAQAFgBAUgCIADAAIAPgBIADABIAEAGIAAABIgBACIgBABQgHAHgEAJIAAAAQBQBqC7BQQDGBUEqAuIATAAIAAAAg");
	this.shape_46.setTransform(51.9,62.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A8A8A8").s().p("ACxC2QhSgMg2gYQgygWgWgeIADgEIgBgDIgFAAIgIABIhtAAIgJAAIghgGIgGgGIgDgBIADAEIAAAAIADABIAAABIgGgCQgbgHgUgLIgBgBQgNgHgKgJIgDgDIgCgCQgdgcAAgcIAAgBQABgWAJgQQAJgRAXgNQAMgHASgGQACgHAEgHQAKgRAWgMQAxgZCBgJIA7gBIATgBIAUgBIB8gBQAygGAfAzQAMATAHAWQAFATAAALQAAANgKARQgKASgNAIQgYAMgRAJIgFAJQgKASgNAJQgmAXgXAKQAqATAsAJIAXAEIgGAAQhEgKgwgRIgHACQgIABgPgCQgTgCgOAAIgTABIgRABIgWAAQAAAQARAPQARAPAcAOQA0AaA5AIIgFAAg");
	this.shape_47.setTransform(19.6,20.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AM0JOQk6gwjQhYQjFhUhUhwIAAAAQAEgKAHgIIABgBIABgBIAAgBIgEgHIgEgBIgSABIgCAAQgUACgFACIgBAAInLgBIgCAAQhDgJg6gOIgDgDIgDgCIgDgFIgMgNIgCgBQgDgDgHAAIgCgEIgEgOIgCACQgCAIAGAEIAAABIABAAQAFAJAGAIIAAABIABABIACABIABABIABAAQAFAAADADIABABIABACIABABIgZgHIAAAAQhngbhOgsIAAAAIgFgDQgxgbgngjIgLgJIgDgDIgDgEIgEgDQhuhogBhzIAAgCQAAhWAhg7QAkhDBXgvQC8hmHtgmIDngCQASgDA1gDIBLgFIHgAAQC+gVB7DJQAuBLAaBWQAWBKAAArQAAAxgmBDQgoBEgxAfIgBAAQjmCOhWAJQgeAEg5gIIgEgBQhFgKg4AAIgCAAIhEABIgGAAQgxACgLACIgEAAQg1AAgcgCIgFACIgBAGIAAAEIABABIABAAIADADIAAAAQABAuBAA6IACACQBBA4BsA1IADACQDOBkDdAggAgtjIQg5gIg1gbQgcgOgRgOQgRgQAAgQIAWABIARgCIATAAQAPgBASADQAPABAIgBIAHgBQAxAQBBAKIAGAAIgWgEQgqgIgrgTQAXgKAmgYQANgIAJgTIAEgIQASgJAYgPQANgHAJgSQALgRAAgNQAAgLgGgTQgHgXgLgSQggg0gvAGIh9ABIgUABIgSACIg+AAQiBAKgxAZQgWAMgJARQgEAGgDAIQgRAGgNAHQgXAMgJASQgJAPgBAXIAAAAQAAAfAdAbIACACIAEADQAKAJAMAHIABABQAVALAbAIIAFACIAAgBIgDgBIAAgBIgCgEIACABIAGAGIAhAGIAJAAIBtABIAIgBIAGgBIAAADIgDAFQAXAdAzAWQA2AYBSANIAGAAIAAAAg");
	this.shape_48.setTransform(42.6,59.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AQbJeIjxgCQkCghjnhWQkLhkg3h1IgBACQgSgPgPgFInGABQg9gHg4gMIgIgBIgCgBIgZAXQAEgNACgOIgWgGQgkgJghgMIgLgDQg/gXg1gfIgCgBQgfgSgcgVIgJgHQgUgQgTgSIgBgBIgLgKQg1g1gcg/Qgag5AAgyQAAhaAgg9QAlhHBZgzQDBhtICgnIDigBQAHgCBCgEQBDgEAKgCIHUAAQDegVB4DXQAqBLAXBdQASBHAAArQAAAXgZA2QgfBEg1A8QicCwkDAAIkcgKQgCAChDADQBLB4B7BFQCzBlFkA1ICKgBIAFgBQAJgBAOABQAAADADADIAEAHIAAAJIgHACQgVgCgDgCgAM4JNQjdggjOhkIgDgCQhsg1hBg4IgDgCQhAg6gBguIAAAAIgCgDIgBAAIgCgBIABgEIABgGIAFgCQAcACA0AAIAFAAQAKgCAygCIAGAAIBEgBIACAAQA4AABFAKIAEABQA5AIAegEQBWgJDmiOIABAAQAxgfAohEQAmhDAAgxQAAgrgWhKQgbhWgthLQh7jJi+AVIngAAIhLAFQg1ADgSADIjnACQntAmi8BmQhXAvgkBDQghA7AABWIAAACQABBzBuBoIADADIAEAEIADADIAKAJQAoAjAxAbIAEADIABAAQBOAsBnAbIAAAAIAYAHIAAgBIgBgCIgBgBQgEgDgFAAIAAAAIgBgBIgCgBIgBgBIAAgBQgHgIgEgJIgBAAIAAgBQgHgEADgIIACgCIAEAOIACAEQAHAAADADIACABIAMANIADAFIADACIACADQA7AOBDAJIACAAIHLABIABAAQAFgCAVgCIADAAIAQgBIADABIAFAHIAAABIgBABIgCABQgGAIgFAKIAAAAQBVBwDEBUQDRBYE5AwIAUAAIAAAAg");
	this.shape_49.setTransform(44.1,59.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("ARPJ8Ij9gCQkOgjjzhaQkYhog6h8IgBACQgTgPgPgGIneACQg/gIg7gMIgJgCIgBAAIgbAYQAFgOABgPIgWgGQgngJgigNIgMgEQhBgXg4ggQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgggTgegVIgJgIQgVgRgUgTIgBAAIgMgMQg3g3gehCQgbg8AAg1QAAheAihAQAnhLBdg1QDLhzIbgoIDtgBQAIgCBFgEQBHgFAKgCIHrAAQDpgWB/DiQArBOAZBiQASBKAAAtQAAAZgZA4QgiBIg3A+QikC5kQAAIkpgKQgDAChGADQBPB/CABIQC9BqF1A4ICRgBIAGgBQAJgBAOAAQAAADAEAEIAEAHIAAAJIgIACQgVgBgEgDgANhJqQjoghjYhqIgEgBQhxg4hEg7IgDgCQhDg9gBgwIgDgDIgBgBIgBAAIAAgBIAAgEIABgGIAGgBIBUACIAFgBQAMgCAzgBIAGAAIBIgBIABAAQA8AABJAKIADABQA8AIAfgEQBbgKDxiVIABAAQA0ggAqhIQAnhGABgzQgBgtgWhOQgdhagvhPQiBjTjIAWIn4AAIhOAFQg4ADgTADIjyACQoFAojHBrQhaAygnBGQgiA+AABaIAAACQABB6BzBsIAEAEIAEAEIAEADIAKAJQApAlAzAcIAFADIABABQBSAuBsAcIAAAAIAZAHIAAgBIgBgCIgBgBQgEgDgFAAIgBAAIgBgBIgBgBIgBgBIgBgBQgGgJgFgJIgBAAIAAgBQgHgFACgHIACgDIAFAOIACAFQAHAAAEADIACACIAMANIAEAFIACADIADADQA+AOBGAJIACAAIHiACIABAAIAcgEIACAAIARgCIAEABIAFAHIAAABIgCACIgBABQgHAIgFAKIAAABQBZB1DPBYQDaBdFJAyIABAAIAUAAIAAAAg");
	this.shape_50.setTransform(36.3,56.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#9D9D9D").s().p("ACJChQhEgLgugUQgpgTgSgYIACgEIgBgCIgEAAIgGABIhcgBIgHAAIgcgFIgEgFIgDgBIgBgEQAAABgBAAQAAAAAAABQAAAAABABQAAAAABABIADAEIAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABIABABIgGgCQgWgGgRgKIgBAAQgKgGgJgIIgDgCIgBgCQgZgXABgXIAAgBQAAgTAIgNQAIgPATgKQAQgJAbgHQABgOAGgJQAIgOATgKQApgVBsgHIAxAAIAPgCIARgBIBogBQApgFAbArQAJAPAGATQAFAQAAAJQAAALgIAOQgJAPgLAGQggARgTAIQgCAHgFAKQgJAPgKAHIgXAOQAfAMAgAGIATADIgFAAQgvgHglgKQgaAOgMACQgHABgNgBQgPgCgMAAIgQABIgOABIgSAAQAAANAOANQAOAMAXAMQAsAWAvAHIgFAAg");
	this.shape_51.setTransform(8.8,12.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("ANdJrIgBAAQlJgyjbhdQjOhYhZh1IAAgBQAEgKAIgIIABgBIABgCIAAgBIgEgHIgEgBIgTACIgCAAIgaAEIgBAAInigCIgCAAQhHgJg9gOIgDgDIgCgDIgEgFIgMgNIgCgCQgFgDgGAAIgCgFIgFgOIgCADQgDAHAIAFIAAABIAAAAQAFAJAHAJIAAABIABABIACABIABABIABAAQAFAAAEADIABABIAAACIABABIgZgHIgBAAQhrgchTguIAAgBIgFgDQgzgcgqglIgKgJIgDgDIgFgEIgDgEQhzhsgBh6IAAgCQAAhaAig+QAmhGBbgyQDGhrIGgoIDygCQATgDA3gDIBPgFIH4AAQDIgWCBDTQAvBPAdBaQAWBOAAAtQAAAzgnBGQgrBIg0AgIAAAAQjxCVhbAKQgfAEg9gIIgCgBQhKgKg7AAIgCAAIhHABIgGAAQgzABgMACIgFABIhUgCIgGABIgBAGIAAAEIAAABIABAAIABABIADADQAAAwBEA9IADACQBDA7ByA4IAEABQDYBqDoAhgAhykOQgwgGgrgWQgYgMgOgMQgOgNAAgOIATABIANgCIAQAAQANgBAOACQANACAHgCQAMgCAbgOQAkALAwAHIAFAAIgUgDQgfgGgfgNIAWgNQAKgHAJgQQAFgJADgIQASgHAhgTQAKgHAHgPQAIgOAAgKQAAgKgFgQQgEgSgJgPQgagrgpAFIhpABIgRABIgPABIgzAAQhrAIgpAVQgTAKgJAOQgFAJgCANQgbAHgQAJQgSALgJAPQgHANgBASIAAABQgBAaAZAXIACABIACADQAJAHAKAGIABABQARAJAXAHIAFABIgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAABIAAgBIgDgEQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIABAEIACABIAFAFIAbAFIAHAAIBcAAIAGgBIAFAAIABACIgDAEQASAZArATQAvAUBDAKIAGAAIAAAAg");
	this.shape_52.setTransform(34.7,56.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("ASEKaIkJgCQkcgkj+hfQklhtg9iBIgBACQgUgRgQgFIn0ABQhDgIg9gMIgKgCIgBgBIgcAaQAFgPABgQIgXgGQgogKglgNIgMgEQhEgZg7ghIgDgCQgigUgegWIgKgIQgWgSgVgTIgBgBIgMgMQg7g6gehFQgdg/AAg3QAAhjAkhDQAohPBig3QDUh5I1gqID5gBQAIgCBIgEQBKgFALgDIICAAQD1gXCEDtQAuBSAZBnQAUBNAAAwQAAAagbA6QgjBMg6BBQirDCkeAAIk3gLQgCADhLADQBTCECHBMQDFBvGHA6ICYgBIAGgBQAKgBAPAAQAAAEADAEIAFAHIAAAKIgIACQgXgCgDgDgAOKKIQjzgkjjhuIgDgCQh3g6hHg9IgDgDQhHg/AAgzIAAgBIgEgCIAAgBIgCgBIABgEIABgHIAGgBIBYACIAGgBQAMgBA1gCIAHAAIBLgBIABAAQA+AABNALIADAAQA/AJAhgEQBfgKD9icIAAgBQA3ghAshMQAphJAAg2QAAgvgYhSQgdhegyhSQiHjejRAYIoQAAIhTAFQg5ADgUAEIj+ACQoeAqjQBvQhfA0goBKQgkBBAABfIAAACQABB/B5ByIAEADIAEAFIAEADIAKAJQAsAnA1AeIAFADIABAAQBWAwBxAeIABAAIAaAIIgBgCIgBgCIgBgBQgEgDgGAAIAAAAIgBgBIgCgCIgBAAIAAgCQgHgIgFgKIgBAAIAAgBQgHgFACgHIACgEIAFAPIACAFQAHAAAFADIABACIANAOIAEAFIADADIADADQBAAPBKAKIACAAIH5ABIABAAIAdgEIACAAIASgBIAEAAIAFAIIABABIgCACIgBABQgIAJgFAKIAAABQBdB7DZBcQDlBhFYA1IAWAAIAAAAg");
	this.shape_53.setTransform(28.5,53.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#929292").s().p("ABiCLQg3gJglgQQgggPgQgUIACgDIAAgCIgEAAIgFABIhJgBIgGAAIgWgEIgDgEIgCgBIgBgDQgBABAAAAQAAABAAAAQAAAAAAAAQAAABABAAIAAAAIACADIABAAIABABIABABIgEgCQgTgFgNgHIgBgBQgIgFgHgGIgCgCIgBgBQgUgSAAgVIABgBQAAgNAGgKQAHgMAPgJQATgLAngHIgBgFIAAgDQABgPAGgJQAGgMAQgHQAhgRBUgGIAqAAIAMgBIAOgBIBTgBQAhgEAVAiQAIAMAFAPQADANAAAHQAAAJgGALQgHAMgJAFQgnAXgPABIgLAAIABAJQAAAIgHAMIgFAIQAXAJAYAEIAPADIgEAAQgigFgbgHIgHAGQgoAZgOADQgGABgKgBQgMgCgKABIgMAAIgLACIgNgBQAAALAJALQALAJATAKQAiARAmAGIgEAAg");
	this.shape_54.setTransform(-1.9,5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AOFKJQlZg1jlhhQjYhchdh7IAAgBQAFgKAHgJIACgBIABgCIAAgBIgFgIIgEAAIgUABIgDAAIgaAEIgCAAIn4gBIgDAAQhJgKhBgPIgDgDIgCgDIgEgFIgNgOIgCgCQgEgDgHAAIgCgFIgFgPIgCAEQgDAHAHAFIAAABIABAAQAFAKAHAIIABACIABAAIABACIABABIABAAQAGAAAEADIABABIABACIAAACIgagIIgBAAQhwgehXgwIAAAAIgFgDQg2gegrgnIgLgJIgEgDIgEgFIgEgDQh5hygBh/IAAgCQAAhfAkhBQAphKBfg0QDPhvIegqID+gCQAVgEA5gDIBSgFIIQAAQDSgYCHDeQAxBSAeBeQAXBSABAvQAAA2gqBJQgsBMg2AhIgBABQj9CchfAKQggAEg/gJIgEAAQhMgLg+AAIgCAAIhLABIgGAAQg1ACgNABIgFABIhYgCIgHABIgBAHIgBAEIACABIABABIADACIAAABQABAzBGA/IAEADQBGA9B3A6IAEACQDiBuD0AkgAi4lTQglgGgjgRQgTgKgKgJQgMgLAAgLIAPABIALgCIANAAQAKgBAMACQAKABAFgBQAPgDAogZIAHgGQAbAHAhAFIAEAAIgPgDQgXgEgXgJIAFgIQAHgMAAgIIgCgLIAMAAQAOgBAogXQAJgFAGgMQAHgLAAgJQAAgHgEgNQgEgPgIgMQgVgighAEIhUABIgNABIgNABIgpAAQhXAGghARQgPAHgHAMQgGAJAAAPIAAADIABAFQgnAHgUALQgPAJgGAMQgGAKgBAPIAAABQgBAVAUASIABABIADACQAGAGAJAFIABABQANAHASAFIAEACIAAgBIgCgBIAAAAIgCgDIgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIABADIACABIAEAEIAWAEIAGAAIBJABIAFgBIADAAIABACIgCADQAPAUAjAPQAlAQA2AJIAEAAIAAAAg");
	this.shape_55.setTransform(26.8,53);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AS5K4IkWgBQkognkJhjQkzhyhAiHIgBADQgUgSgSgGIoKACQhFgJhBgMIgKgDIgBAAIgdAaQAEgPACgQIgZgHQgqgKglgNQgGgDgIgCQhHgag9gjIgDgCQgkgVgfgXIgLgIQgXgTgVgUIgCgBIgMgNQg+g8gghJQgehBAAg6QAAhnAlhGQAshSBlg6QDeh+JPgsIEEgCQAIgCBLgEQBOgFALgDIIaAAQEAgYCKD4QAwBWAaBrQAVBRAAAxQgBAbgcA+QgkBPg9BEQizDKkqAAIlGgLQgCADhNADQBWCKCNBPQDOB0GZA9ICeAAIAHgCQAKgBAQABQAAADADAEIAFAIIAAAKIgIACQgYgCgDgDgAO0KlQj/gljthzIgDgCQh9g9hJhAIgFgDQhIhCgBg2IAAAAIgEgCIgBgBIgCgBIAAAAIACgFIABgHIAGgBIBdADIAFgBQAOgCA3gCIAHAAIBNgBIADAAQBAAABRALIADABQBBAJAigEQBkgLEIijIABgBQA4gjAvhPQArhMAAg4QgBgygYhVQgfhigzhWQiNjojbAYIooAAQgLAChLAEQg8ADgWAEIkKACQo2AsjZB0QhjA3grBNQglBEgBBjIAAACQACCFB+B4IAFADIAEAFIAFADIAKAKQAtAoA4AfIAGADIAAABQBaAyB2AfIABAAIAbAIIgBgBIgBgCIAAgBQgFgEgGAAIAAAAIgBgBIgCgCIgBgBIgBgBIgMgTIgBAAIAAgBQgIgFADgIIACgEIAFAQIACAFQAIAAAFADIACACIANAPIAEAFIACADIADAEQBFAPBLALIAEAAIIOABIACAAQAGgCAYgCIADAAIATgCIAEABIAFAIIABABIgCACIgBABQgIAJgFALIAAABQBgCADjBhQDwBmFnA2IACAAIAWAAIAAAAg");
	this.shape_56.setTransform(20.7,50.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#878787").s().p("AA6B1QgqgGgagNQgagLgLgPIABgDIAAgBIgDAAIgEAAIg3AAIgEAAIgRgDIgCgDIgCgBIgBgCQAAAAAAAAQAAABAAAAQAAAAAAAAQABABAAAAIAAAAIACADIABAAIAAABIgDgBQgNgEgLgGIAAgBQgHgDgFgFIgBgBIgBgBQgPgOAAgQIABAAQAAgMAFgGQAFgJAMgGQAXgOA+gGIgHgIIgGgPIAAgCIAAgBQAAgKAFgHQAFgIAMgGQAZgMA/gEIAgAAIAJgBIALgBIA/gBQAZgDAQAZQAFAJAEALQADAKAAAFQAAAHgFAIQgGAJgGADQgeASgLAAIgLAAIgRgCIgJABIgJAAIgDgBQAFAIADAIIAQAJQAVAJAWADIAMACIgDAAQgngFgbgKIABAKQAAAHgEAJQgGAJgGAEQgeAUgLABQgEABgHAAIgRgBIgHABIgJABIgLAAQAAAIAJAIQAIAHALAHQAaAOAcADIgDAAg");
	this.shape_57.setTransform(-12.6,-2.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AOvKmIgBAAQlog2jwhmQjihhhhiAIAAgBQAFgLAIgJIABgBIACgCIgBgBIgFgIIgEgBIgVACIgDAAQgWACgFACIgCAAIoPgBIgDAAQhMgLhEgPIgDgEIgDgDIgEgFIgNgPIgCgCQgFgDgHAAIgCgFIgGgQIgCAEQgCAIAHAFIAAABIABAAIAMATIABABIABABIACACIABABIAAAAQAGAAAFAEIABABIABACIABABIgcgIIgBAAQh1gfhbgyIAAgBIgFgDQg5gfgtgoIgKgKIgFgDIgEgFIgEgDQh/h4gBiFIAAgCQAAhjAmhEQAqhNBjg3QDZh0I3gsIEKgCQAVgEA8gDQBLgEALgCIIoAAQDbgYCNDoQAzBWAfBiQAZBVAAAyQAAA4grBMQguBPg5AjIgBABQkICjhjALQgiAEhCgJIgDgBQhQgLhBAAIgCAAIhOABIgHAAQg3ACgOACIgFABIhcgDIgHABIgBAHIgBAFIAAAAIABABIABABIAEACIAAAAQABA2BJBCIAEADQBJBAB9A9IADACQDtBzD/AlgAj9mZQgbgEgagNQgOgHgIgHQgIgIAAgJIALAAIAIAAIAKgBIAQAAQAIABAEgBQALgCAdgTQAHgEAFgKQAFgJAAgHIgBgJQAaAJAnAGIADAAIgLgCQgWgDgVgKIgQgIQgDgKgFgJIADACIAIgBIAKAAIAQABIAMABQALAAAegSQAGgEAFgIQAFgJAAgGQAAgGgDgJQgDgLgGgJQgQgZgZADIg/ABIgKABIgKAAIgfAAQhBAFgaAMQgLAFgFAIQgFAHAAAKIAAABIAAADIAFAOIAIAJQg+AFgYAOQgMAHgFAJQgEAIgBALIAAABQAAAPAOAPIABABIACABQAFAEAGAEIABAAQAKAGAOAEIADABIAAAAIgCgBIgCgCIAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIABADIABAAIADADIAQAEIAFAAIA3AAIADgBIADAAIABACIgCACQAMAPAaAMQAcAMAqAHIACAAIAAAAg");
	this.shape_58.setTransform(18.9,50);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("ATsLWIkhgCQk1gokUhnQlBh3hDiNIAAADQgWgSgSgHIohACQhIgJhDgNIgLgCIgBgBIgeAcQAEgQACgRIgagHQgrgLgogOQgGgDgHgBQhLgchAgkIgDgCQglgWghgYIgLgJQgYgTgWgWIgCgBIgNgMQhAhAgihLQgfhFAAg8QAAhsAnhJQAthVBqg9QDoiDJnguIEQgCQAJgCBOgFQBRgFAMgCIIxAAQEKgaCREDQAyBZAcBwQAVBVAAAzQAAAcgeBBQgmBSg/BHQi7DTk3AAIlUgLQgCAChRAEQBaCQCTBTQDYB5GqA/IClgBIAHgBQAKgBARABQAAADAEAEIAFAIIAAALIgJACQgZgCgEgDgAPcLCQkJgmj4h5IgDgCQiCg/hNhEIgEgCQhMhGgBg3IAAgBIgEgCIgBgBIgCgBIAAAAIACgFIABgHIAHgBQAiACA+AAIAGAAQAPgCA5gCIAHAAIBRgCIACAAQBEAABTAMIAEABQBEAJAkgEQBogLETiqIABgBQA7gkAxhTQAshQAAg6QAAg0gahYQgghng1haQiUjyjkAaIpBAAQgKABhPAFQg9ADgYAEIkVACQpPAujiB5QhoA5gsBQQgoBHAABoIAAACQACCLCEB9IAEADIAFAFIAEAEIALAKQAvApA7AhIAFADIABABQBeA0B7AhIABAAIAdAIIgBgBIgCgDIgBgBQgEgEgHABIAAgBIgBgBIgCgBIgBgBIgBgCQgHgJgFgKIgBAAIAAgBQgIgFACgJIADgFIAFARIACAGQAIAAAFADIACACIAOAPIAEAFIADAEIADAEQBHAQBPALIADAAIImABIACAAQAGgCAZgCIADAAIAUgCIAEABIAGAIIABACIgCACIgCABQgIAJgFAMIAAAAQBlCGDsBlQD6BqF4A5IABAAIAWAAIAAAAg");
	this.shape_59.setTransform(12.9,47.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#7C7C7C").s().p("AATBgQgbgFgTgJQgSgIgIgKIABgCIAAgBIgCABIgCAAIglAAIgDAAIgLgDIgCgCIgBAAIABABIAAABIABAAIAAAAIgCAAQgJgDgHgEIAAgBIgIgFIgBgBIAAgBQgKgJAAgLIAAAAQABgIADgGQAEgGAIgEQARgIAsgFIAVgBIAGAAIAHgBIAXgBIASABQARgBAKARQAEAHADAIIABALQAAAEgDAGQgDAHgFADQgTANgIACIgFAAIgLAAIgHABIgFABIgIAAQAAAFAFAGQAGAFAJAEQAPAKARACIgBAAgAB9gFQgcgDgTgHQgRgHgJgJIABgBIAAgBIgCAAIgCAAIgpACIgIABIgEgBIgBgCIgBgBIgBgBIAAABIACACIAAAAIABAAIAAABIgCgBQgJgCgHgDIAAAAIgIgGIgBgBIgBAAQgJgJgBgJQABgGADgFQAEgFAHgEQASgHAqgDIAVAAIAHgBIAHAAIArgBQARgDAKARIAGANIACAKQAAAEgDAGQgEAGgEACQgUALgHAAIgIAAIgLgBIgGAAIgGAAQgFgDgCAAQAAAFAGAFQAGAEAJAFQAOAFAPACIAHABIgCAAg");
	this.shape_60.setTransform(-23.4,-10.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("APYLDIgBAAQl4g5j6hqQjshlhliGIAAAAQAFgMAJgJIABgBIACgCIgBgCIgGgIIgEgBIgWACIgDAAQgXACgFACIgDAAIomgBIgCAAQhQgLhHgQIgDgEIgDgEIgEgFIgOgPIgCgCQgFgDgHAAIgCgGIgGgRIgCAFQgDAJAIAFIAAABIABAAQAFAKAIAJIAAACIABABIACABIABABIAAABQAHgBAFAEIABABIABADIABABIgdgIIAAAAQh7ghheg0IgBgBIgGgDQg6ghgwgpIgLgKIgEgEIgFgFIgDgDQiFh9gBiLIAAgCQAAhoAnhHQAshQBog5QDjh5JOguIEVgCQAYgEA+gDQBOgFALgBIJAAAQDkgaCUDyQA2BaAgBnQAaBYAAA0QAAA6gtBQQgxBTg7AkIAAABQkUCqhoALQgjAEhFgJIgDgBQhUgMhEAAIgBAAIhRACIgIAAQg5ACgPACIgGAAQg9AAgigCIgHABIgCAHIgBAFIAAAAIACABIABABIADACIAAABQABA3BNBGIADACQBOBECBA/IAEACQD3B5EKAmgAlCnfQgSgCgRgKQgJgEgFgFQgFgGAAgFIAIAAIAFgBIAGgBIALAAIAIAAQAHgCAUgNQAEgDAEgHQADgGAAgEIgCgLQgCgIgEgHQgLgTgQABIgUgBIgXABIgHABIgGAAIgVABQgsAFgSAKQgIAEgDAGQgDAGgBAIIAAAAQAAALAJAJIABABIABABIAHAFIABABQAHAEAJADIACAAIAAAAIgBAAIAAgBIgBgBIABAAIACACIALADIADAAIAkAAIADAAIACgBIAAABIgBACQAIAKASAIQATAJAdAFIABAAIAAAAgAjXpGIgHgBQgPgCgOgFQgJgFgGgEQgGgFgBgFQADAAAFADIAGAAIAGAAIALABIAIAAQAHAAAUgLQAEgCADgGQAEgGAAgEIgCgKIgGgNQgKgRgRADIgrABIgIAAIgGABIgWAAQgsADgRAHQgIAEgDAFQgDAFgBAGQABAJAJAJIABAAIABABIAIAGIAAAAQAHADAJACIACABIAAgBIgBAAIAAAAIgCgCIAAgBIABABIABABIABACIADABIALgBIAogCIADAAIACAAIAAABIgBABQAIAJASAHQATAHAcADIACAAIAAAAg");
	this.shape_61.setTransform(11.1,47);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AUhL0IktgBQlCgqkghsQlOh8hGiSIAAACQgXgTgTgGIo3ACQhMgKhGgNIgLgDIgBAAIgfAcQAEgQACgSIgbgHQgtgLgpgPIgOgFQhOgchCgmIgEgCQgmgXgjgZIgLgJQgZgUgXgWIgCgBIgOgOQhChCgjhPQghhHAAg/QAAhwAphMQAuhZBvg/QDxiJKCgwIEbgBQAJgDBSgEQBUgGAMgDIJIAAQEWgaCWENQA0BeAdB0QAWBYAAA2QAAAdgfBDQgnBWhCBKQjDDclEAAIligMQgCADhUADQBeCWCZBWQDgB+G8BDICtgBIAHgCQAKgBASABQAAADAEAFIAFAIIAAALIgJADQgagCgEgEgAQFLgQkUgpkCh9IgEgCQiHhChQhGIgEgDQhQhIAAg7IAAAAIgFgCIgBgBIgBgBIAAAAIABgFIACgIIAIgBIBjADIAGgBQAQgCA7gCIAIAAIBUgBIACAAQBHAABXAMIADABQBIAJAkgEQBsgMEfixIABgBQA+gmAyhWQAvhTAAg9QAAg1gbhdQgihqg3heQiaj8juAaIpYAAIhdAHQhAADgYAEIkhACQpoAwjsB+QhsA8guBTQgpBKAABsIAAADQACCQCKCCIAEAEIAFAFIAFAEIALAKQAxArA9AiIAFAEIABAAQBiA3CAAiIABAAIAeAIIgBgBIgBgCIgBgBQgFgFgHABIAAgBIgCgBIgBgCIgBgBIgBgBIgNgUIgBAAIAAgBQgIgGACgIIACgGIAGASIACAGQAIAAAGADIACACIAOAQIAEAFIADAEIAEAEQBJARBTAMIADAAII9ABIACAAQAGgCAagCIADAAIAVgCIAFAAIAFAJIABABIgCADIgBABQgJAJgFAMIAAABQBpCMD2BpQEEBuGIA8IABAAIAXAAIAAAAg");
	this.shape_62.setTransform(5.1,44);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#717171").s().p("AgTBKQgPgCgKgFQgJgFgFgGIABAAIgBgBIgBAAIgBAAIgSAAIgCAAIgFgBIgBgBQgFgBgEgDIgEgCIAAgBIgBAAQgFgFABgGIAAgBIACgHQACgDAFgDQAJgFAXgDIALgBIADAAIADAAIANgCIAKACQAJAAAFAKIADAHIABAGIgBAGIgEAGQgKAHgEABIgEABIgFAAIgDABIgDABIgEAAQAAADACADIAHAFQAIAEAIABIgBAAgABcgkIgDAAIABAAIAAAAIACAAIACABgABRglIgGgBIgFgBQgJgDgFgFIABAAIgBgBIAAAAIgCAAIgVACIgHACIgBAAIgBgBIgBAAIgHgCIgBAAIgDgDIgBAAIAAgBQgFgEAAgEQAAgDACgBQACgDAEgBQAKgDAWgBIAMAAIAEAAIAEAAIAWgCQAIgBAGAIIADAGIABAFIgCAFQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQgKAFgDAAIgEgBIgGAAIgDAAIgDAAQgCgEgBAAQAAADADADQACACAFABIABAAIADABIgBAAIAAAAg");
	this.shape_63.setTransform(-34.1,-18.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AQBLhIgCAAQmHg8kEhuQj2hphpiMIAAgBQAFgMAJgJIABgBIACgDIgBgBIgGgJIgEAAIgXACIgDAAQgYACgGACIgCAAIo9gBIgDAAQhTgMhJgRIgEgEIgDgEIgEgFIgOgQIgCgCQgGgDgIAAIgCgGIgGgSIgCAGQgDAIAJAGIAAABIABAAIAMAUIABABIABABIACACIACABIAAABQAHgBAEAFIABABIABACIABABIgdgIIgBAAQiAgihig3IgBAAIgGgEQg8gigxgrIgLgKIgGgEIgEgFIgFgEQiKiCgBiQIAAgDQAAhsAphKQAuhTBsg8QDsh+JogwIEggCQAZgEA/gDIBdgHIJZAAQDugaCaD8QA3BeAhBqQAbBdABA1QAAA9gvBTQgyBWg+AmIgBABQkfCxhsAMQgkAEhIgJIgEgBQhXgMhGAAIgCAAIhVABIgIAAQg6ACgQACIgGABIhkgDIgHABIgCAIIgCAFIAAAAIACABIABABIAFACIAAAAQAAA7BQBIIADADQBRBGCHBCIAEACQEBB9EVApgAmppjIgLABQgYADgJAFQgEADgCADIgCAHIgBABQAAAGAFAFIABAAIAAABIAEACQADADAFABIABABIAGABIABAAIATAAIABAAIABAAIABABIgBAAQAEAGAJAFQALAFAPACIABAAQgIgBgJgEIgGgFQgCgDAAgDIAEAAIADgBIACgBIAGAAIAEgBQADgBALgHIADgGIACgGIgBgGIgDgHQgFgKgJAAIgKgCIgNACIgDAAIgDAAgAkXqUIACAAIgDgBIgBAAIAAAAIgBAAIADABgAk8qhIABAAIAAABIAAAAQAFAFAJADIAFABIAHACIAGAAIgGgBIgDAAIgBgBQgFgBgDgCQgCgDAAgDQAAAAADAEIADAAIADAAIAFAAIAFABQADAAAKgFQABAAAAAAQABgBAAAAQAAAAABgBQAAAAABgBIACgFIgBgFIgEgGQgFgIgIABIgXACIgEAAIgDAAIgMAAQgXABgJADQgEABgDADQgBACAAADQAAAEAEADIABABIAAAAIAEADIABAAIAHACIABAAIABABIABAAIAHgCIAVgCIABAAg");
	this.shape_64.setTransform(3.2,43.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#666666").s().p("Ag/A3QgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQADgEAFgEIABAFQAAALgDAAQgDAAgDgFgAA3gwQgBAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAEgFAFgDIABAFQAAALgEAAQgCAAgEgFg");
	this.shape_65.setTransform(-44.9,-27.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AGDJNQkAhshuiSQAGgNAJgKIADgEIgGgLIgdACQgcADgGACIpWgCQhYgLhOgSIgHgJIgTgVQgGgGgKAAIgIgZQgIANALAIIAAABIABAAQAIANAJAMIACABIAAABQAIgBAFAGIADAEIgggJQiFgjhmg5IgHgEQg/gkgzgtIgRgOIgJgJQiRiJAAiYQAAhwAqhNQAwhXBxg9QDyiDKDgyIEtgDQAKgDBRgEIBigHIJvAAQD3gcCgEHQA5BeAkByQAcBgAAA5QAAA/gxBXQg0BZhBAoQkrC4hxAMQgmAEhNgKQhcgNhKAAIhfABQhRADgDACIhwgCQgBAHgDAGIAAABIAIAEIAAAAQAAA+BXBNQBVBKCPBGQENCDEhApIgcAAQmXg+kOhzgAC0ElIADABIAAgDIgCAAIgBACgAnRpyQgBABAAAAQAAAAAAABQAAAAAAABQAAAAABABQAKAKgBgRIgBgEQgFADgDAEgAlZrbQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQALALgBgSIgBgEQgFADgEAEg");
	this.shape_66.setTransform(-4.7,40.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AVVMTIk5gCQlPgskrhvQlbiBhJiZIAAADQgYgUgTgHIpPACQhOgJhJgPIgLgCIgCgBIggAeQAFgRACgTIgcgHQgvgMgrgPIgPgFQhRgdhFgoIgDgCQgogXgkgbIgMgJQgagVgYgXIgCgBIgOgOQhFhFglhSQgihKAAhBQAAh1ArhPQAwhdBzhBQD7iPKbgxIEmgCQAKgCBVgFQBXgGANgDIJgAAQEggbCdEYQA2BhAeB5QAXBbAAA4QAAAfggBFQgpBahFBNQjKDklRAAIlwgMQgDAChXAEQBhCcCgBaQDpCDHNBFIC0gBIAHgBQALgCASABQAAAEAEAFIAGAIIAAAMIgKACQgbgCgEgDgAAUEzIgDAEQgKAKgGANQBuCREABtQEPBzGXA+IAbAAQkggpkNiDQiQhGhUhKQhXhNAAg+IAAAAIgIgFIAAAAQACgGABgHIBwACQAEgCBQgDIBggBQBKAABcANQBNAKAmgEQBwgMEsi4QBAgoA0hZQAyhXAAg/QAAg5gdhgQgjhyg5heQigkHj3AcIpvAAIhiAHQhSAEgKADIksADQqEAyjyCDQhwA9gwBXQgrBNAABwQAACYCRCJIAKAJIAQAOQAzAtBAAkIAGAEQBmA5CFAjIAgAJIgCgEQgFgGgJABIAAgBIgBgBQgKgMgHgNIgBAAIAAgBQgLgIAHgNIAIAZQALAAAFAGIAUAVIAGAJQBOASBYALIJWACQAHgCAegDIAagCIAHALgACgEkIABgCIACAAIAAADIgDgBg");
	this.shape_67.setTransform(-2.7,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},1).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.3,46.8,130.3,73.5);


(lib.Glassempty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAB2QgDgBAAgEQgtgCgPgSQgPgRAAg0IgCgrQAAgOACgJIgCgMIgCgbQAAgJAEgKQAGgNAMgEIBIAAQAHACAgAEQAdAFAAAJIgBAEQADALAAAQIABAjIAAAfQgBAegBARQgBALACAcQgEAYgfAIgAhEgqQgBARAEAMIgDAkQgBAfALAVQAYAqA7gNQADgDATAAIAAABQAdgPgCgaIgDgbQgCgPAFgKIAAgtIgBAAIABgJIAAgFIAAgVQgCgJAAgGQgKAHgOAAIhBgCQgLgEgRgEQgQgDgHAAQgEAAgBAFIAAAGQAAAGAFAQIACgBQgCAIAAAKgAhDhnIAzALIA1ABIAKABQAFAAAPgFQgOgKgOACQgRABgMgFIhDAAg");
	this.shape.setTransform(8.4,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.7,23.8);


(lib.Glass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F700AD").s().p("Ag8AvQgLgVAAgdIAEg2IACAAQAFAAAAgFQgDgDgDgIIACAAQAQAGAcABQAHAHAHAAIAKAAIA3AAIAMgFIAAAvQgFAKACANIAEAbQABAagdAPIAAgBQgTAAgDADQgOADgKAAQgoAAgSgggAAFhFIgMgEQgNgDgYAAIgBgCQBRABAXAHIgBABg");
	this.shape.setTransform(8.6,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAB2QgDgBAAgEQgtgCgPgSQgPgRAAg0IgCgrQAAgOACgJIgCgMIgCgbQAAgJAEgKQAGgNAMgEIBIAAQAHACAgAEQAdAFAAAJIgBAEQADALAAAQIABAjIAAAfQgBAegBARQgBALACAcQgEAYgfAIgAhEAXQgBAfALAVQAYAqA7gNQADgDATAAIAAABQAdgPgCgaIgDgbQgCgPAFgKIAAgtIgMAFIg3AAIgLAAQgGAAgHgHQgcgBgQgGIgCAAQADAIACADQAAAFgEAAIgCAAgAgpgwQAXAAANADIANAEIA1AAIABgBQgXgHhRgBgAACg8QA3AEARAHIAAgWQgCgJAAgGQgKAHgOAAIhBgCQgLgEgRgEQgQgDgHAAQgEAAgBAFIAAAGQAAAGAFAQQAJgCAUAAIApABgAhDhnIAzALIA1ABIAKABQAFAAAPgFQgOgKgOACQgRABgMgFIhDAAg");
	this.shape_1.setTransform(8.4,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.7,23.8);


(lib.EYesMouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhKAvQgMgEAAgNQAAgNALgHIALgBIAAgBQAmAOggAXQgEADgFAAIgHgBgAA5gIQgMgEAAgNQAAgNALgHIALgCIAAAAQAmANggAYQgEADgGAAIgGgBg");
	this.shape.setTransform(13.4,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhsA/QgTgdAEgiIAAgDQAEgUAQgNIAEgBIACgBIAFgDIAAAAQAjgBARAVQAKAMAFARIABAIIABADIABAMIAAAEIgBAFQgDAWgRASQgPAGgNAAQgXAAgOgXgAg3ACIgLABQgMAHAAANQAAANANAEQAJADAHgFQAfgXglgOgAAcgNQgPgnAcgcIAEgBIAGgDIABgBQAKAAAIABIALADQAEAAACACQAaAMAJAgIACALQAGAhghAJQgMAEgKAAQgiAAgNgjgABLg2IgLACQgLAHAAANQAAANAMAEQAKADAHgFQAfgYgmgNg");
	this.shape_1.setTransform(12.5,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhLAvQgMgEAAgOQAAgNALgHQAyAMggAYQgEADgGAAIgHgBgAA6gJQgMgEAAgNQAAgOALgHQAzAMghAYQgEADgGAAIgHgBg");
	this.shape_2.setTransform(13.3,7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhvBAQgTgeAEgiIAAgFQAEgUARgNIAEgCIACAAIAFgDIAAgBQAkAAASAVQAKAMAFASIABAJIABACIABANIAAAEIgBAFQgDAXgSASQgPAHgNAAQgYAAgPgYgAhPAXQAAANAMAEQAKADAHgFQAggXgygNQgLAHAAAOgAAcgNQgQgoAdgdIAMgFQAKAAAIABIAMADQAgAOAJAhIADAMQAGAigiAJQgMAEgLAAQgiAAgOgkgAA2ghQAAAOAMAEQAKADAHgFQAhgYgzgMQgLAHAAANg");
	this.shape_3.setTransform(12.5,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhMAvQgNgEAAgOQAAgNAMgIQA0ANgiAYQgEADgFAAIgIgBgAA7gIQgNgEAAgOQAAgOAMgHQA0AMghAZQgFADgGAAIgHgBg");
	this.shape_4.setTransform(13.3,7.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhxBBQgUgeAEgkIAAgEQAEgWARgNIAFgBIABgBIAGgDIAAgBQAlAAASAWQALAMAFASIABAJIABADIABANIAAAEIgBAGQgDAXgSATQgQAHgNAAQgZAAgPgZgAhRAXQAAAOANAEQAKADAHgFQAigZg0gMQgMAHAAAOgAAbgMQgPgpAegeIALgGQALAAAIACIAMADQAiAOAJAiIADANQAGAigjAKQgMAEgLAAQgkAAgPglgAA2ghQAAAOANAFQAKADAIgGQAhgYg0gNQgMAIAAANg");
	this.shape_5.setTransform(12.5,8.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhNAwQgOgFAAgOQAAgOANgIQA1ANgjAZQgEAEgGAAIgHgBgAA8gIQgNgEAAgOQAAgPAMgHQA2AMgjAaQgEAEgGAAIgIgCg");
	this.shape_6.setTransform(13.3,7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah0BCQgUggAEgkIAAgFQAEgWASgNIAEgCIACAAIAFgEIABAAQAmgBATAXQALANAFATIABAJIABADIABANIAAAEIgBAGQgDAYgTATQgQAIgNAAQgaAAgQgagAhTAWQAAAPAOAEQAKADAHgFQAjgZg1gNQgNAHAAAOgAAbgMQgQgqAfgfIAMgGQAKAAAJACQAHABAGACQAiAPAKAjIADAMQAGAkgkAKQgNAEgLAAQglAAgPgmgAA3ghQAAAOANAFQALADAHgFQAjgag2gNQgMAIAAAOg");
	this.shape_7.setTransform(12.5,8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhOAwQgOgEAAgPQAAgPANgHQA2ANgjAaQgFAEgGAAIgHgCgAA9gHQgNgFAAgOQAAgPAMgIQA3ANgjAbQgFADgGAAIgIgBg");
	this.shape_8.setTransform(13.3,7.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah2BDQgVggAEgmIABgFQADgWATgOIAFgCIABAAIAGgEIABAAQAmgBAUAYQALANAFATIACAKIAAADIABANIAAAFIAAAGQgDAYgUAUQgRAHgOAAQgaAAgQgagAhUAWQAAAPAOAFQALADAHgGQAkgZg3gOQgNAIAAAOgAAcgLQgRgsAggfIAMgGQALAAAJABQAHABAGADQAjAPAKAkIADANQAGAlgkAKQgOAEgLAAQgmAAgPgngAA4ghQAAAPAOAEQAKAEAIgGQAkgag3gNQgNAIAAAOg");
	this.shape_9.setTransform(12.5,8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhQAxQgOgFAAgPQAAgPANgIQA4AOgkAaQgFAEgGAAIgIgBgAA+gGQgOgFAAgPQAAgPANgIQA4ANgkAbQgFAEgGAAIgIgBg");
	this.shape_10.setTransform(13.3,7.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah5BEQgVghAEgnIABgFQAEgXATgOIAEgCIACgBIAGgDIAAgBQAoAAAVAYQALANAFAUIACAKIABADIABAOIAAAEIgBAHQgEAZgUAUQgRAIgOAAQgbAAgRgbgAhWAWQAAAPAPAFQALADAHgGQAlgag4gNQgOAHAAAPgAAbgLQgRgsAhghQAMgFABgBQALAAAJACIANADQAkAQALAlIADANQAGAlgmALQgOAEgLAAQgnAAgQgogAA5ghQAAAPAOAFQALADAIgGQAkgbg5gNQgMAIAAAPg");
	this.shape_11.setTransform(12.5,7.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhRAxQgPgFAAgPQAAgPAOgJQA6APgmAbQgFAEgGAAIgIgCgAA/gGQgOgEAAgQQAAgPANgJQA6AOglAcQgGAEgGAAIgIgCg");
	this.shape_12.setTransform(13.3,6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah7BFQgWgiAEgoIABgFQAEgXAUgPIAFgCIABgBIAGgDIABgBQApAAAVAZQALANAGAVIABAKIABADIABAOIAAAFIAAAGQgEAagVAVQgSAIgOAAQgcAAgRgcgAhXAWQAAAPAPAFQAMAEAHgGQAmgbg6gNQgOAHAAAPgAAcgKQgSguAighQAMgFABgCQALAAAJACIAOADQAlARALAmIADANQAGAngmALQgOAEgMAAQgoAAgQgpgAA6ghQAAAQAOAEQALAEAJgGQAlgcg6gOQgNAJAAAPg");
	this.shape_13.setTransform(12.4,7.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhTAyQgPgFAAgQQAAgQAOgIQA7APgmAbQgFAEgHAAIgIgBgABAgFQgPgFAAgQQAAgQANgIQA8AOgmAdQgFADgHAAIgIgBg");
	this.shape_14.setTransform(13.4,6.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ah9BGQgXgjAEgpIABgFQAEgYAVgQIAEgBIACgBIAGgDIABgBQAqgBAVAaQAMAOAGAVIABAKIABADIABAPIAAAFIAAAHQgEAagVAVQgSAJgPAAQgcAAgSgdgAhYAWQAAAPAPAGQAMADAHgGQAngcg7gNQgOAHAAAQgAAcgKQgTgvAjgiQANgFABgCQALAAAKACQAHABAHADQAmAQALAnIADAOQAGAognALQgPAFgMAAQgpAAgQgrgAA7ghQAAAQAOAEQAMAEAIgGQAmgdg7gOQgNAJAAAQg");
	this.shape_15.setTransform(12.4,7.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhUAzQgQgGAAgQQAAgQAPgJQA9APgoAdQgFAEgHAAIgIgBgABBgEQgPgFAAgRQAAgQANgJQA9APgnAdQgFAEgHAAIgIgBg");
	this.shape_16.setTransform(13.4,6.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiABHQgXgkAEgqIABgFQAEgZAVgPIAFgCIACgBIAGgDIABgBQArgBAWAbQAMAOAGAWIABAKIABADIABAPIAAAFIAAAHQgEAbgWAWQgSAIgQAAQgcAAgTgdgAhaAWQAAAQAQAFQAMAEAIgHQAngcg8gNQgPAHAAAQgAAbgJQgSgwAjgjQANgGABgBQAMAAAKACQAHABAHACQAnARAMAoIACAOQAHApgoAMQgPAFgNAAQgpAAgSgsgAA7ghQAAAQAPAFQAMAEAJgGQAngeg9gOQgOAJAAAQg");
	this.shape_17.setTransform(12.4,7.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhXA0QgQgFAAgRQAAgQAPgJIAOgCIAAgBQAwASgoAdQgFAFgHAAIgJgCgABAgDQgPgFAAgRQAAgQAOgJIAOgCIAAgBQAwASgoAeQgFAEgHAAIgJgCg");
	this.shape_18.setTransform(13.5,6.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiCBIQgYglAEgrIABgFQAEgaAWgQIAFgBIACgBIAGgEIABgBQAsAAAWAbQANAOAGAXIABAKIABAEIABAPIAAAFIAAAHQgEAcgWAWQgTAJgQAAQgeAAgSgegAg/gEIgOACQgPAHAAAQQAAARAQAFQANAEAIgHQAogdgwgQgAAbgJQgTgxAkgkIAGgCIAHgDIACgCQAMAAAKACQAIABAHACQAEAAADADQAhAPALApIADAOQAHAqgpAMQgPAFgOAAQgqAAgSgtgABYg9IgOACQgOAJAAAQQAAARAPAFQAMAEAJgGQAogegwgSg");
	this.shape_19.setTransform(12.4,7.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhUAzQgQgGAAgQQAAgQAPgJQA9APgoAdQgFAEgHAAIgIgBgABBgFQgPgEAAgRQAAgQANgJQA+APgoAdQgFAEgGAAIgJgCg");
	this.shape_20.setTransform(13.4,6.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiABIQgXgkAEgqIABgGQAEgZAVgPIAFgCIACgBIAGgDIABgBQArgBAWAbQAMAOAGAWIABAKIABAEIABAOIAAAGIAAAHQgEAbgWAVQgTAIgPAAQgdAAgSgcgAhaAWQAAAQAPAGQANADAHgGQAogdg9gNQgOAHAAAQgAAbgJQgSgwAjgjQANgGABgBQAMAAAKACQAIABAGACQAoARALApIADAOQAHApgpAMQgPAEgNAAQgqAAgRgsgAA7ghQAAARAPAEQAMAEAJgGQAngdg9gPQgOAJAAAQg");
	this.shape_21.setTransform(12.4,7.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhTAyQgPgFAAgQQAAgQAOgIQA7APgmAbQgFAEgHAAIgIgBgABAgFQgPgFAAgQQAAgQAOgIQA7AOgmAdQgFADgHAAIgIgBg");
	this.shape_22.setTransform(13.4,6.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ah+BHQgXgkAFgpIABgFQAEgZAUgPIAFgBIACgBIAGgEIAAgBQArAAAVAaQAMAOAGAVIABAKIABADIABAPIAAAFIAAAHQgEAbgVAVQgTAIgPAAQgcAAgSgcgAhZAWQAAAQAQAFQALADAIgGQAngcg7gNQgPAHAAAQgAAcgJQgTgwAjgiIAOgHQALAAAKACQAHABAHACQAmARALAnIADAOQAHAogoAMQgOAEgNAAQgoAAgRgqgAA7ghQAAAQAOAFQAMADAJgGQAmgcg8gPQgNAJAAAQg");
	this.shape_23.setTransform(12.4,7.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhSAyQgPgGAAgPQAAgPAOgJQA6APgmAbQgFAEgGAAIgIgBgAA/gGQgOgEAAgQQAAgQANgIQA6AOglAcQgFAEgGAAIgJgCg");
	this.shape_24.setTransform(13.4,6.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ah8BGQgWgjAEgoIABgFQAEgYAUgPIAEgBIACgBIAGgEIABAAQApgBAVAZQAMAOAFAVIACAKIABADIABAOIAAAFIgBAHQgEAagUAUQgSAIgPAAQgbAAgSgbgAhYAWQAAAPAPAGQAMADAHgGQAmgbg6gNQgOAHAAAPgAAbgKQgSguAigiQANgFABgBQALAAAJACIAOADQAmAQAKAnIADANQAHAngnAMQgOAEgMAAQgoAAgRgqgAA6ghQAAAQAOAEQALAEAJgGQAlgcg6gOQgNAIAAAQg");
	this.shape_25.setTransform(12.5,7.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhQAxQgPgFAAgPQAAgPAOgIQA4AOgkAbQgFADgGAAIgIgBgAA/gGQgOgFAAgPQAAgPAMgIQA5ANgkAcQgGADgGAAIgHgBg");
	this.shape_26.setTransform(13.3,7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ah6BFQgVgiAEgnIABgFQADgXAUgPIAEgBIACgBIAGgEIABAAQAogBAUAZQAMANAFAUIACAKIABADIABAOIAAAFIgBAGQgEAagUAUQgRAIgOAAQgbAAgSgbgAhWAWQAAAPAOAFQAMAEAHgGQAlgbg5gNQgNAHAAAPgAAbgKQgRgtAhghQAMgFABgCQALAAAJACIAOADQAkAQALAmIADANQAGAmgmALQgOAEgMAAQgnAAgQgogAA5ghQAAAPAOAFQALADAIgFQAlgcg5gNQgNAIAAAPg");
	this.shape_27.setTransform(12.5,7.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhPAxQgOgFAAgPQAAgPANgIQA3AOgkAaQgEAEgHAAIgHgBgAA+gHQgOgEAAgPQAAgPANgIQA3ANgjAbQgFAEgGAAIgIgCg");
	this.shape_28.setTransform(13.3,7.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ah3BEQgVghAEgnIAAgEQAEgXATgOIAFgCIABgBIAGgDIABgBQAnAAAUAYQALANAFAUIACAJIABADIABAOIAAAEIgBAHQgDAZgUATQgRAIgPAAQgaAAgQgagAhVAWQAAAPAPAFQALADAHgGQAkgag3gNQgOAHAAAPgAAcgLQgRgsAgggIANgGQAKAAAJABQAHABAHADQAjAPALAlIACANQAHAlglALQgOAEgMAAQgmAAgPgogAA5ghQAAAPANAEQALAEAIgGQAkgbg4gNQgMAIAAAPg");
	this.shape_29.setTransform(12.5,7.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhOAwQgOgEAAgPQAAgOANgIQA2ANgjAaQgFADgGAAIgHgBgAA9gHQgOgEAAgPQAAgOANgIQA2ANgjAaQgFADgGAAIgHgBg");
	this.shape_30.setTransform(13.3,7.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ah1BDQgVghAEglIABgEQAEgXASgOIAFgBIABgBIAGgDIAAgBQAnAAATAXQALANAFATIACAJIAAADIABAOIAAAEIAAAGQgDAZgUATQgRAIgNAAQgaAAgQgagAhTAWQAAAPAOAEQAKADAHgFQAkgag2gNQgNAIAAAOgAAcgLQgRgsAggfIAMgGQAKAAAJACQAHABAGACQAjAPAKAkIADAMQAGAlgkAKQgOAEgLAAQglAAgPgmgAA4ghQAAAPANAEQALADAIgFQAjgag3gNQgMAIAAAOg");
	this.shape_31.setTransform(12.5,8.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhNAwQgNgEAAgPQAAgOAMgHQA1ANgiAZQgEADgGAAIgIgBgAA8gHQgNgFAAgOQAAgOAMgIQA1ANgiAZQgFAEgGAAIgHgBg");
	this.shape_32.setTransform(13.3,7.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhzBCQgUggAEgkIABgEQADgWASgOIAFgBIABgBIAGgDIAAgBQAmAAATAXQAKAMAFATIACAJIAAADIABANIAAAEIAAAGQgDAYgTATQgQAHgOAAQgZAAgQgZgAhSAWQAAAPAOAEQAKADAHgFQAigZg0gNQgNAHAAAOgAAcgMQgQgqAegeIAMgGQALAAAIABQAHABAGADQAiAOAKAjIACAMQAGAkgjAKQgNAEgLAAQglAAgOgmgAA3ghQAAAOANAFQALADAHgGQAigZg1gNQgMAIAAAOg");
	this.shape_33.setTransform(12.5,8.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhMAvQgNgEAAgOQAAgNAMgIQA0ANgiAYQgEADgFAAIgIgBgAA7gIQgNgEAAgOQAAgOAMgHQA0AMgiAZQgEADgFAAIgIgBg");
	this.shape_34.setTransform(13.3,7.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhxBBQgTgeADgkIABgEQADgVASgNIAEgCIACAAIAFgDIABgBQAkAAASAWQALAMAFASIABAJIABADIABAMIAAAEIgBAGQgDAXgSATQgQAGgNAAQgYAAgQgYgAhRAXQAAAOANAEQALADAGgFQAigYg0gNQgMAIAAANgAAbgMQgPgpAegdQALgFAAgBQAKAAAJACIAMADQAhAOAKAiIACAMQAGAigiAKQgNAEgLAAQgjAAgPglgAA2ggQAAAOANAEQAKADAHgFQAigZg0gMQgMAHAAAOg");
	this.shape_35.setTransform(12.5,8.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhKAvQgNgEAAgOQAAgNAMgHQAyAMggAYQgFADgFAAIgHgBgAA7gIQgNgFAAgNQAAgNAMgIQAyAMggAYQgFAEgGAAIgGgBg");
	this.shape_36.setTransform(13.3,7.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhvBAQgTgeAEgiIABgEQADgVARgNIAEgBIACgBIAFgDIAAAAQAkgBASAWQAKAMAFARIABAJIABACIABANIAAAEIgBAFQgDAXgSASQgPAHgMAAQgYAAgQgYgAhPAXQAAANANAEQAJAEAHgGQAggXgxgNQgMAIAAANgAAcgMQgQgoAdgdIAMgGQAKAAAIACIAMADQAgAOAJAgIADAMQAFAighAJQgMAEgLAAQgiAAgOgjgAA2ggQAAANAMAEQAKADAHgFQAggYgygMQgLAHAAAOg");
	this.shape_37.setTransform(12.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 2
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B30000").s().p("Ag9AsQgOgJgEgFQgCgEAAgKQAAgOAYgSQAegZAqgCQAJAHAhgDQAZgCAAAQQAAACg1AXQg5AcgTAQg");
	this.shape_38.setTransform(21,26.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ag/AxIgSgUQgFgFAAgIQAAgOADgEQAFgIARgJIAdgSIAOgIIAHgCIADgBIASAAQAtAAAUAJQAMAGAAAIQAAAKg+AcIhGAkgAg5gQQgYASAAAOQAAAKACADQAEAGAPAJIANAAQATgQA5gcQA2gYAAgBQAAgQgaACQghADgJgHQgqACgeAZg");
	this.shape_39.setTransform(21,26.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B30000").s().p("AhSAfQgDgEAAgKQAAgPAZgTQAggaArgCQAKAHAjgDQAagCAAAQQAAACg3AZQg9AdgSARQgfgJgDgGg");
	this.shape_40.setTransform(21.4,26.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhCAzIgTgVQgFgFAAgIQAAgPADgEQAGgIARgKIAfgTIAOgIQABgBAHgCIACgBIATAAQAwAAAUAKQANAHAAAHQAAALhBAeIhJAmgAg8gRQgZATAAAPQAAAKADAEQADAGAfAJQASgRA9gdQA3gZAAgCQAAgQgaACQgjADgKgHQgrACggAag");
	this.shape_41.setTransform(21.4,26.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B30000").s().p("AhXAgQgCgDAAgKQAAgRAagTQAhgcAugDQAKAIAkgDQAcgCAAARQAAACg7AaQg+AfgUARQgfgKgFgGg");
	this.shape_42.setTransform(21.8,25.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhFA2IgUgWQgFgGAAgIQAAgQAEgEQAEgJATgKIAhgTIANgJIAJgDIACgBIAVAAQAyAAAVAKQANAHAAAIQAAAMhEAfIhNAngAg+gSQgaAUAAAQQAAAKACAEQAEAGAfAKQAUgRA+gfQA7gaAAgCQAAgRgcACQgkADgJgIQgvADggAbg");
	this.shape_43.setTransform(21.8,25.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B30000").s().p("AhaAiQgCgEAAgLQAAgRAbgUQAigdAwgDQAKAIAlgDQAdgCABASQAAACg9AbQhBAggVATQgggKgFgHg");
	this.shape_44.setTransform(22.2,25.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhIA4IgVgXQgFgGAAgIQAAgRAEgFQAFgIATgLIAigUIAPgJQABgCAIgCIACgBIAUAAQA1AAAWALQAOAHAAAIQAAAMhHAhQhNAngDADgAhBgTQgbAVAAARQAAAKACAEQAFAHAgAKQAVgSBBggQA9gcAAgCQgBgRgdABQglAEgKgIQgwADgiAcg");
	this.shape_45.setTransform(22.2,25.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B30000").s().p("AheAjQgCgEAAgLQAAgSAcgWQAjgdAygDQALAIAngDQAegCAAATQAAABg/AdQhEAigWATQghgLgFgHg");
	this.shape_46.setTransform(22.6,25.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhLA6IgWgXQgFgGAAgJQAAgSAEgFQAFgJAUgLIAjgVIAQgKIAJgDIACgBIAWAAQA3AAAWALQAPAHAAAJQAAANhJAiQhQApgEACgAhEgUQgcAWAAASQAAALACAEQAFAHAhALQAXgUBDghQBAgdgBgCQAAgSgeABQgnAEgKgIQgyADgkAdg");
	this.shape_47.setTransform(22.6,25.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B30000").s().p("AhhAlQgDgEAAgMQAAgSAdgXQAmgfAzgDQALAJApgDQAfgDAAAUQAAAChCAdQhGAjgXAUQgjgLgEgHg");
	this.shape_48.setTransform(23,25.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhOA9IgWgZQgGgGAAgKQAAgSAFgFQAFgKAVgMIAkgVIAQgKQABgBAJgCIACgCIAXAAQA4AAAYAMQAPAIAAAJQAAANhMAkQhUAqgDADgAhGgVQgeAYAAARQAAAMADAEQAFAIAjALQAWgUBHgjQBBgeAAgCQAAgUgfADQgoADgLgIQg0ADglAeg");
	this.shape_49.setTransform(22.9,25.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B30000").s().p("AhmAmQgCgEAAgMQAAgTAegYQAnggA2gDQALAJAqgEQAhgDAAAVQAAAChFAfQhJAkgXAVQgkgMgGgHg");
	this.shape_50.setTransform(23.4,24.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AhRA/IgXgaQgGgGAAgJQAAgTAFgGQAFgKAWgNIAlgWIARgLIAKgDIADgBIAXAAQA7AAAZAMQAPAJAAAJQAAANhPAlQhXAsgDADgAhJgVQgeAXAAAUQAAALACAFQAFAHAkAMQAYgVBJgkQBEggAAgBQAAgVggADQgqADgMgIQg2ACgmAhg");
	this.shape_51.setTransform(23.3,24.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B30000").s().p("AhpAoQgDgFABgNQgBgTAggZQAoghA3gDQANAJArgEQAhgDAAAWQAAAChGAgQhMAmgYAVQglgMgGgHg");
	this.shape_52.setTransform(23.8,24.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhUBBIgYgaQgGgHAAgKQAAgUAFgGQAGgKAWgNIAngXIARgLQACgBAIgCIADgBIAYAAQA9AAAaAMQAQAIAAAKQAAAOhSAnQhaAtgDADgAhMgXQgfAZAAAUQAAANACAEQAGAIAlAMQAZgWBLglQBHghAAgCQAAgVgiADQgrADgMgJQg4ADgoAhg");
	this.shape_53.setTransform(23.7,24.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B30000").s().p("AhtApQgCgFAAgNQAAgUAggaQApgiA6gEQAMAKAtgEQAjgDAAAXQAAABhJAiQhOAngaAXQgmgNgGgIg");
	this.shape_54.setTransform(24.2,24.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AhXBEIgZgcQgGgHAAgKQAAgUAFgHQAGgKAXgOIAogYIASgLIALgDIADgCIAZAAQA/AAAaANQARAJAAAKQAAAPhVAoQhdAvgDADgAhPgXQggAaAAAUQAAANACAFQAGAHAnANQAZgWBOgnQBKgiAAgCQAAgWgjADQgtAEgMgKQg6ADgqAjg");
	this.shape_55.setTransform(24.1,24.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B30000").s().p("AhWBAQgUgNgHgIQgCgFAAgOQAAgVAigbQAqgjA8gEQANAKAugEQAkgDAAAXQAAAChMAjQhRApgaAXg");
	this.shape_56.setTransform(24.6,24.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhaBGIgagcQgGgIAAgKQAAgVAFgHQAGgLAYgOIAqgZIASgLQACgCAJgCIADgBIAaAAQBBAAAcANQARAJAAALQAAAPhYApQhgAxgDADgAhRgYQgiAbAAAVQAAANADAFQAGAIAUANIAUAAQAagXBRgoQBLgjAAgCQAAgXgkADQguAEgNgKQg8ADgqAkg");
	this.shape_57.setTransform(24.5,24.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B30000").s().p("AhtAqQgDgGAAgMQAAgVAhgaQApgjA6gDQAMAKAugEQAigDAAAXQAAABhJAiQhPAngYAXQgngNgGgHg");
	this.shape_58.setTransform(24.2,24.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AhXBEIgZgcQgGgHAAgKQAAgUAFgGQAFgMAYgNIAogYIASgLQABgBAKgDIADgBIAZAAQA/AAAbANQAQAIAAALQAAAPhVAoQhdAvgDADgAhPgXQggAZAAAVQAAANACAFQAGAHAnANQAZgWBOgnQBKgiAAgCQAAgXgjADQgtAFgMgKQg7ADgpAjg");
	this.shape_59.setTransform(24.2,24.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B30000").s().p("AhqAoQgCgFAAgMQAAgUAfgZQAogiA5gDQAMAKArgEQAigDAAAWQAAABhHAhQhMAmgYAWQgmgMgGgIg");
	this.shape_60.setTransform(23.8,24.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AhUBCIgZgbQgGgHABgKQgBgUAFgGQAGgKAWgNIAogXIARgLQABgCAKgCIACgBIAZAAQA9AAAaANQAPAIAAAKQAAAOhSAnQhaAugDADgAhMgXQggAZAAAUQAAANADAFQAFAHAmAMQAZgVBMgmQBHghAAgCQgBgWghADQgsAEgMgJQg4ADgoAhg");
	this.shape_61.setTransform(23.8,24.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B30000").s().p("AhnAmQgCgEAAgMQAAgTAfgZQAnggA2gDQAMAJAqgEQAhgCAAAUQAAAChFAgQhKAlgYAVQgkgMgGgIg");
	this.shape_62.setTransform(23.5,24.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhSBAIgXgaQgGgHAAgJQAAgTAFgGQAFgKAWgNIAmgXIARgKQABgBAJgCIACgCIAYAAQA7AAAZANQAQAIAAAJQAAAOhQAmQhYAsgCADgAhKgWQgfAZABATQAAAMACAEQAFAIAlAMQAXgVBKglQBFggAAgCQAAgUggACQgrAEgLgJQg3ADgnAgg");
	this.shape_63.setTransform(23.5,24.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B30000").s().p("AhjAlQgCgEgBgMQAAgSAfgYQAlgfA1gDQALAJApgEQAfgCAAAUQAAAChCAeQhHAkgXAUQgkgMgFgHg");
	this.shape_64.setTransform(23.1,25);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AhPA+IgXgZQgGgHABgJQgBgTAFgFQAFgKAWgMIAkgWIARgKQABgBAJgCIACgBIAWAAQA6gBAYAMQAPAIABAKQgBANhNAkQhVArgDADgAhHgVQgfAXAAATQABAMACAEQAFAHAkAMQAXgUBHgkQBCgeAAgCQAAgVgfADQgpAEgLgJQg1ADglAfg");
	this.shape_65.setTransform(23.1,25);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B30000").s().p("AhgAkQgCgEAAgMQAAgRAdgXQAkgeAzgDQALAIAngDQAfgDAAAUQAAAChAAdQhFAigXAUQgigLgFgHg");
	this.shape_66.setTransform(22.8,25.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AhNA8IgVgZQgGgGAAgJQAAgSAFgFQAEgJAVgMIAjgVIAQgKQABgBAJgCIACgBIAWAAQA4AAAYALQAOAIAAAJQAAANhLAiQhSAqgCACgAhFgUQgdAWAAASQAAAMADAEQAEAHAiALQAXgUBFgiQBBgdAAgCQAAgUggADQgnADgLgIQgzADgkAeg");
	this.shape_67.setTransform(22.8,25.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B30000").s().p("AhdAjQgCgEAAgMQAAgRAcgVQAjgdAxgDQAKAJAngEQAegDAAAUQAAABg/AcQhCAhgWATQghgLgFgGg");
	this.shape_68.setTransform(22.4,25.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AhKA5IgVgXQgFgGAAgJQAAgRAEgFQAFgJAUgLIAigUIAPgKIAJgDIADgBIAVAAQA2AAAWALQAOAHAAAJQAAAMhIAiQhPAogDACgAhDgUQgbAWAAARQAAALACAFQAFAGAhALQAVgUBDggQA+gcAAgCQAAgTgeACQgmAEgKgIQgyACgjAdg");
	this.shape_69.setTransform(22.4,25.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B30000").s().p("AhZAiQgCgEAAgLQAAgRAbgUQAhgcAwgDQAJAIAlgDQAdgDAAATQAAABg7AbQhBAggVASQgfgKgFgGg");
	this.shape_70.setTransform(22.1,25.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AhHA3IgVgWQgFgGAAgJQAAgQAEgFQAFgIATgLIAhgUIAPgJIAJgDIACgBIAVAAQAzAAAWALQAOAHAAAIQAAAMhGAgQhMAmgDADgAhAgTQgbAVAAAQQAAALACAEQAFAGAgAKQAUgSBBgfQA8gbAAgCQAAgSgdACQglAEgKgIQgwACghAcg");
	this.shape_71.setTransform(22,25.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B30000").s().p("AhWAgQgCgDAAgLQAAgPAagVQAhgaAtgDQAJAIAkgEQAcgBAAAQQAAADg6AZQg+AfgUARQgegKgFgGg");
	this.shape_72.setTransform(21.7,25.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AhEA1IgUgWQgFgFAAgIQAAgQAEgEQAEgJATgKIAggTIAOgJIAIgCIADgCIATAAQAyAAAVALQANAGAAAIQAAAMhDAfIhMAngAg+gSQgaAUAAAQQAAAKACAEQAFAGAeAKQAUgSA+geQA6gaAAgCQAAgRgbACQgkADgKgHQgtADghAag");
	this.shape_73.setTransform(21.7,25.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B30000").s().p("AhSAfQgDgEAAgKQAAgPAZgTQAggZArgDQAKAHAigDQAbgCAAARQAAABg4AZQg7AdgUARQgdgJgEgGg");
	this.shape_74.setTransform(21.3,26.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AhCAzIgTgVQgFgFABgIQAAgPADgEQAFgIARgKIAfgSIAOgJIAIgDIACgBIATAAQAwABAUAJQANAHAAAIQAAALhBAdIhJAmgAg7gRQgaATAAAPQABAKACADQAEAGAdAJQAUgQA7gdQA4gZAAgBQAAgRgbACQgiADgKgHQgrADgfAZg");
	this.shape_75.setTransform(21.3,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38}]}).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.7,31.3);


(lib.BubThighTrace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECE89").s().p("AgsClQhIgegCgPIgGgdQgIgigGgjQAFgLAGgXIABgFQAHgbAAgLQAEgTAFgRQAHgPAKgTIARgeQA+g+B4CkIAUAcIAKgDQAFAPgFAdQgGAfgRAlQgNAagEgDIACAHQg0A7gzAAQgTAAgUgIg");
	this.shape.setTransform(15.2,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiICaIgMhYIgCAAQgEAAAAgIIADgWIgBgGIACgBQADgXADgGQANgeAAgYQAAgKAXgoQAXgrAMgHIAEAEQACACAAAEQAAAFgKATIgRAeQgLATgGAPQgJAWAAAOIAAAAQAAAKgHAZIgBAGQgGAYgFAMQAGAjAIAiIAGAdIgRgBgABhCUIgCgGQAEADANgaQARglAGgfQAFgfgFgQIgKADIAMgHIASAAIAAAAQAABLgwA7IACAOIgMAAg");
	this.shape_1.setTransform(15.3,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-12,31.1,36.4);


(lib.BubHeadTrips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglAfQABgDAAgFQAAgIgKAAQgLAAAAAKQAAADACADIgCAAQgFgEgBgFIAAgKQAAgGADgCQAGgEAGgJIALAAIANAPQADAEAAAKIAAAFQgCAFgHABgAA1AAIgCgBIABgFQAAgGgKgEQgKgEAAAMIAAADQgFABgGADIgDABIABgKQACgFAKgPIAOAAQATANAAAPQAAAEgKACIgBgEg");
	this.shape.setTransform(21.9,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgHACIgBgCIARgBQgFADgFAAIgCAAIgEAAg");
	this.shape_1.setTransform(15,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#86592D").s().p("AhCAPQgQgKgHAJQgGAIgLgHQADgIAagTQAJgIADgGIABgCIAAAAIACgHQAMAAADgDQANADAIgIQALgLAEgBQALAFARgDIAggGQAogHASATIgpAAQgWABgBAPQAQAEgCABIgNABQgRADgDAJQgWgCgGADIgDACIgDAIQgBgDgEAAQgHAAgGAKIgGAQIgQAOQgOAMAAACQAAAFAHAAQgFAFgEADg");
	this.shape_2.setTransform(14.2,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FECE89").s().p("AAvBZIgzgUIgFgIIiTAAIgIAAQAHgPAIgGIAfgPQAUgKgMgHQgPARgogBQAAgbABgGQAEgQATADQAPgEAGAPQAFAOANgDQgDgKAQgRIACgDIAJgJQANgRAGgPIAFAEQADADADAAQAEAAABgDIABgEIgBgGQACABAEAAQAHgBAFgFIAHgBIABAAIAAABIADAFQAHABAFgDIACgDIAIgLQALgDAKAGQAJAGAJgBIAAAAIADgCIAIgLQAGgIAPAFIALALQgHgDgJgBQgfgDAAAiIABAOIgBACQgDAHAHACQgCgEADgCIABAAQAAAAABAAQAAAAABAAQAAAAgBAAQAAAAAAgBIAAAAQAEgCAJAAIAKABIABAAIAFADQABACgBADQgCAFgQACQgNACgBAHQAMALAPgKQANgIAAgNQAIgBAFgEQAFgFAAgFQAAgTgKgKQAUAPAbACIAIAOIAHAOQAIAPABAMQADAjgcAiQgOAQgoAgIgSABgABXAtQAFAEAIAAQALAAADgIIAAgNQAAgeg2AIQg2AKAAAWQAAAFAEADIAZAAIAGgEQACgBARAAQAWAAAFAEgAgjg6QgCADAAAOIABANQAFANAWAAQAVAAAFgJIABgKQAAgLgEgIQgEgJgLgKQgcAGgGAIg");
	this.shape_3.setTransform(18.6,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABbCCQApggAOgQQAcgigDglQgBgLgIgOIgIgOIgHgOQgbgCgUgPQAJAKAAATQAAAFgFAFQgEAEgIABQgBANgMAGQgQAKgLgLQAAgFAOgCQAPgCACgFQACgDgBgCIgGgDIAAAAIgKgBQgJAAgEACIgBAAQABABAAAAQAAAAAAAAQAAAAAAAAQgBAAgBAAIgBAAQgCACACAEQgHgCACgHIACgCIgBgOQAAgiAfADQAJABAHADIgMgLQgOgFgGAIIgJALIgCACIgBAAQgJABgJgGQgJgGgMADIgJALIgDADQgDADgHgBIgCgFIAAgBIgCAAIgGABIgTABIAAAEIABAGIAAAEQgBADgEAAQgEAAgCgDIgFgEQgGAPgOARIgIAJIgDADQgQAPAEAMQgNADgGgQQgFgOgQADQgSgDgEAQQgCAGAAAdQAoABAQgRQAMAHgVAKIgfAPQgIAGgGAPIgSgCIgDgCIATgJQgSgcAJgaQAHgWAagRQgGgSgGAGQgKAMgJAAQAGgRAYgUQAPgMAIgJIAAgDIABgDIAAgHQAEgFAUgCQABAAAAABQABAAAAAAQABAAAAABQABAAAAABIAFgJQAEgJAEgDQALgHAMAHQAJgCAQgLQAOgGAJALQACADAjgCQAlgCALAJQAJAGgFAJQgEAHAIACQAUADgEAdQAugIASAoIACAGQANAfgJAlIgBAAIgHANIgDAXQgQAEgRAUQgSAUgTACIgFAAgAhpgiIAAAtQAEgDAFgFQgHAAAAgDQAAgCAOgMIAQgOIAGgQQAGgMAHAAQAEAAABADIADgIIADgCQAIgDAWACQADgJAPgDIANgBQACgBgQgEQABgPAWgBIApAAQgSgTgoAHIgeAGQgSADgMgFQgEABgLALQgIAIgNgDQgDADgMAAIgCAHIAAAAIgBACQgDAGgJAIQgaAVgDAIQALAHAGgIQAEgEAFAAQAGAAAIAFgABQgtQAKAEAAAGIgBAGIACADIABADQAKgBAAgHQAAgPgTgNIgOAAQgKAPgCAGIgBAKIADgCQAGgDAFgBIAAgCQAAgKAGAAIAEABgABbBIQgFgEgVAAQgRAAgCABIgHAEIgYAAQgFgDAAgFQAAgWA3gKQA2gKAAAgIgBANQgCAIgLAAQgJAAgFgEgAgggBIgBgNQAAgOADgDQAGgIAagGQAMAKAFAJQADAIAAALIAAAIQgGAJgUAAQgXAAgFgLgAAAgEQAAAEAAACIAGAAQAHgBACgCIAAgGQAAgJgDgFIgMgRIgKAAQgGALgGAEQgDACAAAGIAAAKQABAFAFACIACAAQgCgCAAgBQAAgLALAAQAIABAAAHg");
	this.shape_4.setTransform(18.1,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A20000").s().p("AgpAOQAAgSApgNQAqgMAAAfQACAGgEAEQgIAJgdgDIgDgDIgZAAIgNAGQgDgEAAgDg");
	this.shape_5.setTransform(25.4,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhIAhQgFgHAAgGQAAgKAJgJQAOgMAiAFIAEAEIgCACQgNAAAAAJIACAJQACAHADACIgLANIgVABQgKAAgGgIgABGgLQAAgIgLgCQgMgDAAALIAAABIgEAAIAAAAQgEABgGAEIgBgDQgFgJAAgCQABgHADgEQAGgGATgCIAGAAQAEADAFAHQAHAJAAACQAAAHgJAFIABgEg");
	this.shape_6.setTransform(20.8,10.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FECE89").s().p("AAvBXIgzgUIgFgIIiTAAIgIAAQAHgPAIgGIAfgPQAUgKgMgHQgPARgogBQAAgbABgGQAEgQATADQAPgEAGAPQAFAOANgBQgDgMAQgRIACgDIAJgJQANgRAGgPIAFAEIgGAFQgHAJgDAJIAAAQQACACAHABQAAAHADAGQAGAOASAAQAhAAAQgqQAAgHgCgFQgDgFgIgHQgjgBgQALIAJgPIgBgCIgBgBIgBAAIAAgFQACABAEAAQAHgBAFgFIAHgBIABAAIAAABIADAFQAHABAFgDIACgDIAIgLQALgDAKAGQAGAFAHAAIAFgEIAJgFIACgEIABgBIADADQgTAFAAAVIABAMIABAFIgBABIAAADIgBACQgDAHAHACQgCgEADgCIABAAQAAAAABAAQAAAAABAAQAAAAgBAAQAAAAAAgBIAAAAIAFgCIACAAIAGAAIAIAAIAAAAIABAAIABAAIABABIAFADQABACgBADQgCAFgQACQgNACgBAHQAMALAPgKQALgHACgLIgCgFIgBgDIAHAAQAHgBAFgHQAFgHAAgFQAAgJgDgFIAMAGQAMAFANABIAIAOIAHAOQAIAPABAMQADAjgcAiQgOAQgoAgIgSABgABEgCQgyAMAAAeIAAAHQACAGAIAAIAKgFQAIgEAUACIAIACIAKABQAYAAAGgIQADgEAAgLQAAgfgcAAQgJAAgMADg");
	this.shape_7.setTransform(18.6,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABbCCQApggAOgQQAcgigDglQgBgLgIgOIgIgOIgHgOQgNgBgMgEIgMgHQACAGAAAIQAAAFgEAHQgFAHgHABIgHAAIAAADIADAFQgCALgLAFQgQAKgLgLQAAgFAOgCQAPgCACgFQACgDgBgCIgGgDIAAAAIgCgBIgBAAIAAAAIgHAAIgHAAIgBAAIgFACIgBAAQABABAAAAQAAAAAAAAQAAAAAAAAQgBAAgBAAIgBAAQgCACACAEQgHgCACgHIACgCIgBgDIACgBIgBgFIgBgMQAAgVATgFIgDgDIgBABIgDAEIgJAFIgEAEQgHAAgHgFQgJgGgMADIgJALIgDADQgDADgHgBIgCgFIAAgBIgCAAIgGABIgTABIAAAEIABAFIABAAIABABIAAACIgIAPQAQgLAiABQAJAHADAFQACAFAAAHQgTAogfAAQgRAAgHgOQgCgGgBgHQgGAAgDgBIAAgQQADgJAIgJIAFgFIgEgEQgGAPgOARIgIAJIgDADQgQAPAEAMQgNADgGgQQgFgOgQADQgSgDgEAQQgCAGAAAdQAoABAQgRQAMAHgVAKIgfAPQgIAGgGAPIgSgCIgDgCIATgJQgSgcAJgaQAHgWAagRQgGgSgGAGQgKAMgJAAQAGgRAYgUQAPgMAIgJIAAgDIABgDIAAgHQAEgFAUgCQABAAAAABQABAAAAAAQABAAAAABQABAAAAABIAFgJQAEgJAEgDQALgHAMAHQAJgCAQgLQAOgGAJALQACADAjgCQAlgCALAJQAJAGgFAJQgEAHAIACQAOACADAPIAAABIABACIgBABIAAAKIAAABQAtgHASAnIACAGQANAfgJAlIgBAAIgHANIgDAXQgQAEgRAUQgSAUgTACIgFAAgAgpgTQgJAIAAAKQAAAFAEAHQAHAIAKAAIAUgBIAKgNQgBgDgCgEIgCgKQAAgJALgBIACgCIgFgFIgNgBQgVAAgLALgAhpgiIAAAtQAEgDAFgFQgHAAAAgDQAAgCAOgMIAQgOIAGgQQAGgMAHAAQAEAAABADIADgIIADgCQAIgDAWACQADgJAPgDIANgBQACgBgQgEQABgPAWgBIApAAQgSgTgoAHIgeAGQgSADgMgFQgEABgLALQgIAIgNgDQgDADgMAAIgCAHIAAAAIgBACQgDAGgJAIQgaAVgDAIQALAHAGgIQAEgEAFAAQAGAAAIAFgABWgsQALADAAAIIgBAEQAJgGAAgGQAAgCgHgJQgFgHgEgDIgGgBQgTADgGAGQgEADAAAHQAAADAEAJIACACQAFgDAFgBIAAAAIAEAAIAAgBQAAgJAIAAIAEAAgAAXBMIAAgHQAAgeAxgOQAygOAAAsQAAALgDAEQgHAIgXAAIgKgBIgIgCQgUgCgJAEIgJAFQgIAAgCgGgABJAiQgrANAAAUQAAADADADIANgGIAaAAIAEADQAdADAIgJQAEgEgCgFQAAgZgWAAQgJAAgLAEg");
	this.shape_8.setTransform(18.1,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_2},{t:this.shape_1},{t:this.shape_6},{t:this.shape_5}]},14).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},11).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.3,26.2);


(lib.BubHeadDream = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgHACIgBgCIARgBQgFADgFAAIgCAAIgEAAg");
	this.shape.setTransform(15,7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#86592D").s().p("AhCAPQgQgKgHAJQgGAIgLgHQADgIAagTQAJgIADgGIABgCIAAAAIACgHQAMAAADgDQANADAIgIQALgLAEgBQALAFARgDIAggGQAogHASATIgpAAQgWABgBAPQAQAEgCABIgNABQgRADgDAJQgWgCgGADIgDACIgDAIQgBgDgEAAQgHAAgGAKIgGAQIgQAOQgOAMAAACQAAAFAHAAQgFAFgEADg");
	this.shape_1.setTransform(14.2,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FECE89").s().p("AAvBZIgzgUIgFgIIiTAAIgIAAQAHgPAIgGIAfgPQAUgKgMgHQgPARgogBQAAgbABgGQAEgQATADQAPgEAGAPQAFAOANgDQgDgKAQgRIACgDIAJgJQANgRAGgPIAFAEQADADADAAQAEAAABgDIABgEIgBgGQACABAEAAQAHgBAFgFIAHgBIABAAIAAABIADAFQAHABAFgDIACgDIAIgLQALgDAKAGQAJAGAJgBIAAAAIADgCIAIgLQAGgIAPAFQAZAdAmADIAIAOIAHAOQAIAPABAMQADAjgcAiQgOAQgoAgIgSABgAAOAdQANAFAUgCQASgDALgGQALgIgIgHQgNAQgagBQgZgBgPgOQAAAPAOAGgABPgmQgCAFgQACQgNACgBAHQAMALAPgKQARgLgEgVQgJgQgXAMQgJAFgDAFQgDAHAHACQgEgJAUAAQAUAAgEAJgAgUguQgSAOAQAKQABgMAQgHQARgIADgEQgGgCgGAAQgMAAgLAJgAA6hTQgKAFgFAIQgDAEgBAFQAIgEAIgDIALgDQANgCAIgEQgIgIgKAAQgFAAgGACg");
	this.shape_2.setTransform(18.6,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABbCCQApggAOgQQAcgigDglQgBgLgIgOIgIgOIgHgOQgngDgZgdQgOgFgGAIIgJALIgCACIgBAAQgJABgJgGQgJgGgMADIgJALIgDADQgDADgHgBIgCgFIAAgBIgCAAIgGABIgTABIAAAEIABAGIAAAEQgBADgEAAQgEAAgCgDIgFgEQgGAPgOARIgIAJIgDADQgQAPAEAMQgNADgGgQQgFgOgQADQgSgDgEAQQgCAGAAAdQAoABAQgRQAMAHgVAKIgfAPQgIAGgGAPIgSgCIgDgCIATgJQgSgcAJgaQAHgWAagRQgGgSgGAGQgKAMgJAAQAGgRAYgUQAPgMAIgJIAAgDIABgDIAAgHQAEgFAUgCQABAAAAABQABAAAAAAQABAAAAABQABAAAAABIAFgJQAEgJAEgDQALgHAMAHQAJgCAQgLQAOgGAJALQACADAjgCQAlgCALAJQAJAGgFAJQgEAHAIACQAUADgEAdQAugIASAoIACAGQANAfgJAlIgBAAIgHANIgDAXQgQAEgRAUQgSAUgTACIgFAAgAhpgiIAAAtQAEgDAFgFQgHAAAAgDQAAgCAOgMIAQgOIAGgQQAGgMAHAAQAEAAABADIADgIIADgCQAIgDAWACQADgJAPgDIANgBQACgBgQgEQABgPAWgBIApAAQgSgTgoAHIgeAGQgSADgMgFQgEABgLALQgIAIgNgDQgDADgMAAIgCAHIAAAAIgBACQgDAGgJAIQgaAVgDAIQALAHAGgIQAEgEAFAAQAGAAAIAFgAATA4QgQgGABgPQAPAOAZABQAaABANgQQAJAHgMAIQgKAGgTADIgMABQgLAAgJgEgAA0ADQAAgFAOgCQAPgCACgFQAFgJgUAAQgVAAAFAJQgHgCACgHQADgFAJgFQAXgMAJAQQAFAVgRAJQgIAFgGAAQgHAAgGgGgAgQgTQAQgNAUAGQgDAEgSAIQgQAHgBAKQgPgIARgOgAAvgrQAFgIALgFQAQgGAMAMQgHAEgOACIgLADQgIADgHAEQABgFACgEg");
	this.shape_3.setTransform(18.1,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnAdQgIgEgDgFQgBgDAAgHQAAgHADgDQACgEAEgCIgBAFIABADQABADAGAAQAJAAAAgIIAAgFIAFACQALAGAAAJIgCAFQgBAMgLADgAAWgEIAAgIQAAgJADgFIAAACIAAAFQABADAFAAQAGAAADgFQADgDAAgEIACABQAFAEABADIABASQgDACgRAAQgJAAgBgEg");
	this.shape_4.setTransform(21,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FECE89").s().p("AAvBZIgzgUIgFgIIgSAAIgBgBQgKgFgMgFIgCgBIgJADIgEAFIgFgHQgNACgIAJIhJAAQAHgPAIgGIAfgPQAUgKgMgHQgPARgogBQAAgbABgGQAEgQATADQAPgEAGAPQAFAOANgDQgDgKAQgRIACgDIAJgJQANgRAGgPIAFAEQADADADAAQAEAAABgDIABgEIgBgGQACABAEAAQAHgBAFgFIAHgBIABAAIAAABIADAFQAHABAFgDIACgDIAIgLQALgDAKAGQAJAGAJgBIAAAAIABAAQgGAEgBAGIgCAOIAJAIQgEADgBADQgDAHAHACQgEgJAUAAQAUAAgEAJQgCAFgQACQgNACgBAHQAMALAPgKQARgLgEgVQgDgGgFgCQAEgGgDgHQgHgNgHgDQgCgFgGADQgFACgCACIgBABIAIgLQAGgIAPAFQAZAdAmADIAIAOIAHAOQAIAPABAMQADAjgcAiQgOAQgoAgIgSABgAAOAdQANAFAUgCQASgDALgGQALgIgIgHQgNAQgagBQgZgBgPgOQAAAPAOAGgAgbg/QgPAUAUAVQAQAIANgLQAPgLgHgRQgPgSgMAAQgJAAgGAIgAhbA9QAIgJANgCIAFAHIAEgFIAJgDIACABQAMAFAKAFIABABg");
	this.shape_5.setTransform(18.6,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABbCCQApggAOgQQAcgigDglQgBgLgIgOIgIgOIgHgOQgngDgZgdQgOgFgGAIIgIALIABgBQACgCAEgCQAHgDACAFQAHADAGANQAEAHgEAGQAEACADAGQAFAVgRAJQgQAKgLgLQAAgFAOgCQAPgCACgFQAFgJgUAAQgVAAAFAJQgHgCACgHQACgDAEgDIgJgIIACgOQABgGAGgEIgBAAIgBAAQgJABgJgGQgJgGgMADIgJALIgDADQgDADgHgBIgCgFIAAgBIgCAAIgGABIgTABIAAAEIABAGIAAAEQgBADgEAAQgEAAgCgDIgFgEQgGAPgOARIgIAJIgDADQgQAPAEAMQgNADgGgQQgFgOgQADQgSgDgEAQQgCAGAAAdQAoABAQgRQAMAHgVAKIgfAPQgIAGgGAPIgSgCIgDgCIATgJQgSgcAJgaQAHgWAagRQgGgSgGAGQgKAMgJAAQAGgRAYgUQAPgMAIgJIAAgDIABgDIAAgHQAEgFAUgCQABAAAAABQABAAAAAAQABAAAAABQABAAAAABIAFgJQAEgJAEgDQALgHAMAHQAJgCAQgLQAOgGAJALQACADAjgCQAlgCALAJQAJAGgFAJQgEAHAIACQAUADgEAdQAugIASAoIACAGQANAfgJAlIgBAAIgHANIgDAXQgQAEgRAUQgSAUgTACIgFAAgAhpgiIAAAtQAEgDAFgFQgHAAAAgDQAAgCAOgMIAQgOIAGgQQAGgMAHAAQAEAAABADIADgIIADgCQAIgDAWACQADgJAPgDIANgBQACgBgQgEQABgPAWgBIApAAQgSgTgoAHIgeAGQgSADgMgFQgEABgLALQgIAIgNgDQgDADgMAAIgCAHIAAAAIgBACQgDAGgJAIQgaAVgDAIQALAHAGgIQAEgEAFAAQAGAAAIAFgAAygrIAAAIQACAGAIAAQARAAADgEIgBgSQgBgDgFgEIgCgBQAAAEgDADQgDAFgGAAQgFAAgBgDIAAgFIABgCQgEAFAAAJgAATA4QgQgGABgPQAPAOAZABQAaABANgQQAJAHgMAIQgKAGgTADIgMABQgLAAgJgEgAgSADQgTgTAPgUQAPgUAbAeQAHARgPAJQgJAGgIAAQgGAAgHgDgAgUgfQgDAFAAAHQAAAHACADQACAFAIAEIANAAQAMgDAAgMIACgFQAAgJgLgIIgFgCIAAAFQAAAKgHAAQgGAAgBgDIgBgFIABgFQgDACgDAEg");
	this.shape_6.setTransform(18.1,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_1},{t:this.shape},{t:this.shape_4}]},14).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},11).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.3,26.2);


(lib.BubCalfTrace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPEGIgDgEQgEgFgBgHIgEgdQgdgHgQgaQgJgNgJgJQgogrgCg1IAcgOQgLgJgLgqQgJgggQhuIAIANQAIANAGACQAFATAAAKIgBALQgFA9AhAyQAFAIACALIgfAXQAIAmAYAdQAfAlAjAhQAJAIAAAMIADAJIACACIABAAIAiABIASgVIgEgKIAAAAIgXgKIgCgBQADgDAFgBQACgBAEAAIAHAAIAHADIADACIABACQAFAEADAHIACAEIABgBIAOgPIgCgOIAAgBIgXABIgCAAIgCgKIABgCIALgCIASgBIAFADIAAABIACACIACAFIACADIABAHIABACIABgBIAGgHIAEgFIACgHIABgHIAAgBIgFAAIgGAAIgBgBIgCgBIgBgFIAEgDIAFgCIAFgBIAGAAIALACIAHAEIAFgEIAFgEIACgEIABgEIABgBIgugBIAAAAIgsgsQAjhKAMhPQAIgygKgwIgDAAIgCgTQgEgVgKgVQgPgegZgMIABgMQATAIAPANQAlAigBA3IgBAEIgBAAQANCEgzB2QANAIAKAMIAJANQAdgGAaARIgCATIgbAQIgYAcIgNgBIgEAQIgPALIgIABIgYAZg");
	this.shape.setTransform(12.7,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FECE89").s().p("AAAD5IgBgBIgDgIQgBgOgIgHQgjghgfglQgYgegIglIAfgXQgCgLgFgJQghgxAFg9QAAgFgCgIQABgJgFgTQgGgDgIgMIgIgOIAPAIQAfAOAGgTQAJgiAYgQIAogXIANgMQAFACADAAQANAAAKgHQALgHAEgOQAYAMAQAfQAKAVAEAUIACAUIADAAQAJAvgHAzQgMBPgjBKIAsAsIAAAAIACABIArABIgBADIgDAFIgEADIgFAFIgHgFIgMgCIgFAAIgGABIgEACIgFAEIABAEIACABIAAAAIAEADIAGAAIADAAIgBAGIgCAHIgEAGIgGAGIgBgGIgCgEIgCgEIgCgDIgCgBIAAgBIgFgCIgSAAIgLACIgCADIADAKIACAAIAAABIAWgBIADANIgOAPIgBgBQgDgGgFgGIgEgDIgDgBIgGgDIgHAAQgEAAgDABQgEABgEACIADABIgBABIAXAKIAFAKIgSAVIgigBg");
	this.shape_1.setTransform(11.9,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-9.9,30.4,52.4);


(lib.BubArmGlass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECE89").s().p("AiRCTQg0gSgSgNQgzghgKgIQgNgKAAgdQAAgoAFgPQAIgcAgghIAfgcQAPgNAVgMQACgBA4gOQAcgIAMgHIgDgEIAAgDIABAAIAIABQAOAEAIAZQAJAXAAAUQAAALgFAXQgFAXgGAIIgCACIgDgCIgTABQgGABAAAEQAAABAAABQAAABABAAQAAABAAAAQAAABAAAAIAEABQAxgFASAFQAPAFAnAbQAFAEAZAYQAVAVAEAAQACAAAAAAQABAAABAAQAAAAABgBQAAAAAAgBIAAgEIgCgCIAUgMQAQgKADgJQABgEAAgQQgBgMAGgFIANAAQAIACAEAMQADAHAAAIIgCAKIgDAJIAAACIAAABIAAAFIAFABIADgCIAMAAIAGgCQABgBAQgBIACgBIACAAQAmAAAOgLQAPgLAEAAQAIAAAAAIQAAADgHAKIgHALQgCABgVAFQgSAEgEAHIABADQACACAEAAQAUAAAPgHIADAHQAAAGgQALQgSAMgMgCIAAAEIAAAFIAFABQAPAAAMgIIACADQADAEAAADIAAAEQgJACgBAJIgBAGQgGAFgLAEQgcALAAADQAAABAAAAQAAABAAABQAAAAABABQAAAAAAAAIADABQAPgCALgEQgXASgRACIgEAAIgBgBIgHgEIgGADIgOABQgCAAgWgKQgWgKgUAAIgGAAIgEgCQgLAGgUAPIg+AEQhIAAhJgYg");
	this.shape.setTransform(30,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai+CJQhsgtAAg6QAAhdBQg/QBEg1BMgBIABgBIAAADIAAACIgIgBIgBAAIAAADIADAEQgMAHgcAIQg4AOgCABQgVAMgPANIgfAcQggAhgIAcQgFAPAAAoQAAAdANAKQAKAIAzAhQASANA0ASQBJAYBIAAIA+gEQAUgPALgGIAEACIAGAAQAUAAAWAKQAWAKACAAIAOgBIAGgDIAHAEIABABIAEAAQARgCAXgSQgLAEgPACIgDgBQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgDAcgLQALgEAGgFIABgGQABgJAJgCIAAgEQAAgDgDgEIgCgDQgMAIgPAAIgFgBIAAgFIAAgEQAMACASgMQAQgLAAgGIgDgHQgPAHgUAAQgEAAgCgCIgBgDQAEgHASgEQAVgFACgBIAHgLQAHgKAAgDQAAgIgIAAQgEAAgPALQgOALgmAAIgCAAIgCABQgQABgBABIgGACIgMAAIgDACIgFgBIAAgFIAAgBIAAgCIADgJIACgKQAAgIgDgHQgEgMgIgCIgNAAQgGAFABANQAAAPgBAEQgDAJgQAKIgUAMIACACIAAAEQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgCAAQgEAAgVgVQgZgYgFgEQgngbgPgFQgSgFgxAFIgEgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAgBQAAgEAGgBIATgBIADACIACgCIAaAAQAcABAGAKQAHAIAeAPQAMAFAlAlQACgGAIgEQATgIAEgEQAFgEAAgLIAAgPQAAgOAIgHQALgLAYAXQAHAKACAIIABANQAAAGgEALQAIgBAFgDQAEgCAOAAQAFgEAOgEQAmgJAGgCQAQgEAIADQAGAEAAAKQAAARgLANIgGAFIABACQADAEAAAGQAAAKgOANIgBABQAGAGAAAIQAAAHgDAHQgCAOgPAQQgXAaglAAIgDAAQgIAEgMAAQgNAAgXgKIgZgKIgRAAQgFAGgPAGQgdALgxAAQhcAAhggpg");
	this.shape_1.setTransform(30,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,35.8);


(lib.bk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#66CCFF","#B4FEFD","#FFFFFF"],[0,0.6,1],1711,-72.2,1711,36).s().p("AYFHPIAAABQgagUgIAAQAFgIgBgHQgNgMgZAAQgWAAgVAIQABgGgFgGQgEgGAAgFQgfABgWgRQAEgDAbgEQAUgEACgMQgNgFgbgEQgigEgKgCQAGgFAigSQAZgOAIgRQgTgEghAHQgrAIgMABQAGgNAWgZQASgXgEgUQgZAFgaAXQgdAbgQAHQgJghgEgIQgKgVgPgHIgPArQgIAagIAPQgpglgkgRQADAaAVAoQAMAXAFAQIgIACQgIgJgJgCIgBADIgKgOQgOgSgRACQADAGATASQAOAOAGAMQgQADgjgRQgdgPgYAOQgOgQgUgGQgZgJgOAQQgEgPgRgIIgkgIQCBi6DMisQACANgIARQgLAVgCAIQAYgDAPgZQATglAHgGQACAVgHAjQgGAcAEAZQAagKARgkIAdg/QAIApAHASQALAbAUAMQAYgOgDgqQgIgygBgPQAgAUAWgBQAGgegVgfQgbgggIgSIAmABQASAAARgFQgYgxhQgQQAXgNAEgOQgOgLgVAJQggANgGABQgFgmgKgMQgNAEgGAQQgDAJgFAVIgngbQgZgPgUADQACAQAKAUQAMAYADAKQgngNgWgFQgogIgWAKQAYAOA8AsQhOAKgSAJQAXAGAxAKQAqAKAVAQQiRCIhHBIQh3B5hEBrIgFgBQABgJAJgPQAMgXgJgOQgMgEgNAKQgMAJgFgEIAGgVIABgGIABgHIAAgMIgBAAQgXABgKAZQgJAfgHAMQgBgrAGhMQAEgsACggIAKg3QACgIADgDQAKAAAPAGQAPAGAKAAQACgEgFgGQgDgEAGgBQAGAGAQAHQARAHAHAGIAVAdQAMAQAJgGQABgigWgiQgagggGgNQAfgIAeATQAMAIAZAgQASAaAOgDQgJgegYgeQgegigOgTQAjgCAuARQA0ATANABQhHhYhigIQA7gZA4gCQgUgWg6gBQg0gCgmAOQACgHAPgMQANgKAAgNQhfAIgrA1QgOgVgfgNQgfgOgbACQARAcAVAeIhCALQgnAIgVALQgcAPgUAVQgXAZgCAXQANgBBFgRQAzgMAjAHQg2APgdAhQglAnARA1QAZgKA3glQAvggAmgJIgSAcQgKASAMAMQAJgDASgPQAPgNAQAAQgHAsgKBbQgIBBgMAsIgBAAIgPAQQgWgMgnAAQgwAAgeAQQgDgLgMgQQgXAAgEAEQgSgjgMgHQgDAQgJADQgGgNgRgCQgCAPgJAIQgMgcgkAAQghAAgXAUQgXgWgkAKQghAIgPAXQgzgXgLgGQgigTgPgYQgVgDgjADQgeADgMgDQgNgDgQgRQgQgRgLgFIABgCQAAgDgLAAIg2gCQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBAAAAAAIgCAAIAAAAQgOgZg3gFQhCgDgQgEIAhgOQAUgIAFgNQgPgIgXAFQgfAFgQgCQAFgLAagUQAXgSAAgMQgagEgZATQgcAWgFABQAIgfABgNQABgXgOgLQgIAMgOAjQgNAggLAOIgWgoQgKgPgLgEIAAgFQgGgHgRAAIgFAAQgMgDgNAAQADALAVAcQAQAXACAWIgWgRQgFgIgGgHQgFgEgGgDQgHgJgDAAIgtglQgagagNgbQgoABgsgeQgvgfgigBQgIgFgJgMIgHgIIgKgKIACAGQg4gcgrATIg8AaQgWAKgRACQgcgGgOACQgaADgoAVIhEAlQgOAIgqAeQghAWgSAFQg+AOhPA8Ig8AuQgiAYgaAMQgVgpgdAKQgGAEADANQADAMgEACIgUgNQgMgIgOABQgHACgFALQgGAMgEACQgGgJgOADIgXAGIgJgLQgGgIgIAAQgNABgSASQgRARgJgCQABghgYgJQgTAMgnAyQgKgLgSgEQgSgFgPAEQgmAKAXAoIgugTQgCABgDAJQgDAHgEACQACgYgZgKQgYANgOAGQAOgagDgYIgTgPQgOADgPAMIgYATQgCgVgVgCQgUAIgPAZQgIANgPAfQgHgLgVADQgTACgGAKQgBAGAIAUQAEAIgFAFQgJgJgGAAIgEABIAAACIgYgDQgVgBgIAJQAEAgANAZQgTgPgNAAQgOAAgIAjQghglgQAAQgVAZgHAHQgagwgQAAQgMAAgcAjQgIgvgVAAQgRASgUAIIAAsTMBQHAAAIAAOLQgTABgCACQgGAEgCADQgHgRgXAAQgKAAgQAGIgRAHQgNgRgcAAQgUAAgQAIQgPAHgHAAQgWgRgNAAQgRAAgGAIQgEAIgCABIgOgLIgBAAQgDgCgFABQgPAEgHgBIg6grIgDgDQgIABgHAGIgMAJIAAAAIgCgBIgKgKIgFgEIgBAAIgHgBIgGAAQgIAFgIANIgOAVQgDgHgQgJQgGAFgGAMQgHANgEAFIgJgKIgLgJQgGgEgFAAQgHACgGAKIgIANIgCACQgBgHgJgDQgLgEgCgCQgDglgggEQgagDgjARQgEgeggAFQgeAEgKAVIgPgKQgIgHgMACIgEAKIgHAPIgEAGIgEgGIgIgNIgGgKIgCgCQgEgBgFAEQgEACgGgBQAFgFgCgGIgGgMQgQgBgPALQgQAMgLABQgBgRgQgHQgQgHgRAIQgGANgFAhQgGgCgIgLQgIgJgJgBQgHAMgGAYIgKApQgBgFgHgDg");
	this.shape.setTransform(296.7,47.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#6A6A6A"],[0,1],205.4,-15.1,205.4,4.4).s().p("AiPBHIAAgBQAZAAA9geIAdgPIAVgNQAQgLAKgIQAVgVA1giQAegTAJgIQAOALgCAkQAAAMgGArIgBAMIgCAKQAAAEgCAFIgBAAIgFABIAAADIACADQgLAMgbALQglAQgTABQh6gBg4gTg");
	this.shape_1.setTransform(233.6,182.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#919191"],[0,1],198.5,-13.5,198.5,6).s().p("AjvBJQgPgKgDgOIgBgIIgBgGIAJgHQAwgdBXgjQBqgrA4AAIACAEIgoAXQgqAagUAaQgLANgXAPIgVANIgTAJQg4AbgiAAQgEgJgEAAQgEAAgBAEIABAHIAAABIgKgHgABVBGIgPgIIAHgVIADgMQAEgYAAgeIAYgTQAbgPAtAAQAdAAAZAhQAUAaAFAdIABAMIAAAEQAAAJgOAKQgUAOgjAAQgTAAhXgIg");
	this.shape_2.setTransform(240.5,180.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FEA245","#6666FF"],[0,1],20.8,-49.2,39.5,20.4).s().p("AKOCZQgpgIgKgHQgKADgSABIgcABQgiAEgCAdQgaACgdgcQgcgagYAGQgGgNgUgcQgSgZgGgSIA1gQQADgFgGgFQgGgEAGgBQAGAAAmAGQAaADAVgCQAMAJATAWIAKABIArABQAOAFANAKIAeAVQAQALAQABQAJAAAfgCQAagCAPAEIAcAYQAQANARAFQgHARgYAGQgIgXgHgHQgRACgCAQQgNgMgKgDQgZALACAcQgLgTgigIgAnrCGQgMgTABgQQgNAAgKAMQgKAOgKABQgIgEgJgTQgIgSgNgBQgMACgOAQQgNAQgLAEQgNgHgJgjQgNAAgKANQgKANgKABQgahFgvAaQghgcgFgGQDWiTDLgzIACAIQgHAGACAKQAUgCAhgQQAggPAWgCQgDARAHAWQAPAAALgMQAOgRAGgCQAKAGAjAeQAbAWAYAHIgBgbQgBgRAKgCQBGAjBBADQABgIgGgOQgIgMAEgEQAKABASAHQAUAHAMABQgCgPAJgFQAIAGAEgBIALgFQAAAHAGAJQAFAIAAAHQAKAFAgAfQARARALAEIAAAAIABACIgKgBQgPAAAAADIACABIgCgBQglgIgMAIQAJANASAPIAhAbQAkAeAAAkQgmgTgYgEQAGAIAGAgIgGABQgEgGgTAAQgUAAgHADQgNgEgMAEQgJADgSANQgXgagkAUQgeAQgQAcIgdgLQgSgGgSABQgLAJgIALQgZgKgrAHQguAIgcgJQALgIArgPQAjgMAOgPQhAgNhdAkQAvg5BUgqQg1gIg/AdQg5AcgiArQgNAWgIAJQgKAMgPAAIgMgBg");
	this.shape_3.setTransform(230.3,57.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C25812","#FF9933"],[0,1],135,32.6,127.3,3.8).s().p("A2SC5QAMgEANgGQALgFALgHIAYgQQAjgcABgQQgBgHgFAAIg9AfQguAOghAIIAAgBQAGgNABgJQACgMgIAAQgpAigXAPQgQALgHAAQgFAAgGgLIAAAAQgGgMgFABQgDgBgJAHQgEADgFACQgHACgKAAIgCgCIgJgEIAmgYQAAgHgKAAQAIgFAAgIQgEgQgOgJIAAgZQAAgagFgLQgKgXgIgcQANAIAHAQQAJATADAEQAJgTAAghQAAgQgIgsQgGgpgEgKIApA4QAiAxAKAaIAEgBQgFgpAgg8IAcgyQAQgdAIgUIABABIAAAdQgEALAAAeIAEA0IAAAbQAAARAEAJIAEgCQAKgfBJgsIB6hJIABABQgTAkg+BvQAAAEAEACQBCgkAzgLQBQgTAcgKIhaA7QhFAtgBAHQAAAEAFABQAPgFBAgJQA3gKAggEIAAABQi8BygBAHIAFAGQAUgKAhgFIBAgIIAAABQghAwgvAaIgJAFQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAIAEABIAZgKIBEgZIAAAAQgNAEgJALIgKAKIgJAIIgHAEQghAShTAAIgIgEIgGgCQhQAXggAAQgjAAATgZgAUMDAQgHgJgJgIQgHgHgJgGQgfgVgTgTQgQgQgDgYQgCgbgDgNQAIAMAbASQAeATARAAQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAAAIAAgFQgCgQgOgdQgMgaABgWQAAgSAGgFQAHAJAFAVQAJAcATAAQANAAAGgmQABAIAHALQAJATALAAQATAAAnhnIAAAAIALBMIgBAQIAEABIAggeQAGgJANgXIAAAAIAABJIgHAXIACAEQBGgtAWgrIAAABIgRA1QgKAegMAZQABAEACABQARgMApgYQAbgSAJgMIghA6QgQAagoAlIADAEQAlgTBHgoIAAAAQgTAaglAgQgfAbgTAJQgLAFgIAAIgGgFQgGgDgGAAQgIAAgMADQgMAEgQAHQglAHgSAFIAAgBIATgWQAWgdAAgPIgBgGIgDgBIgUAhIgOASQgQATgJAAQgGgRgIAAQgcAXgEAAQgQAAgFgIg");
	this.shape_4.setTransform(279.8,167.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF9933","#980189"],[0.008,1],88.3,-28.6,88.3,36.8).s().p("AiGEIQgRgGgLgDIgOgCIARgJQAbgNAMgKQA8g7AAgJIAAgDIgJgBQgVAAggANIgfAOIABgBQBeiEAAgXIgBgEIgEgCQgNAAgrAbIg8AoIgBgBQAHgSAOg9QAOg9ABgNQgBgEgEgCQgxA0grAjQgchXgNg1QANARAVAPQAaAUASABQAGgBAAgTQgHg3AAgUQgBgbAJgRQAQgmAGgSQANA/ApA+QBUB7ALAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAgBIAAgFQgFgUgDgUIAAgqQAAgmAGgYIAFgYQADAYAlBOQAFAOAMAqQAIAgALARQAcggBJhNQgaBMghBNQAAAEAFABQAQgVAuggIBLgvIACADQAAAPggBBIgKAWQgHANgIAGQgxAdAAAKQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAIAEABQAWAAA1gaQAtgWAVgQIABABQgfAzg7AxIg0AnIAAADQACACAFAAIBFgYIAAABQgEAQgsAVQgoATggAGIgGACIggAKQhBAUgOAAQhUAAgegLg");
	this.shape_5.setTransform(342.3,159.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B16A01").s().p("Ah1DKIgKABIACgFIACgDIADgLIAHgKIB2iPIA7g8QBGhHCHh8QAHAug5A0IgvAoQgaAYgLASQh6BqhlCjQgEgXgZAAgAkNC8QAUgVAHgoQACgKAFhDQABgLAMg/QAIgrgFgXQAYAFgDALIgDASIgDAAQgLAqgGBQQgGBegDAXQgHAIgfABg");
	this.shape_6.setTransform(392.1,57.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FEDD92","#D2A679"],[0,1],1775.2,-184.3,1793.2,-12.4).s().p("A9fAQIAFAAIgFgBIAAgDIAIAEgAhkAGIACAAIAAABIgCgBgACsgNIACACIAAAAgAdfgOIABgBIAAABIgBAAg");
	this.shape_7.setTransform(229.1,188.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AR6D6IAIgDQAEAMABAHgARtD5IADACQAJADgFAEIgHgJgAMxDJIAFAAIgFACIAAgCgAKwC9IgBgBIACgCIADgEIgBADIABAEIgEAAgAK4CoIAAAAIAAABgAoHBPQgBgHgDgDIAGgBIAAACIAFAPgAh/AvIAGgBIABABIADABgAL1g6IACAAIgDAeIABgegAn7hEIAGABQAGAAAGACIgCADQgEgDgMgDgAtViZQgagWgWgGQgIABgLAPQgKANgFgCIAAgfQgXgHgbALQgdAOgNAFQAAgEAIgGQAHgGAAgHQgfAAgvARQgyARgSABQARgGA5gkQAxgeAigFQAMgCAbAGQAZgDA8gbQAtgVBAARQARAmAugEQAdAYBGAlQgEAOAAACIgegMQgTgGgQgCQgBAJAJAOQAHALgDAFQgjABgmgOQgwgTgRgDQgFAEABASQABARgFADQgMgGgggbgAwXiuIAMgDQgBAEgJAHgAKpjuIgBAHQgLgGAMgBg");
	this.shape_8.setTransform(295.8,57.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FEDD92","#3CCC49"],[0,1],1637.8,-531.4,1697.8,-304.6).s().p("EgoDAJ4IAAysIADAAQAJACANAAIAZgEIAaAEQAkAAAtgcIAPAHQAQAGAMABQAZgBAJgOQAGACAHAEQAHADAPAAQAQAAADgFQABgHACgDIAVAKQAOAFAUAAQAMAAAHgEIAOgIQAHAKATAAQANAAAGgFIAIgIIAGAIQAHAEAXAAIARAAIADgEQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQABABAMAAQAXAAAKgHIAIgIQACAAAIAFQAHAFAHAAQAHAAAHgFQAHgFADAAQACAAAIAHQAHAGAGABQAIAAAEgGIAHgJQAFAGAOAAQApAAAugcQAGAHAZAMQArAVA2AAQAwAAApgNQANATAigIIA+gRQAdgJABACQAAACAFAEQADACAWAAQBHAAApgbIADAAQABAJAHADQAOAGA0ABQAuAAAOgMQADAQAKAEQARAHBAABQAggBAegIQAtgOAPgDQACAJASAIQAUAJAaAAQAYgBAggRIAUgNIACAAIAFgEIAAAAIABABQACAHgBANQACAMAYAMIAoASQAsAMBXAAQBUAAAdgWQALgJAIgPQAhASBbAAQAlAAAXgQQASgNAAgOQAOAXA7gRQAlAAAPgIQAPANA3AAQATAABagKQADAAAKAGQAKAGALAAQATAAAHgDIADABQAQAAAOgIQAJgFAQgCIAfAAIAMAJQAMAJAgABQAMAAAegNQAkAAABABQAKAIAGABQAKABAHAHQAOAFA7AAQAvAABigdIAnAAQAGAGAPAAQALAAAKgEIADgCIARAAIADAGQALAJAxAAQA2AAAJgHQBUAAApAJQAoAJANAAQAfAAgHgFQAsAAAOAEQAEAAARgMIAPgLIABAAIACgCIAWAAIANAMIAHAKQAJAKASAAQAJAAAXgYQAHAAAFATQAWgMAOgPIACAAQgJAKgPAOIAAAHIAEABIA1gNIA8gQQAIAAAGAJQAIAAAPgIQADAIALAAIATgEQAvAAACAFQAdAAgBgKIADAEIABACQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAIgBAaAAQAwAAAAgJQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIFRAAIAJAIIgBABIACAAIACABIADAAIA5AFIAegBIABgBIAAgEIACABQAUARAZAAQAQAAAAgQIgBgIQAEAFAMAAQAIAAAHgIIAYAAQAFACAIAAIAGgCIALAAIAAAEQADAIAQAAQANAAAYgMIABAAQAAASAOAAQAJAAAmgLQALAAALAFQAWAAANgMIADAAQAAADACACQAFAIAPAAQALAAAQgNIABAAQAKAPAfAAQALAAADgEQAEgEAkAAIAWABIAGACIAYgHQAGAAARAGQAGAAAKgFQAJgGAAgCIAATvgEghtgEsIAMgHIgSAAIAGAHg");
	this.shape_9.setTransform(296.7,247.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FF9933","#660033"],[0.008,1],96.4,-27.9,96.4,37.5).s().p("EgiLAEGIgBgDIAMgHIAFADQAMAGAJAAQATAAALgMIADAAQADAIAEAFQAHAHAIAAQAIAAAOgHIATgNQARgNAYgWIACADQgJAOAAAJIAAAGIAFABQBogbAjgYIABAAQgSAYgYARIgfAMIgHAEIgTAJQgOAIAAAFIAAADIADAJIgHACQgkAJhHAAQgQgBhIgjgAZbEMIgKgGQgUgQgLgXQAAABAAABQAAAAgBABQAAAAAAABQgBAAgBAAQAAAIAWAbIAHAIIgzABQgEgDgCAAIgWgBIgEAAIgFgFQgPgQgMgQIAAADQgJgMACAAQgegqgJguQAMATAVATQAZAXAOgBIAEAAIABgHIgWg/QgLghgCggQAOAaAHAJQAZAhALAAIAEgBIAAgTIgCgZIABAAQAhAhAGAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQgCgQABgKQAAgQAIgBIgFAGIADABQADAAADgCIAHAUQACAEAJAIQAKAJAFAAQAOAAAEhAIABAAIAFAPQAFAKANAAQAKAAATgXIAkgtIABAAIAAABIgCAeQAAARANAAQADAAArguQArgrAGgKQgCAVgKAhQgIAcAAAXQAAAMADAEQAKgNA6giIAAAIQgCALgPAnQgJAZAAAUIAAANQADAMAQgBQAPABAbgVQAfgXAQgdIABAAQgQA2AAAIIAAAIQABAIAGAAQAHAAAZgYQAcgYASgFIAAAQQgFAPgFAeQgJAUAAAYQAAAEADABIACgBQACgOAXgLIAbgJQAYgHADABQACAAACAGQACAIAHgBQAHAAATgRIABABIgcAxIADAEIAIgDIAFgCIAJgDIAfgDIAAAXQgRAWgMAAQgPgIgDAAIgZAIIgCgBIgXgBIgCgBIgIAAIgcgCIgBACIgDADQgDAFgWABQgPAAgIgJIAAAAQgFgJgBAAIgNAJQgMAGgKAAQgKAAgBgGIAAgLIgDgBQgIAHgHAFQgJAFgGAAQgXAAgBgCQgBgDgHAAQghALgUAAQgDAAAAgJIAAgCQAAgIgGABIgOAHQgOAFgKAAQgLAAgCgFIAAgEQAAgLgCgCQgHAMgUAAQgNAAgEgYIgDgBQgDAAgIAPQgGALgIAEIgHABIgFgBQgEgDgGgIIgJgMIgEACQgBAEAIARIAGALQgBAJgKAAQgRgBgVgNgAjBEGIgBgCIAIgJQAcgjAAgOQAAgBgEgCQgaARgegBIAAgNQAFgPAAgEQAAgIgHAAQgLABgjARIgqAUIgBgCQAOgdAAgIIAAgCIgFgCQgXAMhbAmQAGgRAAgNQACgRgIABQgfAlgIAIQgWASglALIgIACIgNADIAAgDIAAgDQABgIAEgDQASgVAAgVQABgJgJgDQgigLgJAFIgCACIgEgGQgCgEABgNIgBgHQARgEAMgJQAMgLABgKIABAAIACglQAAgSgVgxIgVgrIAFgCQAnAJAOAYIAJATQAEAMAGAGIAEgBIAAgPQAAhchjh6IABgBQCCBSAhBwIAFgCIAAhRQgFgrgcg/QgjhHgOgjQCiCrAABFIgFARQgFAOABANQgBADAFAFQARgVAAgMQAAgPAUhKIAYhSIAAAAQADAoAXBRQAWBNAAApQAAAJgGAQQgGAQAAAGQAAAFAEACQBFgqBdhaQgIAQgDAaIgHAoQgRA7gXAaQAAAEAFABIA7grQAsgfAlgPQgLAegwBEQgrA/AAADIAAAEIAFABIAjgRQAngSARgDIAAABQgVAggiAbQgOALgfAOIgCABIgRAHQgNABgCACIgBABIAAACQgVAFgQABQgQgBgJgIg");
	this.shape_10.setTransform(334.2,158.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#67E473","#015C13"],[0.008,1],162.8,-28.4,162.8,37).s().p("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");
	this.shape_11.setTransform(267.8,159.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#67E473","#015C13"],[0.008,1],138.8,-83.7,138.8,91.3).s().p("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A+gUQAWANAEAKQANgJAdgKIAAABIADABQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBQAEgCAWAAQAPgBAKANQAJANAIABQADADAEABIgBgFQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAAAgBIgDAAQgCgLgFgNQgIgWgCgLQALACATAKQASAKANABQgBgogngiIgegZQgQgOgGgNQAXgCAjAFIACgCQAFACAFADIAAABIABAAIABABIANAMIASAQIABABQAMANALAIQABgdgSgaQgWgggDgNQAEgCAHACQADACANABIAEABIAEAEIgFAAQATAEAOAgQAPAgAOAIIATgwQALgcAMgQQADAYgNAdQgNAgAAAHQANgCAcgcQAbgcAYgEQgMASgZAUIgoAfQAKACAqgJQAmgJARAFQgNAKgiAKQgkAJgMAJQAHAHAdgGQAagEAGALQgaAKguAJQAAAKASACQASADgCAMQABAHgHAEQgIAGgBACQAHAGAHAAIAUgBQAHAGAJAZQAIAXALAGQgIgRATgCQATABAKAQQADAFALAdQALgLAQAFIAeAJQgGgaAhgHQASgEArgFQABAFAHAGIgJALQgFAGAGAGQAJgBAOgMQAMgMAPACQAKACAOARQAPATAJAFQgGgPADgPQAEgQAOgBQAMACAPANQAEgTALABIAIAUQAFAMAGAGQAIgbAhACQAZABAaAQIAeggQAIgDAKgBIAOgBIAiAKIAAABQAGAEAGAHQANgiArAJQApAJACAjQADgcAMgKQAEACAFAJQAEAIAHAAIAFgKQACgIAEgBQAJADAFASQAFARAIAEQAEgJAXABQACADAEAOQADAMAGACQAYgUAuABQAUAAAkAFIADAAIgBABIgCADIABACIADABQACgBAEgCQADACATAAQATAAAFgFQACgBABgEIADgBIAAAAIACAAIAFABQADADAEgBIABAAIABAAQACgDADgKIAJgdQAIgbAQgHQACAQgJAQQgJASAAALQAKgDAPgMQAOgNALgCQAIAOgPAYQgPAWALAMQAIgBAHgFQAKgDAIAAQAOAAAGAOIAEALIgTAeQANgKAYgbQAXgUAVAIQAHACAJASQAHAOALAAQgFgDAGgIQAGgJAIABQAQAAAUAPQAUAQAGAAQADgTAaAKQAYAJAIAPQAJgKAXAEIAlAGQgCgPgWgsQgWgpAAgTQARAIAYAUQAZAWAOAIQgBgYAJgWQALgZAEgOQAJAIAJAcQAJAaAMAHQAqgsAigRQgHAQgYAbQgWAcgIARIA1gRQAngMAXAGIgpAXQgYANgMAOQAIADAkAAQAgABANAHQgiALgQABQAKAPAbALQAVALAOACQACADgEAKQgDAFAJABQAIgBAYgKQAYgHARAKQABAMgMAIQgOAJgCAJQAFAAAdgKQAPgEAUAMQABAGAHAEQAKAFABADIAGgtQAFgZANgIQAVAWAJAFQAAgwAQgJQAVgFAGASQAIAbADADQAYgjAagEQACAJgGAJQgFAJABAHQAIABAJgGQAIgIAJACQAIAEAHASQAGARAKADQgBgbAQgTQAJACALAJIANAKIAGACQACgmAsADQAEAEAIAYIACAEIABADIAJgEIAVgNQARgJASgBQAOAIAJAXQAAADgHAMQgEAIAEAHQAIACAIgHQAHgGAHAAIALAOQAGAKAGADQgBgiARgFQAJACAKAMQAKALAJACQgBgXAJgKIACgBQACgDADgBQADAAADAEIABABIAEAEQAFAGAHABQAJgkAWgHQAKAFARAOQAKgNAPgFIAVAeQALgGAKAJIARAQQAFABAJgEQAHgCAGAAIAHAGQAHAEAEAAQADAAADgJQACgKAQAAQAGAAAOAJQAOAIAFAAIASgHQAUgHARAAQATAAAJAIQAJAJAEAAIAQgGQAQgIALABQAOAAAHAJQAGAJABAAIABAAIACAAIABAAIAbgNIAAN2IgBAAQgWAAgIADIgNAEQAhg2AAgQgAVDCuIAIAAIAHgNIgBAAQgJAEgFAJgEgioAAPIABAJIAIgKIgJABgA8wgdQACgGgGgBgA0JiTQgGABAIAGIAAgIIgCABgADCMYIABAAIAAADgA5mMXIABAAIABADgABAMUIABACIgBABgAVdMOIAAgBIABABIgBAAgAgrMCIAAgBIABABgAKhL7IAAAAIAAABgEAnnALyIABAAIAAABgAWyLoIABAAIgBAAgAVHLZIABAAIgBABgAoALNIAGABIgFADgAUPK+IAAgBIABABgAeAKyIADAAIAAACIgDgCgAESKYIAAABIgBAAgEAk5AKYIABgBIAAABgAzPKEIABAAIgBABgALiKDIABAAIAAABgAViJ0IAAAAIAAABgAUKJoIAAAAIABAAgEAhJAJKIAAgBIABABgATKJJIAAgBIAAABgA1DI9IAJAAIgJACgA1vHfIABgBIAAACgA5FHFIAAgBIABABgAjRF7IABAAIgBABIAAgBgAI/otQAtggBDABQgigYhLAMQhVASggAFQAegqA/gcQBBgdA0ALIACgIIAHAAQg0gjABgWQAdgBAZASQAlAbAFACQAYgjBTgXQgEALgRAQQgQAPgFAMIBMgXQA4gMAlAQQgzAMgOAEQgiALgQATQA/gFAyATQAvAUAQAjQhHgfhHAEQAPAQAkAiQAeAeAEAbQhIhahGAWQA/ArAKBHQgdgdgQgNQgdgYgaABQANAOgJACQgQgMgxAAQgKACgWANQgTAMgHAAQAEgMAPgMQAPgOAEgIQgwgDg3AiIgtAdQgaARgVAHQAIg9AxgigAT9p3QgRAEgKAYQgMAcgHAGQgFgSAIgaQAIgagEgOQgHgdgsgMQg3gKgYgHQBDgXAsAPQgMgIgrgWQgkgSgQgRQAugKBQApQgRgZgZg4QAXgEAZATQAFADAgAgIADgcQAEgUAMgGQAAANAEAPQAEAQAAAGQAxgbATgDQgDAMgPAKQgUAMgEAEQBjAEAUAyQgVAFgYgBQgagCgNgKIAmAyQAbAiAAAjQgSAEgVgUQgcgcgGgCQAEAPATA6QAMA1gbAUQgHgLgMgtQgJglgSgLQgJASgPApQgOAigUAOIAMh3g");
	this.shape_12.setTransform(296.7,101.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("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");
	this.shape_13.setTransform(296.7,104.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.2,0,512.9,311.2);


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


(lib.frb_background_pressed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background_pressed();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,6,6);


(lib.frb_background_disabled_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background_disabled();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,6,6);


(lib.frb_background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(background_mc, "background");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,6,6);


(lib.frb_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(shadow_mc, "shadow");
		//component.registerSkinElement(darkshadow_mc, "darkshadow");
		//component.registerSkinElement(highlight_mc, "highlight");
		//component.registerSkinElement(highlight3D_mc, "highlight3D");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.highlight3D_mc = new lib.frb_rightOut();
	this.highlight3D_mc.setTransform(1.5,1.5);

	this.highlight_mc = new lib.frb_rightIn();
	this.highlight_mc.setTransform(2.2,2.2);

	this.shadow_mc = new lib.frb_leftIn();
	this.shadow_mc.setTransform(1,1);

	this.darkshadow_mc = new lib.frb_leftOut();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.darkshadow_mc},{t:this.shadow_mc},{t:this.highlight_mc},{t:this.highlight3D_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.frb_dot_disabled_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(disabled_mc, "foregroundDisabled");
		//
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.disabled_mc = new lib.frb_dot_disabled();
	this.disabled_mc.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.disabled_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,4,4);


(lib.frb_dot_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(dot_mc, "radioDot");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.dot_mc = new lib.frb_dot();
	this.dot_mc.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.dot_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,4,4);


(lib.fcb_background_pressed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background_pressed();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,9,9);


(lib.fcb_background_disabled_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background_disabled();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,9,9);


(lib.fcb_background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//component.registerSkinElement(background_mc, "background");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,9,9);


(lib.fcb_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//component.registerSkinElement(shadow_mc, "shadow");
		//component.registerSkinElement(darkshadow_mc, "darkshadow");
		//component.registerSkinElement(highlight_mc, "highlight");
		//component.registerSkinElement(highlight3D_mc, "highlight3D");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.darkshadow_mc = new lib.fcb_leftOut();

	this.shadow_mc = new lib.fcb_leftIn();

	this.highlight_mc = new lib.fcb_rightIn();

	this.highlight3D_mc = new lib.fcb_rightOut();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.highlight3D_mc},{t:this.highlight_mc},{t:this.shadow_mc},{t:this.darkshadow_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.fcb_check_disabled_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//component.registerSkinElement(check_mc, "foregroundDisabled");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.check_mc = new lib.fcb_check_disabled();
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,3.2,7.1,7);


(lib.fcb_check_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//
		//component.registerSkinElement(check_mc, "check");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.check_mc = new lib.fcb_check();
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,3.2,7.1,7);


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,65,34);


(lib.BubLegWalk2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BubCalfTrace("synched",0);
	this.instance.setTransform(22.5,9.9,1,1,0,0,0,11.8,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-2,rotation:30,x:21,y:7.4},10).to({regY:-2.1,rotation:0,x:22.5,y:9.9},9).wait(1));

	// Layer 2
	this.instance_1 = new lib.BubThighTrace("synched",0);
	this.instance_1.setTransform(10.7,-4.1,1,1,-30,0,0,13.7,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-13.9,40.2,68.4);


(lib.BubLegWalk1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BubCalfTrace("synched",0);
	this.instance.setTransform(20.6,8.6,1,1,45,0,0,11.8,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-2,rotation:0,x:21.3,y:9.1},10).to({regY:-2.1,rotation:45,x:20.6,y:8.6},9).wait(1));

	// Layer 2
	this.instance_1 = new lib.BubThighTrace("synched",0);
	this.instance_1.setTransform(10.7,-4.1,1,1,-30,0,0,13.7,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-13.9,41.8,58.4);


(lib.BubLegTrace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.BubThighTrace("synched",0);
	this.instance.setTransform(13.5,-2.1,1,1,0,0,0,13.7,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-14.8,x:12.2,y:-3.1},8).to({scaleX:1,scaleY:1,rotation:-30,x:10.7,y:-4.1},8).wait(32).to({startPosition:0},0).to({rotation:0,x:13.5,y:-2.1},11).wait(1));

	// Layer 1
	this.instance_1 = new lib.BubCalfTrace("synched",0);
	this.instance_1.setTransform(15.1,13,1,1,0,0,0,11.8,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:18.8,y:12},8).to({x:22.4,y:11},8).to({regY:-2,rotation:30,x:24.9,y:13.6},18).to({regY:-2.1,rotation:0,x:22.4,y:11},14).to({x:15.1,y:13},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-15.4,31.7,72.9);


(lib.BubIdea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.BubHeadDream();
	this.instance.setTransform(41.6,84.9,1,1,0,0,0,18.1,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Layer 7
	this.instance_1 = new lib.BubArmGlass();
	this.instance_1.setTransform(26.3,113.4,1,1,0,0,0,29.9,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// Layer 8
	this.instance_2 = new lib.Glass();
	this.instance_2.setTransform(47.5,114.2,1,1,0,0,0,8.3,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgVCtQhLgGhGgXIgJgCIhUgaQgygOgmgHQgKhMAAg9QgBhbATgoQAQASAVAQQCABNCUAcQCLAcCGgmQAngKAggYIAAAAIAAACIAVBuIATBhQiZAwilgLIgJgTIgPgGIgBAZIgEACIgBAEIgfgBg");
	this.shape.setTransform(39.6,155);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD699").s().p("AgBAJQgDgJABgGQADgLACAJQADAIgCAIQgBAFgBAAQgBAAgBgEg");
	this.shape_1.setTransform(75.8,126.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FECE89").s().p("Aj9J8QgDgMALgIQALgHgDgMQgagIggAFQggAEgFgBQABgJAPgDQAPgEABgIQgNgFgUAOQgQALgHgMQACgOAZgDQAfgDAGgEQADgKATgPQARgOAAgRQgXgqgBhRQgBhLARg3QgegmgOgVQgYgkgDgoQA1AVBGARICvAjIgRB3QAEAEABAGQAUBFgcBEQgVAzgKA2IgKAJIgIAGQgOAKgQADIgBgMIgGAJIgFAHQgOAFAAAFIAAADIgBAAQgSAMgbgCQAGAfgVAFIgIACQgOAAgLgOgAgrgzQipgZhyhFIgNgJQgegUgOgZQACgCAAgDQAAgHgDgVIAAgBIgBgDIAAgCIgBgDIABAAIgBAAIgBgLIgEABQgNgegEgXIgHglIgFghIABgDIABgDIgBgKQAAgHABgGIgBgBQAQhHBKhAQBHg8BMgQIACgDIAHABQCgg9CeA4IAFgBQB5AoASAIQBWAkAcArQAjA1giA3QgfAyhBAYQgEgxgYg1Qgfg5gMgfQgHABgTgRQgPgMgHAMIAYAMQAMAIAEAMQAkA7ATA9QAVBDgCA9QgDAIAAAKIgBAHIgEgCIAEAEQgBAVgDAQQgHArgXAcQgIALgIAHIgBAAQhYAshuAAQguAAgvgIgAAvhbIAaAIIAKgQgAkljeIAAgCIgOAAIAOACg");
	this.shape_2.setTransform(43.7,155.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAHQAHgOAQAAQgGAPgPAAIgCgBg");
	this.shape_3.setTransform(16.3,216.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkBJ9QgagWgIgDQgCgHAEgGQAFgHAAgEQgJgEgKAKQgKAKAOAAQgRAKgdgPQgegPAEgcIA9gSQAfgOALgXQgTg3gEhCQgEhLATgyQgFgSgfgxQgZgngCglQgEgNgYgGQgegHgGgFQgNhQAGhfQADhDALg6IgBgJIgBgSQgKgPgJgxIgLhIIAAgQIACgIIgBgCQAQhKA0gyQAugvBxg0IADADIARABIgBADQhMARhHA8QhKA/gQBHIABACQgBAFAAAIIABAJIgBADIgBAEIAFAhIAHAlQAEAWAMAeIAEAAIACAKIAAAAIAAABIABACIAAADIABACIgBABQAEAVAAAHQAAADgCACQAOAZAeAVIANAIQByBFCpAaQCnAZB8g+IABAAQAIgHAIgLQAXgcAHgqQADgRABgVIAAgCIABgHQAAgKADgIQACg9gVhDQgTg9gkg6QgEgMgMgIIgYgMQAHgNAPANQATAQAHAAQAMAfAfA5QAYA0AEAyQBBgYAfgzQAig3gjg0QgcgshWgkQgSgIh5gnIgFABIACgUIADAAIAAADQAbANAzATQA8AWAVAJQBaAoAcA/QAGBAgdAoQgVAegzAZQAIASgCANQgCANgMALQABAGAPAGQAMAGgEAOQgJgBgKAGQgHAFgJgBIgGA7QgIAngNAUIACgBQAXBGAFB3QATBJgQgWIACAFIgSgBIgMAJIgcAIIjyANIABAEIgHgEIgDABIAAgBIgPAAIgGgGIgMAIIgRB/QAhA3gaBLQgRAvgLAwQgNA6g5ASIgKADIgBABIgSAHIABADIgZALQgFADgJAOQgHANgKABIgIAAQgVAAgQgOgAjsJMQADAMgLAIQgLAHADANQAOARATgFQAVgGgGgeQAbACASgMIABgBIAAgCQAAgGANgFIAGgHIAGgJIABANQAQgDAOgKIAIgGIAKgJQAKg2AVgzQAchFgUhFQgBgFgEgFIARh2IivgkQhGgRg1gVQADAoAYAkQAOAVAeAmQgRA4ABBLQABBQAXArQAAARgRANQgTAPgDAKQgGAEgfAEQgZACgCAOQAHAMAQgLQAUgOANAFQgBAIgPAEQgPAEgBAIQAFACAggFQAMgCALAAQASAAARAFgAkcJkQASABAGgRQgSAAgGAQgAmNg5QAAA9AKBNQAmAHAyAOIBUAZIAIADQBHAWBLAGIAhABIABgEIAEgCIABgZIAPAHIAHASQClAMCZgxIgUhhIgUhuQACAGAFgVIgIALIAAACQgfAYgnAKQiGAmiLgcQiUgbiAhOQgVgQgQgRQgTAoABBagAE9kyQgBAIADAJQAEAJACgKQACgJgEgJQgCgEgBAAQgCAAgBAGgAAwhkIAkgIIgKAQgAkyjpIAOABIAAABIgOgCg");
	this.shape_4.setTransform(43.6,156.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 5
	this.instance_3 = new lib.BubLegTrace();
	this.instance_3.setTransform(59.5,194.5,1,1,0,0,0,15.7,28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,71.8,90.2,151.4);


(lib.BubWalksGlass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.BubHeadDream();
	this.instance.setTransform(41.6,84.9,1,1,0,0,0,18.1,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Layer 7
	this.instance_1 = new lib.BubArmGlass();
	this.instance_1.setTransform(26.3,113.4,1,1,0,0,0,29.9,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// Layer 8
	this.instance_2 = new lib.Glass();
	this.instance_2.setTransform(47.5,114.2,1,1,0,0,0,8.3,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgVCtQhLgGhGgXIgJgCIhUgaQgygOgmgHQgKhMAAg9QgBhbATgoQAQASAVAQQCABNCUAcQCLAcCGgmQAngKAggYIAAAAIAAACIAVBuIATBhQiZAwilgLIgJgTIgPgGIgBAZIgEACIgBAEIgfgBg");
	this.shape.setTransform(39.6,155);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD699").s().p("AgBAJQgDgJABgGQADgLACAJQADAIgCAIQgBAFgBAAQgBAAgBgEg");
	this.shape_1.setTransform(75.8,126.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FECE89").s().p("AgrEnQipgahyhFIgNgIQgegVgOgZQACgCAAgDQAAgGgDgWIAAgBIgBgCIAAgDIgBgCIABAAIgBAAIgBgLIgEAAQgNgdgEgXIgHglIgFgfIABgDIABgEIgBgJQAAgIABgFIgBgCQAQhHBKg/QBHg8BMgRIACgCIAHAAQCgg9CeA5IAFgBQB5AnASAIQBWAkAcAsQAjA0giA3QgfAxhBAYQgEgwgYg0Qgfg5gMgfQgHAAgTgQQgPgNgHANIAYAMQAMAIAEAMQAkA6ATA9QAVBBgCA+QgDAIAAAJIgBAIIgEgCIAEAEQgBAUgDARQgHAqgXAcQgIALgIAIIgBgBQhYAshuAAQguAAgvgHgAAvD+IAaAIIAKgQgAklB7IAAgBIgOgBIAOACg");
	this.shape_2.setTransform(43.7,120.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgrGYQgHAAgGACIiYgfQhGgRg1gVIAAACQgMgGgJgCQgGgDgJgDQgegGgGgFQgNhQAGhiQADhCALg6IgBgKIgBgQQgKgOgJgyIgLhHIAAgRIACgHIgBgCQAQhKA0gyQAugvBxg0IADADIARABIgBADQhMAQhHA9QhKA/gQBHIABABQgBAGAAAHIABAKIgBADIgBADIAFAiIAHAkQAEAXAMAeIAEAAIACAKIAAAAIAAAAIABADIAAADIABACIgBABQAEATAAAHQAAADgCACQAOAZAeAVIANAIQByBFCpAZQCnAaB8g+IABAAQAIgHAIgLQAXgcAHgrQADgQABgVIAAgCIABgHQAAgIADgIQACg9gVhDQgTg9gkg6QgEgMgMgJIgYgMQAHgMAPAMQATARAHAAQAMAeAfA6QAYA0AEAyQBBgYAfgzQAig3gjg0QgcgshWgkQgSgIh5gnIgFABIACgVIADABIAAADQAbANAzATQA8AVAVAKQBaAoAcA/QAGBAgdAoQgVAegzAZQAIARgCANQgCANgMAMQABAFAPAHQAMAFgEANQgJAAgKAFQgHAFgJgBIgGA6QgIAogNAUIACgBQAXBGAFB5QATBJgQgXIACAGIgSgBIgMAJIgcAIIjyAMIABAFIgHgFIgDACIAAgBIgPAAIgGgGIgMAIIgCALQgIgHgNAAgAmNCyQAAA/AKBNQAmAGAyAOIBUAaIAIACQBHAXBLAGIAhABIABgEIAEgCIABgZIAPAHIAHASQClAMCZgxIgUhhIgUhwQACAGAFgVIgIAKIAAADQgfAYgnAKQiGAmiLgcQiUgbiAhOQgVgQgQgRQgTAnABBbgAE9hFQgBAIADAJQAEAJACgLQACgIgEgJQgCgEgBAAQgCAAgBAGgAAwCHIAkgIIgKAQgAkyACIAOABIAAABIgOgCg");
	this.shape_3.setTransform(43.6,132.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(20));

	// Layer 5
	this.instance_3 = new lib.BubLegWalk1();
	this.instance_3.setTransform(24,164.1,1.214,1.064,30,0,0,13.6,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:-2.3,scaleX:1.21,scaleY:1.06,rotation:-19.1,x:23.4,y:167},9).to({regY:-2.1,scaleX:1.21,scaleY:1.06,rotation:30,x:24,y:164.1},10).wait(1));

	// Layer 9
	this.instance_4 = new lib.BubLegWalk2();
	this.instance_4.setTransform(55.8,166.3,1,1,0,0,0,12,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:0.7,rotation:60,y:164.3},9).to({regY:0.6,rotation:0,y:166.3},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,71.8,116.1,148.3);


(lib.BubTrips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.BubArmGlass();
	this.instance.setTransform(26.3,113.4,1,1,0,0,0,29.9,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:17.8,scaleX:1,scaleY:1,rotation:-51.4,x:29.4,y:109.7},4).to({rotation:-115.6,x:23.1,y:98.8},5).wait(10).to({regY:17.9,scaleX:1,scaleY:1,rotation:0,x:26.3,y:113.4},7).to({regY:17.8,scaleX:1,scaleY:1,rotation:49.4,x:19.1,y:114.1},9).to({regY:17.9,scaleX:1,scaleY:1,rotation:0,x:26.3,y:113.4},5).wait(1));

	// Layer 6
	this.instance_1 = new lib.BubHeadTrips();
	this.instance_1.setTransform(41.6,84.9,1,1,0,0,0,18.1,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgVCtQhLgGhGgXIgJgCIhUgaQgygOgmgHQgKhMAAg9QgBhbATgoQAQASAVAQQCABNCUAcQCLAcCGgmQAngKAggYIAAAAIAAACIAVBuIATBhQiZAwilgLIgJgTIgPgGIgBAZIgEACIgBAEIgfgBg");
	this.shape.setTransform(39.6,155);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD699").s().p("AAAgEIAAgFIAAATQAAgJAAgFg");
	this.shape_1.setTransform(75.4,126.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FECE89").s().p("AhzFpQipgahyhFIgNgIQgegVgOgZQABgCABgDQAAgHgEgVIABgBIgBgCIAAgDIgBgCIAAgBIAAAAIgCgKIgEAAQgMgegEgWIgIglIgEghIABgEIABgDIgBgJQgBgIACgFIgBgCQAPhFBLg/QBHg8BMgRIABgDIAIABQCgg9CeA5IAEgBQB5AnATAIIACABIAAgBIABABQAYgaAJgMQAPgVARgIQAPgEABgCIgIgTQgIgTAAgQQgBgNAEgNQAJgYAeAIQAEACABADIAAAEQAAAHgFAbQAAACAFACQAIgSgBgUQAAgHgCgEQADgIAMgMQAOgPAIAAIARABQACABADAGIAEAHIgTATQgSAUAAALIAAAGIAEABQAFAAAEgMIAFgPQAEgGANgKQAJgHAAgHIAAgEIADgDQAEgEAKgBIASAAIAJAPQAAAHgYARQgXAQAAAKQAAAEAFADIAIgPQAFgIAHgEQANgHAGgGIADABQATgBALAHQAHAEAAAHQAAAFgfARQgeARAAACQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAAAIAFAAIACAAIABAAQARgFAVATQATAQAAAIQAAACgFAFQgHAFgIAAQgHAAgMgFIgDgBIACgEIAAgCIgBAAQgGgBgEAFIgKgBQgFAAgCABIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAIAJACQgEAGgCAHIABADIgBACIgCAHIAABpQgGA+goAjIg5AzQgmAhgaAFIgOAAIAAgEIgJAEQgEgygYgyQgfg5gMgfQgHAAgTgQQgPgNgHANIAXAMQANAIADAMQAkA6AUA7QAVBDgDA9QgCAIAAAKIgBAHIgEgCIAEAEQgCAVgDARQgHAqgWAcQgIALgIAHIgBAAQhYAshsAAQguAAgxgHgAgXFAIAYAIIAKgQgAltC9IAAgBIgOgBIAOACg");
	this.shape_2.setTransform(50.9,114.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhzHhQgHAAgGACIiYgfQhGgRg1gVIAAACQgMgGgJgCQgGgDgJgCQgegHgGgFQgNhQAGhhQADhDAMg6IgCgJIgBgSQgKgPgJgvIgLhIIAAgQIACgIIgBgCQAQhJA0gzQAuguBxg1IADADIASABIgCADQhMARhHA8QhKA/gQBHIABACQgBAFAAAIIABAJIgBADIgBAEIAFAhIAHAlQAEAVAMAdIAFAAIABAKIABAAIgBABIABACIAAADIABACIAAABQADAWAAAGQAAADgCACQAOAZAeAVIANAIQByBFCpAaQCnAZB8g+IABAAQAIgHAIgLQAXgcAHgqQADgRABgVIAAgCIABgHQAAgJADgJQACg7gVhDQgTg9gkg6QgEgMgMgIIgYgMQAHgNAPANQATAQAHAAQAMAfAfA5QAYA0AEAyIAJgEIAAAEIAPAAQAagFAlghIA5gzQAoglAGg+IAAhpIACgHIABgCIAAgDQACgHADgGIgJgCQAAAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIABgEQACgBAFAAIAKABQAFgFAFABIABAAIABACIgDAEIADABQAMAFAHAAQAIAAAHgFQAFgFAAgCQAAgIgSgQQgWgTgRAFIgBAAIgCAAIgEAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgCAfgRQAegRAAgFQAAgHgHgEQgKgHgUABIgCgBQgHAGgMAHQgIAEgFAIIgIAPQgFgDAAgEQAAgKAYgQQAXgRAAgHIgJgPIgSAAQgJABgFAEIgDADIAAAEQAAAHgJAHQgMAKgEAGIgGAPQgEAMgEAAIgEgBIgBgGQAAgLASgUIATgTIgEgHQgDgGgCgBIgRgBQgIAAgOAPQgMAMgDAIQADAEAAAHQAAAUgIASQgFgCAAgCQAFgbAAgHIAAgEQgBgDgDgCQgfgIgJAYQgEANACANQAAAQAHATIAIATQAAACgPAEQgSAIgPAVQgJAMgYAaIgBgBIAAABIgCgBQgSgIh5gnIgFABIACgUIAEAAIgBADQAbANAzATIA9AWQAEgLAdgZQAegZAKgFQgKgYgBgFQgBgDAAgTQgCgSAFgPQALgcAlALQAEgUAjgNQAegKAHARQAGgDANgDQAAgCAVAAQAMAPAAAJQAAAFgDAEQAqACAAAWQAAAFgXATQgLAJgJAFQAOAEAOANQATASAAAKQAAAGgEAFQgIAJgQAAIgcgFIgJAOIABABIAAACQAAAFgDADIAABsQAAAbgQAhQgPAegOAJIg0AvQg0ArgiAAIgFgBIAAAHIgBADQgBAIADAIIAAAHIgEAPQgEAPAAAIIAFATIgCAAIgGA7QgIAngNAUIACgBQAXBGAFB5QATBJgQgWIACAFIgSgBIgMAJIgcAIIjwANIABAEIgHgEIgDABIAAgBIgRAAIgGgGIgMAIIgCALQgIgHgNAAgAnVD7QAAA/AKBNQAmAHAyAOIBUAZIAJADQBGAWBLAGIAhABIABgEIAEgCIABgZIAPAHIAJASQCjAMCZgxIgThhIgVhwQACAGAFgVIgIALIABACQggAYgnAKQiGAmiLgcQiUgbiAhOQgVgQgQgRQgTAoABBagAgWDQIAigIIgKAQgAl6BLIAOABIAAABIgOgCg");
	this.shape_3.setTransform(50.8,125.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(41));

	// Layer 5
	this.instance_2 = new lib.BubLegWalk1();
	this.instance_2.setTransform(24,164.1,1.214,1.064,30,0,0,13.6,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-2.2,scaleX:1.21,scaleY:1.06,rotation:79.4,x:28.3,y:158.3},9).to({regX:13.7,regY:-2.1,rotation:-25.2,x:27.5,y:160.1},10).wait(1).to({regX:13.6,scaleX:1.21,scaleY:1.06,rotation:30,x:24,y:164.1},0).to({regY:-2.2,scaleX:1.21,scaleY:1.06,rotation:79.4,x:28.3,y:158.3},9).to({regX:13.7,regY:-2.1,rotation:-25.2,x:27.5,y:160.1},10).wait(1).to({rotation:-25.2},0).wait(1));

	// Layer 9
	this.instance_3 = new lib.BubLegWalk2();
	this.instance_3.setTransform(55.8,166.3,1,1,0,0,0,12,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:11.9,regY:0.7,rotation:60,x:57.1,y:162.7},9).to({regX:12,regY:0.6,x:44.8,y:162.3},10).wait(1).to({rotation:0,x:55.8,y:166.3},0).to({regX:11.9,regY:0.7,rotation:60,x:57.1,y:162.7},9).to({regX:12,regY:0.6,x:44.8,y:162.3},10).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,71.8,130.5,148.3);


(lib.frb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{unselectedEnabled:0,press:1,unselectedDisabled:2,selectedDisabled:3,selectedEnabled:4});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}
	this.frame_1 = function() {
		/* stop();
		*/
	}
	this.frame_2 = function() {
		/* stop();
		*/
	}
	this.frame_3 = function() {
		/* stop();
		*/
	}
	this.frame_4 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// dot_enabled
	this.instance = new lib.frb_dot_1();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// dot_disabled
	this.instance_1 = new lib.frb_dot_disabled_1();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// background pressed/disabled
	this.instance_2 = new lib.frb_background_pressed_1();

	this.instance_3 = new lib.frb_background_disabled_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

	// background up/static
	this.instance_4 = new lib.frb_background_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5));

	// radio button frame
	this.frb_frame_mc = new lib.frb_frame();

	this.timeline.addTween(cjs.Tween.get(this.frb_frame_mc).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.fcb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,"press":1,uncheckedDisabled:2,checkedDisabled:3,checkedPress:4,checkedEnabled:5});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}
	this.frame_1 = function() {
		/* stop();
		*/
	}
	this.frame_2 = function() {
		/* stop();*/
	}
	this.frame_3 = function() {
		/* stop();
		*/
	}
	this.frame_4 = function() {
		/* stop();
		*/
	}
	this.frame_5 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// check_enabled
	this.instance = new lib.fcb_check_1();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(2));

	// check_disabled
	this.instance_1 = new lib.fcb_check_disabled_1();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// background pressed/disabled
	this.instance_2 = new lib.fcb_background_pressed_1();

	this.instance_3 = new lib.fcb_background_disabled_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},2).to({state:[]},1).wait(1));

	// background static
	this.frb_frame_mc = new lib.fcb_background_1();

	this.timeline.addTween(cjs.Tween.get(this.frb_frame_mc).wait(6));

	// check box frame
	this.fcb_frame_mc = new lib.fcb_frame();

	this.timeline.addTween(cjs.Tween.get(this.fcb_frame_mc).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.WakeUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		playSound("WHICHONE");
	}
	this.frame_22 = function() {
		playSound("WHATKIND");
	}
	this.frame_42 = function() {
		playSound("HOWMANY");
	}
	this.frame_49 = function() {
		playSound("_1b");
	}
	this.frame_77 = function() {
		playSound("Oowhwav");
	}
	this.frame_86 = function() {
		playSound("Auchwhichwhathowmany");
		playSound("SEWaterHits");
	}
	this.frame_137 = function() {
		playSound("crowdohh");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(19).call(this.frame_22).wait(20).call(this.frame_42).wait(7).call(this.frame_49).wait(28).call(this.frame_77).wait(9).call(this.frame_86).wait(51).call(this.frame_137).wait(38));

	// Layer 4
	this.instance = new lib.Glass();
	this.instance.setTransform(6.1,33.8,1.823,1.823,0,0,0,8.3,11.9);
	this.instance._off = true;

	this.instance_1 = new lib.Glassempty();
	this.instance_1.setTransform(87.8,96.9,1.934,1.934,45,0,0,8.3,11.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(77).to({_off:false},0).to({_off:true,regY:11.8,scaleX:1.93,scaleY:1.93,rotation:45,x:87.8,y:96.9},5).wait(93));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(77).to({_off:false},5).to({scaleX:1.98,scaleY:1.98,rotation:150,x:175.8,y:116.6},4).to({regX:8.4,scaleX:1.7,scaleY:1.7,rotation:270,x:208.5,y:184},4).to({scaleX:1.76,scaleY:1.76,rotation:420,x:299.9,y:119.3},5).to({scaleX:2.03,scaleY:2.03,rotation:525,x:396.6,y:135.1},6).to({_off:true},2).wait(72));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC02A6").s().p("AiVBPQgZgvAAgoQAAg1AjgnQAWgaArgXIAIgEIACAEQAAACgHAGQAGANAIAKQASAXAWAJIBFAjQBBAfAnAAIABAAIgBgLIAAgBQACgCAEAAIgUAAQgDAAgegLQgdgMgTABQgOgQg4ghQgwgdgEgUQAuAYBtAyQBRAkAAAFIAAAEIgDABIgJAAQAJAAgDAMIAAABQAAAXgVAUQgiAZgbAWQgdAaghAkQgZAYgaAAQhSAAgphMg");
	this.shape.setTransform(86.5,103.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABiBKQgmABg/gfIhHgjQgWgJgSgWQgJgKgFgMQAGgGAAgCIgBgFIgJAFIgGgPIABgGQAtAOBkArQALABAOAPQAOANAhAEQAJABAZAQQAZAQAAAEQAAAHgJAGQgHAEgLACIAAgBQACgLgIAAIAIAAIADgBIAAgFQAAgFhQgkQhtgwgvgYQAFAVAwAdQA5AeAMAQQATAAAdALQAfAMACAAIAUAAQgDAAgCACIgBAAIACALIgCAAg");
	this.shape_1.setTransform(92.3,94);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABFAuQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBIADADIAAAEIgBgDgAA+AnQgOgHgngSIgNgHQgNABgVgEQgOgDgTgEQgYgOgJgMQgGADgBgCQgFACgEgBQgDgIgCgIIABgFIAuAQIAuASQAQgGATABQgdgSgDgDIgKgFIBPAXQBHAQAGAEIgPATQAPgJAJgDQgCAGgVAUQgJAKgLgBQgGAAgGgEIgDACIgBAEIgFgDgAACAEQAVAPASADQAHAAAUAMIABAAQAMgOABgDQgUgDgegPQgOAAgQAFg");
	this.shape_2.setTransform(113.5,103);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC02A6").s().p("AgdCQQhDgKgmhEQgXgsACgkQAGg+AxgjQAegWArgOQARACAKAKQAFAJAEAPQAAACgEAGQADAJAGAJQAJALAJAGIAKAEQADADAgATQgWgCgQAGIgsgSIgugQIgBAFQACAJADAHQAEACAFgCQABABAGgCQAJALAWAOQATAGAOADQAVAFANgCIAPAHQAoAQANAIIAFADIABgFIADgCQAGAEAGABQgMANgDABIgGAAQAFAAgCAIIABgBQgBAVgTAMIguAkQgdARgbAVQgLADgJAAQgNAAgNgEgACOAWIABAEIAAgFIgDgCQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAgAByAAQgSgCgVgQQAQgHAOAAQAeARAUAEQgBACgMAMIgBABQgUgLgHAAg");
	this.shape_3.setTransform(106.2,105.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AASA1IgBAAIgMgGIgFgDQgNgCgOgNIgTgIIgOgHQgKADgKABIgKgGQgLAHgCgBQgGAAgEgEQgDgIgBgIIABgDIALAEIgBgDIAXAJIABAAQAFgFgBAAQAGgGAIgDQgKgXAAgRQAeAGBCABIAQAAIgFgGQAOgGAOgCQAPAHAMADIAMgBIAAADIAMACIgKALQAKgFAGgBIg4BAQgSAVgNAGQgHACgGgCIAAADIAAgEg");
	this.shape_4.setTransform(135.3,110.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC02A6").s().p("AgeB+QgygSgjg+QgWgoAEghQAMhGA/geQAngTApgGQAeAHASAWQAKARAHAaQAAAEgCAFIAEAMQAIAMAJAAQgDACAYATIADAEIAFAFIgQAAQhEAAgegHQAAASAKAVQgJACgGAIQACABgFAFIgBgBIgWgLIACAEIgMgFIgBAEQABAJADAJQAEAEAGgBQACACAKgIIAKAGQAJAAAKgDIAPAGIATAIQAOAOAMACIAIACIALAHIABAAIAAADIABgDQAFADAHgDQgMANgCAAIgEAAQABAAAAAAQAAABAAAAQABABgBAAQAAABAAABIABgEQgBARgRAGIgfAYQgcAJgXAEQgTgIgWgSg");
	this.shape_5.setTransform(125.6,107.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC02A6").s().p("AgcCaIgmg0Qgigcggg2QgUgiAGggQAShOBMgaQAwgPApACQAsALAYAjQAPAYAKAmQABAEgBAGIgBAGIACADQgEADAEAJIgEASIgCAIIAYgIQgcAYglAtQgFADgIACIgPADQgRAFgMAWQAAACgDAEIgBgYIgXAZIARAHIgEADQgTgEgSgHIgBACQAAAKAEAJQADAHAHABQADABARgOIAEgFIAJACQAJAQAIACQAEAAAIAFQAEABAJgHQgLAMgCAAIgEgBIAAAAQgEAIgLgBIgQAMIgEAAQgXAAgRgKgAgEBtIAEgEIgRgHQABAFAMAGgAAiCCIgHgOIACABIAJAEIgDAGIAAACIALAAIgEABIgCAAIgGAAg");
	this.shape_6.setTransform(148.5,110.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghBVQgIgEgEgBQgIgCgIgPIgJgCIADgDIgTgHIAagZIAAAYQAEgEAAgCQALgXARgFIAQgCQAIgCAEgEQAjgqAcgaQAfgMAMACIgDAEIAGgBIhYBnQgaAhgPALQgHAGgEAAIgCgBgAgxBLQAHACAAgCIAEgBIgKAAIAAgBIACgGIgJgEIgCgBIAIANgAhhBPQgGgBgEgIQgDgIAAgLIABgCQASAIAVAEIgFAEQgSAOgDAAIgBAAgAhGA9IAAAAgAhnAsIARAHIgEADQgMgGgBgEgAApg8IAbgOIAOgDIAKgIQAMAGAHAAIgLACQABACgDADIgDgHIgNACIgTARIgYAJIACgJg");
	this.shape_7.setTransform(157.1,116.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC02A6").s().p("AgRC+IgEgBIAAgDIACgJQgCAJgNgHIgBAAQgagHgOgbQgRgrgQgiQgTgmgcgsQgTggAIgeQAYhWBagVQA3gMArALQA5APAeAwQAVAeAMAzIADAKIgGABQgCAAgEgJQgPACgOAFQgcAOgPARQgHAJgyA4QgxA8gLAnIAAACIAMABIABABIABAEIAFgRQABgDASgdQAVgcAEgUQAUgJAzgzQArgpAXACQgmAnhTBnQg6BIgFAAIgBAAg");
	this.shape_8.setTransform(172.1,114.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhjCAQgHgCgEgKQgDgJABgMIABAAQANAHACgJIgCAJIAAADIAEABQAFABA9hKQBRhkAmgqQgXgCgrAsQgxAygUAKQgEASgVAbQgUAdgBADIgFASIgBgEIgBgBIgMgBIAAgCQALgoAzg6QAwg3AHgJQAPgUAcgOQAOgFAPgCQAEAJACAAIAGgBIgDgKIASgDIAGADQgbAthJBcQgFALgSAKQgUAKgNAiQgDAKgYAWQgXAUgFAAIgBgBg");
	this.shape_9.setTransform(179.8,123.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC02A6").s().p("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");
	this.shape_10.setTransform(181.5,126.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3B012A").s().p("Aj/DhQgGgDgEgKQgDgJgBgMIgBAAIABAAQANgEAAACQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAAAQADgCAMgOIAbgjQAHADADgGIgBAGIABADIADAAIACgBQAOgFAlgpIAIgIIACgCIAAgBIABAAIAGgIQgBgFAFgKIAKgSIACgFQAGACAKgHIAAgBIAEgEIACgCIAHgKIADgHIAAAAIAAAAIABgCIAKgMIgOAJIgCAGQgCAEgGAGIgQAMQgNAKgGACIgEAEIgUAUIACgFIABgGQACgNAHgOIABAEQACAJAGACIABgBIACAAIAPgNIABAAQADABAOgPIADgEIAMgOIAOgOIAIgJIACgEIABgBIAHgJIAEgFQAFgBAEABIgFAGIAHgGIADABIgFAFQgEAGgMAHIAAAAIgBABIABgBIABADIACAEIAIAOIAIABIADAEIgEAJQgNAWgTAUIgbAVQgGADgFAGQgTAOgTASIgEAFQgJAIgNAIQgKAGgGAMQgFAJgEAQIgCAFQgFAKgaASIgOAHQgHAFgEAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAgBgAg5gOIgDACIACgCQAFgCADAAIgCAAQgCAAgDACgAA3A0QgGgHABgLIABAAIALAEIAEAAQAEgCAWgUIAlgiIAQgNIAFgGIACgBIACgCIABgCIACgBIABgCIABgBIAUgUIAEgDIABgBIABgBIAnggIANgIQAJgIAGABIgBAAIgDABIgCACIgJAEIAAABIgFAEIgNAOIgBADIgEAFIgMAPIgGAHQgLAFgTAWIgDAEIgPARQAVgWASgPIABAAIgIAJIgFAGIAAABQAAAJgFAMIAFgEIABgBIAOgNIAFgFIgNATIgGAKQgHAJgFAGIgEAFIgEAGIACgFIAEgKIABgBIAEgJIADgHIgHAEIgJAFIgCAAQgTAFgOAZIgEAEQAHgMgBgJIADgCQAHgFARgPQgSALgRAQIgVAVIgMAMIgQAQQgGgCgDgIgACWAqIgJABIABgCIAKgSIABgBIACgDIAAAAQgDAIAAADIgBANIgBgBgAiCAZIgFgDIANgVIAKgLIgBAAIgDgBIgGAAIAAgBIAAgBIAAAAQAEgLAKgOQAJgMANgPIACgHIACACIgEAFIgJAPIgIAOIAGACIgDAFIABAAIADACIADABIAGgEQAGABABgFIgBAHIAAAAIgHAIIgKAMIACABQACABAQgLIAFgEIgDADQggAegMAFIAAAAIAAAAIgIAHIgCAAgAhwgGIADgJIACgDIAAgBIgBAAIgBAEIgCADIgBAEIAAgCIAAAEgAiNAUIAAgBIABAAIAFADIgBABIgFgDgAg5gjIAAgEIABAAIACABIAEgGIABgCIgCgCIAIgJIAQgSIAGgDQAIgEAGgFIgiAsIgDADIgHADIgGADIAAgBgADThEQAEgJAHgJIANgJQAIgFAKgCQACAHABgBIADgBIgDgIQAFgCAGgBIAEABIgMAKIgPAQQgJAKgOALIgaAXQASgZgCgGgAAAg0IACAAIgNANIALgNgAhEgxIADgEIABgBIABgDIABABIAOgQIABgBIABgDIgCgGIAHgJIgJAGIgBgDQAHgNAKgPIgWAUIgSARIgCACIgEgHIACgFIATgNIAAgBIAIgFIAZgVIAEgDIAcglIAIAAIACADIACACQABABAAAAQABAAAAAAQABAAABABQAAAAABAAIgCgFIAAgCIAAgDIgEgNQAJgKAPgHQAIgEAJgBIADgBQADAHACAAIADAAIgCgIIgFgRIAVAFQANADAMAGIgGACQgKAFgHAHQgHAGgFAHQgOACgbAcIgCACIgHAHIAAAAIADAGQgGABgHAEIgKAGIgJAMIgCABQgFAEgFABIAAABIgCAHIAAABIgDADIgVAaIgDADIgEAGIgCAEIgCAIIAAACIgBAEIAAgCIgIgBIgCADIgCgDgAAFg0IgCAAIACAAIABAAgAgCg0IABgBIgCAAIAAgCQADgMAEgOIAAAAIADgHQAKgVATgaIAHgLIgBAAIAbggIgUAZIgGAHIAEADIgHALQANgKAagfQAFgGAHgFQASgTALgCIADAAIgBABIAFAEIgBgDIAIgBIAEgBIAEACIgJAIIgOAQQgLAIgPARIgDADQghAjgNADIgBAEQgCAJgIALIgGAIIgKAMIgCAEIgIAIIgFAFIgCgBIAAABIgCAAgAAaiEIAFgGIABgBIAAgBIAAAAIAAAAIgCgFIAHgBIAFAAIgHAJQgPATgVAYIgCAEIgEADIAhgtgAA4hsIgEAEIgFAGIgDACIAMgMg");
	this.shape_11.setTransform(188.5,136);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC02A6").s().p("AklEQIgBgBIgBgFQgDAFgJgDIAAAAQgLgBgIgDIgHgDIgIgFIgKgHQgNgHgKgKIgHgIQgRgOgLgZQgEgMgEgJIgEgMQgFgTADgSIAAAAQANgkAbgLIA0gPIAHgCIAtgKQARgDANgBIANgBQAVgHAPALIAGADQAKAFAPANIADAAIABAEIgDgCIgBgCIgDABQgFADgBAEIgCAIQAIAFgOAbQgFAXAFAQIABAFIAAAFIAAgBIABgEQADgJgDgIQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAEACANgPIAFgFQAIgFAEAFQgRAUgRAXQgCAJADgBIAAAAIAAAAIAAACIgBgBIgHACQgHAMgGAPQgKASgQAQIgCACQgkAlgUAEIgBABIgDgBgAi4CnIAAABIAAABIAAADIAAgFgACpCbIgDgBIgBgBIgBgFQgDAEgJgFIAAAAQgPgFgJgKIgGgLQgGgVgJgQQgFgKgHgKQgJgPgOgRIgUgaQgMgNgEgNQAAgHABgHIADgLQAFgLAOgHQAegVArgHIAbgCQAbgBAWAHQAeAJAVAWQAhAoAPAbIABAAIAJgEQAtgpA/gHIgJAXIgBAEQgGAOgBAJIgMAEQgPAEgQAJIgOAHQgHAEgPAEQgSAEgQAQIgJAFIAAgBQAPgbgHgFQAAgKAIgHIAGgDIAAgCIgIAEQg0AjgJAIIgDAAIgJADIAAAAQgBAJAHAGQADAGAGACQAHABASgJIABgBIASgJIgCAOIgDANIgFADQgRACgNAMIgUANQgqAggNAAIgCAAgAEcCLIAAgBIgHgEIAAgBIAAgCQgBgUAFgSQAXgPAWgJQgEACgIARIgBACQgNAWABABIAAAAQAGAGgIAKIgBACQgIAJgBgDIgEAFIgBgDgAEZBdIAAAAgAimBCIABgBIABABIgCAAgAh5AyIAAgCIAAgEQgCADgFgBIAGgEIAGgGQALgRAPgFQAJgEAGgEIgCACQgRAWgLALQgLAJgDAAgAiYAgIgCAAIgEgFIgagkIgNgQQgLgOgKgRIgEgJQgFgNADgRIAAAAQAJgrAigUIAUgJIAMgEQgLgPAAgOIABgFQANgtA/gQQAWgFAVgBIAXAEQAgAIAQARQARANAJAZIACAEIgDABIgCgFIgCABQgFAAgFADQgLAGgEAKQABAEgNATIgHAKIgCAEIgBABIAAAAQABAGgCAIIgEgEIgDgHIgDAEIgdAaIgBABIgFAAQgLAAgPALIgRAIIgFADIAAAAQgHACgEAEIgBACQgWAhgBAdIABABIgBAAIAAABIAEAAIACABIABAAIAAADIAEgHQABABAKgNQAMgKADgHIAFgBIgdAlIgKAMQgaAegDAFIgCAAgAhPg4QAEgBAHgEIAEgDIAMgJIAGgFIADgCIAKgCIACAAIAFAAIgKAEIgFADQgHAGgCAAIgBAAQgUAQgLABIADgEgAhGhEIAHgGIABAAIABAAQAHADACgEIAAABIgDACQgDAAgRALIAFgHgAgThRIgHgBQAIgCAFABIgEAFIAAACIgCgFgAgahSIAAAAgAA+hVIgDgBIAAgBIAAgFQgCAEgHgEIAJgJQALgSAQgGIANgGIAGgEIAYgXQgHAPgDAOIgCAFIAHgEIgDAKIAAAGIAAAEIABgCIAMgOQAEgDAEgFQAFgEABgGIAFgIQAYgSAQgKQgEADgQAVIgBACQgTAYgHgDIAAABQgBAGgIAJIgGAGIgEAFIgEAHIgBgDIgBgBIgBAAIAAgBIABgGIgEAGIgDgBIAAgBQABgJACgLIgJAIQgjAfgKAAIgBAAgAgEhcIAAgBIgEgBIAEgBIAAAAIAAgEIABgFIAAgCIAIgKIAGgHIAAABIArgkIgFAFIgCACQgTAZgIgBIgBAAQgBAFgDAFIgHAIIgHAHIgCAGIgCAHIgBgDgAgLhfIAAgBIABgFIAEgEIADgCIAAABIgBAAQgEAGgCAGg");
	this.shape_12.setTransform(196,139.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#760153").s().p("AmbFbQgFgEgEgJQgEgJgDgMIAAgBIAAgBIAMgKIAEgCIANgSQAPgZATgYIAMgPIAOgQQAIADALABIAAAAQAJADADgEIABAEIABACIADAAIABgBQAUgEAkgkIACgCQAQgRAKgRQAGgQAHgLIAHgDIABACIAAgCIAAgBIADgBQACgDABAGQAFADAAAGIAEACIAAgCIACACIABACIACACIADABIADABQAAAHgBABIgEAFQgDADgBAGIAAACIgBAAIgDAEIgDADIAAAAIAAAAIABAAIABgBIAHABIAAAAIgCgDIAAgBIAEABIABgDIACgGIAAACIABACIAAABIABABIABAFIADAGIABAAIgLgEIABADIABABIACAEQgOAigYAQIgeALQgJAAgEAEQgWAJgVAPIgFAEIgXAQQgKAHgEANQgEAIgBATIgDAFQgFALgcANIgRAFQgDACgDAAQgFAAgEgGgAjEBtIAAgDIAAgBIAAAAIAAAEgAiWCoIgCgDQAGgCgEAFgAijCgIgCgDIAGADIAEADIAAAAIADACIgGACQgBgFgEgCgAiYClIAAAAgAGLAcIADgDIAAABIgEACgAGNAOQgEgFAEgQIAAgJQACgNgDgJQgCgFACgIIAIgDQAJgFAMgEIACgBIABAAIgDABIgDADIADAEQgEACgCAEIgEAIQgCAGABAHQALAHgMAaIgBAHQgCAHgBgBIgGAFIgFADIgBgLgADmAVQgGgBgDgGQgHgGABgIIAAAAIAJgCIADgBQAJgHA0gjIAIgEIAAABIgGAEQgIAHAAAKQAHAEgPAaIAAAAIgSAKIgBAAQgQAIgHAAIgCAAgAipgOQgCgHAAgIIAAAAIABAAIAEAAIACABIACAAQADgGAaggIAKgMIAcgkIgEAAQgDAHgMALQgKAMgBAAIgEAGIAAgCIgBgBIgDgBIgDABIAAgBIABgBIgBgBQABgcAWgiIABgBQADgEAHgDIABAAIAFgCIARgJQAPgKALAAIAFAAIABgCIAdgaIADgDIAFAGIAEAFQACgIgBgGIAAgBIAAgBIADgEIAFgKQANgTgBgDQAEgKALgHQAFgCAFgBIACAAIACAEIADAAIgCgFQgJgYgRgNQgQgRghgIQARgKAUgGQAjgIAfADQAkAGAYAVQATASALAWQACAFgCABQgGgEgFADQgJAGgDAIIAIgGIAAAAQgFAFgHALIgIANIgHAOIgCAEIAAACQAZgWAUgKIgBgCIAEgBIADgBIACABIgIADIACAEIgBABIgBgDIgKAGQgIAJgDALQADAEgFAJIgFAIQgBAGgFAEQgEAGgEADIgMANIgBADIAAgFIAAgFIADgLIgHAFIACgGQADgOAHgPIgYAXIgGAFIgNAGQgQAFgLATIgJAIIgIAIIgEADQgPANgEAAQgEABgCgDIgBgDIgBgDQgBgEAAgHIABAAIAGAAIADAAQADgCALgJQgIgFgFgHIgEgEIgCgDQADgFABgEIABgBQAIACATgaIACgBIAFgGIgqAkIAAgBIgGAHIgKAKIAAgBIgCADIgEADIgVATIgCAAIgKACIgEACIgFAGIgMAJIgEACQgHAEgEACIgEAEQAMgCAUgQIABABQACAAAHgGIAEgEIALgEIAHABIABAFIABACIADAAIgCgDIAJABIACACQgKAWgVAZIglAhIgDACQgFAEgJAEQgPAFgLARIgGAHIgGADIgHAEQgMAHgEgCIgBAAQgDgCgCgGgAhSiCIgFAGQARgKADAAIADgCIAAgBQgCAEgHgDIgBAAIgBgBIgHAHgAGpg4IABACIgBABIAAgDgAGpg4IAAAAIAAAAIAAAAIAAAAgAgWidQACgGAEgFIAAgBIABACIgBAGIAAAEIAAgBIgFABIgBABgABoikIABgBIAEgFIgBAFIAAABIgBAAIgDABIAAgBg");
	this.shape_13.setTransform(197.2,146.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B1027D").s().p("ApZGTQgFgFgEgJQgFgJgDgMIgBgBIAAgBIALgTIAEgFIAMgUQAQgeAPgWIAMgPQATgVAYgQIAQgLIACAAIAIAAIAWAAIABAAQAGABAEgCIADACIAAAAIADABIABgBQAZgCAdgYIACgCQAOgMAGgQQAIgCAJABQAOgBAIABQAdgCABABQAMgDAAgWIABgGQAAgPAOgFIAVgDQACAHgBACIgFAEQgDACgBAHIgBADIAAACIgCAGIAAAEIAAACIAZA1QACALgFAJIgDADQgFAGgaAPQgGgCgIgBIghgHIgIgBQgFgDgDAAIgHAFIgDAFQgDABgDADIgBAOIAAAGQgOAogZAIQgWADgMgCQgLgDgEABQgZAFgXAMIgGADQgOAGgKAJQgKAJgCANQgCAIABAWIgCAFQgHAMgdAHQgJADgLABIgCAAQgFAAgHgLgAJnggIgGgEQgGgOgUgHIgKgIIgFgGIgEgFQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAgBIgCgBIgEgEIgCgFIgBgBQgPgDgIgEQgFgDgNgEQgOgEgQACIgNABIgWACQgQAAgRAHIgbAGIgBAAQgQAEgHgBQgGgBgEgEQgIgFAAgHIABAAIAGgKIACgBQAMgLAvgQIASgDQAggUBNAIQAJADAHAOIADACQAJAQAQAMQAGAHAEAIIAEAHQAEANAGAGIAEAKIABABIAAAFIABAAIAGAGQACABgCAGQgCAGgBAAIgBgBgAjmiAIgBAAQgCgBgBgFQgBgFABgGIAAgBIADgDIABgBQACgIAPgUIAHgKIAXgdIAAAAIAAgBIgCgCQgCgUAHgUIgBgJQgBgFAEADIABAAIACABIAJADQAIgCAHAFQAEABABADQgGAQgXAQIgGAJIAAAAIgBABIAAAAIABABIABABIAAABIACgBIABAAIACABQAGAAAJgDIAEAAQAEABAFAAIAJgDQAOgCAGAFIgCADIgCAGIAAAAIABAFIABACIgBAAIADADIABACQgHASgPAPIgLAGIgTAKQgFADgJADQgLACgKAJIgBABIgFACIgJACIgEAAQgFAAgCgDgAi4jaIABABIgBAAgAh/koQgDgBgCgEQgDgDgBgFIgBgBIAJAAIACAAIALgHIAYgTQAMgJANgHQAegXARgLQAGgEgJAJIAAACQgBALADADQAEAEAAAFIgXAOQgJAGgRAKIgCABIgLAFQgMAEgFAHIgBABIgCACIgPAHIgEACIgIACIgCgBgAAWk6IgCgDIgCgBQgCgDABgGIAGgEIACgBIAXgRIASgNIACgCQAkgbAqgUIAHgCQAFgBgBALQABANAJACIAAABQADAHABAJIAAADIAAgCQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAgBgBIAAgBIgDgEIABgBIAAgBQgjgCgiAWIgGACIgKADQgMADgJAIIgDADQgGAEgIAHIgDACQgKAJgEABIgDABIgCAAgAgOlKIABgBIACgCIgBgDIgBgEIAAgBIgBAAQgBgEgBgGIAAgFIACgBIAJgEIAAgBIAAAAIAAABIgBAAIADADIABgCQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIAAAAIAAABIAAABQgBAFABAFIAAABQADACgCAGQABABABAAQAAABAAABQAAAAAAABQAAAAgBAAIgBAAQgFAEgDgDIgDACIgBAAgAC3lTIgCABIgBgCIgCAAIgBAAIAAgCIAAgCIAAAAIgDgIIgBgDIAAgBIgBgGIAAgCIgBgCIAAgCIABADIADAKIABAEQAIAEAAAHIAAABIABABIABABIAAABIgDgDg");
	this.shape_14.setTransform(209.4,163);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EC02A6").s().p("Al5FHIAAgBIgDgCQgEADgGgCIgBAAIgWAAIgIABIgCgBIgJAAQgPABgKgFIgHgFQgTgJgIgVIgEgTIgCgKQgCgQABgQIAAAAQAOgfAZgFQAigBAMgEIAHgCIAlgLIAYgJIAJgGQAMgSAKgDIAEgCQAIgGATABIAFABIAAAAIACgEQACgBAEAAIAFABIAFAEQAQACAEAOQAKALAQAJIADADIAAAGIAAACIAAABQAAACgBADIgBABIgBACIgDgCIAAAAQgHAEgCgGIgMgIIgCABQgEAHgHAEIgEAEIgEAJQgTAWgLAVQgFAKgDATIgBAAQgFAQgOANIgCABQgdAZgZACIgBAAIgDAAgAE8CXIgDAAIAAgBIgDgDQgEABgGgDIgBAAQgNgFgHgHIgEgLQgFgSgIgNIgLgQIgXgZIgSgTQgMgMgFgJIAAgKQAAgFACgDQAEgHAPgDQAdgKAkgDIAWgCQAWACASAGQAZAJARAQIAwAzIAEAEIAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAEACIALAIQAOADADAOIAIAHIAIAqIAAABIAAACIAEAEIABABIABADIADADIACACIgHAAIgCABQgNAFgCgJIgCgCQgFgKgHgBIguAHQgRgHgJAFIgRAFQgeANgQAAIgHgBgAHxCRIACgBIAAACQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAgAh0gFIgCAAIgBgBIgBgBQgCACgEgCIgBAAQgGgBgGgDIACgBQAKgIALgDQAJgCAFgDIATgLIgEAHQgLAQgIAHQgHAFgDAAIAAgBgAiqgjIgKgIQgKgJgGgLIgDgGQgDgJACgNIAAAAQAEgfAUgPIANgIQASgJASgGIASgBIgCAJIAAAAQgEgDABAFIAAAJQgGATACAVIACACIAAAAIAAABIgXAdIgHAJQgPAVgCAIIgBAAIgGgEgAh1hiIABgBIgBAAgAhyhiIADABIgCABIgBgCgAhthhIAGgCIAJgDIAFADIgEAAQgJACgGAAIgBAAgAhvhhIAAAAIABAAIgBAAgAhyhiIAAAAIAAAAIAAAAgAhUifIADAAIAAADIAAABIgDgEgAhUifIgFAAQgGgDgOABQACgHABADIACAAIABAAIALACIAIAEIAAAAIAAAAgAgPi6IAAAAIgBgCQgBABgFgBIgHgBIABgBQAFgHAMgFIALgEIAAgBQARgKAJgGIAXgPQAAgEgEgEQgDgDABgLIAAgCQAJgJgGAEQgRALgdAXQgMAHgMAJIgYATQgLgGgEgGIgDgBIgSgOIgJgJQgJgJgBgKIAAgDQAJgZAwgNQAPgEAPgCQAiAAAPALQANADAGAIQAKgdAvgNQAYgGAZgBQAZABAVAIQARAJALALIADACIAAABQgBADADAFQAEABgCAJIAAAJIgBAQQgBgJgDgHIAAgBQgJgCgBgNQABgLgFABIgHACQgqATgkAcIgCACIgSAMIgUgNIgVgIIgKgDQgHAAgCgEIgBAAQAAAEgDAHIAAAKIgCAAIAAAGQABAGABADIAAABIABABIABAEIABADIgCACIgBgBIAAgBIAAgIQgOAHgUALQgPALgJAEQgEADgCAAIgCAAgAA3jSIgBgBIgCgBIADgCQADAEAFgEIABAAQABAAAAgBQAAAAAAgBQAAAAgBgBQAAgBgBgBQACgFgDgCIgBgBIADgBIANgGQADABgGAKIgBABQgDANgDgGIAAgBQAAACgFABQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBgBIgBAEIgCABIAAgDgACbjTIgCAAIAAgBIgBgCQgCABgFgCIgBAAQgJgDgHgEQAJgIAMgDIAKgEIAGgBQAigWAjACIAAABIgBABIADAEIAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAABIAAABIAAACIAAACIABACIABAFIAAACIABADIADAIIAAAAIAAACIgDgCIAAAAIgBgLIgfAKQgJABgIAEQgWALgLAAIgEgBgAEBjeIABAAQAAAAAAAAQAAgBAAAAQgBAAAAABQgBAAAAAAIgDAAIgCABIgBAAQABgHgIgEIgBgFIARgDQAGADgEALIABABQgDAHgBAAQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_15.setTransform(202.7,151.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EC02A6").s().p("As3HLQAAgIAZgyQARgjALgTQAWgfAlgVQAfgTA7gTQATgGBWgRQBRgQAKgEQAbgMADgqQADgmA5gNIAFAFQgDAFgGACQgDACgBAHIAAAQQAAAPAUBZQAAAXgQATQgPARgoAaIhhACQghgMgNAwQgQA1gaAAQgbAAgLgIQgNgHgEAAQghAAgbAKQgjAOAAAZQAAAIADAZQgHAVg4AAQgIAAgag3gArCD5IAAgZIAAgbQAOgbAXADQAlAGADgBQARgEATgLQAWgNADgKQACgnAGgRQALgdBAgLIBuAAIAFABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgNAJQgSALgZgBQgOAPgqAkQgkAigFAWQgCAHABASQgCAQgPAKQgVAMgdABQgbABgKAGQgGAFgNAGQgRAIgLAAQgcAAgEgWgAGgAnQgRgRgFgCQhSgIgQgPQgDgWgJgMQgGgJgbgVQgYgTgLgHIgBgJQAAgGABgBQADgCARABIBJABQAqAFAYAZQAbAdAZAIIBuAAQANAHAKAbQAHAUAAAJQAAAIgcAOQgcAMgSAAQg1AAgYgQgALPgzQhCgQgLgdQgCgJgNgMQgOgMgPgFQglgOg6gDQgogDAAgLQAAgpBRAMQAXAECAAiQAqAEAoAWQAvAaAAAeQAAAGgGANQgHAPgGAAQgmAAgwgLgAkpjGQgKgFgCgJIgBgNQAAgRAGgMIAZgiQAWgJgDgTQgGgVAAgJIAAgFQABgVAWA4QAUA4AAAJQgDArgPAKgAg6mzQgRgFgfAAIgWACQgRADgDACIgQAAQgMgFgEgGQAFgFAxgQIAzgRQAsgDAMALQADAEAAALIgBAQQgDANgMAAQgIAAgSgFgACanJQgvgWgUAAQgeAAgKAJQgOALgCAAIgEgCQgBgBAAgFQAAgPAogMIBDgTIBHAAIAWASQAPAQAAAHQAAAIgFAMQgHARgLAAQgSAAgugWg");
	this.shape_16.setTransform(222.7,176);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EC02A6").s().p("AsgHKIgRgCQgEgCgIgNIgPgkIAAgBQACgLAXgoIAegrIAOgNQASgQAXgOQgOgFgDgPIAAgZIAAgcQAOgbAYAEQAlAFACAAQARgFAUgLQAWgNADgKQACgnAGgRQALgdBAgMIBvAAIAFACQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAGgNAJQgSALgZgBQgOAPgrAkQgjAjgGAVQgBAGAAANIACgBIABAAIBMgSQAjgLAGghQAIgfAygKIAFAEQgBADgEACIgCADQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABIAAAJIAAAFQgBAGACATQAAAXADAjIAAAFQgBAUgQASQgPAQgkAYQgsAGgpAFQgIgCgGACQgOAEgIAaIgCAHQgGAWgKAMQgMAOgNABQgYAAgMgGIgHgDQgGgDgCAAQgaABgUAGIgLAEQgJAEgHAEQgRALgCAPIAAAGQgCAHABANQgHAMgcAAIgCAAgAJ7BgQgZgBgUgEQgUgEgNgIQgRgOgGgEIgbgHIgXgIQgTgGgNgFQgHgDgFgEQgFgTgMgJQgJgHgZgRIgEgCIgigUIgBgHIAAgCQAAgFABgCIAPgCQgzgIgOgMIgBgFQgFgOgIgIIgegWQgQgHgIgGIgGgEIgDgCIgBgIQAAgFABgCQApgEAagBIASAAQAlADAZATIALAIQAUAPATAFIBEAAIAgADQAEACAEAGIAEAFQARgCARADQAeAFAwAQQAbALAiAJIAKACQAqAEAqASIAHADQASAKAKAQQAKANAAAOQAAAGgHAMQgEAGgEAEQgEAEgDAAQgTACgUgCQgXgCgYgFQgSgEgMgGIgMgGIADAHQAHASABAKQAAAIgLAIQgGAGgIAEIgFACQgWAIgRAAIgCAAgAmBgZQgCgBgCgFQgCgEgDgPIAAAAQAAgJAGgRIAJgTQAIgNAQgQIASgPIASgIQALgIAMgNQAPgWADgIIAAgBIADgEQAEgMAGADQAEgCARAKIACADIgBAEIAAAEIABAFIAAABIALApQACAKgCAIQAAAMgHALQgDAGgFADIgLAKQgJAHgEARQgGATgKAFIgHACIgJgBIgHgCQgOAAgMACQgOADgGAFQgEACgCAFIgFADQgJgBgKgFgALHhpQgXgCgdgHQgbgIgTgJQgUgLgGgNQgEgIgLgLQgOgKgNgEIgRgFQgegHgjAAIgGAAQgPABgIgCIgGgCQgHgDAAgEQAAghA+ADQAgABBGAOIAzAMQAdACAcALIATAKQAJAFAIAGQAVAQADAQQABAPgFAMQgHAOgEAAIgPABIgMAAgAi2l7IgEgEQgHgDgCgGQADgGAUgJQAJgEARgJQAcgLAIgHQAOgIAGgCIADAAQAWgFAMARQACACABAEIABAKIAAAQQgBANgJACQgEACgIgBIgIAAQgOADgYACIgGAAIgWACIgVADIgQgBgADImBQgLgBgTgIIgYgJQgTgIgQgFQgNgEgMAAIgFgBQgOABgIACQgKACgGAEIgDABQgKAHgCgBIgEgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAIAAgBQABgNAngMIA/gSIAhgCIAiAAQALAHALAIIAJAJQAFAHABAGQgCALgDAIIgCAGQgGAKgIABIgCAAIgGgBg");
	this.shape_17.setTransform(222.2,177.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EC02A6").s().p("AtAGaIgNgFIgJgOIgMgiIAAgBQAEgNAWggIAhgeQAIgFAFgFIAGgFQgGgFgCgJIAAgZIAAgcQAOgcAYAEQAlAGADgBQARgEAUgMQAWgMADgLQACgnAGgRQALgdBBgMIBvAAIAFABQABAAAAABQAAAAAAABQABAAAAABQAAABAAABQAAAGgOAIQgSAMgZgBQgOAPgrAkQgVAUgLAQIAygNIAJgCQAggIAKgZQAJgRAZgIIAKgUQANgUAWgRQAKgIAPgJIAYgKIAngSQAkgWAGgHIABgBIAFgFIAMgTQAEgLAbAEIADADQgBADgCACIgBAGIABAIIAAAAIAOA4QABANgGALQgEAOgPAPQgJAEgKACIgVAIQgOACgHAZQgJAdgOADIgJACQgIgBgFgCQgGgDgDAAQgTAAgRAEQgTAGgFAKQgCADgBALQgCACgEACQgGABgIAAIgCAMIAAAEQgDARgPARQgPAPggAWQgoAMghAIQgHAAgFADQgLAFgFAYIgCAGQgGAUgLALQgKAMgNABQgVACgMgFIgHgCQgFgCgDAAQgZABgRAGIgKAEIgPAIQgRAKgDALIgCAFQgDAFgBAJQgGAFgMAAIgOgBgAMiCUQgUgCgTgEQgRgBgPgDQgUgEgNgIIgYgQQgPgGgKgGIgVgLIgfgNQgIgDgFgEQgIgPgOgIIgkgUIgCgBIgQgGIAAgBQgPgGgGgFIgCgFIAAgBQAAgFABgCQAtgMAqADQAaADAZAMQAVAEAWAKQAcAQAfAIIAKACIAAAAQAYACAYAEIASAEIAJACIADABIAJADIAIACQAQAKAKATQAKARAAAMQAAAHgKALQgEAFgFAEQgDADgEABQgPADgOAAIgKAAgAHbhnQgngBgbgPIgMgKIgIgFQhBgMgRgLIgCgEQgGgLgIgFIgdgPQgPgCgHgFIgGgDIgCgCIgBgHIABgHQAkgHAYgCIARgBQAhABAZAMIALAFQATAMASAEIA+AAIAcAFQAEACAEAFQAHAIAFAMIAGAQQAAAQgLAJIgJAGQgNAKgMABIgIABIgDAAgAKHiiQgVgCgagHQgYgHgTgJQgSgKgHgLQgFgHgKgIQgNgJgMgDIgQgEQgfgFgcACIgFABQgOADgHgCIgFgCQgGgCAAgFIAAAAQAAgdA4gBQAhgBA9AIIAwAJQAaACAaAIIARAKIAPAKQAUAQACAOQABAOgFALQgGAMgDABQgJADgKAAIgFAAgAjHk+IgEgEQgFgEgCgHQACgJARgKQAHgDARgNQAdgNAFgKQAJgNAEgCIACgCQASgIANAZIADAGIACAKIACARQAAANgHAEQgBAEgHABIgGADQgLAKgVAEIgHAAIgXABIgVADIgPgDgAC+lGQgKgBgTgHIgXgIQgRgHgQgDQgMgDgNAAIgEAAQgOABgHACQgKABgGADIgDABQgJAFgDgBIgDgCQgCgCAAgDIAAAAQABgLAmgMIA7gRQAUgDALgBIAgAAQAMAFAKAHIAJAIQAFAHAAAGQgBALgDAHIgCAGQgEAKgIABIgDAAIgFAAg");
	this.shape_18.setTransform(221.7,178.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EC02A6").s().p("AuRFsQgEgEgFgDQgBgHgEgHIgIggIAAAAQAGgRAUgWIAVgLIgBgDIAAgZIAAgbQAOgcAYADQAmAGADgBQARgEAUgLQAWgNADgLQACgnAHgRQAKgeBBgLIBwAAIAFABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAGgOAJQgSALgZAAQgLALgfAbIABAAQAegGANgRQASgPAmgFIAFACIABADIAAABIACADIABAHIgBAEIgGATIgUAiIAAADQgFAOgPAPQgPAOgcAVIg+AdQgFACgDAEQgIAGgEAVIgBAHQgFARgMAKQgKAKgMACQgSACgMgDIgHgBIgIgBQgYABgOAGIgKAFIgOAHQgPAIgGAIIgDADQgFAEgDAFIgIABQgJAAgKgFgApOFjQgDgBgFgIQgFgKgIgVIgBgCQAAgIAQgiIARgjQASgZAbgTQANgJAUgKIAfgMQAOgGAogOQA4gVAKgGIACgBIAHgFQAKgOAFgPQADgVAlgCIAEAEQgBADgEADQgCABAAAGIABAKIAAAAQACAPAOA8QABAQgKAPQgIAOgYATQgOAEgPABIgeAGQgVgDgKAhQgKAlgTACIgMABQgJgBgGgDQgJgFgEAAQgYAAgUAHQgZAIgDAQQgBAFAAAPQgCAEgGADQgIADgPAAIgOAAgAMED5QgagBgWgFQgSgEgNgHIgYgRQgRgFgLgGIgWgMIgfgNIgJgFQgJgQgOgJIgkgUIgGgDIghgQQgDgEAAgEQAAgGACgCQAtgMApAEQAnAFAkAVQAcAVAdAIIALABIAiACIgTgOIgfgPIgNgGQgLgLgPgHIgngPIgFgBQgbgIgJgHQgCgCAAgEIAAAAIABgIQAogSAtAFQAiAFArATQAcAQAgAJIAJABQAsACArAOIAJADQARAKAKATQAJAQAAAMQgBAJgIAJQgFAHgGAEIgFACQgVAFgUgCQgTgCgSgDQAIARAAAKQgBAHgLAKIgLAJQgDACgDABQgUAFgQAAIgEAAgAFmjCIgMgIIgIgFQg4gOgSgIIgDgCQgHgHgIgEQgMgCgPgFQgOACgGgDIgFgCIgCgDIgBgGQAAgEACgBQAegLAXgDIAQgCQAPgBAPABIgBgDIAAgBQAAgYAzgFQAggEA2ADIArAFQAYACAXAFIAQAJIANALQATAQACALQgBAOgEAJQgFAKgDACQgJAGgMgBQgRgBgZgIQgTgGgRgIIAEAHQAEAJABAFQgBAQgIAIIgHAGQgLAKgLABIgKAAQgfgCgcgOgAkIkAIgEgEQgDgEgBgIQABgMANgKQAFgDARgRQAdgOADgNQAEgSACgDIACgDQAMgMAPAhIADAHIADAKIADAQQABAOgDAGQAAAHgEABIgFAGQgIASgTAFIgHAAIgXABIgVACQgLgCgEgDgACFkKQgKgBgTgGIgWgHQgQgEgQgCQgKgDgOABIgDAAQgPACgGACQgHABgGACIgDABQgIABgDgBIgDgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQACgJAigMIA3gRQAVgEAIAAIAegBQAMAEAKAGQAFADADAEQAFAFAAAHQAAALgCAGIgCAGQgEAJgHACIgEAAIgDAAg");
	this.shape_19.setTransform(226,179.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EC02A6").s().p("ArWHGQgEAAgGgKQgIgMgKgYIgBgDQAAgIAVgrIAUgqQAXggAggUQAQgKAZgLIAmgOQAPgGA2gNQBOgUANgGIACgBIAJgGQAOgPADgYQAEgeAvgIIAFAFQgCAEgFACQgDACAAAGIAAANIAAABQABAPARBLQABAVgNARQgMAPggAYIgpADIgnADQgcgIgMAqQgNAugXABIgOAAQgMgCgHgEQgLgGgEAAQgdAAgYAIQgeALgCAWQAAAGACAUQgDAGgGAEQgNAGgaAAIgHAAgALbEDQgbgBgUgFQgUgEgNgHQgRgQgGgDQgRgDgNgEIgZgIQgTgHgMgFIgJgGQgGgUgMgKQgIgIgbgSIgFgDIghgTIgBgJQAAgGABgCQAygGAnACQArAGAfAXQAcAZAbAIIALABQAuAAAsAFIAJABQAPAIAKAZQAJAUAAALQgBAGgNAKIgMAIIgHADQgWAIgRAAIgBAAgAvsDiIgFgKQgBgJgBgEIgEgeIAAAAQAHgSAQgMIAAgXQAOgcAYADQAmAHADgBQARgFAUgLIAKgHIAGgNIAFgOIAFgIQADgZAFgNQAKgcBCgMIBxAAIAFACQAAAAABAAQAAABAAAAQAAABAAABQABAAAAABQAAAEgFAEIAAAAIAEACIAAAAIAEADQACABgBAEIgBAEQgCAGgHAHQgOAOgSAIIgBADQgGALgPAOQgOANgYAUQghAWgSAPQgDAEgDAEQgEAHgCAUIgBAGQgEAPgNAKQgJAHgMACQgOADgNgBIgHAAIgHAAQgYABgLAGIgJAFIgNAHIgWALIgEACIgMAEQgNgBgJgMgAO5CXQgXgDgYgFQgTgEgOgGIgZgPQgPgIgHgLQgFgJgNgKQgQgKgOgGIgNgFQgOgIgRgFIgogKIgHgBQgcgFgIgGQgDgDAAgDIAAAAIABgIQAjgVAxAGQAeAFAyAOQAbAMAjAJIAJACQAsADAqASIAIAEQATAMAKAQQAKAOAAANQgCAJgGAKQgFAIgEAFIgGACIgUABIgVgBgAlUkdIgEgFQgCgDAAgKQAAgPAKgKIAUgYQAegQAAgQQgCgWACgEIABgEQAHgRARAqIADAHIACALIAGAQQACAOAAAHQACAKgCACIgDAKQgGAZgRAHIgGAAIgYABIgWABQgLgDgDgEgAAlkwQgJgDgNgCQgOgDgOgBQgIgBgQACIgDAAQgOACgFACIgPABIgCABQgIgBgDgCIgDgCQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBgBAAIAAgBQADgHAjgLIA0gQIAYgGIAbgBQAOACAKAFQAEACADAEQAFAEAAAIQgBALgBAGIgBAEQgDAKgHACIgHABQgJgBgSgGgAFdlZQgXgCgegOIgMgHIgHgEQgwgQgTgFIgCgBIgRgFIgaABQgNAHgEgBIgFgDIgCgCIAAgFIABgFQAZgOAWgFIAHgBQADgEAGgDIAZgIIAFgBIACAAQAggGAtgEIAoADQAVAAAWADIANAJIAMAKQARAQABAJQgBANgDAIIgHALQgHAHgLAAQgKAAgQgFIgEAHIgFAHQgIAKgKABIgJgBg");
	this.shape_20.setTransform(231.4,189.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EC02A6").s().p("AuCIEQAAgIAZg1IAdg3QAXggAmgWQAggSA9gUQATgGBZgSQBTgQALgFQAcgMADgrQADgoA6gNIAFAFQgCAFgHACQgDACgBAIIAAAQQAAAQAVBbQAAAYgRAUQgPARgqAbIhjACQgigNgOAyQgQA3gbAAQgbAAgNgIQgNgIgDAAQgjAAgcALQgkAOAAAaQAAAIAEAaQgIAVg5AAQgJABgag5gAJiEOQgRgRgGgDQhUgIgQgRQgDgXgKgMQgGgJgbgXQgZgSgMgIIgBgKQAAgFACgCQACgCASABIBLABQArAGAZAaQAcAdAZAIIByAAQANAHAKAcQAIAXAAAJQAAAJgdAOQgdANgSAAQg2AAgagRgAPdB3QhFgRgKgeQgDgKgNgMQgPgNgPgFQgngOg8gEQgpgCAAgLQAAgoBVAMQAXADCEAiQArAEApAXQAxAaAAAfQAAAHgHANQgHAPgGAAQgnABgxgLgAxIBrIAAgZIAAgcQAOgdAZAEQAmAGACgBQASgEAUgMQAXgNACgJQACgnAHgRQALgfBCgLIBxAAIAFABQABAAAAABQAAAAAAABQABAAAAABQAAABAAABQAAAGgOAIQgTALgZAAQgOAPgsAlQglAigFAWQgCAHABATQgCAQgQALQgWALgdABQgdACgJAHQgGAEgOAHQgSAHgLAAQgdABgEgXgAmXkfQgKgFgCgJQgBgDAAgMQAAgRAGgLIAagkQAXgJgDgUQgHgWAAgJIAAgEQACgXAWA6QAVA6AAAJQgDAtgQAKgAgdk8QgSgEggAAIgWACQgSACgDADIgRAAQgMgGgEgFQAFgGAzgQIA0gSQAtgDALAMQADADAAAMIgBARQgDANgLAAQgIAAgSgGgADfoDQgwgWgWAAQgeAAgLAJQgOALgCAAIgEgBQgCgCAAgFQAAgPApgMIBGgTIBKAAQAKAHAMALQAPAQAAAGQAAAKgFAMQgHARgLAAQgTAAgvgXg");
	this.shape_21.setTransform(236.7,197.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EC02A6").s().p("AtIHiQAAgHAYgxIAbg0QAVgdAkgVQAegSA5gSQASgGBTgQQBOgQAKgEQAagLADgpQADgkA2gNQgHANAAAIIAAAOQAAAPATBWQAAAWgQATQgOAPgnAaIhcABQghgLgNAvQgOAzgaAAQgZAAgMgIQgMgHgDAAQghAAgaAKQghANAAAYIADAgQgIAUg1AAQgIAAgZg1gAI7D8QgRgQgFgCQhPgIgOgQQgEgWgJgLQgGgIgZgVQgXgSgMgGIAAgJQAAgGABgBIBaAAQAoAFAXAYQAaAcAYAHIBqAAQAMAHAKAaQAHAVAAAJQAAAIgbANQgbAMgRAAQgzAAgXgQgAOcBvQhAgQgJgcQgDgJgMgLQgOgMgOgFQgkgNg4gDQgngDAAgLQAAglBPAMQAWADB7AfQAoAEAnAVQAtAZAAAdQgMAhgGAAQglAAgugKgAwABkIAAgYIAAgaQANgbAXAEQAjAGACgBQARgEATgLQAVgMACgIQACglAHgQQAKgcA9gMIBqAAIAFACQABAAAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAGgOAIQgRAKgYAAQgNAOgpAjQgiAfgFAUQgCAIABARQgCAPgOAKQgVALgcABQgaABgJAGQgGAFgNAGQgQAHgKAAQgcAAgDgVgAl8kMQgMgQAAgLQAAgQAFgLIAYghQAWgJgDgSQgGgUAAgJQABgZAVA2QATA1AAAKQgCApgPAKgAgbknQgQgFgfAAIgUADQgRACgDACIgQAAQgLgFgDgFQAEgFAvgPIAygRQAqgDAJALQADAaAAAEQgEAMgJAAQgIAAgRgFgADQnhQgtgVgUAAQgcAAgKAIQgNALgCAAIgEgBQgCgCAAgEQAAgPAngLIBBgSIBFAAQAjAgAAAGQAAAJgFALQgGAQgLAAQgRAAgtgVg");
	this.shape_22.setTransform(238.5,201.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EC02A6").s().p("AsNHBQAAgHAWguIAZgwQAUgbAhgUQAcgQA1gRQARgFBNgQQBIgPAKgDQAYgKACgmQADgiAzgMQgHAMAAAHIAAAOQAAANASBQQAAAVgOARQgOAPgkAXIhWACQgegLgMAsQgOAvgYAAQgXAAgLgGQgMgIgDABQgegBgYAKQgfAMAAAXIADAdQgHATgyAAQgHAAgXgxgAITDrQgPgQgFgBQhJgHgOgQQgDgUgJgKQgFgIgYgTQgVgRgLgGIgBgIQAAgGACAAIBTAAQAmAEAVAXQAZAaAWAGIBiAAQAMAGAJAZQAHATAAAIQAAAIgZAMQgaAMgQgBQgvAAgWgOgANcBnQg7gOgJgaQgDgJgLgKQgNgLgNgFQgigNg0gDQgkgBAAgKQAAgjBKALQAUADBzAcQAlAEAkATQAqAXAAAcQgLAfgGgBQgiAAgrgJgAu5BdIAAgWIAAgYQAMgZAVADQAhAFADAAQAPgEARgLQAUgKADgIQABgiAGgPQAJgaA6gLIBiAAIAFACQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgMAHQgQAKgWAAQgMANgnAgQgfAcgFATQgCAIABAQQgBAOgOAJQgTALgaAAQgZABgIAGQgFAFgNAFQgPAGgJAAQgaAAgDgTgAlij5QgLgPAAgLQAAgPAFgJIAXgfQAUgIgDgRQgGgTAAgJQACgXATAzQASAxAAAJQgCAmgOAKgAgZkTQgPgDgdAAIgSACQgQABgDACIgOAAQgLgEgDgFQAEgFAsgOIAugPQAngDAJAKQADAYgBAEQgDAMgJAAQgHgBgQgFgADCm/QgqgVgTABQgagBgJAJQgMAKgCAAIgEgCIgBgFQAAgOAjgLIA9gQIBAAAQAhAeAAAFQAAAJgFAKQgGAPgKAAQgQAAgpgTg");
	this.shape_23.setTransform(240.2,205.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EC02A6").s().p("ArTGfQAAgGAVgqIAXgtQASgZAfgSQAagPAxgQQAPgFBIgOQBDgOAIgDQAXgKACgjQADgfAugLQgFALgBAHIAAAMQAAANARBKQAAATgOAQQgMANghAWIhQACQgcgKgLAoQgMAsgWAAQgXAAgKgGQgKgHgDAAQgcAAgWAJQgdALAAAVIACAbQgFASguAAQgIAAgVgugAHrDZQgOgOgFgCQhDgGgNgOQgCgTgJgJQgEgIgXgRQgUgQgJgFIgBgIQAAgFACgBIBNAAQAiAEAUAVQAXAYAUAGIBcAAQAKAGAJAXQAGASAAAHQAAAHgXALQgYALgOAAQgtAAgUgOgAMcBfQg3gNgJgYQgCgIgKgKQgNgKgMgEQgfgLgwgDQghgCAAgKQAAgfBEAKQATACBqAbQAiADAiASQAnAWAAAZQgLAcgFAAQggAAgngJgAtyBWIAAgUIAAgXQALgXAUADQAfAFACgBQAOgDAQgJQASgLACgGQACggAFgOQAJgYA1gKIBbAAIAFABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAAAFgLAHQgPAJgUgBQgMAMgkAfQgdAagEARQgBAHAAAPQgCANgMAIQgSAKgYABQgWABgIAFQgFAEgMAFQgNAGgJAAQgYAAgDgSgAlHjnQgLgNAAgKQAAgOAGgJIAUgcQATgIgDgPQgFgSgBgIQACgVARAvQASAtgBAIQgBAkgNAIgAgXj+QgOgEgaAAIgSACQgOACgDACIgOAAQgJgEgDgEQAEgFApgNIAqgOQAkgDAIAJQACAXAAADQgDALgIAAQgGAAgPgFgAC0meQgogSgQAAQgZAAgIAHQgMAKgBAAIgEgCQgBgBAAgEQgBgMAigKIA4gQIA7AAQAeAcABAFQAAAIgFAJQgGAOgIAAQgPAAgmgSg");
	this.shape_24.setTransform(242,210.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EC02A6").s().p("AqZF+QAAgGATgnIAWgpQARgXAcgQQAYgPAsgOQAPgEBBgOQA/gMAHgDQAVgJACggQACgdArgKQgFAKgBAGIAAAMQAAALAQBEQAAASgNAPQgLAMgeAUIhKABQgZgJgLAlQgMApgUAAQgUAAgJgGQgJgGgDAAQgZAAgWAIQgaAKAAAUIADAYQgGARgrAAQgGAAgUgqgAHEDIQgNgNgEgCQg/gGgMgNQgCgRgIgJQgEgGgUgRQgTgOgIgFIgBgHQAAgFACAAIBGAAQAgAEASASQAVAXASAFIBVAAQAJAGAIAUQAGARAAAHQAAAGgVALQgWAKgOAAQgoAAgSgNgALcBYQgzgNgIgWQgCgHgKgJQgLgJgLgEQgcgKgtgDQgegCAAgJQAAgdA+AKQASACBhAYQAgADAfARQAjAUABAXQgKAagFAAQgdAAgkgIgAsrBPIAAgTIAAgUQAKgVATACIAeAEQANgDAPgIQARgKACgGQABgdAFgNQAIgWAxgJIBTAAIAFABIABADQAAAFgLAGQgNAIgTAAQgLALggAcQgbAYgEAQQgBAGAAAOQgBAMgMAHQgRAJgVABQgVABgHAFQgFAEgKAEQgNAGgIAAQgVAAgEgRgAksjUQgKgMAAgJQAAgNAEgIIATgaQARgHgCgPQgFgQAAgHQABgUAQArQAQAqAAAIQgCAggLAIgAgVjpQgNgEgYAAIgQACQgNACgDACIgMAAQgKgEgCgEQADgFAmgLIAngOQAhgCAHAIQADAVgBAEQgCAJgIAAQgFAAgOgEgACll8QgkgRgQAAQgWAAgIAHQgLAIgBAAIgDgBQgCgBABgEQgBgLAfgJIA0gPIA2AAQAcAaAAAFQAAAHgDAJQgGANgJAAQgNAAgjgRg");
	this.shape_25.setTransform(243.8,214.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EC02A6").s().p("ApeFcQAAgGARgiIAUgmQAPgVAagPQAWgNApgNQANgEA7gMQA5gLAHgDQATgJABgdQADgbAngIQgFAJgBAGIAAAKQAAALAPA9QAAARgLANQgLAMgcASIhDABQgXgIgKAiQgKAkgTABQgSgBgJgFQgIgGgCABQgXAAgUAGQgYAKAAASIADAXQgGAPgmAAQgHAAgRgngAGcC3QgMgNgEgBQg5gGgLgLQgCgPgGgJQgEgGgTgPIgZgRIgBgHQAAgBABgBQAAgBAAAAQAAgBABAAQAAgBAAAAIBAAAQAeAEAQARQAUAUAQAFIBNAAQAJAFAHATQAGAQgBAFQAAAGgTAKQgUAJgMAAQglAAgRgLgAKbBQQgtgLgIgVQgCgGgJgJQgKgIgKgDQgagKgpgCQgbgCAAgHQAAgbA4AIQARADBYAVQAeADAbAPQAiATgBAVQgJAXgEAAQgbABghgIgArkBIIAAgRIAAgTQAKgTAQADIAcADQAMgDANgHQAPgKADgFQABgaAFgMQAGgVAugHIBLAAIAEABQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAAFgJAFQgNAIgRgBQgJALgeAZQgYAWgEAOQgBAGAAAMQgBAMgLAGQgOAJgVAAQgTACgGAEQgFADgJAEQgLAGgIgBQgTAAgEgPgAkSjBQgJgLAAgIQAAgMAFgHIARgYQAPgHgCgNQgFgPABgHQABgRAOAnQAOAnABAGQgCAegLAHgAgTjUQgMgDgWgBIgPACQgMABgCACIgLAAQgJgEgCgDQADgFAigKIAkgMQAegCAGAIQADASgBADQgCAKgHgBQgFAAgMgDgACXlbQghgQgPAAQgUAAgIAIQgIAHgCAAIgDgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAgKAcgJIAvgMIAxAAQAaAWAAAGQAAAFgDAJQgFAMgIAAQgNgBgfgPg");
	this.shape_26.setTransform(245.5,218.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EC02A6").s().p("AokE7QAAgFAQggIASgiQANgTAXgNQAVgMAkgMQANgEA2gLQAygKAHgCQARgIABgaQACgYAkgIIADADQgBADgEABQgDABAAAFIAAAKQAAAJANA4QAAAPgKAMQgKAKgZARIg9ABQgVgIgIAfQgKAhgQAAQgRAAgHgFQgIgFgDAAQgVAAgRAHQgVAIAAAQIABAVQgEANgjAAQgGAAgQgigAF0ClQgLgLgDgBQgzgFgKgLQgCgOgGgHQgEgGgRgNIgWgQIAAgGQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABgCALABIAuABQAbADAPAPQARATAPAEIBFAAQAIAFAHARQAEAOAAAFQAAAFgRAJQgSAIgLAAQgiAAgPgKgAJbBIQgpgKgHgSQgCgGgIgIQgJgHgJgDQgXgJglgCQgZgCAAgHQAAgXAzAHQAPACBQAUQAaACAZAOQAeAQAAAUQAAADgEAJQgEAJgEAAQgYAAgegHgAqcBBIAAgPIAAgRQAIgSAPADIAZADQALgDAMgHQAOgIACgEQABgYAEgLQAGgSApgIIBFAAIADABIABADQAAAEgJAFQgKAHgQgBQgJAKgaAXQgXATgDANQgBAFAAALQgBALgKAGQgNAHgSABQgSABgFADQgEAEgIADQgLAFgHAAQgRAAgDgOgAj3iuQgHgEgBgFIAAgJQAAgKADgHIAQgWQAOgGgCgLQgEgOAAgGIAAgCQABgOANAkQANAiAAAGQgBAbgKAHgAgRjAQgLgDgTAAIgOACQgKABgDACIgKAAQgHgEgCgDQACgEAfgJIAggLQAcgCAFAHQACACAAAHIgBALQgBAIgGAAQgFAAgLgEgACIk5QgdgOgNAAQgTAAgGAGQgJAHgBAAIgDgBIgBgEQAAgKAZgHIArgMIAtAAIANALQAKAKgBAEQAAAGgDAHQgEALgHAAQgLAAgdgOg");
	this.shape_27.setTransform(247.3,223.1);

	this.instance_2 = new lib.WHatKindLoopy("synched",0);
	this.instance_2.setTransform(81.7,292.1,1,1,0,0,0,74.5,16);

	this.instance_3 = new lib.HowManyLoopy("synched",0);
	this.instance_3.setTransform(235.6,292,1,1,0,0,0,74.5,17.3);

	this.instance_4 = new lib.WhichOneLoopy("synched",0);
	this.instance_4.setTransform(-69.9,292.1,1,1,0,0,0,71.8,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},82).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},2).wait(72));

	// Layer 6
	this.instance_5 = new lib.WhichOneLoopy("synched",0);
	this.instance_5.setTransform(83.1,287.1,1,1,0,0,0,71.8,16);

	this.instance_6 = new lib.WHatKindLoopy("synched",0);
	this.instance_6.setTransform(87.7,287.1,1,1,0,0,0,74.5,16);

	this.instance_7 = new lib.HowManyLoopy("synched",0);
	this.instance_7.setTransform(84.6,287,1,1,0,0,0,74.5,17.3);

	this.instance_8 = new lib.TalkieMick();
	this.instance_8.setTransform(121.9,77.9,1,1,0,0,0,120.3,56.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},19).to({state:[{t:this.instance_7}]},20).to({state:[]},21).to({state:[{t:this.instance_8}]},21).wait(91));

	// Layer 2
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A89D93").s().p("AABgBIABAAIgCADQgEgBAFgCg");
	this.shape_28.setTransform(260,262.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6A5A50").s().p("AgNALIABAAIAJAAQgPAIgOAKgAAUgTIAKgJIADAAIgZAYIgEAAg");
	this.shape_29.setTransform(268,255.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C2BEB7").s().p("AgDADIAHgGIgCACIgDAFIgCgBg");
	this.shape_30.setTransform(273.4,253.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9C938B").s().p("AAHAIIANgLIAAACIgDABIgJAIIgBAAgAgJgHIAAABIgKAHg");
	this.shape_31.setTransform(272.1,253);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AC9688").s().p("AgVAVIAAgBIAfgnIAKgBIABAAIABABQAAAHgFACIAAAAIgjAfg");
	this.shape_32.setTransform(273.3,250.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#787B77").s().p("AAEAFIgMgLIACAAIAMAKIADADIgFgCg");
	this.shape_33.setTransform(247.9,260.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7D807D").s().p("AAZASIgWgMIgFgFIgHgKIgRgIIARAGIAkAdg");
	this.shape_34.setTransform(244.4,257.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A0948C").s().p("AgEAAIAJAAIgGABIgDgBg");
	this.shape_35.setTransform(252.4,262.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B6ABA2").s().p("AAvAKIAFgFIAFAAQgGAEAEABIAAABIgIgBgAgDAKIAAAAIADAAgAg1gGIgDgEIAEAFIgBgBg");
	this.shape_36.setTransform(254.3,262);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#838785").s().p("AAPAQIgvglIAQAFIAxAmg");
	this.shape_37.setTransform(240,254.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#878984").s().p("AATAOIg1ggIAEAAIBCAlg");
	this.shape_38.setTransform(234.7,250.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B3A99F").s().p("AgGgCIgBgCIgBgBIACAAIABAAIAOALIgPgIg");
	this.shape_39.setTransform(227.2,249.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#656860").s().p("AgQgKIAhAUIAAABg");
	this.shape_40.setTransform(222.9,244.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#8A8C87").s().p("AAeARIgtgRIgSgOIAAgCIACAAIBBAhg");
	this.shape_41.setTransform(228.1,246.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#836F61").s().p("AAeAWIg9gqIAAgBIA/Arg");
	this.shape_42.setTransform(223.3,246.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A8A8A1").s().p("AATAOIghgUQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAgBgBAAIAAgBIgCgEIApAbg");
	this.shape_43.setTransform(222.7,243.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#766B60").s().p("AAAAAIgBgBIADACIAAABg");
	this.shape_44.setTransform(219.7,244);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A5A49E").s().p("AggAZIABgBIAJgHIgIAIIgCACgAAWgUIALgGIgBACIgvAjg");
	this.shape_45.setTransform(277.5,250.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2F271B").s().p("AABgBIAAgBIADgCIAAABIgHAIIAEgGg");
	this.shape_46.setTransform(276.2,250.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#56564D").s().p("AgYAQIgDgBIAXgPIAAAAQgNAOAQgPIAdgUIglAeIgGAFIgBABIgJAHQAEgEgDgCg");
	this.shape_47.setTransform(276.9,250.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4D4840").s().p("AgJABIAYgLIgRAMIgMAJg");
	this.shape_48.setTransform(285.7,243.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#878986").s().p("AANgJIAFgCIgWAQIgCABIgLAGg");
	this.shape_49.setTransform(281.6,246.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#868783").s().p("AgEACQAEgDAFgBIgFADIgEACIAAgBg");
	this.shape_50.setTransform(283.5,245.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AEA297").s().p("AhDAuIACgCIABABICEhbIAAACIiEBbIgBAAIgCgBg");
	this.shape_51.setTransform(283.5,242.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#65584E").s().p("AA/gsIAHgCIAAACIgYAUIhzBHg");
	this.shape_52.setTransform(284,242.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C0AFAB").s().p("AAAACIAAgFIAAAHIAAgCg");
	this.shape_53.setTransform(287.7,222.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#868881").s().p("AgDABIAIgDIgJAFg");
	this.shape_54.setTransform(295.3,238);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#68665F").s().p("AAZgOIgCACIgvAbg");
	this.shape_55.setTransform(292.3,239.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9D8F86").s().p("AgzAWIBlgtIACADIg3AYIgBAAIgJAEIgeAOIgIACIAAgCg");
	this.shape_56.setTransform(295.6,235.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#615141").s().p("AgwAVIAegOIgeAQIAAgCgAAvgWIACADIgfATIgaACg");
	this.shape_57.setTransform(296.1,235.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B0B2AE").s().p("AgDAFQgJgGAAgKIAMAQIANAHQgLAAgFgHg");
	this.shape_58.setTransform(309.6,228.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#928981").s().p("AgLgCIAEABIABADIgCABgAAMABIgLABQADgGAIAFg");
	this.shape_59.setTransform(311.1,234.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#50483B").s().p("AgFgDIAMADIgHADIgCABQgGAAADgHg");
	this.shape_60.setTransform(307,234.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#848178").s().p("AgEAAIgRAAIATgEQgDAIAGgCIAJgCIALgBIgUAGIgBAAIgEgFg");
	this.shape_61.setTransform(306.7,234.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#5C5851").s().p("AAAARIAAgBQAAgNgCgJIACAFIAHATIAAACIgHgDgAgCgNIgBABIgDgHIAKAHQgEgCgCABg");
	this.shape_62.setTransform(304.2,225.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B0A295").s().p("AACAMIgGgSIAEAGIAAAAQACAIAAgPIAAgFIADAGIgDATg");
	this.shape_63.setTransform(304.7,226.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DCD9CC").s().p("AAAAFIAAgBQgGgRAHAJIACADQAAAJgCAAIgBgDg");
	this.shape_64.setTransform(304.6,225.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B8B5AF").s().p("AgBADIgCgDIgCgGIABgCQAEgBACADIABAAIABAAIACABIAAAEIAAADIgCgCQgHgJAEASg");
	this.shape_65.setTransform(304.3,225.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#828A8A").s().p("AAGAIIgTgWIAEAAIAXAdg");
	this.shape_66.setTransform(306.4,224.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#979894").s().p("AAMALIgUgLIgHgKIAfAVg");
	this.shape_67.setTransform(303.7,221.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#565651").s().p("AgNgFIAYAGIADAFg");
	this.shape_68.setTransform(298.1,217.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#757A74").s().p("AgNgMIgDgFIAOAJIAMAQIAHAKg");
	this.shape_69.setTransform(301,219.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#A9A8A3").s().p("AAGACIgYgGIAAgBIAAgFIAWAJIAPAMg");
	this.shape_70.setTransform(298.7,217.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#95897C").s().p("AgDgFIAAgCQAAgBAAAAQAAAAABAAQAAAAABAAQABAAAAABIAEAQg");
	this.shape_71.setTransform(295.5,216.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#585855").s().p("AAAAKIgCgHIAAgBIgBgCIAAgIIAHAOQAAAJgCAAQgBAAgBgFgAgDgKQAAgBAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAQACgCAAAFQAAgBgBAAQgBgBAAAAQgBAAAAABQAAAAAAABg");
	this.shape_72.setTransform(295.5,217.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#7B8584").s().p("AAcAaIAEADIAAAFgAgeghIAOAMIAGAGg");
	this.shape_73.setTransform(293.5,213.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#A7B5B6").s().p("AgDAiIgGhPIAJBQIAKALg");
	this.shape_74.setTransform(290.8,206.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#566D71").s().p("AgCgpIACAFIADBOg");
	this.shape_75.setTransform(289.9,206);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#9CAEB2").s().p("AABAZIAAgCIgBgXIgCgdIAFA7g");
	this.shape_76.setTransform(289.4,199.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#4C656B").s().p("AAAgPIAAAAIAAACIABAdg");
	this.shape_77.setTransform(289.1,197.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#70898E").s().p("AAGAQIgMgfIACABIADAIIAIAWIgBAAg");
	this.shape_78.setTransform(288.3,194.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B2A69F").s().p("AAAgIQAFgFAAALQgDAEgDAGIgDADQADgKABgJg");
	this.shape_79.setTransform(276.6,198.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#8E867E").s().p("AAQAAIgCAAQAMAEgDADIgHgHgAgHAAIgNgEIgDgCIANACIADAEIACABg");
	this.shape_80.setTransform(319.3,234.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C2B8AE").s().p("AANAJIgLgFIAXADIABADIABABgAgZgKIAdAKIgGAAg");
	this.shape_81.setTransform(315.5,232.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#675C50").s().p("AgbgOIABAAIAAgBIAHABIAJADQANAFAMAGIgPADIgfgJIAXAKIABACIAAABIAFABIAJAFIAEADQg7gRAVgNgAAfANIgBgDIAEAEIgDgBg");
	this.shape_82.setTransform(316.1,232.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#7A7972").s().p("AAkAcQgCgFgDgDIgCgBIAAgBIgHABQgMgHgNgFIApAMIANAGIAfAZgAgTADIAAAAQgaAAgSgNQgSgRAAgWIAIAHIADAOQAAAKAJAIQAHAHALAAIAfAHg");
	this.shape_83.setTransform(315.4,230.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B2B2AB").s().p("AAPAJIgegYQAOAAAHAKQAKAHAAAOg");
	this.shape_84.setTransform(322.1,234.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#A7A099").s().p("AAAABIAAgBIAAgCIAAgBIAAAHIAAgDg");
	this.shape_85.setTransform(323.6,236.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#56554F").s().p("AAAADIAAgDIAAgFIABAGIgBAAIAAAEIAAgCg");
	this.shape_86.setTransform(323.6,236.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#70625A").s().p("AAwBRQAAgXgCgWIAIBFIgFAAIgBgYgAg0gOIAAgJQAHAAAHgCIgGANIgCADQABgKgHAFgAgfg3IgGAEQADgOADAKgAgcg5IAAABIgBABgAAMhAIgBgDIACADIgBAAgAgshWIABABIgBADIAAgEgAgNhkIgBALIgEABIAGgQQAIAKAGALg");
	this.shape_87.setTransform(281.9,199.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#695E57").s().p("AgEAOIAAgGIAAgFIAEgDIABgGIAAgFIAAgBIAEgCIgIAdg");
	this.shape_88.setTransform(277.8,188.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BBA9A1").s().p("AAGARIgGgQIAAgBIAAABIgCAJIgDAFIAAgFIgBgKQgBgEgCgCIgEABIACgMIAPARIAHAGIACAJIABADIgIgBg");
	this.shape_89.setTransform(281.7,190.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#DCD6D6").s().p("AgBAHIAAgBQAIgdgHAfIAAAAg");
	this.shape_90.setTransform(282.9,182.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#998C85").s().p("AgLAPIACACIACgBQAPgQgMgEIABgBIAPgMQAAAIgCAGQgCAFgDAFQgGALgKAAg");
	this.shape_91.setTransform(283.9,181.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B7B1AF").s().p("AgBAKQAFgfgIAdIAAAAIgCgEIAAgDIABgEIAGgHQAOAEgPAQIgCABg");
	this.shape_92.setTransform(283.1,182);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#BDB4AD").s().p("AgFACIAAgGIAFgFIAGAAQgCAIgEAEIgFAHIAAgIg");
	this.shape_93.setTransform(277.9,184.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6E665F").s().p("AAFgGIABAAIgDAKIgDADQADgHACgGgAgFgFIAAgBIAFAAIgFAFIAAgEg");
	this.shape_94.setTransform(277.9,184.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#7B8C90").s().p("AATBKIgnhLIAUgvIACAEIgNAgIgFAMIADAEIAaA3IAIARgAAMhKIADgBIAAABIgDAFIgEAEg");
	this.shape_95.setTransform(285.6,185.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#B3AFAE").s().p("AgEAIIABgBIAIgPIAAANQgDgCgGAGg");
	this.shape_96.setTransform(288.7,173.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#9E9D9B").s().p("AgJASIAJgbIAAgFIAAABQAIgGACACIAAADIAAACIgTAfIAAgBg");
	this.shape_97.setTransform(288.2,175.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#9EABB0").s().p("AACgGIAAABIgDAMg");
	this.shape_98.setTransform(289.5,171.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#48463F").s().p("AACgLIgBAJIgBAAIAAABIAAAHIAAADIgBADg");
	this.shape_99.setTransform(289.8,169.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#585653").s().p("AgNAVIAAgBIAAgDIACAFIABAAIAAABIAAACIgDgEgAACgKIACgFIAEgDIABAAIAEgDIABgCIAAgCIgBAQIgPAJQACgDACgHg");
	this.shape_100.setTransform(283.8,180.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#BAB4AD").s().p("AAAAAIAAAAIABAAIgBAAIAAAAg");
	this.shape_101.setTransform(276.5,168.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#595E5F").s().p("AgCAGIgJAdIgCABgAAMggIACgCIAAgBIAAAGIgFAOIgJAPg");
	this.shape_102.setTransform(288.3,174);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#4E4F4D").s().p("AgCAFIACgJIADAJQgDgBgCABg");
	this.shape_103.setTransform(292.6,153.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#ADA69F").s().p("AAEgOIgCAKIgFATg");
	this.shape_104.setTransform(293.2,151.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#63615A").s().p("AgEASIAEgsQABgBAAAAQABgBAAAAQAAgBAAAAQABAAAAABQACAGAAAHIgHAcIAFgSIgDAjg");
	this.shape_105.setTransform(293.1,151.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#AFA49D").s().p("AABAFQARABgQgFIgJgBIABAAIgDAAQABgNAOANIABAAIADACIAAADIgFADIgEgDg");
	this.shape_106.setTransform(208.3,230.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#DED4CC").s().p("AAAADIgBgCIgGgBIgBgCIAJACQANADgJAAIgFAAg");
	this.shape_107.setTransform(208.4,230.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C6BDB4").s().p("AgCAAIgBAAIAGAAIAAAAIgEAAIgBAAg");
	this.shape_108.setTransform(205.4,229.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#120D09").s().p("AB9CDIADgNIACgEIAHgNIAEgFIAFgHQAKgNANgKIAJgHQAJgNANgIQAOgJAMgLIAagBIADAAIADAAIAAAAIADADIABABIAAACIAAABIABACIAAACIgCADIgCACIgQABIgJAAIgBAAIgaAVIgPAKIgBACQgCAFgEAEIgCACIACgBIgCACIgNARIgCAAIgFAAIgGAFIgLAOIgBADIgCAHIgCAGgABmCDQgGgIgHgEIgCgBIgIgDIgDgCQgHgKgKgJIgEgEIgBgBIgQgOIgQgOIgIgGIAXAMIANAOIAFACIACABIAGACIATAJIAEADIADACIAEACQAKAHAJAJIAKANgAhTAAIgLgCQgcgLgcgPIgPgNIgBAAIhBguIgGgEIgDgGQgMgQgKgRIAMALIAaASIABABQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAjAXIASAPIAvATIA4AhIAxAmIAQAIIAGAMQgogggygSg");
	this.shape_109.setTransform(243.3,252.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#ACABAA").s().p("AgOgOIAAgDIAdAig");
	this.shape_110.setTransform(218.7,240.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#665E53").s().p("AABgDIACABIABAGIgHAAg");
	this.shape_111.setTransform(215.8,231.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#6B625A").s().p("AgOAKIgCgDIgGgDIAAAAIAFgEIAEABIAEgBIAAAAIACgCIAJgHIAVAAIAAAEIAAABIgBAAQgIgGgDANIgLgGQgCANgKAAIgCAAg");
	this.shape_112.setTransform(206.7,226.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#A09E9A").s().p("AgLALIAXgVIAAABIgWAUIgBAAg");
	this.shape_113.setTransform(206.8,199.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#A3A7A6").s().p("AgUAQIAYgZIAEgCIANgFIgpAhIAAgBg");
	this.shape_114.setTransform(210.2,196.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#816B61").s().p("AgDADIACgDIAFgCIgCABIgDAEg");
	this.shape_115.setTransform(211.7,192.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B6AAA1").s().p("AAAAAIAAAAIAAAAg");
	this.shape_116.setTransform(270.4,206.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#5E584E").s().p("AgGAAIAAAAIANAAIgBAAIgMAAg");
	this.shape_117.setTransform(253.6,176.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C7C1BC").s().p("AAAAAIACAAIgDAAg");
	this.shape_118.setTransform(246.9,174.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#6F6D6B").s().p("AgFgKIAKADIAFABIACAFIgOgDIADAJIADABIgCAAIgCgBIgBACIgCAAQgEABgEADg");
	this.shape_119.setTransform(246.9,173.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#779298").s().p("AgEAJIAAgRIACgDIAIAXg");
	this.shape_120.setTransform(246.8,171.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#6A7A7F").s().p("AAAgEIABADIgBAEIAAACg");
	this.shape_121.setTransform(246.4,170.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E4D9D5").s().p("AAAAOIgJgXIACgFQAEAOAMAFIABAAIgEACQgCACAAAEIAAACg");
	this.shape_122.setTransform(247.4,171.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#B39F92").s().p("AAAgCQACgFAEgDIAAABIgDAGQgEABgBAEQgBAJADAAIgCAAQgGAAAIgNg");
	this.shape_123.setTransform(271.9,172.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#AC978B").s().p("AgCAFIAAgBIABgEIAEgEIgDAEQABAEgCABIgBAAg");
	this.shape_124.setTransform(272.9,171.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#2A2D2D").s().p("AgRA+IABgBQAPgaADgdIABACIACADQAFAAABgEQAGgJABACQAAAAgCAIIgEAPQgGAGgFAJIgBACIAAABIAAAAIgLAOIgEAHIgCAAgAABg+IACAHIAAAEIgCgLg");
	this.shape_125.setTransform(276.6,164);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#6B6E6B").s().p("AgPAJQABgFAGgCQgEAXAXglIAEgFIABAAIAAABIgXAgIgFACQgEAAABgJg");
	this.shape_126.setTransform(273.2,172.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#8D827C").s().p("AgNA6IALgOIABAAIgBACIgFAMgAAAApIAAABIgBABgAAOALIgCANIgCACIAEgPgAABg0IAAgFIAAAFg");
	this.shape_127.setTransform(276.8,163.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#8E908C").s().p("AgRAAIgBgDQAKgHAKAKQgJAAgKAGIAAABQAAgEAAgDgAAPgCIAEgBIAAABIgEAAg");
	this.shape_128.setTransform(259.9,171.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#4D5C63").s().p("AADgLIADATIAAABIgEABIgHACg");
	this.shape_129.setTransform(261.2,170.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#B9B6B4").s().p("AAAAIIABgSIgBAUIAAgCg");
	this.shape_130.setTransform(262,168.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#8E9798").s().p("AgDAGIAAgBQgBgLAEgGIAAgOIAAAAIABANIgBASIAAACQAIALgHAIIgBABg");
	this.shape_131.setTransform(262,168.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#7D8A8D").s().p("AAAAAIAAAAIAAAAg");
	this.shape_132.setTransform(262,165.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#808686").s().p("AAAALQgFgGAAgQIALATIgGAEIAAgBg");
	this.shape_133.setTransform(263.4,160.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#704536").s().p("AAAgYIAAAAIABABIAAABIgBAvg");
	this.shape_134.setTransform(275.7,163.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#583F32").s().p("AAAAHIAAgIIgBgGIADAPIgCgBg");
	this.shape_135.setTransform(275.6,159.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#C39D88").s().p("AAAAAIAAgGIAAgWIAAAAIACABIAAABIgCAyIgBAFQABgOAAgPg");
	this.shape_136.setTransform(275.5,163.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#77695D").s().p("AAAAEIAAgHIAAADIABAEIgBAAg");
	this.shape_137.setTransform(275.4,158.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#0B0505").s().p("AgVBVIADgGIABAAQADAAAAgFIACgGQAPgSAEgbIADgFIADgvIAAgBIgBgBIAAAAIAAgCIgEgRIgBgDIAAgCQAAgIgEgGIAAgBIgBgCIAAgDIgCgFQAFgdAOAnIACAHIAAABIAAABIAAABIACALIAAA2IAAACQgFAdgQAaIAAACIgCAFQgQAYgEAAQgDAAACgIg");
	this.shape_138.setTransform(274.5,163.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#B29A8D").s().p("AADATIgDgDIAAgIIACABIACAKgAgDgRIAAgBIABAAIABACIAAABIgCgCg");
	this.shape_139.setTransform(275.2,158.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#7F888A").s().p("AASgNIgCADIgBABIAAAAIgBAAIggAXg");
	this.shape_140.setTransform(268.3,152.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#66625D").s().p("AALAQIAAAAIAAgBIAAgBIgDgHQgLglgFAcQgIgMAKgHIAFAAIAIASIAGAUIAAAFgAgHAEIAAgCIABACg");
	this.shape_141.setTransform(275.6,156);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#BFA595").s().p("AgBALQgHgNAHgHQABgDAGgBIAAABIgFABQgIAGAHALIAAAFIAAADIAAAAIgBgDg");
	this.shape_142.setTransform(274.7,155.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#7E7871").s().p("AgJACIAGgCIANgDIAAAHg");
	this.shape_143.setTransform(275.4,145.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#96928F").s().p("AgQAbIAAACIgCABgAgEAWIgBgBIgBAAIAAAAIgFAAIAHgKQgBgKgLAFIgCACIACgCQAPgQAAAaIAAACIACglIASgKIgQAOIAAAfIgFAIIgCgCg");
	this.shape_144.setTransform(272,150.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#B2B6B1").s().p("AgGAIIAFgBIAMgDIgFADQgEACgCAAIgGgBgAgKAHIAAgBIAGgOIgDAOIAAACIgDgBg");
	this.shape_145.setTransform(273.7,144.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#6D6862").s().p("AgBADIgDABQASgPgPAOg");
	this.shape_146.setTransform(271.3,144.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#9E7869").s().p("AAIAnIgBgWIADAXgAgEgWIgBgCIgEgPIADABIAFAVQgBgDgCgCg");
	this.shape_147.setTransform(243.6,165.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#61787F").s().p("AgFgTIABACIALAiIgCADg");
	this.shape_148.setTransform(246,165.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#A3ABAC").s().p("AADgBQgEAAgDgCQgDgDgBgFIAAgCIAAgDIALAKIAGAXg");
	this.shape_149.setTransform(243.6,159.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#92857D").s().p("AgFAAQAWgBgRABIgBABIgEgBg");
	this.shape_150.setTransform(252.4,146.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#2B2517").s().p("AgGgBIAAAAIABgCIALABIAAAAIABABQACAFgEgBIgDAAIgCABQgDAAgDgFg");
	this.shape_151.setTransform(250.3,145.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#615956").s().p("AADAQIgDgKIAIgWIgDAWIgBALgAgHgIIAAgEIABAHg");
	this.shape_152.setTransform(241.9,150.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#91877D").s().p("AAJAAIASACIgKAAIgIgCgAgagBIAIABIADAAIgHAAg");
	this.shape_153.setTransform(247.2,146);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#6B605A").s().p("AAAAAIAAAAIAAAAIAAAAIAAABg");
	this.shape_154.setTransform(242.9,148.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#BCB0AB").s().p("AABAMIgOgnIAAgBIAJAHIACAEIACARIABgFIAFAJIgFAcgAALgdIABgCIAAAAIACAAIAAACIgBAAIgEAYg");
	this.shape_155.setTransform(241.6,151.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#ADABA1").s().p("AAEgBIAEABIgIAAIgDACQgLgCASgBg");
	this.shape_156.setTransform(244.1,146);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#717B7C").s().p("AgRgPIAiAdIABABIAAABg");
	this.shape_157.setTransform(209.2,181.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#59564E").s().p("AAAAAIAAADIAAACIgCABQgEAAAGgGgAACgDIACgCIABADIgDgBg");
	this.shape_158.setTransform(213.4,192);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#AFA59B").s().p("AgBAEIgBgCIAAgCQAAgFACABIADABIAAAEIgBACIgCACIgBgBg");
	this.shape_159.setTransform(213.6,192.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#5F5953").s().p("AgDgJIADABIAFAFIgIgCIgBAPg");
	this.shape_160.setTransform(215.7,190.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#A7A09B").s().p("AgTAQIABgBIAAABIgBAEIgIAFIgNAFgAABgdIAKACQAFACAHAAIASABIgDADIgggFIABALIgGACIgBABg");
	this.shape_161.setTransform(215.2,192.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#7D8282").s().p("AgKgBQAOAIATADIgMADgAgWgKIAAgCIAJAJg");
	this.shape_162.setTransform(213.4,184.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#798585").s().p("AAAAHQgDgEgEgHIgCgGIATAVQgGAAgEgEg");
	this.shape_163.setTransform(206.3,178.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#917F77").s().p("AgLgDIAAgBIAEAAIATAIg");
	this.shape_164.setTransform(212.5,171.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#888A87").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_165.setTransform(210.8,168.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#726052").s().p("AAAAPIgBgBIABAAIACADIABABQgDAAAAgDgAgDAGIAAgKQAAgHADgCQABgDAEgBIAAABIgIALIABAPIgBgEg");
	this.shape_166.setTransform(210,169.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#88786C").s().p("AgOAFIAdgJIgXAJg");
	this.shape_167.setTransform(228.6,185.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#716D66").s().p("Ag/gBIgBgCIAMgCIAhAJIAAACQgWgCgWgFgAA8AAIAFAAIgFACg");
	this.shape_168.setTransform(221.1,185.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#9F9F9C").s().p("AAKgFIAHgBIABAAIAAAAIgjANg");
	this.shape_169.setTransform(235.3,186.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#A29994").s().p("AAAAAIABAAIgBAAg");
	this.shape_170.setTransform(237.1,185.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#747877").s().p("AAZgOIgFAFIgsAYg");
	this.shape_171.setTransform(236.8,182.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#B0968B").s().p("AgjA5IAdggIgaAggAAjg5IACACIgCAIIAAgKg");
	this.shape_172.setTransform(240.9,175.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#766355").s().p("AgCAAIANgHIACgCIAEAAIghATg");
	this.shape_173.setTransform(235.8,182.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#C9B6A8").s().p("AAGgDIgCADIgJAEg");
	this.shape_174.setTransform(233.4,183.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#E5DCD9").s().p("AAUBcIBSgPIgRAGIgfAKgAgMBcIAAgCIAGACgAiZgGIABABIgBAAIAAgBgAingaIAAgBIABABgAAAgjIABABIgEAAgAhng4IABgBIAAABgACShNQAMgFAKgKIgEAIIgRAJg");
	this.shape_175.setTransform(221.6,176.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#757472").s().p("AgeAJIA5gRIACAAIACAAIg4ARg");
	this.shape_176.setTransform(230.5,170.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#858581").s().p("AgQADIAmgKIAFAAIg1AQg");
	this.shape_177.setTransform(225.1,172.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#736861").s().p("AAfAGIgDgBIAUgFIgLAGgAgbABIgUgGIAdAHg");
	this.shape_178.setTransform(218.6,172.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#7D746B").s().p("AgzgGIAUADIAjAHIAvgKIABAAIgNAGQgVAHgSAAQgaAAgZgNg");
	this.shape_179.setTransform(220.2,171.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#B9ABA1").s().p("AAXgGIgBACIAAABIgsAKg");
	this.shape_180.setTransform(223.1,171.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#8F8C88").s().p("AABAJQgBAAAAgJIgGgIIAFACQABAPACAAQACAAACgGIABgIIAAANQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_181.setTransform(229.4,161.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#312922").s().p("AgDAAIgCgPIALAEIAAALIgCAKQgBAGgCAAQgBAAgDgQg");
	this.shape_182.setTransform(229.5,160.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#0B0806").s().p("AAaARIgjgTIgMAFIgCABIgOAHQgEAAABgGIAMgNIAFgDQAJgFAKgBQAHgCAJADQANADANAMQACABABACIAAAFIgMgEIACAQg");
	this.shape_183.setTransform(226,158.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#7B7570").s().p("AgkAAIAGgDIAHgBIgFADIgMANgAAmAEQgNgKgNgEIAIAAIAVAQIAAADQgBgDgCgCg");
	this.shape_184.setTransform(226,157.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#97837A").s().p("AgDADIAHgGIgGAHg");
	this.shape_185.setTransform(236.6,164.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FEFDFC").s().p("AiZBOIgCgHIAAAAIACACQAOAEgLACIgDgBgACchOIABACIAAAFQgFAIgGAIg");
	this.shape_186.setTransform(224,172.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#747C7C").s().p("AgeAUQAdgBASgTIACgDQAHgIAEgIIABAEQgEAHgHAIIgCAAQgLAKgJAFQgLAFgOAAg");
	this.shape_187.setTransform(236.6,167.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#130D0B").s().p("AhRAzIgcgJIgWgKIgEAAIgBABIgKAAIgDAAIgCgDIAAgRIAJgLIADADIAAABQANAVAcAEQAtAaAwgUIAKgGQA5gNAtghIAGgGIABAAIAHgIIALgRQAIgKAHgCIADAFIAAACQAAAFACADQgFAFABAKIgBgBIgKAXIgDADQgTATgdABIgCAAIg8AUIglAMIgTAFIgEABIgSAEg");
	this.shape_188.setTransform(224.9,167.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E0CDC6").s().p("AAIgLIgCgNIAJALIgLANIgKARIgIAHg");
	this.shape_189.setTransform(237.7,162.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#BEA8A1").s().p("AABAFIAAAAIgCgKIABAAIACALIgBgBg");
	this.shape_190.setTransform(239.1,157.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#7D6C63").s().p("AgLARIAEADQgHACgIAKgAAVAVIgEAAQgIgRgNgKIgGgFIgDgMIgCgJIAmA1g");
	this.shape_191.setTransform(240.5,159.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#625A54").s().p("AgHAFIAEAAIALgMIgHANIAAADg");
	this.shape_192.setTransform(233.5,152.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#A08A81").s().p("AAZAcIgHgPIAGAGIADAJIgCAAgAgTgaIAIAJQgFgBgFADIgFAEg");
	this.shape_193.setTransform(236.3,154.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#798589").s().p("AgXgeIAMAMIAjAuIAAADg");
	this.shape_194.setTransform(240.2,155.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#C6BCB7").s().p("AgJAMIAEgZIAPANIAAALIAAABIgKgQIgJASIAAgCg");
	this.shape_195.setTransform(239.1,147.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#ABBABB").s().p("AgBAGIABABIgBAIgAACgOIAAABIgBAEIABgFg");
	this.shape_196.setTransform(237.8,150.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#6D6D6B").s().p("AgEAFIgBgCIABgGIAKAUgAgEgQIABABIgBAGIAAgHg");
	this.shape_197.setTransform(238.3,151.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#4E4A47").s().p("AABAAIgGgVIALARIgBAag");
	this.shape_198.setTransform(236.3,147.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#746A62").s().p("AgFgHQAFAAACAFQAEADAAAHg");
	this.shape_199.setTransform(236.3,145.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#7D7771").s().p("AAAADIAAAAIAAgHIABAEQAAACgBABIAAABIAAABg");
	this.shape_200.setTransform(239.5,143.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#4F433A").s().p("AgIAAIgCgCQAJAFAEgCIgDAGQgCgCgGgFgAAKAAIgCAAIABAAIABgBQABgCAAgDIAAAHIgBgBg");
	this.shape_201.setTransform(238.5,143.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#657073").s().p("AAAAAIAAAAIAAAAg");
	this.shape_202.setTransform(231.8,145.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#BFB9B6").s().p("AAAAAIAAAAIAAAAg");
	this.shape_203.setTransform(233.8,146.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#85665C").s().p("AACAXIgBgDIgBgBIgEgPIAGgQIABAAIgBgKIACARIgEAKIADASIgBAAg");
	this.shape_204.setTransform(233.5,147.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#B2A49F").s().p("AAJAKIAAgCQgIgYgIASIgBAAQgEgIAJgDIALAGIABADIAAAAIABAKIgBAAg");
	this.shape_205.setTransform(232.7,145.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#61605E").s().p("AgKgLIAVAQIgCAAIgOgJIAFAQg");
	this.shape_206.setTransform(231.2,141.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#634F4A").s().p("AgFAEIADgMIAAgBIAIATg");
	this.shape_207.setTransform(232.9,143.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#97918D").s().p("AgCAHIgDgHQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAKADgFgKIACAAIABABIAAADQgBADgCADQgDAFgCAAg");
	this.shape_208.setTransform(231.8,143.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#AAA7A3").s().p("AAAAAIAAAAIAAAAg");
	this.shape_209.setTransform(224.2,153.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#B7A399").s().p("AAAACIAAgDIAAADIAAAAg");
	this.shape_210.setTransform(224.2,152.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#5D5B55").s().p("AAAAAIAAgCIAAAAIAAABIABAAIgBAEg");
	this.shape_211.setTransform(224.3,152.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#67615E").s().p("AgRAEIAIgHIAbADIgdAAIgEAEg");
	this.shape_212.setTransform(226.8,151);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#B4A29B").s().p("AAGADIgQgFIgFgCIAAAAIAAgBIAVAIIAKADg");
	this.shape_213.setTransform(232,152.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#B5A6A0").s().p("AgXgCIAegCIAQAHIAAABIAAAAg");
	this.shape_214.setTransform(228,151.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#6A5850").s().p("AgUAEQANgKAQAAIAGACIAJAEIgDAAIgsAHIADgDg");
	this.shape_215.setTransform(227.6,149.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#695E56").s().p("AgSACIgBgBIADAAQAHAEgDgKIgCgGIgBgHIAPASIAAADQAAAFABAGIACAEQgHgBgOgPgAATAHIABAAIgCADIABgDg");
	this.shape_216.setTransform(231.8,149.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#BDB1A7").s().p("AABAHIgGgEIABAAQANADgIgNIACABIADAGQACAIgEAAIgDgBg");
	this.shape_217.setTransform(229.9,148.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#A0928C").s().p("AAAAOIAAAAIAAABIAAgBgAAJgEIABgBIgBADgAgJgCIABgEQACgDAEgFIgFAMg");
	this.shape_218.setTransform(222.6,159.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#938A83").s().p("AgdAHIABAAIASgVIAoABIgGAAIghAAIgSAcg");
	this.shape_219.setTransform(211.8,155.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#99918A").s().p("AAMACIABgDIAAADgAgMgBIAFAAIAEADg");
	this.shape_220.setTransform(215.7,154.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#0B0909").s().p("AglgOIBOAFIgBAEIgBAEQgFAGgKgFIABAAIgDgBIgEgEIgngBIgTAVg");
	this.shape_221.setTransform(213,154.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#D2C6C2").s().p("AgFACIAAgBIAAgBIAAAAQgBAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAIAKgBIgLADg");
	this.shape_222.setTransform(208.7,140.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#B2A7A1").s().p("AgEAAQgBAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIAEACIACAAIgGAAQgGgCAEAFIgCgDg");
	this.shape_223.setTransform(211.5,140.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FAF4EE").s().p("AAAAAIAAAAIAAAAg");
	this.shape_224.setTransform(208.9,137.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#6B797C").s().p("AASgXIgYAjIgMAMg");
	this.shape_225.setTransform(209.4,132.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#7B7D79").s().p("AgGACIANgHIgNALg");
	this.shape_226.setTransform(210.7,134.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#BFB6AE").s().p("AAGgFIABAAIAAAAIgCADIgBABIgKAHg");
	this.shape_227.setTransform(210.7,134.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#6B5E57").s().p("AgFAFIABgDIAAAAIABgBIAJgHIgLANIAAgCg");
	this.shape_228.setTransform(212,133.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#E7DDDA").s().p("AAAAAIABAAIgBABg");
	this.shape_229.setTransform(213.2,138.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#969B98").s().p("AgOAKIAEACIgKACQAAgFAGABgAgBAAIAWgOIgDAEQgNAIgIAHIACgFg");
	this.shape_230.setTransform(216,137.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#756766").s().p("AADgJIACAHIgCACQgGAKgBAAQgBAAAIgTg");
	this.shape_231.setTransform(219.1,138.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#B1A7A0").s().p("AgMAOQANgbgTgCIADgDIAPAGIgBAFIgBABQgSAiASgaIACgCIATgCIAAACIgTAAIgMATQgBgDABgCg");
	this.shape_232.setTransform(219.8,138.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#635951").s().p("AAIADIgTADIgCgGIABAAIABgFIAZALg");
	this.shape_233.setTransform(220.9,137.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#675B53").s().p("AgDAAIAAAAIAGgDQACAHgDAAQgCAAgDgEg");
	this.shape_234.setTransform(219.1,133.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#CEC5C0").s().p("AgEAAIAAAAIAMgBIgOADg");
	this.shape_235.setTransform(216.2,134.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#F7F0EA").s().p("AAHgBIgBABIgBAAIgLACg");
	this.shape_236.setTransform(216.4,134.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#B59F94").s().p("AAEAEIABgBIABgCQAHgIgKACIgBAAIAAgBQALgEgCAJIgFAIIgQABg");
	this.shape_237.setTransform(216.5,134);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#BDB4AF").s().p("AgNAFIATgKIAIAAIgDACQgJADgFAGg");
	this.shape_238.setTransform(215.6,131.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#747A76").s().p("AANgGIgEAEIgVAJg");
	this.shape_239.setTransform(212.7,129.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#695F56").s().p("AAWgDIgZgCIAhACIg8AKgAgIgGIgFAAIAGAAg");
	this.shape_240.setTransform(216.7,127.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#EDE6E0").s().p("Ag6AeIADgHIACABIgBAQgAA5gnIAAAAIACAAIgBAAg");
	this.shape_241.setTransform(210.4,130.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#ACA7A0").s().p("AgaAAIAEgBIANAAIAogBIgFABIgPABIgqADg");
	this.shape_242.setTransform(216.8,128.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#686058").s().p("AgFAAIAMgCIAPAAIgrAFg");
	this.shape_243.setTransform(218.7,129);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#BCB2AA").s().p("AAFAJIgEAAIAEgBIABgBIAAACgAgdAAIAdgHIAaACIAFAAIgaAAIgeAFg");
	this.shape_244.setTransform(212.6,127.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#7B736C").s().p("AgcAvIABAAIgBABgAgeAlIABAAIAAABgAAAgqQAMgFAQAAIADAAIgfAHg");
	this.shape_245.setTransform(209.5,131.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#9B7D71").s().p("AgDAAIAHAAIgGABg");
	this.shape_246.setTransform(211.1,125.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#685550").s().p("AgdgTIgDAAIAAABIgEAAIgBABQgGAIgBgCQABgCAGgMIABAAIADAAQAgABAVAPIAKAIIAIAHQAGAJAAALQgcgygtAFg");
	this.shape_247.setTransform(225.5,144.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#B5A39D").s().p("AAtAkQgWg2g0gBQAtgFAcAxQADABgBAEIAAABIABAGgAgugIIACgEQABACAGgIIABAAIAEgBIgJANIgCACQgCAAgBgEgAgXgkIAAABIgDACg");
	this.shape_248.setTransform(225.5,144.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#6D625B").s().p("AgHAAIAEAAIAOgFIAGAJIgiACg");
	this.shape_249.setTransform(223.5,140.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#CBBFBA").s().p("AgCADIgBgHQAKAJgEAAIgFgCg");
	this.shape_250.setTransform(223.6,139.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#B2A19A").s().p("AAAALIAAgEQAQAHgQgOIAAAAIgNgKIAAgBIAGACIAVAQIgOAFIAAgBg");
	this.shape_251.setTransform(223.2,139.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#6C6B69").s().p("AgBAAIgBAAIgEgCIANAFg");
	this.shape_252.setTransform(224.4,138.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#A6A19D").s().p("AAGADIgIgDQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBgBIANAFg");
	this.shape_253.setTransform(229.1,135.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#62534B").s().p("AgDADQADgDAAgDIAEADIgHAEIAAgBg");
	this.shape_254.setTransform(230.6,130.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#615B53").s().p("AgBgBQABABABABIABABg");
	this.shape_255.setTransform(224.7,135);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#666560").s().p("AgGgCQADgBAMAFIAAABIgFgDQgNgDAHAHQgIgGAEAAg");
	this.shape_256.setTransform(224.7,134.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#736A66").s().p("AAHACIgRgEIACAAIATAEIAAABIgEgBg");
	this.shape_257.setTransform(225.6,130.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#F4E8E4").s().p("AAAAAIAAAAIAAAAg");
	this.shape_258.setTransform(224.5,131.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#837671").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_259.setTransform(232.9,139.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#5C5D5C").s().p("AAKAPIgDgEIgIgLQgGgIgHgHIAOAOIAHAEQAIALgCgJIAAgCQAEANgEAAIgDgBg");
	this.shape_260.setTransform(232.5,140);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#B7B3B3").s().p("AADAHIAAgBIADAAIgBgEIAFAMgAABgDIgKgIIAAgCIADABIAIAHIAAACg");
	this.shape_261.setTransform(232.3,139);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#DBD4D1").s().p("AAAAAIAAAAIAAAAg");
	this.shape_262.setTransform(232.6,138.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#6F6E6A").s().p("AgNgTIAcAYIgCAAIgXgTIALAig");
	this.shape_263.setTransform(237,141);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#AF9B93").s().p("AAFAKIgJgTIACAAIAHAKIAAAJg");
	this.shape_264.setTransform(238.9,142.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#8E817D").s().p("AgBABQAIgHgHAIIgBgBg");
	this.shape_265.setTransform(237.2,135);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#544842").s().p("AgFgBIgCgCIgBAAIARgBIgCAGQgBABAAAAQAAABgBAAQAAAAgBAAQgBABAAAAQgDAAgFgGgAgCAAIACAAQACgDAAAAIgEADg");
	this.shape_266.setTransform(237.3,135.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#C9C4C1").s().p("AAHAIIgHgCIgJgLIgCgCIAXAQg");
	this.shape_267.setTransform(234,136.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#6E696A").s().p("AAAAAIAGABQAHABgHgGIAAgBIAOAVgAgTgPIABAAIADADg");
	this.shape_268.setTransform(234.6,137.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#565953").s().p("AAGAEIgIgEIgDgCIALAGg");
	this.shape_269.setTransform(234.6,132.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#4E4742").s().p("AgGgCIATAEIgOgCIgLADg");
	this.shape_270.setTransform(225.2,126.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#73746E").s().p("AACgCIAHAAIgGAFQgYgBAXgEg");
	this.shape_271.setTransform(223.5,126.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#8D8985").s().p("AA+ABIgVAAIhrgBIAIAAIB9ABIgFAAg");
	this.shape_272.setTransform(217.5,125.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#625D59").s().p("AAAAAIAAAAIAAAAg");
	this.shape_273.setTransform(226,129.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#F6EEE9").s().p("AAAAAIAAAAIAAAAg");
	this.shape_274.setTransform(225.5,127.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#868B8A").s().p("AgvgTIgDAAQA3gBAsAjIACAFIAAAAQgsghg2gGg");
	this.shape_275.setTransform(230.6,127.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#8D7E77").s().p("AALAFIgRgFIgGgEIAZAJg");
	this.shape_276.setTransform(228.6,129.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#B5ACA9").s().p("AgKgEQAEABAGADIAFABIAGADg");
	this.shape_277.setTransform(226.8,128.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#686E6E").s().p("AgQgUIAHgJIAPgCQgFABgDAFQgIAFAAAIIAQAaQATAJgMAIIAAAAg");
	this.shape_278.setTransform(239.5,138.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#AFB1B3").s().p("AAAAFIAAAAQAKgGgQgJQAVAFgMANIAAADg");
	this.shape_279.setTransform(241,141.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#A0A09D").s().p("AgIgCQAFgEAEgBIAHgBIAIACIgfAPQAAgIAHgDg");
	this.shape_280.setTransform(240.1,136.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#837E7B").s().p("AAAAGQAAgDgBgGIgIgCQAIgDADAIQAGAGABgMIAAAAIAAAHQgCAEgCACIgCAAIgDgBg");
	this.shape_281.setTransform(242,136);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#959A96").s().p("AgkATIAAgCIgBAAQAAgKAKgGQAGgBAGgCQAHgCAHAAIAngOIhAAYIgJANg");
	this.shape_282.setTransform(246.6,133.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#7D6D62").s().p("AhKAVIACABIAIADIAJgDIAMgBQADgBACgDIABgCIAkgPIgJAJIg1ATgAA2gVIAWgGIgoAUIghAHg");
	this.shape_283.setTransform(247.4,130.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#534338").s().p("AgSAFIAlgLIgYANg");
	this.shape_284.setTransform(257,127.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#878883").s().p("AAggKIAAABIg/AUg");
	this.shape_285.setTransform(253.7,130.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#C6BCB4").s().p("AgDAAIACAAIAJgDIAEgBIgXAJIAIgFg");
	this.shape_286.setTransform(257.2,126.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#EDE4DF").s().p("AhTAdIARAAIgJADgAguARQAXgDARgQIAGgDQAqgMAqgOIgCABIgIAEIgfAMIgyATIgEABIgBABIgkAPIACgFg");
	this.shape_287.setTransform(248.5,129.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#7B6F6B").s().p("AgKgCIAaAAIgfAFQABgDAEgCg");
	this.shape_288.setTransform(266.9,140.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#BCAFAA").s().p("AAEgDQgEADAAADIgDABg");
	this.shape_289.setTransform(265.3,140.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#9B9191").s().p("AAAAAIABAAIAAAAIgBAAg");
	this.shape_290.setTransform(270.3,140.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#C1B3B0").s().p("AAAAAIAAAAIAAAAg");
	this.shape_291.setTransform(270.4,140);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#5E544B").s().p("AhEAaIgNAAIgCAAIgKgBIAJgBIgSgBIgJgDIgRABIgDAAIASgGIgLgIIAlAFIgBACIAAAAQAEAIAGgCIADAAQAEABgCgHIgBgBQBKAHBMgOQAYgCAXgGIAGgCQgyAXg6ACIgBAAIAAABIABAAIBZgEIgOAFQg6gCg3AHIgmACIgNgEgAhCAXQADACADgBQALgCgEAAIgNABgAiZAbIAFgCIAAABIgBABgAikAKIgCgFIgCgGIAYAEIgLABQgHgBgBAHIgBAAIAAAAgACUgRIACgDIATgJQgRANgSAJQAIgEAGgGg");
	this.shape_292.setTransform(258.5,143.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#ACA29B").s().p("AhJAXIAAAAIgMgBIgmgFIgHgGIgMACIgZgGIgHgOIAFAFQACANAOgGIAEgDQBpAiBlgTIAUgBQg0AKgxAAQgYAAgZgDgACagNIAVgMIgDAFIgBABIgUAJIADgDg");
	this.shape_293.setTransform(258.4,142.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#788080").s().p("AgNAGQAjgQgKgLIgDABIADgFQARgBgWAWQgIAHgMAHIgGAQg");
	this.shape_294.setTransform(274.6,142.7);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#584B3F").s().p("AADgBIAOgCIghAHg");
	this.shape_295.setTransform(261.4,125.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#ADA29A").s().p("AgCAAIAGAAIgGABg");
	this.shape_296.setTransform(260.9,128.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#86867F").s().p("AgQADIAhgGIAAACIghAFIAAgBg");
	this.shape_297.setTransform(258.7,128.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#574C3F").s().p("Ag4AFIAagEIgdAHIADgDgAA4gHIAEAAIglACIAhgCg");
	this.shape_298.setTransform(269.2,124.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#7E675A").s().p("AAAABIAAgDIAAgDIABALIgBgFg");
	this.shape_299.setTransform(292.8,130.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#C0A99F").s().p("AAAACIAAgDIABAAIgBADg");
	this.shape_300.setTransform(292.7,130.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#504338").s().p("AgDgBIAHABIgCACIgFgDg");
	this.shape_301.setTransform(289.9,128);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#6B6055").s().p("AAHABQgHgMgJALIgDgBIACgDQAcgHgGARIgCABIgDgGg");
	this.shape_302.setTransform(291.5,128.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#B3A79D").s().p("AAKAKIgIgDIgMgLQAKgLAGAOIADAEIACADIAAAEIgBAAg");
	this.shape_303.setTransform(291.6,128.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#C1BDB7").s().p("AAAgBIAHAEQgYgDARgBg");
	this.shape_304.setTransform(290.4,126.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#92887F").s().p("AikAMIAagLIgFABIAMgCQAJgEAKgBIAXgEIgDAEIgOACIgUAFIgIADIgoANIgVAGgACpAFIhFgYQArAHArAOIACABIAIAGgAC6AGIgIgGQgSADAaADgAAbgWIgEgBQAjgBAiAEg");
	this.shape_305.setTransform(272.5,126);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#5E4D43").s().p("AgCgCIAAAAIAGADIAAACIgGgFg");
	this.shape_306.setTransform(291.7,126.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#9D9B95").s().p("AgDAAQAKgEgEAFIAAABIgGgCg");
	this.shape_307.setTransform(279.8,125.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#5C564D").s().p("AAhAFIAAgBQAEgFgMADIgBgBQgMgBgKACIgtgCIAlgEQAQAEAUAAQAcADgZACg");
	this.shape_308.setTransform(276.8,125.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#778E96").s().p("AABgHIAAACIgBANg");
	this.shape_309.setTransform(295.5,142.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#8A9EA2").s().p("AABAkQgBgDgCAAIABg7IAAgBIABgOIADBTIgCgGg");
	this.shape_310.setTransform(295.3,137.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#B0ADA7").s().p("AgBAAIABgBIACADIgDgCg");
	this.shape_311.setTransform(294.9,129.3);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#84837F").s().p("AgDgXIADAEQADAFABAHIgBgBIgCAVIgBAOgAgDgaIACADIgCAAIAAgDg");
	this.shape_312.setTransform(295.2,131.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#D2C9C0").s().p("AIMJjIgtghIgCgDIAFADIA/AtIABABIABACIgXgPgAoipwIAAAAIAGgBIABABg");
	this.shape_313.setTransform(171.7,186.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#84776F").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_314.setTransform(160.2,230.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#A49990").s().p("AgBAAIgBAAIAFABIgEgBg");
	this.shape_315.setTransform(160.5,230.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#4E4137").s().p("AgBAAIgDAAIAIgEIAAAIIgFgEg");
	this.shape_316.setTransform(151.7,227.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#1E140E").s().p("AABAMIAAgKIgQgIIAAgBQgDgEAGgBQAIgIAGAFQAFANAKALQABAHgHACIgKgGg");
	this.shape_317.setTransform(152.1,226.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#2E281F").s().p("AgGAEIgBgBQAHgCgBgFIABACIAFADIADAEg");
	this.shape_318.setTransform(154.1,227.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#100A08").s().p("AgEAGIABgBQAAgFAGgHIACAKQgCAEgDABIAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_319.setTransform(150.4,219);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#F8EEEE").s().p("AAAgCIABgBIAAAFIgBACg");
	this.shape_320.setTransform(151.5,218.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#372C21").s().p("AgCAjQgDgLAAgNIAAgEIACgYQABADACgBQAEgBACgEIgBAHIAAANIgBAiQgEABAAAEIAAABgAgBglIABgCIAEAHQgGAJAAAFg");
	this.shape_321.setTransform(150.3,221.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#F6F0E9").s().p("AAAABIAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAABIABAAIAAACIgBgBg");
	this.shape_322.setTransform(151.5,215.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#DED5CF").s().p("AgCAYIACgHIABgGIACgCIgBANIgCAGIgCAJgAACgWIABABIAAARIAAAGIgCABgAACgZIAAgLIABAEIAAADIAAAFIgBgBg");
	this.shape_323.setTransform(151.2,217.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#493529").s().p("AAAAAIAAgHIAAgBIABAAIgBAQg");
	this.shape_324.setTransform(150.3,211.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#76685D").s().p("AgBgGIABgBIAAAQIAAATIAAABIgCAaIABg9gAAAgfIAAABIAAgHIAAgKIAAgBIAAgDIAAgDIADAKIgDAOg");
	this.shape_325.setTransform(150.1,216.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#271B15").s().p("AgEAZIAAgBIAEgEIgBAUIgDADgAAAAFIgBgCIgDgCIADgMIABgSQAAgRAEAGIABADIgFAsIAAgCg");
	this.shape_326.setTransform(150.6,213.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#F9F1EB").s().p("AAAgFIABgCIgBAFIAAAKg");
	this.shape_327.setTransform(152.3,206.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#D7D2CC").s().p("AAAACIABgHIgBAIIAAACg");
	this.shape_328.setTransform(152.4,205.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#372D26").s().p("AAAADIABgGIAAACIgBACIAAACIAAABIAAgBg");
	this.shape_329.setTransform(152.1,206);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#5C534D").s().p("AgFA/IgFgIIACgUIACgEIAAgCIAAgBIAAgDIAAgDIgBAAIAGgsIgCgCQgGgHABARIgBAAIAAgCIAAgBIAAgCIAAgFIAEgPIAEAAIABAAIAAgBIACgDIACgKIAAAAIABgCIAAAkIAAAFIgGAKIgCA6IgBAUgAAGg9IADgIIACgEIgBAEIgDAJg");
	this.shape_330.setTransform(151.5,211.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#EAE1DB").s().p("AEaB3IAYAAIgZABIABgBgAkxh4IAIABIgFADIgDgEg");
	this.shape_331.setTransform(189.8,250.5);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#9F8F83").s().p("AgEgBIAKACIgFABQgCAAgDgDg");
	this.shape_332.setTransform(201.5,216.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#DAD1C8").s().p("AAHAAIgNAAIgBAAIAGAAQAJAAAAAAIgBAAg");
	this.shape_333.setTransform(168.4,231.4);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#988C84").s().p("AgbAAIAAAAQAmgBARABQgXAAgVABg");
	this.shape_334.setTransform(172.7,231.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#B9AEA5").s().p("AgMAAIAOAAIALAAIgPABQABgBgLAAg");
	this.shape_335.setTransform(169.5,231.3);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#53463D").s().p("AAKANIgDgCIABAAIgBAAIgpgYIAIABIAHACIAMgCIAFgBQACATAUgHIADABQgCALAOgEIgSAHIgHgBg");
	this.shape_336.setTransform(183.5,220.4);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#9E958D").s().p("AgPACIAPgCIgFABIgBACIgJgBgAAKAAIAAAAIAGgBIAAABIgGAAgAAGAAIAKgCIgIACIgCAAg");
	this.shape_337.setTransform(204.1,229.6);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#A59B98").s().p("AgDADIgBgBIgCgBQADgFAGACIAEAAIgBABQgCAEgEAAIgDAAg");
	this.shape_338.setTransform(199.5,217.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#615950").s().p("AAJgFQABAAABgBQAAAAABAAQAAAAABAAQABABAAAAIgBABQgJgBgCAFIABABIACAAIgFAFIgBABQgegFAogHg");
	this.shape_339.setTransform(198.5,217.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#211A14").s().p("AD1ApQgIgSgNgMIAAgBIgBAAIgCgCQgIgCgHABIgEgKIgagGIgBAJIgFgBIAAAAIgCgKIgvADIgNAFIgNgCIgHAEQhLgBhIALIgNADIiKgLIg6ACIAHgIIAfAFIBIAAIAOgKIASAHIAMgGIABAAIATABIAFAAQAZAAAbgCIAggBIApgDIAHgBIBZgEQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIAIgIIABAAQAEgBADgCIAGADIACADQALABAFgQIALAIQADgPAIAGIABAAQAAANAKAJQAEAEAHADIAEADQAIAJAMADIAZAIIgHAJQgBAHgIABIAAAAQgFgFAAAEQgCAIABAJIgCgDg");
	this.shape_340.setTransform(189.1,229.9);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#ABA29C").s().p("AE8CbIgEgHIgBgBIAAAAQgHgSAAgYQAHgBABgHIAKAAIACALIgPAAIgDABIAYA1IAAACQgIABgGgKgAjjBDIAFgCIACgBQAZAFAaABIgRAAQgTAAgWgDgAiQBAIAFgEIAtAFIgrgCIgKADIADgCgAAuA9IAWAAIALgBIAIAAIgrADIghABIAjgDgADPAoQAFgEADgFIAAAGIgEADgADjAbIARgEIAFADIAAADIgVAAIgLAHgAlHgQIADgGIAAAIIABAJIgDABgAlJgvIACg8IAIgKIgDAWIgBARIgBgEIgBALIgBgBQAAAAAAABQAAABAAAAQAAAAAAABQAAAAABAAIAAABIgBAbIAAAIIgBAGgAk/ifIACgEIAAADIAAAPIAAALQAAAGgCAFg");
	this.shape_341.setTransform(184.1,222.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#6D5D55").s().p("AgCAAIACAAIADAAIgFAAIAAAAg");
	this.shape_342.setTransform(193.1,228.3);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#675D54").s().p("AFDBsIgMgLIgMgUQAHAKAHgBIAfAiIAEACIABAEgAEhA5IgGgIIgDgHQAAgIACgJQAAgDAFAFIAAAAQAAAYAIASIAAAAIgGgMgAg/ANQgSgBgTAAQgRgDgpABIAAABIgQACIgGAAIAAAAIgdAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgPABIgBgBIgUgGIgHgDIgBABIg+gQIgGgDIAQABIgDgEIAIADQAMACAMAEQASAHAQgHQAiAFAZgCIALgBQAGgBAFgCIAJgDIArACIAcABIADAAIgNAGIgSgHIgNAJIhIACIgfgGIgHAIIA6gCICJALIgXADgAEBAJIABAAIAAABIgBgBgADsAEIgDgDIgBAAQgQgMgBALIgGgBIAAgJIAaAGIAFAJIgEABgAB6gCIAGgEIAOACIANgGIAugCIADAJIgEgBIgBgBIABgBIgKACIgGAAIgRADQgWgBgXAAgABGgQIAAABIgrACgAlbhVIAEgJIABAMIACgBQACAOAEANIACAEQgIgFgIAIgAlahpIABgUIABAUIgDAHg");
	this.shape_343.setTransform(185.7,230);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#989590").s().p("AgDABIgFgCIARADIgMgBg");
	this.shape_344.setTransform(188.5,221.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#A79991").s().p("AgGAEIAQgFIAFgCIABAAIAEADIgVAEIgFAAgAgTADIAEgCIADACIgHAAg");
	this.shape_345.setTransform(185.9,221.4);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#8B827A").s().p("AhMAKIATAAIgMACgAAGACIAMgCIAAAAQASADATgBQgJADgLAAIg+ACQASgCAPgDgABCgBQAFgDAFgFIABgCQgDAGgIAEIAAABIAAgBg");
	this.shape_346.setTransform(188.5,218);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#BBB1AD").s().p("AgGAAIANAAIgNABg");
	this.shape_347.setTransform(194.5,206.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#B9A8A0").s().p("AgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQgCgBgBAAg");
	this.shape_348.setTransform(187,208.2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#54483B").s().p("AgCABIABgCQAHADgEAAIgEgBg");
	this.shape_349.setTransform(197,215.9);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#A39C96").s().p("AgBABIgKgBIgBgFIAAAAIAGgBIAEAFIAPAIg");
	this.shape_350.setTransform(198.1,215);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#5D5752").s().p("AgJgDIAOAEIAFADg");
	this.shape_351.setTransform(198.9,215.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#110C09").s().p("AggAhIgFgBIgSgFIgBAAIgFACQgOAFACgNIgCgCQgWAJgDgUIAagCIBAgDQAKAAAHgCIAHgBQADAAABgCIAAAAQAIgFAEgGQADgDAAgEQAPAEgNgIIAAgIIAKADIAVAJIAEACIAGACQAGAIAGgEIAEABIAIABIgDAKQgWAAgXAEIAGgEQAIABADgGIAAgBIgDAAIABgCQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQgqAIAeAEQgYAFgWAIIgNADQgQACgGALg");
	this.shape_352.setTransform(193.3,218.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#605247").s().p("AgQgDIAhADIgRAEg");
	this.shape_353.setTransform(201.2,203.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#58554D").s().p("AgdAmIAIgPIgCAJQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAgAAoglIgaAbIgXAVQgFACgEAFIAEgHIgZAIg");
	this.shape_354.setTransform(206.6,199.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FCFAF9").s().p("AAAAAIAAAAIAAAAg");
	this.shape_355.setTransform(199.5,200.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#60574C").s().p("AAAAAIAAgEQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAgBIgDAHIgCAIIACgIg");
	this.shape_356.setTransform(173.5,209);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#2F2217").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_357.setTransform(170.2,210.1);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#BFA495").s().p("AAAAAIAAAAIAAAAg");
	this.shape_358.setTransform(170.3,210.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#64574D").s().p("AgaAWIACgCQAHgDAHgFIACgBIgHAWQgGgFgFgGgAARASIAKgCIgBACIgKACIgCACgAAZgeIABgCIAAAGg");
	this.shape_359.setTransform(172.9,207.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#9B948E").s().p("AiaAsIACgCIAKgCIgKAGIgEACgAhSAEQAOgFARgHIA4gGIgFAEQgOgBgQADIgDABIgDAAQgZAGgWAMQgIAAgIABgABbgXIgQABIAUgDIAQAJIATgDIAFgBIABAAIgYAJgACOgbIACgIIADgGQADgEAGgCIABAAIgKAJIgEAPIgDABQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBAAgBg");
	this.shape_360.setTransform(189.9,205.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#7C6F65").s().p("AgDgEIABAAQACAEAEAAIgGAEg");
	this.shape_361.setTransform(178.5,204.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#DDD1C9").s().p("AimA1IACACIgCACgAAoAaIAAgBIADgBIAAACIgBABIgCgBgABbAAIAEAAIACgBIgGACgAClg4IACAAIgCACg");
	this.shape_362.setTransform(194.7,198.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#9EA1A1").s().p("AgBAMIABAAIAAAFgAgBgMIAAgCIADgCIAAADIgCABg");
	this.shape_363.setTransform(178.2,199);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#685E58").s().p("AADAFIAAACIgEACIAEgEgAgCgGIAAgCIAAAAIABACIgBAAg");
	this.shape_364.setTransform(178.2,196.5);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#998D84").s().p("AAAAAIAAgCIAAAFg");
	this.shape_365.setTransform(176,203.6);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#819294").s().p("AgFAfIAAgBIAAABgAAFgeIABAAIgBADg");
	this.shape_366.setTransform(178.5,192.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#B6A89F").s().p("AgGAGIAEgIIABAAIAIgEIgBAEIgDADIgDAEIgEACIgCgBg");
	this.shape_367.setTransform(179.8,180.7);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#75645A").s().p("AgNASQADABADgCIAFgEIgGANIgKAFIAFgNgAAAAEIASgiIABAAIgTAmIAAgEg");
	this.shape_368.setTransform(180.5,179.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#676061").s().p("AgBgBQACgDAEgCIgEAGIAAAAQgEACgFAGQABgHAGgCgAAFgGIAEgBIgCACIgCACg");
	this.shape_369.setTransform(183.5,177.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#B6B2AD").s().p("AgYA+IAXhBIgEAOIgSAzIgBAAgAAYg8IABAAIgBAAIAAADIgEADg");
	this.shape_370.setTransform(181.6,183);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#B5A19A").s().p("AgGAKQANgLgDgGIACgBIABgBIAAAIIgMALIgBAAg");
	this.shape_371.setTransform(183.1,175.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#666159").s().p("AADgGIgDAHIgDAGg");
	this.shape_372.setTransform(169.8,170.2);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FBF7F4").s().p("AAAAEIAAgBQAAgFgDgEQADABAEAGIAAABIAAAFIgEgDg");
	this.shape_373.setTransform(202.8,176.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#776965").s().p("AgGAEQAGgNAJAHIADACIAAAAIgBACIAAAAIgWADg");
	this.shape_374.setTransform(203.6,173.5);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#786055").s().p("AACAEIgFgMIAAgBIAHAKIAAAJg");
	this.shape_375.setTransform(203.1,176.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#72625B").s().p("AAGABIgCgBIAKABIAAACgAgMgBIAEABIgEAAg");
	this.shape_376.setTransform(201.3,175.3);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#84817E").s().p("AgVgGIAZAEIADAEQAFAGAKABIgGABgAACgIIABgBIAAACg");
	this.shape_377.setTransform(200.7,173);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#D0C8C5").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_378.setTransform(201,167.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#5F544F").s().p("AAEgCIgVAFIATgKIAQAQg");
	this.shape_379.setTransform(197.8,169.3);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#7F665B").s().p("AASAPIglgdIADABIAkAaIAAACIgCAAg");
	this.shape_380.setTransform(197.8,173.6);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#C0BBB8").s().p("AABgCIAGgDIgMALIgBAAIAHgIg");
	this.shape_381.setTransform(192,171.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#6E6761").s().p("AADgJIACADIgLAMIgMAEgAAQAFIgJgJIAMAKg");
	this.shape_382.setTransform(194.1,171.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#A6A19E").s().p("AAPgIIAAgBIACAAIAMgEIAAACIg2AYIgDABg");
	this.shape_383.setTransform(190.4,173.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#D3C5BF").s().p("AAvAgIAAgGIAAgBQgEgHgFgCIgFgGIAIACIAIANIACAGIAAAFIgEgEgAgjgYIgPAFIAAgBIANgPIABgBIAAABIACACIAJAMIAkAcIgBAAg");
	this.shape_384.setTransform(198.5,174.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#78726D").s().p("AgBAAIAEgBIgFAEIABgDg");
	this.shape_385.setTransform(191.7,168.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#B39C92").s().p("AgBABIADgDQgBAFgBAAIgBgCg");
	this.shape_386.setTransform(189.5,163.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#64524C").s().p("AgDABIABABIgBABIAAgCgAADgCIAAAAIgBABIABgBg");
	this.shape_387.setTransform(189.5,163.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#231E1A").s().p("AgDgDQADgCABAEIADABIgBABIgFAEQABgFgCgDg");
	this.shape_388.setTransform(189.4,162.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#D3CDC5").s().p("AAAAAIAAgEIABAAIgBAJg");
	this.shape_389.setTransform(194.7,155.6);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#4C4748").s().p("AAGAMQgFgIgFgEIgDgBIAAgKIAQAXg");
	this.shape_390.setTransform(187.7,159.6);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#7C7A7A").s().p("AAGAKIgCgDQgEgDAAACIgBgGQgCgEgDgFIACAAIACAAIAJATIgBAAg");
	this.shape_391.setTransform(189.1,161.9);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#AC9F9A").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_392.setTransform(188.7,160.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#645B54").s().p("AAEAIIgBgCQgFgMgFgDQAGADAJAPIAAABIgEgCg");
	this.shape_393.setTransform(187.6,157.4);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#6C5E57").s().p("AACALIgFgFIgBgDIAAgCIAAgLQANAVgFAAIgCAAg");
	this.shape_394.setTransform(197.7,166.3);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#626A6D").s().p("AAJAPIgXgdIAAgCIAdAig");
	this.shape_395.setTransform(199.4,165.8);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#F4E9E8").s().p("AAAgEIAAACIABAHg");
	this.shape_396.setTransform(198.5,163.8);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#606261").s().p("AgKgVIAAgCIAAgBIAVAxg");
	this.shape_397.setTransform(201.9,162);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#5E493D").s().p("AAAAHIAAgTIABAZg");
	this.shape_398.setTransform(203.7,156.1);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#DACFCE").s().p("AAAAAIAAAAIAAABg");
	this.shape_399.setTransform(197.2,149.6);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#DDD4CF").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_400.setTransform(202.8,153.5);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#6F8186").s().p("AAXA3IgBgBIAMACIgBAGIgKgHgAghg9IABAAIAAAJIgBgJg");
	this.shape_401.setTransform(207,157);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#A79E9A").s().p("AAvBcIAAgBIgCgDIAKAAIgHAEgAgSBVIAYAEQgFABgDAAQgIAAgIgFgAA0A8IgBAAIgCgEIAAgBIAFAGgAg2hBQgCgOAEgMIACABQgBAaAJAbIgCABQgHgPgDgOg");
	this.shape_402.setTransform(205.6,162);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#615C59").s().p("AgMBCIAAAAIAAACIAAgCgAAKAVIgDgPIAAgCIgHg2IAAgFIgDAEIAAgEIgBAAIAEgKIACgBIALBUIAAAVQgOgeALAMg");
	this.shape_403.setTransform(202.1,153);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#9DB3B7").s().p("AAAAbIAAgBIAAgtIAAgBIAAgGIAAA1IAAAAg");
	this.shape_404.setTransform(203.6,148);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#64554E").s().p("AAAAAIABAAIgBAAIAAAAg");
	this.shape_405.setTransform(199.9,143.4);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#58524F").s().p("AgGBQIAAADIAAACgAAGhTIABgBIAAABg");
	this.shape_406.setTransform(198.6,155.7);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#735147").s().p("AAKBMIABACIAAABgAgKgEIAAgXQAAgVADgTIACgLIAAABIABAAQgJAoAEAmg");
	this.shape_407.setTransform(199.9,155.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#BAA9A5").s().p("AADALIABgBIAAgEIABgKIgBgCQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAIAAABIgFADIAEgDIABgCIAAgBQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIABADIAAALIAAABIgBAFg");
	this.shape_408.setTransform(195.7,144.3);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#8C8C87").s().p("AABAFIgBgFQgBgBABgEIABALIAAgBg");
	this.shape_409.setTransform(187.4,152.3);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#D6CFCC").s().p("AAJApIgDgDIACgCIAEAIIgBABgAgMgiIAAgKIAHAPQgEgDgDgCg");
	this.shape_410.setTransform(192.8,157.5);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#3A302B").s().p("AAAAIIgBgFIgBAAIAAgBIgBgBQgCgKACABQADABAFAMIgCACIgBACIgCgBg");
	this.shape_411.setTransform(192.8,153.4);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#4B4340").s().p("AgBAEIgEgKIAAgBIgBgFIABAAIADAGQABAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIABgCIAGAVg");
	this.shape_412.setTransform(193.2,155.1);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#3F3832").s().p("AgBACIABgCQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIgCADIAAAAg");
	this.shape_413.setTransform(194.6,143.6);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#89959A").s().p("AABgOIADgCIgHAhg");
	this.shape_414.setTransform(189.5,143.9);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#75574B").s().p("AgNAKIAHgFIgHAGgAAKgJIABgBIADAAIgBABIgDAAg");
	this.shape_415.setTransform(174.2,163.1);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#C0A69B").s().p("AAMgLIAAADIgBABIgBAAIgPANIgHAGg");
	this.shape_416.setTransform(174.1,163);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#BBA096").s().p("AgDAOIAAgDIADgYIAEAUIgEAHg");
	this.shape_417.setTransform(175.8,160.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#7A5A4F").s().p("AABAKIgIghIAAgBIABgHIAOA/g");
	this.shape_418.setTransform(175.4,158.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#ACB7B5").s().p("AAAADIAAgJIAAAKIAAACIAAABg");
	this.shape_419.setTransform(179.3,160.4);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#70888B").s().p("AgDgNIADAFIAAAEIAKAfIAAAMgAgJglIACAAIAAAGIAAADg");
	this.shape_420.setTransform(178.1,156.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#7B675D").s().p("AgBAAIABAAIACgCIgBAFIgBABIgBgEg");
	this.shape_421.setTransform(183.8,152.7);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#888179").s().p("AgCgBIACAAQAAgOADALIgBAOg");
	this.shape_422.setTransform(184,150.5);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#5A544F").s().p("AAAAEIgDAAIAAgCIgCgCQAIgIADAJIAAAAQgFgJgBAMg");
	this.shape_423.setTransform(183.7,149.8);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#BBA8A2").s().p("AgCALQAHgGgHgIIgCgIIAEAAIAEAMQABADgDAEIgCACIgBABIgBAAg");
	this.shape_424.setTransform(183.8,151.5);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#BFAEA7").s().p("AAAAAIAAAAIAAAAg");
	this.shape_425.setTransform(182,147.8);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#6F5F57").s().p("AgDABIAAAAQAKgUgFAVIAAABIgBAGIgEgIg");
	this.shape_426.setTransform(182.4,147.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#503C35").s().p("AABAIQAGgVgKAUIAAAAIgBgCIAAgBIABgJQAIgFAAAGIAAABIgBADIgDAJIAAgBg");
	this.shape_427.setTransform(182.4,147);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#596B72").s().p("AAAAWIAAAAIAAgBIgCgrIABAFIAEAmIgCACIgBgBg");
	this.shape_428.setTransform(185.7,149.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#849299").s().p("AAAANIAAgDIABgbIAAAeIgBAFg");
	this.shape_429.setTransform(185.5,145.9);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#C6A699").s().p("AgCAWIACgrIAAAAQAFgDgDAJIAAABIgCAZIgCALIAAABIAAgBg");
	this.shape_430.setTransform(182.2,145.2);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#8C8783").s().p("AAFAEQACgHgFADIgBAAQgBABgBABIgBAAIgGABIAKgHQALgEgIANIgBAAIABgBg");
	this.shape_431.setTransform(181.9,143.1);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#909FA1").s().p("AgIAlIABgJIABADIAAABIAAAGgAgCgZIALgMIgEAIIgBADQgEACgDADg");
	this.shape_432.setTransform(178,149.2);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#AF8D7F").s().p("AAAgBIAAgJIABAOIgBAHg");
	this.shape_433.setTransform(174.5,154.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#4E686C").s().p("AgBAUIABADIAAAIgAgDgSIAHgMIgBADQgDAEgDAIg");
	this.shape_434.setTransform(177.2,149.7);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#9F948B").s().p("AAAADIACgHIgDAJIABgCg");
	this.shape_435.setTransform(175.5,147.1);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#DED6CF").s().p("AgIAMIAAgBIAAgDIATgWIgGANQgCADgDADQgFAEgFAGIACgDg");
	this.shape_436.setTransform(159.5,186.6);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#5D5D5C").s().p("AgLASIABgFIAGgCQgGANgKAMIAJgSgAAQgcIAFgGIgFAJIAAgDg");
	this.shape_437.setTransform(161.4,180.5);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#7D6355").s().p("AAMgWIAAAAIgQAiIgHALQALgXAMgWg");
	this.shape_438.setTransform(165.5,176.5);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#9A867B").s().p("AhuDjIAAADIAAABIAAgEgAhgCQIgBAAIABgCIAPgvIgOAyIgBgBgAgrgBIAAABIgEAFIAEgGgAgRgyIAGgDIgCAFIgJASIgEAEIgKALIATgjgAAPhpIAYgjIAAABQgKASgKATIgEAGIAAgJgABvjmIAAABIgCACIACgDg");
	this.shape_439.setTransform(161.6,187.3);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#1A120E").s().p("AAAAAIAAAAIAAAAg");
	this.shape_440.setTransform(116.9,123.8);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#A08B82").s().p("AgxAsIACgEIBhhTIgTAYIhPA/g");
	this.shape_441.setTransform(181.8,140.8);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#9E9E9B").s().p("AAAAAIAAAAIAAAAg");
	this.shape_442.setTransform(187.6,141.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#5C504A").s().p("AAKA5IAFgvIACgKIAFgHIgKBAgAgVAoIABAAIAAABgAAMgUIAAABIgBAAgAABg5IAAAAIAAABg");
	this.shape_443.setTransform(187.9,147.8);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#67615D").s().p("AgNAHIACgJQACgKAEgJIABABQgBADAAADIgBADIgDAKIAAABIgDAaIgBgTgAANgVIABgFIgBAFg");
	this.shape_444.setTransform(186.7,144.2);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#C7B7B0").s().p("AAAADIAAgFQAAABAAADIAAABIAAAAg");
	this.shape_445.setTransform(188.3,140.7);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#755B4F").s().p("AAEgJIAFgDIAFAAIgbAZg");
	this.shape_446.setTransform(186.5,137.4);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#C8BFBA").s().p("AAAAAIAAAAIAAAAg");
	this.shape_447.setTransform(187.3,138.2);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#917063").s().p("AALggIABAFIgSA1IgFAHg");
	this.shape_448.setTransform(190.8,144.3);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#716867").s().p("AgHAEIACgGIABgDIAFgEQAGgDACAHQACACABAEIgBgDQgIgIgEAHQgFAEgCAIIgDACg");
	this.shape_449.setTransform(190.9,141.2);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#575048").s().p("AABgPIABAAIAEgCIgBAOIgKAVg");
	this.shape_450.setTransform(194,141.6);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#9E968F").s().p("AgCAAIgBAAIAAAAIAAAAIAAAAIAIABg");
	this.shape_451.setTransform(194.1,137.5);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#68625F").s().p("AgQANIAWgCIAQgMIAAABIgNAOIgeACgAAWgPIAAABIgVAOg");
	this.shape_452.setTransform(189.2,136.9);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#635248").s().p("AgSAGIAmgNIgnAQg");
	this.shape_453.setTransform(191,134.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#AB9E96").s().p("AgTAIIABgBQASgIATgGIABACIgmANIgBAAg");
	this.shape_454.setTransform(191,134.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#9B8276").s().p("AgHAFIAOgJIABAAIgBADIgIAGg");
	this.shape_455.setTransform(188.2,135.6);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#4D4440").s().p("AgEAAIgCAAQAEgFACAFQAAACAFgEIABACIABACQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQgDAAgGgEg");
	this.shape_456.setTransform(195.3,141.3);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#BDB2AE").s().p("AgDADIAAAAIADgDIAAgBIABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIgEAEIgDAEIgBABg");
	this.shape_457.setTransform(196.3,142.3);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#B6B0AA").s().p("AAAAAIAAgDIAAADIAAAAIAAABIAAADIAAgEg");
	this.shape_458.setTransform(196.6,140.4);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#C9BEB9").s().p("AgtABIAAAAIAAAAgAAtgBIAAAAIAAABIABAAIAAAAIgBAAg");
	this.shape_459.setTransform(203.4,140.6);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#1F1410").s().p("AAAAAIAAAAIAAAAg");
	this.shape_460.setTransform(199.4,139);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#C4BBB5").s().p("AgEADIAAgCQAEgEAFABIgCACIgGAEIgBgBg");
	this.shape_461.setTransform(199.8,138.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#7A716D").s().p("AhbBwIADADIAgAtIAAACgAAGgzIABAAIgBAGgAg2g0IABAAIgBABgAhjg+IABABIgCABIABgCgAAEhVIAAAAIgEgCIAKgCIAAACQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgDAAgAAyhjIABgBIAAABgAgyhvIACgBIAAACgABViMIAAgBIAAABgABkifIABABIgCAAIABgBgABTihIABAAIAAABg");
	this.shape_462.setTransform(202.9,150.4);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#5D534E").s().p("AghgCQAhgDAgAIIACABg");
	this.shape_463.setTransform(199.9,133.4);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#978A85").s().p("AAAAAIAAAAIAAAAg");
	this.shape_464.setTransform(200.6,135.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#514944").s().p("AAGAeIAHgXIACAHIAOgMIABgBIAIgDIgQARIgJAJIgHAGgAgDAMIgNgQQAEgDABAEQAFAGAEgDIABAAIABgCIgOgHIABgBIgEAAIgJgEIgBgBIgBAAIABgBIABAAIAEgBIASAIIADgCIABgDQAFgFgBgBIg0ACIAAgBIAFgEIArgGIAAAAIAMAIIAgAGQAFADAAADQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAABQgEABgCgDIAFgEIgLgFIgIACQgNAEgCALIAAACIgLAFIgBAAIgEADgAgpgIQAEgEAHgCIgEADQgRAIAKANQgKgKAKgIg");
	this.shape_465.setTransform(196.4,138.8);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#0D0908").s().p("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ARgRIAUgSIACgCIABgBIABgCIAHgGIARgPIABAAIADAAIABgBIAGgHIgPhBIgDgQIAAgDIACgVIAGgeIABgBIAAAAIAFgMIAGgIIAEgFIABAAIBRhBIAdgaIALgJIAogSIAAgBQARgGARgBIABAAQAhgEAjAHQABAAACgEQAAgbASgUIAFgGQAUgTAcgCIABACIBtABIAVAAIAFAAIAHgBIACAAIAEABQA3AFAsAkQACAJAGAHIADAEQAIAIAKADIAHABIAFABIAMAGIA1gSIAIgJIACgCIAEgBIAhgHIAogTIANACIAbgPIAHgDIAjgJIAdgHIArgHIAMgBIAkgCIBBACIAJABIBFAaIAaAEIAAgCIABABIALAGIAKAIIAEAGIAAADIAEA0IAAABIgBA9QADAAACADIACAGIAAACIgDASIgIA1IgIAcQgKAegCAhIgCAWIgBAJQgKAOgDAUQgDANAAAQQgGAHgBALIABgJIgFAZIgNAiIgBABIgCAFIgLAeIgEAIQgEAEgCAGQgCAEAAADIgWAwIApBLIANAhIAEAhIADAYIAAABIAHBVIAVASIAkAfIAEAMIADAIIAAABIAdAMIAgAgIAWANIAVAYQAAAXASAQQASAPAaAAIAAAAIAAABIAAAAQgWANA9ATIANAFIACABIAEAEIAJACIADADIAFAFQgLgGgMgEIgQgGQgXgCgWABQgIgGgDAHIgJABIgBgFIgEgBIgKAEIgLACIgOgFIgTAFQgkgCgeAUIgEACIgQALIgLAFIgyAfIgRAKIgIAFIgaAMIgGAKQgHABgEAFIAAABIggAXIgfAUIAAgBIgDACIgXARIADABQADACgEAFIgBABIgNANQgRgCgKANIgCABIgEACIAAgBgAoBC+IgCAEQgHASAJgSIADgHQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABgAnTCZIAIgFQAMAFAMgLIAFACQAPADAOgCQAfgGAegHIACgBQApgFAjgNIAAAAIABAAIACABIABAAIALADIAjgbIkEAoIAAADQAAAEACAEIAAAEIACgCgAnVBwIABgFIgBAAgAmYh9QgEACgEADQgGAEgBAHQgFAFgDAIQgCAIgBAJIgBALIgXBCIAAACIgKAZIgCAbQgBADABADIgBACIAAACIACAAIABAEQACADACABIAAAEIAAABIgGAEIAAABIAAAOIADAAQCQgVChgUIAAgCIAagUIACgBIAFgFIABgBIABgBQAHgFABgFQACgEgDgEQAFgJgFgQQgBgEgDgDQABgJgHgFIgHgBIAAAAIAAgBQgFgOgKgKQgIgIgJgDQgHgIgLgGIgCgCIgOgJIgHgHIgDgDIAAgFIAAgJIgJgMIgKgBIgFgDIgIAAIgFgBIgmgbIgMgNIgBgCIgBgBIAAABIgCgDIgXAVIgCABIAAABIgtAXQgQAEgOANIgEABIABgBgAjOBVIgFADIABABIAFgEIgBAAgAjMiKIAFAOIADADIACAGQAEAJAFAEQAEAEAGAAIAkAiIAKAHIADACIAWAQIABABQAWAHAWADQApAEAmgJIAFgBIAagKIARgGIAIgCIALgGIADgDIAjgUIAaghIASgUQAWgPACgeIAAgFIAAgEIACgIIgDgYIgBgGIgEgSQgBgGgDgFIgGgWIgog3IgHgGIgeghIgIgJIgNAPIgDAAIgXgKIgRgJIgdgDIgHAIIAAABIgEAKIgCgBIgBAAIAAAAIAAgBIgBgCIAAgIIACgIIAHgCIAugJIABABQAOAPAJABIAEACQAEACADgEQACgDABgFIACgDIgEgSIAGgMIgDgRIAAgCIgBgDIgKgUIAAAAIgDAOQgJADAEAKIABACIACAHIgCAdIgRgUIAAgBQAAgEgCgBQAAgLgHgJIgHgIIgLgJQgXgOgdgBIgEAAIgBAAIABgCIAigCIgFgLIgXgSIgbgMIgOgHIgYAOIgcAMIAbgWIAPgUIAFgJIAEgFQAEgHgLACQgJADgHgDQgRAFgMAKIgBACQgFAAgEAFQgEAEAAAHIgBABIgEAJQgDAGgBAIIgBADIgIgLIAQgiIAOgPIgLAJIgBABIgBAAIgOAJIgFALIgEAGIgDgNIAEgKIAogiIAhgOIAsgHIgPAAIAGgBIgrABIgMAAIgFADIgbAOIAAABIgmAxIgHAFIgBABIgCAAIAAABIgYAQIgHgLIgcgIIAAgBQgIgDACgHIABAAIgTgLIhEARIgVAQIgTAOIgBAAIABAAIgFAEIAggDIANgPIA2gCQACABgFAFIgDADIgDACIgSgHIgFABIAAAAIgCAAIgBABQgHADgEADQgLAIAKAMIACADIABAAIABAAIAVgTIANASIgBAKQgEAFgBgCQgDgHgFAFIABgOIgEACIAAAAIgIAjIgFAHIgBABIABgBIALgHIgbBLIAIg3QgHAPgEAQQgDAMgBAMQgBAKAAAKIABALQACAVAGAWIAUAeIADADIAiAzIABACIAIAFQAIADgRgaIgKgQIgfhQIAKAIIAAABIAHAZIAQhyIAMgUIgBgDIgBgBIABAAIAGgmIAHgFIAAAAIAAAAIgKAgIATgFIACgCIAAABIAAAAIAGgCIAMgNIApgUIhFAJIAAgBQAYgMAaABIADAAIAQABIAAAAIABABQALACALAEIAAACIgpAIIgJACIADABIABAAQADACADgDIAWAAIAqgMIACAFQACAFgBAEIAAACQgBAFgGAEIgUgIIgXAEIgGAGIgPAPIAAAGIAAAGIAAABIgBAvIAAABIABAJQABARADAOQAFAYALAUIAFAHQAOAVARAFIACABIAKAHIgNgBQgTgDgOgNIgHgGQgHgJgDgKQgDgIAAgIIgDgaIgLhXIgCABIgGALIABAAIAAADIAAABIgBABQgIAVAHARIACAEIAAALIgEAAIgBgBQgFgEACgIIgCgDIgFAMQgDANACANQACAOAIAPIABgBIADAJIAAABQAGAOAHAOQAPAbAZAdIgegJIAeAfIAggSQgEADAAAGIAAAMQgKgMgQASIgUgNIgTgUIAAAAIgNgSIgKgOIgDgGIAAAAIgFgKIgEgHQgKgVgGgXIgEgSIgCALIABAJIAAAIIgHgqIgCgQIABARIgEAAIgCARIARBNIABAEIAYAgIAPAWIgKgFQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABIAEAEIAWAHQgEgBgEACQgEAAgDADQgHAEgBAHIgBABIABABIAEAGIgDgBIgagEIAnASIAYgDgABcgwIAugbIAFgFgAlHi5IgJAKIAAAAIAOgNIgFADgAkci7IAXAJIgbgMgAj8jAIgQgSIgVANIAXgHgAjxkoIAXAwIgXgyIAAAAIAAAAIAAACgAjukGIAAgCIgCgCgAlznzQgLALgHAOQgEAJgCAKIgBAMIAAATIABADIACAuIABABIACABIALAHIASAcIADgUIAKhCIAUg4QgBgFgCgDQgCgGgGACIgGAFIgCADIgTAAQABgEgBgBIABgNQgDAAgDADgAkElVQgEgnAIgpIABgBIgBABIgBgBIgCALQgCATgB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");
	this.shape_466.setTransform(225,189.5);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#EEE4DE").s().p("AgLAEIAXgHIgPAHg");
	this.shape_467.setTransform(195.5,134.9);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.rf(["#FFFFFF","#000000"],[0,1],126,-65.7,0,126,-65.7,819.2).s().p("AifCNIAAgBQAAgJgCgHQAGgMADgPIAAgCIAAgBQABgIAEgGIAAgBQABgKgFgEIAAABQgJAHgFAKIAAACQACATgJAPIAAACIAAABIAAAAIAAACIAAABIgCACIgVgJQgHABgJAGQgIAGgKAFQgGgGAGgPQAQgoADgxQAAgJgHgBQgEgBgDAHIAAAAQgIAUgGAVIABAAIAAABIgCARQADAFACgKQACgIgBgEIAAgBQADgIACgGIABgBIABgDQABAAABABQAAAAAAABQAAAAAAABQAAABAAABIgGAbIgBAFQgDALgDgGIgBAAQgEAHAAAJIgBAAQgEANgHAIIgBAAQgJgDgEgKIgBgCIgBgBIgEgDIAAgBQgMgSgHgUIAAgBIAAAAQAIgKgKACIgBAAQgHgHAAgMQACgDgBgGIAAgBIAPgVIAEgFIAAgBIAMgBIABAAIAAAAQAJAEAHgBIAAgBIgVgPIAGgKIAAgBIANgMIALgFIAAgHIAGgHIABgBIANgLIAIgBIARgSQAXgNAUgRQAagVAdgQIATALIACACIABAAQAJAEALADQARAFAWABIABAAIAKACQANABARgBIAKgBIAUgDIABAAIABAAIAFgCIAigHIAEgBIARgEQAMgDAHABQgIAUgRATIAAABIgBAAQgGAKgIAIIAAABIAAABIgBAAIgeAfQADAGAFACQAFABAHgEQAEgBAEAAQABAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAIgFAGAFIAAABIAAABIgBAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQADAJAGAAIAFgBIAHgDQAOgIAKAFQAKAAAAgLIAAgBQAUgKAQgPIABgBIAGACQAPADAVAAIAEAAIAFABIADACIgGACQgOAGgPABQgEAAgDACQgCABgBAEQAHAHARgCQAIgCAKADIAMAEQgHALgBAPIAAACQAGAGAHAFIABABQAAAJAKACIAAABIAAAAQgMARgOANIAAABIgBAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQACAMAMgHQAMgIAHgMQADgLAIgLIAAAAQAIgDAIACIABAAQAAAFgJADQgHADAFAKIgBAAQggAsguAdIAAABIgBABQgJAQgTAHIAAABQgTAFgQgCIgKgBQgggEgfAFIAAABIAAABIgBAAIAAABQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAAAIgOAHIgDgDQgKgMgKAIIAAABIAAABQgEACgCADQgFAHgGADIgIACQgLACgGAAQgmAAgYgSIAAgBIgKgaIgBAAIgGAFIgDADIAAABQgCADABAFIgBAAIgLAMQgHAIgKAGIgKAGIgBAAIgJABQgRAAgGgNgACLAPIgFAFIAAABQACANAMgCQABgDgBgDQgDgLgEAAIgCAAgABxgDQgDABgDACQABAFAFABIADAAQADgJgFAAIgBAAgAAjgLIAAACQADAJAOgBQACgEgDgDQgDgFgEgBIgCAAQgDAAgEADgAhCgSIAAABIAAABIgCADQAAADACACIABAAIAAABQAMADAJgHIgBAAIgIgEQgFgDgGAAIgCAAgAhfg1IAAACQACAGADAEIABABQACACAEAAIAEAAIAAgGIgCgHIgCgDIgBgBIgEgBQgDAAgEADgAgMheQgEAAgEACQAAABAAAAQgBABAAABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAAAIABAAIABABIABAAIAAABQAHAEAIAAIAAgBIAAgEQgEgKgIAAIAAAAgAAWhlIAAACQAAADABACQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAIAHAAIACAAQAAgIgEgCIgDgBQgDAAgEACg");
	this.shape_468.setTransform(45,195.7);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#666666").s().p("AyEE/IABgEQAEADADAEQABAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQgDAEgCAAQgEAAABgJgA2FE1IABgEQAEACAEAEIAAADgAV9CyIAJAFQgEAEgCAAQgDAAAAgJgAvYjIQgFgHAFgHIACgDIAGACIADADIgBAIIgCAEIgIAAgAxajVIABgEQAEACADAEQAAAAABABQAAAAAAAAQAAABAAAAQgBAAAAABQgDAEgCAAQgEAAABgJgAvIlDIABgEIAIAGIAAADQgEAEgCAAQgDAAAAgJg");
	this.shape_469.setTransform(211.4,225.7);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFFF99").s().p("AjFDAIgDgDIAaAMgAh+DAIgCgCIgig4IAIgGIAKANIAOASIAAAAIATAVIATAMIgEACIgDABgAj2CKIAFgDIAAAMgAiABCIAEgGQAAAIADAIIgHgKgAi8A1IADgLIADASIgFACgAi1ALIAHgCIAAAWgAjEAMIADARIgBAAgAidAOIgDgBIAFgLIACACQgCAIAFAFIgFAEIgCgHgADVgNIAAgGQABgTAEgOIADABIgEAbIgBAFIgBAEIAAABIgBABgADugZIAAgMIAFgCIAEARIAAAEgAiRgiIAAgBIADgEIABAFIgFABIABgBgAh+g8IAAgGIAPgPIADADIgSASgACBhSIAAAAIAGgEIAAABQABACAAABQAAAAAAABQAAABAAAAQgBAAgBAAIgFgCgAi4hkIAJgIIABAEIAAAAIgBAAIgHAGgABNiDIABAAIAKAEIgDAEgACiicIgMgNIAQAJIgCAEIgCAAgABNjDIAEgFIgBAFg");
	this.shape_470.setTransform(216.3,151.4);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFFF33").s().p("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QAAABAAAAQAAAAAAABQAAAAAAABIADADIADADIALgCIgHgEIAAgCIgGgBIgBgBIgCABgAgEhZIAOgMIACgCIgDABQgHAAgCgGgAgphpIACACQAKAHAEgCIABgBIAAgCIAAgDIAAgBIAAgDIgHABIAAACIgCgCgAixiBIAIAAIARgJgADBgzQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIgGgSIAQAMQAEAJgHAAIgEgBgAB/heIADgEIAbAMIAEADQAOASACAIIgGAEgADThPIgEgMIABAAIAJALIABABIAAACQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgFgGgAjEhSIAAAAIgCgCQgKgPARgJIAEgCIACgBIABAAIABABIAAAAIgBABIABAAIAAAAIAJACIAEABIgBABIAQAGIgDAFIgBAAQgEADgFgJQgBgEgEADIgVATIgCAAgAC9hkIgCgHQAAAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAIABAAIAAADIAMAHIABAAIABABIACAFIAAABIABAFIgDAAIgBABgADohtIgagSIACgEIAYANIAAABQAGAIgFAAIgBAAgACAiDIgBgBQgBgDgEgBQgGgIAOAFIAFACIAAABIADAAIALASgAhGiDIgCADIABgIIACgQIgDgBIABgCIAOgfQAKgVAWgIIABACIAFAAIAdgFIAaAAIABAAIAEAAIAAABIAAAAIAbACIg1AMIgEABIAAgCIgBABIgDABIADAAIg/A6IgDAJIAAABIgLAMgACRiiIgXgEIABgFIgEAFIhFgCIgTADQAGgHAJgEIAEgBIBIgCIAUAHIAEABIAAgBQALgFgSgIIAAAAIAAgCIgBACIgZgMIASgBQgDgHAGABIAAAAIABAAIAXAKIASAHIACAAIAHAIQAAAEgFAEIAAABIgBABIgeAIIgEgBgAB7irIABgBIgBAAg");
	this.shape_471.setTransform(212.1,148.5);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FFCC99").s().p("APDK/IgKgMQgJgJgKgHIgEgDIAIgBIgLgBIgEgDIgTgJIgGgCIgEgEIgOgMIgmggIgzgoIhDgnIhEgjIgqgcIgEgDIgfgkIgYg1IAEgBIAOAAIgCgLIgBgIIgCgBIgYgIQgMgFgIgJIgFgDQgGgDgEgEQgKgJAAgNIAAgBIAAgEIAAgDIgFgDIgSAEIgJAJIgCADIAAgBIgBgGQgCAEgFAEIgFAEIgBAAQgCACgEABIgBAAIgIAIQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIhaAEIgEAAIgCAAIgIAAIgKABIgWAAIgkAEQgaACgZAAIgFAAIgTgBIgBAAIgDAAIgcgBIgtgFIgEAFIgDABQgFADgGAAIgLABQgaAAgagFIgCABIgFACQgQAGgQgGQgMgEgMgDIgIgDIgFgFIgDgCQgJgNgFgOIgCgDQgEgNgCgOIAAgKIgBgIIABgNIAAgHIAAgHIAAgSIAAgCIAAgGIAAgDIACgRIACgWIABgFQABgGAAgGIABgLIABgMIABgFIABgKIABgFIADgPIAGgVIAVhOIACgDIACgCQAHgZAPgQQAGgGAEgEQAEgDABgEIAGgOQAKgUALgSIACgBIAAgCIALgQIADgFIAHgLIAEgGQASghAWgcIAFgHIADgJIAEgHIAAgBIABAAIAHgLQAIgKAJgIQAJgIAJgFQALgKANgDQAIgNALgHIACgBIAAgCIgCgMIgKgiIgBgDIgEgGIgEgPIAAgDIAAgFIAAgGIAAgBIgCgDIgBgDQgDgGgBgHQgBgOADgJQACgIAGgEQADgDAFgCIABgDIAEgIIAVgTIAGgBIABAAQADgBABgDIgDAuIABABIABABIAAABIAGAIIAFAKIABAEIABACIACAIQAIAKgIAFIAAABIADAEQAMAWAGAZIACANIAGABIAEADIAEACQAHAEAFAIQADAFACAGIABAGQACAFgBAEIAAACIABgBQAEAFACgKIABgBIgLgVIgBgBIACgBIAbAuIAFAJIgHAFIAAABQADALgDAJIgBACQgCAIgIAGIgCABQAAADgCADQgDAHgHAEQgJAGgOAAIgEAEIgBAAIgXAMIgBABIgCABQAEAGgQANIgSAkIgJAEIgBAAIgEAKIgFAMIgGARIgJAeQgCALgFAJQAAAUgEASIABAFQAEATAAAVIAAAOIgBAGIAAAFQgBANgCAMIgBAEIgBAEIgDAKIgBABQgHASgNANIgKAIIgFAEIgCACQgHAEgHADIgBABIgBABIAAAAQAFAHAGAEIAFADIABAAIAXgJIAEgCIAKgHIABgBIAMgLIACgCQANgKAPgDQAHgCAIABQAXgOAZgGIADAAIADgBQAQgDAQABIAFgEIAGgGIBAgCIAQgBIAVALIAYgJQAAAAABAAQABAAAAAAQABAAAAgBQAAAAABAAIADgBIAEgPIAKgJIAXgXIArghIAIgFIABgEIAAgBIAFgNIABgDIACgDQAFgHAGgDIACgBIAHgCIgCgLIAgAFIADgDQAiAAAggIIAYgFQAWgEATgKIACgBIAGgBIABAAIABAAIAmgPIAAgBIABAAIABgBIABAAQAKgIAJgJIABgCIAGgFIAEgFIAOgPIACgDIACAAIADgDIABgBQARgMADgXQACgNAIgFQADgCAFgBIABAAIAFgBIADgBIAOgCIAGADIADgBIgEgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAEgFAGgEIABAGIgBAIIAHgCIACgBIADgEIAFgFIA6gCQACgCAAgDIABgBQAJgGAMgCIABABIADAAIAJgDIAEAAIAAgBIAAgBIACgBQAHgIgIgLIACgWIgBgNIgBgBQgFgdAUgLIAFgEIgNgUIAWgoIAAAAQAEgBAAgFIALgIIAigZIAAAAIABgBIABgBIACgCQALgGACALIgIAKIAFgBIABAAIABABIABAAIABADIAHgIIABghIAQgOIAYgOIAAgJIgPAEIgOACIgFACIgBAAIAAgCIADgRQAMgHAJgJQAXgWgRABIgVAMIgCADIgCADQgHAGgHAEIgFADIgGACQgYAIgYACIgUABQhnAThpgiIgDADQgOAGgDgPIAAgCQAMgPgXgFIgSgcIAhgRQABAHADADQAAABABAAQAAABABAAQABAAAAAAQABAAAAgBQADgBABgFIABgJIAJgNIBCgaIBAgWIAkgHIAIgEIACgBQAHgDAHgCQAHgCAJgBIAlgBQAUgGAVgCQARgBARAAIAEgDQAFgDAFgBQAKgDAMADIAAAAIAIADIABAAQAIACAIAAQAWAAAWAFQAKACALAFIAMAGIAHAFIACACIAPAMIAIADIgBAFIAAAAIAEAFQAMAUgCAaIgEA0IgCAfIgOCCIgGAeQgPA8gRA6QgHAXgKAVIgGALQgGAJgGAHIgFADIgCAFQgCAHgEAFIgBACIgIAHIgBAFIAAADIAAADIgBAAIgEAFIgFAFIgCAAIgaABIgBAAIgGAAIgGAAIAAAAIAAAFIAAAIIAAAIIAAAFIACAAIACACIAAAAQAEAEgBAGIAAAAIAAAGIgEAFIgDAFIAAAFIAAAGIAAAEIABAKIAAAFIAAACQABAJgCAIIAAACIADgCIAFgDIAGgEIACAAIAAgBIAAgBIAAgEIABgIIAAgDQADgDABgDQADgFABgFIABAAIAEgBIADgBQADADAAAFIACALIAAAEIADgEIACgKIAAAAIABAAIAHARIAHAAIABAAIACAAIADACQAFAEAFAGQAHAJADAMIAGAnIABANIABAPQACAWABAXIAAAYIACAQIACABIAFACIAHADQANgDANgBQAHADAFAGQAOANADASIABABQAHAIAFALIAAABIACAHQACALgDAJIAIgBQAAAAAAgBQABAAAAAAQAAAAAAAAQABABAAAAIAXgCIABABIAOAFQAGACAFAEQAPAKAHAQIADAIIACAGQACAKAAANIAAABIAIAEIAIAGQAJAJgDAOIAAAAQAVABgCAUQgBAGgFABQgdADgdgBQgEAAgDgBIgDgCIgCgDIhnAvIiGBdIAAgBIgCACQgEAFgIACIgBAAIgKAAIghApIgKAKIgQAQIgaAAQgLALgOAJQgOAIgJAOIgJAGQgNALgKAMIgNAFIgBACIAJAAIgDAFIgHANIgCAFIgEAMgAOzKiIADAAIgDgBgAUEENIABACIAAgJgAD7ECIAAAAIAAABIgEABIAHABIAGAAIAFABIAXgGIAPABIAEABIABAAQAHgLAPgCIAPgDQAWgIAYgFIADAAQAWgFAXgBIADgKIgJgBIgEgBIgMgEIgGgCIgEgCIgFgDIgQgKIgFgEIgGAAIABABIAAAEIAAAIIgBAEQgBAEgDADIgCACQgEAFgFADIgBABQgBAEgDAAIgHABQgSABgSgEIgBAAIgMACQgRAEgRACIgZACIgGAAIgTAAIgHAAgAEZB9QAAAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAABQADgBACABIAAAAgAFaBqIAPgDIgPAAgARYBqIABgBIAAAAgASVASQgBALgDAJIADgDQAFgFADgHIABgDIAHgNQgIACgHAAIAAAJgAS/iSQgCAAgCADIgBAEIgKAEIALgCIADgEIAEgFIAAgBIgDABgAOpi/IANABIACAAIgQgBgASBmfQgIAHAIAPIADADIABADQAEAGAAAIIAAACIAAAJIAAAHIADADIgCAWIAAAIQABAPgCAOQgEAbgRASIgGAHIAAADQgEADgDAFQgLASALgDIAFgDIAZghIAAgBIAEgIIAGAAIAFgMIACgCIABgCIAAgBQAGgJAFgGIADgCIACgNQACgHgBgCQAAgDgGALQgCAEgEAAIgCgDIgBgCIAAgCIAAg4IAAgFIABAAIgBgFIgGgXIgKgSIAAgBQgFABgDADgARVmnIABgBIABgCgAQhoeIADgBIAhgHIgcAAgARWoqIAAAAIACgBIABAAIgBAAIgCABgAQCKJIABAAIgCABIABgBgA3RA7IAAgOQAJgIAHgKIARgSQAFgFAJAAIAHgTQAHALgKAEIAAABIgBAAQgHAMgIAKIgBABIAAABQgHgBgEAEQgDACgBAFIABAIIAAABQACAVAFASgAUqhNIAIgHIgBAOgAJWhaIAAgCIghgMQgTgDgPgKIgDgCIgKgJIgBgBIgjgfIgVgXIgDgDIgFgOIADgSIAAAAIAAAAIAAgCIAAgBIgDgDQgIgHgIAPQgJgBgGgGIgDgGIADABIgEgGIAAgCQABgHAHgEQADgDAEAAQAEgCAEABIADABQAMAIAPgEIADgBIAEgCQAQgSAKAMIABAEIABAEIABABQABADAEAAIABAAIAHgEIABAAIAZAJIATAIIAJABIAcAIIASgEIAFgBIAGAAIA4gSIA6gTQAOAAAMgFIAAACIASgJIADgIIADgDQAGgHAFgIIgBgEIAAgFQgBgKAFgFQgCgEAAgFIAAgBIgDgFIgDgEIgKgKIADANIgYAlIABABIgBAAIgFAFQguAkg4ANIgBAAIAAAAIABgCIgwAOIglgJIgUgDQgdgEgNgVIAAgBIACABIgEgGQgEABgCADIggASIgegfIAeAJQgZgdgPgbQgHgOgGgOIAAgBIgDgJQgJgbABgaIADAHQANAaANATIAIAKQADAKAHAJIAHAGQAOANATADIANABIABgGIgNgCQgRgFgOgVIgFgHQgLgUgFgYQgDgOgBgRIAAgJIAAg3IASgSIAJgFIA9AKIABgBIAFABIACgFIAJABIACADQAFAJAFgTIgOgjIAKgDIAHgGQAKgJANgIQAUACgPAcQgBACABAEIAPgTIASgDIAOAKIAAAAIABAJIgCAEIgDADIgKAGIgBACQgGALAAACIgDAEQACAHAEgFIAIgNIABAAIACAAQA2ABAXA4QAIAPgQgDIgBAAIgGgCQgSAAgNAMIgDADIgJACIgCAIIAAAIIABACIAAABIAAABIAAAFIAAABIABgBIACgFIAFgKIAAgBIACAAIAEgDIAwAIIAEACIAMAGIAGABIAKADIAAgCIAFgEQAFgEAFABIAeAhIAIAOIAEAMIAAAAIABABIAGAEQAPAMAHARIAEAAIADAQIABABQADADABADQADAFABAGIAEASIABAGIABAXIAAAJIAAAEIAAAFQgCAegWAPIgSAUIgeAhIgCABIgPAKIgOAJIgOAJIgIACIhTAPIAjABIAAABQgbAGgbAAIgbgBgAJihiIAHABIgHgCgAHtiZIADAAQALgCgNgEIgCgBIgBAAgAHWjEIAAAAIAAgBIAAABgAK3liIAFAIQABALADAAQADABADgCIAAgPIAAgNIAAgFIAAgCIgVgTIgIABQgJgDgKACQgJABgKAFIgGABIgGAGQgEAEgCAEIgBADIACAAQAAAGADAAIAPgHIAAABIABgCIAMgHgAJ5lcIABABIAAgBgAHymCIASgeIAjAAIAKAFIACAAIAAABQAKAGAEgHIABAAIABgEIAAgEIhPgFIgDAeIgBAAg");
	this.shape_472.setTransform(159.1,195.7);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFFF00").s().p("AmRLEIgCgDIjAAAIgdgUQgjgWgogTQgkgRgfgXQgKgIgHgJIgDgEQgYgagcgVIgCgCIgBAAIgPgKIAAgBQgFgHgJgFQgcgNgigGIgKgCQgGgDgEgDQgRgQgWgLIAAAAQgpgIgkgMQgagRgYgVQgXgUgbgSIAAAAQgSgHgOgKIgYgJQgLgEgNgDQgIgCgEgEQgGgGgBgKIAAgBIAHgCIAAgBIABAAQAFgDAHABIABgBQAFgDAAgDIADgEQAEAHAMgBIAAgBQAGgEAHADIABAAQARgGAPgDQARgEANABQAGABABgFIAjgCQAVgCARgFQATAEAPgHIABAAQAIACAEgEIAAABQAPAEATgDIAagGQAjgKAdgOIACAAQgDADAAACQAAAMAFgBQACgBACgDIAVgHQA5gRBOgOQgCAKgEAJQAMgEALgHIgBA/IAAAEQAAANADALIAEAFIASAKIgKADIACABIAIAGIAKAGIABABIAGAEIA+ASIABAAIAHACIATAGIABAAIAPgBQAAAAAAABQAAAAABAAQAAAAAAAAQABABABAAIAdAAIAPABIABAAIARgCQAXgBAYABQASAAATABIAAABIAYgEIANgCQBKgOBLACQAXAAAWABIAJABIACgBIAGgDIAGgBIACAAIABAAIABABIAAAAIAGAAIAEABIABAAIAEACIAGADIADABIAGAEIADABIAEADIAFgDIAEgBQAHgBAIADIACACIACABQAMALAJATIABACIACAHIAGAIIAGAMIABABIAEAHIAMAUQAKARALAQIAEAGIABACIABADIAsAhIAWAPIARAKQAbAPAdALIALAEQAyASAqAgIAHAFIAIAGIAQAOIAQAOIAAABIAFAEQAKAJAHAKIADACIAHADIi7ABQn2ACgEACgAggKrIAZgCIgYAAIgBACgAppG8IAEgCIgIgBIAEADgATcKJIAAgQIgQgOIgPgLIgBgDIgDgGIgCgCIgCAAQgCgGgEgFIgDgDQgTgXgWgPIgBgBIgBgCIgFgHIgFgEIgEgDIAAgDQgCgFgDgFQgMgCgJgJQgKgLgLgJIgDgDIgFgBIgRgQIgSgPIgCgCIgBAAIgHgFIgCgCIgJgJIgFgDIAAgJQAAgOgKgJQgJgKgOAAIgMgFIgrgMIgJgDIgggJIgNgIIgNgSIgEgNIgYgfIgigXIgNgSIgQgNIgYgKIgDgDIgEgLIglggIgFgFIgMgLIgJhSIgHg8IAAgCIgKgXQBJgEARgGIALgEQALgCATgCQAFANATAAIABAAIAIAGIABABQAQABAIAEIABAAQAMgBALADIABABQAPAHAJAIIABAAIAGABIAAAAQATAQAdAHQAHACAIADQAHAEAJABQAXAEAYAIIAAABQAKAAANACIAAgBQADAEAJAAIABAAQALAHAMAAIABAAQA4AUA0AYIATAAIAFALIACABIgCAAQAcBHAHBaQACAhAACMIACAwQACAvgEAmQgFA5gRAegAFeKqIABgCIANgEIgEAHgANVGYIABAAIAAABIgBgBgArJCvIABAAIAAABgAwMq/IAAgBIAlgFIgBAGg");
	this.shape_473.setTransform(221.4,194.2);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FF0000").s().p("AHsGhIACgFIACgHIABgDIAMgOIAIAAIAAAAIAEgGIAOgRIACgCIgBAAQAEgFADgFIABgCIAOgKIAagUIgTASQAOgLAPgIIAQgBIACgCIACgDIAAgBIAAgDIAEgCIACgBQAKgNARACIABAAIACAAIAFgGIACgCIADgDIACgCIAIgIIABgBIAGgFIAxglIABgCIACgBIAYgSIAGgFIAMgJIAUgNIAIgFIARgKIAxgdIAMgHIAQgLIAEgCQAegUAkACIARABIAFAFIACABIgBgCIAVgHIAKgEIADAGIACAAIAJgBIALgBQAWgBAXACIAQAGQAMAEALAGIAJAGIAIACQADAIAGADQAJAFAEAKQABADADADIAIACQABAFAEAEIAQAOIAGAGIACABIANADIACADQAHAHAIAEIAFADIABADQADAGAFAFIALADIABACQACALAJAFQAEACADAEQAKAQAOAJQACAFADADIAAAAQAJAHAEAIQACAFAEADIAHADIAHAGIATASIAQAPIAAAnIAAAegAq+GUIgagZIAAgBQgIgLgLgHIAAgBQgVgYgYgVIgBgBIgGgFIAAgBQgOgNgTgJIAAAAIgFgCIgQgGIAAAAIgPgDIgBAAQgzgGgzgDIgBgBQgLgDgIgGIAAgBQgSgkgngQIgBgBQgHgJgOgCIAAgBQgHgGgLgBIAAgBQgYgIgQgQIgEgFIgBgBQgMgTgRgOIgBgBQgQgPgTgMIAAgBQgHgEgFgGIgBAAIgLgDIgBgBQgDgEgGgCIAAgBQghgLgegMIgBgBQgMgYgVgQQgKgIgNgHQgOgHgKgKQAHgDAEgGIAAgBQAbgGAagIIAAAAQAXgIAagFIAAgBQAdgEAfgCQAWgBAWgEIAKgBQAEgBACgCIAPgCQAIgCAHgDIAAAAQANgCALgFIAAgBIAIAAIACAAQAFgDAFgCIACgBQAWADAXgGIABAAIBMgKIAKBKIgLABIAAAAQgSAGgeABIAAABIgJAAQgOACABAGIgBAAQgFgFgFAEQgEgCgBAAQgMAEgXgBIgBABQgGACgEADIgBAAQABAGgGADIgCgCIgBgCIgIgCQgHAAgEAGIgDAEQAAgDgFgBIgBAAQgEAGgJAAIgEAAIAAABIgBAAQgKgDgHACIAAABIAAABIgBAAIgFABQADAQAKAKIAAABQAKAEAFAHIABABIABAAIASAEIABAAQANAKASAHQAlANAcAYIATAPQAHAIAJAFIABABQAKALAPAFIABAAQADAFADADIAAABQAgANAlAHIAAAAQANAAAIAEIACAAQABACACACIABAAIACABQAPAVAeAIIAAABQAVAAAOAIIABAAQAYACAQARQAIAIAJAGIASANIAPATQAVAYAdARIABABQAPANARAKIABABQAWAOAaAKIABAAQAYAKAVANIABABIAAABIABAAIAAABQAGACAEADgAUzEmIgBgDQgCgDgCgFIAAgCIgCgBIgIgDQgEgIgHgFQgIgFgGgKQgBgDgEgCIABAAQAXAQATAXIACADQAEAFADAFIgHgCgAS3CxIgCgDIgLgKIgFgDIgCgEQgBgFgEgEIASAPIAQAQIgJgCgASTCQIgBgDIgBgBIADABIAHAFIgIgCgAuwhzQAQgEAVgEIAEgBIABAAIANgCIBfgPIAHgDIgEgJIAAAAQAuAAChgVQgGAbgFAlQhvAWgmAPIgJgMIgMAEQgkAPgnANQgIADgLABQgZABgSAEIAAgBQgRADgPABgApFh7IACgEIgBAEgAVGi7IgfgQQhHgnhcgMIAAgBIgEgEIgBAAQgigLgigGIgNgIIgmgUIgBgBIgFgFIgCgBIgigIIAAAAQgEgBgBgEIgBAAIgPgEIALAAQAGgCADgJQgEgDgtgDIAAAAIAAgBQgHgHgJACQgDADgGAAIgJAAIgBACIgGgBQgIAEg0AHIAAgPIgCgFIgBgBQgEgDgDACIgCACIgBABIgBAGIAFAOIgqAFIgcg4IDEgeIACAGIgCADIAGAFIABABQAIAMAJAIQAEgDADgDQAUAKAQAMIABABQAEgDAHAFQACACADAAQAFAFAGADIANAEIAAAAIAIAAIACAAIAFAEIABABQAaAEAXABQAVABATAHIADADQAFgEAFABIAFACIACACIABAAIAjAbIAAABIADABIACABQAIAGAKAEQAPAGASABIAAABIANADIAHgEIABAAQAkACAWAQIAFAEIAABNIgPgHgANAlrIAHAHIABgOIgIAHgAkijGQgEgBgEgEIgBAAIgCgCQgCgEAAgEIAAgDIEEgoIgjAbIgLgDIgBgCIgDABIAAAAQgjANgpAFIgCABQgeAHgfAGQgOACgPgDIgFgCQgIAIgJAAIgHgCgAhVjrIAAAAIAAAAg");
	this.shape_474.setTransform(208.1,224.3);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("Ai2HYQgEgDgGgCIAAgBIgBAAIAAgBIgCgBQgUgNgYgKIgBAAQgagKgWgOIgBgBQgSgKgPgNIgBgBQgcgRgVgYIgPgTIgSgNQgKgGgHgIQgQgRgYgCIgBAAQgOgIgVAAIAAgBQgegIgPgVIgCgBIgBAAQgCgCgCgCIgBAAQgIgEgOAAIAAAAQgkgHgggNIAAgBQgDgDgDgFIgBAAQgQgFgKgLIgBgBQgJgFgGgIIgUgPQgbgYgmgNQgRgHgNgKIgCAAIgSgEIgBAAIAAgBQgGgHgJgEIAAgBQgLgKgDgQIAGgDIABAAIAAgBIAAgBQAGgCALADIABAAIAAgBIAEAAQAJAAAEgGIABAAQAFABAAADQAAACgFAEIAAABQgHgCgGAEIgBAAIAAABIgHABIAAACQABAJAGAGQAFAEAHACQANADALAFIAYAJQAOAKATAGIAAABQAaARAXAVQAYAUAbARQAjAMApAIIAAABQAWAKASAQQAEAEAFACIAKADQAjAGAcANQAIAEAFAIIAAABIAPAJIABABIACACQAdAUAXAbIADADQAHAKAKAHQAfAYAlARQAnASAjAWIAdAUgAmkHYIgIgJIgBgBQgFgCgDgFQgKgNgNgJIgDgEQgQgMgJgRIgBAAQgFgFgHgCIAAgBIgTgSIgGgDQgUgIgXgGIgBAAQg5AAgsgGIAAgBIgHgFIgBAAIgCAAIgDgBQgagbgagbIgBgBQgJgCgFgGIgCAAQgUgHgSgKIgBAAIgNgDIgCgBQgCgCgBgDIgBAAQgFAAgDgBIAAgBIgHgIIgCgCIgBgBQgcgkgkgcIgBAAQgIgDgGgHIgBAAQgHgFgPgEIAAgBQgIgGgIgEIgBAAQgWgFgagIIgBgBQgKgMgHgPIgBAAQgegegpgUIgBAAQgKgEgCgLIgBAAIAAgKQADgFAGAAIABAAIAMgMIABAAIAAgBIAAgCQARgKASAAIAAABIABAAQAMgEAMAAIABAAQAKgEAHgGIAAgBQAKgDAFADIAAABQAHgFAHABIABABQAFgFAEACIABAAQADgEAHgCIAAgBQgrgDgYgUQgCgCgBgDQAEgGAIAEIAAABQAvARA+gHIARAAIAAgBQAQgEAJAHIAAABQgBAJAIAAIAAAAIAXgFIATgEIACAAQAfgOAmAAIAaAAQARgIATgCQA7gEA7gOIAAgBQAJADAIgGIAAAAIAIAAIABAAIAJgFIABAAIAHABQAEADADABIAQABIAEAJIgGADIhfAPIgOACIAAAAIgEABQgVAEgQAEIgBAAIhMAKIgBAAQgXAGgXgDIgBABQgFACgFADIgCAAIgIAAIAAABQgLAFgNACIAAAAQgHADgIACIgPACQgDACgDABIgKABQgWAEgWABQgfACgeACIAAABQgaAFgWAIIAAAAQgaAIgbAGIAAABQgEAGgHADQAJAKAOAHQANAHALAKQAVAQAMAYIABABQAeAMAhALIAAABQAGACADAEIABABIAKADIABAAQAFAGAHAEIAAABQAUAMAQAPIAAABQASAOAMATIABABIAEAFQAQAQAYAIIAAABQALABAHAGIAAABQAOACAHAJIAAABQAoAQASAkIAAABQAIAGALADIABABQAzADAyAGIABAAIAQADIAAAAIAQAGIAEACIABAAQASAJAPANIAAABIAGAFIABABQAYAVAVAYIAAABQAKAHAJALIAAABIAaAZgAZ+GRIgSgSIgHgGIgHgDQgEgDgCgFQgFgIgIgHIgBAAQgDgDgBgFQgPgJgJgQQgDgEgEgCQgJgFgCgLIgBgCIgLgDQgFgFgDgGIgBgDIgGgDQgHgEgHgHIgDgDIgMgDIgCgBIgGgGIgQgOQgEgEgBgFIgIgCQgEgDAAgDQgEgKgJgFQgHgDgCgIIgIgCIgJgGIgGgFIgCgDIgKgCIgDgEIgCgDIgDgEIgBgBIAAgDIgYgDIgEgBIgBgBIAAgCIAIgBIAQgDIAHgCIAAABIACABQADADACAFIABACIAAAAIABADIADABQAHABAGAEIABACIAIAHQAFADAGABQAEADADAFIAAACIAAABIACADIAGADIAIAKIABABIABADIAIACIAAAAIACACQAEAEACAFIACAEIAFADIALAKIACADIAJACIAFABIADADQALAKAKAKQAKAJAMADQACAEACAFIAAADIAFADIAEAFIAGAGIAAADQADACACADQAGAKAIAFQAHAFAEAIIAIADIACABIAAACQABAFADADIABADIAGACIACABIACABIADAGIABADIAPALIARAOIAAAQIgRgPgAxZBqQABgLAGAFQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBgBQAAgBAAgBQAAgBAAAAQABgBAAAAQAAAAAAAAQACgBAEAEIAAABIgCAQgAzRAtIgEAAIglgfIgBAAIgBgBQgBgBAAgEQAEgCAFAAIACAAQAIAEAGAFIAAABIAkAcIAAABQAKAFAHAIIAAABIAIAGQgagBgQgTgAskA5QADgGAIAAIAIACIABACIABACQAHgDgBgGIABAAQAEgDAGgCIAAgBQAYABAMgEQABAAAEACQAFgEAFAFIABAAQgBgGAOgCIAIAAIAAgBQAegBASgGIAAAAIAMgBIABAAQAPgBARgDIAAABQARgEAagBQAKgBAJgDQAmgNAlgNIAMgEIAJANQgMAEgFACIgCABQgdAOgiAJIgbAGQgTAEgPgEIAAgBQgEAEgHgCIgBAAQgQAGgSgEQgRAGgVABIgjADQgCAEgFAAQgOgBgRADQgPADgRAGIgBAAQgGgDgGAFIAAAAIgEAAQgJAAgEgFgA1jAUIgVgDIgCgGQABgFADgDQACgDAFAAIACAAQAHAAACAFIAAABIAFAPIgEgBgAkpgVIACgNIABgHQAGgmAGgbIADgOQACgIABgNIABgNIAIgDIAAABIAFAAIABABIABAAIABABIACADIADAHQACAKgKAFIAAALIgBAJIgDAHIgEAHIgEAOIAAAGIAAABIAAACIAAADIgDAIIgBACIgBAEIABABIAAAKIgBAGIABAAIAAAAIAEACIABACIACACIAAAAIAAACIAAAEIAAABIAAACIgCAEIgFAEIAAABIgCABQgLAGgMAFQAEgKACgJgA27gyQgKAAgIgCIgBAAIgKgIIAAgBIgHgMIAAgBIgBgPIACgBIAAgBIAAgDIAAAAIAAgBIAAgBQAJgQgCgTIAAgBQAFgLAJgGIAAgBQAFAEgBAJIAAABQgEAGgBAJIAAABIAAABQgDAPgGANQACAHAAAIIAAACQAIAQAYgEIABAAIAKgGQAKgHAHgIIALgMIABAAQgBgFACgCIAAgBIADgDIAGgFIABgBIAKAbIAAABQAYASAmAAQAIAAALgDIAIgCQAGgDAFgGQACgDAEgCIAAgBIAAgCQAKgIAKAMIADAEIACADQAdAJAWgNIAAgBQgKABgJgBIgOgDIgEgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAIAAgBIABAAIAAgBIAAgCQAfgEAgADIAKABQAQACATgEIAAgBQATgIAJgQIABAAIAAgBQAugeAggrIAAgBQgEgJAHgDQAJgDAAgHIgBgBQgIgCgIAFIAAABQgIALgDALQgHALgMAIQgMAHgCgMQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAIABAAIAAgBQAOgNAMgRIAAAAIAAgBQgKgDAAgLIgBgBQgHgFgGgGIAAgBQABgQAHgKIgMgFQgKgCgIABQgRADgHgHQABgEACgCQADgCAEAAQAPgBAOgFIAGgDIgDgCIgFAAIgEAAQgVAAgPgEIgGgBIgBAAQgQAPgUAKIAAABQAAALgKAAQgKgEgOAIIgHADIgFABQgGgBgDgIQAAAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAIABAAIAAgCIAAgBQgGgEgIAEQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAQgEgBgEACQgHADgFgBQgFgBgDgGIAegfIABAAIAAgCIAAgBQAIgHAGgLIABAAIAAgBQARgTAIgTQgHgBgMACIgRAEIgEABIgiAIIgFABIgBAAIgBAAIgUAEIgKABQgRABgPgCIgKgBIgBAAQgWgBgRgFQgLgDgJgFIgBAAIgCgBIgTgMQgdARgaAVQgUAQgXAOIAUgUIAIgPIAGgDIAFgEQAQgOATgLIAAgBQAKgHALgFIABAAIAVALIAOAGQAYALAgABQAeABAdgEIANgBIACgBQALgGARAAIAAAAIABAAIAAgBQAcgGAZgJIACgBIAAgBIAAgBIAEgEIAIAAIABAIIAAABQAKAGAHAKIABABQAEASAJAPIAHAMIABAAIASAGQAKADAJgCIAPAGQAPAFAQABIAAAAQAPAIAOAJIAAABIAJAHQAGAFAFAIQAEAJAEALQABAGgBACIAAACIAAAKIgBABQgEAHgCAJIAAAAQgPAdgXAUIgDAHQgIASgPAKIgBABIgKAKIAAABIgCABIgFAGQgUAEgOAIIgTAKQgQAJgQgFIABgCQgLgGgTACQgSAUglAAIgHgBQgTgBgKgIIgBAAIgBAAQgJADgGAGIgCABIgBAAQgFAAgDAEIgBAAQghABgbgGIgCAAIgBgBIgQgEIAAgBQgMgIgGgNIgBABQgEAGgHACIgBABQgIAIgIAHIgKAGIgOAHIgBAAgA4dhDQgKgCgBgLIAA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");
	this.shape_475.setTransform(178,217.5);

	this.instance_9 = new lib.EYesMouth();
	this.instance_9.setTransform(221.1,144.9,1,1,0,0,0,12.6,8.7);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.rf(["#FFFFFF","#000000"],[0,1],125.9,-65.7,0,125.9,-65.7,819.2).s().p("AigCNIAAgBQAAgJgBgHQAFgMADgPIAAgCIAAgBQABgIAEgGIAAgBQABgKgFgEIAAABQgJAHgFAKIAAACQACATgIAPIAAACIAAABIgBAAIAAACIAAABIgBACIgWgJQgHABgJAGQgIAGgKAFQgGgGAGgPQAQgoADgxQAAgFgCgCQBHgXA7giIADAAIABgBQAigUAfgXQAGADAIAAIAAgBIAAgEIgEgGQAWgSAVgTIAKgCIABAAIABAAIAFgCIAigHIAEgBIASgEQALgDAIABQgJAUgQATIAAABIgBAAQgGAKgJAIIAAABIAAABIgBAAIgdAfQADAGAFACQAFABAHgEQADgBAFAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAIgFAGAFIAAABIAAABIAAAAQgBABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQADAJAGAAIAGgBIAGgDQAOgIAKAFQAKAAAAgLIAAgBQAVgKAPgPIABgBIAGACQAQADAUAAIAFAAIAEABIADACIgFACQgPAGgPABQgEAAgCACQgDABAAAEQAGAHARgCQAIgCAKADIAMAEQgHALgBAPIAAACQAGAGAHAFIABABQAAAJAKACIAAABIAAAAQgLARgPANIAAABIgBAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQACAMAMgHQAMgIAIgMQADgLAHgLIABAAQAHgDAIACIACAAQgBAFgIADQgIADAFAKIgBAAQggAsgtAdIAAABIgBABQgKAQgSAHIAAABQgTAFgQgCIgKgBQghgEgeAFIAAABIAAABIgBAAIAAABQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAAAIgOAHIgDgDQgKgMgKAIIAAABIAAABQgDACgCADQgFAHgHADIgHACQgLACgHAAQgmAAgXgSIgBgBIgKgaIgBAAQgFADgEAFIAAABQgCADABAFIgBAAIgKAMQgIAIgJAGIgKAGIgCAAIgJABQgQAAgHgNgACKAPIgFAFIAAABQACANANgCQABgDgBgDQgDgLgFAAIgCAAgABwgDQgCABgDACQAAAFAGABIACAAQADgJgFAAIgBAAgAAjgLIAAACQACAJAPgBQACgEgDgDQgEgFgDgBIgDAAQgDAAgDADgAhCgSIAAABIgBABIgCADQABADACACIABAAIAAABQAMADAIgHIgBAAIgHgEQgGgDgFAAIgCAAgAAWhlIAAACQgBADACACQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAIAIAAIABAAQAAgIgDgCIgEgBQgCAAgEACgAkAB8QgJgDgEgKIAAgCIgBgBIgFgDIAAgBQgLgSgIgUIAAgBIAAAAQAIgKgKACIgBAAQgEgEgCgHQApgKAlgNQgIATgGAVIABAAIAAABIgCARQAEAFACgKQABgIAAgEIAAgBQACgIADgGIAAgBIACgDQAAAAABABQAAAAAAABQABAAAAABQAAABgBABIgGAbIgBAFQgDALgDgGIgBAAQgEAHAAAJIAAAAQgEANgIAIIgBAAgAkgAHIAEgFIAAgBIAMgBIACAAIAAAAQAIAEAHgBIAAgBIgVgPIAHgKIAAgBIAMgMIAMgFIgBgHIAGgHIABgBIAOgLIAHgBIASgSQAXgNATgRQAagVAegQIAUANIABAAQAJAEALADQARAFAWABIABAAIAKACIASABQgrAmg3AeIgFADQhZAxhzAcIAMgRg");
	this.shape_476.setTransform(45,195.7);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#666666").s().p("AwlK+IABgEQAFADADAEQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgEAEgCAAQgDAAAAgJgAq7DIIAAgBIABgEIAFAEIADACIAAADQgEAEgCAAQgDAAAAgIgAt4C1QgFgHAFgHIABgDIAGACIADADIgBAIIgBAEIgIAAgAv7CoIABgEQAFACADAEQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgEADgCAAQgDAAAAgIgApdBZIABgEIAIAGQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgEAEgCAAQgDAAAAgJgAtoA6IABgEIAIAGIAAADQgEADgCAAQgDAAAAgIgAraApIAAgDQAKACAJAFIAAACQgHAFgFAAQgGAAgBgLgAqMAaIABgEQAFADADADIAAADQgEAEgCAAQgDAAAAgJgAQJp2IAAgEQAFACADAEQAAAAAAAAQAAAAABABQAAAAAAABQAAAAgBABQgDADgCAAQgDAAAAgIgAPRqpIABgEIAIAHIAAACQgEAEgCAAQgDAAAAgJgAQYrCIABgEQAHADAFAEIAAACQgFAEgDAAQgFAAAAgJg");
	this.shape_477.setTransform(201.8,187.4);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFF99").s().p("AAcASQgLgBgGgFIgBAAQgIAAgCgDQAAgFgFABQgIAAgEgGQgDgBgFAAQgKABgDgIQALgHAMACIADACQADgDAEgCIABgBIALAAIACAAIAKAFIABAAQAIAHAFAHIABABIAAABQACAIADAFIgBAAIgKADg");
	this.shape_478.setTransform(224.2,128.3);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFFF33").s().p("AjoD2IAAAAIgBgBIgDgCIgBAAQgGgDgGgEIAAgBQgKgGACgHIgBAAQgSgIgBgSIAAgBQAQgFgQACIgBAAQgPgIgBgRIgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIAAgCQAAgKgFgGQAEgKAHAMIARAZQALAFALAKIgDAAQgEAEAFABIACABQAGgEAKACIACAAIAZANIAAABQACAKAAAIIAAABQAFAEADAIIABAAIAAAAIAJAOIgCABIgIAAQgRAAgPgGgAjcC8IgqgXIAAgBQgagWgHgqQAKADAHAHIABABQAKABAIADIADABQAKAEAGAJIAAABQAbANASAWIgBABQgBABAAAAQAAAAAAABQAAABAAAAQAAABAAABIAAABIgHAKIAAACIAAABQgEAFgFAAQgDAAgEgCgAiYCKIgFgHQgvg0APhGQAIgiASggQAHgNAMgFQAygDgHAxQgCATgLAPIgEAIQgJAXAJAVQAIAUAOASQAFAFACAFIAAAIQAAALAEALQgEAJgJAJQgEADgEABIgMABQgWAAgMgUgAkqAvQAFgfAJgcQAIgbAOgXIAFgIQADgEAEgCQAZACgKAZIgMAbQgNAWgDAaQgCATgEASQgCAIgHAEQgYgCAEgagAjqBFQgHgCACgIIgBAAQgHgFgCgJIABAAQgCgKAAgOQABAIACABIAAgCQADgLgFABQgCgMAGgFIABgBIgCgTIABAAQADgGAEADIAAgBQAEgMADgHIAAgBQAFgJAFAEIABAAIADgKQAEgJAAADQAEABADgJIADgCIABAAQgFgEALACQABAAAAAAQAAAAAAAAQAAABAAAAQgBAAgBABQACADACgHQABgHACABQADABACAEIABgBQAEgDACABQAHAMAHgKIgBAAQgFgFAAgKIABAAQAQgEARAHIAAABQgHAGgNAIQgLAGgIAKIgBABQgCAFgFACIAAABIgBAIIgBAAIgFADIAAABQgDAJgFAGIgBAAQAAAHgFACIAAACIAAAIIgBAAQgIATgGAWIAAANIAAACIgBAAIgCgFQgFAFACAHIAAACQAEgCAAAHIAAACQgFgFgGAEQAAABAAABQAAABAAAAQAAABgBAAQAAAAAAAAIgBAAgAD+AJQAFgIACgHQALhAgfgtIAAgBIgCgVQAFgIAIAKIAFAEIAKAGQACADAAAGIAAABQAZAgAJAvIABAAQgBAUgFAQIAAAAIgBABIAAABIAAABIgBAAIgNASIgBAAQgUADgQAAIAIgPgACshbQACgkgSgcQhSgMg8AzQgHAFgHAEQgLADgDgMQgFgQAQgJQAGgFAGgHQAGgGAKAAIABgCQAIgHAJgBIABgBQAPgJATgEQAJgCAJAAQAkABAlADQACAAADACQATAOAEAZQACAQABAQQABAPgIAMIgEAEIgEAAQgOAAABgOgAhghsQgLgEgEgOQgIgfAbgSQAHgEAFgHQAlg0A5gMQArgFAAApQAAARgNAJQgKAHgNACIgCABIAAAAIgFACQghAXgaAhQgOAQgSAAQgJAAgKgEg");
	this.shape_479.setTransform(212.9,139.5);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFCC").s().p("AgsgOIAlgEIA0ACIAAAFIgBAAQgEAAgDABIAAABQgTAJgNAKIgCAAQgGABgKgBIAAABIgfAIIAAAAg");
	this.shape_480.setTransform(267.9,97.4);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#999999").s().p("AmCG4IABgCIAFADIAAACIgEACQgCAAAAgFgAm5FjIABgDIAFAEIAAACIgEACQgCAAAAgFgAkTFKIAAgCIAEADIAAACIgDADQgCAAABgGgApCEsIAAgDIAGAEIAAACIgEACQgCAAAAgFgAmjEpIABgDIAEAEIAAACIgDACQgCAAAAgFgAqUEHIAAgCIAFADIAAACIgDACQgCAAAAgFgAkaDvIABgDIAFAEIAAACIgEACQgCAAAAgFgAqbDoIABgCIAFAEIAAABIgDADQgDAAAAgGgAodDiIAAgCIAFAEIAAABIgDADQgCAAAAgGgAH0CwIABgEQAFADADADQAAABAAAAQABAAAAABQAAAAgBAAQAAABAAAAQgEAEgCAAQgDAAAAgJgAmzCNIABgCIAFADIAAACIgEACQgCAAAAgFgAmnCLQgCgLACgLIABgDIAEABQAEALgDAMIgBABIAAABIgFgBgAI5BiIABgFIAIAHIAAADQgEAEgCAAQgEAAABgJgAKSBpQgGgGAFgHIACgEIAFACIAEADIgBAIIgCAEIgHAAgAo/BiIABgCIAEAEIAAABIgDADQgCAAAAgGgAonBTIABgCIAFADIAAACIgDACQgDAAAAgFgAkQBHIAAgDIAFAEIAAACIgEACQgCAAABgFgAI5AYIABgEQAGADAGAEIAAACQgFAFgDAAQgFAAAAgKgAmLgEIABgCIAEAEIAAABIgDABQgCAAAAgEgAIpgLIABgEQAEADAEAEQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgEADgCAAQgDAAAAgJgAIZgvIABgEQAEACAEAEIAAADQgEAEgCAAQgDAAAAgJgAJog0IAAgFIAJAHIAAADQgEAEgCAAQgDAAAAgJgAG1hEIABgEQAFACADAEIAAADQgDAEgCAAQgEAAAAgJgAkNjeIgBgEIABgDIAFAEIAAACIgEACIgBgBgAhNkHIABgCIAEADIAAACIgDACQgCAAAAgFgAHqkgIABgEQAFACADAEQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgEAEgCAAQgDAAAAgJgAgalKIABgDQADACACACIAAACIgEACQgCAAAAgFgACTlsIAAgCQADABABADIAAABIgDADQgBAAAAgGgABrlsIAAgCIAFAEIAAABIgDADQgCAAAAgGgAAol1IABgCIAEADIAAACIgDACQgCAAAAgFgAGhmEIABgEIAIAGIAAADQgEAEgCAAQgEAAABgJgAHqm4IABgEQAFACADAEQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgEAEgCAAQgDAAAAgJg");
	this.shape_481.setTransform(207,142);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFCC99").s().p("AEpNGQgSgKgIgXQgDgIgFgFQgpgogVg2QgEgIgGgHQgigoAGg4QABgPACgNIAAAAQgHgOgCgRIgBAAQgOgDACgNIABAAQAHgCAGAJIABABIALAEIAAgBQALgHAIgDIABABQADAGAAAGQAIgHAIgCIgJgfIgBAAQgIADgEAFIgBAAQgCAOgKgBQgFgFgCgHIgQADIgGABQgEACgCgCQgfABgTgYQgKgFgGgOQgfhHAWhLQACgGAFgFQApghAygRIAZgIQA3gEAlATQgIgGgHgDIgBAAQgTgPgggCIAAAAQgJgDgIgEIgBAAQgHgCgLACIgBAAQgCgDgFAAIgKADIgHABQgJAAgBgGQAAAAAAgBQAAAAgBAAQAAAAAAABQAAAAAAABIgCAEQgGAAgDACIgEACQgRAPgYAIIgBABQgHAJgKAGIAAACIgDAGIAAAAQgBADgFAAIAAABQgUAegQAiQgIATgNARQgOASgGAUIgBABQgKAUgMATIAAABQgBAJgFAGIAAABIAAALQgHALABAQQABAQgEALIABAAQAFAGgDANIABAAQAGAMgCAMIAFAYQAGAagEAbQAGAHgCANIgCAKIACgBQADAAgBgEQADgFABAFIAAAAQAEAFgBAGIAAAAIAIAOIgRAJQABAKgKAHQgJAFgIACQgjAMgageQgSgUAAgWQgHgIgDgMQgDgJgBgKIAAgFQgBgRAAgSQgog4gJhCIgXAAQgSgPASgQQALgLAQgFQAJgJAIgGIgBgBIAAAAQACgKAIgGIAAgBIACgOIAAAAQAEgFAFABIAAgCQAAgKACgLIABAAQAcgFAaAGIABgBIAAgBQAHACAIgGIAEAAIADAAQALgFAKADIABgBQADgIAKgBIAAAAQADgJgFgLIAAgBQgGgEgDgHIgBAAQgIgBgCgHQAFAAADgDQAFgEADAEIAAAAQADgLAGAGIAAgBQAEgTALgLIADgMQADgJgDgCIAAABQgDgEAGgLIAAgCQgDgJgHgEIgBAAQgOgBgKgLIAAgBIAGgTQgFgFgCgGQgDgLgCAFIgBAAIgLgNIAAgBQgIgBgDgHIgCAAQgKgEgRgCQgQgCgEgHIAAgBQgUAEgSgDIAAgBQgIAEgJADQgJgCgIACQgKADgCgGIgBABQgHACgEAFIgBAAIgKgCIAAABIgMAHIgBAAQgGAAgCgCIgBABQgGAFgFgCIAAgBIgMAJIgBABQgCAHgGACIAAgBQgHgDgGAJIgBAAIgRACIAAABQgMARACAcIgBAAIgNATQAEAIgLAGIgDACQgKAFgMAAQgWgBgQgPQgZgNgXgTIgDgCIgDAAIAAgCIgBAAQgEACgFAAQgXARgTAUIAAABQAGAPgEAWQgIAjgfAUQgvAeg0AWIhZAmIABACIABAAIAAABIAAACIABAIQAAADADACQAQAGASgHIABAAQAHgDABgIIAEgBQAFgEAFAFIABACIABAAQALgBAIgHIABAAIAQADIABAAQASAIATAEIACAAQADANASgDIABAAIAxAHIABABQgEAJAKAAIABAAQANgKAYABIArgBQAYADASAAIACABQAAAAABABQAAAAAAAAQAAAAABAAQAAAAABAAIAGgDIABgBIAGABQAEgBAFAAIAMAAQAHgEgFgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgBQgDgLAEgOIAHggQARg+AJhAQACgLAEgKQAHgPACgQQACgUATgGIAGgHQAEgFAGgDQAMAAAFAFIAGgEQADgFAHgDQAlgQApADIAGAAIAAgBQADgDAEgCIABAAIArAAIATALQAHAEADAEIACACIAAAAIABABIADADQAEAEACAGIgNAEIgFAFQg9gLg+AJQgOABgKAIIACAEIABABQACAGAIABIABAAQAnAKAsADIBLABQAGAEACAEIABAAIAEABQAKAGgBAKIAAACQgHAFgIgFIgBAAQgSAEgUgCIgKgBIg6ABQgLAAgEgEQgNABgMACQgCAAAAAFQAAAAAAABQAAAAAAABQABAAAAAAQAAAAABAAIAFAGIAEgBIAlgEIBQAAQAJAGAAAEIgBAEIgCAAIgGADIgPAEQAGADAGgDIACAAQADACADgBIAAAEQggAEghgBIgKABIgDAAIgdACIgCACIgDABIgnAAIABACIABAAQAHALAPACQADgFAFgCQAbABAYAKQAbALAegBQAFAAACAFIABAAIADABQACADgFAGQgBAGgHAEIgwAAIgRgGIgBAAIAAAAIgBgBQgTABgLgHIgBgBQgIgFgHAAQgBAKAFAEIABAAIABABQADAEAEACIABABQAEAGAAALIgGAKIgBACIgCAIIgIAWQgFANgHALIgJAKQgiAegfAeIgDAFQgGANgQAAQgQASgbAAQgkAUgpAFQgKAHgSAEQh9AWiBAAQgcAAgZgLIgagMQgUgIgUgFIgSgCIAAABQgKAHgMgKIAAgBIgEgBQgGgBgIABIgFAAQg/ABgEg5IgBgYIAAgUQABgxAZgrQAEgQAHgPIACgEQARgwAjgkQAMhAA7ghQAMgGALgJQApgjAygMQARgDAQAAQgDgNAKgMQAWgYAbgIIAGACIAHAAIABAAQAEgDAFgBIAAgBIAOgCQALgJAQgGQA/gRBEAGIADAAQAGgZATgTIALgCIAAgBQAWgEAOAOIACADQAKACAJAEQAIAEAEAGIABAAQANAFAOACQAMACAOAAIACgBQAIgFALgBQAFAAAEgCQAEgDAFgBQAbgTAkgCQADAAADgCQALgHANgEQAVgSATgVIAFgGIABgBIABgBIAGgIQANgTAPgRIACABIAAAEIAAABQAGAKAKAEIACAEIgJALQANAPAQAMIAAABQAIAAAGACIAEgCIAxACIAKgJQAXgSAYgRIAjgWQAugaAygDQArABArADIgBgIQAAgvgNgsQgDgLgBgLIgIhDQgeg8gig5QgFgJgEgKIgNgKQgEgDgBgEIgGgQIgBgIQgDACgCAEIgBAAIgKAAIgBAAQgEgDgIAAIgBAAQgDgHgIgDIgBAAQgGABgEgFIgBgBQgMgBgHgGIAAgBQgMgBgGgHIgBgBQgDgPgBgPIAAgBQgEAAgEgHIAAgBQgNgGgKgBIAAAAQgFgLACAMIgBAAQgNACgEgFIgBgBQgPAGgKgFIgBgBQgHAAAEgEIABgBQALgJAPgKIAAgBQAQgDALgHIABgBQAEADAEgCIABgBQADAEAHAAIABAAQANAIAPAGQAOAHANAIQADAFAEAEIAAAAQAJgBAEgLIABgBQAkgYAuACIACAAQADAEAMABQAPACAPAHQAEACABAFQAAACAGAAIADABIAEACQACACAGgEQAFgDACgFQgCgHgEgFIAAgBQgOgKgUgEIgBgBIAdgdIABgBQACgIAEgGIABAAQACgGAFgJQAFgGAEgJQACgDADgBIABgBQAEgKgBgQIAAgBIgEgIIgBgBQgDgRAEgTIABgCIAMgDIAAAAQASAIAGAUIABAAQgCAPADAKIAAABIAAACQAAAMgFAJIAAABIgBABQgFAIgIAHIAAABIAAABIgBABQgNAVgPATIAAABIAAACIgBAAQgFAHgEAIQAAARARgBIABAAQAegSAWgaQAHgJALgGQADgKAIgGIAFgFQAFgFAEAAQADAHgBANIgBABIAAAAIgBgBIgJAaIgCADIAAAAIgCACQgEAGgGAAIAAABQgKAUgSAMIgBABQgDAFgEAEIAAABQgEADgDgGIAAAAQAAANgJgDIgFAFQgEAEgDAAIgBAAIAAABQgHAJgCAOIAAABQgEACgCAFQAdALAQAfQAfA8AwAuQBlBfAPCKQAGA8gZAxQgBAXgYALIgKAFQgVAYgfANQgSAHgRAJQgQAHgTADQgOALgTgCQgSALgYACQgyADgxgIQACAFgCAGIgBABIgBgCIgQALIgBAAQgDgLgFAGIAAAAIgBgBQgNgDgPAAIAAABQgFAGABAHIAAABIABABIABgBIAAAAQARgEAOAIQAOgBANgDQBBgFAQBAQACAKgJADQgQAHgOgFIgGADQgYAIgMgSQgKABgJgCIgFABIgBAAQgDgBgGABQgEAFgGACQgTAHgNANIgMAMQgJAJABAMIgBAAQgFAHgFAJIAAABQACALgHAGIABAHIgBACQACgBAHAAIAAgBQgDgNAJgGIAAgCIAFgSIABAAIAJgKIAAgCQgBgIAJACIAAAAQAOgLASgFIAAgBQAIgFAJgDIABAAQAIAAAGABIAGgFIAuABIADACIAEADQAwAOAFAvIADAlQABASgIAOIgEAEQgMgBgGgIIAAAFIAAABIADALIABABQAIAEAJAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAABQgEAIgCARIAAABQgHACACAGIgEAAQgJgNgMgMQANATAIAbQABADgBACQAdAsgGA4QBMA4AnBbQALAbAAAYIABADIABAAIAFAXIAMBLQAEAfgCAbIAAABIgBAAQgJAGgLAEIAAABIgBAAQgMAFABgJIgCAAQgPACgGAKIAAACIgBAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQACAFADAEgAgxK8IgBAAIAEAEIAAgHIAAAAIgDADgAqNDPIgBABQgeAJgZAQIgBABQgSAKgOAPIAAABIgMAeIAAAFIAAABIAAABIASgJQAQglAmgQQAPgHAOgHIABAAIA2gLIAAgBQgGgBgGgEIgCAAIgHAAIgiADgAEnELIgBgBIgBAAIACABgAEeEFIABABIgBgCIAAAAIAAABgAhBDpIABAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBAFgAhaCvIAEgCIAAgBIgDgEQABADgCAEgAD6AUIABAAIgCAAIgCgBQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAAAgAD/gpQADAKAJAEIABAAQANgCALgEIAAgBQAUgHAQgKIAAgBIAEgCIAAgBQAggOAXgYIAAgBIAAgCIgNAEIgWAHIgBAAIgBABQgTALgVAJIAAABIgBAAQgQAIgOAAIgBABQgEABgDADIgBAAQgHABgEADIAAABIgBAAIgDAEgAEGhEIABABIABAAQAFgBAFgCIgBAAIgLACgACENGIAAgIIAEgDIAAAAIAIACQAPgCAQgBQAJAAADgHQgFgDgQABQgQACgRgEIgFAAIAAgGIgCgBIABACIgBAEIgUgEIgGAAIgCAAIAAgBIAAAAQgjgJgPgVIAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQgDgCgBgEIAAgBIAAgBIgHgBQAAAAgBgBQgBAAAAAAQgBgBAAgBQAAAAAAgBIgBgDIgJgJIAAgBQgIgJgFgMIAAgBQADgFgBgIIAAgBQgFgGgDgHIAAgCQgZgBADgiIABgLIgHgJIAAgBQAFgQgKACIAAgCIAAgEIADgCQACgBADABIADACIAAgCQAAgEgEgFIAEgBQgEhHAKhEQAAgEADgEIALgNIACgIIAAgCQALgSALgQIAGAPIAAABIABAGQAYAIAFAbIABADQASAdAeARQAFADACAIIADAPQADADAFACIABABQACAIAKAAIABAAQAEALgCANQAAACgCADIAAAAQAIAHAAAOIABApIAGAPIAAACIAAABIADAHIABAFQAEAPAHAOQACAFABAFIAGADIAAAAQAFANAJAKIABAAQAEAIAGAFIAFADIAAABIACAAQASANAPANIABABQAIAKACAKQAGAFADAIIAKAWgAAaLpIABAAIAAABIAAgGIgBAFgABWLAQgBAEACACIAAAAQACgEADgDQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAgBABQAAAAgBABgAIaMTQAHgIgBgJIgBAAQACgIgCgDQgGgLgJADIAAgBIgGgpIATgDQABAIACAFIAAAAQAFgBABgJIAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAgJAGgDIAAAAIAAgEIAJgBIABAHIABAAQAGARAKgMIAAgBQAQgKAHgSIAAgBQgGgGAIgIIABgBQAFgHAHgEIABgBIATgKIAAAAQADAMAKAFIABABQALgDAFgIIAAgBQAOgRAKgTIAAgCQANgLAKgPIAAgBQAZgfAUgeIADgFQgCgFgDACIgBAAQgCADgFABIgCAAQgOAOgNAQIAAABIgBABQgUAWgSAYIAAABIAAABIAAABQgMAMgIAQQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABIgKAFIgBgDIAAgBIAAgBQgDgRgMgGIAAABQgUAQgQAVIAAABIAAACIgBAAQgTAWgPAbIgJAAIgCgbIgBAAQgBgTABgTQAAgLgHgCIAAABQgEAJgBANQADASgCAYIgBABIAAAAQAAAHgDAEIAAAFIgVADIgDgeIgBAAQgLgZgEghIAAAAQgCgCgDgBIAAgBIgBgIIgBAAQgIgJAAgNIABgBIgDgFQgMgVALgXQAdg8BFgQQAdgHAagQQAdgSAfgPQAMgGAOgDQAxgOAwgUQAZgKAYgCIATgDQAOgHARgEIABAAQAIABAFADIABABQAEAEADAHQAJACAJAFIgCgIIAEgBIABAAIAIAHIAAEvIgBAAQgIgCgJgEIAAgBQgsgUgYgoIAAgBQgGgMAAgTQADgJgBgNIAAgCIAAgBQAHgYAFgYIABgFQgFgIgDgKQAAAAgBAAQgBAAAAAAQgBAAAAABQAAAAgBABIgBAAIgBABIAAADIAAACIAAABIgKAhIAAAFIAAABQgDAGAAAJQAAAYgLAOIAAABIAAACIgBAAIgRASIAAABIgBAAQgJAOgNALIAAABIAAABIgBABQgMAPgOANIAAABIgBABQgCAEgEACIgBABIgBABIAAABIgBABIgNAQQgtA2hBAgIgmARQgJADgGABQgZANgbAMIAAABIgBAAIgDABQgFAAgBgHgAmbGEQgLAAgNgEQgjgLgGgfQghgNADglQAEgxAxgDQAoAGAKAaQAOAGAIAJIAGACIAAABIgBADQAPAVgJAlQgCAJgDAHIgBAHIgBAAIgBAFIgBAHQgBAIgHAEQgPgBgJgJgAkNggIgMgDIgggOIAAgBQgDgHgGgBIgBAAQgGgJgDgKIAAgBQgFgIgIgGIAAAAQgKgCgIABQgEgIABgGQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQgJgEgEgJIAAgBIgEgFIgBgBQgCgLgIgDIAAgCQgBgLgFgFIAAgCQADgZgHgXIgBABQgGAFgBAEIAAABQAHAVgFAeIgBAAQgKAJgOgCIgBAAQgCgHgHgDIAAgBQgCgJgFgIIAAgBQADgKgEgKIAAgCIAFgXIABAAQAPALAQAAIAAAAQgSgMgPgOIADgFIANAJIAAAAQALADAGgHIAAgBQAGgBAHABIgCgLQgWgOgHgVQgDgKgBgMIABgIQABgHAFgGIgEgGIgBAAIgGgCIgBgBIgGgJIgBgBQgBgCAAgEIgBAAQgPgRgCgaQACgLAGgGIAOgMIACgEIAAgBQAJgEAMgCIABAAQAHAEAGAGIAAABIAAABQgGAGgDAHIgBAAQAAAEgCABQgBASASgCQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBgBgBIABgEQAEgZAYgGIAAgBIARAAIABAAQAIAHAJgEIABgBQAHgHgMgDIgBgBQgFgDgHAAQgJgBgJACIgDABIgGAAIAAABIgQADIgBgBQgCgGgGgDIAAgBIgDgDIAAgBIAAAAQAIgGgEgLIgBgBIAAAAQgFgFgDgHQAJgBABgJIABgCQAJgDANACQAKACAJgCQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQgGgKgMABIgCAAQAHgGAKgCIAAAAQAOAAALgEIACAAIBPAKQAOACALAEQADAEgEACIAAABQgOAHgLAKIAAABIgCAAIAAABIgBABQgFADgDAFQgCAQALgEIAAAAIAFgJIAAgBQAPgQAXgIIABgBQAMgBAGAEIABAAQANgEACAMIAAABQgDAJgPgDIgBABQglAKgOAgIAAAHIgCACIgBABQAAAaAJASIABAAQANAXAWAOIABAAQAKADAJAFIAAABQAMACAHgDIABgBQgGgEgMgFQgLgEgKgGIgBAAQgOgNgNgOIAAgBQgHgQAAgXQgDgJAJgKIABgDIAAgBIAOgJIAJgGIAAAAQAFACAKgGQAEgCAHACIAAACIAAAEIAAACIAAABIAMADQADgBADADQAZALAJAgIACgKIAAgBIAAAAIgBgEIAAgBIABAAIAAgBIAAgCIAAgBQACgEAAgHIAAgBIAAgBIAAgNQADgCgBgHIAAgBQAFgVAAgUIAAgBIAAgBIAAgGIAPgTIAAAAQAMAKAEASIACAPIAAAGQAGAMgDASQgBAIABAIQACAIgGAEIgBAAIAAABIAAABIgBAAIgLARIAAAAIAAAAIgSAUQAFADAJgDIABABIABACQAFALAIgMIABgBQAKgDALADIAAAAQgFADAAADIAKgCIAHgBIADgDQADgDADACIAAAFQATABAMAMQAQAHAKALIAAAAIAAABQAEAGADAIQAJAJgDAUIgCASQgFAsgaAiIgJAMQgTAcgWAaIgRAVQgCAIgHAEIgBAAIgJAJQgLANgNAJIgIgBIg3AaQgbANgdAAQgKAAgKgCgAjzkMQAAASAOgEIACAAQgDgJAAgIIAAgBQAFgKAJgHIABgBQAGgEAJgDIAAgBIALABIABAAQAGADADAGIABABQAHAJABgNIAAgBIAAgBQgEgNgNgEIgBAAIgRAAIAAABQgIAFgIADIgBABIgPAQIAAABQgBAGgDADIAAABIAAABIAAAAQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAgAl7klIAAAFQABADAFADIAEADIAEABIgNgPIgCgCIABACgAkflIIAAAEIAAAGIgBAHIACAFIABABQABgMgBgQIAAgBQgBgDgCgDIABAMgAlnmZIgBABIgWAQIgBADQgMAMgJAOQACAGgCAHIAAABIAAAXQAGAEAFAGQgBgFABgHIAAgBQgCgHABgKIACgKIAAgBIAFgHQADgUARgMIAEgCIABAAQAFgEAGgCQAfgHAOAaIACAEQAKALAEATIAAgBIAAgBIgJgdQgFgQgLgIIgBAAIgKgGIgBAAIgGgBQgOAAgMAEgAjem5IAAgBQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAIADAAIACAAgAnQiOQgJgBgJgGIAAgDQgEgLgBAKQAAABABAAQAAABgBAAQAAABAAAAQAAAAgBAAQgLgCgGgHQgHgIgLgEIAAgBQgNgMgDgWQACgCAFgBIAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQgBAAAAAAQgFgFgCgGIACgKIAAgBIAJgLIABgBIAKgDIABgBQAOgBALADIABAAQAGACACAGIAAABIAKAEIABAAIABAAIAOALIgEATQgGAhAMAaIAAAAIgLACgADvqhQgBgIAEgEIAAgBQgBgGACgHIAAAAQgFgIgCgLIgCgCQgJgJgLgFQgKgEAAgHIgBABQgFAAgFgDIgDgEQgMgNgIgLIAAAAQgHgHgBgJQAGgMANgCIAAgBIAAgBQAdgEAUAKIABAAIAGADIABABIAHAIIABABIAAABQAFAJABAMIAAAAIAEAHIABAAQgKAuAMAmIgBAAIgSACgAErq3IABgCQgDgIgHgDIgBgBQAOghgKglIgBgCQgLgIgBgTIgCgKQgKgDgFgMIgBgCQAbgGAUAPIABAAQAKAGAEANIABAAQAKAEADATIABABIAAABIAAADQADAXgFAWQgEAMgHAKQgEAGgDAIQgJAFgFAJIgBABIgBAAQgKAAAGgMg");
	this.shape_482.setTransform(247.7,180.9);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFFF00").s().p("AMEFuIAEgDIAAgBQANgGALAFQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQADAEAFgDIABAAQAIgGAEgIIABABQAAABABAAQAAAAAAAAQABAAAAAAQABAAABAAQAFADgEgMIABAAIBIgkIAAAAIAkgTIACgBIABAAIACgBIADgCQAKgFAJgIQAKgHALgFQAFgHAHgGIAAgBIARgKIAAgBIABAAIABgBQAggWAYgdIAAgBQAZgiAigZIABgBIALgVIAAAAQAEAHAFAHIABAAQABAJAHAEIAAAAQAFALAJAHIABAAQABAFAEABIABAAQAcAdApAQIAAAAIAAA3IAAAFIAAAJIAAATIAAAxIgLAEQgTAIgYACIgBABIgJADIAAABIgBAAIhEACIAAABQgHACgEADIgDAAIAAgBQgMgFgPAEIgCgBQgFgDgHAEIAAAAIAAgBQggAAgiAEIAAACIgBAAQgIAAgGACgApBFuIgdgUQgkgWgngSQglgRgegYQgKgHgHgKQgZgcgegWIgCgCIgCgBIgOgJIAAgBQgGgIgIgEQgcgNgjgGIgKgDQgFgCgEgEQgRgQgWgKIAAgBQgpgIgkgMQgagRgYgUQgYgVgagRIAAgBQgSgGgOgKIgYgHQgMgFgNgDQgHgCgEgEQgGgGgCgJIAAgCIAIgBIAAgBIABAAQAFgEAHACIAAgBQAGgEAAgCIACgEQAFAGAMgBIAAAAQAGgFAGADIACAAQARgGAOgDQARgDAOABQAFAAACgEIAjgDQAVgBARgGQATAEAPgGIABAAQAHACAFgEIAAABQAPAEASgEIAbgGQAigJAdgOQAfgGAXgLIANgFQArgMArgBQABAIgCAGIAAACQgNAOAFAWQABAAAAABQAAAAAAAAQABABAAAAQAAAAABAAQAJgGAAgRIABgDIAJgaQAJgDAMAAIAAABQACAEgEAJQgDAGAAAKIAAABIAAABIgFARQgIAagDAcIAAABIAAABQgEAPABARQACANgGAFQAFAGABALIAAAAQAAATAHAMIACAAQACALAIAHIAAAAQAXAPAkAEIA3AIIAyAGQADAAABADIAmACIABAAQALAFANADIABABQAeAFAoAAIACAAQANAFATgCIAGAAIAvgCIAXgDQALgCALgEQAZgBAdgFIAAAAQAEgCAGgCIAAAAQAOgBALgCIABgBQALgFAIACIABABQAVgNAcgBIABAAQALgIAPgEIABAAQAKgHAJgIIABAAIAKgCIABgBQAOgFAQgBIAMAAIABAAIABgEIgCAAQgIgBAHgDQAGgHgNAEQgEABgCgDIAEgBQAJgGAJgDIABgBQACgIAJACQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAgBQAIACACAHIACgBIABgBQAIAHgBAIQgBAGAFgDQAFgCAEACQAMALAFARIAAABQAGAFAHAEIABABQAMATACAYIAAABIAMAPIAAABIABALIAIABIAAAFQABALACAJIgDACIgGgBIABAOIAAACQACABAAAEIABABIAFAwIAAABQAQAkALApIAAABIAAAZgALMAhQgRgagJgfQAMgUgKgVIAAgBIAAgCIAAgKIgBgBQgGgCAAgIIgBgBIgCgDQgWgEADgZQABgRAAgRQgChDgIhCQgDgZgBgaQAAgEADgDIAFgDQAQABAGAMIADgBIABAAQAKgFANgEIAAAAQAUgBAOgGQAJgDAJgBIARgBQASgHASABIABAAQAGAQAUgBIABAAIAIAHIAAABQARABAHAFIABABQANgCALAEIABAAQAPAIAJAHIABABIAGAAIAAABQASAQAeAHQAHABAIAEQAGADAKABQAXAEAXAJIABABQAKgBANACIAAAAQADAEAIgBIACAAQALAHAMABIABAAQBHAZBAAfIAAA3IgMgNIgCAAQgIgBgFgEIgBAAQgMABgGgEQgWADgeABQgcACgSAMQgdAEgVANQgUAOgWAMIgBAAQgJAAgCAGIgBAAQgPAFgNAIQgIAAgGACQhKAjhLAhIAAAAQgKALgJgCIAAABQgIAGgKACIAAAAQgDACgCADIgBAAIgIABIAAABQgEADgDAEIgCABIgHABIAAAAQgMALgOAHIgBgBgAi1giQgLgDgHgFIgBAAQgHAEgGgGQgNAFgQgEIgggJQgbgIghgDIAAgCIgBgCQgGADgCgFQALgHAGgBIAFgDQAHgHAHgCQAHgHAMgDIABAAQAAgKACAJIACAAQADAAgCAAQgDgDAHgFQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgFQAIgHAIgBIACAAIAEgLIACgGIAAgBIAAgBQAJgCAGgKIABAAIAKALIABABQAAAJAGAIQABABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAEAEAFACIABAAQAEAEABAGIABABQAFADAEAHIAAABIAGACIABAAQAKANAJANIABABIAAABQADAIABAKIgBAAIgNANIgBAAg");
	this.shape_483.setTransform(219.6,228.1);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FF0000").s().p("AFcGXQABgDgBgFIgCgCIgHAKIgeAAQgKgKgEgQIAAgBIgCgIQAIgFAHgBIABAAQAJAFgFAFIACAAQgCASAKAHIAAABQAFAAABgFIgBgBQAAgPADgTIAAgBQAEgCgBgLQAAgJADgIQADgJgFgDQgEAGAAgCQgCgKAIADIgCgEQAIgDAIgFQALgGgCgKIARgKIAeAzIAAABQAFABACACIAAAAQAGAMAKAHIAAAAQAIAMgCAKIgBABQAIAHAAgPIAAAAQALADAJAFIABABIAAAAIAAABQAAADADABIAAAAQAgALAfAGIADABIAAAAIAAAIgAq4GXIgagaIAAgBQgJgKgKgIIAAgBQgVgXgYgWIgBAAIgGgGIAAAAQgPgNgSgJIgBAAIgUgIIAAAAIgQgDIgBAAQgygGgzgDIgBgBQgLgDgIgGIAAgBQgSgkgogQIAAgBQgHgJgOgCIAAgBQgHgGgLgCIAAAAQgYgIgQgQIgEgGIgBgBQgMgSgSgOIAAgBQgQgPgUgNIAAgBQgHgEgFgGIgBAAIgKgCIgBgBQgDgEgGgCIAAgBQghgLgegMIgBgBQgMgZgVgPQgLgIgNgHQgOgHgJgKQAHgEAEgFIAAgBQAbgHAagHIAAgBQAWgHAagFIAAgBQAegEAfgCQAWgCAWgDIAKgCQADAAADgDIAPgBQAIgCAHgDIAAgBQANgCALgEIAAgBIAIAAIACAAQAFgDAFgCIABgBQAXADAXgHIABAAIBMgJIAKBKIgMABIAAAAQgSAGgeAAIAAABIgIABQgOABABAHIgBAAQgFgGgFAFQgEgCgBAAQgMAEgYgBIAAABQgGACgEADIgBAAQABAGgHACIgBgBIgBgCIgIgCQgIAAgDAFIgDAEQAAgCgFgCIgBABQgEAFgJABIgEAAIAAAAIgBAAQgLgCgGACIAAAAIAAAAIgBAAIgGACQADARALAKIAAABQAJADAGAIIAAABIABAAIASADIACAAQANALARAHQAmANAbAYIAUAPQAGAHAJAGIABAAQAKALAQAGIABAAQADAFADADIAAAAQAgAOAkAGIAAABQAOgBAIAFIABAAQACACACABIABABIACAAQAPAWAeAHIAAACQAVAAAOAHIABAAQAYADAQARQAHAHAKAHIASANQAZAkAnAYIABAAQAPAOASAKIABAAQAWAOAaALIABAAQAYAKAUANIACAAIAAABIABAAIAAACQAGABAEAEgAuqhwQAQgFAVgDIAEgBIAAAAIAOgDIBfgPQAKgFATABIABAAQAWgIAZgFQAUgDAXgBQAGgFAHACIAAAAQAKgGAKAAQANABAJgEQARgCANgEIAAgBIABAAQAJgBAIgDIAAAAIAAAAIgTApIAAABIAAABIgBAAQgFAKgDAKQgEAEgGABIhUAMQgRAJgSAEIgTAGIgSAGQglAPgmANQgJADgKABQgaABgRADIAAAAQgRADgPABgAo1hzIAAAAQgMADABgLQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBgBAAIAAgBQAIgQAHgRIAAgBQAGgFAEgJIAAgBIAKgKIAMgQIAAgBIABAAQABgKAJgBIAAgFIgBgEIA5gNIAAAAQAAADgFABIAAABQgEAXgTAKIAAABIAAABIgCAAQgEAEgIACIAAABQgIALgMAIIAAAAIgMAYIAAACIAAABQgFADgBAGQgFAQgTACgAVMi5IgggQQhGgmhcgMIAAgBIgEgEIgBgBQgigLgigFIgNgJIgngUIAAgBIgFgEIgCgBIgigIIAAAAQgFgCgBgDIgBAAQgOgFgSgBIgBAAQgKgDAAgMIAAgBQgHgHgKABQgDADgFAAQgOgBgLAGIAAABIgRAAIAAAAQgMAGgLgCIAAACQgXAEgRAIIgCAAQgGgBgCABIgBAAQgJAFgHgCIgBABQgGAFgFAAIgBgBQgHgHgGADIAAAAIgBgBQADgJgCgGIAAAAQgOgDgCgUIgBAAIgEgGQAHgQAAATIAAABQALgFAQAAIABAAQAFAAABgDIABAAQAGgBAHACIABAAQAIgHATgFIAAAAIAYgBIAYgCIABAAQALgJAWgCQAGgBAFgDQAVgBAUgJIABAAQAKAIAMAFIAIAIIAAAAQAWAKARANIABABQADgDAIAFQACACADAAQAEAFAHADIAMADIABABIAIAAIABAAIAGAEIABABQAaAEAWABQAWABATAGIADAEQAEgFAGACIAFACIACACIABAAIAjAbIAAABIACAAIACACQAJAGAJADQAQAHASAAIAAACIANADIAGgEIABgBQAkADAXAQIAFADIAABNIgPgHg");
	this.shape_484.setTransform(207.6,224);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("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QAMgGAMAAIABAAQAKgEAHgGIAAgBQAKgDAFADIAAABQAHgFAHABIABABQAFgFAEACIABAAQADgEAHgCIAAgBQgrgDgYgUQgCgCgBgDQAEgGAIAEIAAABQAvARA+gHIARAAIAAgBQAQgEAJAHIAAABQgBAJAIAAIAAAAIAXgFIATgEIACAAQAfgOAmAAIAaAAQARgIATgCQA7gEA7gOIAAgBQAJADAIgGIAAAAIAIAAIABAAIAJgFIABAAQAIACAJgCIAEgCIABAAIABgBIAAgBIAlgEQgBAOAKgKIAAgDIgDgCIADgBIABAAIAAgBQAYgBAZgFIACAAIAAgBQAKABAJgDQARgFASgDQAQgDAOgEIAAgBQAagBAOgHIACgBIAAgBQANgGAIAJIAAAAQAGgHAJgEIABAAIAAgBQAGgGAIgEIAAAAIABADIAAAFQgJABgBAKIgBAAIAAABIgMARIgKAKIAAABQgEAIgGAFIAAABQgHARgIAQIAAABQABABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgBALAMgDIAAABIAAAAQATgDAFgQQABgGAFgDIAAgBIAAgCIAMgXIAAgBQAMgIAIgLIAAgBQAIgCAEgDIACgBIAAgBIAAgBQATgJAEgXIAAgCQAFAAAAgEIAAAAIABAAQACgPAGgMIAAgBQAIgGAFgKIAAgBIAIgFIADgBIADgCIAHgGQAKgIAMgFIAAgCIAAgBQAGgBADgFIABAAIAAgBIAdgNIABAAIAAgBQA1ghAvgqIAAgBIAAAAIgBgBIABAAIABAAIABABIAAABIgQARIgBABIABAAQAKgIAHgJIAFgGIgDAAIgCAAIADgDIACgCQACgEAEgDIAKgCIADAAIAIgHIAWgFIAQgCQAEgBAEgEIAvgFQADgBABgDQAWgBAVgGIAQADIAgAFIABgBQAQgMAHgXIAAgBQAIgDADgIIAAgBIAAgNIgBAAIgIgYIAAgBIgggRIgJgBQgKgCgJAGIgBAAQgRgKgVgFIgBgBQgKgFgKgHIgBAAQgYAFgSgIIgCAAIgIgDQABgEgCgEQASAHAWgBIADgBIgJgOIgBAAIgBAAQgDgIgEgEIAAgBQgBgIgCgKIAAgBIgZgNIgBAAQgLgCgGAEIgBgBQgGgBAEgEIAEAAQgMgKgLgFIgRgZQgHgMgEAKQAFAGABAKIAAACQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABIABAAQABARAPAIIABAAQARgCgRAFIAAABQABASASAIIABAAQgCAHAKAGIAAABQAGAEAGADIgCABIgBAAIgBABIgBACIAAACQg2gZgQg/IAAgBQgLgjAAgvQAFgNgBgQIgBgIIAAgBQgBgGACgGIAAgBIAAgBIAAgCIABgOIABAAQAEgIABgKIgSgCIgQgBIAFgOQARADATgCIAAgBQABgEgDgEQALgFACgNIABAAIAAgBIAAgDQADgDABgEIAAgBQAKgGAKgIIAAgBIAAgBIAAgBQAJgJAKgHIAAAAIARgKIABAAIAAgCQABAAAAAAQABgBAAAAQABAAAAABQAAAAAAAAIABAAIAAgBQAWgJAUAHIABAAQAPgHAUAEIAAAAIADgQIABAAIAAgCIAAgBIAAgFQAMgVAQgTIABAAIAAgCIAAgBQATgWAWgSIACgBIAAgBIABAAIAAgBIAngdIABAAIAAgBIACgBIABAAIAAgBQALgFAKgGIABAAQAOAAAIgFIACAAQAEACAHAAIABAAQAOAMAPAJIADABQAGAAAAgGIABAAIgBgJIABAAIAEADIACAAIABgCIACgBIACAAIAAAQIAAABQANAKAJAPIAAABQAHABAFADIABAAIAIAAIABAAQAOAMASAIIABABQAcAAAZAHIABAAIAQALIABAAQAAAGAEADIAAAAQAWAPAXAMQAEADABAFQAMANAIARIAAABQAXAkgIA2QgCAQgIALIAAABQgBADgDABQAEAKAMAEQAjALASAaIAEAWIAAABQAGAQAAATIAAALIgBACIgBAKQgEAUgIASIAAABIAAAEIgEAEQgRATgMAVIAAABIABAAQAMATAPARIACADIgBABIADACQADADAEABIABAAIAHADQAEACACgEIAGABIACABIAAABQAIABAGgCIAKAAIgBABQgCACACAEQANABAMgKIACgCIASgNIAEgCIAAgBQAFgFAIgDIABAAIAAgBQAlgbAxgQIABgBIAAgBQAOgFAPgEIAAAAQAXgCAUAEQABAQATACQAHgGACgIIASADIABAAQAFgIgDgKIAAgBIgBAAQgKghgLgfIAAgBIAAgIIAAAAIgGgOIgJhbIgCgIQgHgSgOgKIgIgMQgMgQgIgUQgDgCgDgFIgCgCQgJgFgCgMIgBAAQgHgEAAgJIAAgBQgcgLglACIgBgBQgIgDgMgCIAAgBQgSgNgHgYIAAgBQgIgCgGgBIAAgBIgLgEIAAgBQgEgGgHADIgBgBQgIgGgLABIgTgJQgVgJgJgUIgBAAQgCgGAAgJQAIgNANgJIABAAIAAgBQANgMASgGIAAAAIABAAIAOgEIALgBQAeALAmABQAFABACAEQABAGAGAHIAAABQAIAFAHABIABAAQALgEAIgHIABgBQAEgGAAgKIAAgCQgGgIADgOIAAgCQgGgOgMgIIgKgGIgngOQgVgIgFgWQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBIAAAAIAAgBQATgTAYgNIAAgBIAggIIAAAAQAJABAJgBIABAAQANgNATgIIAAgBQADgBAEAAIABAAIAHgGIgHAAIg2gBQBJgGBBAJIg/gBQAPABANADIABAAQAOAJAPAHIABABQADAGAGACIAAABQAIANAJANIAAABQAJARgBgbIAAgHIgBAAIgCgLQAKgQAUACIAMADQABACABACQAHAGAHAEIADAEIAAABQADABABADIAAABIABAAQAEAFABAHQABAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAIABABQAGArgTAZIAAABIgLAVQAEADAFgIIABAAQAHgJAGgJQAOgYAagEQAEAGAGAFQAGAEAIACIACACIADADIABACIAAABIACACIACACIgDAOIgBABQgEAGgCAHIgDACQgGAJgBAKQgFAFgDAHIgDACIgPAOIgpAjIgBAAQgQAFgEAQQAKARAJASQANAbAYARIAOALQACAUAPAUQAKANAOACIAAABIABABQAbAGAMAVIAAABQAOASAIAXIAAABQAaAzAKBDIAAABQANArACA2IAAACQAFAagDAbIgCAAQgMAKgGAQIgEACQgYAcgaAbQgJAJgOADIAAABQgDADgBAAQgCAAgBgDIgBgBIAAgBQgIACgNADIAAABIgTAIIAAABQgHAEgHACIgJACIAAABQgGAGgGABIgDAAIAAAAIgNADIAAABQgDAEgEACIgIACQADAEAEgEIABAAQAGADAJgEQAGgDADACIABACIAWgGIACgCIAMAAIACAAQAGgEANgCIAAgBQALABAOgGIADgBIAAAAIABgBIAMgGIAGgFIABABQAGABAEgCIAAAAQAJAGAJAJIAAABQAXALAaAJIABAAIANAMIAAABQAaAMAdAHIABABIACAAQAvgCAmAOQARAHANAMQAOANAPALQAjAKASgVIABgBIAPgEIABAAIAEgBIALAAQAAAEABABIAYAMIAAACQgBABAAABQAAABgBAAQAAABgBAAQAAAAgBAAQgEgCgGAFIAAABQAPAKAQAFIAAAbIgFgEQgXgQgkgCIgBAAIgGAEIgNgDIAAgBQgSgBgQgGQgJgEgJgGIgCgBIgCgBIAAgBIgjgbIgBAAIgCgCIgFgCQgGgBgEAEIgDgDQgTgHgWgBQgWgBgagEIgBgBIgGgEIgBAAIgIAAIgBAAIgMgEQgHgDgEgFQgDAAgCgCQgIgFgDADIgBgBQgRgNgWgJIAAgBIgDgGIgBAAIgBgBIgDgBQgMgEgKgJIgBAAQgUAJgVABQgFADgGABQgWADgLAIIgBAAIgYACIgYABIAAAAQgTAFgIAIIgBAAQgHgDgGABIgBAAQgBADgFAAIgBAAQgQABgLAEIAAgBQAAgTgHAQIAEAGIABAAQACAUAOADIAAAAQACAGgDAKIABAAIAAABQAGgEAHAHIABABQAFAAAGgFIABAAQAHACAJgGIABAAQACgBAGABIACAAQARgIAXgEIAAgBQALABAMgFIAAgBIARAAIAAgBQALgFAOABQAFAAADgDQAKgCAHAHIAAABQAAAMAKADIABAAQASABAOAFIABAAQABAEAFABIAAAAIAiAIIACABIAFAFIAAABIAnAUIANAIQAiAGAiALIABAAIAEAEIAAABQBcAMBGAnIAgAQIAPAHIAAAQQhBgfhHgZIgBAAQgLgBgLgHIgCAAQgJABgDgEIAAAAQgMgCgKABIgBgBQgYgJgWgEQgKgBgGgDQgJgEgHgBQgdgHgSgQIAAgBIgHAAIAAgBQgKgHgPgIIgBAAQgLgEgMACIgBgBQgIgFgQgBIAAgBIgIgHIgBAAQgVABgFgQIgBAAQgSgBgSAHIgRABQgKABgIADQgOAGgVABIAAAAQgMAEgKAFIgCAAIgDABQgFgMgQgBIgGADQgCADAAAEQABAaACAZQAJBCABBDQABARgCARQgDAZAWAEIADADIABABQgBAIAGACIABABIABAKIAAACIAAABQAKAVgNAUQAKAhAQAaIABABQAPgHALgLIAAAAIAIgBIABgBQADgEAFgDIAAgBIAIgBIABAAQABgDADgCIAAgBQALgDAHgGIAAgBQAKACAKgLIAAAAQBLghBJgjQAGgCAJAAQAMgIAQgFIABAAQACgGAIAAIABAAQAWgMAVgOQAVgNAdgEQARgMAdgCQAdgBAWgDQAGAEAMgBIABAAQAGAEAIABIABAAIANANIAAAXIgIgHIgCAAIgDABIABAHQgIgEgJgDQgDgGgEgFIgBAAQgGgEgHgBIgBAAQgRAFgOAGIgTADQgZACgYAKQgwAUgyAOQgNAEgNAGQgeAPgeASQgZAQgdAHQhFAQgeA8QgKAWAMAWIADAFIgBAAQAAANAIAKIABAAIABAHIAAABQADABABADIABAAQADAgAMAZIAAABIAEAeIACALIAFApIAAACQAKgEAGALQACAEgCAIIAAAAQACAIgHAJQABAIAIgCIABAAIAAgCQAagLAagOQAGAAAJgEIAmgRQBBggAtg2IANgQIABAAIAAgBIABgCIAAAAQAFgCACgFIAAAAIAAgBQAPgOAMgPIABAAIAAgBIAAgBQAMgMAKgNIABgBIAAgBIARgSIABAAIAAgBIAAgBQALgOAAgZQAAgJADgFIAAgBIAAgFIAJgiIABgBIAAgBIAAgEIABgBIABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQADALAFAIIgBAEQgGAZgGAYIAAABIAAABQABAOgEAJQAAASAHAMIAAABQAYAoAsAVIAAAAQAJAEAIACIABABIAAAUIgBAAQgogQgcgdIgBAAQgFgBgBgFIgBAAQgJgHgEgLIgBAAQgGgEgBgJIgBAAQgFgHgEgHIgBAAIgLAVIgBABQghAZgZAiIAAABQgZAdggAWIgBABIgBAAIAAABIgRAKIAAABQgGAGgFAHQgMAFgJAHQgKAIgKAFIgDACIgBABIgBAAIgCABIgkATIgBAAIhHAkIgBAAQADAMgFgDQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBIgBgBQgFAIgIAGIgBAAQgEADgDgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgKgFgNAGIAAABIgFADgADkG1QAIAFAKADIABAAIAOgNIABAAQgCgKgDgIIAAgBIgBgBQgJgNgKgNIgBAAIgGgCIAAgBQgDgHgGgDIgBgBQgBgGgDgEIgBAAQgFgCgEgEQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQgGgIgBgJIgBgBIgJgLIgBAAQgGAKgKACIAAABIAAABIgBAGIgFALIgCAAQgHABgIAHIAAAFQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgHAFADADQACAAgCAAIgCAAQgDgJAAAKIgBAAQgLADgIAHQgHACgGAHIgGADQgFABgMAHQADAFAFgDIABACIAAACQAiADAbAIIAfAJQARAEANgFQAGAGAGgEIABAAgADKEuQgDAlAiANQAGAfAjALQANAEALAAQAJAIAPABQAHgDABgIIABgHIABgFIABAAIABgIQADgHACgJQAJgkgPgWIABgCIAAgBIgGgCQgJgJgNgGQgKgagogGQgxADgFAxgAFrhTIAAABQAIAFAGAIIAAABQADALAGAIIABAAQAGABADAIIAAABIAgAOIAMADQAnAGAkgRIA4gaIAHABQAOgKALgMIAJgKIABABQAHgEACgJIARgUQAWgbASgbIAJgMQAdgjAEgrIADgTQADgTgJgKQgEgHgDgGIAAgBIgBgBQgMgLgPgGQgNgMgSgCIABgEIgCgBQgCgBgDADIgDADIgIAAIgKADQAAgDAGgDIAAgBQgLgDgKAEIgBAAQgJAMgEgLIgBgBIgBgBQgJACgGgCIASgUIAAgBIABAAIALgQIABAAIAAgCIAAgBIABAAQAGgDgCgJQgBgIABgIQADgRgGgMIAAgGIgCgPQgEgTgMgKIAAABIgQATIAAAGIAAABIAAABQAAAUgEAVIAAABQABAHgEABIAAAOIAAABIAAABQABAHgCAEIAAABIAAABIgBABIAAAAIAAABIAAAEIABAAIAAABIgCALQgJgggagMQgCgCgEAAIgLgDIAAAAIAAgCIAAgEIgBgDQgGgCgEADQgKAFgGgCIAAABIgJAFIgNAKIAAABIgBADQgJAJADAJQgBAXAIAQIAAABQANAPAOAMIABABQAKAFALAFQAMAEAGAFIgBAAQgHADgMgCIAAgBQgJgFgKgCIgBgBQgWgNgNgXIgBgBQgKgRABgbIABgBIABAAIAAgBIAAgHQAOghAmgJIABAAIAAgBQAPACADgJIAAgBQgDgLgNAEIgBAAQgFgFgNABIAAABQgXAJgPAQIAAABIgFAIIAAABQgLADABgQQAEgFAFgDIABAAIAAgBIABAAIAAgBQALgKAOgHIAAgBQAEgDgDgEQgLgEgOgBIhOgKIgCAAQgLAEgOgBIAAABQgLABgGAHIABAAQANgCAGAKQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQgJADgKgCQgNgDgKAEIAAABQgBAKgKABQAEAHAFAEIAAABIAAAAQAFAMgIAGIAAAAIAAAAIADAEIAAABQAFACADAGIAAABIARgDIAAAAIAGgBIADgBQAIgCAKABQAGABAFADIABAAQAMADgGAIIgBAAQgKAEgHgHIgBAAIgRAAIAAABQgZAGgDAaIgBAEQAAABABABQAAAAAAABQAAAAgBABQAAAAAAAAQgSACABgRQACgBAAgEIAAAAQAEgIAGgGIAAgBIAAgBQgGgFgHgEIgCAAQgLACgJAEIAAABIgCADIgOAMQgGAGgCALQACAaAPARIABAAQAAAEABADIABABIAGAIIAAABIAGACIABABIAFAFQgFAGgCAIQgCgFgFgFQgNgSgJgUQgJgVAJgXIAEgIQALgRADgTQAGgxgxADQgMAFgIANQgSAggHAkQgPBGAuA0IAGAHQAPAaAegHQAEgBAEgDQAKgJADgJQAHAUAWAOIACALQgHgBgGABIgBABQgFAIgLgEIAAABIgNgJIgBgBQgFgCgGgBIAJAIQAPAOARAMIABABQgQAAgPgMIgBAAIAAAAIgFAYIgBABQAFAKgDALIAAABQAEAHADAKIAAABQAGADADAGIAAAAQAPACAKgJIABAAQAFgdgHgVIAAgBQABgFAGgFIABAAQAHAWgEAaIAAABQAGAGABALIAAABQAIAEACALIAAABIAFAFIAAABQADAIAKAEQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQgCAGAEAJIAHgBIALABgADjiPIAAADQAIAGAKACIAAABIAKgCIAAgBQgMgaAHghIAEgTIgOgKIgBgBIgBAAIgKgDIAAgBQgCgHgHgCIgBAAQgLgCgOABIAAABIgLADIAAABIgJALIAAABIgCAJQACAHAFAEQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAgBgBIAAABQgEABgCACQACAWAOAMIAAABQAKAEAIAIQAGAHALABQABAAAAAAQAAAAAAAAQAAA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QgegIgPgVIgCgBIgBAAQgCgCgCgCIgBAAQgIgEgOAAIAAAAQgkgHgggNIAAgBQgDgDgDgFIgBAAQgQgFgKgLIgBgBQgJgFgGgIIgUgPQgbgYgmgNQgRgHgNgKIgCAAIgSgEIgBAAIAAgBQgGgHgJgEIAAgBQgLgKgDgQIAGgDIABAAIAAgBIAAgBQAGgCALADIABAAIAAgBIAEAAQAJAAAEgGIABAAQAFABAAADQAAACgFAEIAAABQgHgCgGAEIgBAAIAAABIgHABIAAACQABAJAGAGQAFAEAHACQANADALAFIAYAJQAOAKATAGIAAABQAaARAXAVQAYAUAbARQAjAMApAIIAAABQAWAKASAQQAEAEAFACIAKADQAjAGAcANQAIAEAFAIIAAABIAPAJIABABIACACQAeAWAZAcQAHAKAKAHQAfAYAlARQAnASAjAWIAdAUgAX/NKQAFgDAHgCIAAgBIBDgCIABAAIAAgBIAJgDIABgBQAZgCASgIIAMgEIAAAMIgMgCIgBABIgYAOIgCAAQgPABgRAAIgBAAQgFgBgFADIgFAAIgHgBQgRgBgMAEQgIACgGAAQgFgBgDgEgANGMzIgBgBIACAAIgBABIAAAAgALiLzIgBAAIABgFIAAAGIAAgBgATkLMQgBgGABgGIAAgGQACgEAAgHIABAAIAAgBQADgXgDgTQABgNAEgJIAAgBQAHADAAALQgCATACATIABAAIACAaIAAACIAAADIAAABQgHADAAAIQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAIAAABQgBAIgFABIAAABQgDgGAAgHgAMdLPQgBgBABgEQAEgFACAEQgEACgBAFgAUALDIAAgBIgBgHQAPgbATgWIABAAIAAgBIAAgBQAPgVAVgRIAAgBQAMAHACAQIAAABIAAACIACADQAEAGAGgMQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAIgQALgNIABAAIAAgBIAAgBQASgZATgWIACAAIAAgBQANgRAOgNIACgBQAFAAACgDIABAAQADgCABAEIgCAFQgUAfgZAeIAAABQgLAPgMAMIgBABQgJAUgOAQIAAABQgGAIgKADIgBAAQgKgFgDgNIgBAAQAAAAAAgBQgBAAAAAAQAAgBgBgBQAAAAAAgBIgBgBQgKACgGAOIgBAAQgGAFg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gLAEgNADIgBgBgAPNg5IAAgCIAKgCIACAAQgFADgGABIgBAAgAHSkDQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIAAAAIAAgBIAAgCQADgDAAgFIAAgBIAQgQIAAgBQAJgEAIgFIAAgBIARAAIABAAQANAEAEANIAAABIAAACQgCANgGgKIgBAAQgEgGgFgDIgBgBIgLgBIgBABQgIADgGAFIgBABQgJAGgFALIAAABQAAAHACAKIgBAAIgEAAQgKAAAAgPgAFUkNIgFgEQgEgDgCgDIAAgFIABAAIABAAIANAPIgEAAgAGnkoIgCgGIABgHIAAgFIAAgEIgBgMQACACABADIAAACQABAPgBAMIgBAAgAExk8IAAgXIAAgBQABgIgBgFQAJgPALgMIABAAIAAgBIAAgBIAXgQIABgBQAPgFAQABIACAAIAJAGIACAAQALAJAEAPIAKAdIAAABIAAACQgEgTgKgMIgCgEQgOgZgfAGQgGACgFAEIgCABIgDABQgRANgDAUIgFAHIAAABIgCAJQgBAKACAHIAAABQgBAHABAGQgFgGgGgEgAHimvQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAIAAABIgFAAgAKipcQgFgHAFgGIACgEIAFACIADADIAAAIIgCAEIgIAAgAJIqCIABgEQAEADADADQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAABQgEADgCAAQgDAAAAgIgAKFqNIAAgDQALAAAGAJIACAEQgHADgEAAQgJAAABgNgAJDrxIAAgCIAAgCQAFADADADQAAABAAAAQABAAAAABQAAAAgBAAQAAABAAAAQgDAEgCAAQgDAAAAgJgAIfr7IABgEQAFADADADIAAADQgEADgCAAQgDAAAAgIg");
	this.shape_485.setTransform(176.7,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).to({state:[{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.instance_9}]},84).wait(91));

	// Layer 1
	this.instance_10 = new lib.BubIdea();
	this.instance_10.setTransform(-104.9,67.7,0.901,0.901,0,0,0,58.7,110.9);

	this.instance_11 = new lib.BubWalksGlass();
	this.instance_11.setTransform(-88.8,75.7,0.944,0.944,0,0,0,58.7,110.9);
	this.instance_11._off = true;

	this.instance_12 = new lib.BubTrips();
	this.instance_12.setTransform(22.6,31.8,1.609,1.609,0,0,0,58.7,110.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},49).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},6).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_12}]},7).to({state:[{t:this.instance_12}]},8).to({state:[{t:this.instance_12}]},3).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(49).to({_off:false},0).to({scaleX:1.04,scaleY:1.04,x:-62.3,y:48.8},4).to({regX:58.8,scaleX:1.1,scaleY:1.1,x:-62.5,y:65.3},4).to({regY:111,scaleX:1.18,scaleY:1.18,x:-36.5,y:38},4).to({scaleX:1.26,scaleY:1.26,x:-36.3,y:55},4).to({scaleX:1.32,scaleY:1.32,x:-10.8,y:26.2},3).to({regY:110.9,scaleX:1.35,scaleY:1.35,x:-3.5,y:60.4},3).to({_off:true,regX:58.7,scaleX:1.61,scaleY:1.61,x:22.6,y:31.8},6).wait(98));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(71).to({_off:false},6).to({regX:58.6,rotation:75,x:137.8,y:61.2},5).to({regX:58.7,scaleX:1.68,scaleY:1.68,rotation:105,x:264.5,y:160.1},7).to({rotation:60,x:475.3,y:137.9},8).to({x:580.8},3).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.1,32.5,514,233.6);


// stage content:



(lib.adjective_Scene10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene11:0,scene11_repeat:517});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		function openMenu(){
		
		 window.open ("../menu/main_menu.html","_self");
		}
		
		function openNext(){
		
		 window.open ("adjective_test1.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("adjective_Scene9.html","_self");
		}
		this.play();
	}
	this.frame_528 = function() {
		this.gotoAndPlay("scene11_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(528).call(this.frame_528).wait(1));

	// Main
	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(48.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(501,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.instance = new lib.Copyright("synched",0);
	this.instance.setTransform(275,392.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAIQgDgDgBgFQABgEADgDQADgEAEAAQAFAAADAEQADADABAEQgBAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(315.9,25.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAYAvIgDgVIgCgWIABgHIAAgJQAAgVgHAAQgLAAgJANQgIALgFAQIgBAKIgBAJIABAJIAAAJQAAAEgDADQgDADgDAAQgFAAgCgDQgDgDAAgEIgBgJIgBgJIACgaIACgbIgBgKIAAgJQAAgEADgDQACgCAFAAQAIAAACAMIAAAMQAQgWAQAAQAPAAAGAOQAFAJgBASIAAAKIAAAHQABAIACANQACANAAAIQgBAEgCADQgDACgEAAQgIAAgBgJg");
	this.shape_1.setTransform(308.4,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAWAuQgNAHgOAAQgMgBgJgFQgJgHgCgLQgEgbAAgRQAAgOADgRQACgJAIAAQAEAAADADQACADAAAEIgBAOIgBAQIABAaQABALACAHIAGACIAGABQAMAAAOgDIAAgUIAAgRQAAgWACgPQABgJAIAAQAEAAADADQADACAAAFIgCAlIAAATIAAAUIABAHIAAAHQAAAEgDADQgDADgEAAQgHAAgCgKg");
	this.shape_2.setTransform(297.7,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcApQgNgOgBgWQAAgUALgRQAOgUAXAAQATAAAKASQAIAOAAAUQAAAUgLAQQgNARgTAAQgQAAgMgMgAgQgTQgGAMAAAMQAAAOAHAIQAHAGAIAAQAJAAAHgHQAIgIABgOQABgkgWAAQgMAAgIANg");
	this.shape_3.setTransform(287.1,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYAvIgDgVIgCgWIABgHIAAgJQAAgVgIAAQgLAAgIANQgJALgFAQIgBAKIAAAJIAAAJIABAJQAAAEgDADQgCADgFAAQgEAAgCgDQgDgDAAgEIgBgJIgBgJIACgaIABgbIAAgKIAAgJQAAgEADgDQACgCAEAAQAJAAACAMIAAAMQAQgWAPAAQAQAAAGAOQAFAJgBASIAAAKIAAAHQAAAIACANQADANAAAIQAAAEgDADQgDACgEAAQgJAAAAgJg");
	this.shape_4.setTransform(277.1,21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAeAxIgGgHIgQAIQgIADgCAAQgXAAgKgNQgLgMABgZQAAgWAQgRQAQgRAVAAQAIAAAKAFQAOAFAAAIQAAADgCACIgCAMIAAAUQAAAMABAHIAHARIACAFIAAACQAAAEgCACQgDADgEAAQgBAAgGgFgAgPgXQgLAMAAAOQgBAQAHAIQAFAIALAAQAIAAAGgDIAKgHQgDgZAAgMIABgJIABgLIgGgDIgEAAQgOAAgKAMg");
	this.shape_5.setTransform(260.6,21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaA2QgPgGAAgJQAAgEADgDQADgDAEAAQADAAAFAFQACACAIABIAMABQAFAAAHgCQAJgCAAgHQAAgNgTgFIgIgCQgMgDgGgDQgIgEAAgLQAAgUATgJIARgGQANgEAFgDQAEgBAFAAQAEAAADACQACADAAAFIACAIIABAIQAAAFgDACQgCADgEAAQgGAAgCgEQgBgCgCgIIgWAHQgOAGAAAJIAGACQAUAEALAHQAQAIAAATQAAAQgNAIQgMAHgPAAQgNAAgMgEg");
	this.shape_6.setTransform(244.3,20.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AggAqQgPgMAAgWQAAgYAMgRQANgTAWAAQAPAAAKAGQANAGAAAOQAAAKgLAIIgVAJIgjASQAFAIAIAEQAJAEAIAAQAHAAAJgCQAMgEADgFQADgFAEAAQAEAAACACQADADAAADQAAALgRAIQgPAHgPAAQgUAAgNgLgAgTgZQgIAJgEARIAegMQAQgJAHgGQgIgIgOAAQgLAAgIAJg");
	this.shape_7.setTransform(234.4,21.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIBHQgDgDAAgFIAAgSIAAgRIABgWIAAgVQABgFACgDQADgDAEABQACgBADADQADADgBAFIAAAVIgBAWIAAARIABASQAAAFgDADQgDACgCAAQgEAAgDgCgAgFg0QgDgEgBgFQABgEADgEQAEgDACAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgCAAgEgDg");
	this.shape_8.setTransform(226.1,18.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPBTQgDgDAAgEIABgCQACgMAAgPIgBgbIAAgaIgPABQgKAAAAgKQAAgJARgBIAKAAIABgPQADgWAIgKQAIgMAWAAQAOAAAAAJQAAAJgNAAQgYAAgDAhIAAAGIAWgBQAPAAAAAKQAAAHgHABIgIABIgXABIAAAUIAAATIAAASQAAASgBALQAAAHgIAAQgEAAgDgCg");
	this.shape_9.setTransform(217.9,19.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIBHQgDgDAAgFIAAgSIAAgRIABgWIAAgVQABgFACgDQADgDAEABQACgBADADQADADgBAFIAAAVIgBAWIAAARIABASQAAAFgDADQgDACgCAAQgEAAgDgCgAgFg0QgDgEgBgFQABgEADgEQAEgDACAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgCAAgEgDg");
	this.shape_10.setTransform(210.4,18.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiBCQgNgOAAgVQAAgaAOgOQANgQAVAAQALAAAGAEIAJAGIADg3QACgJAHAAQAJAAAAAKQAAAOgEAuIgBAaQAAAhADARIAAACQAAAEgCADQgDACgEAAQgGAAgDgJQgHAFgHADQgIACgGAAQgUABgOgOgAgWABQgIAJAAAVQAAAMAJAJQAJAJAMAAQAGAAAGgDQADgBAIgHIADgDIgBgRIAAgMIABgLQgEgHgGgCQgGgFgJAAQgOAAgJAIg");
	this.shape_11.setTransform(201.5,18.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcApQgNgOgBgWQAAgUALgRQAOgUAXAAQATAAAKASQAIAOAAAUQAAAUgLAQQgNARgTAAQgQAAgMgMgAgQgTQgGAMAAAMQAAAOAHAIQAHAGAIAAQAJAAAHgHQAIgIABgOQABgkgWAAQgMAAgIANg");
	this.shape_12.setTransform(190.3,21.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEA5QgDgDAAgEIgCgjQgDgVAAgMQAAgKgDgGQgHADgHAHIgLANIgFAGIgBAQIgBAQIABAJIABAHQAAAEgDADQgDADgEAAQgLAAAAgZIABgSIABgPIgBgQIgBgPQAAgXAKAAQAEAAADAEQADADAAAEIgBAGIAAAGIAAAKQAFgLAKgIQAKgIAHAAQAPAAAEAPQAFgHAIgEQAHgDAKAAQAQAAAGARIAEAcIAHA1QAAAEgDADQgCADgFAAQgIAAgBgJIgEgeIgDgcIgDgNQgEgJgDAAQgEAAgKAGQgJAGgDADIAAASIADAZQACAPAAAKQAAAEgDADQgCADgEAAQgDAAgCgDg");
	this.shape_13.setTransform(177.6,21.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CE0063").s().p("AgqBLQgJgJAAggIAAgNIABgQIgBgFQAAgBACgDIACgqIgBgKIgBgKQAAgNAKAAQAEABADADIAWgFIARgCQAYABAOAFQAHACAAAIQAAADgCADQgDADgEABIgDgBQgRgFgQAAIgPACIgUAFIABAJIgCAmIApgEIAXgCQAEAAADADQADACAAAFQAAAHgJABIgXACIgrAEIgBANIAAALQAAAWADAEQACACANAAIARAAIASAAIAFgBIAGAAQAKAAAAAKQAAAIgIACQgJACgcAAQgfgBgJgHg");
	this.shape_14.setTransform(157.7,18.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CE0063").s().p("AgQBHQgMgegPg2IgHgaQgGgVAAgGQAAgEADgDQADgDAEAAQAHAAACAIIAEARIAJAhQAKAiAJAbIAAgCIAYhEIAJgZQAFgOAHgHQADgFAEAAQAEAAADAEQADADAAAEQAAACgCADQgGAJgEAKIgHAWIgaBFQgFAMgGAMQgBAHgGAAQgHAAgDgIg");
	this.shape_15.setTransform(145.3,19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CE0063").s().p("AgpBHQgEgCAAgFQAAgEAEgDQACgDAEAAIAVgCIABgSIAAgQIgBgRQAAgUACgiIgMAAIgNABQgEAAgDgDQgCgDgBgEQAAgJAJgBIAegBQARAAAeAEQAJABAAAKQgBAEgDADQgCACgEAAIgQgBIgQgCQgCAcAAAYIAAARIAAARIAAARIAegBQAFAAACADQADADAAAEQAAAEgDADQgCADgFAAIgQAAIgQABIgRACIgUABQgEAAgCgDg");
	this.shape_16.setTransform(132.7,19);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CE0063").s().p("AgGBHQgDgCAAgFIABgEIAAgFIAAgOIgBgPIgCglIgDgnIgJAAQgVAAgNgDQgHgCAAgIQAAgEACgDQADgDAFAAIAPACIAQABIASAAIAQgBIAWABIAWACQAEAAADADQADACAAAFQAAAEgDADQgDACgEABIgWgBIgWgBIgHAAIACArQADAbAAAPIAAAKIABALQAAAHgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_17.setTransform(121.3,18.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CE0063").s().p("AgnA8QgOgQAAgUQAAgfAcgjQAXgdAVAAIAJABIAHABQADgFAGAAQAGAAACAIQACAIAAAMQAAAEgCADQgDAEgFAAQgGAAgDgIQgDgFgCgCQgCgBgJAAQgOAAgPAVQgXAeAAAYQAAAMAIAJQAIAKAMAAQAIAAAKgGQAGgDALgIQAGgEADAAQAEAAADADQADAEAAAEQAAADgEAEQgaAXgYAAQgVAAgNgPg");
	this.shape_18.setTransform(107.8,18.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CE0063").s().p("AgqBLQgJgJAAggIAAgNIABgQIgBgFQAAgBACgDIACgqIgBgKIgBgKQAAgNAKAAQAEABADADIAWgFIARgCQAYABAOAFQAHACAAAIQAAADgCADQgDADgEABIgDgBQgRgFgQAAIgPACIgUAFIAAAJIgBAmIApgEIAXgCQAEAAADADQADACAAAFQAAAHgJABIgXACIgrAEIgBANIAAALQAAAWADAEQACACANAAIARAAIASAAIAFgBIAGAAQAKAAAAAKQAAAIgIACQgJACgcAAQgfgBgJgHg");
	this.shape_19.setTransform(95.6,18.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CE0063").s().p("AgnBDQgSgOAAgRQAAgMAKAAQAKAAAAAMQAAAIALAIQALAHAKAAQAGAAADgxQACgVAAgjIgBgLIgFAAIgKAAIgMAAQgEAAgDgDQgDgDAAgEQAAgKAOAAIAJAAIAJAAIASAAIASgBQAWAAAAALQAAAEgCADQgDADgEAAIgGAAIgHgBIgLAAIAAAMQAABGgJAiQgHAVgOAAQgRAAgRgMg");
	this.shape_20.setTransform(82.5,19.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CE0063").s().p("AgdBOQgLgCgGgFIgBAAQgEAAgDgDQgDgDAAgEIABgeIABgfIAAggIgBgiQAAgEAEgFQAEgEAEAAQADAAANAGIARAIQAaAKAUAUQAXAXAAAZQAAARgIAPQgIAQgOAJQgPAKgaAAQgHAAgJgCgAgkgaIABAaIgCA2IACABQAJAGANAAQAUAAAKgHQAKgGAFgLQAGgLAAgMQAAgagegTQgIgHgkgQg");
	this.shape_21.setTransform(68.9,19);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CE0063").s().p("AAhAyIgGgfIgaAFIgYAGIgQAlQgEAFgFAAQgEAAgDgCQgDgDAAgEQAAgFAOgfQgBgDAAgDQAAgIAJgCQAMgTAQgbQAVglAHAAQAHAAADALIAGAgIAPBCIAFAQIADAKQAAAFgDACQgDADgEAAQgJAAgHgXgAgLAHIAigHIgJgkg");
	this.shape_22.setTransform(53.9,19);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAXAvIgCgVIgBgWIAAgHIAAgJQAAgVgIAAQgKAAgIANQgJALgGAQIgBAKIAAAJIAAAJIABAJQAAAEgCADQgEADgEAAQgEAAgDgDQgCgDAAgEIgBgJIAAgJIABgaIABgbIAAgKIAAgJQAAgEACgDQAEgCADAAQAKAAAAAMIAAAMQARgWAPAAQAQAAAGAOQAEAJAAASIAAAKIAAAHQAAAIACANQACANAAAIQAAAEgCADQgDACgEAAQgJAAgBgJg");
	this.shape_23.setTransform(35.7,21.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAhAyIgGgfIgaAFIgYAGIgQAlQgEAFgFAAQgEAAgDgCQgDgDAAgEQAAgFAOgfQgBgDAAgDQAAgIAJgCQAMgTAQgbQAVglAHAAQAHAAADALIAGAgIAOBCIAGAQIADAKQAAAFgDACQgDADgEAAQgJAAgHgXgAgLAHIAigHIgJgkg");
	this.shape_24.setTransform(22.8,19);

	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(523.4,14,0.752,0.752);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#9900CC").ss(3,1,1).p("EAojAYSMhRFAAAMAAAgwjMBRFAAAg");
	this.shape_25.setTransform(275,188.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.btn_menu},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.btn_goNext},{t:this.btn_goBack}]}).wait(529));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgoiAb+MAAAg37MBRFAAAMAAAA37g");
	mask.setTransform(275,212.3);

	// Anim
	this.instance_1 = new lib.WakeUp();
	this.instance_1.setTransform(361.5,211.9,1,1,0,0,0,172.3,133.3);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(529));

	// content
	this.instance_2 = new lib.bk("synched",0);
	this.instance_2.setTransform(261.5,211.9,1.007,1,0,0,0,282.3,176.6);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(529));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275.2,200.1,549.3,401.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;