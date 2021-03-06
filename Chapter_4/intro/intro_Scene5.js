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


(lib.PartitipialPronunciation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSBJQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAgDAEgDIAHgGQAQgQAAgmQAAgOgEgOQgEgSgIgIIgHgIQgEgEAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAIAFADQANAJAJAXQAIAUAAAUQAAA3geARIgFABQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape.setTransform(119.9,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC33FF").s().p("AgfA6QgEgEAAgHIABgZQACghAAgoQAAgDACgDQACgCADAAQADAAADACQACADAAADQAAApgCAhIgBALIgBALQATAAAdgJIACAAQADAAACACQACACAAADQAAAFgFACQgIAEgSADQgPADgKAAQgIAAgDgCg");
	this.shape_1.setTransform(113.1,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC33FF").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_2.setTransform(103.2,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC33FF").s().p("AggA2QgBgCAAgEQAAgDABgBQADgDADAAIAPgCIABgNIAAgMIgBgNQAAgPADgaIgKABIgKAAQgDgBgCgCQgCgCAAgDQAAgGAHgBIAWgBQANAAAXADQAGABAAAHQAAAEgDACQgCABgCAAIgMAAIgMgCIgCAnIAAANIABANIgBAMIAYAAQADAAABACQACACAAADQAAADgCADQgBACgDAAIgNAAIgMAAIgOACIgOABQgDAAgDgCg");
	this.shape_3.setTransform(93.7,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF00FF").s().p("AgfA4IgBgFIAAgVIABgeIACgeIAAgKIABgLQABgGAGABIAGgBIALgBQANABALAIQANAKAAAPQAAASgNAKQgNAJgQAAIgJgBIgBAnIgCAFQgCACgCAAQgEAAgCgCgAgPgrIgBANIgBAeIAIAAQALAAAIgGQAKgHAAgLQgBgJgIgFQgIgGgJABIgGAAIgDAAg");
	this.shape_4.setTransform(85.8,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AggA2QgCgCABgEQgBgDACgBQADgDADAAIAQgCIABgNIgBgMIAAgNQAAgPACgaIgKABIgJAAQgEgBgCgCQgCgCAAgDQAAgGAHgBIAWgBQANAAAWADQAHABAAAHQAAAEgCACQgDABgDAAIgLAAIgMgCIgCAnIAAANIABANIgBAMIAYAAQACAAACACQACACABADQgBADgCADQgCACgCAAIgNAAIgMAAIgOACIgOABQgDAAgDgCg");
	this.shape_5.setTransform(77.7,12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AgeAtQgKgLAAgQQAAgYAVgaQASgVAQAAIAHAAIAFABQACgEAEAAQAFAAACAHIABAOQAAADgCADQgCADgDAAQgFAAgCgGQgCgFgCgBIgIAAQgKAAgMAQQgSAWAAASQAAAKAGAGQAGAHAJAAQAHAAAHgDIANgJQAEgDADAAQADAAACACQACADAAADQAAADgDACQgTASgTAAQgPAAgLgMg");
	this.shape_6.setTransform(69.2,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AgfA2QgDgCAAgEQAAgDADgBQACgDADAAIAQgCIAAgNIAAgMIAAgNQAAgPABgaIgJABIgKAAQgDgBgCgCQgCgCAAgDQAAgGAHgBIAWgBQAOAAAVADQAHABAAAHQAAAEgCACQgCABgEAAIgLAAIgMgCIgBAnIAAANIAAANIAAAMIAWAAQAEAAACACQACACAAADQAAADgCADQgCACgEAAIgMAAIgMAAIgNACIgPABQgDAAgCgCg");
	this.shape_7.setTransform(60.5,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF00FF").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_8.setTransform(51.9,12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF00FF").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_9.setTransform(41.6,12);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_10.setTransform(31.1,12.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF00FF").s().p("AgeA4IgCgFIAAgVIABgeIACgeIAAgKIAAgLQACgGAGABIAHgBIAKgBQAMABAMAIQANAKAAAPQAAASgNAKQgNAJgRAAIgIgBIgBAnIgCAFQgBACgEAAQgDAAgBgCgAgPgrIgBANIgCAeIAIAAQAMAAAJgGQAIgHABgLQAAgJgJgFQgIgGgIABIgHAAIgDAAg");
	this.shape_11.setTransform(22,11.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAKBJQgegRAAg3QAAgUAIgUQAJgXANgJQABgBAAAAQABgBABAAQAAAAABAAQAAgBABAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAADgEAEIgHAIQgIAIgEASQgEAOAAAOQAAAmAQAQIAHAGQAEADAAADQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgFgBg");
	this.shape_12.setTransform(15.4,13.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEA5QgDgDAAgDQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQACAAADAEQADAEAAADQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgDACgCAAQgCAAgDgEgAgFAbIAAgJIAAgJIAAgfIAAggQAAgGAGAAQAGAAAAAGIAABRQAAAGgGAAQgGAAAAgGg");
	this.shape_13.setTransform(6,11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAJQgHAKgEAMIAAAHIgBAHIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgVIAAgGIgBgHQAAgEADgCQACgCADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAIIAAAFIACAQIABAQQAAACgCACQgCACgDABQgGAAgBgHg");
	this.shape_14.setTransform(0.6,13.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_15.setTransform(-7.6,14);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_16.setTransform(-13.3,12.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgBQgHgCAAgGQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADAAQAGABABAKIAAAHIAAAEIAAAFIAKgBIAKAAQAFACAAAFQAAADgCACQgCACgEABIgDAAIgEAAIgKABIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_17.setTransform(-19.1,12.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_18.setTransform(-26.5,14);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_19.setTransform(-32.3,12.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_20.setTransform(-38.3,13.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAJQgHAKgEAMIAAAHIgBAHIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgVIAAgGIgBgHQAAgEADgCQACgCADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAIIAAAFIACAQIABAQQAAACgCACQgCACgDABQgGAAgBgHg");
	this.shape_21.setTransform(-46,13.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAQAjQgJAEgLABQgJAAgHgFQgHgEgBgJQgDgUAAgOQAAgKACgMQABgHAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgNQAAgRABgLQABgGAGAAQADAAADABQACACAAAEIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_22.setTransform(-53.9,14);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAJQgHAKgEAMIAAAHIgBAHIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgVIAAgGIgBgHQAAgEADgCQACgCADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAIIAAAFIACAQIABAQQAAACgCACQgCACgDABQgGAAgBgHg");
	this.shape_23.setTransform(-61.6,13.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_24.setTransform(-69.8,14);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgbAhIAAgyIAAgHIAAgHQAAgIAHAAQAGAAAAAMQAOgNARAAQAGAAADAEQADAFgBAJIAAAFQAAAJgHAAQgGAAAAgHIAAgGIAAgGQgMACgGAFQgGAFgFAKIAAAmQABAIgIAAQgGAAAAgIg");
	this.shape_25.setTransform(-77,14);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcA8QgCgDAAgDIABgdIAAgcIgBgdIgCgPQAAgFACgEQADgFAEABQADAAACACQABABAAADIAAADIAAAEQAGgFAGgCQAFgCAFAAQAPABAHANQAGAKAAASQAAAPgJAKQgJAKgPABQgGgBgJgCIAAAjQAAADgCADQgCABgDAAQgEAAgCgBgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgJQAAgNgDgIQgDgGgHAAQgGAAgFADg");
	this.shape_26.setTransform(-84.7,15.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZAyQgLgLAAgQQAAgUALgKQALgMAPAAQAJAAAEADIAHAFIACgpQABgHAGAAQAHAAgBAHIgDAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgCgGQgFAEgGACQgGACgFAAQgPAAgKgKgAgRABQgFAIAAAOQAAAJAGAHQAHAHAJAAQAFAAAEgCIAIgGIADgCIAAgOIAAgIIAAgJQgDgFgFgDQgFgCgGAAQgLAAgHAGg");
	this.shape_27.setTransform(-97.7,11.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAJQgHAKgEAMIAAAHIgBAHIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgVIAAgGIgBgHQAAgEADgCQACgCADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAIIAAAFIACAQIABAQQAAACgCACQgCACgDABQgGAAgBgHg");
	this.shape_28.setTransform(-105.9,13.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_29.setTransform(-113.8,14);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZA5QgJgCAAgGQAAgGAHAAIAJABQAFABAIAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKgBgNQABgUAKgMQANgMATAAQAGAAAFACQAEABADAEQAIAAAAAIIgBAOIgCAOIgCAYQAAAOgDAKQgEAMgHAFQgIAHgQAAQgKAAgHgBgAgMgkQgIAJABANQAAALADAEQAFAFAIAAQAGAAAHgHQAGgIABgHIADgZIgFgDQgEgCgDAAQgNAAgHAKg");
	this.shape_30.setTransform(94.6,-7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgHQAAgDADgBQACgCADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAPQAAAEgCACQgCABgDAAQgGAAgBgGg");
	this.shape_31.setTransform(86.9,-9.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgDQACgCADAAQACAAACACQACADAAADIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_32.setTransform(80.9,-10.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHA1IABgbIABgaIAAgaIAAgaQAAgIAHAAQAGAAABAIIgBAaIAAAaIgCAkIAAARQgBAIgFAAQgIgBABgHg");
	this.shape_33.setTransform(76.6,-11.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgIA1IABgbIABgaIAAgaIABgaQAAgIAGAAQAIAAgBAIIAAAaIAAAaIgBAkIgBARQAAAIgGAAQgHgBgBgHg");
	this.shape_34.setTransform(72.5,-11.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgYAfQgMgJAAgQQABgSAIgNQALgOAQAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAHADAHAAQAEAAAIgCQAIgCACgDQADgFADAAQADAAABACQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_35.setTransform(66.5,-9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgcA8QgCgDAAgDIABgdIAAgdIgBgdIgCgOQAAgGACgDQADgEAEgBQADAAACACQABACAAAEIAAACIAAAEQAGgEAGgCQAFgCAFAAQAPAAAHAMQAGAMAAAQQAAAPgJAKQgJALgPAAQgGAAgJgCIAAAjQAAADgCADQgCACgDAAQgEAAgCgCgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgKQAAgMgDgIQgDgGgHAAQgGAAgFADg");
	this.shape_36.setTransform(58.3,-7.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgUApQgLgFAAgHQAAgCACgDQADgCADAAQACAAADADQACACAGABIAIABQAGAAAEgCQAHgCAAgEQAAgKgNgEIgHgBQgKgCgEgDQgGgEAAgHQAAgQAOgHIAOgEIANgFIAHgBQADAAACACQACACAAADIABAHIABAFQAAAEgCACQgCACgEAAQgEAAgBgDIgCgIIgRAGQgLAFAAAGIAFABQAQAEAHAEQAMAIABAOQgBAMgJAGQgKAFgMAAQgJAAgJgDg");
	this.shape_37.setTransform(50.4,-9.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgHQAAgDADgBQACgCADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAPQAAAEgCACQgCABgDAAQgGAAgBgGg");
	this.shape_38.setTransform(38.7,-9.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgDQACgCADAAQACAAACACQACADAAADIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_39.setTransform(32.6,-10.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgYAfQgMgJAAgQQABgSAIgNQALgOAQAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAHADAHAAQAEAAAIgCQAIgCACgDQADgFADAAQACAAACACQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_40.setTransform(22,-9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_41.setTransform(13.9,-9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgHQAAgDADgBQACgCADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAPQAAAEgCACQgCABgDAAQgGAAgBgGg");
	this.shape_42.setTransform(6.2,-9.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgYAfQgMgJAAgQQABgSAIgNQAKgOARAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAGADAIAAQAEAAAHgCQAJgCACgDQADgFADAAQACAAACACQABABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_43.setTransform(-1.8,-9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgcAiIAAgzIABgHIAAgIQAAgHAGAAQAIAAAAAMQANgNARAAQAGAAADAEQADAFAAAIIAAAGQgBAJgGAAQgHAAAAgHIAAgFIgBgHQgLACgGAFQgGAFgFAJIABAoQgBAHgHAAQgHAAAAgHg");
	this.shape_44.setTransform(-9.4,-8.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYAfQgMgJAAgQQABgSAIgNQALgOAQAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAHADAHAAQAEAAAIgCQAIgCACgDQADgFADAAQACAAACACQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_45.setTransform(-17.2,-9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_46.setTransform(-25.4,-10.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_47.setTransform(-33,-10.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgDQACgCADAAQACAAACACQACADAAADIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_48.setTransform(-38.6,-10.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgZAyQgLgKAAgRQAAgTALgLQALgMAPAAQAIAAAFACIAHAGIACgqQABgGAGAAQAGAAAAAHIgCAtIgBAVQAAAYACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgEgBgCgGQgGAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAHAAAPQgBAKAHAGQAHAHAJAAQAFAAAEgCIAIgHIACgCIAAgMIAAgJIAAgIQgCgGgFgCQgFgDgGAAQgLgBgHAHg");
	this.shape_49.setTransform(-45.3,-11);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgZAfQgLgJABgQQgBgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAHADAGAAQAFAAAHgCQAJgCADgDQACgFACAAQADAAADACQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgGAHgDANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_50.setTransform(-58.1,-9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAUA3IgDgQIgBgSIAAgGIAAgGQAAgNgHABQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAPIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_51.setTransform(-66.6,-11);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADgBIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCQAIAAACACQAFABAAAFQAAAEgCACQgCABgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_52.setTransform(-74.5,-10.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgYAfQgMgJAAgQQABgSAIgNQALgOAQAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAHADAHAAQAEAAAIgCQAIgCACgDQADgFADAAQACAAACACQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_53.setTransform(-86.5,-9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADgBIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCQAIAAACACQAFABAAAFQAAAEgCACQgCABgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_54.setTransform(-94.3,-10.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_55.setTransform(-101.9,-8.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgwA5QgDgCAAgDIABgKIAAgJIABgOIAAgNIAAgOIAAgOIgBgOIgBgOQAAgDADgDQADgDADAAQAEAAAGAJQASAbAOASQARAVAVATIAAgJIgBgJQAAgggCgTIgCgHIgBgIQAAgJAHAAQANAAAAAwIAAAXIAAAYIgCAMQgBAIgGAAQgEAAgGgGQgegcglg0IgBARIAAAPIAAATIABASQAAAUgIAAQgEAAgCgDg");
	this.shape_56.setTransform(-111.6,-10.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgSBJQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgDAEgDIAHgGQAQgQAAgmQAAgOgEgOQgEgSgIgIIgHgIQgEgEAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAIAFADQANAJAJAXQAIAUAAAUQAAA3geARIgFABQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_57.setTransform(110.1,13.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF00FF").s().p("AgfA4QgHgGAAgYIAAgKIAAgMIAAgEIABgDIABggIAAgHIgBgIQAAgJAHAAQADAAACACIARgDIAOgCQASABAKAEQAFABAAAGQAAADgCACQgCADgDAAIgCgBQgNgDgLgBIgMABIgQAEIABAHIgBAdIAfgEIARgBQADAAADACQACACAAAEQAAAFgHABIgRACIghACIgBAKIAAAJQAAAQACADQACADAKAAIANgBIANAAIAFAAIAEgBQAIAAAAAHQAAAHgHABQgGABgWAAQgXABgGgHg");
	this.shape_58.setTransform(102.8,12.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF00FF").s().p("AgfA6QgEgEAAgHIABgZQACghAAgoQAAgDACgDQACgCADAAQADAAADACQACADAAADQAAApgCAhIgBALIgBALQATAAAdgJIACAAQADAAACACQACACAAADQAAAFgFACQgIAEgSADQgPADgKAAQgIAAgDgCg");
	this.shape_59.setTransform(93.9,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},7).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.7,-23.9,244.4,47.8);


(lib.ParticipialPhrases = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(138.8,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC00FF").s().p("AggA6QgQgHAAgNQAAgDACgDQADgCADAAQAEAAADAFQAFAGADACQAHAFANAAQAMAAALgGQAOgHAAgMQAAgLgLgGQgKgFgOgBQgNAAgKgEQgLgHAAgNQAAgOAQgMQAQgMARAAQAIAAAKADQANADAAAGQAAAHgHAAIgMgCIgNgBQgMAAgJAGQgJAGAAAKQAAAGAMADIARACQATACALAKQAJAJAAAOQAAATgSAMQgQAKgUAAQgPAAgMgFg");
	this.shape_1.setTransform(130.8,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC00FF").s().p("AgkBAQgIgIAAgaIABgMIAAgNIgBgFIACgDIACgkIgBgJIgBgJQAAgKAIAAQAEAAADADIASgFIAQgBQAUABAMAEQAFADAAAFQAAADgBADQgDADgEAAIgCAAQgOgFgNAAIgOABIgSAFIABAIIgBAgIAjgDIAUgCQADAAADACQACADAAADQABAHgIAAIgUADIglADIgBALIAAAKQAAASADAEQACACALAAIAOAAIAQgBIAFAAIAEgBQAKAAgBAJQABAHgIABQgHABgZABQgagBgIgGg");
	this.shape_2.setTransform(119.8,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC00FF").s().p("AggA6QgQgHAAgNQAAgDACgDQADgCADAAQAEAAADAFQAFAGADACQAHAFANAAQAMAAALgGQAOgHAAgMQAAgLgLgGQgKgFgOgBQgNAAgKgEQgLgHAAgNQAAgOAQgMQAQgMARAAQAIAAAKADQANADAAAGQAAAHgHAAIgMgCIgNgBQgMAAgJAGQgJAGAAAKQAAAGAMADIARACQATACALAKQAJAJAAAOQAAATgSAMQgQAKgUAAQgPAAgMgFg");
	this.shape_3.setTransform(108.4,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC00FF").s().p("AAdArIgFgaIgXAEIgVAFIgOAfQgDAFgEAAQgDAAgDgDQgCgCAAgDQAAgFAMgaQgCgCABgDQgBgGAJgCQAJgRAOgXQATgfAFAAQAGgBADAKIAFAcIAMA4IAGANIACAJQgBAEgCACQgDACgDABQgIAAgFgUgAgKAGIAdgGIgGggg");
	this.shape_4.setTransform(96.1,10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC00FF").s().p("AgpA/QgDgDAAgDIAAgUIgBgTIACgWIABgXIAAgMIgBgNQAAgFACgDQAEgFAFABIAUABQALACAHAEQAiASAAAZQAAANgMAJQgJAIgOAEQAaAOANAPQACADAAADQAAADgCADQgDACgDAAQgDAAgDgCQgcgcgggJIAAAQIABARQAAADgDADQgCACgDAAQgEAAgCgCgAgaglIABALIgBAQIgCAQIAEAAIADAAQAVAAAKgGQAFgBAEgFQAEgEAAgEQAAgLgNgKQgLgJgNgCIgMgBg");
	this.shape_5.setTransform(84.8,10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC00FF").s().p("AgzBBQgDgCAAgDIACgbIACgaIgBgNIAAgOIABgTIABgUQgBgDADgDQACgCAEAAQADAAACACQADADAAADIgBAUIgCAUIABAUIAjgGQAVgEAPAAIABgjQAAgHACgHQADgIAFgBQADABACACQADACAAADIgBAEQgCADAAAIIABAGIAAAIIgCAZIgBAYIABATIABATQAAADgDACQgCACgDABQgDgBgCgCQgDgCAAgDIgBgTIgBgTIAAgNQgOABgUAEIgiAHIgCAUIgCAWQAAADgCACQgCADgEAAQgDAAgCgDg");
	this.shape_6.setTransform(72.9,10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC00FF").s().p("AgiBAQgCgCAAgEIAAgYIABgiIABgiIAAgLIABgMQACgHAHABIAIgCIALAAQAOAAAOAKQAOAMAAAQQAAAUgPAMQgOALgSAAIgLgCIgBAsQAAAEgCACQgCACgDAAQgDAAgCgCgAgSgxIAAAQIgCAhIAKAAQAMAAAKgGQAKgIAAgNQAAgKgKgGQgJgGgJAAIgHAAIgFAAg");
	this.shape_7.setTransform(62,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC00FF").s().p("AgjBBQgFgDAAgJIACgcQABglAAguQABgEACgCQACgDAEAAQAEAAACADQACACAAAEQAAAvgCAlIgBANIgBAMQAWAAAggKIADgBQAEAAACADQACADAAADQAAAFgGADQgJAEgUAEQgRADgMAAQgJAAgDgDg");
	this.shape_8.setTransform(47.9,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC00FF").s().p("AAdArIgGgaIgVAEIgWAFIgOAfQgDAFgEAAQgEAAgCgDQgCgCgBgDQAAgFANgaQgCgCAAgDQABgGAHgCIAZgoQASgfAFAAQAHgBACAKIAFAcIANA4IAEANIACAJQAAAEgCACQgDACgDABQgHAAgGgUgAgKAGIAegGIgHggg");
	this.shape_9.setTransform(36.7,10.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC00FF").s().p("AgmBAQgDgDAAgEIAAgYIABghIACgiIABgXQAAgEADgCQALgDAOAAQAOAAANAKQAQALAAARQAAAVgRAMQANAFAGAHQAGAGAAAIQAAAKgLAJQgHAHgJADQgRAHgdAAQgEAAgDgDgAgZAhIAAARQAWgBAMgFQAGgCAGgFQAFgEAAgCQAAgEgLgFIgPgGIgIgBIgEAAIgDAAIgJgBIgBATgAgVgxIgBAPIgBAgIAMABQAMgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgJAAIgMAAg");
	this.shape_10.setTransform(25.6,9.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC00FF").s().p("AgpA/QgDgDAAgDIAAgUIgBgTIACgWIABgXIAAgMIgBgNQAAgFACgDQAEgFAFABIAUABQALACAHAEQAiASAAAZQAAANgMAJQgJAIgOAEQAaAOANAPQACADAAADQAAADgCADQgDACgDAAQgDAAgDgCQgcgcgggJIAAAQIABARQAAADgDADQgCACgDAAQgEAAgCgCgAgaglIABALIgBAQIgCAQIAEAAIADAAQAVAAAKgGQAFgBAEgFQAEgEAAgEQAAgLgNgKQgLgJgNgCIgMgBg");
	this.shape_11.setTransform(14.7,10);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC00FF").s().p("AgkBAQgIgIAAgaIABgMIAAgNIgBgFIACgDIACgkIgBgJIgBgJQAAgKAIAAQAEAAADADIASgFIAQgBQAUABAMAEQAFADABAFQgBADgBADQgDADgEAAIgCAAQgOgFgNAAIgOABIgSAFIABAIIgBAgIAjgDIAUgCQADAAADACQACADAAADQABAHgIAAIgUADIglADIAAALIgBAKQAAASADAEQACACALAAIAOAAIAQgBIAFAAIAEgBQAKAAgBAJQABAHgIABQgHABgZABQgagBgIgGg");
	this.shape_12.setTransform(4.1,10);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC00FF").s().p("AgOA8QgKgYgNgvIgGgXQgFgRAAgFQAAgEACgDQADgCAEAAQAGAAACAHIACAOIAIAcQAJAfAHAWIABgCIAVg6IAHgVQAEgMAGgHQADgDAEAAQADAAADACQACADAAAEIgBAEQgGAJgDAIIgHASIgVA8IgJAUQgCAFgFAAQgHAAgCgHg");
	this.shape_13.setTransform(-6.4,10.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEAxQgCgDAAgDIgCgeIgCgdQAAgIgDgFQgGACgGAGIgJALIgFAFIgBAOIAAAOIAAAHIABAHQAAADgCADQgDACgDAAQgKAAAAgVIABgPIABgOIgBgNIAAgOQAAgSAIAAQADAAADACQADADAAAEIgBAEIAAAGIAAAIQAEgJAJgHQAIgHAGAAQANAAAEANQAEgGAHgDQAGgDAIAAQAOAAAFAPIAEAXIAGAvQAAADgDACQgCADgEAAQgHAAgBgIIgDgZIgDgZIgCgLQgDgIgEAAQgDAAgIAGQgIAEgCADIAAAQIACAVQACANAAAJQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_14.setTransform(-24,12.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgfAmIAAg5IAAgIIAAgIQAAgJAIAAQAIAAAAAOQAPgPATAAQAHAAADAEQADAGAAAKIAAAGQAAAKgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAFQgHAGgFAKIAAAtQAAAIgIAAQgHAAAAgIg");
	this.shape_15.setTransform(-34.6,12.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAjQgLgMgBgTQAAgRAKgPQALgRAUAAQARAAAIAPQAHANAAARQgBARgJAOQgLAPgQAAQgOAAgKgLgAgOgQQgGAKAAAKQAAAMAHAHQAGAGAHAAQAIgBAGgGQAHgHAAgLQABgfgSgBIgBAAQgLAAgGAMg");
	this.shape_16.setTransform(-43.5,12.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNBGQgCgCAAgDIAAgCQACgKAAgNIgBgXIAAgXIgMABQgJAAAAgIQAAgIAPAAIAHgBIACgNQACgSAIgJQAHgKASAAQAMAAAAAIQAAAIgKAAQgVAAgCAbIgBAGIATgBQANAAAAAIQAAAGgGABIgHABIgTABIgBASIAAAPIABAPQAAARgCAIQgBAHgGAAQgDAAgDgDg");
	this.shape_17.setTransform(-52.3,10.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAjQgLgMgBgTQAAgRAKgPQALgRAUAAQARAAAIAPQAHANAAARQgBARgJAOQgLAPgQAAQgOAAgKgLgAgOgQQgGAKAAAKQAAAMAHAHQAGAGAHAAQAIgBAGgGQAHgHAAgLQABgfgSgBIgBAAQgLAAgGAMg");
	this.shape_18.setTransform(-66.2,12.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_19.setTransform(-74.6,10.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgWAvQgNgGAAgIQAAgDACgCQADgDADAAQADAAAEAEQACACAHABIAKABQAFAAAFgCQAJgCgBgFQABgLgRgFIgHgCQgLgCgEgDQgIgEABgJQAAgSAQgHIAPgFQALgDAEgDQAEgBAEAAQAEAAACACQACADAAAEIABAHIABAGQAAAEgCADQgDACgDAAQgFAAgBgDIgDgJIgTAGQgMAFAAAIIAFABQASAEAJAFQAOAIAAARQAAAOgMAGQgKAGgNAAQgMAAgJgDg");
	this.shape_20.setTransform(-88,11.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdA5QgMgMAAgSQABgXALgMQAMgNASAAQAKAAAEADIAIAFQABgjACgMQACgHAGAAQAIAAgBAIQABAMgEAnIgBAXQAAAcACAOIAAACQAAADgBACQgDADgDAAQgFAAgDgIQgGAFgGACQgHACgFAAQgSAAgLgLgAgTABQgHAJAAAQQAAALAIAIQAIAHAKAAQAGAAAFgCIAJgHIACgDIAAgOIAAgKIAAgJQgDgHgGgCQgEgEgIAAQgNAAgHAHg");
	this.shape_21.setTransform(-97,9.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfAmIAAg5IAAgIIAAgIQAAgJAIAAQAIAAAAAOQAPgPATAAQAHAAADAEQADAGAAAKIAAAGQAAAKgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAFQgHAGgFAKIAAAtQAAAIgIAAQgHAAAAgIg");
	this.shape_22.setTransform(-105.8,12.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAjQgLgMgBgTQAAgRAKgPQALgRAUAAQARAAAIAPQAHANAAARQgBARgJAOQgLAPgQAAQgOAAgKgLgAgOgQQgGAKAAAKQAAAMAHAHQAGAGAHAAQAIgBAGgGQAHgHAAgLQABgfgSgBIgBAAQgLAAgGAMg");
	this.shape_23.setTransform(-114.7,12.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AATAuQgJAAgFgWIgDgTIgCgSIgHAPIgMAiQgCADgCACQgCAFgGAAQgGAAgGgZQgCgNgEgVIgCgMIgBgNQABgDACgCQACgDAEAAQAGAAACAHIABAMIABANIAGAkIATg6QACgJAGAAQAHAAACAKIAFAeIAGAfIAGgWIALgsQABgFAGAAQADAAADACQADACAAAEIgBADQgGAcgLAhQgCAHgGAIQgCAFgFAAIgBgBg");
	this.shape_24.setTransform(-124.8,12.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHAAADAGQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAGQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_25.setTransform(163.3,-13.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAHAEQAHADAIAAQAGAAAHgCQAKgDADgEQACgFAEAAQADAAACADQADACgBADQABAJgPAGQgNAGgMAAQgSAAgMgJgAgQgWQgHAIgDAPIAZgLQAOgIAHgFQgIgHgMAAQgKAAgGAIg");
	this.shape_26.setTransform(154.5,-13.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAXA/IgEgTIgBgVIAAgGIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgCQgDgDAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgDQACgCAEAAQAHAAABAHIABAPIgBASIAAASIAAAHQAHgIAIgFQAGgFAJAAQAOABAFAIQAEAHAAAOIABAQIACAQIACASIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_27.setTransform(144.9,-15.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_28.setTransform(135.8,-15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgYAjQgLgMgBgTQAAgRAKgOQALgRAUAAQARgBAIAQQAHAMAAARQgBASgJAMQgLAPgQAAQgOAAgKgKgAgOgQQgGAKAAAKQAAANAHAGQAGAFAHAAQAIABAGgHQAHgGAAgNQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_29.setTransform(127.2,-13.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAXA/IgEgTIgBgVIAAgGIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgCQgDgDAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgDQACgCAEAAQAHAAABAHIABAPIgBASIAAASIAAAHQAHgIAIgFQAGgFAJAAQAOABAFAIQAEAHAAAOIABAQIACAQIACASIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_30.setTransform(113,-15.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_31.setTransform(104,-15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgHA8QgCgCgBgEIAAgPIAAgOIAAgUIABgTQABgEACgBQACgDAEAAQACAAADADQACABAAAEIgBATIgBAUIABAOIAAAPQAAAEgCACQgDACgCAAQgEAAgCgCgAgEgtQgEgCAAgFQAAgDAEgEQADgDACAAQAFAAACADQADAEAAADQAAAFgDACQgCADgFAAQgCAAgDgDg");
	this.shape_32.setTransform(97.8,-15.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AATAuQgJAAgFgWIgDgTIgCgSIgHAPIgMAiQgCADgCACQgCAFgGAAQgFAAgHgZQgCgNgEgVIgCgMIgBgNQABgDACgCQACgDADAAQAHAAACAHIABAMIABANIAGAkIATg6QACgJAGAAQAHAAACAKIAGAeIAFAfIAGgWIALgsQABgFAGAAQAEAAACACQACACABAEIgBADQgGAcgLAhQgCAHgGAIQgCAFgFAAIgBgBg");
	this.shape_33.setTransform(89.5,-13.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgdA5QgMgMABgSQAAgXAMgMQALgNASAAQAJAAAGADIAIAFQAAgjACgMQACgHAGAAQAIAAAAAIQgBAMgDAnIgBAXQAAAcADAOIAAACQgBADgCACQgCADgDAAQgFAAgCgIQgHAFgGACQgGACgHAAQgQAAgMgLgAgTABQgHAJAAAQQAAALAIAIQAHAHAKAAQAHAAAEgCIAJgHIADgDIAAgOIAAgKIAAgJQgDgHgFgCQgGgEgHAAQgNAAgHAHg");
	this.shape_34.setTransform(73.5,-15.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgbAkQgNgLAAgSQgBgVALgPQAMgPASAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAFAAAJgCQAJgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgLgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgKAAgHAIg");
	this.shape_35.setTransform(64.1,-13.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgKAAgHALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgCACQgCACgDAAQgEAAgCgCQgCgCAAgEIgBgIIAAgHIABgXIABgXIAAgIIgBgIQAAgEACgCQADgCAEAAQAHAAABAKIAAAKQAOgSAOAAQANAAAFALQAEAIAAAPIAAAJIAAAGQAAAHACALIACASQAAAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_36.setTransform(55,-13.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgHA8QgDgCAAgEIAAgPIAAgOIAAgUIABgTQAAgEADgBQACgDADAAQADAAACADQADABAAAEIgBATIgBAUIAAAOIAAAPQAAAEgBACQgDACgDAAQgDAAgCgCgAgEgtQgDgCAAgFQAAgDADgEQACgDAEAAQADAAADADQADAEAAADQAAAFgDACQgDADgDAAQgEAAgCgDg");
	this.shape_37.setTransform(48.2,-15.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgZA+QgCAEgEAAQgDAAgCgCQgDgCAAgDIABgHIAAgHIgBgaIAAgZIAAgXIAAgXQAAgFACgEQADgFAFAAQAGAAAAAHIAAADIgBAEIAAASIAAAVQAHgFAHgCQAGgDAFABQASAAALANQAKAMAAATQAAASgMAOQgMANgRAAQgNAAgLgFgAgMgDIgMAHIAAAOIAAAOIAAANIALAFQAFABAHAAQALAAAHgJQAIgHAAgNQAAgMgGgJQgHgIgLAAQgGAAgHAEg");
	this.shape_38.setTransform(40.7,-15.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgEAxQgCgDAAgDIgCgeIgCgdQAAgIgDgFQgGACgGAGIgJALIgFAFIgBAOIAAAOIAAAHIABAHQAAADgCADQgDACgDAAQgKAAAAgVIABgPIABgOIgBgNIAAgOQAAgSAIAAQADAAADACQADADAAAEIgBAEIAAAGIAAAIQAEgJAJgHQAIgHAGAAQANAAAEANQAEgGAHgDQAGgDAIAAQAOAAAFAPIAEAXIAGAvQAAADgDACQgCADgEAAQgHAAgBgIIgDgZIgDgZIgCgLQgDgIgEAAQgDAAgIAGQgIAEgCADIAAAQIACAVQACANAAAJQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_39.setTransform(29,-13.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgYAjQgLgMgBgTQAAgRAKgOQALgRAUAAQARgBAIAQQAHAMAAARQgBASgJAMQgLAPgQAAQgOAAgKgKgAgOgQQgGAKAAAKQAAANAHAGQAGAFAHAAQAIABAGgHQAHgGAAgNQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_40.setTransform(17.7,-13.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgXAlQgMgLAAgSQAAgQAMgSQAMgTAPAAQAHgBALAEQAMAFAAAHQAAADgCACQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgCQgGgEgKAAQgIAAgIAPQgIAOAAAJQAAALAIAGQAHAGAJAAQAFAAAGgDIAKgFIAEgBQACAAACADQADACAAADQAAAGgNAFQgLAGgIgBQgPABgMgKg");
	this.shape_41.setTransform(9,-13.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgbAkQgOgLAAgSQAAgVALgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQADACAAADQAAAJgPAGQgNAGgMAAQgSAAgLgJgAgRgWQgGAIgDAPIAZgLQAOgIAGgFQgGgHgNAAQgJAAgIAIg");
	this.shape_42.setTransform(-5,-13.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgZA+QgCAEgEAAQgDAAgCgCQgDgCAAgDIABgHIAAgHIgBgaIAAgZIAAgXIAAgXQAAgFACgEQADgFAFAAQAGAAAAAHIAAADIgBAEIAAASIAAAVQAHgFAHgCQAGgDAFABQASAAALANQAKAMAAATQAAASgMAOQgMANgRAAQgNAAgLgFgAgMgDIgMAHIAAAOIAAAOIAAANIALAFQAFABAHAAQALAAAHgJQAIgHAAgNQAAgMgGgJQgHgIgLAAQgGAAgHAEg");
	this.shape_43.setTransform(-14.7,-15.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgJAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgCACQgCACgEAAQgDAAgCgCQgCgCAAgEIgBgIIgBgHIACgXIABgXIAAgIIgBgIQAAgEADgCQACgCAEAAQAHAAAAAKIABAKQAOgSAOAAQANAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIACASQAAAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_44.setTransform(-29.2,-13.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAaArIgFgHIgOAHQgGACgDAAQgUAAgJgLQgIgLAAgVQAAgSAOgPQAOgOASAAQAHAAAJADQALAFAAAHIgBAEIgCAKIAAARQAAALABAGIAGAPIACAEIAAABQAAADgCADQgDACgDAAQgBAAgFgDgAgNgUQgJALAAAMQAAAOAEAHQAFAGAKAAQAHAAAGgDIAIgGQgDgVAAgKIAAgIIACgJIgFgCIgEgCQgMAAgJALg");
	this.shape_45.setTransform(-38.2,-13.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgXAlQgMgLAAgSQAAgQALgSQANgTAOAAQAIgBAKAEQAOAFAAAHQAAADgDACQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgEgCQgEgEgMAAQgHAAgJAPQgHAOAAAJQAAALAHAGQAIAGAJAAQAGAAAFgDIAKgFIADgBQADAAADADQACACAAADQAAAGgNAFQgLAGgIgBQgPABgMgKg");
	this.shape_46.setTransform(-46.9,-13.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CC33FF").s().p("AgjBBQgFgDAAgJIABgcQADglAAguQAAgEACgCQADgDADAAQADAAADADQACACAAAEQAAAvgCAlIgBANIgBAMQAWAAAggKIADgBQADAAADADQACADAAADQAAAFgFADQgKAEgUAEQgRADgMAAQgIAAgEgDg");
	this.shape_47.setTransform(-60.9,-15.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CC33FF").s().p("AAdArIgGgaIgVAEIgWAEIgOAhQgCAEgFAAQgDAAgDgCQgDgDABgEQAAgEAMgaQgBgCgBgDQAAgHAJgCQAJgQAPgXQASggAFAAQAGABADAIIAFAcIAMA5IAGANIABAJQAAADgCADQgDADgDgBQgHAAgGgTgAgKAGIAegGIgHgfg");
	this.shape_48.setTransform(-72.1,-15.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CC33FF").s().p("AgmBAQgDgDAAgEIAAgYIABghIACgiIABgXQAAgEADgCQALgDAOAAQAOAAANAKQAQALAAARQAAAVgRAMQANAFAGAHQAGAGAAAIQAAAKgLAJQgHAHgJADQgRAHgdAAQgEAAgDgDgAgZAhIAAARQAWgBAMgFQAGgCAGgFQAFgEAAgCQAAgEgLgFIgPgGIgIgBIgEAAIgDAAIgJgBIgBATgAgVgxIgBAPIgBAgIAMABQAMgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgJAAIgMAAg");
	this.shape_49.setTransform(-83.1,-15.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CC33FF").s().p("AgpA/QgDgDAAgDIAAgUIgBgTIACgWIABgXIAAgMIgBgNQAAgFACgDQAEgFAFABIAUABQALACAHAEQAiASAAAZQAAANgMAJQgJAIgOAEQAaAOANAPQACADAAADQAAADgCADQgDACgDAAQgDAAgDgCQgcgcgggJIAAAQIABARQAAADgDADQgCACgDAAQgEAAgCgCgAgaglIABALIgBAQIgCAQIAEAAIADAAQAVAAAKgGQAFgBAEgFQAEgEAAgEQAAgLgNgKQgLgJgNgCIgMgBg");
	this.shape_50.setTransform(-94.1,-15.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CC33FF").s().p("AgjBAQgJgHABgbIAAgLIABgPIgBgDIABgFIACgjIgBgJIgBgJQAAgKAJAAQADAAADACIATgDIAPgBQAUgBAMAFQAGACAAAGQAAAEgDACQgCADgDAAIgDgBQgOgDgNAAIgOABIgRADIAAAJIgBAgIAkgEIATgCQAEABACACQACACAAAEQAAAHgHABIgUABIglAEIAAALIgBAKQAAASADADQACADALAAIAOgBIAQAAIAFgBIAFAAQAJAAAAAJQAAAGgIACQgHABgaAAQgZABgHgHg");
	this.shape_51.setTransform(-104.6,-15.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CC33FF").s().p("AgOA8QgKgYgMgvIgHgXQgFgRAAgGQAAgDADgCQACgDAEAAQAGAAABAHIAEAPIAIAcQAHAeAIAWIAAgBIAWg8IAHgUQAFgNAFgFQADgEAEAAQADAAACADQADACAAADIgCAGQgFAHgDAJIgGASIgXA7IgJAVQgCAFgEAAQgHAAgCgHg");
	this.shape_52.setTransform(-115.1,-15.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgcAkQgMgLAAgSQgBgVALgPQAMgPASAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAFAAAJgCQAJgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgKAAgHAIg");
	this.shape_53.setTransform(-130.8,-13.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAXA/IgEgTIgBgVIAAgGIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgCQgDgDAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgDQACgCAEAAQAHAAABAHIABAPIgBASIAAASIAAAHQAHgIAIgFQAGgFAJAAQAOABAFAIQAEAHAAAOIABAQIACAQIACASIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_54.setTransform(-140.4,-15.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgFA9QgDgCABgEIAAgEIAAgDIAAgNIgBgMIgCggIgCgiIgHABQgTAAgKgDQgHgCAAgGQAAgEADgCQACgDAEAAIANABIAOABIAOAAIAPAAIASABIATABQAEAAADACQACADAAADQAAAEgCADQgDACgEAAIgTgBIgSgBIgGAAIACAlIACAlIABAIIAAAJQAAAGgCAEQgCAFgFAAQgCAAgDgCg");
	this.shape_55.setTransform(-150.4,-15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ParticipialPhrases, new cjs.Rectangle(-161.6,-30.2,333.3,53.4), null);


(lib.ParticialPhrases = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("AgDAjQgCgDgBgDIAAgEIgBgEQAAgDADgCQACgCACAAQAIAAAAAPQABADgDADQgCACgDAAQgCAAgCgCgAgFgSQgCgCAAgDIAAgDIgBgDQAAgDACgCQADgCADAAQAHAAAAANQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape.setTransform(86.6,-22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_1.setTransform(79.3,-23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF00FF").s().p("AgfA4QgHgGAAgYIAAgKIAAgMIAAgDIABgEIABgfIAAgIIgBgIQAAgJAHAAQADAAACACIARgDIAOgBQASAAAKADQAFADAAAFQAAADgCACQgCACgDABIgCgBQgNgEgLAAIgMABIgQAEIABAIIgBAcIAfgEIARgBQADAAADACQACACAAADQAAAHgHAAIgRABIghADIgBALIAAAIQAAAQACAEQACACAKAAIANgBIANAAIAFAAIAEgBQAIAAAAAIQAAAGgHABQgGACgWAAQgXAAgGgHg");
	this.shape_2.setTransform(69.6,-23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF00FF").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_3.setTransform(59.5,-23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF00FF").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_4.setTransform(48.7,-23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_5.setTransform(38.7,-23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AgtA6QgCgCAAgDIABgXIABgYIAAgLIAAgMIABgRIAAgRQAAgDACgDQACgCADAAQADAAACACQACADAAADIAAARIgBASIAAARIAfgFQATgEAMABIABggQAAgGACgGQACgIAFAAQADAAACACQACACAAAEIgBADIgBAJIAAAGIABAHIgCAVIgBAWIABAQIABARQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgRIgBgQIAAgMQgMABgSAEIgeAFIgCATIgBATQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape_6.setTransform(28.2,-23.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AgfA4IgBgEIAAgWIABgeIACgeIAAgKIAAgLQACgGAGABIAHgBIAKgBQAMABAMAIQANALAAAOQAAASgNAKQgNAKgRgBIgIgBIgBAoIgCAEQgCACgCAAQgEAAgCgCgAgPgrIgBAOIgBAdIAHAAQAMAAAJgGQAIgGABgMQAAgIgJgGQgIgFgIgBIgHAAIgDABg");
	this.shape_7.setTransform(18.6,-23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF00FF").s().p("AgfA5QgEgCAAgJIABgYQACghAAgpQAAgCACgDQACgCADAAQADAAADACQACADAAACQAAAqgCAhIgBALIgBALQATAAAdgJIACAAQADgBACADQACACAAADQAAAFgFACQgIAEgSADQgPADgKAAQgIAAgDgDg");
	this.shape_8.setTransform(6.1,-23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF00FF").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_9.setTransform(-3.8,-23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("AgfA2QgCgCgBgDQABgEACgCQACgCADAAIAPgBIABgOIAAgMIgBgNQAAgQACgZIgJABIgKAAQgDAAgCgCQgCgDAAgDQAAgGAHgCIAWAAQANAAAXADQAGABAAAHQAAAEgDACQgBABgEAAIgLgBIgMgBIgBAnIAAANIAAANIAAANIAWgBQADAAADACQABACAAADQAAAEgBACQgDACgDAAIgMAAIgMAAIgNACIgPABQgDAAgCgCg");
	this.shape_10.setTransform(-13.2,-23.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF00FF").s().p("AgfA4IgBgEIAAgWIABgeIACgeIAAgKIAAgLQACgGAGABIAHgBIAKgBQAMABAMAIQANALAAAOQAAASgNAKQgNAKgRgBIgIgBIgBAoIgCAEQgBACgDAAQgEAAgCgCgAgPgrIgBAOIgCAdIAIAAQAMAAAJgGQAIgGABgMQAAgIgJgGQgIgFgIgBIgHAAIgDABg");
	this.shape_11.setTransform(-21.1,-23.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF00FF").s().p("AgfA2QgCgCAAgDQAAgEACgCQACgCADAAIAPgBIABgOIAAgMIgBgNQAAgQACgZIgJABIgKAAQgDAAgCgCQgCgDAAgDQAAgGAHgCIAWAAQANAAAXADQAGABAAAHQAAAEgDACQgCABgCAAIgMgBIgMgBIgBAnIAAANIAAANIAAANIAWgBQAEAAABACQACACAAADQAAAEgCACQgBACgEAAIgMAAIgMAAIgOACIgOABQgDAAgCgCg");
	this.shape_12.setTransform(-29.2,-23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF00FF").s().p("AgeAtQgKgLAAgQQAAgYAVgaQASgVAQAAIAHAAIAFABQACgEAEAAQAFAAACAHIABAOQAAADgCADQgCADgDAAQgFAAgCgGQgCgFgCgBIgIAAQgKAAgMAQQgSAWAAASQAAAKAGAGQAGAHAJAAQAHAAAHgDIANgJQAEgDADAAQADAAACACQACADAAADQAAADgDACQgTASgTAAQgPAAgLgMg");
	this.shape_13.setTransform(-37.7,-23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF00FF").s().p("AggA2QgCgCAAgDQAAgEACgCQADgCADAAIAQgBIABgOIgBgMIAAgNQAAgQACgZIgKABIgJAAQgEAAgCgCQgCgDAAgDQAAgGAHgCIAWAAQANAAAWADQAHABAAAHQAAAEgCACQgDABgDAAIgLgBIgMgBIgCAnIAAANIABANIgBANIAYgBQACAAACACQACACABADQgBAEgCACQgCACgCAAIgNAAIgMAAIgOACIgOABQgDAAgDgCg");
	this.shape_14.setTransform(-46.5,-23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF00FF").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_15.setTransform(-55.1,-23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF00FF").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_16.setTransform(-65.4,-23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF00FF").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_17.setTransform(-75.8,-23.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF00FF").s().p("AgeA4IgCgEIAAgWIABgeIACgeIAAgKIABgLQACgGAFABIAGgBIALgBQAMABAMAIQANALAAAOQAAASgOAKQgMAKgQgBIgJgBIgBAoIgBAEQgCACgEAAQgCAAgCgCgAgQgrIAAAOIgCAdIAJAAQALAAAIgGQAKgGgBgMQAAgIgIgGQgIgFgJgBIgFAAIgFABg");
	this.shape_18.setTransform(-85,-23.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgCQgHAAAAgHQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADAAQAGAAABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKACIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_19.setTransform(98.9,2.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAARIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_20.setTransform(91.2,1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYA5QgKgCAAgGQAAgGAGAAIAJABQAHABAHAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKAAgNQAAgUALgMQAMgMASAAQAIAAAEACQAEABADAEQAIAAAAAIIgCAOIgBAOIgCAYQgBAOgCAKQgEAMgHAFQgJAHgPAAQgKAAgGgBgAgMgkQgIAJAAANQAAALAFAEQADAFAJAAQAGAAAHgHQAGgIABgHIAEgZIgGgDQgDgCgEAAQgNAAgHAKg");
	this.shape_21.setTransform(82.7,5.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_22.setTransform(76.9,1.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_23.setTransform(68.9,3.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgUAoQgLgDAAgIQAAgCACgDQADgCADAAQACAAAEADQABACAHABIAHABQAFAAAGgBQAGgDAAgEQAAgKgNgEIgIgCQgJgCgEgCQgGgDAAgJQAAgPAOgGIANgFIAPgFIAGgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgEAAQgEAAgBgDIgCgIIgRAFQgLAFAAAHIAFABQAPAEAJAEQAMAIgBAOQABAMgKAGQgKAFgMAAQgJAAgJgEg");
	this.shape_24.setTransform(54.7,3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_25.setTransform(49.2,1.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAARIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_26.setTransform(42.8,1.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHA1IAAgbIABgaIAAgZIABgbQAAgHAHAAQAHAAAAAHIgBAbIAAAZIgBAlIgBAQQAAAIgGgBQgHAAAAgHg");
	this.shape_27.setTransform(31.8,1.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgIA1IABgbIACgaIAAgZIAAgbQAAgHAGAAQAIAAgBAHIAAAbIAAAZIgBAlIgBAQQgBAIgFgBQgIAAAAgHg");
	this.shape_28.setTransform(27.7,1.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_29.setTransform(21.8,3.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAARIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_30.setTransform(9.2,1.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgCQgHAAAAgHQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADAAQAGAAABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKACIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_31.setTransform(1.3,2.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_32.setTransform(-4.2,1.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAFAVIgEgRIgBgQIgGAOIgLAeIgCAEQgDAEgFABQgFgBgFgVIgGgeIgCgLIgBgLQABgDACgCQACgCADAAQAGAAABAGIACALIABAKIAEAgQAIgVAIgeQADgIAFAAQAGAAACAJIAFAbIAFAbIAFgTIAKgoQABgEAFAAQADAAACACQACACAAADIAAADIgPA1QgCAHgFAHQgDAEgEAAQgIAAgEgUg");
	this.shape_33.setTransform(-11.5,3.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF00FF").s().p("AgZA5QgJgCAAgGQAAgGAHAAIAJABQAFABAIAAQANAAAFgOQAEgJAAgSQgEAHgFAEQgFAEgHAAQgNAAgJgJQgIgKAAgNQABgUAKgMQAMgMAUAAQAGAAAFACQAEABADAEQAIAAAAAIIgBAOIgDAOIgBAYQAAAOgDAKQgDAMgIAFQgIAHgQAAQgKAAgHgBgAgNgkQgGAJAAANQAAALADAEQAEAFAIAAQAHAAAHgHQAGgIACgHIACgZIgFgDQgDgCgEAAQgNAAgIAKg");
	this.shape_34.setTransform(-25.2,5.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF00FF").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAKQgHAJgEAMIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgGIgBgHQAAgDADgDQACgCADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_35.setTransform(-32.9,3.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF00FF").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_36.setTransform(-38.9,1.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF00FF").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAARIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_37.setTransform(-45.4,1.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF00FF").s().p("AgUAoQgLgDAAgIQAAgCACgDQACgCAEAAQACAAADADQACACAGABIAIABQAGAAAEgBQAHgDAAgEQAAgKgNgEIgHgCQgKgCgEgCQgGgDAAgJQAAgPAOgGIAOgFIANgFIAHgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgEAAQgDAAgCgDIgCgIIgRAFQgLAFAAAHIAFABQAQAEAHAEQANAIAAAOQgBAMgJAGQgKAFgMAAQgJAAgJgEg");
	this.shape_38.setTransform(-53.6,3.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF00FF").s().p("AAQAjQgJAEgLABQgJAAgHgFQgHgFgBgIQgDgTAAgPQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgNQAAgRABgLQABgGAGAAQADAAADABQACACAAAEIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_39.setTransform(-61,3.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF00FF").s().p("AgcA8QgCgCAAgEIABgdIAAgcIgBgdIgCgPQAAgFACgEQADgFAEAAQADABACACQABACAAACIAAADIAAAEQAGgFAGgCQAFgCAFAAQAPAAAHANQAGALAAASQAAAPgJAJQgJAMgPAAQgGAAgJgDIAAAjQAAAEgCACQgCABgDAAQgEAAgCgBgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgJQAAgNgDgIQgDgGgHAAQgGAAgFADg");
	this.shape_40.setTransform(-68.8,5.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgTAoQgMgEAAgHQAAgDADgCQACgCACAAQADAAAEAEQABABAHABIAIABQAFAAAEgCQAHgCAAgEQAAgKgOgDIgHgCQgJgDgEgCQgGgEAAgHQAAgQAPgHIAMgEIAPgFIAGgBQADAAACACQACACAAAEIABAGIABAFQAAAEgCACQgCACgDAAQgFAAgBgCIgCgIIgRAEQgKAGAAAGIADACQAQACAIAGQAMAGAAAPQAAAMgKAGQgIAFgMAAQgKAAgIgEg");
	this.shape_41.setTransform(71.6,26.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgZAyQgLgLAAgQQAAgTALgLQALgMAPAAQAJAAAEACIAHAGIACgqQABgGAGAAQAHAAgBAHIgDAtIAAAVQAAAYACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgEAAgCgHQgGAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAHAAAPQgBAJAHAHQAHAHAJAAQAFAAAEgCIAIgHIACgCIAAgMIAAgJIAAgIQgCgGgFgCQgFgEgGAAQgLAAgHAHg");
	this.shape_42.setTransform(63.7,24.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgEACgCQACgCADAAQACAAACACQACACAAAEIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgEQAAgDACgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_43.setTransform(57.4,24.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AATA4QgEgHgHgKIgMgSIgNAJIgBAWQAAAEgCACQgCACgDAAQgIAAABgKIABgSIAAgTIABgYIAAgZIAAgIIgBgIQAAgDACgCQACgCAEAAQADAAABACQACACAAADIABAIIAAAIIgBAYIAAAYQALgHAHgJIARgQQACgDADAAQADAAACADQADACAAADQAAACgDADQgIAKgOALIAQAWQALAPAAAFQAAADgCACQgDACgDAAQgDAAgDgEg");
	this.shape_44.setTransform(51.6,24.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgcAiIAAgzIABgHIAAgIQAAgHAGAAQAIAAAAANQANgOARAAQAGAAADAFQADAEAAAIIAAAGQgBAJgGAAQgHAAAAgHIAAgGIgBgFQgLABgGAFQgGAFgFAJIABAoQgBAHgHAAQgHAAAAgHg");
	this.shape_45.setTransform(39.2,26.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgYAgQgMgJAAgRQABgSAIgNQALgOAQAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbAOQAEAFAGAEQAHACAHAAQAEAAAIgCQAIgBACgFQADgDADAAQACAAACABQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgKAAQgQAAgKgIgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_46.setTransform(31.4,26.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAUA3IgDgRIgBgRIAAgGIAAgGQAAgMgHAAQgJgBgHAIIgKAQQAAAdgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg0IAAgMIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABANIAAAQIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAGAAAMIABANIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_47.setTransform(22.9,24.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgqIgQgBQgHgCAAgGQAAgDACgDQACgCADAAIAPACIAAgKIAAgJQAAgDACgCQACgCADgBQAGAAABAMIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAAEgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAADIAAAEQAAAPgIAAQgCAAgCgBg");
	this.shape_48.setTransform(15,25.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_49.setTransform(7.3,26.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgZAgQgLgJAAgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbAOQAEAFAGAEQAHACAGAAQAGAAAHgCQAIgBADgFQACgDACAAQAEAAACABQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_50.setTransform(-4.9,26.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAUA3IgDgRIgBgRIAAgGIAAgGQAAgMgHAAQgJgBgHAIIgKAQQAAAdgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg0IAAgMIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABANIAAAQIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAGAAAMIABANIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_51.setTransform(-13.4,24.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgqIgQgBQgHgCAAgGQAAgDACgDQACgCADAAIAPACIAAgKIAAgJQAAgDACgCQACgCADgBQAGAAABAMIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAAEgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAADIAAAEQAAAPgIAAQgCAAgCgBg");
	this.shape_52.setTransform(-21.3,25.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF00FF").s().p("AgYA5QgKgCAAgGQAAgGAGAAIAJABQAHABAHAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKAAgNQAAgUALgMQAMgMASAAQAIAAAEACQAEABADAEQAIAAAAAIIgCAOIgBAOIgCAYQgBAOgCAKQgEAMgHAFQgJAHgPAAQgKAAgGgBgAgMgkQgIAJAAANQAAALAFAEQADAFAJAAQAGAAAHgHQAGgIABgHIAEgZIgHgDQgCgCgEAAQgNAAgHAKg");
	this.shape_53.setTransform(-33.4,28.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF00FF").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAJQgHAJgEANIAAAIIgBAGIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgUIAAgIIgBgHQAAgCADgCQACgCADgBQAGAAABAKIAAAIQANgQAMAAQALAAAFALQADAGAAAOIAAAIIAAAFIACAQIABAPQAAAEgCACQgCACgDAAQgGgBgBgGg");
	this.shape_54.setTransform(-41,26.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF00FF").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgEACgCQACgCADAAQACAAACACQACACAAAEIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgEQAAgDACgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_55.setTransform(-47.1,24.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF00FF").s().p("AgIA1IABgaIABgbIAAgZIABgbQAAgIAGAAQAIAAAAAIIgBAbIAAAZIgBAkIgBASQAAAGgGABQgHAAgBgIg");
	this.shape_56.setTransform(-51.3,24.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF00FF").s().p("AgIA1IACgaIABgbIAAgZIAAgbQAAgIAHAAQAGAAAAAIIAAAbIAAAZIgCAkIAAASQgBAGgFABQgIAAAAgIg");
	this.shape_57.setTransform(-55.4,24.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF00FF").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_58.setTransform(-61.4,26.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF00FF").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_59.setTransform(-69,26.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgZAfQgKgIgBgRQABgSAIgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgHAGIgQAHIgbANQAEAHAGACQAHAEAGAAQAGAAAHgDQAIgCACgDQADgFADAAQADAAABADQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_60.setTransform(69.1,49.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAQAjQgJAFgLAAQgJAAgHgFQgHgFgBgIQgDgUAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgOQAAgPABgMQABgHAGABQADAAADACQACABAAADIgCAcIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_61.setTransform(61,49.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_62.setTransform(53.2,49.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgTApQgMgEAAgIQAAgCADgDQABgCADAAQADAAADADQACACAHABIAIABQAFAAAEgCQAHgBAAgFQAAgKgOgEIgHgCQgJgCgEgCQgGgDAAgJQAAgPAPgGIAMgFIAPgFIAGgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgDAAQgFAAgBgDIgCgIIgRAGQgKAEAAAHIADABQAQAEAJAEQALAIAAAOQAAAMgKAGQgIAFgMAAQgKAAgIgDg");
	this.shape_63.setTransform(45.5,49);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgZAfQgLgIABgRQgBgSAKgNQAKgOAQAAQALAAAIAEQAKAFAAAKQAAAIgJAGIgPAHIgbANQAEAHAGACQAGAEAHAAQAFAAAHgDQAJgCADgDQACgFACAAQAEAAACADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_64.setTransform(38.1,49.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgbAhIAAgyIAAgHIAAgHQAAgIAGAAQAIAAgBAMQAOgNARAAQAGAAADAEQACAFAAAJIAAAFQAAAJgHAAQgGAAAAgHIAAgFIgBgHQgLACgGAFQgHAFgEAKIAAAmQAAAIgHAAQgHAAABgIg");
	this.shape_65.setTransform(30.5,49.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgYAfQgLgIAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAJAFAAAKQAAAIgJAGIgPAHIgbANQAEAHAGACQAGAEAIAAQAFAAAGgDQAJgCACgDQADgFACAAQADAAADADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgJAAgGAHg");
	this.shape_66.setTransform(18.2,49.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJABgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_67.setTransform(9.7,47.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAPgIABQgCgBgCgBg");
	this.shape_68.setTransform(1.8,48);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAPgIABQgCgBgCgBg");
	this.shape_69.setTransform(-17.7,48);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF00FF").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgCQACgBADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_70.setTransform(-37.4,49.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF00FF").s().p("AgGA1QgCgCAAgDIAAgNIgBgOIABgRIABgQQAAgDACgCQACgCADgBQACABACACQACACAAADIgBAQIAAARIAAAOIAAANQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_71.setTransform(-43.4,47.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF00FF").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_72.setTransform(-51.4,49.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF00FF").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_73.setTransform(-61.4,49.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF00FF").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_74.setTransform(-69,49.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_75.setTransform(7.3,26.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF00FF").s().p("AgZA5QgJgCAAgGQAAgGAHAAIAJABQAFABAIAAQANAAAFgOQAEgJAAgSQgEAHgFAEQgFAEgHAAQgNAAgJgJQgIgKAAgNQABgUAKgMQAMgMAUAAQAGAAAFACQAEABADAEQAIAAAAAIIgBAOIgDAOIgBAYQAAAOgDAKQgDAMgIAFQgIAHgQAAQgKAAgHgBgAgNgkQgGAJAAANQAAALADAEQAEAFAIAAQAHAAAHgHQAGgIACgHIACgZIgFgDQgDgCgEAAQgNAAgIAKg");
	this.shape_76.setTransform(-25.2,5.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgUAoQgLgEAAgHQAAgDACgCQACgCAEAAQACAAADAEQACABAGABIAIABQAFAAAFgBQAHgCAAgFQAAgKgOgDIgGgDQgKgBgEgDQgGgEAAgHQAAgQAPgHIANgEIANgFIAHgBQADAAACACQACACAAAEIABAFIABAGQAAAEgCACQgCACgDAAQgEAAgCgCIgCgIIgRAEQgKAGAAAGIADACQARACAHAGQANAGAAAPQAAAMgLAGQgIAFgNAAQgJAAgJgEg");
	this.shape_77.setTransform(31.8,71.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgZAyQgLgLAAgQQAAgUALgKQALgMAPAAQAIAAAFADIAHAFIACgqQABgGAGAAQAHAAAAAHIgEAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFABgCgHQgFAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAHABAPQAAAJAGAHQAHAHAJAAQAFAAAFgCIAHgHIADgBIAAgOIAAgIIAAgIQgDgGgFgCQgEgEgHAAQgLAAgGAHg");
	this.shape_78.setTransform(23.9,70.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAJQgHAKgEAMIAAAIIgBAGIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgUIAAgHIgBgIQAAgCADgCQACgDADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFALQADAGAAAOIAAAIIAAAFIACAQIABAPQAAADgCADQgCACgDAAQgGgBgBgGg");
	this.shape_79.setTransform(15.7,72.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgZAgQgLgJAAgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAKAFgBALQABAHgJAGIgPAHIgbAOQAEAGAGADQAHACAGAAQAGAAAHgBQAIgCADgFQACgDACAAQAEAAACABQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_80.setTransform(7.7,72.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgNIgBgNIABgRIABgQQAAgEACgCQACgBADAAQACAAACABQACACAAAEIgBAQIAAARIAAANIAAANQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgEQAAgDACgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_81.setTransform(1.5,70.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgcAhIAAgyIABgHIAAgIQAAgHAGAAQAIAAAAANQANgOARAAQAGAAADAFQADADAAAJIAAAGQgBAJgGAAQgHAAAAgHIAAgGIgBgFQgLABgGAFQgGAFgFAJIABAnQAAAIgIAAQgGAAgBgIg");
	this.shape_82.setTransform(-4.1,72.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_83.setTransform(-11.9,70.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgTA5QgCgCAAgDQAAgHAQgjIgagyIgEgFQgCgDAAgDQAAgDADgCQACgCADAAQADAAACACQANASANAgIALgaIALgWQACgEAEAAQADAAACACQADACAAADIgBADIgaA2IgNAiIgFAOQgCAFgEAAQgDAAgDgCg");
	this.shape_84.setTransform(-24.2,74.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgWA3QgCADgDAAQgDAAgCgBQgCgCAAgDIAAgGIAAgGIAAgXIAAgWIAAgUIAAgVQAAgEABgEQADgEAFAAQAFAAAAAGIgBADIAAADIAAAQIgBATQAHgEAGgCQAGgDAEAAQAQAAAJAMQAKALAAAQQgBARgKAMQgLALgPAAQgMAAgJgEgAgKgCIgLAGIgBAMIAAAMIABAMIAJAEIALABQAJAAAIgHQAGgIAAgLQAAgLgFgHQgHgHgJAAQgGAAgFAEg");
	this.shape_85.setTransform(-32.1,70.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF00FF").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgqIgQgBQgHgBAAgHQAAgDACgDQACgCADAAIAPACIAAgKIAAgJQAAgEACgBQACgDADAAQAGAAABAMIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAADgCADQgCACgEAAIgDAAIgEAAIgKABIACAqIAAADIAAADQAAARgIgBQgCABgCgCg");
	this.shape_86.setTransform(-49.2,70.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF00FF").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAJQgHAKgEAMIAAAIIgBAGIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgUIAAgHIgBgIQAAgCADgCQACgDADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFALQADAGAAAOIAAAIIAAAFIACAQIABAPQAAADgCADQgCACgDAAQgGgBgBgGg");
	this.shape_87.setTransform(-56.5,72.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF00FF").s().p("AgZAgQgKgJgBgRQABgSAIgNQALgOAQAAQAMAAAHAEQAJAFAAALQAAAHgHAGIgQAHIgbAOQAEAGAGADQAHACAGAAQAFAAAIgBQAIgCACgFQADgDADAAQADAAABABQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_88.setTransform(-64.5,72.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF00FF").s().p("AgIA1IABgaIACgbIAAgZIAAgbQAAgHAGgBQAIABgBAHIAAAbIAAAZIgCAlIAAARQgBAGgFABQgIAAAAgIg");
	this.shape_89.setTransform(-70.8,70.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgUApQgLgEAAgIQAAgCACgDQACgCAEAAQACAAADADQACACAGABIAIABQAGAAAEgCQAHgBAAgFQAAgKgNgEIgHgCQgKgCgEgCQgGgDAAgJQAAgPAOgGIAOgFIANgFIAHgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgEAAQgDAAgCgDIgCgIIgRAGQgLAEAAAHIAFABQAQAEAHAEQANAIAAAOQgBAMgJAGQgKAFgMAAQgJAAgJgDg");
	this.shape_90.setTransform(37.7,49);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgZAyQgLgKABgRQgBgUALgKQALgMAPAAQAIAAAFADIAHAFIACgpQABgHAGAAQAHAAAAAHIgEAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgCgGQgFAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAHAAAPQABAJAGAHQAHAHAJAAQAFAAAFgCIAIgGIACgDIAAgMIAAgJIAAgJQgDgFgFgDQgEgCgHAAQgLAAgGAGg");
	this.shape_91.setTransform(29.8,47.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgNIgBgOIABgRIABgQQAAgDACgCQACgCADgBQACABACACQACACAAADIgBAQIAAARIAAAOIAAANQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_92.setTransform(23.5,47.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAUA4QgFgHgHgKIgMgSIgNAJIgBAWQAAAEgCACQgCACgDAAQgHAAAAgKIAAgSIABgTIAAgYIABgZIgBgIIAAgIQAAgDACgCQACgCAEAAQACAAACACQADACAAADIAAAIIAAAIIAAAYIAAAYQAJgHAJgJIAQgQQACgDADAAQADAAACADQACACAAADQAAACgBADQgKAKgNALIAQAWQALAPAAAFQAAADgCACQgDACgDAAQgEAAgBgEg");
	this.shape_93.setTransform(17.7,47.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgYAfQgLgIAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAJAFAAAKQAAAIgIAGIgQAHIgbANQAEAHAGACQAGAEAIAAQAFAAAGgDQAJgCACgDQADgFADAAQACAAADADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgJAAgGAHg");
	this.shape_94.setTransform(4.7,49.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgTA5QgCgCAAgDQAAgHAQgjIgagyIgEgFQgCgDAAgDQAAgDADgCQACgCADAAQADAAACACQANASANAgIALgaIALgWQACgEAEAAQADAAACACQADACAAADIgBADIgaA2IgNAiIgFAOQgCAFgEAAQgDAAgDgCg");
	this.shape_95.setTransform(-23.9,51.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgVA3QgDADgDAAQgDAAgCgBQgCgCAAgDIAAgGIAAgGIAAgXIgBgWIABgUIAAgVQAAgEABgEQADgEAEAAQAGAAAAAGIAAADIgBADIAAAQIAAATQAGgEAGgCQAGgDADAAQAQAAAKAMQAJALAAAQQABARgLAMQgLALgPAAQgLAAgJgEgAgKgCIgLAGIAAAMIAAAMIAAAMIAKAEIAKABQAJAAAIgHQAGgIAAgLQAAgLgGgHQgFgHgLAAQgFAAgFAEg");
	this.shape_96.setTransform(-31.8,47.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF00FF").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAPgIABQgCgBgCgBg");
	this.shape_97.setTransform(-44.4,48);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF00FF").s().p("AgIA1IABgbIABgaIAAgaIABgaQAAgIAGABQAIgBAAAIIgBAaIAAAaIgBAkIgBARQAAAIgGgBQgHAAgBgHg");
	this.shape_98.setTransform(-50,47.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF00FF").s().p("AAQAjQgJAFgLAAQgJAAgHgFQgHgFgBgIQgDgUAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgOQAAgPABgMQABgHAGABQADAAADACQACABAAADIgCAcIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_99.setTransform(-60.1,49.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF00FF").s().p("AgWA3QgCADgDAAQgDAAgCgBQgCgCAAgDIABgGIAAgGIgBgXIAAgWIAAgUIAAgVQAAgEACgEQACgEAFAAQAFAAAAAGIgBADIAAADIAAAQIgBATQAHgEAGgCQAFgDAFAAQAPAAAKAMQAKALAAAQQAAARgMAMQgKALgPAAQgLAAgKgEgAgLgCIgKAGIgBAMIAAAMIABAMIAJAEIALABQAKAAAGgHQAHgIAAgLQAAgLgGgHQgGgHgJAAQgGAAgGAEg");
	this.shape_100.setTransform(-68.3,47.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgTA5QgCgCAAgDQAAgHAQgjIgagyIgEgFQgCgDAAgDQAAgDADgCQACgCADAAQADAAACACQANASANAgIALgaIALgWQACgEAEAAQADAAACACQADACAAADIgBADIgaA2IgNAiIgFAOQgCAFgEAAQgDAAgDgCg");
	this.shape_101.setTransform(44.3,28.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgYAgQgLgJAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAJAFAAAKQAAAIgIAGIgQAHIgbAOQAEAFAGAEQAGACAIAAQAFAAAGgCQAJgBACgFQADgDACAAQADAAADABQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgIgAgPgTQgFAHgDANIAWgKQANgGAFgFQgGgGgLAAQgJAAgGAHg");
	this.shape_102.setTransform(36.7,26.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgHA1IABgaIAAgbIAAgZIABgbQAAgIAHAAQAGAAABAIIgBAbIAAAZIgCAkIAAASQAAAGgGABQgHAAAAgIg");
	this.shape_103.setTransform(30.4,24.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgIA1IABgaIABgbIAAgZIABgbQAAgIAGAAQAIAAgBAIIAAAbIAAAZIgBAkIgBASQgBAGgFABQgIAAAAgIg");
	this.shape_104.setTransform(26.3,24.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_105.setTransform(20.3,26.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgZAgQgLgJABgRQgBgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbAOQAEAFAGAEQAHACAGAAQAFAAAHgCQAJgBADgFQACgDACAAQADAAADABQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQABAIgOAGQgLAFgLAAQgPAAgLgIgAgPgTQgGAHgDANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_106.setTransform(8.1,26.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAJQgHAJgEANIAAAIIgBAGIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgUIAAgIIgBgHQAAgCADgCQACgCADgBQAGAAABAKIAAAIQANgQAMAAQALAAAFALQADAGAAAOIAAAIIAAAFIACAQIABAPQAAAEgCACQgCACgDAAQgGgBgBgGg");
	this.shape_107.setTransform(-20.2,26.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF00FF").s().p("AgZAyQgKgLAAgQQAAgTAKgLQAKgMAQAAQAIAAAFACIAHAGIACgqQABgGAGAAQAGAAAAAHIgCAtIgBAVQAAAYACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgEAAgDgHQgFAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAHgBAPQAAAJAHAHQAHAHAJAAQAFAAAEgCIAJgHIABgCIAAgMIAAgJIAAgIQgCgGgFgCQgFgEgGAAQgLAAgHAHg");
	this.shape_108.setTransform(-37.4,24.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF00FF").s().p("AAQAjQgJAFgLgBQgJAAgHgDQgHgGgBgJQgDgSAAgPQAAgKACgMQABgHAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgEIAAgOIAAgOQAAgPABgMQABgGAGgBQADAAADACQACADAAACIgCAcIAAAPIAAAQIABAFIAAAFQAAADgCACQgCACgDAAQgGAAgCgHg");
	this.shape_109.setTransform(-53.5,26.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF00FF").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_110.setTransform(-69.2,24.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_111.setTransform(69.6,3.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAQAjQgJAEgLABQgJAAgHgFQgHgFgBgIQgDgTAAgPQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgNQAAgRABgLQABgGAGAAQADAAADABQACACAAAEIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_112.setTransform(61.8,3.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_113.setTransform(46.2,3.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgYAfQgLgIAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAIAFABALQgBAHgHAGIgQAHIgbANQAEAHAGACQAGAEAIAAQAFAAAGgCQAJgDACgDQADgEADgBQACABACACQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQANgGAFgFQgGgGgLAAQgJAAgFAHg");
	this.shape_114.setTransform(33.9,3.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF00FF").s().p("AgZAyQgLgKAAgRQAAgUALgKQALgMAPAAQAJAAAEADIAHAFIACgpQABgHAGAAQAHAAgBAHIgDAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgCgGQgFAEgGACQgGACgFAAQgPAAgKgKgAgRABQgFAIAAAOQAAAJAGAHQAHAHAJAAQAFAAAEgCIAIgGIADgCIAAgOIAAgIIAAgJQgDgFgFgDQgFgCgGAAQgLAAgHAGg");
	this.shape_115.setTransform(-14.5,1.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF00FF").s().p("AgZAfQgKgIgBgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAJAFAAALQAAAHgIAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAGAAAHgCQAIgDADgDQACgEACgBQAEABABACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_116.setTransform(-22.8,3.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF00FF").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_117.setTransform(-39.5,3.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FF00FF").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_118.setTransform(-47.3,3.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF00FF").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgCQgHAAAAgHQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADAAQAGAAABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKACIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_119.setTransform(-54.6,2.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FF00FF").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgCQgHAAAAgHQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADAAQAGAAABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKACIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_120.setTransform(-61.7,2.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FF00FF").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_121.setTransform(-69.1,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:-45.4}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:-25.2,y:5.4}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:1.3}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:42.8}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:91.2}},{t:this.shape_19,p:{x:98.9}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},29).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:-45.4}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:-25.2,y:5.4}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:1.3}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:42.8}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:91.2}},{t:this.shape_19,p:{x:98.9}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{x:-41}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{x:7.3,y:26.4}},{t:this.shape_48,p:{x:15}},{t:this.shape_47,p:{x:22.9}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:57.4}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},21).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:-45.4}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_76},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:1.3}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:42.8}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:91.2}},{t:this.shape_19,p:{x:98.9}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{x:-41}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_75,p:{x:7.3,y:26.4}},{t:this.shape_48,p:{x:15}},{t:this.shape_47,p:{x:22.9}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:57.4}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_74},{t:this.shape_73,p:{x:-61.4,y:49.3}},{t:this.shape_72},{t:this.shape_71,p:{x:-43.4}},{t:this.shape_70},{t:this.shape_34,p:{x:-29.7,y:51.2}},{t:this.shape_69},{t:this.shape_49,p:{x:-10.4,y:49.3}},{t:this.shape_68,p:{x:1.8}},{t:this.shape_67,p:{x:9.7}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},20).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_37,p:{x:-31.3}},{t:this.shape_116},{t:this.shape_115},{t:this.shape_31,p:{x:-2}},{t:this.shape_75,p:{x:5.3,y:3.5}},{t:this.shape_19,p:{x:17.4}},{t:this.shape_26,p:{x:25.4}},{t:this.shape_114},{t:this.shape_113},{t:this.shape_49,p:{x:53.8,y:3.5}},{t:this.shape_112},{t:this.shape_111},{t:this.shape_20,p:{x:77.8}},{t:this.shape_110},{t:this.shape_73,p:{x:-61.5,y:26.4}},{t:this.shape_109},{t:this.shape_54,p:{x:-45.5}},{t:this.shape_108},{t:this.shape_43,p:{x:-26.2}},{t:this.shape_107},{t:this.shape_48,p:{x:-8.4}},{t:this.shape_47,p:{x:-0.4}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_71,p:{x:-54}},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_68,p:{x:-11.7}},{t:this.shape_67,p:{x:-3.8}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},109).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-36.3,182.1,24.9);


(lib.InfinitivePhrases = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0066").s().p("AgEAjQgBgDgBgDIAAgEIAAgEQAAgDABgCQADgCACAAQAJAAAAAPQAAADgDADQgCACgDAAQgDAAgCgCgAgFgSQgCgCAAgDIAAgDIAAgDQAAgDABgCQADgCADAAQAHAAAAANQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape.setTransform(79.9,-22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0066").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_1.setTransform(72.6,-23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0066").s().p("AgfA4QgHgHAAgXIAAgKIAAgMIAAgEIABgDIABggIAAgIIgBgIQAAgIAHAAQADAAACACIARgEIAOgBQASAAAKAFQAFACAAAEQAAADgCADQgCACgDAAIgCAAQgNgDgLAAIgMAAIgQAEIABAHIgBAcIAfgDIARgBQADAAADACQACACAAAEQAAAFgHABIgRACIghACIgBAKIAAAJQAAARACACQACACAKAAIANAAIANAAIAFgBIAEAAQAIAAAAAHQAAAHgHABQgGACgWgBQgXAAgGgGg");
	this.shape_2.setTransform(62.9,-23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0066").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_3.setTransform(52.8,-23.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0066").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_4.setTransform(42,-23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0066").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_5.setTransform(32,-23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0066").s().p("AgtA6QgCgCAAgDIABgXIABgYIAAgKIAAgNIABgRIAAgSQAAgCACgDQACgCADAAQADAAACACQACADAAACIAAASIgBARIAAASIAfgFQATgEAMAAIABgfQAAgGACgFQACgIAFAAQADAAACACQACACAAADIgBADIgBAJIAAAHIABAGIgCAWIgBAUIABARIABARQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgRIgBgRIAAgKQgMAAgSADIgeAGIgCATIgBATQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape_6.setTransform(21.5,-23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0066").s().p("AgeA5IgCgGIAAgVIABgeIACgeIAAgKIABgKQACgHAFABIAGgBIALgBQAMAAAMAJQANALAAAOQAAASgOAKQgMAJgQAAIgJAAIgBAmIgBAGQgDABgDAAQgCAAgCgBgAgQgrIAAANIgCAdIAJABQALAAAIgFQAJgIAAgLQABgIgJgGQgIgGgJABIgFAAIgFAAg");
	this.shape_7.setTransform(11.9,-23.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0066").s().p("AgfA4QgHgHAAgXIAAgKIAAgMIAAgEIABgDIABggIAAgIIgBgIQAAgIAHAAQADAAACACIARgEIAOgBQASAAAKAFQAFACAAAEQAAADgCADQgCACgDAAIgCAAQgNgDgLAAIgMAAIgQAEIABAHIgBAcIAfgDIARgBQADAAADACQACACAAAEQAAAFgHABIgRACIghACIgBAKIAAAJQAAARACACQACACAKAAIANAAIANAAIAFgBIAEAAQAIAAAAAHQAAAHgHABQgGACgWgBQgXAAgGgGg");
	this.shape_8.setTransform(-1.1,-23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0066").s().p("AgMA1QgJgWgLgpIgGgUQgEgPAAgFQAAgDACgCQACgCADAAQAGAAACAGIACANIAHAZQAHAaAHATIAAgBIATg0IAGgSQAEgLAFgFQADgDADAAQADAAACACQACACAAADQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgFAHgCAHIgGAQIgUA0IgIATQgBAEgEAAQgGAAgCgGg");
	this.shape_9.setTransform(-10.4,-23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0066").s().p("AggA2QgCgCAAgEQAAgCACgCQADgDADAAIAQgCIABgNIgBgNIAAgMQAAgPACgaIgKAAIgJAAQgEAAgCgCQgCgCAAgDQAAgGAHgBIAWgBQAOAAAVADQAHABAAAHQAAAEgCABQgCACgEAAIgLAAIgMgCIgCAoIAAAMIABANIgBAMIAYAAQACAAACACQADADAAADQAAADgDACQgCACgCAAIgNABIgMAAIgNABIgPABQgDAAgDgCg");
	this.shape_10.setTransform(-19.8,-23.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0066").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_11.setTransform(-28.4,-23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0066").s().p("AgfA2QgCgCAAgEQAAgCACgCQACgDADAAIAPgCIABgNIAAgNIgBgMQAAgPACgaIgJAAIgKAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAWgBQANAAAXADQAGABAAAHQAAAEgDABQgCACgCAAIgMAAIgMgCIgBAoIAAAMIAAANIAAAMIAWAAQAEAAABACQACADAAADQAAADgCACQgBACgEAAIgMABIgMAAIgOABIgOABQgDAAgCgCg");
	this.shape_12.setTransform(-38.2,-23.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0066").s().p("AgwA5QgDgCAAgDIABgKIAAgJIABgOIAAgNIAAgOIAAgOIgBgOIgBgOQAAgDADgDQADgDADAAQAEAAAGAJQASAbAOASQARAVAVATIAAgJIgBgJQAAgggCgTIgCgHIgBgIQAAgJAHAAQANAAAAAwIAAAXIAAAYIgCAMQgBAIgGAAQgEAAgGgGQgegcglg0IgBARIAAAPIAAATIABASQAAAUgIAAQgEAAgCgDg");
	this.shape_13.setTransform(-48.2,-23.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0066").s().p("AggA2QgBgCAAgEQAAgCABgCQADgDADAAIAPgCIABgNIAAgNIgBgMQAAgPADgaIgKAAIgKAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAWgBQANAAAXADQAGABAAAHQAAAEgDABQgCACgCAAIgMAAIgMgCIgCAoIAAAMIABANIgBAMIAYAAQADAAABACQACADAAADQAAADgCACQgBACgDAAIgNABIgMAAIgOABIgOABQgDAAgDgCg");
	this.shape_14.setTransform(-58.4,-23.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0066").s().p("AgiA7QgDgCAAgDIABgsIABgqIgBgKIAAgKQAAgCACgDQACgCAEAAIAEABIAQgCIAMgBQAIAAALACQAPAEAAAFQAAADgCADQgCACgDAAIgDgBQgJgCgPAAIgKAAIgPACIAAAgQAOgEAHAAIAXABQAGABAAAHQAAADgCADQgCABgDAAIgLgBIgLAAQgFAAgQADIgBAzQAAADgCACQgCADgDAAQgDAAgCgDg");
	this.shape_15.setTransform(-66.6,-23.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0066").s().p("AgwA5QgDgCAAgDIABgKIAAgJIABgOIAAgNIAAgOIAAgOIgBgOIgBgOQAAgDADgDQADgDADAAQAEAAAGAJQASAbAOASQARAVAVATIAAgJIgBgJQAAgggCgTIgCgHIgBgIQAAgJAHAAQANAAAAAwIAAAXIAAAYIgCAMQgBAIgGAAQgEAAgGgGQgegcglg0IgBARIAAAPIAAATIABASQAAAUgIAAQgEAAgCgDg");
	this.shape_16.setTransform(-77.5,-23.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0066").s().p("AggA2QgBgCAAgEQAAgCABgCQADgDADAAIAPgCIABgNIAAgNIgBgMQAAgPADgaIgKAAIgKAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAWgBQANAAAXADQAGABAAAHQAAAEgDABQgCACgCAAIgMAAIgMgCIgCAoIAAAMIABANIgBAMIAYAAQADAAABACQACADAAADQAAADgCACQgBACgDAAIgNABIgMAAIgOABIgOABQgDAAgDgCg");
	this.shape_17.setTransform(-87.6,-23.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbAiIAAgzIAAgHIAAgIQAAgHAHAAQAGAAAAANQAOgOARAAQAGAAADAFQADAEgBAIIAAAGQAAAJgHAAQgGAAAAgHIAAgGIAAgFQgMABgGAFQgGAFgFAJIAAAoQABAHgIAAQgGAAAAgHg");
	this.shape_18.setTransform(37.8,0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgZAgQgLgJABgRQgBgSAKgNQAKgOAQAAQALAAAJAEQAJAFgBAKQABAIgJAGIgPAHIgbAOQAEAFAGAEQAGACAHAAQAFAAAHgCQAJgBADgFQACgDACAAQAEAAACABQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgLAAQgPAAgLgIgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_19.setTransform(30,0.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgEACgCQACgCADAAQACAAACACQACACAAAEIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgEQAAgDACgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_20.setTransform(23.8,-1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgcA7QgCgCAAgDIABgdIAAgdIgBgdIgCgPQAAgFACgDQADgEAEAAQADAAACABQABACAAAEIAAACIAAAEQAGgEAGgCQAFgCAFgBQAPAAAHAOQAGALAAAQQAAAPgJALQgJALgPgBQgGABgJgDIAAAjQAAADgCACQgCACgDABQgEgBgCgCgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgKQAAgNgDgGQgDgHgHAAQgGAAgFADg");
	this.shape_21.setTransform(17.6,2.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgZAgQgKgJgBgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgIAGIgPAHIgbAOQAEAFAGAEQAHACAGAAQAGAAAHgCQAIgBADgFQACgDACAAQAEAAACABQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_22.setTransform(5.1,0.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAUA3IgDgRIgBgRIAAgGIAAgGQAAgMgHAAQgJgBgHAIIgKAQQAAAdgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg2IAAgLIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABANIAAAQIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAGAAAMIABANIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_23.setTransform(-3.4,-1.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgrIgQAAQgHgCAAgGQAAgDACgDQACgCADAAIAPACIAAgKIAAgJQAAgDACgCQACgCADgBQAGAAABAMIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAAEgCACQgCACgEAAIgDAAIgEAAIgKAAIACArIAAADIAAAEQAAAPgIAAQgCAAgCgBg");
	this.shape_24.setTransform(-11.3,-0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0066").s().p("AgYAgQgLgJAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbAOQAEAFAGAEQAGACAIAAQAFAAAGgCQAJgBACgFQADgDADAAQACAAACABQABABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgIgAgOgTQgHAHgCANIAWgKQANgGAFgFQgGgGgLAAQgJAAgFAHg");
	this.shape_25.setTransform(-23.3,0.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0066").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgrIgQAAQgHgCAAgGQAAgDACgDQACgCADAAIAPACIAAgKIAAgJQAAgDACgCQACgCADgBQAGAAABAMIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAAEgCACQgCACgEAAIgDAAIgEAAIgKAAIACArIAAADIAAAEQAAAPgIAAQgCAAgCgBg");
	this.shape_26.setTransform(-31.1,-0.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0066").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_27.setTransform(-38.5,0.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0066").s().p("AAUA4QgFgHgHgKIgMgSIgNAJIgBAWQAAAEgCACQgCACgDAAQgHAAAAgKIABgSIAAgTIAAgYIABgZIgBgIIAAgIQAAgDACgCQACgCAEAAQACAAACACQACACABADIAAAIIAAAIIAAAYIAAAYQAJgHAJgJIAQgQQACgDADAAQADAAACADQACACABADQAAACgCADQgJAKgOALIAQAWQALAPAAAFQABADgDACQgCACgEAAQgDAAgCgEg");
	this.shape_28.setTransform(-45.9,-1.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0066").s().p("AgUAoQgLgEAAgHQAAgDACgCQADgCACAAQADAAAEAEQABABAHABIAHABQAFAAAGgCQAGgCAAgEQAAgKgNgDIgIgCQgJgDgEgCQgGgEAAgHQAAgQAOgHIANgEIAPgFIAGgBQADAAACACQACACAAAEIABAGIABAFQAAAEgCACQgCACgEAAQgEAAgBgCIgCgIIgRAEQgLAGAAAGIAFACQAPACAJAGQAMAGgBAPQABAMgKAGQgKAFgMAAQgJAAgJgEg");
	this.shape_29.setTransform(-54.2,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0066").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_30.setTransform(-66.3,0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0066").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgrIgQAAQgHgCAAgGQAAgDACgDQACgCADAAIAPACIAAgKIAAgJQAAgDACgCQACgCADgBQAGAAABAMIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAAEgCACQgCACgEAAIgDAAIgEAAIgKAAIACArIAAADIAAAEQAAAPgIAAQgCAAgCgBg");
	this.shape_31.setTransform(-73.6,-0.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgbAiIAAgzIAAgHIAAgHQAAgIAHAAQAGAAABAMQANgNARAAQAGAAADAEQACAFAAAJIAAAFQAAAJgGAAQgHAAAAgHIAAgFIAAgHQgMACgGAFQgHAFgEAKIABAnQAAAHgIAAQgGAAAAgHg");
	this.shape_32.setTransform(34.8,23.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADgBQACABACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_33.setTransform(29,21.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_34.setTransform(22.9,23.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgZAfQgLgIABgRQgBgSAKgNQAKgOAQAAQALAAAIAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAGAEAIAAQAEAAAHgDQAJgCADgDQACgFACAAQAEAAACADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgLgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_35.setTransform(10.7,23.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJABgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_36.setTransform(2.2,21.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAPgIABQgCgBgCgBg");
	this.shape_37.setTransform(-5.8,22.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgCQACgBADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_38.setTransform(-17.6,23.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADgBQACABACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_39.setTransform(-23.6,21.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0066").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgCQACgBADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_40.setTransform(-34.1,23.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0066").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADgBQACABACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_41.setTransform(-40.2,21.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0066").s().p("AgcA8QgCgCAAgEIABgdIAAgcIgBgeIgCgOQAAgFACgEQADgFAEAAQADAAACADQABACAAACIAAADIAAAEQAGgFAGgCQAFgBAFAAQAPgBAHANQAGALAAARQAAAQgJAJQgJAMgPAAQgGAAgJgDIAAAjQAAAEgCACQgCABgDAAQgEAAgCgBgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgKQAAgNgDgHQgDgGgHAAQgGAAgFADg");
	this.shape_42.setTransform(-46.3,25.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0066").s().p("AgUApQgLgEAAgIQAAgCACgDQADgCACAAQADAAAEADQABACAHABIAHABQAFAAAGgCQAGgBAAgFQAAgKgNgEIgIgBQgJgDgEgCQgGgDAAgJQAAgPAOgGIANgFIAPgFIAGgBQADAAACACQACACAAADIABAHIABAGQAAADgCACQgCACgEAAQgEAAgBgDIgCgIIgRAGQgLAEAAAHIAFABQAPAEAJAEQAMAIgBAOQABAMgKAGQgKAFgMAAQgJAAgJgDg");
	this.shape_43.setTransform(-54.2,23.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0066").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAPgIABQgCgBgCgBg");
	this.shape_44.setTransform(-73.6,22.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0066").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_45.setTransform(-66.3,0.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAUA4QgEgHgIgKIgMgSIgNAJIgBAWQAAAEgCACQgCACgDAAQgHAAgBgKIABgSIABgTIAAgYIABgZIgBgIIAAgIQAAgDACgCQACgCADAAQADAAADACQACACAAADIAAAIIAAAIIAAAYIAAAYQAKgHAIgJIAQgQQACgDADAAQADAAACADQADACgBADQAAACgBADQgKAKgNALIAQAWQAMAPgBAFQAAADgCACQgDACgCAAQgFAAgBgEg");
	this.shape_46.setTransform(65,44.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgbAhIAAgyIAAgHIAAgIQAAgHAHAAQAGAAAAANQAOgOARAAQAGAAADAFQADADgBAJIAAAGQAAAJgHAAQgGAAAAgHIAAgGIAAgFQgMABgGAFQgGAFgFAJIAAAnQABAIgIAAQgGAAAAgIg");
	this.shape_47.setTransform(57.1,46.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_48.setTransform(49.4,46.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_49.setTransform(39.9,46.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgZAyQgLgLAAgQQAAgUALgKQALgMAPAAQAJAAAEACIAHAGIACgqQABgGAGAAQAHAAgBAHIgDAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEABgCgHQgGAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAHAAAPQgBAJAHAHQAHAHAJAAQAFAAAEgCIAIgHIACgBIAAgOIAAgIIAAgIQgCgGgFgCQgFgEgGAAQgLAAgHAHg");
	this.shape_50.setTransform(29.5,44.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAJQgHAKgEAMIAAAIIgBAGIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgUIAAgHIgBgIQAAgCADgCQACgDADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFALQADAGAAAOIAAAIIAAAFIACAQIABAQQAAACgCADQgCACgDAAQgGgBgBgGg");
	this.shape_51.setTransform(21.4,46.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_52.setTransform(13.4,46.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgIA1IACgaIABgbIAAgZIAAgbQAAgHAHgBQAGABAAAHIAAAbIAAAZIgCAlIAAARQgBAGgFABQgIAAAAgIg");
	this.shape_53.setTransform(7.6,44.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgYAgQgLgJAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAJAFAAALQAAAHgJAGIgPAHIgbAOQAEAGAGADQAGACAIAAQAFAAAGgBQAJgCACgFQADgDACAAQADAAADABQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgIgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgJAAgGAHg");
	this.shape_54.setTransform(-2.9,46.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAUA3IgDgRIgBgRIAAgGIAAgFQAAgOgHAAQgJAAgHAIIgKAQQAAAdgCAFQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgMIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAHIABAMIAAAQIAAARIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAGAAAMIABANIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_55.setTransform(-11.4,44.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgqIgQgBQgHgBAAgHQAAgDACgDQACgCADAAIAPACIAAgKIAAgJQAAgEACgBQACgDADAAQAGAAABAMIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAADgCADQgCACgEAAIgDAAIgEAAIgKABIACAqIAAADIAAADQAAARgIgBQgCABgCgCg");
	this.shape_56.setTransform(-19.4,45.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0066").s().p("AgUAoQgLgEAAgHQAAgDACgCQACgCAEAAQACAAADAEQACABAGABIAIABQAFAAAFgBQAHgCAAgFQAAgKgOgDIgGgDQgKgBgEgDQgGgEAAgHQAAgQAOgHIAOgEIANgFIAHgBQADAAACACQACACAAAEIABAFIABAGQAAAEgCACQgCACgEAAQgDAAgCgCIgCgIIgRAEQgLAGAAAGIAEACQARACAHAGQANAGAAAPQAAAMgLAGQgIAFgNAAQgJAAgJgEg");
	this.shape_57.setTransform(-31.2,46.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0066").s().p("AgTAoQgMgEAAgHQAAgDADgCQABgCADAAQADAAADAEQACABAGABIAJABQAEAAAFgBQAHgCAAgFQAAgKgOgDIgHgDQgJgBgEgDQgGgEAAgHQAAgQAPgHIAMgEIAOgFIAHgBQADAAACACQACACAAAEIABAFIABAGQAAAEgCACQgCACgDAAQgEAAgCgCIgCgIIgRAEQgKAGAAAGIADACQARACAHAGQAMAGAAAPQAAAMgKAGQgIAFgMAAQgKAAgIgEg");
	this.shape_58.setTransform(-38.5,46.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0066").s().p("AgcA7QgCgCAAgDIABgdIAAgdIgBgcIgCgQQAAgEACgEQADgFAEABQADAAACABQABACAAAEIAAACIAAAEQAGgFAGgBQAFgDAFAAQAPAAAHAOQAGALAAARQAAAOgJALQgJALgPgBQgGAAgJgCIAAAjQAAADgCACQgCACgDAAQgEAAgCgCgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgJQAAgOgDgGQgDgHgHAAQgGAAgFADg");
	this.shape_59.setTransform(-53.6,48.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0066").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgqIgQgBQgHgBAAgHQAAgDACgDQACgCADAAIAPACIAAgKIAAgJQAAgEACgBQACgDADAAQAGAAABAMIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAADgCADQgCACgEAAIgDAAIgEAAIgKABIACAqIAAADIAAADQAAARgIgBQgCABgCgCg");
	this.shape_60.setTransform(-73.6,45.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0066").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_61.setTransform(-38.5,0.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0066").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_62.setTransform(-66.3,0.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgZAfQgLgJAAgQQAAgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAHADAGABQAGgBAHgCQAIgCADgDQACgFACAAQAEAAACACQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_63.setTransform(24.4,69.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_64.setTransform(16.3,69.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgbAiIAAgzIAAgHIAAgHQAAgIAHAAQAGAAAAAMQAOgNARAAQAGAAADAEQADAEgBAKIAAAFQAAAJgHAAQgGAAAAgHIAAgFIAAgHQgMACgGAFQgGAFgFAJIAAAoQABAHgIAAQgGAAAAgHg");
	this.shape_65.setTransform(1.3,69.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgZAfQgLgJABgQQgBgSAKgNQAKgOAQAAQALAAAIAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAGADAHABQAFgBAHgCQAJgCADgDQACgFACAAQAEAAACACQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_66.setTransform(-10.9,69.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgGQAAgNgHABQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_67.setTransform(-19.4,67.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgDACgDQACgBADAAQAGgBABAMIAAAGIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_68.setTransform(-27.4,68.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0066").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgBQACgCADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAPQAAAEgCABQgCACgDAAQgGAAgBgGg");
	this.shape_69.setTransform(-39.2,69.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0066").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgEACgBQACgDADAAQACAAACADQACABAAAEIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_70.setTransform(-45.2,67.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0066").s().p("AAEAVIgCgRIgCgPIgFAMIgMAfIgDAEQgCAEgEABQgGAAgGgXIgEgdIgCgLIgCgLQAAgDADgCQACgCADAAQAFAAACAGIABALIABALIAFAfQAIgWAJgdQACgIAFAAQAGAAACAJIAEAbIAGAcIAFgUIAJgoQACgEAFAAQADAAADACQACACAAADIgBAEIgPA1QgCAGgFAHQgDAEgEAAQgIAAgFgUg");
	this.shape_71.setTransform(-52.5,69.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0066").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgDACgDQACgBADAAQAGgBABAMIAAAGIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_72.setTransform(-73.6,68.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_73.setTransform(22.9,23.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0066").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_74.setTransform(-66.3,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_31},{t:this.shape_30,p:{y:0.8}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:-38.5,y:0.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},23).to({state:[{t:this.shape_31},{t:this.shape_45,p:{y:0.8}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:-38.5,y:0.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_44},{t:this.shape_30,p:{y:23.7}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:22.9,y:23.7}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},21).to({state:[{t:this.shape_31},{t:this.shape_62,p:{y:0.8}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_61},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_44},{t:this.shape_45,p:{y:23.7}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:22.9,y:23.7}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_60},{t:this.shape_30,p:{y:46.6}},{t:this.shape_59},{t:this.shape_27,p:{x:-45.9,y:46.6}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},20).to({state:[{t:this.shape_31},{t:this.shape_74},{t:this.shape_29},{t:this.shape_28},{t:this.shape_61},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_44},{t:this.shape_62,p:{y:23.7}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_73},{t:this.shape_33},{t:this.shape_32},{t:this.shape_60},{t:this.shape_45,p:{y:46.6}},{t:this.shape_59},{t:this.shape_27,p:{x:-45.9,y:46.6}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_72},{t:this.shape_30,p:{y:69.5}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_34,p:{x:8.5,y:69.5}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},19).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.8,-36.7,178.1,24.9);


(lib.GerundPhrases = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgDAjQgDgDAAgDIAAgEIgBgEQAAgDACgCQADgCACAAQAIAAAAAPQAAADgCADQgCACgDAAQgDAAgBgCgAgFgSQgCgCAAgDIAAgDIgBgDQAAgDACgCQADgCADAAQAHAAAAANQAAADgCACQgCACgDAAQgCAAgDgCg");
	this.shape.setTransform(77,-41.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_1.setTransform(69.7,-41.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgfA4QgHgHAAgXIAAgKIAAgMIAAgEIABgDIABggIAAgIIgBgHQAAgJAHAAQADAAACACIARgEIAOgBQASAAAKAFQAFABAAAGQAAACgCADQgCACgDAAIgCAAQgNgDgLgBIgMABIgQAEIABAHIgBAcIAfgDIARgBQADAAADACQACACAAAEQAAAFgHABIgRACIghACIgBAKIAAAJQAAAQACADQACACAKABIANgBIANAAIAFgBIAEAAQAIAAAAAHQAAAGgHACQgGACgWgBQgXAAgGgGg");
	this.shape_2.setTransform(60,-42);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_3.setTransform(50,-41.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_4.setTransform(39.1,-41.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_5.setTransform(29.2,-42.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AgtA6QgCgCAAgDIABgXIABgYIAAgKIAAgNIABgRIAAgRQAAgDACgDQACgCADAAQADAAACACQACADAAADIAAARIgBARIAAASIAfgFQATgEAMAAIABgfQAAgGACgFQACgJAFABQADAAACABQACADAAADIgBADIgBAJIAAAHIABAGIgCAWIgBAUIABARIABARQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgRIgBgRIAAgLQgMABgSADIgeAGIgCATIgBATQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape_6.setTransform(18.7,-41.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AgfA5IgBgGIAAgVIABgeIACgeIAAgKIAAgKQACgHAGABIAHgBIAKgBQAMAAAMAJQANALAAAOQAAASgNAKQgNAJgRAAIgIgBIgBAnIgCAGQgBABgDAAQgEAAgCgBgAgPgrIgBANIgCAdIAIABQAMAAAJgFQAIgIABgLQAAgIgJgGQgIgGgIABIgHAAIgDAAg");
	this.shape_7.setTransform(9,-42.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AgWA7QgJgCgEgDIAAAAQgEAAgCgDQgCgCAAgDIABgXIABgXIgBgYIAAgaQAAgDADgDQADgEADAAIAMAFIANAGQAUAHAOAPQASARAAAUQAAANgGALQgGAMgKAHQgMAIgUAAQgFAAgHgCgAgbgUIAAAVIgBAoIACAAQAGAFAKAAQAQAAAHgFQAHgFAFgIQAEgJAAgIQAAgUgXgPQgGgFgbgMg");
	this.shape_8.setTransform(-4.7,-41.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("AgwA5QgDgCAAgDIABgKIAAgJIABgOIAAgNIAAgOIAAgOIgBgOIgBgOQAAgDADgDQADgDADAAQAEAAAGAJQASAbAOASQARAVAVATIAAgJIgBgJQAAgggCgTIgCgHIgBgIQAAgJAHAAQANAAAAAwIAAAXIAAAYIgCAMQgBAIgGAAQgEAAgGgGQgegcglg0IgBARIAAAPIAAATIABASQAAAUgIAAQgEAAgCgDg");
	this.shape_9.setTransform(-16.2,-41.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AgfAsQgKgLgCgVQgBgJAAgbIAAgRIABgJQACgFAFAAQAHAAAAAMIAAArQAAAsAeAAQAdAAAAhKIAAgHIAAgGQAAgFACgDQACgFAEABQAHAAAAAKIAAAJIAAAJQAABTgsAAQgWABgKgNg");
	this.shape_10.setTransform(-27.7,-41.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_11.setTransform(-37.9,-42.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AgfA4QgHgHAAgXIAAgKIAAgMIAAgEIABgDIABggIAAgIIgBgHQAAgJAHAAQADAAACACIARgEIAOgBQASAAAKAFQAFABAAAGQAAACgCADQgCACgDAAIgCAAQgNgDgLgBIgMABIgQAEIABAHIgBAcIAfgDIARgBQADAAADACQACACAAAEQAAAFgHABIgRACIghACIgBAKIAAAJQAAAQACADQACACAKABIANgBIANAAIAFgBIAEAAQAIAAAAAHQAAAGgHACQgGACgWgBQgXAAgGgGg");
	this.shape_12.setTransform(-47.2,-42);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AglAyQgIgKgBgUQABgTAIgUQAJgTAPgNQAJgIAJAAQAHAAAKAEQAOAFAAAHQAAADgCACQgCACgDAAIgFgBQgLgHgIAAQgFAAgFAGIgJAKQgRAWAAAaQAAAOAEAFQAFAGAMAAQANAAAJgIQAKgJAEgQQgUABgNAGIgEACQgDAAgCgDQgCgCAAgDQAAgEAEgDQAOgIAoAAQACAAACABQADABAAAEQAAAFgFABQgEAXgPANQgOAOgTAAQgRAAgKgKg");
	this.shape_13.setTransform(-57.1,-42);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAUA3IgDgQIgBgSIAAgGIAAgGQAAgNgHABQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAPIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_14.setTransform(38.4,-17.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_15.setTransform(30.2,-15.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAQAjQgJAFgLgBQgJAAgHgEQgHgEgBgKQgDgTAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgEIAAgOIAAgOQAAgPABgMQABgHAGAAQADABADACQACACAAACIgCAcIAAAPIAAAQIABAFIAAAFQAAADgCACQgCACgDAAQgGAAgCgHg");
	this.shape_16.setTransform(22.4,-15.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_17.setTransform(14.4,-15.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_18.setTransform(6.8,-15.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgZAfQgLgJABgQQgBgSAKgNQAKgOAQAAQALAAAIAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAGADAHAAQAFAAAHgCQAJgCADgDQACgFACAAQAEAAACACQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_19.setTransform(-5.5,-15.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAUA3IgDgQIgBgSIAAgGIAAgGQAAgNgHABQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAPIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_20.setTransform(-14,-17.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADgBIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCQAIAAACACQAFABAAAFQAAAEgCACQgCABgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_21.setTransform(-22,-16.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0000FF").s().p("AgZA5QgJgCAAgGQAAgGAGAAIAJABQAGABAIAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKgBgNQAAgUAMgMQALgMATAAQAIAAAEACQAEABADAEQAIAAAAAIIgBAOIgCAOIgCAYQAAAOgDAKQgEAMgHAFQgIAHgQAAQgKAAgHgBgAgMgkQgIAJABANQAAALADAEQAFAFAIAAQAGAAAHgHQAGgIABgHIADgZIgFgDQgDgCgEAAQgNAAgHAKg");
	this.shape_22.setTransform(-34,-13.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000FF").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgHQAAgDADgBQACgCADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAPQAAAEgCACQgCABgDAAQgGAAgBgGg");
	this.shape_23.setTransform(-41.7,-15.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgDQACgCADAAQACAAACACQACADAAADIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_24.setTransform(-47.7,-17.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AgZAyQgLgKAAgRQAAgTALgLQAKgMAQAAQAIAAAFACIAHAGIACgqQABgGAGAAQAGAAAAAHIgCAtIgBAVQAAAYACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgEgBgDgGQgFAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAHgBAPQAAAKAHAGQAHAHAJAAQAFAAAEgCIAIgHIACgCIAAgMIAAgJIAAgIQgCgGgFgCQgEgDgHAAQgLgBgHAHg");
	this.shape_25.setTransform(-54.4,-17.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0000FF").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgDQACgCADAAQACAAACACQACADAAADIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_26.setTransform(-60.7,-17.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0000FF").s().p("AgcAiIAAgzIABgHIAAgIQAAgHAHAAQAGAAABAMQANgNARAAQAGAAADAEQACAFAAAIIAAAGQAAAJgGAAQgHAAAAgHIAAgFIAAgHQgMACgGAFQgHAFgEAJIABAoQAAAHgIAAQgGAAgBgHg");
	this.shape_27.setTransform(-66.3,-15.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgTAoQgMgDAAgIQAAgDADgCQACgCACAAQADAAAEADQABACAHABIAIABQAFAAAFgBQAGgCAAgFQAAgKgOgEIgHgCQgJgCgEgCQgGgDAAgJQAAgPAPgGIAMgFIAPgFIAGgBQADAAACACQACACAAAEIABAFIABAHQAAADgCACQgCACgDAAQgFAAgBgDIgCgHIgRAEQgKAFAAAHIADACQAQADAJAEQAMAHgBAPQABAMgLAGQgJAFgLAAQgKAAgIgEg");
	this.shape_28.setTransform(62.5,7.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgYAfQgLgIAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAJAFAAALQAAAHgJAGIgPAHIgbAOQAEAFAGAEQAGADAIAAQAFAAAGgCQAJgCACgFQADgDACAAQADAAADACQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgJAAgGAHg");
	this.shape_29.setTransform(55.1,7.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHAiIgLgeIgNggIgBgEQAAgDACgCQACgCADAAQAFAAACAEIASAzIANghIAGgRQADgFAEAAQADAAACACQACADAAADQAAACgMAdIgPAhQAAAHgGAAQgFAAgCgGg");
	this.shape_30.setTransform(47.3,7.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_31.setTransform(39.7,7.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAFAVIgEgRIgBgQIgGAOIgLAeIgCAEQgDAEgFAAQgFAAgFgVIgGgeIgCgLIAAgLQAAgDACgCQACgCADAAQAGAAABAGIACALIABAKIAEAgQAIgVAIgeQADgIAFAAQAGAAACAJIAFAaIAFAcIAFgUIAKgmQABgFAFAAQADAAACACQACACAAADIAAADIgPA1QgCAHgFAHQgDAEgEAAQgIAAgEgUg");
	this.shape_32.setTransform(30.8,7.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgZAfQgLgIABgRQgBgSAJgNQALgOAQAAQAMAAAHAEQAKAFgBALQABAHgJAGIgPAHIgbAOQAEAFAGAEQAHADAGAAQAGAAAHgCQAIgCADgFQACgDACAAQAEAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_33.setTransform(17.2,7.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAUA4IgDgSIgBgRIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAARIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAANIABANIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_34.setTransform(8.7,5.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgBQgHgCAAgGQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADAAQAGABABAKIAAAHIAAAEIAAAFIAKgBIAKAAQAFACAAAFQAAADgCACQgCACgEABIgDAAIgEAAIgKABIACApIAAAEIAAADQAAAQgIAAQgCAAgCgBg");
	this.shape_35.setTransform(0.7,6.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0000FF").s().p("AgYA5QgKgCAAgGQAAgGAGAAIAJABQAHABAHAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKAAgNQAAgUALgMQAMgMASAAQAIAAAEACQAEABADAEQAIAAAAAIIgCAOIgBAOIgCAYQgBAOgCAKQgEAMgHAFQgJAHgPAAQgKAAgGgBgAgMgkQgIAJAAANQAAALAFAEQADAFAJAAQAGAAAHgHQAGgIABgHIAEgZIgHgDQgCgCgEAAQgNAAgHAKg");
	this.shape_36.setTransform(-11.3,9.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0000FF").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAJQgHAKgEAMIAAAHIgBAHIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgVIAAgGIgBgHQAAgEADgCQACgCADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAIIAAAFIACAQIABAQQAAACgCACQgCACgDABQgGAAgBgHg");
	this.shape_37.setTransform(-19,7.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0000FF").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_38.setTransform(-25,5.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0000FF").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_39.setTransform(-33,7.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0000FF").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_40.setTransform(-44.6,7.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0000FF").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_41.setTransform(-52.5,5.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0000FF").s().p("AATA4QgEgHgHgKIgMgSIgNAJIgBAWQAAAEgCACQgCACgDAAQgIAAAAgKIACgSIAAgTIABgYIAAgZIAAgIIgBgIQAAgDACgCQACgCADAAQAEAAABACQACACAAADIABAIIAAAIIgBAYIAAAYQALgHAHgJIARgQQACgDADAAQADAAACADQADACAAADQgBACgCADQgIAKgOALIAQAWQAMAPAAAFQgBADgCACQgDACgDAAQgEAAgCgEg");
	this.shape_42.setTransform(-58.3,5.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0000FF").s().p("AgUAoQgLgDAAgIQAAgDACgCQACgCAEAAQACAAADADQACACAGABIAIABQAGAAAEgBQAHgCAAgFQAAgKgNgEIgHgCQgKgCgEgCQgGgDAAgJQAAgPAOgGIAOgFIANgFIAHgBQADAAACACQACACAAAEIABAFIABAHQAAADgCACQgCACgEAAQgDAAgCgDIgCgHIgRAEQgLAFAAAHIAFACQAQADAHAEQANAHAAAPQgBAMgJAGQgKAFgMAAQgJAAgJgEg");
	this.shape_43.setTransform(-66.7,7.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgIA1IACgbIABgaIAAgaIAAgaQAAgIAHAAQAGAAAAAIIAAAaIAAAaIgCAkIAAARQgBAIgFAAQgIAAAAgIg");
	this.shape_44.setTransform(77.3,28.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgHA1IAAgbIABgaIAAgaIABgaQAAgIAGAAQAIAAAAAIIgBAaIAAAaIgBAkIgBARQAAAIgGAAQgHAAAAgIg");
	this.shape_45.setTransform(73.2,28.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgEACgCQACgCADAAQACAAACACQACACAAAEIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_46.setTransform(69.2,28.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAUA3IgDgRIgBgRIAAgGIAAgGQAAgMgHAAQgJgBgHAIIgKAQQAAAdgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAPIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAGAAAMIABAOIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_47.setTransform(62.7,28.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgYAgQgMgKAAgQQABgSAIgNQALgOAQAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbAOQAEAFAGADQAHADAHAAQAEAAAIgCQAIgBACgFQADgEADABQACgBACACQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgKAAQgQAAgKgIgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_48.setTransform(49.9,30.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAUA3IgDgRIgBgRIAAgGIAAgGQAAgMgHAAQgJgBgHAIIgKAQQAAAdgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAPIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAGAAAMIABAOIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_49.setTransform(41.4,28.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgrIgQgBQgHgBAAgGQAAgDACgCQACgDADAAIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAAEgCACQgCABgEAAIgDAAIgEAAIgKABIACArIAAADIAAAEQAAAPgIAAQgCAAgCgBg");
	this.shape_50.setTransform(33.4,29.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAJQgHAJgEANIAAAIIgBAHIABAGIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgGIABgVIABgUIAAgIIgBgHQAAgCADgCQACgCADAAQAGgBABAKIAAAJQANgRAMAAQALAAAFALQADAGAAAOIAAAHIAAAGIACAQIABAPQAAADgCADQgCABgDAAQgGAAgBgGg");
	this.shape_51.setTransform(21.6,30.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAEAVIgDgRIgBgPIgGAMIgLAfIgCAEQgDAFgEAAQgGAAgFgXIgGgdIgBgLIgBgLQAAgDACgCQACgCADAAQAFAAACAGIABAKIACAMIAEAfQAIgWAJgdQACgIAFAAQAGAAACAJIAEAaIAGAdIAFgVIAJgmQACgFAFAAQADAAADACQABACABADIgBAEIgPA1QgCAGgFAHQgCAEgFAAQgIAAgFgUg");
	this.shape_52.setTransform(12.5,30.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgZAyQgLgLAAgQQAAgTALgLQALgMAPAAQAJAAAEACIAHAGIACgqQABgGAGAAQAHAAgBAHIgDAtIAAAVQAAAYACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgBABAAAAQgBAAAAAAQgBABAAAAQgFAAgCgHQgFAEgGACQgGACgFAAQgPAAgKgKgAgRABQgFAHAAAPQAAAKAGAGQAHAHAJAAQAFAAAEgCIAIgHIADgCIAAgMIAAgJIAAgIQgDgGgFgCQgFgDgGgBQgLAAgHAHg");
	this.shape_53.setTransform(-5,28.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0000FF").s().p("AgZA5QgJgCAAgGQAAgGAHAAIAJABQAFABAIAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKgBgNQABgUAKgMQANgMASAAQAHAAAFACQAEABADAEQAIAAAAAIIgBAOIgCAOIgCAYQAAAOgDAKQgEAMgHAFQgIAHgQAAQgKAAgHgBgAgMgkQgIAJABANQAAALADAEQAFAFAIAAQAGAAAHgHQAGgIABgHIADgZIgFgDQgEgCgDAAQgNAAgHAKg");
	this.shape_54.setTransform(-17.9,32.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0000FF").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAJQgHAJgEANIAAAIIgBAHIABAGIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgGIABgVIABgUIAAgIIgBgHQAAgCADgCQACgCADAAQAGgBABAKIAAAJQANgRAMAAQALAAAFALQADAGAAAOIAAAHIAAAGIACAQIABAPQAAADgCADQgCABgDAAQgGAAgBgGg");
	this.shape_55.setTransform(-25.6,30.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0000FF").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgEACgCQACgCADAAQACAAACACQACACAAAEIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_56.setTransform(-31.6,28.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0000FF").s().p("AgcA7QgCgBAAgEIABgdIAAgdIgBgdIgCgPQAAgFACgDQADgEAEAAQADgBACACQABADAAADIAAACIAAAEQAGgEAGgCQAFgCAFAAQAPAAAHAMQAGAMAAAQQAAAPgJAKQgJAMgPgBQgGABgJgDIAAAjQAAAEgCABQgCADgDAAQgEAAgCgDgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgKQAAgNgDgGQgDgHgHAAQgGAAgFADg");
	this.shape_57.setTransform(-37.8,32.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0000FF").s().p("AAQAjQgJAFgLgBQgJAAgHgDQgHgFgBgKQgDgSAAgPQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgEIAAgOIAAgOQAAgQABgLQABgHAGAAQADAAADADQACACAAACIgCAcIAAAPIAAAQIABAFIAAAFQAAADgCACQgCACgDAAQgGAAgCgHg");
	this.shape_58.setTransform(-57.4,30.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0000FF").s().p("AgVA3QgDADgDAAQgDAAgCgBQgCgCAAgDIAAgGIAAgGIAAgXIgBgWIABgUIAAgVQAAgEABgEQADgEAEAAQAGAAAAAGIAAADIgBADIAAAQIAAATQAGgEAGgCQAGgDADAAQAQAAAKAMQAJALAAAQQABARgLAMQgLALgPAAQgLAAgJgEgAgKgCIgLAGIAAAMIAAAMIAAAMIAKAEIAKABQAJAAAIgHQAGgIAAgLQAAgLgGgHQgFgHgLAAQgFAAgFAEg");
	this.shape_59.setTransform(-65.5,28.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0000FF").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_60.setTransform(-44.6,7.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_61.setTransform(14.4,-15.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABANIAAAQIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_62.setTransform(70.5,51.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_63.setTransform(62.3,53.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_64.setTransform(54.5,53.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgZAfQgLgIABgRQgBgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBALQABAHgJAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAFAAAHgCQAJgDADgDQACgEACgBQADABADACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgGAHgDANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_65.setTransform(46.8,53.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgWA3QgCADgDAAQgDAAgCgBQgCgCAAgDIABgGIAAgGIgBgXIAAgWIAAgUIAAgVQAAgEACgEQACgEAFAAQAFAAAAAGIgBADIAAADIAAAQIgBATQAHgEAGgCQAFgDAFAAQAPAAAKAMQAKALgBAQQAAARgLAMQgKALgPAAQgLAAgKgEgAgLgCIgKAGIgBAMIAAAMIABAMIAJAEIALABQAKAAAGgHQAHgIAAgLQAAgLgGgHQgGgHgJAAQgFAAgHAEg");
	this.shape_66.setTransform(38.3,51.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgYAfQgMgIAAgRQABgSAIgNQAKgOARAAQALAAAJAEQAIAFABALQgBAHgHAGIgQAHIgbANQAEAHAGACQAGAEAIAAQAEAAAHgCQAJgDACgDQADgEADgBQACABACACQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_67.setTransform(25.2,53.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABANIAAAQIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_68.setTransform(16.7,51.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgCQgHAAAAgHQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADgBQAGAAABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKACIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_69.setTransform(8.8,52.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAKQgHAJgEAMIAAAHIgBAHIABAHIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgHIABgUIABgVIAAgGIgBgHQAAgDADgDQACgBADgBQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAACgCACQgCACgDAAQgGABgBgHg");
	this.shape_70.setTransform(-3,53.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0000FF").s().p("AgZA5QgJgCAAgGQAAgGAHAAIAJABQAFABAIAAQANAAAFgOQAEgJAAgSQgEAHgFAEQgFAEgHAAQgNAAgIgJQgJgKAAgNQAAgUALgMQAMgMAUAAQAGAAAFACQAEABADAEQAIAAAAAIIgBAOIgDAOIgBAYQAAAOgDAKQgDAMgIAFQgIAHgQAAQgKAAgHgBgAgNgkQgGAJAAANQAAALADAEQAFAFAHAAQAHAAAHgHQAHgIABgHIACgZIgGgDQgDgCgDAAQgNAAgIAKg");
	this.shape_71.setTransform(-23.5,55.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0000FF").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAKQgHAJgEAMIAAAHIgBAHIABAHIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgHIABgUIABgVIAAgGIgBgHQAAgDADgDQACgBADgBQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAACgCACQgCACgDAAQgGABgBgHg");
	this.shape_72.setTransform(-31.2,53.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0000FF").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAKQgHAJgEAMIAAAHIgBAHIABAHIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgHIABgUIABgVIAAgGIgBgHQAAgDADgDQACgBADgBQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAACgCACQgCACgDAAQgGABgBgHg");
	this.shape_73.setTransform(-43.2,53.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0000FF").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAKQgHAJgEAMIAAAHIgBAHIABAHIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgHIABgUIABgVIAAgGIgBgHQAAgDADgDQACgBADgBQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAACgCACQgCACgDAAQgGABgBgHg");
	this.shape_74.setTransform(-51.1,53.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0000FF").s().p("AAQAjQgJAEgLABQgJAAgHgFQgHgFgBgIQgDgTAAgPQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgNQAAgRABgLQABgGAGAAQADAAADABQACACAAAEIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_75.setTransform(-59,53.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0000FF").s().p("AgcAhIAAgyIABgHIAAgHQAAgIAHAAQAGAAABAMQANgNARAAQAGAAADAEQACAFAAAJIAAAFQAAAJgGAAQgHAAAAgHIAAgGIAAgGQgMACgGAFQgHAFgEAKIABAmQAAAIgIAAQgGAAgBgIg");
	this.shape_76.setTransform(-66.3,53.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0000FF").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_77.setTransform(-52.5,5.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_78.setTransform(14.4,-15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:14.4,y:-15.2}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},22).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:14.4,y:-15.2}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{x:-52.5}},{t:this.shape_40,p:{x:-44.6}},{t:this.shape_39,p:{x:-33,y:7.6}},{t:this.shape_38,p:{x:-25,y:5.8}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_61,p:{x:14.4,y:-15.2}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{x:-52.5}},{t:this.shape_60},{t:this.shape_40,p:{x:-33}},{t:this.shape_38,p:{x:-25,y:5.8}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_59},{t:this.shape_58},{t:this.shape_39,p:{x:-47.6,y:30.5}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_17,p:{x:3.2,y:30.6}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_78},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_43},{t:this.shape_42},{t:this.shape_77},{t:this.shape_60},{t:this.shape_40,p:{x:-33}},{t:this.shape_41,p:{x:-25}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_59},{t:this.shape_58},{t:this.shape_39,p:{x:-47.6,y:30.5}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_61,p:{x:3.2,y:30.6}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_38,p:{x:-37.2,y:51.6}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_17,p:{x:-11.2,y:53.5}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},15).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.4,-55.1,145.9,24.9);


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


(lib.PhrasesLesson = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ParticipialPhrases();
	this.instance.parent = this;
	this.instance.setTransform(5.2,-2.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.25,scaleY:1.25,x:-4.6,alpha:1},7).wait(47).to({scaleX:0.91,scaleY:0.91,x:-3.7,y:-121.9},8).wait(544));

	// Layer 4
	this.instance_1 = new lib.InfinitivePhrases();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.7,-3.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(62).to({_off:false},0).to({scaleX:1.74,scaleY:1.74,x:10.3,y:-20.2,alpha:1},9).wait(94).to({scaleX:1,scaleY:1,x:6.7,y:0.3,alpha:0},9).to({_off:true},1).wait(318).to({_off:false,scaleX:0.93,scaleY:0.93,x:8.3,y:-36.5},0).to({x:7.6,y:-54.4,alpha:1},9).wait(104));

	// Layer 5
	this.instance_2 = new lib.GerundPhrases();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.3,7.7,0.842,0.842);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(174).to({_off:false},0).to({scaleX:1.64,scaleY:1.64,alpha:1},9).wait(73).to({scaleX:0.84,scaleY:0.84,alpha:0},9).to({_off:true},1).wait(227).to({_off:false,scaleX:0.85,scaleY:0.85,x:-104.1,y:96.5},0).to({x:-104.9,y:75.6,alpha:1},9).wait(104));

	// Layer 3
	this.instance_3 = new lib.ParticialPhrases();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1.3,13.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(265).to({_off:false},0).to({scaleX:1.57,scaleY:1.57,y:-33.1,alpha:1},11).wait(199).to({scaleX:1,scaleY:1,y:13.5,alpha:0},10).to({_off:true},1).wait(7).to({_off:false,scaleX:0.87,scaleY:0.87,x:90.9,y:78.6},0).to({x:90.2,y:60.6,alpha:1},9).wait(104));

	// Layer 2
	this.instance_4 = new lib.PartitipialPronunciation();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-4.5,117.5,1.254,1.254);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(357).to({_off:false},0).to({_off:true},118).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.4,-32.9,333.3,53.4);


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
		
		 window.open ("intro_Scene6.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("intro_Scene4c.html","_self");
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
(lib.intro_Scene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene5:0,scene5_repeat:480});

	// timeline functions:
	this.frame_3 = function() {
		playSound("verbalphrases");
	}
	this.frame_69 = function() {
		playSound("infinitivephrases");
	}
	this.frame_179 = function() {
		playSound("gerundphrases");
	}
	this.frame_280 = function() {
		playSound("participialphrases");
	}
	this.frame_362 = function() {
		playSound("notethedifference");
	}
	this.frame_399 = function() {
		playSound("participle");
	}
	this.frame_411 = function() {
		playSound("participial");
	}
	this.frame_424 = function() {
		playSound("participle");
	}
	this.frame_435 = function() {
		playSound("participial");
	}
	this.frame_479 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_488 = function() {
		this.gotoAndPlay("scene5_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(66).call(this.frame_69).wait(110).call(this.frame_179).wait(101).call(this.frame_280).wait(82).call(this.frame_362).wait(37).call(this.frame_399).wait(12).call(this.frame_411).wait(13).call(this.frame_424).wait(11).call(this.frame_435).wait(44).call(this.frame_479).wait(9).call(this.frame_488).wait(1));

	// Layer 9
	this.instance = new lib.VERBAL2();
	this.instance.parent = this;
	this.instance.setTransform(262.2,21,0.526,0.526);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(489));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EghPAX4MAAAgvvMBCfAAAMAAAAvvg");
	mask.setTransform(269.3,194.3);

	// content
	this.instance_1 = new lib.PhrasesLesson();
	this.instance_1.parent = this;
	this.instance_1.setTransform(264.5,194);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(489));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF99FF").ss(3,1,1).p("EAhQAX4MhCfAAAMAAAgvvMBCfAAAg");
	this.shape.setTransform(269.3,194.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D5FFFF","#FFFFFF"],[0,1],0,-120.9,0,121).s().p("EghPAX4MAAAgvvMBCfAAAMAAAAvvg");
	this.shape_1.setTransform(269.3,194.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(489));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: '2F12975F02B82F43B6DEC839D96E0F74',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmIntro.mp3", id:"bgmIntro"},
		{src:"sounds/gerundphrases.mp3", id:"gerundphrases"},
		{src:"sounds/infinitivephrases.mp3", id:"infinitivephrases"},
		{src:"sounds/notethedifference.mp3", id:"notethedifference"},
		{src:"sounds/participial.mp3", id:"participial"},
		{src:"sounds/participialphrases.mp3", id:"participialphrases"},
		{src:"sounds/participle.mp3", id:"participle"},
		{src:"sounds/verbalphrases.mp3", id:"verbalphrases"}
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
an.compositions['2F12975F02B82F43B6DEC839D96E0F74'] = {
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