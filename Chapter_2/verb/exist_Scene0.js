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
	this.shape_5.graphics.f("#FFFFFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAAABtQAuAAAfggQAfggAAgsQAAgpgbgeIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfQgfAgAAAsQAAApAaAeIAFAFIAFAFQAeAbAoAAgAhGBSICXiYQAbAeAAApQAAAsgfAgQgfAgguAAQgoAAgegbgAAuAaQAHgCACgGQAJgJAAgMQAAgMgJgJQgCgFgHgDIAAA6IAAAAgAhGBSIAAAAgAhLBNIgFgFQgageAAgpQAAgsAfggQAggfArAAQAkAAAbAUQAHAEAHAHIAEAFIiXCYIgFgFgAAuAagAAuggQAHADACAFQAJAJAAAMQAAAMgJAJQgCAGgHACgABAgDIAAAAgABRhGIAAAAg");
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
	this.shape_9.graphics.f("#FFFFFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAhGBSQAeAbAoAAQAuAAAfggQAfggAAgsQAAgpgbgeQAbAeAAApQAAAsgfAgQgfAgguAAQgoAAgegbICXiYIiXCYgAhqABQAAApAaAeIAFAFIAFAFIgFgFIgFgFQgageAAgpQAAgsAfggQAggfArAAQAkAAAbAUQAHAEAHAHIAEAFIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfQgfAgAAAsIAAAAgAAuAaQAHgCACgGQAJgJAAgMQAAgMgJgJQgCgFgHgDIAAA6IAAAAgAAuAagAAuggQAHADACAFQAJAJAAAMQAAAMgJAJQgCAGgHACgABAgDIAAAAg");
	this.shape_9.setTransform(15,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_8},{t:this.shape_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,30.1);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgqBHQgKgJAAgeIACgkIABglIgBgKIAAgKQgBgOANAAQAEAAAEACIAUgDIASgCQAXAAAOAFQAJAEAAAIQgBAFgDAEQgEAEgFAAIgEAAQgPgFgOAAIgOABIgRAEIgBAlIAkgEIAVgCQAGAAAEAEQAEADAAAGQAAAKgMABIgWACIgmAEIgBATQAAASACACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAEADQAFAEAAAGQAAALgLACQgKABgcAAQgeAAgJgIg");
	this.shape.setTransform(51,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgpA5QgNgPAAgUQAAgeAbggQAXgcAXAAIAIABIAFAAQAFgEAFAAQAKAAACALQABAIAAAKQABAFgDAEQgEAFgGAAQgJAAgEgJQgCgEgBgBQgCgBgGAAQgLAAgPATQgVAYAAAWQAAAKAGAIQAHAHAJAAQAJAAAJgFIAPgJQAGgFAFAAQAFAAAEAEQADAEAAAFQAAAFgEAEQgaAWgaAAQgUAAgPgPg");
	this.shape_1.setTransform(39,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhBBHQgDgDAAgGIAAgLIABgLIAAgQIABgRIgBgRIAAgRIgBgRIgBgQQAAgGAFgEQAFgFAGAAQAHAAAIAMQApA8ApAlIABgOQAAgtgCgQIgBgKIgBgKQAAgNAOAAQAPAAAAAvIgBAPIAAA5IgCAPQgBAMgMAAQgGAAgIgHQglgggrg6IgBAdIAAAWIABAWQAAAcgNAAQgHAAgFgFg");
	this.shape_2.setTransform(25.3,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgqBHQgKgJAAgeIABgkIACglIgBgKIgBgKQAAgOANAAQAFAAADACIAVgDIARgCQAXAAAOAFQAJAEAAAIQAAAFgEAEQgEAEgFAAIgEAAQgPgFgOAAIgOABIgRAEIgBAlIAkgEIAVgCQAGAAAEAEQAEADAAAGQAAAKgMABIgWACIgmAEIgBATQAAASACACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAEADQAFAEAAAGQAAALgLACQgKABgcAAQgeAAgJgIg");
	this.shape_3.setTransform(11.9,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_4.setTransform(-0.8,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgxA8QgMgIABgMQAAgGADgDQAEgEAFAAQAJAAAEAIQAFAMATAAQAPAAAPgHQAPgHAAgJQABgMgLgDQgGgDgUAAQgQgBgMgFQgSgHAAgPQABgSASgPQAUgPAWAAQAJAAANAEQAQAGAAAGQAAAFgCAEQgFAEgFAAIgNgCIgNgCQgMAAgKAGQgLAGAAAHQAAADADACQADADAIABIAWABQAUABANAKQANALgBATQAAAYgbANQgUAJgaAAQgXAAgOgLg");
	this.shape_5.setTransform(-14,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASAAIgBgrQAAgYADgXIgVABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgYgDQgBARAAAbIAAArIAZgBQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_6.setTransform(-25.9,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAbA1IgMgSIgMgQIgcAgIgRASQgEAEgFAAQgGAAgEgEQgEgDAAgGQAAgEAEgEIAQgSIAhgjIgUgYIgKgNIgMgNQgFgEAAgGQAAgFAEgEQADgDAGAAQAFgBAIAIQAGAFAEAFIAMAPIAQAVIAXggQASgVAHAAQAFAAAEADQAEAEAAAFQAAAEgEAEIgSAYQgHAKgQATIATAbQAMAQAJAKQAEAEAAAEQAAAFgEAEQgEAEgGAAQgJAAgPgVg");
	this.shape_7.setTransform(-38.1,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgqBHQgLgJAAgeIACgkIACglIgBgKIgBgKQABgOANAAQAEAAADACIAVgDIARgCQAXAAAOAFQAJAEAAAIQAAAFgDAEQgFAEgFAAIgEAAQgPgFgOAAIgOABIgRAEIgBAlIAjgEIAXgCQAFAAAEAEQAEADAAAGQAAAKgMABIgWACIgnAEIAAATQgBASADACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAFADQADAEAAAGQAAALgKACQgJABgcAAQgfAAgJgIg");
	this.shape_8.setTransform(-50.4,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-15.2,148,30.5);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhBBHQgDgDAAgGIABgLIAAgLIABgQIAAgRIAAgRIAAgRIgBgRIgCgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIAAgOIgBg9IgBgKIAAgKQAAgNANAAQAPAAAAAvIgBAPIAAA5IgBAPQgCAMgMAAQgHAAgHgHQgkgggsg6IgBAdIABAWIAAAWQAAAcgOAAQgGAAgFgFg");
	this.shape.setTransform(32.2,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgxA5QgUgQAAgbQAAgfAUgaQAWgdAgAAQAhAAAQAPQAQAOAAAfQAAAegSAaQgVAdghAAQgbAAgUgQgAgdgbQgOATAAAWQAAAPAMAJQAMAKARAAQAUAAANgUQANgTAAgVQAAgUgJgHQgIgIgWAAQgTAAgPAUg");
	this.shape_1.setTransform(16.9,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASAAIgBgrQAAgYACgXIgUABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgZgDQgBARAAAbIAAArIAZgBQAGAAAEADQADAEAAAFQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_2.setTransform(4,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_3.setTransform(-7.6,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgpA5QgNgPAAgUQAAgeAbggQAXgcAXAAIAIABIAFAAQAEgEAGAAQAKAAACALQACAIAAAKQAAAFgDAEQgEAFgHAAQgIAAgEgJQgCgEgBgBQgCgBgGAAQgMAAgOATQgVAYgBAWQABAKAGAIQAHAHAJAAQAJAAAJgFIAPgJQAHgFAEAAQAFAAAEAEQAEAEgBAFQAAAFgEAEQgaAWgaAAQgVAAgOgPg");
	this.shape_4.setTransform(-20,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAgA0QgEgKgEgOIgWACIgWABIgPAgQgEAGgHAAQgFAAgEgDQgEgEAAgFQAAgFANgcQgBgCAAgCQAAgFAJgCQANgXAQgYQAXgjAFAAQAKAAAEAMIAFAeIAOA8IAFANQADAHAAAFQAAAEgEAFQgEADgFAAQgHAAgIgSgAgGAJIAMgCIANgBIgGgeIgTAhg");
	this.shape_5.setTransform(-33.1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-15.2,148,30.5);


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


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj+CqIAAlTIH9AAIAAFTg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		playSound("Flying");
	}
	this.frame_31 = function() {
		playSound("ZoomingSound");
	}
	this.frame_87 = function() {
		playSound("Gm_Guitar_Strumming");
	}
	this.frame_144 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(56).call(this.frame_87).wait(57).call(this.frame_144).wait(1));

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAXA1IgDgYQgCgNAAgKIABgKIAAgKIAAgEIABgFQAAgKgFAAQgKAAgIANQgJANgGARIgBAKIAAALIgBAKIgBAKQAAAHgEAEQgFAEgGAAQgHAAgFgEQgEgEAAgHIgBgKIgBgKIACgfIACgdIgBgLIAAgKQAAgHAFgEQAEgEAHAAQAPAAABASIAAABQAQgRASAAQAVABAIARQAGAMAAAYIAAAJIAAAGQAAAJACANQADAOAAAKQAAAFgFAFQgEAEgHAAQgOAAgCgNg");
	this.shape.setTransform(129.5,-225.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgkAwQgRgQgBgaQgBgYAPgUQARgXAeAAQAXAAANASQAMAQAAAZQAAAZgOATQgQAUgZAAQgVAAgPgOgAgQgSQgGAKAAAOQAAAOAHAHQAGAGAJAAQAJAAAHgHQAIgIABgNQABgkgVAAQgNAAgIANg");
	this.shape_1.setTransform(117,-225.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgOBSQgEgEAAgGIgBgVIAAgVIABgZIABgZQAAgGAFgEQAEgFAHAAQAGAAAEAFQAFAEAAAGIgBAZIgCAZIABAVIAAAVQAAAGgEAEQgFAFgFAAQgHAAgFgFgAgKg5QgFgFAAgHQAAgHAFgFQAFgFAHAAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAQgHAAgFgFg");
	this.shape_2.setTransform(108.1,-228.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgJBPQgFgEAAgHIAAgLIAAgNIgCg6IgVgBQgOgCAAgOQAAgFAEgFQAEgFAHAAIATACIAAgMIgBgMQAAgGAFgEQAFgEAGAAQAQAAAAAcIAAAKIALgCQANAAAFACQAJADAAALQAAAHgEAEQgFAEgGAAIgGAAIgGAAIgLABIADA7IAAAFIAAAHQAAAagRAAQgFAAgEgEg");
	this.shape_3.setTransform(99.1,-227.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgjAyQgSgPAAgZQAAgVAQgYQATgcAXAAQALAAAQAGQATAIAAAKQAAAGgDAEQgFAFgGAAQgFAAgHgFQgHgGgNAAQgIAAgKASQgKAQAAALQAAAMAJAHQAIAGAMAAQAIAAALgFQALgGADAAQAGAAAEAEQAFAFAAAFQAAAJgUAJQgRAIgLAAQgYAAgRgOg");
	this.shape_4.setTransform(87.4,-225.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAoBBQgGgOgFgRIgbACQgRABgKACQgFANgNAZQgFAIgJAAQgGAAgFgEQgFgFAAgGQAAgGARgiIgCgGQABgGAKgDQAQgbAUgeQAcgrAGAAQANAAAEAPIAHAlIARBKIAGAPQAEAKAAAEQAAAHgFAEQgFAFgGAAQgJgBgJgUgAgIALQAFgCAKAAIAQgBIgIgmIgXApg");
	this.shape_5.setTransform(73,-228.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAfBVQgHAGgJABIgQABQgZAAgRgQQgRgRAAgZQAAgfARgSQARgSAbgBQAJAAAGACQAHACAFAEQABgnACgOQACgOANAAQAHAAAEAFQAEADAAAHQAAAQgCAiQgDAfAAARQAAApADANIAAAEQAAAGgFAEQgEAEgGAAQgJAAgEgIgAgXAFQgIAKAAAUQAAALAJAKQAJAIAMAAQAIAAAFgCIAKgHIAEgEIAAgpQgEgIgGgCQgGgDgIgBQgQAAgJAJg");
	this.shape_6.setTransform(47.5,-228.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAXA1IgDgYQgCgNAAgKIABgKIAAgKIAAgEIABgFQAAgKgFAAQgKAAgIANQgJANgGARIgBAKIAAALIgBAKIgBAKQAAAHgEAEQgFAEgGAAQgHAAgFgEQgEgEAAgHIgBgKIgBgKIACgfIACgdIgBgLIAAgKQAAgHAFgEQAEgEAHAAQAPAAABASIAAABQAQgRASAAQAVABAIARQAGAMAAAYIAAAJIAAAGQAAAJACANQADAOAAAKQAAAFgFAFQgEAEgHAAQgOAAgCgNg");
	this.shape_7.setTransform(34.9,-225.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAbA0IgSAIQgIACgFAAQgbAAgOgOQgNgPAAgdQAAgaAUgUQAUgTAbAAQALAAAOAGQARAHAAAKQAAAEgCADIgCALIgBAQQAAAUADAKIAGAMIAEALQAAAGgEAEQgFADgGAAQgFAAgMgKgAgPgWQgMAMAAAPQAAAPAGAIQAFAHALAAQAGAAAGgCQAHgCAFgFQgDgaAAgNIAAgIIACgLIgEgCIgDAAQgPAAgLAMg");
	this.shape_8.setTransform(22.3,-225.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgmAxQgTgOAAgaQAAgcAPgUQARgWAbAAQAUAAANAGQARAJAAASQAAAMgOAKQgGAEgUAIIglARQAGAFAIADQAHADAKAAQAPAAAKgGQAKgFAFAAQAMAAAAALQAAANgTAIQgQAHgRAAQgbAAgRgNgAgPgaQgHAHgFAOIAagLQAOgHAJgGQgIgEgMAAQgKAAgHAHg");
	this.shape_9.setTransform(-0.9,-225.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgjAyQgSgPAAgZQAAgVAQgYQATgcAXAAQALAAAQAGQATAIAAAKQAAAGgDAEQgFAFgGAAQgFAAgHgFQgHgGgNAAQgIAAgKASQgKAQAAALQAAAMAJAHQAIAGAMAAQAIAAALgFQALgGADAAQAGAAAEAEQAFAFAAAFQAAAJgUAJQgRAIgLAAQgYAAgRgOg");
	this.shape_10.setTransform(-13.5,-225.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAXA1IgDgYQgCgNAAgKIABgKIAAgKIAAgEIABgFQAAgKgFAAQgKAAgIANQgJANgGARIgBAKIAAALIgBAKIgBAKQAAAHgEAEQgFAEgGAAQgHAAgFgEQgEgEAAgHIgBgKIgBgKIACgfIACgdIgBgLIAAgKQAAgHAFgEQAEgEAHAAQAPAAABASIAAABQAQgRASAAQAVABAIARQAGAMAAAYIAAAJIAAAGQAAAJACANQADAOAAAKQAAAFgFAFQgEAEgHAAQgOAAgCgNg");
	this.shape_11.setTransform(-25.2,-225.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgmAxQgTgOAAgaQAAgcAPgUQARgWAbAAQAUAAANAGQARAJAAASQAAAMgOAKQgGAEgTAIIgmARQAGAFAIADQAHADAKAAQAOAAALgGQAJgFAGAAQAMAAAAALQAAANgTAIQgQAHgRAAQgbAAgRgNgAgPgaQgIAHgEAOIAagLQAOgHAJgGQgHgEgNAAQgJAAgIAHg");
	this.shape_12.setTransform(-38.1,-225.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgJBPQgFgEAAgHIAAgLIAAgNIgCg6IgVgBQgOgCAAgOQAAgFAEgFQAEgFAHAAIATACIAAgMIgBgMQAAgGAFgEQAFgEAGAAQAQAAAAAcIAAAKIALgCQANAAAFACQAJADAAALQAAAHgEAEQgFAEgGAAIgGAAIgGAAIgLABIADA7IAAAFIAAAHQAAAagRAAQgFAAgEgEg");
	this.shape_13.setTransform(-49.9,-227.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgfA7QgRgGAAgMQAAgMANAAQAFAAAKAEQAKACAFAAQAXABAAgKQAAgFgQgHQgXgLgGgEQgQgKAAgRQAAgWAYgIQAOgFAcAAQALAAAGADQAHADAAALQAAAVgLAAQgLAAgCgKIgKgBQgaABAAAHQAAAFAQAHQAWALAIAFQAQALAAAPQAAATgSALQgOAIgVAAQgPAAgMgFg");
	this.shape_14.setTransform(-61.2,-225.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgOBSQgEgEAAgGIgBgVIAAgVIABgZIABgZQAAgGAFgEQAEgFAHAAQAGAAAEAFQAFAEAAAGIgBAZIgCAZIABAVIAAAVQAAAGgEAEQgFAFgFAAQgHAAgFgFgAgKg5QgFgFAAgHQAAgHAFgFQAFgFAHAAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAQgHAAgFgFg");
	this.shape_15.setTransform(-69.7,-228.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AAgA8IghgoIgcAbIgKAIQgFAFgGAAQgGAAgFgEQgFgFABgGQAAgGAJgJIAOgMIAXgVIgOgRQgHgLgHgGQgGgFAAgGQAAgGAFgEQAEgFAGAAQAIAAAOAQIARAYIAUgQQAMgLAFgHQAFgHAIAAQAGAAAFAEQAEAEAAAGQAAAIgMALIgQAPIgSAQIAjApQAEAFAAAEQAAAGgFAFQgFAEgGAAQgGAAgFgFg");
	this.shape_16.setTransform(-80,-226.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("Ag0BXQgNgLAAglQAAgPADgdIACguIgBgMIgBgMQAAgRAPAAQAGAAAEADQANgDAMgCQAMgCAKAAQAcAAARAHQAKAEAAAKQAAAGgDAFQgFAFgHAAIgFgBQgSgFgRAAIgSACIgVAEIgBAtIArgEIAcgDQAHAAAFAFQAEAEAAAHQAAAMgOACIgbADIgwAEIgBAXQABAXACADQACABANAAIATAAIAWgBIAGAAIAHgBQAHAAAEAEQAGAEAAAIQAAAMgOADQgLACgjAAQglAAgLgKg");
	this.shape_17.setTransform(-93.8,-228.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgnALQgGgEAAgGQAAgGAGgEQAGgDAHAAIAagBIAbAAQAHAAAFACQAHAFAAAGQAAAMgRABIg3ABQgHAAgGgDg");
	this.shape_18.setTransform(-118.7,-226.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgfA7QgRgGAAgMQAAgMANAAQAFAAAKAEQAKACAFAAQAXABAAgKQAAgFgQgHQgXgLgGgEQgQgKAAgRQAAgWAYgIQAOgFAcAAQALAAAGADQAHADAAALQAAAVgLAAQgLAAgCgKIgKgBQgaABAAAHQAAAFAQAHQAWALAIAFQAQALAAAPQAAATgSALQgOAIgVAAQgPAAgMgFg");
	this.shape_19.setTransform(-141.6,-225.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AghBWQgEAEgGABQgGAAgFgFQgEgEAAgGIAAgIIABgJIAAiAQAAgHADgHQAFgIAIAAQAMAAAAANIAAAFIAAAEIAAAsQAIgFAIgCQAHgCAHAAQAaAAARATQAPARAAAaQAAAbgSASQgSATgaAAQgQAAgOgGgAgMgBQgIACgJAHIAAAwQAPAGALABQAOAAAJgKQAJgKAAgPQAAgPgHgJQgIgJgNAAQgFAAgIAEg");
	this.shape_20.setTransform(-154,-228.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgsA7QgEgEAAgGIAAhKIAAgKIABgLQAAgGADgEQAEgEAHgBQANAAACAOQATgPAZgBQAXAAAAAfIAAAHQgCARgOAAQgPAAAAgOIAAgMQgZAFgLAVIAAA5QAAAGgEAFQgEADgHAAQgHABgEgFg");
	this.shape_21.setTransform(-166.3,-225.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgmAxQgTgOAAgaQAAgcAPgUQARgWAcAAQATAAANAGQARAJAAASQAAAMgNAKQgHAEgTAIIglARQAFAFAHADQAJADAIAAQAQAAAKgGQAKgFAFAAQAMAAAAALQAAANgTAIQgQAHgSAAQgaAAgRgNgAgPgaQgHAHgFAOIAZgLQAPgHAJgGQgHgEgMAAQgKAAgIAHg");
	this.shape_22.setTransform(-178.7,-225.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgYBRQgOgigRg9IgJgeQgHgWAAgIQAAgHAFgFQAFgDAHAAQAKAAAFALIAEATIALAlQAJAgAIAZIAahEIAKgbQAGgQAIgJQAFgGAHABQAHgBAFAFQAFAEAAAGQAAAGgDADQgHAJgFANIgIAWIgfBOQgFAOgHANQgFAKgJgBQgLABgFgLg");
	this.shape_23.setTransform(-192.8,-228.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(145));

	// acton
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-369,-194.5,2.379,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,x:68},16).to({scaleX:1.92,scaleY:1.92},5).to({scaleX:1,scaleY:1,x:73.5,y:-162.5},5).wait(119));

	// exist
	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-140.9,-134.8,2.446,8.541);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({scaleX:1,scaleY:1},15).wait(100));

	// Layer 3
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgKAJQgEgEAAgFQAAgEAEgDQAFgFAFAAQAHABAEADQAEAEAAAEQAAAFgEAEQgFADgGABQgFgBgFgDg");
	this.shape_24.setTransform(72.6,-98.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgfAoQgPgMAAgVQgBgWAMgRQAPgSAVAAQARAAAKAFQAOAHABAPQAAAKgMAIQgFAEgQAGIgeANQAFAFAFADQAHACAHAAQAMAAAJgFQAIgFAEAAQAKAAAAAKQAAAKgPAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQALgGAIgFQgHgDgKAAQgHAAgGAGg");
	this.shape_25.setTransform(63.2,-102.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcAoQgPgMAAgUQAAgRANgUQAPgWATAAQAJAAANAFQAQAGAAAJQAAAEgDAEQgEADgFAAQgEAAgFgEQgGgEgLAAQgGAAgJAOQgIANAAAJQAAAKAHAGQAHAFAKAAQAGAAAJgFQAJgFADAAQAFAAADAEQAEAEAAAEQAAAHgQAIQgOAGgJAAQgUAAgNgMg");
	this.shape_26.setTransform(52.9,-102.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AATArIgCgTIgCgTIAAgIIABgIIAAgEIAAgDQAAgJgEAAQgIAAgGALQgIAKgFAOIAAAJIgBAJIAAAIIgBAIQAAAFgDAEQgEADgGAAQgGAAgDgDQgEgEAAgFIAAgIIgBgIIABgaIACgYIgBgIIAAgJQAAgFAEgEQAEgDAFAAQANAAAAAPIAAABQAOgOAOAAQARAAAHAPQAFAJAAAUIAAAHIAAAFQAAAHACAMQABALAAAHQAAAFgDAEQgEADgFAAQgMAAgBgLg");
	this.shape_27.setTransform(43.4,-102.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgfAoQgQgMAAgVQABgWAMgRQAOgSAWAAQAQAAALAFQAOAHgBAPQAAAKgLAIQgFAEgPAGIgfANQAFAFAFADQAHACAHAAQANAAAIgFQAIgFAFAAQAJAAABAKQAAAKgQAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQALgGAIgFQgHgDgJAAQgIAAgGAGg");
	this.shape_28.setTransform(32.9,-102.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgIBBQgEgEAAgFIAAgKIABgKIgCgvIgRgBQgMgCAAgKQAAgGAEgDQADgEAGAAIAPABIAAgKIAAgJQAAgFADgDQAEgEAGAAQAMAAAAAXIAAAIIAKgBIAOABQAIADAAAJQAAAFgEAEQgEADgFAAIgFAAIgEAAIgJABIABAwIAAAEIABAFQAAAWgOAAQgEAAgEgDg");
	this.shape_29.setTransform(23.2,-104);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AATArIgDgTIgBgTIAAgIIAAgIIAAgEIABgDQAAgJgEAAQgIAAgHALQgHAKgEAOIgBAJIAAAJIgBAIIgBAIQAAAFgEAEQgDADgGAAQgFAAgEgDQgDgEAAgFIgBgIIgBgIIACgaIABgYIAAgIIAAgJQgBgFAEgEQAEgDAFAAQAMAAABAPIABABQANgOAOAAQASAAAGAPQAEAJABAUIAAAHIAAAFQAAAHABAMQACALAAAHQABAFgEAEQgEADgFAAQgMAAgBgLg");
	this.shape_30.setTransform(13.9,-102.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgfAoQgPgMgBgVQAAgWANgRQANgSAXAAQAQAAALAFQANAHAAAPQABAKgMAIQgFAEgPAGIgfANQAEAFAHADQAGACAHAAQANAAAJgFQAHgFAFAAQAKAAgBAKQAAAKgPAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQAMgGAHgFQgGgDgKAAQgIAAgGAGg");
	this.shape_31.setTransform(3.4,-102.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgaAxQgNgGAAgKQAAgJALAAQAEAAAIADQAIACAEAAQASAAAAgHQAAgFgNgGIgXgLQgNgJAAgNQAAgTATgGQAMgEAXAAQAJAAAEACQAHADAAAJQAAARgJAAQgKAAgCgIIgHgBQgVAAAAAHQAAADAMAGQASAJAHAEQANAJAAANQAAAPgPAJQgMAGgQAAQgMAAgLgDg");
	this.shape_32.setTransform(-6.6,-102.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAWArIgOAGQgHACgEAAQgWAAgLgMQgMgMAAgYQAAgVARgQQAQgQAXAAQAIAAAMAFQAOAGAAAIQAAAEgCACIgCAJIAAANQAAAQACAIIAFAKIADAJQAAAEgDAEQgEADgFAAQgEAAgKgIgAgMgSQgKAKAAAMQABAMAEAHQAFAGAIAAQAFAAAFgCQAFgCAFgEQgDgVAAgLIAAgGIABgJIgDgBIgCAAQgMgBgJAKg");
	this.shape_33.setTransform(-24.5,-102.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AATArIgCgTIgCgTIAAgIIAAgIIAAgEIABgDQAAgJgEAAQgIAAgHALQgHAKgFAOIAAAJIAAAJIgBAIIgBAIQAAAFgEAEQgDADgGAAQgGAAgDgDQgDgEAAgFIgBgIIAAgIIABgaIABgYIgBgIIAAgJQABgFADgEQAEgDAFAAQAMAAABAPIABABQANgOAOAAQASAAAGAPQAFAJgBAUIAAAHIAAAFQAAAHACAMQADALAAAHQAAAFgEAEQgEADgGAAQgLAAgBgLg");
	this.shape_34.setTransform(-43,-102.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgLBEQgDgEgBgFIAAgRIAAgSIABgUIABgUQAAgGAEgDQADgDAGAAQAEAAAEADQADADAAAGIgBAUIAAAUIAAASIAAARQAAAFgDAEQgEADgEAAQgGAAgEgDgAgHgvQgFgDAAgGQAAgGAFgEQAEgEAEAAQAGAAAFAEQAEAEAAAGQAAAGgEADQgFAEgGAAQgEAAgEgEg");
	this.shape_35.setTransform(-50.5,-104.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgfAoQgPgMAAgVQAAgWALgRQAOgSAWAAQARAAAKAFQAPAHAAAPQAAAKgMAIQgFAEgQAGIgeANQAEAFAHADQAGACAHAAQAMAAAKgFQAHgFAEAAQALAAgBAKQAAAKgPAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQAMgGAHgFQgGgDgLAAQgHAAgGAGg");
	this.shape_36.setTransform(-67.1,-102.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgaAxQgNgGAAgKQAAgJALAAQAEAAAIADQAIACAEAAQASAAAAgHQAAgFgNgGIgXgLQgNgJAAgNQAAgTATgGQAMgEAXAAQAJAAAEACQAHADAAAJQAAARgJAAQgKAAgCgIIgHgBQgVAAAAAHQAAADAMAGQASAJAHAEQANAJAAANQAAAPgPAJQgMAGgQAAQgMAAgLgDg");
	this.shape_37.setTransform(-77,-102.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AATAuQgMAEgMABQgNgBgJgFQgKgHgCgMQgEgXAAgRQAAgMADgPQACgLAKAAQAGAAAEAEQADADAAAFIgBAMIgBAOIABAVIACARIAFABIAEABQAJAAANgDIAAgRIgBgOQAAgTACgOQACgLALAAQAFAAAEAEQAEADAAAFIgCAhIAAARIAAAUIABAFIAAAGQAAAFgEAEQgEADgFAAQgIAAgDgHg");
	this.shape_38.setTransform(-86.6,-102.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgkAwQgDgDAAgFIAAg8IAAgJIAAgIQABgFADgDQADgEAGAAQAKAAACAKQAPgMAUAAQATAAAAAZIgBAGQAAAOgMAAQgMAAAAgMIgBgJQgTADgJASIAAAuQAAAFgDAEQgFADgFAAQgGAAgDgEg");
	this.shape_39.setTransform(-104.1,-102.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgLBEQgDgEgBgFIAAgRIAAgSIABgUIABgUQAAgGAEgDQADgDAGAAQAEAAAEADQADADAAAGIgBAUIAAAUIAAASIAAARQAAAFgDAEQgEADgEAAQgGAAgEgDgAgHgvQgFgDAAgGQAAgGAFgEQAEgEAEAAQAGAAAFAEQAEAEAAAGQAAAGgEADQgFAEgGAAQgEAAgEgEg");
	this.shape_40.setTransform(-111.3,-104.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgfAoQgQgMAAgVQAAgWANgRQAOgSAWAAQAQAAALAFQANAHAAAPQAAAKgLAIQgFAEgPAGIgfANQAEAFAGADQAHACAHAAQAMAAAJgFQAIgFAFAAQAKAAAAAKQAAAKgQAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQAMgGAHgFQgGgDgKAAQgIAAgGAGg");
	this.shape_41.setTransform(-119.6,-102.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAWBEQgDgIgBgNIgCgWIAAgHIAAgHIAAgIQgBgEgDAAQgKAAgIAIQgEAFgIANQABAigEAHQgEAHgHAAQgGAAgDgDQgFgDAAgGIABgFIABgZIAAg9IAAgDIACgOIgCgJIgBgIQAAgGAFgDQADgDAGAAQAIAAAEAJQABAGAAAMIAAASIgBASQAIgGAHgEQAHgDAJAAQAQAAAGAJQAGAHABANIAAAWIACATIAEASIAAADQAAAFgEAEQgEADgFAAQgJAAgDgJg");
	this.shape_42.setTransform(-130.1,-104.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgIBBQgEgEAAgFIAAgKIABgKIgCgvIgRgBQgMgCAAgKQAAgGAEgDQADgEAGAAIAPABIAAgKIAAgJQAAgFADgDQAEgEAGAAQAMAAAAAXIAAAIIAKgBIAOABQAIADAAAJQAAAFgEAEQgEADgFAAIgFAAIgEAAIgJABIABAwIAAAEIABAFQAAAWgOAAQgEAAgEgDg");
	this.shape_43.setTransform(-140.2,-104);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AATArIgCgUIgCgSIAAgIIABgIIAAgDIAAgFQAAgHgEgBQgIAAgGALQgIAKgFAOIAAAJIgBAIIAAAIIgBAIQAAAGgDADQgEAEgGAAQgGAAgDgEQgDgDgBgGIAAgIIgBgIIABgZIACgYIgBgIIAAgIQAAgGAEgDQAEgEAFAAQANAAAAAPIAAABQAOgOAOAAQARAAAHAPQAFAJAAAUIAAAHIAAAFQAAAHACALQACAMAAAHQgBAFgDADQgEAEgFAAQgMAAgBgLg");
	this.shape_44.setTransform(125.6,-131);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgeAnQgNgNgBgVQAAgUALgQQAPgTAYAAQASAAALAPQAKANAAAUQAAAVgLAPQgNARgVAAQgRAAgNgMgAgMgPQgGAJAAALQAAALAGAGQAFAEAHAAQAHAAAGgFQAHgHAAgKQABgdgQAAIgCAAQgJAAgGAKg");
	this.shape_45.setTransform(115.4,-130.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgmBLQgDgEAAgFIAAgjIAAgkIgCgjIgBgSQAAgIAEgEQAEgHAGAAQAFAAAEADQAEAEAAAFIgBABIANgFIALgCQAWAAAKASQAHAOAAAVQAAAUgMANQgMAPgVAAQgHAAgJgCIAAAmQAAAFgDAEQgEADgGAAQgFAAgEgDgAgEgrQgGACgHAFIACAmQAIACAHAAQAKAAAFgFQAEgGAAgLIgBgRQgCgLgKAAQgFAAgFADg");
	this.shape_46.setTransform(105.6,-128.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AATAuQgMAFgMgBQgNABgJgGQgKgGgCgNQgEgXAAgRQAAgMADgPQACgLAKAAQAGAAAEADQADAEAAAFIgBAMIgBAOIABAVIACAQIAFACIAEABQAJAAANgDIAAgRIgBgOQAAgTACgOQACgLALAAQAFAAAEADQAEAEAAAFIgCAhIAAASIAAATIABAFIAAAGQAAAFgEADQgEAEgFAAQgIAAgDgHg");
	this.shape_47.setTransform(95.4,-130.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgvA7QAAgFADgDQADgDAGAAIAMABQAIACAFAAQANAAAHgIQAGgJABgSQgEAFgGADQgGACgGAAQgSAAgMgMQgLgMAAgSQAAgZAPgQQAPgQAbAAQAJAAAGACQAGADAEAEQAMABAAANQAAAGgCALQgEAWAAAXQgCAegIANQgNATgdAAQglAAAAgPgAgNgpQgIAJAAAPQAAALAEAGQAEAEAJAAQAGAAAIgIQAHgIABgIIAEgcIgGgDIgGgBQgPAAgIALg");
	this.shape_48.setTransform(77.1,-128.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AATArIgDgUIgBgSIAAgIIAAgIIAAgDIABgFQAAgHgEgBQgIAAgGALQgIAKgEAOIgBAJIgBAIIAAAIIgBAIQAAAGgDADQgEAEgGAAQgFAAgEgEQgEgDAAgGIAAgIIgBgIIABgZIACgYIAAgIIAAgIQAAgGADgDQAEgEAFAAQAMAAABAPIAAABQAOgOAOAAQARAAAHAPQAEAJABAUIAAAHIAAAFQAAAHABALQACAMAAAHQABAFgEADQgEAEgFAAQgMAAgBgLg");
	this.shape_49.setTransform(67.3,-131);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgLBDQgEgDABgGIAAgRIgBgRIABgUIABgUQAAgFADgDQAEgEAFAAQAFAAADAEQAFADAAAFIgBAUIgCAUIABARIAAARQAAAGgEADQgDAEgFAAQgFAAgEgEgAgIgvQgEgEAAgFQAAgGAEgEQAFgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAFgGAAQgFAAgFgFg");
	this.shape_50.setTransform(59.8,-133.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAaBGQgHAEgHABQgGABgGAAQgVAAgOgNQgOgOAAgVQAAgZAOgOQAOgPAWAAQAHAAAFABQAGACAEADQABggACgMQACgLAKAAQAGAAACADQAEAEAAAFIgCApIgCAnQAAAhACALIAAADQAAAFgDAEQgEADgFAAQgHAAgDgGgAgSAEQgHAIAAAQQAAAKAIAHQAGAHALAAQAGAAAEgBIAIgGIADgDIAAgiQgDgGgFgCQgFgDgHAAQgMAAgHAHg");
	this.shape_51.setTransform(51.2,-133.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AATArIgDgUIgBgSIAAgIIAAgIIAAgDIABgFQAAgHgEgBQgIAAgGALQgIAKgEAOIgBAJIAAAIIgBAIIgBAIQAAAGgDADQgEAEgGAAQgFAAgEgEQgDgDAAgGIgBgIIgBgIIACgZIABgYIAAgIIAAgIQgBgGAEgDQAEgEAFAAQAMAAABAPIABABQANgOAOAAQASAAAGAPQAEAJABAUIAAAHIAAAFQAAAHABALQACAMAAAHQABAFgEADQgEAEgFAAQgMAAgBgLg");
	this.shape_52.setTransform(40.9,-131);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgfAoQgPgMgBgVQAAgWANgRQANgSAXAAQAQAAALAFQANAHAAAPQABAKgMAIQgFAEgPAGIgfANQAEAFAHADQAGACAHAAQANAAAJgFQAHgFAFAAQAKAAgBAKQABAKgQAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQAMgGAHgFQgGgDgKAAQgIAAgGAGg");
	this.shape_53.setTransform(30.4,-130.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgmBLQgDgEAAgFIAAgjIAAgkIgCgjIgBgSQAAgIAEgEQAEgHAGAAQAFAAAEADQAEAEAAAFIgBABIANgFIALgCQAWAAAKASQAHAOAAAVQAAAUgMANQgMAPgVAAQgHAAgJgCIAAAmQAAAFgDAEQgEADgGAAQgFAAgEgDgAgEgrQgGACgHAFIACAmQAIACAHAAQAKAAAFgFQAEgGAAgLIgBgRQgCgLgKAAQgFAAgFADg");
	this.shape_54.setTransform(20.3,-128.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgfAoQgPgMgBgVQAAgWANgRQANgSAXAAQAQAAALAFQANAHAAAPQABAKgMAIQgFAEgPAGIgfANQAEAFAHADQAGACAHAAQANAAAJgFQAHgFAFAAQAKAAgBAKQAAAKgPAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQAMgGAHgFQgGgDgKAAQgIAAgGAGg");
	this.shape_55.setTransform(9.7,-130.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAZBGQgFAEgHABQgHABgHAAQgUAAgOgNQgOgOAAgVQAAgZAOgOQAOgPAWAAQAHAAAFABQAGACAEADQABggABgMQADgLAKAAQAGAAADADQADAEAAAFIgCApIgCAnQAAAhACALIAAADQAAAFgDAEQgEADgFAAQgHAAgEgGgAgSAEQgHAIAAAQQAAAKAIAHQAHAHAJAAQAGAAAFgBIAIgGIADgDIAAgiQgDgGgFgCQgFgDgGAAQgOAAgGAHg");
	this.shape_56.setTransform(-1.2,-133.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgxA8QgLgIAAgMQgBgGAEgDQAEgEAFAAQAJAAAEAIQAGAMASAAQAPAAAPgHQAPgHAAgJQAAgMgKgDQgGgDgUAAQgQgBgNgFQgRgHAAgPQABgSASgPQAUgPAVAAQAKAAANAEQAQAGAAAGQAAAFgDAEQgDAEgGAAIgNgCIgOgCQgLAAgKAGQgLAGAAAHQAAADADACQADADAIABIAWABQAUABAMAKQANALAAATQAAAYgbANQgUAJgaAAQgXAAgOgLg");
	this.shape_57.setTransform(-21.5,-132.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgtBHQgEgGAAgEIAAhiIgBgNQAAgGABgFQABgKAPgBQAHgCAQAAQARAAAQALQATANAAAUQAAAKgEAIQgDAGgIAGQAJAEAHAJQAIAJAAAKQAAANgNALQgJAHgKAEQgVAIghAAQgFAAgFgEgAgYAxQAQgBASgEQAQgFAAgFQgBgIgKgGQgIgEgHAAIgYgBgAgYgeIAAAUQAIABAFAAQAbgDAAgSQAAgHgIgGQgIgGgKAAIgOAAg");
	this.shape_58.setTransform(-33.7,-133.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgyBFQgEgDAAgGIAAgUIABgVIAAhKQAAgGAEgFQAEgGAJAAIAXACQANACAIAEQAoAUAAAeQgBAMgHAIQgJAJgRAHQAZAOAMAOQADAEABAEQgBAFgEAEQgDAEgGAAQgFAAgEgEQgcgaghgLIABAeQABAGgEADQgEAEgFAAQgGAAgEgEgAgcADIAEAAQAXAAAKgFIAIgGQAFgEAAgCQgBgLgNgJQgLgJgOgCIgLgBg");
	this.shape_59.setTransform(-45.9,-133.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgqBHQgKgJAAgeIABgkIACglIgBgKIgBgJQAAgPANAAQAFAAADACIAVgDIARgCQAXAAAOAFQAJADAAAKQAAAEgEAEQgEAEgFAAIgEAAQgPgEgOgBIgOACIgRADIgBAkIAjgDIAWgCQAGAAAEAEQAEAEAAAFQAAAKgMABIgWACIgmAEIgBATQAAASACACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAEAEQAFADAAAGQAAALgLABQgKACgcAAQgeAAgJgIg");
	this.shape_60.setTransform(-57.8,-133.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgTBCQgLgbgOgyIgIgZQgGgSAAgHQAAgEAFgFQAEgDAFAAQAJAAADAJIAEARIAJAdQAHAaAHAUIAVg3IAHgWQAGgNAHgHQADgFAHAAQAFAAAEAEQADADAAAGQAAADgCAEQgFAHgEAKIgHATIgZA/QgEAMgGALQgEAHgHAAQgKAAgDgJg");
	this.shape_61.setTransform(-70.3,-133);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgqBHQgLgJAAgeIACgkIADglIgBgKIgCgJQAAgPAOAAQADAAAEACIAUgDIASgCQAXAAAOAFQAIADAAAKQAAAEgCAEQgFAEgFAAIgEAAQgPgEgOgBIgOACIgRADIgBAkIAjgDIAXgCQAFAAAEAEQAEAEAAAFQAAAKgMABIgWACIgnAEIgBATQABASACACQABACALAAIAQgBIARAAIAFAAIAGgBQAFAAAFAEQADADAAAGQAAALgKABQgKACgbAAQgfAAgJgIg");
	this.shape_62.setTransform(-90.7,-133.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgoA5QgOgPgBgUQABgeAbggQAXgcAXAAIAHABIAGAAQAFgEAFAAQAJAAACALQACAIABAKQgBAFgDAEQgDAFgHAAQgIAAgEgJQgCgEgCgBQgBgBgGAAQgMAAgOATQgWAYAAAWQAAAKAIAIQAGAHAKAAQAIAAAKgFIANgJQAHgFAFAAQAFAAAEAEQADAEAAAFQABAFgGAEQgZAWgZAAQgWAAgNgPg");
	this.shape_63.setTransform(-102.7,-133.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AhABHQgEgDAAgGIABgLIAAgLIABgQIAAgRIAAgRIAAgRIgBgRIgCgQQAAgGAFgEQAFgFAGAAQAHAAAIAMQApA8ApAlIAAgOIgBg9IgBgKIAAgKQAAgNANAAQAPAAAAAvIAAAPIgBA5IgBAPQgCAMgMAAQgHAAgHgHQglgggrg6IgBAdIABAWIAAAWQAAAcgOAAQgGAAgEgFg");
	this.shape_64.setTransform(-116.4,-133.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgqBHQgLgJAAgeIADgkIACglIgBgKIgBgJQAAgPAMAAQAEAAAEACIAUgDIASgCQAXAAAOAFQAIADAAAKQAAAEgCAEQgEAEgGAAIgEAAQgPgEgOgBIgOACIgRADIgBAkIAkgDIAVgCQAGAAAEAEQAEAEAAAFQAAAKgMABIgWACIgnAEIgBATQABASACACQABACALAAIAQgBIARAAIAFAAIAGgBQAGAAAEAEQADADAAAGQAAALgKABQgKACgbAAQgfAAgJgIg");
	this.shape_65.setTransform(-129.8,-133.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNQAAgNgCgUIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_66.setTransform(-142.5,-133.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgxA8QgMgIAAgMQABgGADgDQADgEAHAAQAIAAAEAIQAGAMASAAQAPAAAPgHQAQgHAAgJQgBgMgJgDQgHgDgUAAQgQgBgNgFQgRgHABgPQgBgSAUgPQATgPAVAAQAKAAANAEQARAGAAAGQAAAFgEAEQgEAEgFAAIgNgCIgOgCQgMAAgJAGQgLAGAAAHQAAADADACQAEADAGABIAXABQAUABAMAKQANALABATQAAAYgbANQgWAJgZAAQgYAAgNgLg");
	this.shape_67.setTransform(-155.7,-132.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgZgDQgBARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_68.setTransform(-167.6,-133);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAbA1IgMgSIgMgQIgcAgIgRASQgEAEgFAAQgGAAgEgEQgEgDAAgGQAAgEAEgEIAQgSIAhgjIgUgYIgKgNIgMgNQgFgEAAgGQAAgEAEgFQADgEAGAAQAFAAAIAIQAGAEAEAGIAMAPIAQAVIAXggQASgVAHgBQAFABAEADQAEAEAAAFQAAAEgEAEIgSAYQgHAKgQATIATAbQAMAQAJAKQAEAEAAAEQAAAFgEAEQgEAEgGABQgJgBgPgVg");
	this.shape_69.setTransform(-179.8,-132.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgqBHQgLgJABgeIACgkIABglIAAgKIgBgJQgBgPANAAQAFAAADACIAUgDIASgCQAXAAAOAFQAJADgBAKQAAAEgDAEQgDAEgGAAIgEAAQgPgEgOgBIgOACIgRADIgBAkIAkgDIAVgCQAGAAAEAEQAEAEAAAFQAAAKgMABIgWACIgmAEIgCATQAAASADACQABACAKAAIARgBIARAAIAFAAIAGgBQAGAAADAEQAEADABAGQAAALgLABQgKACgcAAQgeAAgJgIg");
	this.shape_70.setTransform(-192.1,-133.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgkAxQgDgEAAgFIAAg8IAAgJIAAgIQAAgFADgEQAEgDAFAAQALAAACAKQAPgMAUAAQATAAAAAZIAAAGQgBAPgMAAQgMAAAAgNIgBgJQgTADgJATIAAAtQAAAGgEADQgEADgFAAQgGAAgDgDg");
	this.shape_71.setTransform(139.1,-159.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgeAnQgNgNgBgVQAAgUALgQQAPgTAYAAQASAAALAPQAKANAAAUQAAAVgLAPQgNARgVAAQgRAAgNgMgAgMgPQgGAJAAALQAAALAGAGQAFAEAHAAQAHAAAGgFQAHgHAAgKQABgdgQAAIgCAAQgJAAgGAKg");
	this.shape_72.setTransform(129.2,-159.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAWBEQgCgIgCgNIgCgWIABgHIAAgHIAAgIQgBgEgFAAQgJAAgIAIQgEAFgIANQAAAigDAHQgDAHgJAAQgEAAgFgDQgEgDAAgGIABgFIABgZIAAg9IAAgDIABgOIgBgJIgBgIQAAgGAFgDQADgDAGAAQAIAAAEAJQACAGgBAMIAAASIAAASQAHgGAHgEQAHgDAIAAQARAAAGAJQAFAHACANIABAWIABATIAEASIAAADQAAAFgEAEQgDADgGAAQgJAAgDgJg");
	this.shape_73.setTransform(20,-161.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgIBBQgEgEAAgFIAAgKIABgKIgCgvIgRgBQgMgCAAgKQAAgGAEgDQADgEAGAAIAPABIAAgKIAAgJQAAgFADgDQAEgEAGAAQAMAAAAAXIAAAIIAKgBIAOABQAIADAAAJQAAAFgEAEQgEADgFAAIgFAAIgEAAIgJABIABAwIAAAEIABAFQAAAWgOAAQgEAAgEgDg");
	this.shape_74.setTransform(9.9,-161);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgeAnQgNgNgBgVQAAgUALgQQAPgTAYAAQASAAALAPQAKANAAAUQAAAVgLAPQgNARgVAAQgRAAgNgMgAgMgPQgGAJAAALQAAALAGAGQAFAEAHAAQAHAAAGgFQAHgHAAgKQABgdgQAAIgCAAQgJAAgGAKg");
	this.shape_75.setTransform(0.2,-159.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgbBGQgDAEgFAAQgFAAgEgEQgDgDAAgFIAAgGIAAgIIAAhoQAAgHADgFQAEgGAHAAQAKAAAAAKIgBAFIAAADIAAAkQAHgEAGgCIALgCQAWABAOAPQAMAOAAAVQAAAVgOAPQgPAQgVAAQgNAAgMgFgAgKgBQgGABgIAGIAAAoQANAFAJAAQALAAAHgIQAIgIAAgMQAAgMgGgIQgHgHgLAAQgEAAgGADg");
	this.shape_76.setTransform(-10.2,-161.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgfAoQgPgMAAgVQgBgWAMgRQAPgSAVAAQARAAAKAFQAOAHABAPQAAAKgMAIQgFAEgQAGIgeANQAFAFAFADQAHACAHAAQAMAAAJgFQAIgFAEAAQAKAAAAAKQAAAKgPAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQALgGAIgFQgHgDgKAAQgHAAgGAGg");
	this.shape_77.setTransform(-29.5,-159.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgbBGQgDAEgFAAQgFAAgEgEQgDgDAAgFIAAgGIAAgIIAAhoQAAgHADgFQAEgGAHAAQAKAAAAAKIgBAFIAAADIAAAkQAHgEAGgCIALgCQAWABAOAPQAMAOAAAVQAAAVgOAPQgPAQgVAAQgNAAgMgFgAgKgBQgGABgIAGIAAAoQANAFAJAAQALAAAHgIQAIgIAAgMQAAgMgGgIQgHgHgLAAQgEAAgGADg");
	this.shape_78.setTransform(-40.3,-161.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AATArIgCgUIgCgTIAAgHIABgIIAAgEIAAgDQAAgIgEAAQgIAAgHAKQgHAKgFAPIAAAIIgBAJIAAAHIgBAIQAAAGgEADQgDAEgGAAQgGAAgDgEQgDgDgBgGIAAgIIAAgHIAAgZIACgZIgBgIIAAgJQABgFADgEQAEgDAFAAQAMAAABAPIAAABQAOgOAOAAQASAAAGAPQAFAKgBATIAAAHIAAAFQAAAHADALQACAMAAAHQgBAFgDADQgEAEgGAAQgLAAgBgLg");
	this.shape_79.setTransform(-59.1,-159.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAXArIgQAGQgGACgEAAQgWAAgLgMQgMgMAAgXQAAgWARgQQARgQAVAAQAKAAALAFQAOAGAAAIQAAAEgCABIgBAKIgBANQAAARADAHIAEAKIAEAJQAAAFgFADQgDADgFAAQgEAAgJgIgAgMgSQgJAKAAAMQAAANAEAGQAFAGAIAAQAFAAAFgCQAFgCAFgDQgDgWAAgLIABgHIAAgIIgCgBIgDgBQgMAAgJAKg");
	this.shape_80.setTransform(-69.4,-159.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgcAoQgPgMAAgUQAAgRANgUQAPgWATAAQAJAAANAFQAQAGAAAJQAAAEgDAEQgEADgFAAQgEAAgFgEQgGgEgLAAQgGAAgJAOQgIANAAAJQAAAKAHAGQAHAFAKAAQAGAAAJgFQAJgFADAAQAFAAADAEQAEAEAAAEQAAAHgQAIQgOAGgJAAQgUAAgNgMg");
	this.shape_81.setTransform(-79.8,-159.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("AgxA8QgMgIAAgMQAAgGAEgDQADgEAHAAQAIAAAEAIQAFAMATAAQAPAAAPgHQAPgHAAgJQABgMgKgDQgHgDgUAAQgQgBgMgFQgSgHABgPQgBgSAUgPQATgPAWAAQAJAAANAEQARAGAAAGQAAAFgDAEQgFAEgFAAIgNgCIgNgCQgNAAgJAGQgLAGAAAHQAAADADACQAEADAGABIAXABQAVABAMAKQANALgBATQAAAYgbANQgVAJgZAAQgYAAgNgLg");
	this.shape_82.setTransform(-99.3,-161.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AgtBGQgEgEAAgFIAAhiIgBgMQAAgHABgGQABgIAPgCQAHgCAQAAQARAAAQALQATANAAAUQAAALgEAHQgDAGgIAGQAJAEAHAJQAIAKAAAKQAAAMgNALQgJAHgKAEQgVAIghAAQgFAAgFgFgAgYAyQAQgCASgFQAQgEAAgFQgBgIgKgGQgIgEgHAAIgYgBgAgYgdIAAATQAIACAFgBQAbgDAAgSQAAgGgIgHQgIgGgKAAIgOAAg");
	this.shape_83.setTransform(-111.5,-161.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AgyBFQgDgDgBgGIAAgUIABgVIAAhKQAAgGADgFQAGgGAIAAIAXACQANACAIAEQAnAUAAAeQAAAMgIAIQgIAJgQAHQAYAOANAOQACAEAAAEQAAAFgDAEQgEAEgFAAQgGAAgDgEQgdgagggLIABAeQgBAGgDADQgEAEgGAAQgFAAgEgEgAgcADIAEAAQAXAAAKgFQAFgCADgEQAEgEAAgCQAAgLgNgJQgLgJgOgCIgLgBg");
	this.shape_84.setTransform(-123.7,-161.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AgqBHQgLgJAAgeIADgkIACgmIgBgJIgBgJQAAgPAMAAQAEAAAEADIAUgFIASgBQAXAAAOAGQAIACAAAKQAAAEgCAEQgEAEgGAAIgEgBQgPgDgOAAIgOABIgRADIgBAkIAkgDIAVgBQAGgBAEAEQAEADAAAGQAAAKgMACIgWACIgnADIgBATQABASACADQABABALAAIAQAAIARAAIAFgBIAGAAQAGAAAEADQADADAAAGQAAAKgKACQgKACgbAAQgfAAgJgIg");
	this.shape_85.setTransform(-135.6,-161.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AgUBCQgLgbgOgyIgHgZQgFgRAAgHQAAgGAEgDQADgEAGAAQAJABAEAIIADAQIAJAeQAHAaAHAVIAUg4IAIgWQAGgNAGgHQAFgFAFAAQAGAAADAEQAFADAAAGQgBADgCAEQgFAIgEAJIgHATIgZA/QgEALgGALQgEAIgHAAQgKAAgEgJg");
	this.shape_86.setTransform(-148.1,-161.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgfAoQgQgMAAgVQABgWAMgRQAOgSAWAAQAQAAALAFQAOAHgBAPQAAAKgLAIQgFAEgPAGIgfANQAFAFAFADQAHACAHAAQANAAAIgFQAIgFAFAAQAJAAABAKQAAAKgQAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQALgGAIgFQgHgDgJAAQgIAAgGAGg");
	this.shape_87.setTransform(-168.3,-159.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgHA2QgEgEAAgFQAAgLgCgUIgCgeIgBgKQgLAGgLAPIgCACIAAAcIAAAHIAAAHQAAAFgEADQgEACgGAAQgHAAgDgGQgCgFAAgKIAAgiIgBgNIAAgOQAAgIADgHQAEgIAGAAQAFAAAEAEQAFAEAAAFIgBAIQAOgRAMAAQAPAAAFALQAGgFAHgCQAHgDAIAAQASAAAGASQACAEACAVIAHAyQAAAFgEADQgEAEgFAAQgLAAgCgLIgDgbIgDgaQgDgRgDAAQgDAAgHAFQgIAEgDADQAAALACASQADAVAAAKQAAAFgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_88.setTransform(-180.7,-159.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgeAnQgNgNgBgVQAAgUALgQQAPgTAYAAQASAAALAPQAKANAAAUQAAAVgLAPQgNARgVAAQgRAAgNgMgAgMgPQgGAJAAALQAAALAGAGQAFAEAHAAQAHAAAGgFQAHgHAAgKQABgdgQAAIgCAAQgJAAgGAKg");
	this.shape_89.setTransform(-193.4,-159.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgxA8QgMgIAAgMQABgGADgDQADgEAHAAQAIAAAEAIQAGAMASAAQAPAAAPgHQAQgHAAgJQgBgMgJgDQgHgDgUAAQgQgBgNgFQgRgHABgPQgBgSAUgPQATgPAVAAQAKAAANAEQARAGAAAGQAAAFgEAEQgEAEgFAAIgNgCIgOgCQgMAAgJAGQgLAGAAAHQAAADADACQAEADAGABIAXABQAUABAMAKQANALABATQAAAYgbANQgWAJgZAAQgYAAgNgLg");
	this.shape_90.setTransform(-204.8,-161.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(145));

	// Rect
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#66FFCC").s().p("A7hFBIAAqBMA3DAAAIAAKBg");
	this.shape_91.setTransform(-37.7,-0.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#66FFCC").s().p("A7sFIIAAqOMAyBAAAIAAABIFYAAIAAKKIlYAAIAAADg");
	this.shape_92.setTransform(-37.5,-0.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#66FFCC").s().p("A72FOIAAqbMAs+AAAIAAAFIKvAAIAAKSIqvAAIAAAEg");
	this.shape_93.setTransform(-37.4,-0.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#66FFCC").s().p("A8BFUIAAqnMAn7AAAIAAAGIQIAAIAAKbIwIAAIAAAGg");
	this.shape_94.setTransform(-37.2,-0.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#66FFCC").s().p("A8LFbIAAq1MAi4AAAIAAAJIVfAAIAAKkI1fAAIAAAIg");
	this.shape_95.setTransform(-37.1,-0.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#66FFCC").s().p("A8VFiIAArDId0AAIAAALIa3AAIAAKtI63AAIAAALg");
	this.shape_96.setTransform(-36.9,-0.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#66FFCC").s().p("A8fFoIAArPIYxAAIAALPgAD7FbIAAq1IYlAAIAAK1g");
	this.shape_97.setTransform(-36.8,-0.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#66FFCC").s().p("A8qFvIAArdITvAAIAALdgAJLFgIAAq+ITgAAIAAK+g");
	this.shape_98.setTransform(-36.7,-1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#66FFCC").s().p("A80F1IAArpIOsAAIAALpgAObFkIAArHIOaAAIAALHg");
	this.shape_99.setTransform(-36.5,-1.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#66FFCC").s().p("A8+F8IAAr3IJoAAIAAL3gATqFpIAArQIJVAAIAALQg");
	this.shape_100.setTransform(-36.4,-1.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#66FFCC").s().p("AiHFsIAArYIEPAAIAALYg");
	this.shape_101.setTransform(136.8,-1.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#66FFCC").s().p("AiSGCIAAsDIElAAIAAMDg");
	this.shape_102.setTransform(-208.1,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_91}]},82).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_102},{t:this.shape_101}]},1).to({state:[]},1).wait(52));

	// Layer 1
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgKAJQgEgEAAgFQAAgEAEgEQAFgDAFAAQAHAAAEADQAEAEAAAEQAAAFgEAEQgFAEgGgBQgFABgFgEg");
	this.shape_103.setTransform(108.7,18.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgaAxQgNgGAAgKQAAgJALAAQAEAAAIADQAIACAEAAQASAAAAgHQAAgFgNgGIgXgLQgNgJAAgNQAAgTATgGQAMgEAXAAQAJAAAEACQAHADAAAJQAAARgJAAQgKAAgCgIIgHgBQgVAAAAAHQAAADAMAGQASAJAHAEQANAJAAANQAAAPgPAJQgMAGgQAAQgMAAgLgDg");
	this.shape_104.setTransform(99.9,14.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgmBLQgDgEAAgFIAAgjIAAgkIgCgjIgBgSQAAgHAEgFQAEgHAGAAQAFAAAEADQAEAEAAAFIgBABIANgFIALgCQAWAAAKASQAHANAAAXQAAASgMAOQgMAPgVAAQgHAAgJgCIAAAmQAAAFgDAEQgEADgGAAQgFAAgEgDgAgEgrQgGACgHAGIACAlQAIADAHgBQAKAAAFgFQAEgGAAgKIgBgSQgCgLgKAAQgFAAgFADg");
	this.shape_105.setTransform(90.5,16.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AATAuQgMAFgMgBQgNABgJgGQgKgGgCgNQgEgXAAgRQAAgMADgQQACgKAKAAQAGAAAEADQADAEAAAFIgBANIgBANIABAWIACAPIAFADIAEAAQAJAAANgDIAAgRIgBgOQAAgTACgOQACgLALAAQAFAAAEADQAEAEAAAFIgCAhIAAASIAAASIABAGIAAAGQAAAFgEADQgEAEgFAAQgIAAgDgHg");
	this.shape_106.setTransform(80.3,14.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgeAnQgNgNgBgVQAAgUALgQQAPgTAYAAQASAAALAPQAKANAAAUQAAAVgLAPQgNARgVAAQgRAAgNgMgAgMgPQgGAJAAALQAAALAGAGQAFAEAHAAQAHAAAGgFQAHgHAAgKQABgdgQAAIgCAAQgJAAgGAKg");
	this.shape_107.setTransform(70.3,14.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgkAxQgDgEAAgFIAAg8IABgIIAAgJQAAgFACgEQAEgDAFAAQALAAACALQAPgNAUAAQATAAAAAZIAAAGQgBAOgMAAQgMAAAAgMIAAgJQgUADgJASIAAAuQAAAGgEADQgEADgFAAQgGAAgDgDg");
	this.shape_108.setTransform(61,14.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgvA7QAAgFADgDQAEgDAFAAIAMABQAIACAFAAQANAAAHgIQAGgJABgSQgEAFgGADQgGACgGAAQgSAAgMgMQgMgMAAgSQAAgZAQgQQAPgQAbAAQAJAAAGACQAGADAEAEQAMABAAANQAAAGgCALQgEAWAAAXQgCAegIANQgNATgdAAQglAAAAgPgAgNgpQgIAJAAAPQAAALAEAGQAEAEAJAAQAGAAAIgIQAHgIABgIIAEgcIgGgDIgGgBQgPAAgIALg");
	this.shape_109.setTransform(51.1,17);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgbBDQgOgIgEgNIgBgDQAAgFAEgEQAEgDAFAAQAGAAADAEIAHAJQAGAFALAAQAIgBAHgFQAGgFAAgHQAAgXgegDQgOgBAAgKQAAgIALgDIATgEQAHgCADgEQACgDAAgEQABgOgVAAQgHAAgJAFQgJAGgCAAQgGAAgDgEQgEgDAAgFQAAgIAPgIQAOgHAJAAQAUAAANAJQAOAKAAASQAAALgEAHQgEAHgIAEQATAKAAAXQAAAUgOANQgOANgTAAQgPAAgMgGg");
	this.shape_110.setTransform(32,12.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgeAnQgNgNgBgVQAAgUALgQQAPgTAYAAQASAAALAPQAKANAAAUQAAAVgLAPQgNARgVAAQgRAAgNgMgAgMgPQgGAJAAALQAAALAGAGQAFAEAHAAQAHAAAGgFQAHgHAAgKQABgdgQAAIgCAAQgJAAgGAKg");
	this.shape_111.setTransform(12.9,14.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgIBBQgEgEAAgFIAAgKIABgKIgCgvIgRgBQgMgCAAgKQAAgGAEgDQADgEAGAAIAPABIAAgKIAAgJQAAgFADgDQAEgEAGAAQAMAAAAAXIAAAIIAKgBIAOABQAIADAAAJQAAAFgEAEQgEADgFAAIgFAAIgEAAIgJABIABAwIAAAEIABAFQAAAWgOAAQgEAAgEgDg");
	this.shape_112.setTransform(3.6,13);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AATArIgDgUIgBgTIAAgHIAAgIIAAgDIABgFQAAgHgEgBQgIAAgHALQgHAKgEAOIgBAJIAAAIIgBAIIgBAIQAAAGgEADQgDAEgGAAQgGAAgDgEQgEgDABgGIgBgIIAAgIIABgYIABgZIAAgIIAAgIQAAgGADgDQAEgEAFAAQANAAAAAPIABABQANgOAOAAQASAAAGAPQAEAKAAATIAAAHIAAAFQAAAHACALQACAMABAHQAAAFgEADQgEAEgGAAQgLAAgBgLg");
	this.shape_113.setTransform(-5.7,14.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgLBDQgDgDgBgGIAAgRIAAgRIABgUIABgUQAAgFAEgDQADgEAGAAQAEAAAEAEQADADAAAFIAAAUIgBAUIAAARIAAARQAAAGgEADQgDAEgFAAQgFAAgEgEgAgHgvQgFgEAAgFQAAgGAFgEQADgEAGAAQAFAAAFAEQAEAEAAAGQAAAFgEAEQgFAFgFAAQgGAAgDgFg");
	this.shape_114.setTransform(-13.3,12.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgIBBQgEgEAAgFIAAgKIABgKIgCgvIgRgBQgMgCAAgKQAAgGAEgDQADgEAGAAIAPABIAAgKIAAgJQAAgFADgDQAEgEAGAAQAMAAAAAXIAAAIIAKgBIAOABQAIADAAAJQAAAFgEAEQgEADgFAAIgFAAIgEAAIgJABIABAwIAAAEIABAFQAAAWgOAAQgEAAgEgDg");
	this.shape_115.setTransform(-28.9,13);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgLBDQgEgDAAgGIAAgRIAAgRIABgUIABgUQAAgFADgDQAEgEAFAAQAFAAADAEQAEADAAAFIgBAUIgBAUIABARIAAARQAAAGgDADQgEAEgEAAQgGAAgEgEgAgIgvQgEgEAAgFQAAgGAEgEQAFgEAEAAQAHAAAEAEQAEAEAAAGQAAAFgEAEQgEAFgHAAQgEAAgFgFg");
	this.shape_116.setTransform(-35.8,12.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgRBOQgDgDAAgFIAAgDQACgNAAgLIAAguIgHABIgEAAQgHAAgDgDQgEgDAAgGQAAgIAJgDIARgCIABgKQACgVAJgKQAKgNAWAAQARAAAAANQAAAMgQAAQgLAAgFAIQgEAFgBANIAAACIASgBQARAAAAAMQgBAMgSAAIgRABIAAAYIAAAZQgBARgCAKQgBAKgKAAQgFAAgEgEg");
	this.shape_117.setTransform(-43.7,12.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgaBIQgFgEAAgFQAAgJAUgqQgKgTgWgnIgFgIQgCgEgBgDQAAgFAEgEQAFgEAEAAQAHAAAEAFQANASAQAiIAMgaQAGgOAHgKQAEgHAHAAQAFAAAEADQAFAEgBAFQAAADgCADIgfBBIgSApIgGARQgDAIgIAAQgGAAgDgDg");
	this.shape_118.setTransform(-61.9,17);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgfAoQgPgMAAgVQAAgWALgRQAOgSAWAAQARAAAKAFQAPAHAAAPQAAAKgMAIQgFAEgQAGIgeANQAEAFAHADQAGACAHAAQAMAAAKgFQAHgFAEAAQALAAgBAKQAAAKgPAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQAMgGAHgFQgGgDgLAAQgHAAgGAGg");
	this.shape_119.setTransform(-72.5,14.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAWBEQgDgIgBgNIgCgWIABgHIAAgHIAAgIQgCgEgEAAQgKAAgHAIQgFAFgGANQAAAigEAHQgDAHgJAAQgEAAgFgDQgEgDAAgGIACgFIABgZIAAg9IAAgDIABgOIgBgJIgBgIQAAgGADgDQAEgDAFAAQAKAAADAJQACAGAAAMIgBASIAAASQAGgGAIgEQAHgDAIAAQAQAAAIAJQAEAHABANIABAWIADATIADASIAAADQAAAFgDAEQgFADgFAAQgKAAgCgJg");
	this.shape_120.setTransform(-83,12);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgIBBQgEgEAAgFIAAgKIABgKIgCgvIgRgBQgMgCAAgKQAAgGAEgDQADgEAGAAIAPABIAAgKIAAgJQAAgFADgDQAEgEAGAAQAMAAAAAXIAAAIIAKgBIAOABQAIADAAAJQAAAFgEAEQgEADgFAAIgFAAIgEAAIgJABIABAwIAAAEIABAFQAAAWgOAAQgEAAgEgDg");
	this.shape_121.setTransform(-93.1,13);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgfAoQgPgMAAgVQAAgWAMgRQANgSAWAAQARAAAKAFQAPAHAAAPQAAAKgMAIQgFAEgQAGIgeANQAEAFAHADQAGACAHAAQANAAAJgFQAHgFAEAAQALAAgBAKQAAAKgPAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQAMgGAHgFQgGgDgLAAQgHAAgGAGg");
	this.shape_122.setTransform(-111.3,14.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgaAxQgNgGAAgKQAAgJALAAQAEAAAIADQAIACAEAAQASAAAAgHQAAgFgNgGIgXgLQgNgJAAgNQAAgTATgGQAMgEAXAAQAJAAAEACQAHADAAAJQAAARgJAAQgKAAgCgIIgHgBQgVAAAAAHQAAADAMAGQASAJAHAEQANAJAAANQAAAPgPAJQgMAGgQAAQgMAAgLgDg");
	this.shape_123.setTransform(-121.2,14.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AATAuQgMAFgMgBQgNABgJgGQgKgGgCgNQgEgXAAgRQAAgMADgQQACgKAKAAQAGAAAEADQADAEAAAFIgBANIgBANIABAWIACAPIAFADIAEAAQAJAAANgDIAAgRIgBgOQAAgTACgOQACgLALAAQAFAAAEADQAEAEAAAFIgCAhIAAASIAAASIABAGIAAAGQAAAFgEADQgEAEgFAAQgIAAgDgHg");
	this.shape_124.setTransform(-130.8,14.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAWArIgPAGQgGACgEAAQgWAAgLgMQgMgMAAgXQAAgWARgQQARgQAVAAQAJAAAMAFQAOAGAAAIQAAADgCACIgBAKIgBANQAAARACAHIAFAKIAEAJQAAAEgFAEQgDADgFAAQgEAAgKgIgAgMgSQgKAKAAAMQABANAEAGQAEAGAJAAQAFAAAFgCQAFgCAFgDQgDgWAAgKIAAgIIABgIIgCgBIgDgBQgMAAgJAKg");
	this.shape_125.setTransform(-140.8,14.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgcAoQgPgMAAgUQAAgRANgUQAPgWATAAQAJAAANAFQAQAGAAAJQAAAEgDAEQgEADgFAAQgEAAgFgEQgGgEgLAAQgGAAgJAOQgIANAAAJQAAAKAHAGQAHAFAKAAQAGAAAJgFQAJgFADAAQAFAAADAEQAEAEAAAEQAAAHgQAIQgOAGgJAAQgUAAgNgMg");
	this.shape_126.setTransform(-151.2,14.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgfAoQgPgMgBgVQAAgWANgRQANgSAXAAQAQAAALAFQANAHAAAPQABAKgMAIQgFAEgPAGIgfANQAEAFAHADQAGACAHAAQANAAAJgFQAHgFAFAAQAKAAgBAKQAAAKgPAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQAMgGAHgFQgGgDgKAAQgIAAgGAGg");
	this.shape_127.setTransform(-161.3,14.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgbBGQgDAEgFAAQgFAAgEgEQgDgDAAgFIAAgGIAAgHIAAhpQAAgGADgFQAEgHAHAAQAKAAAAAKIgBAFIAAADIAAAkQAHgEAGgCIALgCQAWAAAOAQQAMAOAAAVQAAAWgOAOQgPAQgVAAQgNAAgMgFgAgKgBQgGABgIAGIAAAnQANAGAJAAQALAAAHgIQAIgIAAgMQAAgMgGgIQgHgHgLAAQgEAAgGADg");
	this.shape_128.setTransform(-172.1,12.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AATArIgDgUIgBgTIAAgHIAAgIIAAgEIABgDQAAgJgEABQgIAAgHAKQgHAKgEAPIgBAIIAAAJIgBAIIgBAHQAAAGgEADQgDAEgGAAQgGAAgDgEQgEgDABgGIgBgHIAAgIIABgZIABgZIAAgIIAAgJQgBgFAEgEQAEgDAFAAQANAAAAAPIABABQANgOAOAAQASAAAGAPQAEAKABATIAAAHIAAAFQgBAHACALQACAMAAAHQAAAFgDADQgEAEgFAAQgMAAgBgLg");
	this.shape_129.setTransform(109.4,-14.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgkAxQgDgEAAgFIAAg8IABgJIAAgIQAAgFADgEQADgDAGAAQAKAAACAKQAPgMAUAAQATAAAAAZIgBAGQAAAPgMAAQgMAAAAgNIAAgJQgUADgJATIAAAtQAAAGgDADQgEADgGAAQgFAAgEgDg");
	this.shape_130.setTransform(99.9,-13.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAXArIgQAGQgGACgEAAQgWAAgLgMQgMgMAAgXQAAgWARgQQARgQAVAAQAKAAALAFQAOAGAAAIQAAADgCADIgBAJIgBANQAAARADAHIAEAKIAEAJQAAAFgFADQgDADgFAAQgEAAgJgIgAgMgSQgJAKAAAMQAAAMAEAHQAFAGAIAAQAFAAAFgCQAFgCAFgDQgDgWAAgLIABgHIAAgIIgCgBIgDgBQgMAAgJAKg");
	this.shape_131.setTransform(89.9,-13.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgfAoQgPgMAAgVQAAgWALgRQAOgSAWAAQARAAAKAFQAPAHAAAPQAAAKgMAIQgFAEgQAGIgeANQAEAFAHADQAGACAHAAQAMAAAKgFQAHgFAEAAQALAAgBAKQAAAKgPAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQAMgGAHgFQgGgDgLAAQgHAAgGAGg");
	this.shape_132.setTransform(79.2,-14);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgIBJQgEgEAAgFIAAh/QAAgGAEgDQAEgDAEAAQAGAAADADQAEADAAAGIAAB6QAAARgNABQgFAAgDgEg");
	this.shape_133.setTransform(71.3,-16.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgeAnQgNgNgBgVQAAgUALgQQAPgTAYAAQASAAALAPQAKANAAAUQAAAVgLAPQgNARgVAAQgRAAgNgMgAgMgPQgGAJAAALQAAALAGAGQAFAEAHAAQAHAAAGgFQAHgHAAgKQABgdgQAAIgCAAQgJAAgGAKg");
	this.shape_134.setTransform(55.4,-13.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgIBBQgEgEAAgFIAAgKIABgKIgCgvIgRgBQgMgCAAgKQAAgGAEgDQADgEAGAAIAPABIAAgKIAAgJQAAgFADgDQAEgEAGAAQAMAAAAAXIAAAIIAKgBIAOABQAIADAAAJQAAAFgEAEQgEADgFAAIgFAAIgEAAIgJABIABAwIAAAEIABAFQAAAWgOAAQgEAAgEgDg");
	this.shape_135.setTransform(46.1,-15.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgbBIQgDgDAAgGQAAgIATgrQgKgTgXgnIgEgHQgDgEAAgEQABgFAEgEQAEgEAFAAQAGAAADAFQAOARAQAkIAMgbQAHgOAGgLQAEgGAHAAQAFAAAEAEQAEADABAFQAAADgCADIghBCIgRAnIgGARQgDAJgJAAQgFAAgEgDg");
	this.shape_136.setTransform(28.1,-11.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgaAxQgNgGAAgKQAAgJALAAQAEAAAIADQAIACAEAAQASAAAAgHQAAgFgNgGIgXgLQgNgJAAgNQAAgTATgGQAMgEAXAAQAJAAAEACQAHADAAAJQAAARgJAAQgKAAgCgIIgHgBQgVAAAAAHQAAADAMAGQASAJAHAEQANAJAAANQAAAPgPAJQgMAGgQAAQgMAAgLgDg");
	this.shape_137.setTransform(18.1,-14);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAWArIgOAGQgHACgEAAQgWAAgLgMQgMgMAAgXQABgWAQgQQAQgQAXAAQAJAAALAFQAOAGAAAIQAAADgCADIgCAJIAAANQAAARACAHIAFAKIADAJQAAAFgDADQgEADgFAAQgEAAgKgIgAgMgSQgKAKAAAMQAAAMAFAHQAFAGAIAAQAFAAAFgCQAFgCAFgDQgDgWAAgLIAAgHIABgIIgDgBIgCgBQgLAAgKAKg");
	this.shape_138.setTransform(8.4,-13.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgfAoQgQgMAAgVQABgWALgRQAOgSAXAAQAQAAALAFQAOAHgBAPQAAAKgLAIQgFAEgPAGIgfANQAFAFAFADQAHACAHAAQANAAAIgFQAIgFAFAAQAJAAABAKQAAAKgQAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQALgGAIgFQgHgDgJAAQgIAAgGAGg");
	this.shape_139.setTransform(-2.3,-14);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgfAoQgPgMAAgVQAAgWALgRQAOgSAWAAQARAAAKAFQAPAHAAAPQAAAKgMAIQgFAEgQAGIgeANQAEAFAHADQAGACAHAAQAMAAAKgFQAHgFAEAAQALAAgBAKQAAAKgPAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQAMgGAHgFQgGgDgLAAQgHAAgGAGg");
	this.shape_140.setTransform(-21.2,-14);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgkAxQgDgEAAgFIAAg8IABgJIAAgIQAAgFACgEQAEgDAFAAQALAAACAKQAPgMAUAAQATAAAAAZIAAAGQgBAPgMAAQgMAAAAgNIAAgJQgUADgJATIAAAtQAAAGgEADQgEADgFAAQgGAAgDgDg");
	this.shape_141.setTransform(-30.8,-13.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAWArIgOAGQgHACgEAAQgWAAgLgMQgMgMAAgXQAAgWARgQQAQgQAXAAQAIAAAMAFQAOAGAAAIQAAADgCADIgCAJIAAANQAAARACAHIAFAKIADAJQAAAFgDADQgEADgFAAQgEAAgKgIgAgMgSQgKAKAAAMQABAMAEAHQAFAGAIAAQAFAAAFgCQAFgCAFgDQgDgWAAgLIAAgHIABgIIgDgBIgCgBQgMAAgJAKg");
	this.shape_142.setTransform(-40.7,-13.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FF0000").s().p("AgxA8QgMgIAAgMQABgGADgDQADgEAGAAQAJAAAEAIQAGAMASAAQAPAAAPgHQAQgHAAgJQgBgMgJgDQgHgDgUAAQgQgBgNgFQgRgHAAgPQAAgSAUgPQATgPAVAAQAKAAANAEQAQAGABAGQgBAFgDAEQgEAEgFAAIgNgCIgOgCQgMAAgJAGQgLAGAAAHQAAADADACQAEADAGABIAXABQAVABALAKQAOALAAATQAAAYgbANQgWAJgZAAQgYAAgNgLg");
	this.shape_143.setTransform(-60.9,-15.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FF0000").s().p("AgtBGQgEgFAAgFIAAhhIgBgMQAAgHABgGQABgIAPgCQAHgCAQAAQARAAAQALQATANAAAUQAAALgEAHQgDAGgIAGQAJAEAHAJQAIAJAAALQAAAMgNALQgJAHgKAEQgVAIghAAQgFAAgFgFgAgYAyQAQgCASgFQAQgEAAgGQgBgHgKgFQgIgFgHgBIgYAAgAgYgdIAAATQAIACAFgBQAbgDAAgSQAAgGgIgHQgIgGgKAAIgOAAg");
	this.shape_144.setTransform(-73.1,-16.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FF0000").s().p("AgyBFQgEgDABgGIAAgUIAAgVIAAhKQAAgGADgFQAFgGAJAAIAXACQANACAIAEQAnAUAAAeQABAMgJAIQgIAJgRAHQAZAOAMAOQAEAEAAAEQAAAFgFAEQgDAEgGAAQgEAAgFgEQgcgaghgLIACAeQAAAGgEADQgEAEgGAAQgFAAgEgEgAgcADIAEAAQAXAAAKgFIAJgGQADgEAAgCQABgLgNgJQgMgJgOgCIgLgBg");
	this.shape_145.setTransform(-85.3,-16.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF0000").s().p("AgqBHQgLgJAAgeIACgkIACgmIgBgJIgBgKQABgOANAAQAEAAADADIAVgFIARgBQAXAAAOAGQAJACAAAJQAAAFgDAEQgFAEgFAAIgEgBQgPgDgOAAIgOAAIgRAEIgBAkIAjgDIAXgBQAFAAAEADQAEADAAAGQAAAKgMACIgWACIgnADIAAATQgBASADADQABABAKAAIARAAIARAAIAGgBIAFAAQAFAAAFACQADAEAAAGQAAAKgKACQgJACgcAAQgfAAgJgIg");
	this.shape_146.setTransform(-97.2,-16.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF0000").s().p("AgTBCQgMgbgOgyIgHgZQgGgSABgGQgBgGAFgDQADgDAGgBQAJABADAIIAEAQIAJAfQAHAZAHAVIAVg3IAIgXQAFgNAGgHQAFgFAFAAQAFAAAEAEQAEADABAGQAAADgDAEQgFAIgEAJIgHATIgZA/QgEALgGALQgEAIgHAAQgKAAgDgJg");
	this.shape_147.setTransform(-109.7,-16.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgfAoQgPgMAAgVQgBgWAMgRQAPgSAVAAQARAAAKAFQAOAHABAPQAAAKgMAIQgFAEgQAGIgeANQAFAFAFADQAHACAHAAQAMAAAJgFQAIgFAEAAQAKAAAAAKQAAAKgPAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQALgGAIgFQgHgDgKAAQgHAAgGAGg");
	this.shape_148.setTransform(-129.9,-14);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgaAxQgNgGAAgKQAAgJALAAQAEAAAIADQAIACAEAAQASAAAAgHQAAgFgNgGIgXgLQgNgJAAgNQAAgTATgGQAMgEAXAAQAJAAAEACQAHADAAAJQAAARgJAAQgKAAgCgIIgHgBQgVAAAAAHQAAADAMAGQASAJAHAEQANAJAAANQAAAPgPAJQgMAGgQAAQgMAAgLgDg");
	this.shape_149.setTransform(-139.8,-14);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgfAoQgQgMAAgVQAAgWANgRQAOgSAWAAQAQAAALAFQANAHAAAPQAAAKgLAIQgFAEgPAGIgfANQAEAFAGADQAHACAHAAQAMAAAJgFQAIgFAFAAQAKAAAAAKQAAAKgQAHQgNAGgPAAQgVAAgOgLgAgMgVQgGAFgEAMIAVgJQAMgGAHgFQgGgDgKAAQgIAAgGAGg");
	this.shape_150.setTransform(-149.7,-14);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AAWBEQgDgIgBgNIgCgWIAAgHIAAgHIAAgIQgBgEgDAAQgKAAgIAIQgEAFgIANQABAigEAHQgEAHgHAAQgGAAgDgDQgFgDAAgGIABgFIABgZIAAg9IAAgDIACgOIgCgJIgBgIQAAgGAFgDQADgDAGAAQAIAAAEAJQABAGAAAMIAAASIgBASQAIgGAHgEQAHgDAJAAQAQAAAGAJQAGAHABANIAAAWIACATIAEASIAAADQAAAFgEAEQgEADgFAAQgJAAgDgJg");
	this.shape_151.setTransform(-160.3,-16.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_152.setTransform(-172.4,-16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},87).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-545,-247.3,743.4,157.1);


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
		//this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmAux',{loop:-1});
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.1;
		var prev_vol = bgm.volume;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("verb_menu.html","_self");
		}
		//volume functions -----------------------------------------
		function volDwn()
		{
			createjs.Sound.volume = createjs.Sound.volume -0.1;
			if(!mute){
				bgm.volume -= 0.1;
				prev_vol = bgm.volume;
			}
			console.log(bgm.volume);
			console.log(prev_vol);
		}
		function volUp()
		{
			createjs.Sound.volume = createjs.Sound.volume +0.1;
			if(!mute){
				bgm.volume += 0.1;
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
		
		 window.open ("exist_Scene1.html","_self");
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up},{t:this.btn_goNext},{t:this.instance}]}).wait(1));

	// vol_frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1.5,1,1).rr(-33,-12,66,24,4.9);
	this.shape_5.setTransform(-24.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-283.9,-13,331.7,399), null);


// stage content:
(lib.exist_Scene0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene0:0,scene0repeat:140});

	// timeline functions:
	this.frame_11 = function() {
		playSound("someverbscanbeactionorexistance");
	}
	this.frame_96 = function() {
		playSound("theseverbsareeasytolearn");
	}
	this.frame_157 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(85).call(this.frame_96).wait(61).call(this.frame_157).wait(1));

	// Background
	this.instance = new lib.intro();
	this.instance.parent = this;
	this.instance.setTransform(271.9,198.1,1,1,0,0,0,-32.5,-71.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAlSgV9MhKjAAAMAAAAr7MBKjAAAg");
	this.shape.setTransform(273.3,200.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FFCC").s().p("EglRAV+MAAAgr7MBKjAAAMAAAAr7g");
	this.shape_1.setTransform(273.3,200.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(158));

	// buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(158));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.3,201.6,782.1,398.7);
// library properties:
lib.properties = {
	id: '88A59F4A4B56F24C99959BBDA0B42921',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/Flying.mp3", id:"Flying"},
		{src:"sounds/bgmAux.mp3", id:"bgmAux"},
		{src:"sounds/Gm_Guitar_Strumming.mp3", id:"Gm_Guitar_Strumming"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/someverbscanbeactionorexistance.mp3", id:"someverbscanbeactionorexistance"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/theseverbsareeasytolearn.mp3", id:"theseverbsareeasytolearn"},
		{src:"sounds/ZoomingSound.mp3", id:"ZoomingSound"}
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
an.compositions['88A59F4A4B56F24C99959BBDA0B42921'] = {
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