(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.vol_pos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("ABagwIAABgQAAAWgZAAIiBAAQgZAAAAgWIAAhgQAAgVAZAAICBAAQAZAAAAAVg");
	this.shape.setTransform(9,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKA0QgDgDAAgGIAAgfIgFABIgTAAQgVAAAAgNQAAgHAHgDQADAAALAAIAYgBIAAgQIABgRQABgFADgDQADgCAEAAQAFAAADADQAEAEgBAFIAAAHIgBAIIABAPIAAAAIAKABIAIAAIAHgBIABAAIAJABQAKABADAGIABAEIgBAFIgDADIgDADIgFABIgEgBIgCAAIgEAAIgNAAIgOAAIAAAgQAAAMgLAAQgGAAgDgDg");
	this.shape_1.setTransform(9.6,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCFF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICBAAQAYAAABAWIAABfQgBAWgYAAgAgHAqQAAAGADADQAEADAEAAQAMAAABgMIAAggIANAAIAOAAIADAAIACAAIAFABIAFgBIADgDIACgDIABgFIgBgEQgCgGgKgBIgJgBIgBAAIgHABIgIAAIgKgBIAAAAIgBgPIABgIIAAgHQAAgFgEgEQgDgDgGAAQgEAAgBACQgEADgBAFIgBARIAAAQIgYABQgKAAgDAAQgHADgBAIQABAMAUAAIATAAIAFgBg");
	this.shape_2.setTransform(9,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICBAAQAYAAABAWIAABfQgBAWgYAAgAgHAqQAAAGADADQAEADAEAAQAMAAABgMIAAggIANAAIAOAAIADAAIACAAIAFABIAFgBIADgDIACgDIABgFIgBgEQgCgGgKgBIgJgBIgBAAIgHABIgIAAIgKgBIAAAAIgBgPIABgIIAAgHQAAgFgEgEQgDgDgGAAQgEAAgBACQgEADgBAFIgBARIAAAQIgYABQgKAAgDAAQgHADgBAIQABAMAUAAIATAAIAFgBg");
	this.shape_3.setTransform(9,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.9,16);


(lib.vol_neg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AhAhFICBAAQAZAAAAAVIAABgQAAAWgZAAIiBAAQgZAAAAgWIAAhgQAAgVAZAAg");
	this.shape.setTransform(9,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMALIgCAAIgPAAQgLAAAAgKQAAgJALAAIAdgBIAdgBIAEABQAIAAAAAJQAAAIgKABIgVABIgJABIgNAAg");
	this.shape_1.setTransform(9.1,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICAAAQAaAAAAAWIAABfQAAAWgaAAgAABgLIgdAAQgLAAAAAKQAAAJALAAIAPAAIACAAIANAAIAJAAIAVgBQAKgBAAgIQAAgJgIAAIgEgBIgdABg");
	this.shape_2.setTransform(9,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICAAAQAaAAAAAWIAABfQAAAWgaAAgAABgLIgdAAQgLAAAAAKQAAAJALAAIAPAAIACAAIANAAIAJAAIAVgBQAKgBAAgIQAAgJgIAAIgEgBIgdABg");
	this.shape_3.setTransform(9,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099FF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICAAAQAaAAAAAWIAABfQAAAWgaAAgAABgLIgdAAQgLAAAAAKQAAAJALAAIAPAAIACAAIANAAIAJAAIAVgBQAKgBAAgIQAAgJgIAAIgEgBIgdABg");
	this.shape_4.setTransform(9,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.9,16);


(lib.vol_mute = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AASBRQAAgIgQgQQgMgNgHAAIAAhZQAHAAANgOQAPgOAAgHg");
	this.shape.setTransform(15.6,13.9,1.2,1.201);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgGglIANAAQABAAAAABIAABJQAAABgBAAIgNAAQgBAAAAgBIAAhJQAAgBABAAg");
	this.shape_1.setTransform(10.5,13.8,1.2,1.201);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#990000").ss(1,1,1).p("AhHBRQgCgDgDgCQgDgDgBgCQgbgeAAgpQAAgsAfgfQAgggAsAAQAjAAAcAUQAGAEAHAIQACACADACQAbAeAAApQAAAtggAfQgfAggtAAQgpAAgegbICYiY");
	this.shape_2.setTransform(15.1,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAJAAQAAANgJAJQgCAFgGACIAAg5QAGADACAFQAJAIAAAMg");
	this.shape_3.setTransform(20.6,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("ACWAAQAAA7gsAoQgtAqg9AAQg+AAgsgqQgrgoAAg7QAAg6ArgqQAKgIAKgHQAFgDAGgDQAJgFAKgEQAEgBAFgCQAWgHAZAAQAaAAAXAHQAEACAEABQAKAEAJAFQAFADAFADQAKAHAKAIQAsAqAAA6g");
	this.shape_4.setTransform(15,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAhGBSQAeAbAoAAQAuAAAfggQAfggAAgsQAAgpgbgeQAbAeAAApQAAAsgfAgQgfAgguAAQgoAAgegbICXiYIiXCYgAhqABQAAApAaAeIAFAFIAFAFIgFgFIgFgFQgageAAgpQAAgsAfggQAggfArAAQAkAAAbAUQAHAEAHAHIAEAFIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfQgfAgAAAsIAAAAgAAuAaQAHgCACgGQAJgJAAgMQAAgMgJgJQgCgFgHgDIAAA6IAAAAgAAuAagAAuggQAHADACAFQAJAJAAAMQAAAMgJAJQgCAGgHACgABAgDIAAAAg");
	this.shape_5.setTransform(15,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CCFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAhLhLQgfAgAAAsQAAApAaAeIAFAFIAFAFQAeAbAoAAQAuAAAfggQAfggAAgsQAAgpgbgeIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfg");
	this.shape_6.setTransform(15,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhHBRICYiYQAbAeAAApQAAAtggAfQgfAggtAAQgpAAgegbgAAuAZQAGgCADgGQAJgIAAgMQAAgNgJgJQgDgFgGgDIAAA6IAAAAgAhMBMIgEgFQgbgeAAgpQAAgsAfgfQAgggAsAAQAjAAAcAUQAGAEAHAIIAFAEIiYCYIgFgFgAAuAZgAAughQAGADADAFQAJAJAAANQAAAMgJAIQgDAGgGACgABAgDIAAAAg");
	this.shape_7.setTransform(15.1,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAhLhLQgfAgAAAsQAAApAaAeIAFAFIAFAFQAeAbAoAAQAuAAAfggQAfggAAgsQAAgpgbgeIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfg");
	this.shape_8.setTransform(15,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAAABtQAuAAAfggQAfggAAgsQAAgpgbgeIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfQgfAgAAAsQAAApAaAeIAFAFIAFAFQAeAbAoAAgAhGBSICXiYQAbAeAAApQAAAsgfAgQgfAgguAAQgoAAgegbgAAuAaQAHgCACgGQAJgJAAgMQAAgMgJgJQgCgFgHgDIAAA6IAAAAgAhGBSIAAAAgAhLBNIgFgFQgageAAgpQAAgsAfggQAggfArAAQAkAAAbAUQAHAEAHAHIAEAFIiXCYIgFgFgAAuAagAAuggQAHADACAFQAJAJAAAMQAAAMgJAJQgCAGgHACgABAgDIAAAAgABRhGIAAAAg");
	this.shape_9.setTransform(15,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_8},{t:this.shape_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,30.1);


(lib.menu_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWAoQgQgMAAgdIAAgIIAAgIIABgHIAAgGQAAgFABgEQADgFAEgBQADAAADACQADADgBADIAAAKIAAAKIAAAIIAAAIQAAAJABAHQADAJAFAEQADABAIABQAPAAAGgaQADgNAAgaIABgFQADgFAFAAQADAAADAEQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAXgCANQgDATgKAOQgEAFgGAEQgHAFgIgBQgPABgGgGg");
	this.shape.setTransform(37.7,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoAtQgDgCAAgDIABgIIAAgHIAAgKIAAgKIAAgKIAAgMIgBgKIAAgLQAAgDADgDQADgDAEAAQAEAAAFAIQAaAmAaAXIAAgJIgBgmIgBgGIAAgHQAAgIAJAAQAJAAAAAeIAAAJIgBAkIAAAJQgBAIgIAAQgEAAgFgFQgWgUgcgkIgBASIABAOIAAAOQAAARgJAAQgDAAgDgDg");
	this.shape_1.setTransform(28.5,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAADQAAAHgIAAIgOABIgYADIAAAMQAAAMABABQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAGgHACQgGABgRAAQgUAAgFgGg");
	this.shape_2.setTransform(20,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAfAmIgCgOQgDgKgEgTIgJAXIgDALIgFALQgDAFgEAAQgFAAgEgHIgDgLIgIgeIgIAcIgBANQgDAJgHgBQgDAAgDgCQgCgDAAgDQAAgKAFgNIAGgWIADgSQADgMADgFQADgEAEAAQAGABACAFQADAFADAQQACAPAFARQAGgRAGgVIADgNQADgIAHAAQAGgBADAKIADAPQADAYAGASIAFAUQAAADgDACQgDACgDAAQgGABgEgKg");
	this.shape_3.setTransform(10.9,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("Ai4hoIFxAAQAxAAAAAwIAABxQAAAwgxAAIlxAAQgxAAAAgwIAAhxQAAgwAxAAg");
	this.shape_4.setTransform(23.4,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai4BpQgxAAAAgwIAAhxQAAgwAxAAIFxAAQAxAAAAAwIAABxQAAAwgxAAg");
	this.shape_5.setTransform(23.4,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1.5,1,1).p("Ai4hoIFxAAQAxAAAAAwIAABwQAAAxgxAAIlxAAQgxAAAAgxIAAhwQAAgwAxAAg");
	this.shape_6.setTransform(23.4,10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CCFF").s().p("Ai4BpQgxAAAAgxIAAhvQAAgxAxAAIFxAAQAxAAAAAxIAABvQAAAxgxAAg");
	this.shape_7.setTransform(23.4,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("Ai4BpQgxAAAAgxIAAhvQAAgxAxAAIFxAAQAxAAAAAxIAABvQAAAxgxAAg");
	this.shape_8.setTransform(23.4,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,48.8,23);


(lib.VerbalsExplanation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAiBdQgDgLgDgSQgCgSAAgLIABgKIAAgKQAAgWgMAAQgPAAgLANQgHAIgKAUQAAAugFAJQgDAHgHAAQgFAAgEgCQgEgEAAgFIACgGQAAgCAAgPIABgTIAAhYIABgUIgBgMIgBgMQAAgFADgDQAEgDAFgBQAKAAACALQACAMAAAKIgBAbQgBANABANIAAALQAJgNAMgIQAKgGANAAQAVAAAHANQAGAJAAAWIABAXIADAZQABAPACALIABADQAAAFgEADQgDADgGABQgIgBgCgIg");
	this.shape.setTransform(124.3,-11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_1.setTransform(110.5,-8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgfAQgVQAQgXAcAAQAUAAANAGQAPAIAAASQAAANgOAKQgGAEgTAIIguAWQAHALAKAEQAKAGANAAQAIAAAMgDQAOgFAEgGQAEgHAFABQAEAAAEACQADADAAAFQAAAOgWAJQgTAIgRAAQgbAAgRgNgAgYggQgKALgFAWIAlgQQAVgLAKgIQgLgKgSAAQgOAAgKAMg");
	this.shape_2.setTransform(97.4,-8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgfAQgVQAQgXAcAAQAUAAANAGQAPAIAAASQAAANgOAKQgGAEgTAIIguAWQAHALAKAEQAKAGANAAQAIAAAMgDQAOgFAEgGQAEgHAFABQAEAAAEACQADADAAAFQAAAOgWAJQgTAIgRAAQgbAAgRgNgAgYggQgKALgFAWIAlgQQAVgLAKgIQgLgKgSAAQgOAAgKAMg");
	this.shape_3.setTransform(83.7,-8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvBjQgDgDAAgGIAAgxIAAgvQAAgbgBgWIgCgZQAAgIADgHQAEgGAHgBQAEAAAEAEQADADAAAFIgBAEIAAAHQAKgIAKgDQAJgDAJgBQAZAAALAXQAJARAAAdQAAAZgOASQgPASgZAAQgLAAgPgEIAAA6QAAAGgDADQgEADgFAAQgFAAgEgDgAgLhAQgGAEgKAJQABAbAAAeQAOAFAMAAQAPAAAIgLQAHgJAAgQQAAgWgFgLQgFgLgLAAQgLAAgJAFg");
	this.shape_4.setTransform(70.1,-5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgDQADgEAFgBQAEABAGAFQADADAKACIAOACQAJgBAIgCQALgEAAgHQAAgQgXgGIgLgEQgRgDgGgEQgKgHAAgNQAAgZAYgMQAHgDAPgFIAXgHQAFgCAGgBQAFABAEADQADADAAAGIACALIABAKQAAAFgDAEQgEADgFAAQgHAAgCgEQgCgDgBgLQgKACgTAHQgSAHAAAMIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAJgVAAQgQAAgOgGg");
	this.shape_5.setTransform(56.9,-9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTBoQgDgDgBgFIAAgDQADgPAAgTIAAghIAAgjIgUABQgMAAAAgLQAAgMAVgBIAMAAIACgTQADgbAKgNQANgPAbAAQARAAAAALQAAAMgQAAQgeAAgDApIgBAIIAbgCQAUAAAAAMQAAAJgKACIgKABQgFgBgXACIAAAbIAAAXIAAAWQAAAYgCANQgBAJgKAAQgFAAgDgDg");
	this.shape_6.setTransform(37.1,-11.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_7.setTransform(24.2,-8.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_8.setTransform(4.4,-10.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AguA4IAAhVIAAgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAFAHQAEAHAAAPIAAAJQgBAPgLAAQgKAAAAgMIAAgIIgBgLQgTADgLAIQgLAIgHAQIAABCQAAAMgMAAQgKAAAAgMg");
	this.shape_9.setTransform(-7,-8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_10.setTransform(-19.8,-8.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgvBjQgDgDAAgGIAAgxIAAgvQAAgbgBgWIgCgZQAAgIADgHQAEgGAHgBQAEAAAEAEQADADAAAFIgBAEIAAAHQAKgIAKgDQAJgDAJgBQAZAAALAXQAJARAAAdQAAAZgOASQgPASgZAAQgLAAgPgEIAAA6QAAAGgDADQgEADgFAAQgFAAgEgDgAgLhAQgGAEgKAJQABAbAAAeQAOAFAMAAQAPAAAIgLQAHgJAAgQQAAgWgFgLQgFgLgLAAQgLAAgJAFg");
	this.shape_11.setTransform(-32.8,-5.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHAAAPIAAAJQgBAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgLAIgHAQIABBCQAAAMgNAAQgLAAAAgMg");
	this.shape_12.setTransform(-52.6,-8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgfAQgVQAQgXAcAAQAUAAANAGQAPAIAAASQAAANgOAKQgGAEgTAIIguAWQAHALAKAEQAKAGANAAQAIAAAMgDQAOgFAEgGQAEgHAFABQAEAAAEACQADADAAAFQAAAOgWAJQgTAIgRAAQgbAAgRgNgAgYggQgKALgFAWIAlgQQAVgLAKgIQgLgKgSAAQgOAAgKAMg");
	this.shape_13.setTransform(-65.7,-8.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAiBdQgDgLgDgSQgCgSAAgLIABgKIAAgKQAAgWgMAAQgPAAgMANQgGAIgKAUQgBAugEAJQgDAHgHAAQgFAAgEgCQgEgEAAgFIACgGQABgCAAgPIAAgTIABhYIAAgUIgBgMIgBgMQAAgFADgDQAEgDAFgBQAKAAACALQACAMAAAKIgBAbQgBANAAANIAAALQAKgNAMgIQAKgGANAAQAVAAAHANQAGAJAAAWIABAXIADAZQABAPACALIABADQAAAFgDADQgEADgFABQgJgBgCgIg");
	this.shape_14.setTransform(-79.8,-11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_15.setTransform(-93.1,-10.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_16.setTransform(-105.8,-8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},4).wait(6));

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJALQgFgFAAgGQAAgFAFgFQAEgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEg");
	this.shape_17.setTransform(137.2,71);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF6600").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgEAFABQAEgBAGAHQADADAKABIAOABQAJAAAIgCQALgEAAgHQAAgQgXgHIgLgDQgRgDgGgFQgKgFAAgOQAAgZAYgLQAHgEAPgEIAXgIQAFgDAGABQAFgBAEAEQADADAAAGIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgCgBgKQgKACgTAGQgSAIAAALIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAIgVAAQgQAAgOgFg");
	this.shape_18.setTransform(127.6,64.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6600").s().p("AguA4IAAhVIAAgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAFAHQAEAHAAAPIAAAJQgBAPgLAAQgKAAAAgMIAAgIIgBgLQgTADgLAIQgLAIgHAQIAABCQAAAMgMAAQgKAAAAgMg");
	this.shape_19.setTransform(116.3,65.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF6600").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_20.setTransform(103.2,65.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF6600").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_21.setTransform(92.9,62.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF6600").s().p("AgTBoQgEgDABgFIAAgDQACgPAAgTIAAghIAAgjIgTABQgNAAAAgLQAAgMAWgBIALAAIACgTQADgbALgNQAMgPAaAAQASAAAAALQAAAMgQAAQgeAAgDApIAAAIIAbgCQATAAAAAMQAAAJgJACIgKABQgGgBgWACIgCAbIABAXIABAWQAAAYgDANQgBAJgKAAQgEAAgEgDg");
	this.shape_22.setTransform(82.6,62.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF6600").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_23.setTransform(73.2,62.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF6600").s().p("AgrBUQgRgSAAgbQAAggARgTQASgUAaAAQAOAAAIAEIAMAJQABg0ACgRQACgLAJAAQAMAAAAAMQAAAQgFA7QgBAQgBATQABApADAUIAAADQAAAFgDADQgEADgEAAQgHAAgEgLQgJAGgJAEQgJADgKAAQgZAAgRgQgAgcACQgLAMABAZQgBAQAMALQALALAPAAQAJAAAIgEIANgKIAEgDIgBgWIAAgOIABgPQgFgJgIgEQgIgFgLAAQgTAAgKALg");
	this.shape_24.setTransform(62.1,61.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF6600").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_25.setTransform(48,65.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF6600").s().p("AgGBIQgEgEAAgFQAAgPgDgdQgDgbAAgPQAAgNgDgHQgJAEgJAIIgOAQIgGAIIgCAVIgBAVIABAKIABAKQAAAFgDADQgEADgFAAQgOAAAAgfIABgWIACgVIgBgTIgCgUQAAgbANAAQAFAAAEAEQAEAEAAAFIgBAHIgBAIIABAMQAGgNAMgKQANgLAIAAQATAAAHATQAGgJAKgEQAJgFAMAAQAUAAAIAWQABAFAEAeQADAUAFAxQABAFgEADQgEADgFAAQgKAAgBgKQgDgOgCgYIgEglQgBgIgDgIQgEgLgFAAQgFAAgMAHQgMAHgDAFQgBALABAMIAEAfQACATAAANQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_26.setTransform(32.1,65.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF6600").s().p("AgNBZIABgtIACgsIAAgrIABgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_27.setTransform(11.4,61.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF6600").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_28.setTransform(1.5,65.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF6600").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_29.setTransform(-8.1,62.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF6600").s().p("AgkBcQgEAFgGAAQgFAAgDgDQgDgDAAgFIAAgJIAAgKIAAgmIgBgmIAAgiIAAgiQAAgHAEgGQADgIAIAAQAJAAAAALIgBAFIAAAFIgBAbIAAAfQALgHAJgEQAKgDAHAAQAaAAARAUQAPASAAAbQAAAcgSATQgSAUgaAAQgSAAgPgHgAgSgFIgSALIAAAVIAAAUIAAAUIARAGQAHADAJAAQARAAAMgNQALgMAAgTQAAgSgJgMQgKgMgRAAQgJAAgKAFg");
	this.shape_30.setTransform(-19,62);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF6600").s().p("AguA4IAAhVIAAgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAFAHQAEAHAAAPIAAAJQgBAPgLAAQgKAAAAgMIAAgIIgBgLQgTADgLAIQgLAIgHAQIAABCQAAAMgMAAQgKAAAAgMg");
	this.shape_31.setTransform(-32.3,65.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF6600").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_32.setTransform(-45.4,65.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF6600").s().p("AgNA5IgSgyIgWg3IgCgGQAAgFAEgEQAEgDAFAAQAHAAAEAIIAeBUQAJgUAOgkIAKgbQAEgIAHAAQAFAAAEADQADAEAAAFQABAEgVAwIgZA5QAAALgKAAQgJAAgEgKg");
	this.shape_33.setTransform(-58.3,65.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF6600").s().p("AgrBUQgRgSAAgbQAAggASgTQAQgUAbAAQAOAAAIAEIALAJQACg0ADgRQABgLAJAAQAMAAAAAMQAAAQgFA7QgBAQAAATQAAApADAUIAAADQAAAFgDADQgDADgFAAQgHAAgEgLQgJAGgJAEQgJADgKAAQgZAAgRgQgAgcACQgLAMAAAZQAAAQAMALQALALAPAAQAKAAAGgEIAOgKIADgDIAAgWIAAgOIAAgPQgEgJgIgEQgIgFgKAAQgUAAgKALg");
	this.shape_34.setTransform(-72,61.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF6600").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_35.setTransform(-85.7,65.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgrBUQgRgSAAgbQAAggARgTQASgUAaAAQAPAAAHAEIALAJQACg0ACgRQACgLAKAAQALAAAAAMQAAAQgFA7QgBAQgBATQABApADAUIABADQAAAFgEADQgDADgFAAQgIAAgDgLQgJAGgJAEQgKADgJAAQgZAAgRgQgAgcACQgKAMAAAZQAAAQALALQALALAPAAQAJAAAIgEIANgKIAEgDIgBgWIAAgOIABgPQgFgJgIgEQgIgFgLAAQgTAAgKALg");
	this.shape_36.setTransform(-106.9,61.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAeA7IgDgaQgDgOAAgNIABgLIAAgLQAAgbgKABQgNAAgMAQQgKAOgHAXIgBALIgBAMIABALIAAALQAAAFgDAEQgDADgGAAQgEAAgEgDQgEgEABgFIgBgLIgBgLIACgiIABgiIAAgMIAAgMQAAgFADgEQAEgDAFAAQALAAABAQIABAOQAUgbAUAAQAUAAAIARQAFAMAAAWIAAAMIAAALQABAKACAQQADAQAAAKQAAAGgEADQgDADgGAAQgKAAgBgMg");
	this.shape_37.setTransform(-120.5,65.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_38.setTransform(-133.7,65.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00CC00").s().p("AghBEQgTgHAAgMQAAgFAEgDQADgEAFAAQAEAAAGAFQADADAKACIAOACQAJgBAIgCQALgEAAgHQAAgRgXgFIgLgDQgRgEgGgEQgKgHAAgNQAAgaAYgLQAHgDAPgFIAXgHQAFgDAGAAQAFAAAEAEQADADAAAGIACALIABAKQAAAFgDAEQgEADgFAAQgHAAgCgEQgCgDgBgLQgKADgTAGQgSAHAAAMIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAJgVAAQgQAAgOgGg");
	this.shape_39.setTransform(172.5,27.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00CC00").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_40.setTransform(160.8,26.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00CC00").s().p("AAeA8IgEgbQgBgPAAgMIAAgKIAAgMQABgagKAAQgOAAgMAQQgLAOgGAXIgBALIgBAMIABALIABALQgBAGgCADQgEADgFAAQgGAAgDgDQgEgDAAgGIAAgLIgBgLIACgiIACgjIAAgLIgBgMQAAgFAEgDQADgEAFAAQALAAABAQIAAAPQAVgcAVAAQATAAAIARQAFALABAXIAAANIAAAKQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgLg");
	this.shape_41.setTransform(148.7,28.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00CC00").s().p("AgpA1QgTgPAAgcQAAgfAQgVQAQgXAcAAQAUAAANAGQAPAIAAASQAAANgOAKQgGAEgTAIIguAWQAHALAKAEQAKAGANgBQAIAAAMgCQAOgFAEgGQAEgGAFAAQAEAAAEACQADADAAAFQAAANgWALQgTAHgRAAQgbAAgRgNgAgYggQgKAMgFAVIAlgQQAVgLAKgIQgLgKgSAAQgOAAgKAMg");
	this.shape_42.setTransform(135.2,28.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00CC00").s().p("AgGBIQgEgEAAgFQAAgPgDgdQgDgbAAgPQAAgNgDgHQgJAEgJAIIgOAQIgGAIIgCAVIgBAVIABAKIABAKQAAAFgDADQgEADgFAAQgOAAAAgfIABgWIACgVIgBgTIgCgUQAAgbANAAQAFAAAEAEQAEAEAAAFIgBAHIgBAIIABAMQAGgNAMgKQANgLAIAAQATAAAHATQAGgJAKgEQAJgFAMAAQAUAAAIAWQABAFAEAeQADAUAFAxQABAFgEADQgEADgFAAQgKAAgBgKQgDgOgCgYIgEglQgBgIgDgIQgEgLgFAAQgFAAgMAHQgMAHgDAFQgBALABAMIAEAfQACATAAANQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_43.setTransform(118.6,28.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00CC00").s().p("AgpA1QgTgPAAgcQAAgfAQgVQAQgXAcAAQAUAAANAGQAPAIAAASQAAANgOAKQgGAEgTAIIguAWQAHALAKAEQAKAGANgBQAIAAAMgCQAOgFAEgGQAEgGAFAAQAEAAAEACQADADAAAFQAAANgWALQgTAHgRAAQgbAAgRgNgAgYggQgKAMgFAVIAlgQQAVgLAKgIQgLgKgSAAQgOAAgKAMg");
	this.shape_44.setTransform(102.1,28.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00CC00").s().p("AgNBZIACgtIABgsIAAgrIABgsQAAgNALAAQAMAAAAANIAAAsIgBArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_45.setTransform(91.6,24.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00CC00").s().p("AgvBjQgDgDAAgGIAAgxIAAgvQAAgbgBgWIgCgZQAAgIADgHQAEgGAHgBQAEAAAEAEQADADAAAFIgBAEIAAAHQAKgIAKgDQAJgEAJAAQAZAAALAXQAJARAAAdQAAAagOARQgPASgZAAQgLAAgPgEIAAA6QAAAGgDADQgEAEgFgBQgFABgEgEgAgLhAQgGADgKAKQABAcAAAdQAOAFAMAAQAPAAAIgLQAHgJAAgQQAAgWgFgLQgFgLgLAAQgLAAgJAFg");
	this.shape_46.setTransform(81.6,31.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00CC00").s().p("AgGBIQgEgEAAgFQAAgPgDgdQgDgbAAgPQAAgNgDgHQgJAEgJAIIgOAQIgGAIIgCAVIgBAVIABAKIABAKQAAAFgDADQgEADgFAAQgOAAAAgfIABgWIACgVIgBgTIgCgUQAAgbANAAQAFAAAEAEQAEAEAAAFIgBAHIgBAIIABAMQAGgNAMgKQANgLAIAAQATAAAHATQAGgJAKgEQAJgFAMAAQAUAAAIAWQABAFAEAeQADAUAFAxQABAFgEADQgEADgFAAQgKAAgBgKQgDgOgCgYIgEglQgBgIgDgIQgEgLgFAAQgFAAgMAHQgMAHgDAFQgBALABAMIAEAfQACATAAANQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_47.setTransform(65.3,28.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00CC00").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_48.setTransform(48.6,28.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00CC00").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_49.setTransform(35.9,28.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgqBeQgPgCAAgKQAAgLAKAAIAPADQAKACANgBQAWAAAJgWQAGgQAAgfQgGANgJAGQgJAGgLAAQgWAAgOgPQgOgPAAgXQAAghATgUQAUgVAgAAQAMAAAHADQAIADAEAFQANABAAAOQAAAJgDAOIgDAYIgDAoQAAAYgFAPQgFAUgMAJQgPAMgbAAQgQAAgLgDgAgWg8QgLAOAAAWQAAASAGAIQAHAJAOAAQALAAAMgNQAKgNACgMQACgOADgcQgFgEgFgCQgFgCgGAAQgWABgNAQg");
	this.shape_50.setTransform(15.2,31.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAeA8IgDgbQgCgPgBgMIABgKIABgMQAAgagLAAQgNAAgLAQQgLAOgHAXIgBALIgBAMIABALIABALQgBAGgDADQgDADgGAAQgEAAgEgDQgDgDAAgGIgBgLIgBgLIACgiIABgjIAAgLIAAgMQAAgFADgDQAEgEAFAAQALAAABAQIABAPQAUgcAUAAQAUAAAIARQAFALAAAXIAAANIAAAKQABAKACAQQADAQAAAKQAAAGgEADQgDADgGAAQgKAAgBgLg");
	this.shape_51.setTransform(2.5,28.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_52.setTransform(-7.6,25.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgNA4IgSgxIgWg3IgCgGQAAgFAFgDQADgEAFAAQAHAAAEAHIAeBVQAJgTAOglIAKgcQAEgHAHAAQAFAAADADQAEAEAAAFQABAFgVAvIgZA4QAAAMgKAAQgJAAgEgLg");
	this.shape_53.setTransform(-17.3,28.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_54.setTransform(-29.9,28.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAhBdQgCgLgDgSQgCgSAAgLIAAgKIAAgKQAAgWgLABQgPAAgLAMQgHAIgLAUQAAAugDAJQgEAHgHAAQgFAAgEgCQgEgEAAgFIABgGQABgCAAgPIABgTIAAhYIABgVIgBgLIgBgMQAAgFAEgDQADgDAFgBQAKAAACALQACAMAAAKIgBAbQgBANABANIAAALQAKgOALgGQALgHAMAAQAVAAAHANQAFAJABAWIABAXIACAZQACAOADALIAAAEQAAAFgEADQgDAEgGAAQgIgBgDgIg");
	this.shape_55.setTransform(-43.4,25.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgTBoQgDgDAAgFIAAgDQACgPAAgTIAAghIAAgjIgUABQgMAAAAgLQAAgMAVgBIAMAAIACgTQADgbAKgNQAMgPAbAAQASAAAAALQAAAMgQAAQgdAAgEApIAAAIIAbgCQATAAAAAMQAAAJgKACIgJABQgGgBgWACIgBAbIAAAXIABAWQgBAYgCANQgBAJgKAAQgEAAgEgDg");
	this.shape_56.setTransform(-64.8,25.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_57.setTransform(-77.7,28.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgfAQgVQAQgXAcAAQAUAAANAGQAPAIAAASQAAANgOAKQgGAEgTAIIguAWQAHALAKAEQAKAGANgBQAIAAAMgCQAOgFAEgGQAEgGAFAAQAEAAAEACQADADAAAFQAAANgWALQgTAHgRAAQgbAAgRgNgAgYggQgKAMgFAVIAlgQQAVgLAKgIQgLgKgSAAQgOAAgKAMg");
	this.shape_58.setTransform(-98.2,28.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgNBZIACgtIABgsIAAgrIABgsQAAgNALAAQAMAAAAANIAAAsIgBArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_59.setTransform(-108.6,24.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AglBcQgEAFgFAAQgFAAgDgDQgDgDAAgFIAAgJIAAgKIAAgmIgBgmIAAgiIAAgiQAAgHADgGQAFgIAHAAQAIAAABALIgBAFIgBAFIAAAbIAAAfQAKgHAKgEQAJgDAIAAQAaAAAQAUQAQASAAAbQAAAcgSATQgSAUgaAAQgSAAgQgHgAgTgFIgRALIAAAVIAAAUIAAAUIAQAGQAIADAJAAQARAAALgNQAMgMAAgTQAAgSgJgMQgKgMgRAAQgJAAgLAFg");
	this.shape_60.setTransform(-119.2,25.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_61.setTransform(-133.3,28.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgvBjQgDgDAAgGIAAgxIAAgvQAAgbgBgWIgCgZQAAgIADgHQAEgGAHgBQAEAAAEAEQADADAAAFIgBAEIAAAHQAKgIAKgDQAJgEAJAAQAZAAALAXQAJARAAAdQAAAagOARQgPASgZAAQgLAAgPgEIAAA6QAAAGgDADQgEAEgFgBQgFABgEgEgAgLhAQgGADgKAKQABAcAAAdQAOAFAMAAQAPAAAIgLQAHgJAAgQQAAgWgFgLQgFgLgLAAQgLAAgJAFg");
	this.shape_62.setTransform(-146.3,31.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_63.setTransform(-159.5,28.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_64.setTransform(-172.2,28.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_65.setTransform(172.3,-10.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgZQAAgQAEgWQABgKAKAAQAGAAADADQAEAEAAAFIgCASIgCASIABAiQACAPACAJIAIADIAIABQAPABATgGIAAgZIgBgXQAAgaADgTQABgMAKAAQAGABADADQAEADAAAFIgDAuIAAAaIABAaIAAAIIAAAJQAAAFgDADQgEAEgFAAQgJAAgDgMg");
	this.shape_66.setTransform(160,-8.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgkBcQgEAFgGAAQgEAAgEgDQgDgDAAgFIABgJIAAgKIgBgmIgBgmIABgiIAAgiQAAgHADgGQAEgIAGAAQAKAAgBALIAAAFIgBAFIAAAbIAAAfQAKgHAKgEQAJgDAIAAQAbAAAQAUQAPASAAAbQAAAcgSATQgSAUgZAAQgTAAgPgHgAgSgFIgSALIAAAVIAAAUIAAAUIARAGQAHADAKAAQAQAAAMgNQALgMAAgTQAAgSgKgMQgJgMgRAAQgJAAgKAFg");
	this.shape_67.setTransform(146.3,-11.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0000FF").s().p("AAhBcQgDgKgCgSQgCgSAAgLIAAgKIAAgJQAAgXgLAAQgPABgMANQgGAHgLAUQAAAvgDAIQgEAIgHAAQgFAAgEgEQgEgDAAgFIABgFQABgDAAgPIABgSIAAhZIABgUIgBgMIgBgMQAAgFAEgDQADgEAFABQAKAAACAKQACAMAAAJIgBAbQgBAOAAANIAAALQALgNALgIQALgGAMAAQAUAAAIANQAFAKABAUIABAYIACAZQACAOADAMIAAADQAAAFgEAEQgDACgGAAQgIABgDgKg");
	this.shape_68.setTransform(124.1,-11.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF6600").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_69.setTransform(110.4,-8.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CC00CC").s().p("AgpA1QgTgQAAgbQAAgeAQgWQAQgXAcgBQAUAAANAHQAPAJAAARQAAANgOAJQgGAFgTAIIguAWQAHALAKAEQAKAFANABQAIgBAMgDQAOgEAEgGQAEgHAFAAQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRgBQgbAAgRgNgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgJgSAAQgOAAgKALg");
	this.shape_70.setTransform(97.2,-8.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#009900").s().p("AgpA1QgTgQAAgbQAAgeAQgWQAQgXAcgBQAUAAANAHQAPAJAAARQAAANgOAJQgGAFgTAIIguAWQAHALAKAEQAKAFANABQAIgBAMgDQAOgEAEgGQAEgHAFAAQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRgBQgbAAgRgNgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgJgSAAQgOAAgKALg");
	this.shape_71.setTransform(83.5,-8.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0000FF").s().p("AgvBjQgDgEAAgFIAAgxIAAgvQAAgbgBgWIgCgZQAAgJADgFQAEgIAHAAQAEABAEADQADADAAAFIgBAEIAAAHQAKgIAKgDQAJgDAJAAQAZAAALAVQAJATAAAcQAAAagOAQQgPATgZAAQgLAAgPgEIAAA6QAAAFgDAEQgEADgFABQgFgBgEgDgAgLhAQgGADgKAKQABAbAAAeQAOAFAMAAQAPAAAIgLQAHgJAAgQQAAgWgFgLQgFgLgLAAQgLAAgJAFg");
	this.shape_72.setTransform(69.9,-5.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF6600").s().p("AghBEQgTgHAAgMQAAgFAEgDQADgFAFAAQAEAAAGAHQADADAKABIAOABQAJAAAIgCQALgEAAgHQAAgQgXgHIgLgDQgRgDgGgFQgKgFAAgOQAAgZAYgLQAHgEAPgFIAXgHQAFgDAGABQAFAAAEADQADADAAAGIACAKIABALQAAAFgDAEQgEADgFAAQgHAAgCgFQgCgCgBgLQgKADgTAGQgSAIAAALIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAIgVAAQgQABgOgGg");
	this.shape_73.setTransform(56.7,-8.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CC00CC").s().p("AgTBoQgEgDAAgFIAAgDQADgPAAgTIAAghIAAgjIgTABQgNAAAAgLQAAgMAWgBIALAAIACgTQADgbALgNQAMgPAaAAQASAAAAALQAAAMgQAAQgeAAgDApIgBAIIAbgCQAUAAAAAMQAAAJgJACIgLABQgFgBgXACIgBAbIABAXIAAAWQAAAYgCANQgCAJgIAAQgFAAgEgDg");
	this.shape_74.setTransform(37,-11.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00CC00").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_75.setTransform(24,-8.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0000FF").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_76.setTransform(4.3,-10.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF6600").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHAAAPIAAAJQgBAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgLAIgHAQIABBCQAAAMgNAAQgLAAAAgMg");
	this.shape_77.setTransform(-7.2,-8.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CC00CC").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_78.setTransform(-20,-8.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00CC00").s().p("AgvBjQgDgEAAgFIAAgxIAAgvQAAgbgBgWIgCgZQAAgJADgFQAEgIAHAAQAEABAEADQADADAAAFIgBAEIAAAHQAKgIAKgDQAJgDAJAAQAZAAALAVQAJATAAAcQAAAagOAQQgPATgZAAQgLAAgPgEIAAA6QAAAFgDAEQgEADgFABQgFgBgEgDgAgLhAQgGADgKAKQABAbAAAeQAOAFAMAAQAPAAAIgLQAHgJAAgQQAAgWgFgLQgFgLgLAAQgLAAgJAFg");
	this.shape_79.setTransform(-32.9,-5.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0000FF").s().p("AguA4IAAhVIAAgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAFAHQAEAHAAAPIAAAJQgBAPgLAAQgLAAABgMIAAgIIgBgLQgUADgKAIQgLAIgHAQIAABCQAAAMgMAAQgLAAABgMg");
	this.shape_80.setTransform(-52.8,-8.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF6600").s().p("AgpA1QgTgQAAgbQAAgeAQgWQAQgXAcgBQAUAAANAHQAPAJAAARQAAANgOAJQgGAFgTAIIguAWQAHALAKAEQAKAFANABQAIgBAMgDQAOgEAEgGQAEgHAFAAQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRgBQgbAAgRgNgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgJgSAAQgOAAgKALg");
	this.shape_81.setTransform(-65.8,-8.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CC00CC").s().p("AAiBcQgDgKgDgSQgCgSAAgLIAAgKIAAgJQAAgXgLAAQgPABgLANQgHAHgKAUQAAAvgFAIQgDAIgHAAQgFAAgEgEQgEgDAAgFIABgFQABgDAAgPIABgSIAAhZIABgUIgBgMIgBgMQAAgFADgDQAEgEAFABQAKAAACAKQACAMAAAJIgBAbQgBAOABANIAAALQAKgNALgIQALgGAMAAQAVAAAHANQAGAKAAAUIABAYIACAZQACAOACAMIABADQAAAFgEAEQgDACgGAAQgIABgCgKg");
	this.shape_82.setTransform(-79.9,-11.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00CC00").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_83.setTransform(-93.3,-10.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0000FF").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_84.setTransform(-105.9,-8.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgpA1QgTgQAAgbQAAgeAQgWQAQgXAcgBQAUAAANAHQAPAJAAARQAAANgOAJQgGAFgTAIIguAWQAHALAKAEQAKAFANABQAIgBAMgDQAOgEAEgGQAEgHAFAAQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRgBQgbAAgRgNgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgJgSAAQgOAAgKALg");
	this.shape_85.setTransform(-126.4,-8.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgGBIQgEgEAAgFQAAgPgDgdQgDgbAAgPQAAgNgDgHQgJAEgJAIIgOAQIgGAIIgCAVIgBAVIABAKIABAKQAAAFgDADQgEADgFAAQgOAAAAgfIABgWIACgVIgBgTIgCgUQAAgbANAAQAFAAAEAEQAEAEAAAFIgBAHIgBAIIABAMQAGgNAMgKQANgLAIAAQATAAAHATQAGgJAKgEQAJgFAMAAQAUAAAIAWQABAFAEAeQADAUAFAxQABAFgEADQgEADgFAAQgKAAgBgKQgDgOgCgYIgEglQgBgIgDgIQgEgLgFAAQgFAAgMAHQgMAHgDAFQgBALABAMIAEAfQACATAAANQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_86.setTransform(-142.9,-8.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_87.setTransform(-159.6,-8.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgDQADgFAFAAQAEAAAGAHQADADAKABIAOABQAJAAAIgCQALgEAAgHQAAgQgXgHIgLgDQgRgDgGgFQgKgFAAgOQAAgZAYgLQAHgEAPgFIAXgHQAFgDAGABQAFAAAEADQADADAAAGIACAKIABALQAAAFgDAEQgEADgFAAQgHAAgCgFQgCgCgBgLQgKADgTAGQgSAIAAALIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAIgVAAQgQABgOgGg");
	this.shape_88.setTransform(-172.4,-8.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgDAFAAQAEAAAGAFQADAEAKABIAOABQAJAAAIgCQALgDAAgIQAAgRgXgGIgLgCQgRgEgGgEQgKgHAAgNQAAgaAYgLQAHgDAPgEIAXgIQAFgDAGAAQAFAAAEAEQADAEAAAFIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgDgBgJQgKACgTAGQgSAIAAALIAHACQAbAFAOAJQATALAAAZQAAAUgRAKQgOAJgVAAQgQgBgOgFg");
	this.shape_89.setTransform(192.1,-45.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_90.setTransform(179.9,-45.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgrBTQgRgRAAgbQAAghARgSQASgUAaAAQAPAAAHAFIALAIQACg0ADgRQABgLAKAAQALAAAAAMQAAAQgFA6QgCASAAARQAAApAEAVIABADQgBAEgDAEQgEADgEAAQgIAAgDgLQgJAHgJADQgKADgJAAQgZAAgRgRgAgcACQgKAMAAAYQAAAQALALQALAMAPAAQAJAAAHgEIAOgKIAEgDIgBgWIAAgOIABgPQgFgJgIgEQgIgFgLAAQgTAAgKALg");
	this.shape_91.setTransform(158.7,-48.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgpA1QgTgQAAgbQAAgfAQgVQAQgYAcABQAUgBANAIQAPAIAAARQAAAMgOALQgGAEgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgCQAOgFAEgGQAEgGAFAAQAEAAAEACQADADAAAFQAAAOgWAKQgTAHgRABQgbAAgRgOgAgYggQgKAMgFAVIAlgQQAVgLAKgIQgLgKgSAAQgOAAgKAMg");
	this.shape_92.setTransform(144.7,-45.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgDAFAAQAEAAAGAFQADAEAKABIAOABQAJAAAIgCQALgDAAgIQAAgRgXgGIgLgCQgRgEgGgEQgKgHAAgNQAAgaAYgLQAHgDAPgEIAXgIQAFgDAGAAQAFAAAEAEQADAEAAAFIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgDgBgJQgKACgTAGQgSAIAAALIAHACQAbAFAOAJQATALAAAZQAAAUgRAKQgOAJgVAAQgQgBgOgFg");
	this.shape_93.setTransform(131.3,-45.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgYQAAgRAEgVQABgLAKAAQAGAAADAEQAEADAAAFIgCASIgCATIABAiQACAOACAJIAIADIAIACQAPgBATgFIAAgYIgBgXQAAgbADgTQABgMAKABQAGAAADADQAEAEAAAFIgDAtIAAAaIABAbIAAAIIAAAIQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_94.setTransform(119.1,-45.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("AgGBIQgEgEAAgFQAAgPgDgdQgDgbAAgPQAAgNgDgHQgJAEgJAIIgOAQIgGAIIgCAVIgBAVIABAKIABAKQAAAFgDADQgEADgFAAQgOAAAAgfIABgWIACgVIgBgTIgCgUQAAgbANAAQAFAAAEAEQAEAEAAAFIgBAHIgBAIIABAMQAGgNAMgKQANgLAIAAQATAAAHATQAGgJAKgEQAJgFAMAAQAUAAAIAWQABAFAEAeQADAUAFAxQABAFgEADQgEADgFAAQgKAAgBgKQgDgOgCgYIgEglQgBgIgDgIQgEgLgFAAQgFAAgMAHQgMAHgDAFQgBALABAMIAEAfQACATAAANQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_95.setTransform(95.6,-45.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("AguA4IAAhVIAAgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAFAHQAEAHAAAPIAAAJQgBAPgLAAQgKAAAAgMIAAgIIgBgLQgTADgLAIQgLAIgHAQIAABCQAAAMgMAAQgKAAAAgMg");
	this.shape_96.setTransform(80.1,-45.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_97.setTransform(66.9,-45.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("AgTBoQgEgDAAgFIAAgDQADgPAAgTIAAghIAAgjIgUABQgMAAAAgLQAAgMAVgBIAMAAIACgTQADgbAKgNQAMgPAcAAQARAAAAALQAAAMgQAAQgeAAgDApIgBAIIAbgCQAUAAAAAMQAAAJgKACIgKABQgFgBgXACIgBAbIABAXIAAAWQABAYgDANQgCAJgIAAQgGAAgDgDg");
	this.shape_98.setTransform(54,-48);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("Ag4BeQgFgFAAgFIAAgkIACgxQACgjABgPIABgiQABgFADgDQARgFAVAAQAUAAAUAPQAXAQAAAaQAAAfgZARQATAIAJAJQAJAKAAALQAAAPgQAOQgLAKgMAEQgbALgqAAQgGAAgEgFgAglAwIAAAaQAggBATgIQAIgEAJgGQAHgHAAgDQAAgGgPgHQgMgGgLgCIgMgCIgFAAIgFAAIgPgBIAAAbgAgghIIAAAWIgDAuIATACQARgBAMgLQAMgLAAgQQAAgMgMgKQgNgKgNAAIgTABg");
	this.shape_99.setTransform(33.1,-48.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("Ag+BcQgDgDAAgGIgBgcIgBgdIACggQADgXAAgLIgBgSIgBgTQAAgHAEgFQAEgGAIAAIAeADQAQACALAGQAxAaAAAmQAAASgQAOQgOALgUAGQAmAVASAWQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEQgpgogwgOIABAYIAAAYQAAAGgDADQgEAEgFAAQgFAAgEgEgAgmg2IAAAPIgBAYIgDAXIAGAAIAFABQAfAAAPgJQAHgCAFgHQAHgGAAgFQAAgRgTgPQgRgNgUgCIgSgCg");
	this.shape_100.setTransform(17.1,-48.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("Ag1BeQgMgLABgnIAAgRIABgUIgBgGQgBgDADgEQACgjAAgRIgBgNIgBgNQAAgOAMAAQAFgBAEAEQAPgEANgCQANgCAKAAQAdAAATAHQAHAEAAAIQAAAFgDADQgDAFgGAAIgDgBQgVgGgTAAQgKAAgLACIgaAGIACAMQAAARgCAeIA0gFIAdgCQAFAAAEADQAEAEAAAFQAAAKgMABIgdADIg3AFIAAAQIgBAPQAAAbAEAFQADADAQAAIAWAAIAWgBIAIgBIAHgBQANABAAANQAAAJgLADQgLACglAAQgmAAgLgKg");
	this.shape_101.setTransform(1.5,-48.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF0000").s().p("AgVBZQgPglgShFIgKghQgHgaAAgIQAAgFAEgEQADgDAFAAQAKAAACAKIAFAVIAMAqQALAsALAhIABgCIAghXIAKgeQAHgSAIgKQAEgFAGAAQAEAAAEAEQAEAEAAAFQAAAEgCADQgIAMgFAMIgJAbIghBYQgGAPgHAPQgDAIgHAAQgKAAgDgKg");
	this.shape_102.setTransform(-14,-48.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_103.setTransform(-36.8,-45.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgDAFAAQAEAAAGAFQADAEAKABIAOABQAJAAAIgCQALgDAAgIQAAgRgXgGIgLgCQgRgEgGgEQgKgHAAgNQAAgaAYgLQAHgDAPgEIAXgIQAFgDAGAAQAFAAAEAEQADAEAAAFIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgDgBgJQgKACgTAGQgSAIAAALIAHACQAbAFAOAJQATALAAAZQAAAUgRAKQgOAJgVAAQgQgBgOgFg");
	this.shape_104.setTransform(-57,-45.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_105.setTransform(-66,-48.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF00FF").s().p("Ag0BgQgHgFAAgOIACgoQADg3AAhEQAAgGAEgDQADgEAFAAQAGAAADAEQADADAAAGQAABFgDA3IgBATIgBASQAgAAAvgPIAEgBQAGAAADAEQADAEAAAFQAAAIgIADQgNAHgeAFQgaAFgRAAQgNAAgFgEg");
	this.shape_106.setTransform(-83.8,-48);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF00FF").s().p("AArBAIgIgnQgNABgUAFIgfAHQgHAQgPAeQgDAIgHAAQgFgBgEgDQgDgEAAgFQAAgGASgnQgCgDAAgEQAAgKAMgDQAOgZAVghQAcgvAHAAQAKAAADAOIAIAoIASBVIAHASQAEALgBADQABAFgEADQgEAEgFAAQgLAAgIgcgAgPAJQAPgEAdgFIgKgvg");
	this.shape_107.setTransform(-100.3,-48);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF00FF").s().p("Ag5BeQgEgFAAgFIAAgkIACgxQADgjgBgPIACgiQABgFADgDQAQgFAWAAQAVAAATAPQAXAQAAAaQAAAfgZARQATAIAJAJQAJAKAAALQAAAPgQAOQgLAKgNAEQgaALgrAAQgFAAgFgFgAglAwIAAAaQAggBATgIQAIgEAJgGQAHgHAAgDQAAgGgQgHQgMgGgKgCIgNgCIgEAAIgFAAIgPgBIAAAbgAgghIIAAAWIgCAuIASACQASgBALgLQAMgLAAgQQAAgMgMgKQgNgKgNAAIgTABg");
	this.shape_108.setTransform(-116.5,-48.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF00FF").s().p("Ag+BcQgDgDAAgGIgBgcIgBgdIACggQADgXAAgLIgBgSIgBgTQAAgHAEgFQAEgGAIAAIAeADQAQACALAGQAxAaAAAmQAAASgQAOQgOALgUAGQAmAVASAWQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEQgpgogwgOIABAYIAAAYQAAAGgDADQgEAEgFAAQgFAAgEgEgAgmg2IAAAPIgBAYIgDAXIAGAAIAFABQAfAAAPgJQAHgCAFgHQAHgGAAgFQAAgRgTgPQgRgNgUgCIgSgCg");
	this.shape_109.setTransform(-132.6,-48.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF00FF").s().p("Ag1BeQgLgLgBgnIABgRIABgUIgCgGQABgDACgEQADgjAAgRIgCgNIgBgNQAAgOAMAAQAFgBAEAEQAOgEAOgCQANgCAKAAQAdAAATAHQAHAEABAIQAAAFgEADQgDAFgGAAIgDgBQgVgGgTAAQgKAAgLACIgaAGIACAMQAAARgDAeIA1gFIAdgCQAGAAADADQAEAEAAAFQAAAKgMABIgdADIg3AFIAAAQIgBAPQAAAbAEAFQADADAQAAIAWAAIAWgBIAIgBIAHgBQANABAAANQAAAJgLADQgLACglAAQgmAAgLgKg");
	this.shape_110.setTransform(-148.1,-48.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF00FF").s().p("AgVBZQgPglgShFIgKghQgHgaAAgIQAAgFAEgEQADgDAFAAQAKAAACAKIAFAVIAMAqQALAsALAhIABgCIAghXIAKgeQAHgSAIgKQAEgFAGAAQAEAAAEAEQAEAEAAAFQAAAEgCADQgIAMgFAMIgJAbIghBYQgGAPgHAPQgDAIgHAAQgKAAgDgKg");
	this.shape_111.setTransform(-163.7,-48.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAqBAIgIgnQgMABgUAFIggAHQgFAQgPAeQgEAIgHAAQgFgBgDgDQgFgEAAgFQABgGASgnQgCgDAAgEQAAgKAMgDQANgZAWghQAcgvAHAAQAKAAADAOIAIAoIASBVIAHASQADALABADQgBAFgDADQgEAEgFAAQgLAAgJgcgAgPAJQAPgEAdgFIgKgvg");
	this.shape_112.setTransform(-189.3,-48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204.2,-68.7,408.4,149.4);


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
	this.shape.graphics.rf(["#D5FFD7","#61EF01","#1DA400","#004A00"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgwAAgigjQgjgigBgxQABgwAjgiQAigjAwAAQAxAAAjAjQAjAigBAwQABAxgjAiQgjAjgxAAIAAAAg");
	this.shape.setTransform(11.9,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#EC0000","#9D0000","#480000"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgwAAgigjQgjgigBgxQABgwAjgiQAigjAwAAQAxAAAjAjQAjAigBAwQABAxgjAiQgjAjgxAAIAAAAg");
	this.shape_1.setTransform(11.9,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},8).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.7,23.6);


(lib.frb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgqAcIAIgHQAKALASAAQAPAAAMgLQALgMAAgPQAAgQgLgMIAHgIQAOAPAAAVQAAATgOAPQgPAOgTAAQgVAAgPgOg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_rightOut, new cjs.Rectangle(0,0,8.5,8.5), null);


(lib.frb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AghAXIAHgIQAIAJANAAQAMAAAIgJQAJgJAAgLQAAgMgJgJIAIgHQALANAAAPQAAAQgLAMQgNALgPAAQgRAAgLgLg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_rightIn, new cjs.Rectangle(0,0,6.8,6.8), null);


(lib.frb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_22:0});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgqAHQAAgTAPgPQAPgPATAAQAVAAAPAPIgHAHQgNgMgQAAQgPAAgMAMQgMAMAAAPQAAASAMALIgHAHQgPgOAAgWg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_leftOut, new cjs.Rectangle(0,0,8.6,8.6), null);


(lib.frb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_23:0});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AghAGQAAgQAMgLQALgMAQAAQAPAAANAMIgHAHQgJgJgMAAQgMAAgIAJQgJAIAAAMQAAAMAJAJIgHAHQgMgLAAgRg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_leftIn, new cjs.Rectangle(0,0,6.9,6.9), null);


(lib.frb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABBIAAiBICBAAIAACBg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_hitArea, new cjs.Rectangle(0,0,13,13), null);


(lib.frb_dot_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot_disabled, new cjs.Rectangle(0,0,4,4), null);


(lib.frb_dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot, new cjs.Rectangle(0,0,4,4), null);


(lib.frb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_pressed, new cjs.Rectangle(0,0,6,6), null);


(lib.frb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_disabled, new cjs.Rectangle(0,0,6,6), null);


(lib.frb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background, new cjs.Rectangle(0,0,6,6), null);


(lib.fcb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABBIAAgKIB3AAIAAh3IAKAAIAACBg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_rightOut, new cjs.Rectangle(0,0,13,13), null);


(lib.fcb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("Ag2A3IAAgKIBjAAIAAhjIAKAAIAABtg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_rightIn, new cjs.Rectangle(1,1,11,11), null);


(lib.fcb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("Ag7A8IAAh3IB3AAIAAAKIhtAAIAABtg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_leftOut, new cjs.Rectangle(0,0,12,12), null);


(lib.fcb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AgxAyIAAhjIBjAAIAAAKIhZAAIAABZg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_leftIn, new cjs.Rectangle(1,1,10,10), null);


(lib.fcb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABBIAAiBICBAAIAACBg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_hitArea, new cjs.Rectangle(0,0,13,13), null);


(lib.fcb_check_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgLAiIgBAAIgVgVIgCgEIABgSQAAgFAGAAIADACIARARIAhgkIAEgDQAHAAAAAGIAAASIgCAEIgoAnIgDACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check_disabled, new cjs.Rectangle(0,0,7.1,7), null);


(lib.fcb_check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAiIgBAAIgVgVIgCgEIABgSQAAgFAGAAIADACIARARIAhgkIAEgDQAHAAAAAGIAAASIgCAEIgoAnIgDACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check, new cjs.Rectangle(0,0,7.1,7), null);


(lib.fcb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_pressed, new cjs.Rectangle(0,0,9,9), null);


(lib.fcb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_disabled, new cjs.Rectangle(0,0,9,9), null);


(lib.fcb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background, new cjs.Rectangle(0,0,9,9), null);


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj+CqIAAlTIH9AAIAAFTg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.Copyright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAcAIIgEgLIgDAKQgEAJgEAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIgCgJIgCgHQgGATgDAAIgCgBIgBgDIABgCQACgEACgHIADgMQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAFAAACAIIACALIADgGIADgJQACgFACAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIADAKIACAHIADAIIABABIgBADIgDABQgDAAgCgJgAgUANIgBgIIAAgGIgBgHIgFAAIgFgBQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIAEAAIAFAAIAPAAIADAAIADAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIgNABIAAAHIABAHIAAAEIABADIgBADIgCAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape.setTransform(57.3,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAYQgGgCAAgEIABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAEACIAFACIAEABIAGgBQAEgCAAgCQAAgGgIgCIgEgCIgIgCQgDgCAAgFQAAgJAIgEIAIgDIAIgDIADAAIAEABIABADIABAEIAAADIgBAEIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBIgCgEIgKADQgGACAAAFIACAAQAJACAGADQAHAEAAAJQAAAHgGADQgFADgIAAQgFAAgGgCg");
	this.shape_1.setTransform(51,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLATQgHgGAAgJQAAgIAGgJQAGgLAIAAQAEAAAGACQAGADAAADIgBADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgDgBIgCgCQgCgCgGAAQgEAAgEAIQgEAIAAAEQAAAGAEADQADADAGAAIAFgBIAFgDIACgBIADACIABADQAAADgGADQgHADgDAAQgJAAgFgGg");
	this.shape_2.setTransform(46.6,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAgQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgIIAAgIIABgKIAAgKQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIADgBIACABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIgBAKIAAAKIAAAIIAAAIQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgCABIgDgBgAgCgXQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_3.setTransform(43.1,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AALAVIgBgJIgBgKIAAgDIAAgEQAAgKgDAAQgFABgEAFQgEAGgCAGIAAAFIgBAEIABAEIAAAEIgBADIgDACIgEgCIgBgDIAAgEIAAgEIAAgMIABgMIAAgEIAAgEIABgEIADgBQAEABAAAFIABAFQAHgKAHAAQAHAAADAHQABAEABAIIAAAFIAAACIABAKIAAAJIgBAEIgDABQgEAAAAgFg");
	this.shape_4.setTransform(39.5,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAWIgDgDIgHADIgFACQgKAAgFgGQgEgFAAgMQAAgKAHgHQAIgIAJAAQAEAAAEACQAGADAAADIgBACIAAAGIgBAJIABAIIADAJIABABIAAABIgBAEIgDABIgDgDgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_5.setTransform(34.8,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMAiIgCgLIgBgLIAAgDIAAgDQAAgIgDABQgGAAgDADIgHAKQAAARgBADQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBgEIABgBIAAgGIAAgHIAAggIABgHIgBgEIAAgEQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABgBQADAAAAAEIABAIIAAAKIAAAJIAAAFQAEgFAEgDQADgDAFABQAGAAAEAEQABAEAAAHIABAIIAAAJIACAJIABACQAAAAgBAAQAAABAAAAQAAABAAAAQgBAAAAAAIgDABQgDAAgBgCg");
	this.shape_6.setTransform(30,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLATQgHgGAAgJQAAgIAGgJQAGgLAIAAQAEAAAGACQAGADAAADIgBADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgDgBIgCgCQgCgCgGAAQgEAAgEAIQgEAIAAAEQAAAGAEADQADADAGAAIAFgBIAFgDIACgBIADACIABADQAAADgGADQgHADgDAAQgJAAgFgGg");
	this.shape_7.setTransform(25,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOATQgHgFAAgKQAAgLAGgHQAGgJAJAAQAHAAAFACQAFADAAAHQAAAEgFAEIgJAEIgQAHQADAFADABQAEACAEAAIAHgBQAFgCACgCQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAIADABIABADQAAAEgIAEQgHADgGAAQgJAAgGgFgAgIgLQgEAFgCAGIAOgFQAHgEADgCQgDgEgHAAQgFAAgDAEg");
	this.shape_8.setTransform(20.3,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbAhIgCgHIgCgIQgCgGgDgXIgJAZIgDAJIgEAIQgBADgCAAQgDAAgCgDIgBgFIgBgEIgIghIgCAIIgGAWIgBANQgCADgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIAAgDQAAgHACgLIAGgQIACgPQACgJACgDQACgDACAAQADAAABAEQADAEABAMQADAOAFAPQAFgPAFgTIABgGIACgGQACgEADAAQAEAAABAIIADAKQACATADAOIADAIIACAHQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_9.setTransform(13.8,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAUIAAgeIAAgEIAAgEQAAgFAEAAQAEAAAAAIQAIgJAKAAQAEAAABADQACADAAAFIAAADQAAAGgEAAQgEAAAAgFIAAgDIAAgDQgHAAgEAEQgDACgDAGIAAAXQAAAFgEAAQgEAAAAgFg");
	this.shape_10.setTransform(5.1,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAOAWIgDgDIgHADIgFACQgKAAgFgGQgEgFAAgMQAAgKAHgHQAIgIAJAAQAEAAAEACQAGADAAADIgBACIAAAGIgBAJIABAIIADAJIABABIAAABIgBAEIgDABIgDgDgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_11.setTransform(0.5,2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBAaQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgQIgBgPQAAgEgCgDQgDABgCAEIgGAFIgCADIAAAHIgBAIIABADIAAAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABIgEABQgEAAAAgLIAAgIIABgHIgBgHIAAgHQgBgKAFAAIADABQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABIAAACIgBADIAAAFQACgFAFgEQAEgEADAAQAHAAACAHQADgDACgCQAEgBAFAAQAGAAADAIIACAMIAEAYIgCADIgDABQgEAAAAgDIgCgOIgCgNIgBgGQgCgEgBAAIgGADIgGAEIAAAIIACALIABAMIgBADIgEABQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_12.setTransform(-5.2,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCAaQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgQIgBgPQAAgEgBgDQgEABgCAEIgGAFIgCADIgBAHIAAAIIAAADIABAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABIgDABQgGAAAAgLIABgIIAAgHIAAgHIgBgHQABgKAEAAIADABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAAACIAAADIAAAFQADgFAEgEQAFgEADAAQAGAAACAHQACgDADgCQAEgBAEAAQAIAAACAIIACAMIAEAYIgCADIgDABQgDAAgBgDIgCgOIgCgNIgBgGQgBgEgCAAIgGADIgFAEIAAAIIABALIABAMIgBADIgEABQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_13.setTransform(-12.2,2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAOAWIgDgDIgHADIgFACQgKAAgFgGQgEgFAAgMQAAgKAHgHQAIgIAJAAQAEAAAEACQAGADAAADIgBACIAAAGIgBAJIABAIIADAJIABABIAAABIgBAEIgDABIgDgDgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_14.setTransform(-18.1,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAUIAAgeIAAgEIAAgEQAAgFAEAAQAEAAAAAIQAIgJAKAAQAEAAABADQACADAAAFIAAADQAAAGgEAAQgEAAAAgFIAAgDIAAgDQgHAAgEAEQgDACgDAGIAAAXQAAAFgEAAQgEAAAAgFg");
	this.shape_15.setTransform(-22.4,2.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgWAeQgFgGAAgMQAAgLAFgLQAGgMAIgIQAGgFAFAAQAEAAAGACQAJAEgBADIgBAEIgDABIgDgBQgGgEgFAAQgDAAgDAEIgFAFQgKAOAAAPQAAAIADAEQACADAHAAQAIAAAGgFQAGgFACgKQgNAAgHAEIgCABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgCgCQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAJgFAWAAIAEABIABACQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgDANgJAIQgJAIgLAAQgKAAgGgGg");
	this.shape_16.setTransform(-27.7,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOAhIgBgDIADgIIAKgXQAFgPAHgHIABgBIgVgBIgKAAQgEAAAAgEQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIARABIAPAAIAIAAQAFAAAAADQAAACgDADIgEAFQgFAHgFAJIgIARIgDAKIgEAKQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAIgDgCg");
	this.shape_17.setTransform(-36.2,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AABAiIgIAAIgEAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgFAHAAIACAAIACAAIAAgGIgBgGIABgQIABgRQgGAEgBAAIgDgBIgCgDQAAgCAEgDIAHgFQADgEADAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAADIAAADIAAAFIAAAEIgBAPIgCAOIABAGIABAGIAEAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAIABADIgBADIgDABg");
	this.shape_18.setTransform(-41,1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTAXQgFgJAAgPQAAgMAGgKQAIgLALAAQAMAAAGAKQAGAJAAAMQAAATgHAJQgGAKgMAAQgNAAgGgMgAgLgRQgEAHAAAJQAAANAEAIQAEAHAHAAQAJAAAEgLQADgHAAgLQAAgLgEgHQgEgFgHAAQgHgBgFAJg");
	this.shape_19.setTransform(-45.9,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AANAhIgDgBIgGABIgGAAIgFAAIgFABIgCAAIgBAAQgDAAgBgDIgBgGQAAgKAGgGQADgDALgHIAHgGQAEgFAAgFQAAgDgEgCQgDgCgDAAQgDAAgEACIgGAFIgDABQgEAAAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAFgFAEgCQAFgDAFAAQAHAAAGAEQAGAEAAAHIgBAJIgEAGQgDADgIAFQgIAFgCADQgFAFAAAHIAJAAIAMgBIAHABQAEACAAACQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgCABIgEgBg");
	this.shape_20.setTransform(-51.3,1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeABQgBgLALgKQALgJANAAQANAAAHAIQAIAIAAAMQAAAKgJAKQgKALgNAAIAAAAQgfAAABgdgAgOgPQgJAHABAJQAAALAFAFQAHAFAKAAQAKAAAHgJQAGgIAAgHQAAgJgDgFQgFgFgJAAIgCAAQgLAAgHAGgAgLAJQgFgEAAgFQAAgHAHgFQAGgEAHAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAgBAAQgBAAgBAAIgBAAIgBAAQgEAAgEACQgFADAAADQAAACAEABIAEACQADAAADgDIAEgCIAEABIABADQgBADgEADQgGADgEAAQgFAAgFgEg");
	this.shape_21.setTransform(-57.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-7.1,126.6,16.6);


(lib.VERBAL2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3399","#CC33FF"],[0,1],-0.1,28.9,0.2,-28.8).s().p("Ai6D/QgOgNAAgUIAAhMIAChNIAAkTQAAgWANgSQASgYAeADIBWAGQAvAGAhARQCSBKAABsQAAAtgeAiQggAig8AXQBaAzAuA1QAMANAAARQAAATgPAOQgOAOgTAAQgTAAgPgPQhohhh7glIADBuQAAAUgNANQgNAOgVAAQgUAAgOgOgAhpAKIAPAAQBTAAAngUQASgJAPgOQAOgPAAgIQAAgmgxgkQgtghgzgFIgngDg");
	this.shape.setTransform(-9.6,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3399","#CC33FF"],[0,1],0,29.5,0,-29.5).s().p("AieEFQgmghAAhvQAAgtAHhbQAGhcABgtQgBgMgDgYQgDgXgBgMQABg0AvAAQAQAAAMAIQAogJAkgFQAjgFAfAAQBWAAA0ATQAfAMAAAgQAAASgMANQgOAQgVAAQgHAAgIgCQg2gPg1AAQgaAAgcAEQgdAEgiAIQAAAugDBZQATgBBygLQBCgHAQAAQAVAAAPANQANANAAAVQAAAogrAFIhRAHQgwAGhiAHQgCAsAAAaQAABDAIAKQADAEAoAAIA/gBIBAgBIAUgCQANgCAGAAQAVAAANALQAQANABAXQgBAmgoAIQghAGhrAAQhwAAghgeg");
	this.shape_1.setTransform(-53.7,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF3399","#CC33FF"],[0,1],-0.1,29,0.2,-29).s().p("AhLDyQgphjgzi7IgchcQgThAAAgZQAAgUAOgOQAPgLATgBQAhAAANAjIAOA6IAgBwQAbBgAZBLQAziBAchNIAdhRQAVgxAXgaQAPgSAVAAQAUAAAPAOQAOANAAAUQAAAOgJANQgSAbgPAlIgZBDIhcDtQgQApgXApQgOAbgbAAQgkAAgPgig");
	this.shape_2.setTransform(-99.8,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF3399","#CC33FF"],[0,1],-0.1,27,0.2,-26.9).s().p("Ai2DOIAHhtQAJiTAAi1QAAgUAOgOQANgOAUAAQAVAAAOAOQAOAOAAAUQAAC1gKCZQgDAbgEA4QBSgBB9gmQAIgDAIAAQAVAAAOAQQAMAOgBASQAAAdgdANQgoAThVANQhMANgyAAQhTAAgBhJg");
	this.shape_3.setTransform(127.6,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF3399","#CC33FF"],[0,1],0,27.7,0,-27.7).s().p("ACuECQgbgCgbg+QgTgogNg1QgZAEg6ADQg1AEgcAFQgQAmgnBMQgPAYgbAAQgSAAgQgNQgOgNAAgTQAAgSAxhlQgEgKABgJQABgRAfgJQAxhTA7haQBViCAUAAQAlAAANAuIAVBtQAWBjAeB9QACAKAPAkQAMAdAAAPQABAUgQANQgOANgSAAIgBAAgAgaAgQAPgEAggCIAwgEIgWhyIhJB8g");
	this.shape_4.setTransform(81.4,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF3399","#CC33FF"],[0,1],-0.4,29.9,0.4,-29.9).s().p("AioEEQgQgSAAgTIAAlpIgCgvQgBgaADgSQAEggA3gHQAagIA9AAQA/AAA7AqQBGAxAABIQAAAogPAbQgLAWgcAYQAhAQAaAgQAdAkAAAkQAAAugyAoQghAbgkAOQhPAeh5AAQgVAAgQgRgAhbC3QA6gDBEgUQA8gRAAgTQgBgbgmgUQgdgRgagCQgfAAg9gDgAhbi2IAACQQAfAEAPgCQBogIAAhFQAAgYgfgXQgfgXgjAAQgtAAgIABg");
	this.shape_5.setTransform(35.2,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.VERBAL2, new cjs.Rectangle(-121.4,-27.9,267.3,58.3), null);


(lib.DiverDivin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Ag+pKQACgCACgCQAIgEABgKQABgIABgIQACgJABgIQAAgIgBgJQAAgCAAgCQAAgFgDgFQAHACAHADQALAFALAHQACABADACQAAAAAAAAQADACBfArQABAAACABQAFACAFADQAFAEAFAFQACACACADQAEAGAEAEQAGAHAFAGQAGAHAFAHQAGAJAFAIQALASAEAVQABAEAAAEQACAHACAHQABADAAACQAAACAAABQAAAEgDAEQgJAHgGAHQgFAFgDAEQgEAFgGAEQgGAFgGAFQgGAEgHAEQgIAFgHAFQgBAAgBABQgEgHgGgEQgHgFgIgCQgIgDgJACQgIABgIAFQgIABgIACQgIACgJAAQgHgBgFgIQgCgEgDgEQAGgDAHgDQAOgGANgJQAPgJALgMQAJgKgLgMQgEgGgEgHQgFgJgIgHQgIgHgJgHQgGgGgIgFQgLgIgLgHQgPgLgPgJQgCgBgBgCQgCgBAAgBQgGgFgFgHgAAMp2QAAASgEARQgCAMgGAIAgWqLQgBARgBARQAAAPgDALAAnpfQABAQgDAQQgDAPgLAIAiYnuQAJAEAIgGQAHgFADgHQADgHgHgGQgHgGgHAIQABgDABgCQAEgHADgIQAEgIAGgGQAGgHAIgEQAIgEAIgCIABAAQAJAAAGAHQAGAHADAHQADAIgDAIQgDAIgEAGQgCAEgDADQAFgDAFgDQAIgDAIgBQAIAAAKADQAHACAGAHQAHAGAAAIQAAAIgHAGQgGAHgGAGQgGAFgHAGQgGAFgIAFQgIADgHAEQgJADgIgCQgCgBgCgBQgGgFgDgIQAAgCgBgDQgBgGAAgFQABgCAAgBQgIACgIAAQgJABgGgFQgCgDgCgCQgCgFgEgFQAAgBgCgCgAhdo6QADgBAEgCQAHgDAIgFQAFgCAEgDAhRoAQgCADgDACQgHAGgFAGQgFAFgEAEQAAABgBABQAAAAAAABQgBAEAAAFAhsnkQAHgFAHAAQAJABAGAHQAHAHgEAIQgEAIgIAEQgIAEgHgFQgEgDgCgCAitnFQADgEACgDQgJgCgFgHQgFgIABgJQABgJAHgFQAHgGAIAEQAHADAEAFABKpOQgFARgHARQgFAOgJAKABho6QABAPgHAPQgHARgJAPABzogQAGAQgKAQQgJAQgGARQgHASgHAKAA+myQAJAAAHAHAA1mrQAEADAEABACXnMQgJANgKALQgIAIgHAJACMnwQgBAPgJANQgJAPgMANQgCAEgEAEAAYmmQAJAIAMACAC2lOQADgBADgBQAHgDAGgDQAIgCAGgEQAGgEAFgDQAGgDAHgDQAFgDAFgEQAHgFAGgFQAGgEAFgEQAFgEAFgEQABAAABgBQAHgEAHgEQAGgEAHgEQAFgEAFgDQABgBABAAQADgCACgCQACgDABgCQACgCACgDQAFgFAGgDQAFgCAEgDQAHgEAGgDQAHgDAGgDQAGgDAGgEQAHgEAHgEQAHgCAGgEQAHgDAGgEQAGgCAFgEQAGgDAFgCQAEgCADgBQACAAABAAQADgCAEAAQAHgCAHgDQAHgCAGgEQAHgDAHgBQAHgCAIgDQAGgCAGgDQAJgDAEgEQAHgEAHAAQAHgBAHgCQAHgCAHgCQAHgCAHgDQAHgCAHgCQAHgCAIgBQAHgCAHgCQAHgCAHgEQAGgDAHgDQAFgDAGgDQAFgDAFgCQAHgCAGgDQAHgDADgDQAFgIAEgGQAEgFAEgGQAFgGAFgGQAFgFAGgFQAGgFAHgCQAHgDAGgBQAIAAAHAAQAHgBAIAAQAHgBAGAAQAHAAAGADQAGACAFAGQAGAHgFAHQgEADgFABQgHAAgIAAQgGgBgJAAQgEAAgFACQgIACgHADQgHACgGAGQgFAGgFAFQgEAEAGADQABABABgBQADAAADgBQAFgBAEgCQAGgCAGgEQAHgEAHgCQAHgCAHAAQAIABAGABQAIABAGAFQAGAGABAIQAAAJgDAIQgDAKgIgCQgGgBgGgGQgGgFgIgCQgHgCgHABQgHABgFAEQgCACgBABQgEAEgEADQgGAFgGAGQACAFAFABQADABADAAQAFABAFgBQAGgBAEgCQAEgBAFAAQAGgBAGABQAGACAGABQAHACAFADQAGAEACAFQAFAIgBAIQAAAJgGAHQgCADgDABQgKACgIgHQgEgEgDgDQgCgDgBgEQgCgEgDgDQgDgCgDgCQgDgBgEgBQgEgBgFAAQgGABgHADQgFACgEACQgEACgCAEQgBACABACQAEAGAGAAQADABAEgBQAFgBAFACQAGACAEACQAFADACAGQACAGgCAGQgCALgIAFQgEACgFgCQgEgCgBgGQgBgDgBgCQgBgCgDgCQgEgBgEgBQgBAAgCABQgCABgCABQgBACgCABQgCABgEABQgDACgEABQgFABgFABQgHgBgGgCQgFgBgFgDQgKgEgIgIQgIgIgHgKQgFADgIABQgGACgHADQgFAEgHACQgGAEgGADQgHAEgHAFQgGAEgHAEQgGADgHAEQgGADgIACQgEABgEAAQgDABgCAAQAAAAgBAAQAAABAAAAQgBAAgBAAIAAAAQgGADgHAEQgFAFgHADQgGAEgHADQgFAEgGADQgHAEgHADQgGADgGAEQgGADgGADQgDACgDABQgHAEgGADQgGAEgHADQgGAEgHACQgHADgHADQgHACgHADQgHADgHADQgHADgHACQgGACgGADQgFAEgFABQgHACgGABQgGACgGADQgCAAgSAOIgiAcQgDACgDADQgJAHgKAHQgHACgGAEQgGAEgGAEQgHAFgGAEQgBABgCABQAOAOATAUQAHAGAHAIQAvAwBIBNQAEADADAEQATATAUAWIAmAoAKwn9QAAAAgBgBQgDgFgDgFAESBcQAagPAZgHQAZgHAZgHQAbgHAXgOQAUgMASgTIABAAQAVAYANAXQANAXAAAaQAAAbgBAbQgBAcgLAVQgMAVgZADQgFABgCAFQgEAJgDAHQgBADgBACQABADAAAEQgCAggiAiQgPAPAAAHQgIgCgVAHQgJAZgYAQQgMAIgNAHQgYAOgQASQAOAaAWAOQAVAOAWAJQAWAJAZAIQAaAIARASQALALgIASQgBABAAACQgMAVgRAJQgvAXgdAmQgVAcgbAaQgCADgCACQgGADAAADQgMgEgEgGQgPADgEgLQAAgBAAgBQgDAHgIAFQgQAJgHgGQgoghBFghQA0gYASggQgSg5gqgOQgNgJgNgJQgVgQgWgOQgWgOgUgSQgWgVAPgVQAJgNAJgLQgVgEgYgLQgYgKgXgOQgWgOgIgaQgIgZAOgXQAMgUASgUQARgSASgSQATgTAPgWQABACABABQABADADADQAHAJAEAKQABAFACAEQABACABADQAMAVAKAXQABAAAAABQADAIAFAIQgFAGgCAIQgFALgGAKQAYAWAUALQgHAKgHAKQgQAWgTASQgHAGgGAHACQlAQANgFALgFQAPgGgBACQgDACgEABQgGACgFACQgGADgHACQgDABgEABgABelZQAGAFAGAEQAOAZARgGQAAAAAAgBQAEgBADgBABmmHQAAABAAABQAEAHABAJQABAIgEAIQgEAGgGAGQAAAAgBAAIAAABQgEADgEADQgCABgCACQgFADgFABQgDABgEABQgIABgJgCQgIgDgJAAACXjXQABgBACgBQAGgDAHgFQAGgFAGgFQAGgEAGgFQAGgEAHgEQAFgCAEgDAgmllQgGAEgGAEQgHAFgIAEQgGADgHACQgIACgIADQgIACgJACQgDAAgCAAIgBAAAhllyQAEABADAFQAGAJgJgIQgCgDgCgEQgDgBgCABQgIACgIADQgJACgJACQgIABgIgCQgIgBgIgBQgBgBAAgBQgEgIgCgIQgBgDAAgCIAAgBQgGgCgHgEQgHgEgIgDQgIgDgHgEQgHgFgHgEQgHgEgIgFQgIgEgIgFQgHgDgIgDQgIgDgIgEQgIgDgIgEQgHgEgHgDQgIgDgIgDQgHgDgHgDQgGgCgEgCIAAAAQgCgCgCgBQgJgBgIgDQgIgDgIgDQgIgCgIgEQgHgCgIgDQgHgDgIgFQgIgEgIgDQgIgCgHgEQgDgCgEgBQgDgCgDgCQgCgBgCgCQgHgEgIgDQgHgDgIgFQgIgEgHgDQgIgDgIgDQgIgDgIgCQgHgCgIgEQgHgDgIgDQgHgDgIgEQgIgDgHgDQgIgCgJgDQgIgDgIgBQgIgCgIgCQgIgCgIAAQgFABgFgBQgIADgDAIQgBAIAAAIQAAAHgEAFQgBABgDAAIAAAAQgCAAgBABQgBABgBABQgEgCgGgBQgHgBgHgBQgEAAgDgCQgIgFgCgIQgCgIAIgFQAHgFABgGQABgHgGgHQgCgDgDgCQgJgTgKAJQgQAEgKANQgHAJgIgCQgMgEADgPQgEAGgHABQgEABgCgDQgEgIAAgIQABgJAFgGQAGgLALgKQgCgDgCgEQAAgBgBgCQAAgBgBgBQgBgDgBgDQAAgbAegGQABAAAAgBQAEAAAEAAQABAAABAAIAAAAIAAAAQgBAAgBAAAAmhyIAAAAQhvhJgWgyQgVgxgDgQQABgTABgFQgFAAgFgBQgJgBgIgBQgEgBgDgBQgCgDgCgCQgFgIgEgHQgFgGgDgHAAmhyIgBAAAESBcQgmgVgdgtQgOgWgQgUQgCgDgCgDQgUgMgVgJQgkgOgYgdQgJgMgKgLAA1htIACAAABsheIg1gPIgRgFADQE/QAHgHAGgHIAAAAQAaAJAXAQIAAAAQA+AUAiAEACuDrQAVAnAaAfQgHgTAMgSQAggpAKgyACBCUQAXAEAlgQQAtgUAogYADwLHQABAAABgBIAAABQAAADgBAEAEKLCQgLAMAFAIAEfLBQgPAOAOAGADwLHQAAADABACADxK5QgBAIAAAGAhnmTQgCAWAEALAsoraQAGgDAGgBQANgDAMAMQAJgBAIAGQAGAGAHAGQAGAFAFAIQAEAHAEAIQAFAIAIACQAIADAHAEQAIAEAJADQAHACAHADQAIADAIAEQAHAFAJACQAHACAIACQAGADAHACQAIADAIACQAHACAHACQAGACAGADQAHADAGABQAIABAIACQAIABAIACQAIACAIACQAGABAEACQACABABABQABAAABABQAHACAHAEQAIADAIADQAIADAGADQAJACAHAEQAHAFAHADQAHAEAHAEQAIAEAIAEQAGAEAHAEQAHAEAIAEQAIAEAHAEQAHADAGAEQAHAEAHAEQAHAEAHAEQAIADAIAEQAIAEAHAEQAIADAIAEQAIADAIADQAIACAJACQAIADAIADQAIADAIACQAHACAFABArrqqQgIgLgKgJQgJgHgJgGQgLgOgOgBAsoraIAAAAAs0qzQgHADgHAEQgEADgDADAsTqzQgLgFgMACQgBAAgCAAQgEABgDACAsqq2QgLgNABAQAsGqUQgQgSgXANQgDACgCABQgTAOgFARIgBAAAi0mEQgBgFgBgGQAAgJgBgJQABgIACgJQACgIAEgJQABgBAAgB");
	this.shape.setTransform(16.4,39.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAKAhIgFgFIgBgMIAAgCIABgJIABgCQAGgDAHAAQAJAAAGAHQAHAHgEAIQgEAIgIAEQgDACgEAAQgEAAgEgDgAglgFIAAgBQADgGACgIIADgLQAHgHAHAFQAHAGgDAIQgDAHgGAFQgGAEgFAAQgDAAgDgCg");
	this.shape_1.setTransform(5,-9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJBAIgEgCQgHgFgCgIIgBgEIAFAEQAHAGAIgEQAHgFAEgHQAFgIgHgIQgGgHgIAAQgHgBgHAFIAAgBIAJgKQAFgGAHgEIAEgFIgEAFQgHAEgFAGIgJAKIAAABIAAACIgCAIQgIACgIAAQgJABgGgFIgEgFQgCgFgDgFIgCgCQAIAEAJgGQAHgFADgGQADgIgIgGQgHgFgGAHIACgEIAHgPQADgIAGgHQAHgGAIgFQAHgEAJgBIAAAAQAJgBAGAHQAGAHADAHQACAIgDAJQgCAHgEAGIgGAIIALgGQAIgEAIgBQAHAAAKADQAIACAGAHQAGAFAAAJQAAAIgGAGIgMAMIgNALIgPAKIgPAHQgFACgEAAIgGgBg");
	this.shape_2.setTransform(7.8,-10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#986631").s().p("AAhCAQgHgFgIgDQgIgDgIACQgIACgIAEIgQAEQgIACgIgBQgIgBgGgIIgEgHIAOgHQAOgGANgIQAOgKALgMQAIgJgKgNIgIgMQgFgKgIgHIgQgNIgOgKIgXgQIgfgTIgDgDIgCgDIgKgLIgBgBIAFgDQAIgFAAgJIADgRQACgJAAgIIAAgQIgBgEQAAgFgCgFQAHABAHADQALAFAKAHIAFADIABABIBhAsIADABIAKAGIAKAJIAEAEIAJALIALAMIALAPIALAQQAKASAEAUIACAIIADAPIABAFIAAADQABAEgEADIgPAPIgHAJIgLAJIgMAJIgMAJIgQAJIgCABQgDgGgHgEgAgNB1QgMgBgIgIQAIAIAMABgABJBeIgOAQIAOgQQALgMAIgMQgIAMgLAMgAACBqIgHgDIAHADgAATBmQgHgGgJgBQAJABAHAGgABIA+QgKAOgLAOIgHAHIAHgHQALgOAKgOQAIgNABgPQgBAPgIANgAA1ASQgJAQgGAQQgHASgHALQAHgLAHgSQAGgQAJgQQAGgLAAgJQAAgGgCgFQACAFAAAGQAAAJgGALgAAhgJQgHAPgKAQQAKgQAHgPQAGgOAAgPIAAgCIAAACQAAAPgGAOgAAEgaQgFAPgIAJQAIgJAFgPQAHgQAEgSQgEASgHAQgAgVgtQgDAPgLAJQALgJADgPQADgNAAgMIAAgHIAAAHQAAAMgDANgAgxhAQgDALgGAJQAGgJADgLQADgSABgSQgBASgDASgAhShXQgBAPgDAMQADgMABgPIABghIgBAhg");
	this.shape_3.setTransform(22.2,-13.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC97").s().p("AEELWQgBgDAAgDQAAgGAHgIQgHAIAAAGQAAADABADQgPADgEgLIABgHIAAgBIgCABIABAFQgDAHgIAFQgQAJgHgGQgoghBFghQA0gYASggQgSg5gqgOIgagSQgVgQgWgOQgWgOgUgSQgWgVAPgVQAJgNAJgLIANgNQATgSAQgWIAOgUIANgOIAAAAQAaAJAXAQIAAAAQA+AUAiAEQgJAZgYAQIgZAPQgYAOgQASQAOAaAWAOQAVAOAWAJQAWAJAZAIQAaAIARASQALALgIASIgBADQgMAVgRAJQgvAXgdAmQgVAcgbAaQgGgDAAgEQAAgGAHgHQgHAHAAAGQAAAEAGADIgEAFQgGADAAADQgMgEgEgGgADwLHIAAgCIABgMIgBAMIAAACgAEELWIAAAAgAEeLVIAAAAgABlF5QgYgKgXgOQgWgOgIgaQgIgZAOgXQAMgUASgUIAjgkQATgTAPgWIACADIAEAGQAHAJAEAKIADAJIACAFIAWAsIABABQADAIAFAIQgFAGgCAIIgLAVQAYAWAUALIgOAUQgQAWgTASIgNANQgVgEgYgLgADQE/IAAAAgACSCwIAAAAgACHCdIABABQAHAIADAKQgEgKgHgJgADPAaIgegqIgEgGQgUgMgVgJQgkgOgYgdIgTgXIAAAAIACAAIA1APIg1gPIgRgFIAAAAQhvhJgWgyQgVgxgDgQQABgTABgFIgKgBIgRgCIgHgCIgEgFIgJgPIgIgNIAQACIACAAIACABIACAAIADAAIABAAIAAAAIADAAIADAAIASgEIAQgFIAFAAQACAEACADIABAAIAAAAIAFAEIgCgDIAAgBIgBgBQgDgFgEgBQgDgHAAgNIABgNIgBANQAAANADAHIgFAAIgQAFIgSAEIgDAAIgDAAIAAAAIgBAAIgDAAIgCAAIgCgBIgCAAIgQgCIgBgCIgGgQIgBgFIAAgBIgCgLIgBgSQABgIACgJQACgIAEgJIABgCIgBACQgEAJgCAIQgCAJgBAIIABASIACALIgNgGIgPgHIgPgHIgOgJIgPgJIgQgJIgPgGIgQgHIgQgHIgOgHIgQgGIgOgGIgKgEIAAAAIgEgDQgJgBgIgDIgQgGIgQgGIgPgFIgPgIIgQgHIgPgGIgHgDIgGgEIgEgDQgHgEgIgDIgPgIIgPgHIgQgGIgQgFIgPgGIgPgGIgPgHIgPgGIgRgFIgQgEIgQgEQgIgCgIAAIgKAAQgIADgDAIQgBAIAAAIQAAAHgEAFQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIAAAAIgDABIgCACQgEgCgGgBIgOgCQgEAAgDgCQgIgFgCgIQgCgIAIgFQAHgFABgGQABgHgGgHIgFgFQgJgTgKAJQgQAEgKANQgHAJgIgCQgMgEADgPIABAAQAFgRATgOIAFgDIAAAAIABAAIABgBQAIgEAIAAIAAAAIAAAAQALAAAJAJIAAAAIABABIgBgBIAAAAQgJgJgLAAIAAAAIAAAAQgIAAgIAEIgBABIgBAAIAAAAIgFADQgTAOgFARIgBAAQgEAGgHABQgEABgCgDQgEgIAAgIQABgJAFgGQAGgLALgKIgEgHIgBgDIgBgCIgCgGQAAgbAegGIABgBIAIAAIACAAIAAAAQAOABALAOQAJAGAJAHQAKAJAIALQgIgLgKgJQgJgHgJgGQgLgOgOgBQAGgDAGgBQANgCAMALQAJgBAIAGIANAMQAGAFAFAIIAIAPQAFAIAIACIAPAHIARAHIAOAFIAQAHQAHAFAJACIAPAEIANAFIAQAFIAOAEIAMAFQAHADAGABIAQADIAQADIAQAEQAGABAEACIADACIACABIAOAGIAQAGQAIADAGADQAJACAHAEIAOAIIAOAIIAQAIIANAIIAPAIIAPAIIANAHIAOAIIAOAIIAQAHIAPAIIAQAHIAQAGIARAEIAQAGIAQAFIAMADIAFgHQgJgCgFgHQgFgIABgJQABgJAHgFQAHgGAIAEQAHADAEAFIACADQAEAFACAFIAEAFQAGAFAJgBQAIAAAIgCIgBADIABALIABAFQADAIAGAFIAEACQAIACAJgDIAPgHIAOgKIANgLIAMgNQAHgGAAgIQAAgIgHgGQgGgHgHgCQgKgDgIAAQgIABgIADIgKAGIAFgHQAEgGADgIQADgIgDgIQgDgHgGgHQgGgHgJAAIAAAAIAHgDIAPgIIAJgFIAAAAIALAMIACACIADADIAeAUIAWAPIAOALIARAOQAIAHAFAJIAIANQALAMgJAKQgLAMgPAJQgNAJgOAGIgNAGIAFAIQAFAIAHABQAJAAAIgCIAQgDQAIgFAIgBQAJgCAIADQAIACAHAFQAGAEAEAHIAAACQAEAHABAJQABAIgEAIQgEAGgGAGIgBAAIAAABIgIAGIgEADQgFADgFABIgHACIAAAAIgFAAIgBAAIAAAAIgJgBIgCAAQgIgDgJAAQAJAAAIADIACAAIAJABIAAAAIABAAIAFAAIAAAAIAHgCQAFgBAFgDIAEgDIAIgGIAAgBIABAAIAMAJQAOAZARgGIAAgBIAHgCIAHgCIANgFIALgEIAHgDIgHADIgLAEIgNAFIgHACIAYgKQAPgGgBACIAGgCIANgGQAIgCAGgEIALgHIANgGIAKgHIANgKIALgIIAKgIIACgBIAOgIIANgIIAKgHIACgBIAFgEIADgFIAEgFQAFgFAGgDIAJgFIANgHIANgGIAMgHIAOgIIANgGIANgHIALgGIALgFIAHgDIADAAIAHgCIAOgFQAHgCAGgEQAHgDAHgBIAPgFIAMgFIANgHQAHgEAHAAIAOgDIAOgEIAOgFIAOgEIAPgDIAOgEIAOgGIANgGIALgGQAFgDAFgCIANgFIAKgGIAJgOIAIgLIAKgMIALgKQAGgFAHgCQAHgDAGgBIAPAAIAPgBIANgBQAHAAAGADQAGACAFAGQAGAGgFAIQgEADgFABIgPAAIgPgBQgEAAgFACIgPAFQgHACgGAGIgKALQgEAEAGADIACAAIAGgBIAJgDIAMgGQAHgEAHgCQAHgCAHAAIAOACQAIABAGAFQAGAGABAIQAAAJgDAIQgDAKgIgCQgGgBgGgGQgGgFgIgCQgHgCgHABQgHABgFAEIgDADIgIAHIgMALQACAFAFABIAGABIAKAAIAKgDIAJgBQAGgBAGABIAMADQAHACAFADQAGAEACAFQAFAIgBAIQAAAJgGAHQgCADgDABQgKACgIgHIgHgHIgDgHQgCgEgDgDIgGgEIgHgCQgEgBgFAAQgGABgHADIgJAEQgEACgCAEQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAEAGAGAAIAHAAQAFgBAFACIAKAEQAFADACAGQACAGgCAGQgCALgIAFQgEACgFgCQgEgCgBgGIgCgFIgEgEIgIgCQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABIgEACIgDADIgGACIgHADIgKACQgHgBgGgCIgKgEQgKgEgIgIQgIgIgHgKIgBgBIgGgKIAGAKIABABQgFADgIABQgGACgHADIgMAGIgMAHIgOAJIgNAIIgNAHQgGADgIACIgIABIgFABIgBAAIAAABIgCAAIAAAAQgGADgHAEIgMAIIgNAHIgLAHIgOAHIgMAHIgMAGIgGADIgNAHIgNAHIgNAGIgOAGIgOAFIgOAGIgOAFIgMAFQgFAEgFABIgNADIgMAFIgUAOIgiAcIgGAFIgTAOQgHACgGAEIgMAIIgNAJIgDACIAhAiIAOAOIB3B9IAHAHIAnApIAmAoQgSATgUAMQgXAOgbAHIgyAOQgZAHgaAPQgmgVgdgtgADMj8IgNAIIgMAJIgMAKIgNAIIgDACIADgCIANgIIAMgKIAMgJIANgIIAJgFIgJAFgAhvlGIARgEIAQgFIANgFIAPgJIAMgIIgMAIIgPAJIgNAFIgQAFIgRAEIgFAAIAAAAIgBAAIABAAIAAAAIAFAAgAtCqsIgHAGIAHgGQAHgEAHgDIAHgDIADAAQgLgNABAQQgHADgHAEgAsTqzIgDgBIAAAAQgHgDgHAAIAAAAIAAAAIgFABIgBAAIABAAIAFgBIAAAAIAAAAQAHAAAHADIAAAAIADABgAAlhyIABAAIAAAAgAhblnIgFgEIAAAAIgBAAQgCgDgCgEQAEABADAFIABABIAAABIACADIAAAAgAhllyIAAAAgAhllyIAAAAgAKwn9IAAAAgAsoraIAAAAIAAAAg");
	this.shape_4.setTransform(16.4,39.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AgxCYIAAgBQgXgQgagJIAAAAQgDgHAAgHQAAgMAIgKQAggqAKgxQgKAxggAqQgIAKAAAMQAAAHADAHQgagfgVgnIAAgBIgXgsIgCgFIgDgIQgDgJgHgJIgBgBIgEgFIgCgEQAXAEAlgQQAtgUApgYQAagPAXgHIAzgOQAagHAXgNQAUgMATgUIAAAAQAVAYANAYQANAWAAAaIgBA2QgBAbgLAVQgMAVgZADQgFABgCAFIgHARIgBAEIAAAHQgCAggiAiQgPAPAAAHQgIgCgUAHQgigEg+gTg");
	this.shape_5.setTransform(48.4,57.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("ABPldQABgDACgCQAGgJgDgJQgDgJgCgKQgCgKgDgIQgEgJgEgIQgBgCgCgCQgCgFgEgEQAHgCAJAAQANAAAOADQAEABADAAQAAAAABAAQADABB1ABQACAAACAAQAGAAAGABQAIACAHADQADABADACQAGAEAHADQAJAEAIAEQAJAFAJAFQAJAGAJAGQATAOAOATQACAEADAEQAEAHAGAHQACACABACQABACAAABQADAEgDAFQgFALgEALQgCAGgBAGQgDAHgEAHQgEAIgEAIQgEAGgFAHQgGAIgGAJQgBABAAABQAAABABABQAHAGAFAIQACAFABAEIABgCQAeAlAVAFQAEABAFAAQAYAFAWAAQAIAAAXAmQAWAmADAPQADAQgdBSQg1A/hRBZQgBACgBABQggAjgmAsQgDAEgEAEQgUAXgVAZIgqAuAFHlaQAGAQgDARQgDATgGATQgCAFgCAFAFjk6QgEARgFAQQgFAMgDALAFPjeQgHgFgJgBQgJgCgJAAQgKABgIAGQgIAFgGAJQgHAFgIAFQgHAFgJAEQgIACgKgFQgDgDgEgDQAEgGAHgHQALgNAKgOQALgQAGgSQAFgNgQgIQgIgEgHgFQgJgIgLgDQgMgDgLgEQgJgDgLgCQgQgDgOgCQgUgEgUgDQgCgBgCgBQgDgBgBAAQgIgDgHgFIgBAAAFfjFIAAABQABADgBAFQAAAEgBAEQgBACAAACIgDAGQgCAFgDAFQgCACgBADQgEAFgEAEQgDACgDACQgJAFgJACQgKABgJAEAHOhQQgPAFgNAIQgOAHgKALQgKALgHALQgKARgLANQgLAOgKAOQgLAOgKAOQgMARgMATQgJAOgKANQgLAMgJANQgPASgNAPQgFAFgFAEQgFgEgFgEQgOgIgPgFQgRgJgSgEQgKgEgKgCIhkgRIgYgFQgCAAgCgBIjEglIg0gqQgCgJgEgJQgBgDgBgCQAkAIAdgQQAQgDARgDQAcgGAbgGQALgDAMgCQAJgKALgLQAVgTAYgSQAXgRAdADQAJABAIADQgGgGgGgHQgBgCgCgCIAAgBQgEgFgDgGQgFgJgEgJQgDgIgCgKQgBgKABgKQAAgCAAgBQAAgFABgFQgKACgIgFQgIgFgDgKQgDgKAFgIQAEgKAKABQAIAAAHAEIAAAAQAKAAAGgKQAFgIAAgJQAAgJgKgDQgKgCgDAKQAAgCAAgDQAAgKABgJQAAgKADgJQACgHAFgGAGzA4QgNAMgMAMQgOANgMANQgKALgKALQgOAQgRAQQgKAKgLALQgKALgJAMQgJANgIAPQgIAMgIAMQgEAFgFAEQgDACgDACQgHgEgFgFQgFgEgEgFQgHgKgIgIQgIgGgNgFQgHgCgKgCQgaABgYgCQgDAYAEAYIAAAAQgBAIAHATQAHASASAZQAPAVAYASIAAABQgZAagZARQgXARgeADQgeACgeACQgeACgYgKQgUgKgIgUAnihsQgEgBgEgBQgBAAgBAAQgBAAgBAAQgDgBgDgBQgUgOAKgZQAAAAAAgBQABgEADgCQAAgBAAAAIABgBIAAABQgBAAAAABAn5igQAAgGACgFQAFgLAPgDQAagWAkgCQANAAAMgHQAsgaAmggQAlgfAigfQBTAABSAOQAyAKAwAJQAIABAJABQABgCACgDQAGgHAIgFIAAAAQAKgFAJAFQAJAEAGAGQAHAHAAAKQABAJgBAIQgBAFgBAFQADgGAEgFQAHgHAIgFQAHgDAMgBQAIgBAKAEQAJADAEAJQADAIgEAJQgDAJgDAJQgEAIgFAJQgEAJgGAIQgGAHgHAHQgHAGgJACQgCABgDgBQgJgDgGgHQgBgCgCgBQADABAFABQAJACAHgHQAGgIABgKQABgKgLgFQgJgFgJAEQgIADgFAIQAAAAABABQABAFABAFQgIAGgIADQgIAFgIgDQgEgBgDgCQgEgEgGgEQgBgBgCAAAA2k+QADgEADgDQAGgGAHgIQADgFADgFABbmxQAGASAHARQAHAQACANACvmgQAIAQADASQAEARgIANACJmrQAHASAEAUQADANgDALAD7mUQAHAQAAASQAAAUgDAUADameQADAUAAAUQAAARgEAOAEZmAQAMANgCAVQgCAUABAUQAAAVgCAOAlUhyQAJgPALAGQgCgIADgKQAFgTAKgBQA0gHgVBHQgBAEgCAFQgKAfgCAaQABABABABQAIAFAGAIQAGAHAFAIQAEAHAEAJQACAEACAFAAajyQgygEgzgHQgSgDgRgFQg0gTg0gIIgBAAIAAABQgtAbgrAfQgjAZgZAiIABALIAFAFQAEADAEADQAFADACAFQAAACgBACIAAAAQgBACAAACQABABAAABQgDACgEAEQgFAEgEAGQgBABgCACQgBAAgBABQgHADgHgCQgIgCAAgJQAAgIgEgDQgFgFgJABQgDAAgCABQgTgCABALQgFAPAFAOQACAEgBAEQAAAEgDADQgGAFgHgEQgDgBgCgDQABAEgBADQAAACgBADQgBACgBAAQgBABgCAAQgHAAgHgFQgGgEgCgHQgFgLgCgMAjWkgQgBAAAAAAAm2i2QgNABgMADQgJADgKAEQgPABgIAKAmziWQgWACgCAZQAAACAAADQABAVAKANIABAAAn5ifIgBAAAniiDQgBAGAAAIQAAAEABAFAniiDQAAgEACgDQAAgCABgBQgQADANAHgAnRicQgKAGgEAJAk6h3QgEgDgDgBQABAAABAAQADAAADABQgBABAAACgAlohdQAAgDAAgDQAAgBABgBQABgGgBgCQAMgHAHACAljgYQgFgCgFgBQgJgCgJgDQgHgDgDgFQgEgKAKgFQAIgEAJAAQAGgBAGACQgCgSAAgRAlKhiQgBgPgJgBAlYhMQAAgYgQAHAlmg6QACAAACABQAIADAJADQAJADAJAEQAJADAJADQAHACAGAFAlhgFQgBgEAAgEQgBgGAAgFAlhgFQACABADABQAIAEAHAHQAGAGAIAGQAEADAFADQADACAEACQACABABgBQAIAAgDgGQgFgIgFgJQgFgHgIgFQgIgGgJgFQgFgDgGgCQgFgCgEgBAlhAeQgJgEgJgBQgKgBgJAEQgJAEgJgBQgKgBAAgNQgBgJADgIQADgJALgDQAJgDAJABQAJABAJADQAHACAGADAlqBVQgDgBgCAAQgEgBgFABQgEABgFABQgFABgDAEQgDADgDADQgFADgHACQgMAEgLgGQgEgCgBgEQgFgKADgJQABgJAIgHQAFgEAJgCQAIgCAIACQAJAAAIACQAIAAAHAEQAFABAEADQACABACABQADgSABgRAllBBQAEACAEADQAHADAHABQADABAEAAQAGAAAEgEQgEgIgGgHQgEgGgEgFQgCgCgBgCQgFgHgIgEQAAAAgBAAAlwBxQADAAADAAQAHABAGADQAEACAFABQAHABAHgEQACgCAAgCQgBgGgFgDQgEgFgGgDQgHgGgIgDQgEgCgDAAAlwBxQAAgKADgJQABgFACgEAloCTQgCACgCADQgDAFgGABQgHABgFgFQgIgIABgMQABgIAEgFQAFgGAHgBQADgBAEAAAlDCiQgCgBgBgBQgEgDgDgCQgCgBgBgCQgBgCgCgDQgCgCgCABQgFgCgFABQgEAAgDABQAAABAAAAAlDCiQgHABgHAAQgQAAgHgQAiDCXIhPgNQgCADgCADQgLAJgLAIQgMAHgRADQgMABgNABQgQgGgRgFAiKD0QgIgXAFgaQADgPAEgQQACgHABgGAhTCoQgNgHgPgDQgJgFgLgCAkwhrQgFgIgFgEAESj5QAKgDAKAEAENjtQAFABAEgBADyjbQAMAEANgDADNh9QgFAHgEAIQgFAIgGAIQgFAFgGAFQgHAGgHAGQgIAGgIAGQgIAEgJACQgDABgDABQBkAYgIAaQgEAJgDAJQgHARgHAQQgDADgDACQgNALgNALIAAABIAAgBIAAAAABdkIQgCADgCAEQgFAJgCAJQgCAHgDAGQAAABAAABABXjGQgEgGgCgGQAAgCgBgBAA9hLQAQAFANAPQACACADACQADACADACQADgBAFgBQAGgCAGgBAAaitQAAgDABgCAhJgHQARgDARgBQAhgDAFAcQACARABAPQAAALAAAKQAAAHABAHQAEgDAGgCQAHAKAJALQAIAFADAHQALgBAKAAQAAAAABAAQAcgCAbgCQADAAACAAQACAAACAAQADAAAFABQAJAAAJgCQAAAAAAABQgJASgGATQgBAEgBAEABCDTQgQgCgRgCQgQgEgPgDQgRgGgRgFQgRgHgRgHQgIgEgJgDQgIAGgHAIQgVAWgOAcQgDAGgCAGAALB/IgDAAIgBABQAAgBAAgBQAAgBAAAAQgBgEAAgEQgDgSAAgSAALB/IAUgCIABAAQABAEACADAA9BsQgdADgaAGABag3QABACABACQAQAUAMAbQALAYALAbQAHARAIAPIAAAAQAAgBAAAAQABgBABAAIABAAQgCABgBABIAAAAIAAAAACgBNIAAAAACdBPIgFAYABQDjQgIgIgGgIAg2GVQAAgEgCgEQgBAAAAAAQgEgEgDgDQgEgEgDgEQgCgBgCgCQgEgBgDgCQghgPgUgyQgJgWgIgDQAGgHACgZQACgEADgFQAAgBABAAQAAAAAAAAQAAABgBAAAB5DZIg3gG");
	this.shape_6.setTransform(6.4,45.1,0.998,0.998,-32.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("AgsChQgVgJgIgVIgBACQABgFgDgEIgBAAIgHgHIgHgHIgEgEIgHgDQghgPgUgyQgJgWgHgDQAFgHACgXIAGgKIAAAAIAAgBIAGgLQANgdAVgWIAPgOIASAHIAhAOIAjALIAfAIIAhADQAGAJAHAHQgHgHgGgJIA2AHQgCAYAEAXIAAAAQgBAIAHASQAGATASAYQAQAWAXASIAAAAQgYAagZARQgYARgdADIg9AEIgJAAQgZAAgTgIgAAPiMIgDgGIgBAAIgTABIgEAAIAAgCIgBgIQAZgGAdgCIACgBIA2gDIAGgBIADAAIAIABQAJABAJgCQgJASgGATIgCAIgAgIiRIATgBIABAAIADAGgAgMiRIAEAAIgDABIAAAAIgBgBgAgMiRIAAAAg");
	this.shape_7.setTransform(22.8,67,0.998,0.998,-32.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAXAcIgHgCQgEgGgDgGIAAgDIgDgKIAAgBQAEgHAIgDQAJgDAKAEQAKAFgBAKQgBAJgGAIQgFAGgGAAIgFgBgAgrAKIAAAAIAAgBQABgIgBgIIgCgKIAAgCQAEgLAJADQAKACABAJQAAAJgFAHQgGAKgKAAIgBAAg");
	this.shape_8.setTransform(0.4,22.3,0.998,0.998,-32.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAJBEQgJgDgFgHIgDgEIAIADQAIACAHgIQAGgIABgJQABgLgLgEQgJgFgIAEQgIADgFAIIAAgCIAFgOQACgJAFgHIAEgIIgEAIQgFAHgCAJIgFAOIAAACIABABIACAKQgIAFgIAEQgIAFgIgDIgHgDQgEgFgGgDIgDgBQAKAAAGgKQAFgJAAgIQAAgJgKgDQgKgCgDAKIAAgFIABgSQAAgKADgJQACgHAFgGIADgFQAGgHAIgFIAAAAQAKgFAJAFQAJAEAGAGQAHAHAAAJQAAAJAAAJIgCAJIAGgKQAHgHAIgFQAHgEAMgBQAIgBAKAFQAJADAEAJQADAIgEAJIgGARIgJARQgEAIgGAJIgNANQgHAHgJACIgCAAIgDAAg");
	this.shape_9.setTransform(0.9,18.6,0.998,0.998,-32.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC97").s().p("ACZFDQgSgZgHgSQgHgTABgIIAAgBQgEgXADgYIg3gGIghgEIgfgHIgigLIgigOIgRgIQgNgGgPgDQgJgFgLgCIhPgOIgEAHQgLAJgLAIQgMAHgRADIgZACQgRgGgQgFIgDgCIgHgFIgDgDIgDgFIgBgBIgBAAIgCgBIAAAAIAAABIgHgBIgBAAIAAAAIgBAAIgBAAQgEAAgDABIAAABIAAgBQADgBAEAAIABAAIABAAIAAAAIABAAIAHABIAAgBIAAAAIACABIABAAIABABIADAFIADADIAHAFIADACIgOABQgQAAgHgQIgEAFQgDAFgGABQgHAAgFgEQgIgIABgMQABgIAEgFQAFgGAHgBIAHgBIAGAAQAHABAGADIAJACIABABIABAAIAAAAIABAAIABAAIAAAAQAEAAADgCIABAAIACgBQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBAAAAIAAgBQgBgGgFgEIgKgIQgHgFgIgDIgHgDIAHADQAIADAHAFIAKAIQAFAEABAGIAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABIgCABIgBAAQgDACgEAAIAAAAIgBAAIgBAAIAAAAIgBAAIgBgBIgJgCQgGgDgHgBIgGAAQAAgKADgJIADgKIgFAAIgJAAIgJACQgFABgDAEIgGAGIgMAFQgMAEgLgGQgEgCgBgEQgFgKADgKQABgIAIgHQAFgEAJgCQAIgCAIACIARACQAIAAAHADIAJAFIAEACQADgSABgRQgJgEgJgBQgKgBgJAEQgJAEgJgBQgKgBAAgNQgBgIADgJQADgJALgDQAJgDAJABIASAEIANAFIAFACQAIAFAHAHQAGAFAIAGIAJAGIAHAEIABAAIABAAIABAAQAGAAAAgDIgBgDIgKgQQgFgIgIgFIgRgLQgFgDgGgCIgJgDIAJADQAGACAFADIARALQAIAFAFAIIAKAQIABADQAAADgGAAIgBAAIgBAAIgBAAIgHgEIgJgGQgIgGgGgFQgHgHgIgFIgFgCIgBgIIgBgLIgKgDIgSgFQgHgDgDgFQgEgKAKgFQAIgEAJAAQAGgBAGABIgCgiIAFgCIABAAIABAAQAJABAAARQAAgRgJgBIgBAAIgBAAIgFACIAAgGIABgCQABgGgBgCQAMgHAHACQAJgPALAGQgCgIADgKQAFgTAKgB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");
	this.shape_10.setTransform(7.1,46.1,0.998,0.998,-32.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#986631").s().p("AAAB6IgIgGIAKgNQAMgMAKgPQAKgQAHgRQAEgOgQgIQgHgEgHgFQgKgIgKgDIgWgFIgUgGIgfgFIgngHIgFgBIgDgCQgIgDgIgFIgBAAIAEgFQAFgJgDgJIgFgSQgCgKgDgJQgDgJgFgIIgCgEQgDgFgEgEQAIgCAJAAQANABAOACIAHABIAAABIB4ABIADAAIANACQAHABAHADIAGADIAOAHIARAIIARAKIATANQATANANATIAFAIQAFAIAFAGIAEAFIABACQACAEgCAFIgJAVIgEAMQgDAIgEAHIgIAPIgJAOIgMAQIgBADQgHgGgIgBQgKgCgIABQgKAAgIAGQgJAGgGAIIgOAKQgIAGgJADIgFABQgGAAgFgEgAAjBjIAKgCIAAAAIAAAAIgKACIgBAAIgBAAQgGAAgFgCIgCgBIACABQAFACAGAAIABAAIABAAgAA0BPIACAAIADgBIgDABIgCAAIgBAAIAAAAIgCAAIgCAAIACAAIACAAIAAAAIABAAgABIBDQgFgCgFAAIAAAAIgBAAIgGABIgBAAIgBABIABgBIABAAIAGgBIABAAIAAAAQAFAAAFACIAAAAgAB8AiIgHAYIAHgYQAGgQADgRQgDARgGAQgABtACQgEATgGATIgEAKIAEgKQAGgTAEgTIABgKQAAgLgEgLQAEALAAALIgBAKgABDApQABgLAAgQIAAgJIAAgLIABgbIABgHQAAgRgLgLQALALAAARIgBAHIgBAbIAAALIAAAJQAAAQgBALgAAkg1QAAATgCAUQACgUAAgTIAAgCQAAgRgHgPQAHAPAAARIAAACgAgEgbQAEgMAAgPIAAgEQAAgUgDgUQADAUAAAUIAAAEQAAAPgEAMgAgmgkQAFgJAAgKIgBgLQgEgSgIgQQAIAQAEASIABALQAAAKgFAJgAhIgxIABgLIgBgNQgEgUgIgSQAIASAEAUIABANIgBALgAh0hSQAGAQACANQgCgNgGgQIgNgiIANAig");
	this.shape_11.setTransform(8.1,6.6,0.998,0.998,-32.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.1,-34.9,175,149.2);


(lib.BeachScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(3,1,1).p("EAhNgX2MhCZAAAIgMAAIAAAAIAAKMIAAAMMAAAAlVMBCxAAAIAA4iIAAgDIAAncIAAgMIAAvgIAAAAg");
	this.shape.setTransform(213.7,152.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D9AF9A","#993300"],[0,1],31.5,78.6,-49.3,-60.6).s().p("AgWBuQgPgLAOgiIAbg8IgBgFQgDgSALgtQAEgRAAgNQAAgIgCgGIAFgDIAJgCQAAADAEAAIgCAQQgGAogOA1IgCAGIgCAIQgRA/gDAdIAAAHQgEgBgDgCg");
	this.shape_1.setTransform(59.4,59.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-263.2,-132.4,-282.9,320.4).s().p("AA+A8IgHgKQgSgYgeABQADAKAKARQgKABgIgGIgJgGIAAAAIAAgCIABgBQgBgFgMAAQgMAAgGADIgDgEQgDABgKAHIgEAEQgMAHgFgMQAEgGARgGIABAAQAQgGADgJQgIgBgMACQgMADgRAGQgcALgLgIQAHgFAdgOQAXgJAJgLQg8AQgPgQQANgKAkgIQARgEAJgEQAKgEADgEIgNAAQgzAAgRgOQAdgKAmADIABAAQAnAEAOARQgBgHgRgUQgOgQAGgFQATABAaAgQASAVASgJIAGgEQADAMgFAKIgEAOIgBAFIABAAQAbAIAYASQAbAWgEASQgKgRgUgNQgXgOgPAKQATABAHAdIACAJQADAWgLAOQgLgWgIgNg");
	this.shape_2.setTransform(64,43.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],181.5,24.6,-49.9,238.6).s().p("AAWAiQgHgQgIgEQgEAFAEAIQAFAIgBAEQgJAEgBgHQAAgJgBgCIgDABQgBgEgFgDQgFgEgDACIAAABIgBAAIAAABIgIgBQgGAAgEgEIAUgIQgMgJgUAEQgMADgXAJQADgMASgJQASgLAIAGQAAgKgSgBQgOgBgOAFQAIgKAXgBQAUgBAQAFQADgCAFgIQAEgGAGgEQAAAOAWgEQAcgGAJAGQAAAEgOADQgSADgFADQAQgEASAMQASALAHANQgQABgZgUQgDAGAKANQAMAPAAAJQgPADgRgbQgCAIAEAMQAFAQABAEQgJAAgHgOg");
	this.shape_3.setTransform(194.9,74.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#009900","#14A110","#FFFFCC","#FCE794"],[0.149,0.38,0.565,1],251.7,-159.1,282.1,212.1).s().p("AgCgBQgDgHABgDIADALQABAHAFAFQgFgCgCgLg");
	this.shape_4.setTransform(123,85.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#D9AF9A","#993300"],[0,1],37.3,76.9,-4.7,-78.5).s().p("ABADyIAAAAIAAABgABDDoQANgsALgKQgEALAAAaQAAAFgMAMIgBABIAAgBQADgEgEAAIgBAAIgCAEIgGAKIADgKgABAC4IAFgEIAAAAIgFAMgABjCtIABgCIAAACIgBABIAAgBgABVCVIgFgMQgIgUgEgVQgFgZgKgdIgNghQgHgPACgRIADgEIADgDQgLgGgNgNQgQgRgSgdQgNgUgIgRQgLgYgEgRQgQgBgQgWQgRgXAEgWQA1AxAnA7QAXAmATApIAKAWIANAgIANAvQALAnAHArIAAAFIABADIADAcQgEgGgFgKgAASgyQALAFAEgHIgHgCQgFAAgDAEg");
	this.shape_5.setTransform(104,62.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#D9AF9A","#993300"],[0,1],-52,20.8,55.9,-16.7).s().p("AhFBtIAIgFIAEgGIgFANIgHgCgAhIBlIABgBQAIgKgCgEQAMgDgHAMIgFAIIgGAGIgCAAIgDAAQAAgDAEgFgAhQBjIAAAAIAAABIAAgBgAg3BGQAAgHAGgLIAEgHQARgdAOgDIgVAeQgMATgFAQQgEgBABgHgAgXAHQAPgMAcgnIADgFQAcglAXgYQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBIACAEIABADQgLAGgMAPQgWAcgLAGIgUAkQgMAUgLAAIgFgBg");
	this.shape_6.setTransform(185.6,88);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#D9AF9A","#993300"],[0,1],-55.3,29.9,25.1,-109.4).s().p("AgBgBIABAAIACADIgDgDg");
	this.shape_7.setTransform(147.5,89.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#D9AF9A","#993300"],[0,1],9.6,61.4,9.3,-38.6).s().p("AAQBEIgBgDIgFgIIgBgEIgHgQIgBgFQgKggACgUQgJgDgGgPIgDgLQgCgKAEgJIAMAVQAOAcAKAdIAFAQIADALIADANIADAPIAAAAIAAACIgDAAIgBAAIACgBQgEgDgDABIgDABIACABQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAIgEACIgBgBg");
	this.shape_8.setTransform(163.3,86.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-73.4,-138.3,-224.6,99.1).s().p("ABTBRIgLgKIgBgBIgEgEIgSgSQgZgTgRAJQgBADAMAHQALAGgGAHQgIgCgFgHQgFgHgFgCQAAACgTALQgHAEgFAEQgJAIgCAJQgBgHACgOIAGgXQgHACgLAPIgBABQgLAQgGADQgHgNAGgTIACgHQAHgRANgOQgLABgRAOIgNAJQgJAGgHAAQACgNAKgNQAGgIALgIQARgPARgHQgJgCgTgCIgRgBIgKgDQAGgFAHgDQAKgEAOABQAHAAAjAJQgCgJgHgMIgLgUQATAFAPARQAMAOAFASQAIgPAPgCQAKgCATAFQgFAKgMAIQgNAIgEAIQASgGAYAJIAPAGIAHAFIAEADIABACIAHAHIADAEIgEgBIgGgCIgCAAIgDgBIgLgDIgHgCQgYgFgMAIQAXANAMANIAFAFQAFAHACAIIAAADQABAIgDAIIgBgBg");
	this.shape_9.setTransform(160.7,74.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#D9AF9A","#993300"],[0,1],25.9,50.3,-32.1,-49.5).s().p("Ag1CMIgBAAIANgWIgEAIIAEAOIAAgFIACgHIAEgLQADgIAEAAIACAHQgDAEgCAIIAAACIgBADQgCAHgFABQgGgBgIAAgAgMBNIAIgSQAGgaAFgMQAKAKgPAjQgFAPgGAIIgDgMgAAVgXIAJgTIAEACIgHAbIgGgKgAAjhAQgBgOAHgbQAFgUgEgMIAEgCIAGgBQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAQgDAggMAuIgFgEg");
	this.shape_10.setTransform(166.8,80.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-188.7,-94.9,-202.8,229.7).s().p("AAnAkQgMgRgWAAQACAIAHAMQgGAAgHgEIgGgEIAAAAIAAgCIABAAQAAgEgKAAQgIAAgEACIgDgDQgCABgKAIQgIAFgEgJQADgEANgEQAMgEABgHQgKgBgYAJIgIACQgOAEgHgFIARgJIAJgEQARgGAGgJQgXAHgOAAQgMgBgFgGQAFgDAHgCQAJgEAPgDQAXgFAEgHQgsABgOgKQAVgIAbADQAdACAKAMQAAgFgNgOQgKgLAEgEQAOABATAXQAOARAQgMQACAJgEAHQgDAJAAAEQAUAGARANQATAQgDANQgHgNgOgJQgQgKgLAIQAOAAAEAVQAFAUgJAMQgLgWgIgKg");
	this.shape_11.setTransform(173.3,63.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#D9AF9A","#993300"],[0,1],36.1,69.8,-44.8,-69.4).s().p("AhLC9IARgdIgFALIAFAUQAAgJACgJIAEgJIACgFQAIgTALANQgFACgEAJIgEALIAAACQgEAPgJABIgEAIQgHgDgHgJgAggC2IABAAIgBABIAAgBgAglCFIAAAAQATgXALghIALgmIAFgPQAJAKgFAYIgCAIIgCAFIAAACIgGAQQgSAsgTAAIgDAAgAARgJIAEgOIAcg7IgBgGQgCgTAKgsIACgHQAFgXgEgOIAFgDIAIgDQABADADABIgFAoQgGAfgKAmIgCAGIgDAIIgJAjQgLArAAAVQgVgGAIgcg");
	this.shape_12.setTransform(131.8,65.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-263.2,-132.4,-282.9,320.4).s().p("ABMBUQgMgUgHgLIgCgDQgSgYgeABQADAKAKARQgKABgIgGIgJgGIAAAAIAAgCIABgBQgBgFgMAAQgMAAgGADIgDgEQgDABgKAHIgEAEQgMAHgFgMQAEgGARgGIABAAQAQgGADgJQgIgBgMACQgMADgRAGQgcALgLgIQAHgFAdgNIARgJQAKgGAFgHQgQAFgNACQgjAGgLgMQAFgEAKgEQANgFAVgFQARgEAJgEQAKgEADgEIgNAAQgzAAgRgOQAdgKAmADIABAAQAnAEAOARQgBgHgRgTQgOgRAGgFQATABAaAgQASAVASgJIAGgEQADAMgFAKIgEAOIgBAFIABAAQAXAHAUANIAIAGQAOALAFALQAGAJgCAJQgEgHgGgGQgIgJgMgIIgLgGQgQgGgLAIQAKAAAHAJQAGAHADAOQADAKAAAJQgBAPgIALIgFgLg");
	this.shape_13.setTransform(140.9,40.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-172.1,-186.3,-308.3,246).s().p("AhiBDQAEgeANgbQgQAGgVAdQgWAegQAGQgEgjAfgsQAUgdAYgTQgPAAgdAGQgbAFgRAAQAPgaAlgHQALgCA7gCQgHgNgQgPIgagbQAgAAAeAUQAZAQAPAbQAHgbAWgKQAPgGAfAAQgEAQgPASQgQARgEAQQAagSApAEQAYACATAJQALAFAJAIIAGAFIgOAAIgbgBIgNAAQgnADgRARQAfAGAVAKIAEACQAuAXgFAoIhEglQgugVgYAVQABAHAVAFQAUAFgHANQgNAAgLgJQgKgJgKgBQAAAFgYAYQgbAZACAYQgJgUABg0QgKAHgLAdQgLAdgJAIQgTgUAFgpg");
	this.shape_14.setTransform(91.8,31.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFFFFF","#00CCFF"],[0,1],-167.2,-47.7,-167.2,-196.2).s().p("AgwBhIAAgkIAYAAQAJAAAggZQAhgYAEAAQAuAAArAZQAjAVAAAJQAAAfgbACQiYACgOAHIgNANQgEgDgQgWgAAfBSIgVAEIAAADQABACARAAIA1gEIAogFIAAgDQgCgCgiAAIg2AFgAA4A4QgYANAAADQAAACAAABQAAABAAAAQABAAAAAAQAAAAAAgBIAEABQAGgGAegKQAdgKAEgHQgCgCgIAAQgPAAgZAPgAAXA6QgUAKAAACQAAABAAABQAAABAAABQAAAAABAAQAAAAAAgBIAFAAQBBgmAAgEIgCgEQgWARgbAOgAiqghQgHgHAAgPQAEgTAAgJIAHgBQAGAAAKACIAAACIgFAGQAAACAAABQAAABAAAAQAAABABgBQAAAAAAAAQADADAEAAIAmgbQAsgbAmAAIATAAQgFAJAgATQAlAVAAAYQgJAeg5AAQgnAAgZgJQgagJgFAAQgcAAgJAcQgWgTgGgGgAhEg6QAAACAAABQAAABAAAAQAAAAAAAAQABAAAAgBIA2AAQAMAAABgFQgBgCgKAAQg5AAAAAEgAiBg9QABACAGAAQAVAAAhgNQAlgNALgQQhGAcgnAMg");
	this.shape_15.setTransform(396.2,196.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A3839").s().p("AXcRYQgFgEgDAAQABgGAGABQAGAAAAAFQgBAEgCAAIgCAAgA6rL2QAGgUAAAUQAAAKgBAAQgCAAgDgKgA4kLhIAEgIQABgEABAFIAAAHQAAAKgBAAQgCAAgDgKgAcRjcQgNgHAVAAIAhAAIA2gNQAdgKAEgYQAFABABAGIABANQgOAGgGAOIg2ALQgUAEgTAAIgWgBgAfyjzQAmgRAHgOQAIAUghAOIg4AUQABgHAjgQgAYgkOQA1gSAMgGQgPATgkALIg/ARQAGgJArgOgAU8kJQAYgOAvgWQgfAdgjAMgAmurGIgBAAIADgCQADgBAEADIgDACIgBAAIAAAAIgFgCgA5JuoQgUgEgRgXQgPgCgRAEQgVAFgIAAQAGgPAlAAQAqAAAKgFQgNgTgrAEQgxAIgRAAQAOgUAngPQA0gUAKgGQgqgHgvASQgwASgSAgQgRgQAWglQAdgnAGgQQgiACgcAgQghAiABAvIghgqQgTgagXgGQgBAUAOAWQAKASjHANIAAgNIABAAQCrgegJglQA1AFAVAxQAegvATgTQAfghAqgJQgDAZgRAaIgbArQASgBA6gbQA6gWApARQgSAOggANIg6AUQAKAHArAAQAoAAAIANQAEAOgQAAQgUABgBAFQATAWApgCQAKAAAJABQgEACAAAFIgBANQgOgGglgIgAv9wtQAEgIALAFQgCAEgGAAIgHgBg");
	this.shape_16.setTransform(208,164.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#009900","#14A110","#FFFFCC","#FADB63"],[0.149,0.38,0.565,1],161,-253.8,191.5,117.4).s().p("EghYATkMAAAglVQDIgNgLgSQgNgWABgUQAXAGATAaIAgAqQgBgvAhgiQAdggAigCQgGAQgdAnQgWAlARAQQASggAwgSQAvgSAqAHQgKAGg0AUQgnAPgOAUQAQAAAygIQArgEAMATQgJAFgrAAQgkAAgGAPQAIAAAUgFQARgEAQACQARAXAUAEQAlAIAOAGIAAgNQABgFAEgCIACAAIAEAGIgLAOIAWgGQAMAHAUAFIAAAAIAAABIAAgBQAIgJADgCQAHgEAIAJQAAgHAGgMQAEgKgDgMQANAMAKgPQALgTAOACQADAOgSANQgPAKAJAKQAGABAZgJQASgHAFAJQACAIgKADQgMADAAAGQATgGAFAQQAHAWADACQAKgWANARQAUAYAEABIAAgRQABgJAGgBQAMAMAPABQAHAAAUgEQAjgIATAaQABgFgCgeQgBgWAIgEQAJAHAHASQAIAXAEAGQAjggAMATQgcAEgGAQQAhABApATQgPAFgFAAQgFAAgPgFQAHAMAOAQQAHANgWANQATgDAogNQAfgFAFAjQAXgIAiALIAAABIAAgBQAfAKAbgNIAEATQADALAGADIgBg0QgBgfAQgFQAHAJALAjQAMAcAQgKQAEADAEACIAAAIQAJgDAUgJQARgFAIARQAAgCgBgTQgBgOAJABQABAbAkAJQApAKAJAWQAugWAIgGQAIAKAHAIQAJAIAJAFQAGADAHACQARAFAcgGIApgHIgGALQgGAPAAAJIAAAJIABAAQAFAHAUAAQAdAAAOgGQARgHATgCQgHAJAAAFIAAAGQACAFAJAAQANAAA0gQQgLAKAAAPQAAAVAMAAQAmABAbACIgBAEIABAAQAJgEAHgGIAOAAIAEgFIACgBIABgBIAAgBQAngaARgOQADAFgEAPQgBALAOADIAGAAIACAAIgBgBQAHgDAOgJIABADQABAIgJAFIgBACIACABIA/gBIAAADIAAAmIAVABQAAAYACAKIAVABQAIAAArgXIABADQgIAvAAARIALABQACgBApgkQAAAbACAOIAaABQALAAACgJIALAJIAHAEIAWAAIALgJIABACIgEATIgDgBIgBgBIAAAHIADABQgCAOACAMIAFAAQAJgGADgNIADABIACgEIAAAAIgCgBQAKgLAfgEIgBAUIADABIACAZQAFAGAKAFQAOgBAMgRIAEAAIgDAZQACAUAZAAQAIAAAJgMIAOgUQAFADAHAXQAFAPAbgBQgDAHgBAIIACACIAFALIAGAEIAOAAIAJADIAPADIAIgHIgBgBQALgGAPgOQAVgUAsAIIAAACIgSAQQgJAJAAAHIAAABIACACIAAACQABAGACADQAIgCAIgDIAFAAIAxgOIAGACIAAACIgJARQAAALACgEIAxABQALAAAhgIIgCADQgKAQgGADQAAAIACAEIAjABQAKAAATgGIABACQgIAHgVAMQgLAGAAAGIAAAFIgPACIAIAKIBlAAIgfAHQgFAJgMAEIgGADIgCACIAHAAQgSAPAAAOQAAAIAGACQARAGBIAAQAAAMACADIBJAEQgkAIgJAHQgHAEAAAMQAAAFADABIArAPQgIAKAEAHIA5ACIAAAHIAlABIAEAAQABABAAgHQAAgIgIgFQgFgDgHgCIgTgDIhbgRIAAgBQAhgKAKgHQALgHAAgOQAAgFgEgEIhEgCIAWgCIAAgKQgDgEh3gDQAHgRAMgMIAeAAIAaAAIAAABIAfgBQAkgCAVAAQAVAAAEADQASAKC8AQQAbAFDOAWQDoAXBQAAIBGgBIABAAIAGADQC0AQCUAEICiAIIAAYigAWkO4QADACACgGQAAgFgGAAQgGgBgBAGIAAAAQADAAAFAEgA7jJWQAGAUAAgUQAAgKgCAAQgBAAgDAKgA5ZI5IgDAIQAGAUAAgUIAAgHIgBgDIgCACgAbnDaQgCADAAAYIACAcQAHAbAXAAQAKAAACgEIAHgKQAYgWA/AKQBEAKAUgNQAVgOADgGIAAgRQAAgTgugZQgugZgeAAQghAAgkAhIgMALQgKAKgPgGQgEgCgEAAQgIAAgEAHgAZkBtIAKAfQAPAdAWAAQAGAAAKgOQAJgOALAAQAIAAAVAJQAVAIAtAAQAoAAAXgQQARgMAAgMQAAghgcgQQg2glgCAAQg7AAggAVIgSAOQgIAHgHAAQgWgGgGAAQgWAAAAApgABXpqIABABIABgCIgCAAgAwUtvIACgBIgCgCIAAADg");
	this.shape_17.setTransform(213.7,180.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FAFFFF").s().p("AWnGoQARgMgOAOIgIAHQgBAAAGgJgAM6GhIAAgNIAVAAIAAANgA2ngFIABAAIAAAAgA2vhqIAAgEIACAIgADGkcQgvAFgogmQgZAPgngCQgmgCgTgSQAzgcA7gKQBIgLAhAdQAIgFAMgQQALgPAKgFQAVAEAhAQQATgqAzAFQANACAjAHIAPADQAAAAgBABQgBAAAAABQAAAAAAABQgBAAAAABQAAAFALABQAOAAAFADIAQANIgBANQBGgpAZApQAOgFAXgUQAKgJAKgGQALAAAKgDQANAOAXAAQALAAAngHQAggGAPAFQAXAHAIAeQARACAfgHIA1gLQBEgMAcAjQAQgKAWgEQAbgEAPALQgSAGgSAWQgVAagKAGQgegDg6geQgFAEgFANQgFANgFADQhWAHgqgoQgFAEgFANQgFANgFADQghAHgWgNIghgbIgvAKQgcAHgbgEQgFgEgFgNQgFgMgFgEQgGAig1AKQg1ALgXgcQgEAEgKAVQgJARgLAFIgDACQgGgCgLgIIgFgEQgHgPgIAAQgiAbgjAPQgYAKgRAAQggAAgHgngARxmIQAWgeA0gIQAygHAfATQgyAPgRADQgnAIgtAAIgEAAg");
	this.shape_18.setTransform(255.7,80.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#0033FF","#66CCFF","#BCFEFD","#0099FF"],[0.008,0.165,0.235,0.553],-96.4,20.5,-96.3,-35.2).s().p("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");
	this.shape_19.setTransform(314.1,124.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("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");
	this.shape_20.setTransform(239.6,114);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FFFFFF","#66CCFF"],[0,1],-1.6,71.6,-1.6,-76.9).s().p("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");
	this.shape_21.setTransform(213.7,50.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FFFFFF","#00CCFF"],[0,1],-29.8,72.3,-29.8,-76.2).s().p("AmlHvIhAABIgBAAIABgCIARAAIAxgCIgBAEIgBADgApBHyIACgBIAAAAIAAABIgCAAgAc/HtIAAvfIAHAAIAAPfIgHAAgAqAHrIABgBIADAAIACAAIACAAIAHACIACAAIgRgBgAn1HrIABgBIABABIgCAAgAqeHoQABgKAegOIAIgEIgLATIAAABIAAAAIgBAAIAAABIgEAJIgXgCgAsAG0IAFgCIABAAIACAAIgMAGIAEgEgAuVGmIABAAIgBABIAAgBgAsVE/IgDgHQAMgGAAgGQAAgEgFgOQAYASAKAJIAFAFIAAACIgWA2QgJgbgMgYgA0bFkIACgFIABAAQAEABgDAEIgEAAgAr3EHQAKgGATAHIgFARQgJgKgPgIgA9FDWIAIABIgDAFIgFgGg");
	this.shape_22.setTransform(241.9,49.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BeachScene, new cjs.Rectangle(-1.5,-1.5,431.6,308.4), null);


(lib.Bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.702)").s().p("EgjpAHHIAAuNMBHTAAAIAAONg");
	this.shape.setTransform(0,41.5,1,1.912);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bar, new cjs.Rectangle(-228.2,-45.5,456.5,174.1), null);


(lib.goNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,11.3).s().p("AhLAqQghgRABgYQgBgZAhgRQAfgSAsAAQAsAAAgASQAgARAAAZQAAAYggARQggASgsAAQgsAAgfgSg");
	this.shape.setTransform(22.8,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.502)").s().p("AhUhcICpBdIipBcg");
	this.shape_1.setTransform(25.1,20.4);

	this.blinker = new lib.general_buttoncolor();
	this.blinker.parent = this;
	this.blinker.setTransform(23.4,20.1,1.5,1.5,0,0,0,11.9,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,14.8).s().p("AhjA3QgqgXABgfQgBggAqgXQAqgYA5AAQA6AAAqAYQApAXAAAgQAAAfgpAXQgqAYg6AAQg5AAgqgYg");
	this.shape_2.setTransform(23.4,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1,3,true).p("AAACxQhIAAg0g0Qg1g0AAhJQAAhIA1g0QA0g0BIAAQBKAAA0A0QA0A0AABIQAABJg0A0Qg0A0hKAAg");
	this.shape_3.setTransform(23.3,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(103,103,103,0.839)","rgba(134,134,134,0)"],[0.678,0.918],-0.8,0,0,-0.8,0,24.9).s().p("AitClQhEhFAAhgQAAhgBEhEQBEhEBiAAQBfAABCAwQBBAvAWCrQAVCskNAbQhiAAhEhEgAgICRQBGAAAygwIABgBIAEgDQA0g0AAhIQAAhJg0g0IgGgGIAAAAQgyguhEAAIgBgBIAAAAIgBAAIAAABQhEAAgyAuIgBABIgCACIgCABIAAAAIgBACQg1A0AABJQAABIA1A0IABABIACACQAzAxBGAAIAAAAIABAAIgBAAIAAAAQhGAAgzgxIgCgCIgBgBQg1g0AAhIQAAhJA1g0IABgCIAAAAIACgBIACgCIABgBQAyguBEAAIAAgBIABAAIAAAAIABABQBEAAAyAuIAAAAIAGAGQA0A0AABJQAABIg0A0IgEADIgBABQgyAwhGAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(24.2,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33FFFF").s().p("AipCqQhGhHAAhjQAAhiBGhGQBGhHBjAAQBjAABHBHQBGBGAABiQAABjhGBHQhHBGhjAAQhjAAhGhGg");
	this.shape_5.setTransform(24.4,21.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099FF").s().p("AipCqQhGhHAAhjQAAhiBGhGQBGhHBjAAQBjAABHBHQBGBGAABiQAABjhGBHQhHBGhjAAQhjAAhGhGg");
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
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_pressed_1, new cjs.Rectangle(2,2,6,6), null);


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
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_disabled_1, new cjs.Rectangle(2,2,6,6), null);


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
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_1, new cjs.Rectangle(2,2,6,6), null);


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
	this.highlight3D_mc.parent = this;
	this.highlight3D_mc.setTransform(1.5,1.5);

	this.highlight_mc = new lib.frb_rightIn();
	this.highlight_mc.parent = this;
	this.highlight_mc.setTransform(2.2,2.2);

	this.shadow_mc = new lib.frb_leftIn();
	this.shadow_mc.parent = this;
	this.shadow_mc.setTransform(1,1);

	this.darkshadow_mc = new lib.frb_leftOut();
	this.darkshadow_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.darkshadow_mc},{t:this.shadow_mc},{t:this.highlight_mc},{t:this.highlight3D_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_frame, new cjs.Rectangle(0,0,10,10), null);


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
	this.disabled_mc.parent = this;
	this.disabled_mc.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.disabled_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot_disabled_1, new cjs.Rectangle(3,3,4,4), null);


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
	this.dot_mc.parent = this;
	this.dot_mc.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.dot_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot_1, new cjs.Rectangle(3,3,4,4), null);


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
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_pressed_1, new cjs.Rectangle(2,2,9,9), null);


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
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_disabled_1, new cjs.Rectangle(2,2,9,9), null);


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
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_1, new cjs.Rectangle(2,2,9,9), null);


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
	this.darkshadow_mc.parent = this;

	this.shadow_mc = new lib.fcb_leftIn();
	this.shadow_mc.parent = this;

	this.highlight_mc = new lib.fcb_rightIn();
	this.highlight_mc.parent = this;

	this.highlight3D_mc = new lib.fcb_rightOut();
	this.highlight3D_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.highlight3D_mc},{t:this.highlight_mc},{t:this.shadow_mc},{t:this.darkshadow_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_frame, new cjs.Rectangle(0,0,13,13), null);


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
	this.check_mc.parent = this;
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check_disabled_1, new cjs.Rectangle(2.9,3.2,7.1,7), null);


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
	this.check_mc.parent = this;
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check_1, new cjs.Rectangle(2.9,3.2,7.1,7), null);


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blank, new cjs.Rectangle(0.1,0,65,34), null);


(lib.Diver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DiverDivin("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(122,-45.7,0.293,0.293,72);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.26,scaleY:0.26,rotation:16.3,x:78.1,y:8.3,startPosition:5},5).to({scaleX:0.26,scaleY:0.26,rotation:-33.6,x:60.5,y:31.3,startPosition:0},5).to({rotation:-100.2,x:37,y:61.9,startPosition:4},4).to({rotation:-209.8,x:-31.8,y:110.1,startPosition:9},5).to({scaleX:0.36,scaleY:0.36,rotation:-305.1,x:-65.1,y:146.3,startPosition:6},7).to({scaleX:0.53,scaleY:0.53,rotation:-361.9,x:-110.7,y:178,startPosition:3},7).to({scaleX:0.83,scaleY:0.83,rotation:-450.9,startPosition:9},6).to({scaleX:1.1,scaleY:1.1,rotation:-544.2,x:-168,y:218.6,startPosition:6},7).to({scaleX:1.36,scaleY:1.36,rotation:-639.9,x:-209.1,y:312.7,startPosition:4},8).to({scaleX:1.36,scaleY:1.36,rotation:-695.4,x:-228.2,y:351.4,startPosition:9},5).wait(3).to({scaleX:1.64,rotation:-720,skewX:24.6,skewY:-155.4,x:-407,y:-38.9,startPosition:2},0).to({scaleX:1.63,scaleY:1.35,skewX:82.6,skewY:-97.4,x:-249.3,y:37.5,startPosition:6},4).to({skewX:175.3,skewY:-4.7,x:-76.9,y:112.5,startPosition:3},7).to({scaleX:1.04,scaleY:0.86,skewX:233.5,skewY:53.5,x:33,y:240.1,startPosition:9},6).to({scaleX:1.04,scaleY:0.86,skewX:384.7,skewY:204.7,x:47.3,y:323.2,startPosition:6},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(92.9,-68.6,46.5,51.6);


(lib.UI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Menu button -----------------------------------------
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		
		//volume buttons -----------------------------------------
		this.vol_dwn.addEventListener("click", volDwn.bind(this));
		this.vol_up.addEventListener("click", volUp.bind(this));
		this.vol_mute.addEventListener("click", volMute.bind(this));
		
		//Nav buttons -----------------------------------------
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmIntro',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.5;
		var prev_vol = bgm.volume;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		//volume functions -----------------------------------------
		function volDwn()
		{
			createjs.Sound.volume = createjs.Sound.volume -0.05;
			if(!mute){
				bgm.volume -= 0.05;
				prev_vol = bgm.volume;
			}
			console.log(bgm.volume);
			console.log(prev_vol);
		}
		function volUp()
		{
			createjs.Sound.volume = createjs.Sound.volume +0.05;
			if(!mute){
				bgm.volume += 0.5;
				prev_vol = bgm.volume;
			}
			console.log(bgm.volume);
			console.log(prev_vol);
		}
		
		function volMute()
		{
			if(!mute){
				mute = true
				bgm.volume = 0;
			}
			else{
				mute = false;
				bgm.volume = prev_vol;
			}
			console.log(mute);
		}
		
		
		//Nav functions -----------------------------------------
		
		function openNext(){
		
		 window.open ("intro_Scene3.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("intro_Scene1.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mute
	this.vol_mute = new lib.vol_mute();
	this.vol_mute.parent = this;
	this.vol_mute.setTransform(31.8,2.1,1,1,0,0,0,15,14.1);
	new cjs.ButtonHelper(this.vol_mute, 0, 1, 2, false, new lib.vol_mute(), 3);

	this.timeline.addTween(cjs.Tween.get(this.vol_mute).wait(1));

	// main
	this.instance = new lib.Copyright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-220.6,376.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.parent = this;
	this.btn_goBack.setTransform(-438,335.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(-1.7,335.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.vol_up = new lib.vol_pos();
	this.vol_up.parent = this;
	this.vol_up.setTransform(-6.7,2.6,1,1,0,0,0,9,7);
	new cjs.ButtonHelper(this.vol_up, 0, 1, 2, false, new lib.vol_pos(), 3);

	this.vol_dwn = new lib.vol_neg();
	this.vol_dwn.parent = this;
	this.vol_dwn.setTransform(-28.7,2.6,1,1,0,0,0,9,7);
	new cjs.ButtonHelper(this.vol_dwn, 0, 1, 2, false, new lib.vol_neg(), 3);

	this.btn_menu = new lib.menu_main();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(-89.6,2.6,1,1.143,0,0,0,23.4,10.5);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.menu_main(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AAYBrQgBgLgUgUQgQgRgKAAIAAh1QAKAAASgTQATgTAAgKg");
	this.shape.setTransform(-47.7,2.3,0.687,0.681);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADBMQgQgRgKAAIAAh1QAKgBASgSQATgTAAgJIAADTQgBgKgUgUg");
	this.shape_1.setTransform(-47.7,2.3,0.687,0.681);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s("#000000").ss(1.5,1,1).rr(-0.75,-3.45,1.5,6.9,0.2);
	this.shape_2.setTransform(-52.2,2.3,1,1.003);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("AAHAAQAAAJgHAHQgCAEgEACIAAgrQAEACACAEQACACACACQADAFAAAGg");
	this.shape_3.setTransform(-43.2,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGgUQAEABACAEIABAAIADAFQADAEAAAGQAAAJgGAHIgBAAQgCAEgEABg");
	this.shape_4.setTransform(-46.5,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance}]}).wait(1));

	// vol_frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1.5,1,1).rr(-33,-12,66,24,4.9);
	this.shape_5.setTransform(-24.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-486.5,-13,534.3,399), null);


(lib.VERBALDef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// VERBAL
	this.instance = new lib.VERBAL2();
	this.instance.parent = this;
	this.instance.setTransform(0.1,-6.9,1.252,1.252);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.42,scaleY:0.42,x:3.2,y:-173.4},9).wait(32));

	// explanation
	this.instance_1 = new lib.VerbalsExplanation();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.2,-0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({alpha:1},4).wait(28));

	// WhiteBar
	this.instance_2 = new lib.Bar();
	this.instance_2.parent = this;
	this.instance_2.setTransform(13.1,-33.9,0.928,1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({alpha:1},4).wait(28));

	// Layer 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_37 = new cjs.Graphics().p("EghLAXwMAAAgvfMBCXAAAMAAAAvfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(37).to({graphics:mask_graphics_37,x:12.1,y:-0.2}).wait(4));

	// Character
	this.instance_3 = new lib.Diver();
	this.instance_3.parent = this;
	this.instance_3.setTransform(90.8,-127.7);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.8,-41.9,334.5,73);


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
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// dot_disabled
	this.instance_1 = new lib.frb_dot_disabled_1();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// background pressed/disabled
	this.instance_2 = new lib.frb_background_pressed_1();
	this.instance_2.parent = this;

	this.instance_3 = new lib.frb_background_disabled_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

	// background up/static
	this.instance_4 = new lib.frb_background_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5));

	// radio button frame
	this.frb_frame_mc = new lib.frb_frame();
	this.frb_frame_mc.parent = this;

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
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(2));

	// check_disabled
	this.instance_1 = new lib.fcb_check_disabled_1();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// background pressed/disabled
	this.instance_2 = new lib.fcb_background_pressed_1();
	this.instance_2.parent = this;

	this.instance_3 = new lib.fcb_background_disabled_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},2).to({state:[]},1).wait(1));

	// background static
	this.frb_frame_mc = new lib.fcb_background_1();
	this.frb_frame_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.frb_frame_mc).wait(6));

	// check box frame
	this.fcb_frame_mc = new lib.fcb_frame();
	this.fcb_frame_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.fcb_frame_mc).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


// stage content:
(lib.intro_Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene2:0,scene2_repeat:140});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_14 = function() {
		playSound("verbaldefinition");
	}
	this.frame_139 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_150 = function() {
		this.gotoAndPlay("scene2_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(125).call(this.frame_139).wait(11).call(this.frame_150).wait(1));

	// Layer 10
	this.instance = new lib.VERBALDef();
	this.instance.parent = this;
	this.instance.setTransform(279,184,1,1,0,0,0,17.9,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(151));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.BeachScene();
	this.instance_1.parent = this;
	this.instance_1.setTransform(274.3,196,1,1,0,0,0,214.3,152.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.UI}]}).wait(151));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: '9E9EFDB042DD9546A1F6EAE9C74DBBD3',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmIntro.mp3", id:"bgmIntro"},
		{src:"sounds/verbaldefinition.mp3", id:"verbaldefinition"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9E9EFDB042DD9546A1F6EAE9C74DBBD3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;