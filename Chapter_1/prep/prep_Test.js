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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE737").s().p("AgEUvIgDgMIgKgdIgDgLIgDAAIhYAAQAHgKALgGIAEgBQANgJAMgJIAHgGQAIgHAMgEQgMgngNgjIgBgEQgEgGAEgEIAyAkIAEACQAJAGAIAIIA2gpQAJgHAKgEIABABIAAACQgEAQgFAMIgMAhQgEAKgBAOIACAAIBFAxIAAACIhaABIgNApIgBAEQgFAWgKATQgIgOgEgUgAtsObIgnAUIgCACQgVANgTAFQAEgQAKgQIAHgMIAPgbIADgKIgBgCIg+g+QAMgCAMAEIADAAQAQAFAOABIAJABQALABAMAFQASgkARgiIABgEQABgGAIAAIAJA8IAAAEQADAMABALIBDAJQALACALAEIgBACIgCABIgZAOIghAOQgJAFgLAJIABABIAOBUIAAACIhBhAgANXOqIAOhUIABgBQgLgJgKgFIgfgOQgNgFgNgJIgBgBIgBgCQALgDALgCIBDgKQAAgLADgLIABgFIAJg9QAHABABAGIABAEQARAjATAiQALgEALgBIAKgBQAOAAAPgFIAEgBQAMgFAMADIg/A+IgBACIAEALIAOAbIAIALQAKAQAEARQgTgHgVgMQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIgogUIhAA/gAT4A9IgxhEIAAgCQgOABgKAEIghALQgMAFgPAEIgDAAIgCgBQAFgLAHgIIApg2QgIgHgGgLIgCgEIglgxQAFgEAGADIAEACQAjANAnALQAEgLAHgJIAGgHQAJgLAJgOIABgDQAGgLAKgIIAABZIAAACIALAFIAcAJIAOADQATAFAOAHQgTAKgWAFIgEABIgpAOIgBBZgAz4A9IgChZIgpgOIgDgBQgXgFgTgKQAPgHATgFIAMgDIAdgJIALgFIAAgCIAAhZQAKAIAGALIACADQAHAOAKALIAGAHQAIAJADALQAngLAjgNIAEgCQAGgDAFAEQgTAZgSAYIgCAEQgGALgIAHIApA2QAHAIAFALIgCABIgCAAQgPgEgNgFIgggLQgLgEgOgBIAAACIgxBEgANVsCIgKhDQgLgBgMgDIgDgBIg+gJQAAgGAIgCIACgBQAjgQAkgTQgGgLAAgLIgBgJQgCgPgEgPIgBgEQgDgMABgMIA+A+IACACIALgFIAbgOIAMgGQAQgLAQgFQgGAVgNAUIgBADIgUAmIA/BBIgBAAIhUgNIgCgBQgIAKgFAKQgGARgJAPQgFAMgIANIgBACIgDABQgDgLgBgLgAsvscIgCgCQgHgNgGgMIgPggQgEgJgJgLIgBABIhVAOIgBgCIA/hAIgTgmQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgNgVgGgTQAPAEARAKIALAHIAbAPIALAEIACgCIA+g/QACANgDAMIgCADQgEAQgBAPIgBAJQgBALgFALQAjATAjAQIADABQAHACAAAGIg9AJIgDABQgMADgLABIgKBDQgCALgDALIgCgBgAA+x5Ig2gpQgIAIgJAGIgEADQgaARgYATQgEgFAEgGIABgEQANgjAMgnQgMgDgIgIIgHgGQgMgKgNgHIgEgCQgLgGgHgKIBYAAIADAAIADgLIAKgcIADgOQAEgSAIgPQAKATAFAXIABADIANApIBaABIAAACQgjAYgiAZIgCAAQABAOAEALIAMAgQAFANAEAOIAAADQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQgKgFgJgHg");
	this.shape.setTransform(190.9,193.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBB31").s().p("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");
	this.shape_1.setTransform(190.9,193.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC8F15").s().p("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ARATIASATQAKgDALgGIAGgDQAOgJANgHQANgFAMgBQAKACAKAHIACACQAGAFADAHQAKAWgPAWIgBACQgFAMgHAMQgGAJgEALQAAAGAGAFIAcAYQANAKAEALQAFALABAKQgDAHgEAHIABABIgOAOIgBABIgMAEQgKADgKgCIg2gLQgJALgEAMQgKAWgRAXQgCACgFADQgJAEgKADIgQgGgAM2vlQgGAAgGACQgFAMACALIABADQADAGAAAFIAIA3QgLAHgMAGIgGADIgfAQIgGACQgPAEACAOQABALAMADIAUACIANACQAWACAWAGQAIAlAEAlQACAOAMACQAGADAGgGIADgFQADgHAFgJIABgDQALgSAIgSIADgEIAHgNQATAGATACQASABATAFQAMACAHgMIAAgDQACgFgEgEIg5g7IABgHIAFgKIAJgRIABgDIAFgGIAIgOQANgRgLgRIgMgCIgDAAIgHAEIgWALIgqAXIgwgyQgKgKgIAAIgBAAgAtAr6QgEgBgCgDQgSgXgKgXQgEgKgIgMIg3ALQgKACgKgDIgLgEIgCgBIgNgOIAAgBIgHgOQABgKAFgLQAEgLANgKQANgKAOgNQAHgHAAgFQgEgKgGgKIgMgXIgBgCQgPgXAKgWQAEgHAFgFIACgBQAKgIAKgCQAMABAOAGQAMAGAOAJIAHADQAKAHAJACIAUgTIARgTQAGgIAGgDQANgGALgDIACACIASAGIABABQAJAJAGAJQADAQgDAPIgBAEIgCAHQgBAUgGAUIAaANIALAFQASAHATATIgBABQAHAMAAALIgCACIgEANIgCACIgNANQgTAFgUAEIglAEIgBACQgCAlgKAlIgCACIgOAOIgBAAIgRAHQgKgEgJgFgAtatRIADAEQAIATALASIABACIAIAQQABADACACQAGAHAGgEQAMgCACgOQAEglAIgmQAWgFAWgCIAOgCIASgCQANgCABgMQABgOgNgDIgGgDIgggQIgGgEQgMgFgLgHQAFgbADgcIADgKIABgEQACgLgFgMIgMgDQgIAAgLALQgXAagYAYIgrgXQgMgHgKgEIgHgEIgDAAIgMACQgKARAMARIAIAOIAFAGIABADIAJARIAFAKIACAHQgdAdgdAeQgDAEAAAGIABACQAGAMANgDQATgDATgCQASgCATgGIAHANgABJxIIgDAAQghgSgcgZIgCgBIgcAXQgQAMgSAJIgSAAIgDAAIgMgFIgCgBQgJgHgDgOIgBAAQgBgbAIgRIAFgMIAJgcQgTgJgOgOIgGgDIgEgCQgNgJgJgNQgCgLAAgMIAAgCIAIgRIAAgCQALgHAMgEQAHgDAKABQAMACANAAIAcAAQAEgJADgMIACgHQAEgQAFgNQAFgNAIgKQAIgFAMgCIADAAQAHgBAHADQAXAIAFAbIABACQAFAMADANQACALAFAKQAEAEAJgBQAUAAAPgCQARgCALAFQALAEAIAHIAFAOIABAAIAAATIAAADIgFALQgFAJgJAFIguAfQACAOAEALQAJAXAEAcQABAEgCAEQgDAKgFAJQgHAEgJADIgBABIgUAAgAh30EQgEAEgDAGQAFALAJAHIAEABQAFADAEADIAsAiIgHAZIgCAGIgKAiIgDAGQgIANAMAIQAIAHAKgHIAQgLIALgJQARgOASgMQAgAVAdAXQAMAKAJgIQAHgCAAgIIgBgGQgEgIgCgJIgBgDQgGgUgHgTIgBgFIgEgOQASgJAOgMQAPgMAQgKQAKgIgDgMIgCgDQgDgEgGgBIhSgBIgDgGIgEgKIgGgTIgBgDIgBgHQgDgIgBgIQgDgVgUgEIgJAHIgCACIgCAHIgHAYIgOAuQgjAAgjgBIgCAAQgMAAgGAGg");
	this.shape_2.setTransform(190.9,193.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF9933").ss(37.3,1,1).p("ATPAAQAAH+lpFoQloFpn+AAQn9AAlolpQlploAAn+QAAn9FploQD6j6FChNQA5gNA8gJQBYgLBcAAQBcAABWALQBEAJBAAQQE7BPD1D1QFpFoAAH9g");
	this.shape_3.setTransform(190.7,193.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0033FF").ss(49.4,1,1).p("ATPAAQAAH+lpFoQloFpn+AAQn9AAlolpQlploAAn+QAAn9FploQD6j6FChNQA5gNA8gJQBYgLBcAAQBcAABWALQBEAJBAAQQE7BPD1D1QFpFoAAH9g");
	this.shape_4.setTransform(190.7,193.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(43,45.5,295.6,295.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggDTQgOgVAAgcQAAgwAfgTQgEgEgXhGQgYhFAAg+QAAg0AUghQAUgjAcAAQAbAAATAjQATAhAAAzQAAA7gVBAQgUBAgLATQAPAJAJARQAIASAAAXQAAAcgNAVQgPATgTAAQgSAAgOgTg");
	this.shape.setTransform(290.5,39.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AidDfIAAm+IChAAQA5ABAbAJQAaALASAeQASAeAAArQAAAkgKAVQgJAUgVAVQAZAUAMAWQALAXAAAlQAAA4gcAhQgcAigvgBgAgXB9IAEAAQAXAAAJgKQAKgKAAgZQAAgdgKgLQgJgLgZAAIgCAAgAgXguIAEAAQAUABAKgKQAJgKAAgXQAAgZgJgKQgJgJgVgBIgEAAg");
	this.shape_1.setTransform(265.4,39.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhsCoQgvg/AAhxQAAg3AUgzQAUgzAkggQAjghAxAAQA8AAAuBDQAtBEAABcQAABogtBBQgsBAhFAAQg8AAgug+gAgVgsQgJANAAAUQAAATAJAOQAJANAMAAQANAAAJgNQAJgNAAgUQAAgUgJgNQgJgOgNAAQgMAAgJAOg");
	this.shape_2.setTransform(229.1,39.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6DGQgggegLgzQAKADAQAAQAWAAAIgEQAJgFACgOQADgPAAglIAAkPICFAAIAAEHQAABWgFAdQgFAdgWAXQgWAXghAAQgpAAgggdg");
	this.shape_3.setTransform(199.1,39.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhCDfIAAkJIhEAAIAAi1IENAAIAAC1IhEAAIAAEJg");
	this.shape_4.setTransform(154.4,39.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABDDfIgRhLIhhAAIgSBLIiIAAIBtm+IC/AAIBnG+gAgXArIAwAAIgYhtg");
	this.shape_5.setTransform(123.1,39.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah9DfIAAm+ID7AAIAABxIh1AAIAAA3IBRAAIAABvIhRAAIAAA4IB1AAIAABvg");
	this.shape_6.setTransform(89.1,39.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAbDfIAAgDQAAhQgPgpQgOgpgcAAIgBAAIAAClIiHAAIAAm+ICHAAQBFAAAYAFQAXAFASAQQASARAKAcQALAdAAAgQAABEgiAgQAxBSAJCEgAgfgtIAEAAQATAAAIgKQAJgKAAgYQAAgpgmAAIgCAAg");
	this.shape_7.setTransform(56.6,39.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag5DWQgggQgXgkQgYgjgKgqQgLgrAAgrQAAhnAwg/QAug+BMAAQAjAAAnAQQAnAQAgAcIhBCGQgngcgiAAQgWAAgOARQgOARAAAbQAAA4ArAAIADAAIAAhFICHAAIAADwIgCAAIhvAFQhAAAgfgQg");
	this.shape_8.setTransform(20,39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300.9,78.7);


(lib.star_big = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("ADJKMIjFiTQkTDIgIAAIhJAQQiHgVgchkQgLgrAAgaQAPhTBXj/QjViThDg9QgZgVgRhcQAHhAAuhBQApghBbgUQCIADBNAAIBTAAQAIAABIjuQAchrA/gpQAMgMBWgPQBEAAA9A5QAfAQBLEJQAYBKAHABIBWAAQBLAACDgDQBmASAqAvQAkAxAFBEQAABIg5BAQj6CugLAPQBbELAPBOQgHBBgvBBQg+AshFAFQhGgGhPg/gACnHxQCaB1AZAAIAOAAQBFgLAAhAQAAgNhbkUQgehSAAgRQEujSAcgfQAAgHAHgjQgShEgyAAIgPgEQjHAEh0AAIgyAAQgNAAhCjoQg1itgbAAIgmgMQhKASAAA6QgMAchjE5Ig4AAQh1AAjHgEQhJAAgKBQQAAAyB5BHIDYCeIAAAEQhxFVgIAnQAABDBQAIIAEAAQAcAAEEjJQARgJAggZQAcAJCOBtgAFaIXIlWj7IgEAAQlUD7gEAAIAAgEQAAgRCFmFIlej1IAAgIIGxAAIB9mWIADAAQAIAABqFWQATA3AAAJIGwAAIAAAIIlZDxIAAAEQAAAPCFGLg");
	this.shape.setTransform(86.6,97.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.star_big, new cjs.Rectangle(0,0,167.3,212.4), null);


(lib.WhichOne = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAaA1IgDgYIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgFADgDQADgCAFAAQAJgBABAOIABANQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDAEgEAAQgKgBgBgJg");
	this.shape.setTransform(95.2,18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAYA0QgNAGgQABQgOAAgKgHQgKgGgCgOQgEgcgBgVQABgQADgSQABgKAJAAQAFAAADAEQADADAAAEIgBAQIgCARIABAdQABANACAIIAIACIAHABQANAAAQgEIAAgWIAAgTQAAgYABgRQABgKAKAAQAEAAADADQADADAAAEIgCApIAAAXIABAWIAAAIIAAAHQAAAFgCADQgDADgFAAQgJAAgCgKg");
	this.shape_1.setTransform(83.5,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAuQgOgPAAgaQgBgXAMgSQAPgWAbAAQAVAAALAUQAJAPgBAXQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_2.setTransform(71.9,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhHBTQgDgDgBgEIABgOIABgNIAAgVIABgUIgBgTIAAgWIgBgVIgBgTQAAgFAEgEQAEgEAGgBQAGAAAHANQAbAoAVAaQAZAfAfAdIAAgOIAAgNQAAgvgFgbIgCgMQgCgHAAgFQAAgMALAAQATAAgBBGIAAAiIAAAkIgBARQgCALgKAAQgGAAgIgHQgsgqg3hNIgBAYIAAAYIAAAbIABAbQAAAdgMAAQgGAAgDgFg");
	this.shape_3.setTransform(57.6,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAmA4IgIgiIgcAFIgbAGIgTAqQgEAFgFAAQgEAAgEgCQgEgEAAgFQABgEAQgiQgCgEAAgDQAAgJAKgCQAMgWAUgeQAYgpAGAAQAIAAADAMIAHAkIAQBKIAHARQADAJgBACQABAFgDADQgEADgEAAQgKAAgHgZgAgNAIQANgEAagEIgJgog");
	this.shape_4.setTransform(34,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24,-2,78.8,34.7);


(lib.WhatKind = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAaA1IgDgYIgBgXIAAgJIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAJIABALQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgLIAAgJIABgeIACgeIgBgLIAAgKQAAgFADgDQADgDAFAAQAJABABAOIABAMQASgYASAAQARAAAHAPQAEAKABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDAEQgDACgEABQgKAAgBgKg");
	this.shape.setTransform(108.9,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAYA0QgNAHgQAAQgPgBgJgGQgKgHgCgNQgFgcAAgWQAAgPAEgSQACgKAIAAQAFABADADQADADAAAEIgBAQIgCAQIABAeQABANACAIIAHACIAIABQANABAPgFIAAgWIAAgUQAAgXACgRQABgKAKAAQAEAAADADQAEADAAAFIgDAoIAAAXIABAWIAAAIIABAHQgBAFgDADQgDACgEAAQgJABgCgKg");
	this.shape_1.setTransform(97.2,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAuQgOgPgBgaQAAgWAMgTQAPgWAaAAQAWAAALAUQAJAQgBAWQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_2.setTransform(85.6,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAaA1IgDgYIgBgXIAAgJIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAJIABALQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgLIAAgJIABgeIACgeIgBgLIAAgKQAAgFADgDQADgDAFAAQAJABABAOIABAMQASgYASAAQARAAAHAPQAEAKABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDAEQgDACgEABQgKAAgBgKg");
	this.shape_3.setTransform(74.5,20.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggAuQgOgPgBgaQAAgWAMgTQAPgWAaAAQAWAAALAUQAJAQgBAWQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_4.setTransform(62.6,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgpAyIAAhLIABgLIAAgLQAAgKAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAIQgKAGgGAOIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_5.setTransform(52.1,21);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgpBXQgDgDAAgFIAAgrIAAgpIgBgrIgCgWQAAgIADgFQADgGAGAAQAEAAADADQADADAAAEIAAADIgBAHQAJgHAJgDQAIgDAHAAQAWAAAKATQAJAQAAAZQAAAXgNAPQgNAQgWAAQgKAAgNgEIAAAzQAAAFgDADQgDADgFAAQgEAAgDgDgAgKg4QgFADgJAIIABAyQAMAFALAAQANAAAHgKQAGgIAAgOQAAgTgEgKQgFgKgKAAQgJAAgIAFg");
	this.shape_6.setTransform(40.7,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAlA4IgGgiIgdAGIgcAFIgSAqQgEAFgGAAQgDAAgEgDQgDgDAAgFQAAgFAQghQgCgDAAgEQAAgIALgDQAMgWASgeQAZgpAGAAQAJAAADAMIAHAkIAPBKIAGARQADAIAAADQAAAFgDADQgDADgEAAQgKAAgIgZgAgNAIQANgEAagEIgJgog");
	this.shape_7.setTransform(20,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,0,106.5,34.7);


(lib.HowMany = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZBiQgCgDAAgEQAAgEAFgEIAJgHQAWgXAAgyQAAgSgGgUQgEgXgMgNIgJgJQgFgGAAgEQAAgDACgDQADgDAEAAQACAAADADQATAOAMAeQAKAcAAAZQAABJgoAYQgEABgDAAQgDAAgDgBg");
	this.shape.setTransform(129.1,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFBEQgEgCAAgDIABgMIAAgLIgCg4IgVgBQgJgCAAgIQAAgFACgCQADgDAEAAIAUACIAAgOIAAgMQAAgEACgDQAEgCADAAQAJAAABAOIAAAIIAAAHIAAAGIAOgCQAKAAADABQAGACAAAHQAAAEgCADQgEADgDAAIgGAAIgEAAIgOABIADA4IAAAFIAAAFQAAAVgLABQgDAAgCgEg");
	this.shape_1.setTransform(120.5,19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AglBPQgDgCAAgEIAAgoIAAgmQAAgVgBgRIgCgVQABgGACgFQADgGAFAAQAFAAACADQADADgBAEIAAADIgBAFQAJgFAIgDQAHgEAHAAQAUABAJARQAIAPAAAWQAAAVgMANQgMAPgUAAQgIAAgNgDIAAAvQAAAEgCACQgDADgEAAQgEAAgDgDgAgIgyQgGACgIAIQACAWAAAXQALAFAJAAQAMAAAHgKQAFgGABgOQAAgRgFgJQgFgJgIAAQgIABgHAEg");
	this.shape_2.setTransform(110.6,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_3.setTransform(99.7,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AANBiQgpgYAAhJQABgZAKgcQAMgeATgOQADgDADAAQADAAADADQADADAAADQgBAEgFAGIgJAJQgMANgEAXQgGAUAAASQAAAyAWAXIAJAHQAFAEABAEQAAAEgDADQgCABgEAAQgDAAgEgBg");
	this.shape_4.setTransform(91.3,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_5.setTransform(82.1,21.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgKAtIgPgnIgRgsIgBgFQAAgEADgDQADgCAEgBQAGAAACAHIAZBCIASgsIAIgWQADgGAFAAQAEAAADADQADADAAADQAAAEgQAnIgUAtQAAAJgIAAQgHAAgDgJg");
	this.shape_6.setTransform(71.6,21.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgJBHQgCgDAAgEIAAgSIgBgRIABgXIABgWQAAgFACgDQADgCAFAAQADAAADACQACADAAAFIgBAWIgBAXIABARIAAASQAAAEgDADQgCACgEABQgEgBgDgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEADABQAGgBADAEQADAEAAAEQAAAFgDADQgDAEgGgBQgDABgEgEg");
	this.shape_7.setTransform(64.1,18.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFBEQgDgCAAgDIAAgMIAAgLIgCg4IgWgBQgIgCAAgIQAAgFACgCQADgDAEAAIAUACIAAgOIAAgMQAAgEADgDQADgCADAAQAJAAABAOIAAAIIAAAHIAAAGIANgCQALAAADABQAGACAAAHQAAAEgCADQgEADgEAAIgEAAIgGAAIgMABIACA4IAAAFIAAAFQAAAVgKABQgEAAgCgEg");
	this.shape_8.setTransform(56.4,19.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbArQgOgNAAgUQAAgTANgVQAPgYARAAQAJAAAMAFQAPAFABAIQgBAFgCACQgCADgEAAQgDAAgCgCIgEgDQgGgFgNAAQgJAAgKASQgJARABALQgBANAJAHQAJAHALAAQAGAAAGgEIAMgFIAEgCQAEAAADADQACADAAADQAAAHgPAIQgNAFgJAAQgTAAgNgMg");
	this.shape_9.setTransform(46.6,21.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_10.setTransform(36.1,21.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeBGIgCgFQAAgEAEgDQACgDAFAAQAFAAAGANIAGAKQADAFAFAAQAEAAADgHIADgKIgEg6IgDg1QAAgFADgEQADgDAEAAQAEAAADACQADACAAADIAEA3IACA8QAAAOgIALQgJAMgMAAQgVAAgNgggAAHhSQgEgDAAgFQAAgFAEgDQADgDAFAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgFAAgDgDg");
	this.shape_11.setTransform(25.5,21.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBCQgOgNAAgWQAAgaAOgOQAOgQAVgBQALABAGADIAKAHIADg4QABgIAIAAQAJAAAAAJQAAAOgEAvIgBAbQAAAhADAQIAAADQAAAEgDACQgDACgDABQgGgBgDgIQgHAEgIAEQgHACgIAAQgUAAgNgOgAgWABQgIAKAAAUQAAAMAJAKQAIAJAMAAQAIAAAFgDQAEgCAHgGIADgEIAAgRIAAgLIAAgLQgEgIgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape_12.setTransform(16.5,18.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAiAzIgGgfIgaAFIgZAFIgRAmQgEAFgFAAQgDAAgEgDQgDgDAAgEQAAgFAPgfQgCgCAAgDQAAgIAKgDQALgTARgcQAWglAGAAQAIAAACALIAHAhIAOBDIAGAPIACALQAAAEgCADQgEADgEAAQgJAAgGgXgAgMAHIAjgHIgIglg");
	this.shape_13.setTransform(3.3,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,2,140.7,31.9);


(lib.GameBackgroundbubblered = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("incorrectwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AKKjCI0TAAQhRAAg5A5Qg5A5AABQIAAAAQAABRA5A5QA5A5BRAAIUTAAQBRAAA5g5QA5g5AAhRIAAAAQAAhQg5g5Qg5g5hRAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF9900","#FFE600"],[0,1],-0.1,19,0,-18.9).s().p("AqJDDQhQAAg6g5Qg5g5AAhRIAAAAQAAhQA5g5QA6g5BQAAIUTAAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#00B3FF","#B3D1FF"],[0,1],-0.1,19,0,-18.9).s().p("AqJDDQhQAAg6g5Qg5g5AAhRIAAAAQAAhQA5g5QA6g5BQAAIUTAAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AqJDDQhQAAg6g5Qg5g5AAhRIAAAAQAAhQA5g5QA6g5BQAAIUTAAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-20.5,171,41.1);


(lib.GameBackgroundbubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("correctwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AKKjCI0TAAQhRAAg5A5Qg5A5AABQIAAAAQAABRA5A5QA5A5BRAAIUTAAQBRAAA5g5QA5g5AAhRIAAAAQAAhQg5g5Qg5g5hRAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF9900","#FFE600"],[0,1],-0.1,19,0,-18.9).s().p("AqJDDQhQAAg6g5Qg5g5AAhRIAAAAQAAhQA5g5QA6g5BQAAIUTAAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#00B3FF","#B3D1FF"],[0,1],-0.1,19,0,-18.9).s().p("AqJDDQhQAAg6g5Qg5g5AAhRIAAAAQAAhQA5g5QA6g5BQAAIUTAAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AqJDDQhQAAg6g5Qg5g5AAhRIAAAAQAAhQA5g5QA6g5BQAAIUTAAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-20.5,171,41.1);


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
	this.shape_17.graphics.f("#000000").s().p("AgOAfQgHgFAAgJQAAgOAKgEQgIgFAAgJQAAgIAGgFQAGgGAHAAQATAAAAASQAAAGgCADIgHAEQAHADACAEQADAEAAAIQAAAJgGAFQgHAFgJAAQgJAAgFgEgAgJAGQgEAEABAHQAAAFAFADQADACAEAAQAHAAAEgEQACgDAAgGQAAgFgEgEQgDgCgGgCIgJAFgAgIgXQgCADAAAFQAAAHAKACIAHgDQADgCAAgFQAAgGgDgCQgCgCgFAAQgFAAgDADg");
	this.shape_17.setTransform(-36.3,1.6);

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
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* play();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D5FFD7","#61EF01","#1DA400","#004A00"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgwAAgigjQgjgigBgxQABgwAjgiQAigjAwAAQAxAAAjAjQAjAigBAwQABAxgjAiQgjAjgxAAIAAAAg");
	this.shape.setTransform(11.9,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.general_buttoncolor, new cjs.Rectangle(0,0,23.7,23.6), null);


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


(lib.check_mark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AidByQgZgzgHghQACgIADgEQAFgFAPAAQARgBAcAnIAZAnQAegbAfgzQAhg5ASgcQBBhlBmgSQAAABAAAAQAAABABAAQAAAAAAAAQABABAAAAQADABAAAPQAAAKhvCLQh4CYhJBBQgXgmgUgpg");
	this.shape.setTransform(19,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AidByQgZgzgHghQADgIACgDQAEgHAQABQARgBAdAnIAYAnQAegcAfgyQAhg5ASgcQBBhkBmgTQAAABAAAAQAAABABAAQAAAAAAAAQABABABAAQACACAAAOQAAAKhuCLQh5CYhJBBQgYgmgTgpg");
	this.shape_1.setTransform(22,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.check_mark, new cjs.Rectangle(0,0,41,40.5), null);


(lib.bk3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF9933","#980189"],[0.008,1],53.8,-17.5,53.8,22.4).s().p("AhSChQgKgEgHgBIgIgCIAKgFQAQgIAIgGQAkgkABgFIgBgCIgFgBQgNAAgTAIIgUAJIABgBQA6hQAAgOIgBgDIgCgBQgIAAgbARIgkAYIgBgBQAEgLAJglQAJglAAgIQAAgBAAAAQgBgBAAgBQAAAAgBAAQAAgBgBAAQgeAggaAVQgNgpgIgcIgEgQQAHAIAJAIIAFADQAQANALAAQADAAAAgMIAAgEQgEgeAAgMQAAgQAFgLQAKgXADgLQAIAnAZAlIATAbQAiAwAFAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAIAAgDQgDgMgCgMIAAgUIAAgGQAAgXAEgPIADgOQACAOAUAsIACAEIALAiQAFATAHALQAQgTAtgwQgQAvgUAvQAAAAAAABQAAABAAAAQABABAAAAQABAAABAAQAJgNAdgTIAtgdIACACQAAAJgUAnIgGAOQgEAIgFAEQgeARAAAGIABADIACAAQANAAAhgQQAbgNANgJIABAAQgTAfgkAeIggAYIAAABQABABAAAAQAAAAABAAQAAABABAAQAAAAABAAIAqgPIABABQgDAJgbANQgYAMgUAEIgDABIgUAGQgnAMgJAAQgzAAgTgHg");
	this.shape.setTransform(116.2,175.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#6A6A6A"],[0,1],125.1,-9.1,125.1,2.7).s().p("AhKAvIgNgEIAAAAIANgBQAPgFAYgMIASgJIANgIQAKgHAGgFQANgNAggUQASgMAGgFQAJAHgCAVQAAAJgDAZIgBAIIgBAGIgBAFIgBAAIgDAAIAAADIABACQgHAHgQAHQgXAJgLAAQg+AAgigIg");
	this.shape_1.setTransform(50,189.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF9933","#660033"],[0.008,1],76.2,-16.3,76.2,23.6).s().p("AA4CoIAAgBIAFgGQARgVAAgIIgDgDQgPALgTAAIAAgJIADgLQAAgFgEAAQgGAAgWALIgZAMIAAgBQAJgRAAgGIgBgBIgDgBIhFAeQAEgKAAgIQABgKgFAAIgYAbQgNAMgXAHIgFABIgIABIABgBIAAgCQAAgFADgCQALgNAAgMQAAgGgFgCQgVgHgFAEIgCABIgCgEQgBgCAAgJIAAgEQAKgCAHgFQAHgHABgGIABAAIABgWQAAgMgNgeIgNgaIADgBQAYAFAJAOIAFANQADAHADAEIADgBIAAgJQAAghgVgnQgOgcgZgfIAAAAQAqAaAaAhQAWAbAKAfIACgBIAAgxIgBgIQgEgYgPggQgVgrgJgVQBJBMATAsQAHAPAAALIgDAJQgDAJABAIQgBABADADQAKgMAAgHQAAgHAJgeIAEgRIANgyQACAWAMAtIACAHQAOAtAAAaQAAAGgEAKQgEAJAAAFQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAqgZA4g3QgFAJgCAPIgEAaQgKAkgOAQQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAIAkgaQAbgTAXgJQgIASgcAqQgbAmAAABIAAADIADABIAWgLQAXgLAMgCIAAABQgOAUgVAQQgIAHgTAIIgBABIgLAEIgJACIgBABIAAAAQgMAEgKAAQgKAAgGgFg");
	this.shape_2.setTransform(93.7,174.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#919191"],[0,1],120.9,-8.1,120.9,3.7).s().p("AiSAtQgJgGgCgJIAAgFIgBgEIAGgDQAOgKAWgJQAUgKAagLQBBgaAiAAIABADIgZAOQgZAPgNAQQgGAJgOAJIgNAHIgMAGQgWALgQADQgKACgGAAQgDgFgCAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAIAAAFIgGgEgAA0ArIgKgEIAGgOIABgHQACgOAAgTIAPgLQAQgKAcAAQARAAAQAVQAMAPADASIAAAHIAAADQABAFgJAGQgNAJgUAAQgMAAg1gFg");
	this.shape_3.setTransform(54.2,188.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#66CCFF","#B4FEFD","#FFFFFF"],[0,0.6,1],997.2,-60.1,997.2,5.8).s().p("AgBAJIAAgQIADAGIAAABIgCAIIAAAAIAAABg");
	this.shape_4.setTransform(67.6,138.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#67E473","#015C13"],[0.008,1],328.6,-53.2,328.6,53.4).s().p("AgVgQIAAgKIALAAQAGgDANgMQAIAAAGALIAABFIgsADg");
	this.shape_5.setTransform(40.2,150.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#67E473","#015C13"],[0.008,1],26.3,-24.1,26.3,82.5).s().p("AjnA5QAbgUAoAAQgUgOguAHQgzAMgVADQATgbAmgQQAogRAgAHIABgFIAFAAQghgVACgOQARAAAPALIAZARQAPgVAzgOQgDAHgKAJQgKAJgDAIIAvgOQAigIAVAKIgmAKQgVAHgKALQAmgDAeALQAdAMAJAVQgqgTgrADQAJAKAWAUQASASABARQgqg3grANQAnAbAFArIgbgaQgSgOgPABQAIAIgGABQgKgHgdAAQgHABgNAIQgMAHgDAAQABgHAKgHQAJgJACgFQgdgCgiAVIgbASQgQAKgNAEQAFglAfgUgADDAMQgLACgFAPQgHARgGADQgCgKAFgQQAEgQgBgIQgFgRgbgIQghgGgPgEQAogOAbAJQgHgFgagOQgWgLgKgKQAcgGAyAZQgLgPgPgiQAOgDAPAMIAWAVIADgRQACgMAHgDQAAAHACAKIACANQAfgQALgCQgCAHgJAGQgMAHgCADQA8ACAMAfQgNADgPgBQgPgCgIgFIAXAeQAQAUAAAVQgLACgMgMQgRgPgEgCIAOAsQAIAggRAMQgEgHgIgbQgFgXgLgGIgOAjQgKAVgLAJIAHhIg");
	this.shape_6.setTransform(80.8,115.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FF9933","#660033"],[0.008,1],197.4,-32.1,197.4,7.8).s().p("AhmAJIAAgCIAIgEIADACQAJAEAFgBQANAAAGgGIACAAIAGAHQAEAFAFAAQAFAAAKgFIAMgHIAagVIABABQgFAKgBAFIABADIADAAQBEgPAYgPQgMAPgQAKIgTAHIgGACIgMAFQgJAFAAADIAAACIABAFIgEABQgYAGgtAAQgKgBgxgVg");
	this.shape_7.setTransform(305.7,190.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#67E473","#015C13"],[0.008,1],96.6,-70.2,96.6,36.4).s().p("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");
	this.shape_8.setTransform(409.7,167.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#67E473","#015C13"],[0.008,1],353.6,-31.2,353.6,8.7).s().p("AghA1IgHgFIgEgDIgCgDIgCABIgBABQgBAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABIgGAAQgBgCAAgHIAAgKQACgGAFgCIgEgCIgDgCQgCgCAAgFQAAgLAJgCIAFgBQAFgCABgDQgCgFACgDQACgCAGgEIAJgFIAGgHIAIgHIAIAAIAAABIABAAIAAAAIACABIACgCQADgBAEAAIAAgCIACABIABABQAXgIASgBIAABbIABAAQAIAAAAACQAAABAAAAQAAAAgBABQAAAAAAABQgBAAgBABQABAAABAAQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAIgFABIgGAAIgKAAIABABIgUAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgCAAIAAACIgDAAIgGgBIgBAAIAAABIgDAAIgDgDIgHAAIgHADQgFACgLAAIgCgBg");
	this.shape_9.setTransform(244.2,189.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#ADFC36","#BB9500"],[0.008,1],-50.1,-6.8,-50.1,8.4).s().p("AhhBbIgGgEQgMgJgHgOQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAFANAQIAFAFIgfAAIgDgBIgOAAIgDAAIgCgEIgNgOIAAgBQgHgKgDgCQgQgZgGgaQAHALANAMQAPAOAJAAIADgBIAAgEIgNgnQgHgSgBgUQAIAQAEAFQAPAUAIgBIACAAIAAgLIgBgPIAAAAQAVAUADAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAgBIgBgPQAAgKAFgBIgDAEIACABIADgBIAFALQABADAGAFQAFAGAEAAQAIAAADgoIAAAAIADAJQADAHAIAAQAHgBALgOIAWgbIAAAAIgBASQAAAMAIAAQACAAAagdQAZgbAEgGQgCANgFAUQgFASAAAOQAAAHACADQAFgIAkgVIAAAFIgKAfQgGAOABAMIAAAIQABAHAKAAQAJAAARgNQASgNAKgRIAAAAQgKAfABAGIAAAEQABAFADAAQAEAAAQgOQAQgOAMgDIAAAIQgDAKgEARQgFANAAAPQAAABAAAAQAAAAAAABQABAAAAAAQAAABABAAIABgBQACgJAOgGIAQgGIAQgDIACABQgOAJABAMQgOACgEAGQAAACAAAIIAAAGIABADIgMgBIgBABIgCADQgBACgOAAQgJAAgFgFQgDgGgBABQgEADgDACQgIAEgHAAQgFAAgBgEIAAgGIgCgBIgJAHQgGADgDABQgOAAgBgCQAAgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgCAAQgTAHgMAAQgDAAAAgFIAAgCQAAgEgDAAIgJAEQgIADgGABQgGgBgBgDIAAgCQAAgHgCgCQgDAIgNAAQgIAAgDgPIgCAAQgBAAgFAJQgDAHgFACIgFABIgCgBQgDgBgEgFIgGgHIgCAAQAAADAFAKIADAHQAAAFgHAAQgKAAgNgIg");
	this.shape_10.setTransform(220.2,182.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FEDD92","#D2A679"],[0,1],1026.9,-112,1037.9,-7.2).s().p("ApdAHIABAAIAAAAIgBAAgAm2gFIABABIAAAAgAJegGIAAAAIAAAAg");
	this.shape_11.setTransform(101.6,193.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#C25812","#FF9933"],[0,1],-3.5,16.1,-8.2,-1.5).s().p("AhFBQIgKgKIgKgIQgSgNgMgMQgKgKgCgOIgCgYQAEAIARAKQASALAKAAIACAAIAAgDQgBgKgJgRQgHgPAAgPQAAgLAFgDQAEAFACANQAGASALAAQAIAAAEgYQABAFAEAIQAGALAGAAQAMAAAYhAIAGAvIAAALIABAAIAUgTIALgUIAAAAIAAAuIgEAOIACACQAqgbANgbIABAAIgLAiQgGASgHAOQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAJgHAZgOQARgLAGgHIgUAjQgKAPgZAXIACACQAXgLArgZQgMAQgWAUQgTAQgMAGQgGADgFAAIgEgDQgDgCgEAAQgFAAgHACIgSAGIggAIIAAgBIALgNQANgSAAgJIAAgEIgCAAIgMAUIgIALQgJALgGAAQgEgKgFAAQgRAOgCAAQgKAAgDgFg");
	this.shape_12.setTransform(163.8,184.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#67E473","#015C13"],[0.008,1],28,-88.1,28,18.5).s().p("ANuCMIAAgBIAAABgANOCMIABgCIABACgAMFCMIABgBIAAABgALdCMIAGgDIAAABIAAACgALCCMQAEgEACgIIADAIQACADAEABgAF+CMQAEgEAVAAQAjgCAAgNIgBgEIAIAAIAAABIABAGQAAABABAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAEADQAHAFAKAAIADgBIAdAAIACABIAmAAIAHAAQAUgBAGgEIAHAIIADADgAC0CMQAFgGADgGIABAAIAAAAQgCAEgGAIgABZCMIAGgGIAHAGgAizCMIAGgCQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAgAjmCMIAJgDIAJgDIAEgBIAAABIAAABIABAEIABABgAnkCMIARgBIACABgAqPCKIACAAIABABIgDgBgAm+BwIABgBIAAACgAEPBqIABgBIAAABgApQBiIABAAIAAABgAiaBeIAAAAIAAABgAECBJIAAAAIAAABgAttBCIADAAIgCACgAJdAxIACAAIAAACIgCgCgAmOAiIABAAIAAAAgANpAiIABgBIAAABgAESAMIAAgBIABABgADdAEIAAAAIAAAAgAq1iLIABAAIAAAAIgBAAg");
	this.shape_13.setTransform(144.9,177.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#67E473","#015C13"],[0.008,1],46.4,-16.2,46.4,23.7).s().p("ADFCtQgQgEgfgBIgdgBIgBABQgFADggABQgYgBgIgDIgEgDIgBgCIAAgCQAAgBAAAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgHADQgKAEgNAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAAAIAAgBIgBgDQA+gWAAgVIgBgCIgCgBIgdAJIAAAAIArgqIAEABIAQgBQARgCAFAEIADAEQACAEADAAQABAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAQAGgTACgEQAJgNAZgDIABgFQAAgGgDgJQgDgJAAgGQAAgIAIgGQAIgGAagJQAFgDANADQAKAAABgOQgBgGADgDQAGgGASAAQAGgBAGAGIAGAGIANgOIAAgCIAIAAQAIAAADAEIADAEIAGAJIAKgSIACgCQAFgJAEAAQAFAAAIAJIABABIACgBIAAgEIgBgJQACgOAaAAIAQAJQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQgCgEACgDQACgHAOAAQAYAAALASQAEAHACAIIABAFIADgFQAEgGAEgDQANgOATAAQATAAANAQIAFAHQAFAHAAAEIAAACIAAABIAAADIACAAIABAAIABgDIADgBQAFABAEAFQADAFAAADQAAAGgMAMIACABIALgCQATAAgBASQAAALgIAKIAKAHQALAGAAAFIgBADQACABAGAAIAIAAQgCgaARABQAQgBADALQADAMABgBQAEAAAAgGQgDgFAAgDQAAgDACgCQAFgDAPAAQALAAAAAMIACAAQACAAADgEQAFgGANABQADAAAEAIQAEAIABAGQgIADAAAEQAAADADADQADAEAAAEQAAASgcAFQgdADAAADIABABQATgEAAATQAAAEgIAJIgHAGIgJADIgRABIAAADIAEAFQAAANgzgBQgGAAgCAEIgEAEIgEACIgmABIgCgEQgDgDgBAAQgBAAAAAAQAAAAgBABQAAAAgBABQAAAAgBABIAAAAQgDAEgRAAQAJgDghAAIgLADIgDgEIAKgHIAZgUQAfgWAAgNIgBgBIgCgBQgGAAgVANIgdARIAAgBQAJgJAVghQAUggAAgDIgBgBIgBgBQgUAVgEACIgmAYIAAAAQAGgLAKghQAJgeAAgFIAAgBIgCgBQgPAbgFAGQgQAUgVAMIAAgBIABhAIgDgBIgBABQgJAcgUAPIgDgfIgFgeQgDAGgRAlQgNAcgFAAQgJAAgDgPQgCgRgCgEIgCAAQAAAIgEANQgEAPgEABQgHgBgGgRQgFgTgFAAQgHAAAAASQAAANAQArQgggKgHgJQgJgWgEABIgBABIAAAJQACAJACASQADAQAHALQAGAIAWAQIgDACIgNAHIgFADQgJAGgNgBIgHABIgOAAIgVABIgXgFgAk2CsQgTAAgEgEIgBAAQgEgDgDAAIgTADIgJABIgoADQgNgBgOgDIgCgBIgBgBIAPgFQAKgFAKgHQATgNAHgKIABABQABAGgFANQAAADADACQAQgKAygSIAAACIgEAOIAAADQABADAEAAQAQAAAlgYQgDAJAAAGIAAAFQACAFAIAAQAJgBADgBIAHgEIABABQgFAOgFAHIgDADIgFgDIgCgBIgHABQgLAAgRAFIgDABIgPAFIgGgBgAnjCoIgDAAIglgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgBgFQgCgUgLgPQgRgZghAAQgNAAgVAKQgKAFgFAEQAAgggRABQg5AAg0AZIgrASIgNAHQgYALgIAJIgBACIgCADIAAlVIADABIAEAAQAYAIAOATIACAAIABgDQAEgHATAAQAIAAAGACQAFADADAEQAFAFAAAEIgDAJQgDAHAAAFIAAAEIAFAAQADAAAFgDQAGgDALgBQAMAAAAAUQAAAaADAGIABgBIABgEIABgBQABgBAMAAQAHAAAMAJQALAJAAACQAAACgDAEIgCABIABACIAFABQAtAAgCANIgDAJQABAEAKAAQAFAAAFgCQAEgCASAAQANAAACAaQAAAGgIAHIgIAIIABADIACABQAHAAAWgQQAWgPABAAQAFABAFANQAAAGgDAEIACADIACAAQgBgIASAAQAaAAAAAgQAAAIARALQARALAAACQAAAHgRAGQgRAFAAABIAAACIADACIAGgBIAAANIAEAIQAOAQAKgEIAIgEQgBAEgDAGQgEAIgDADQgCAIgDAEIgBAAQgFAGgRABIgGAAgAL3CdIgnAAIgBgBIgdAAIgTgCQgEgCAAgGIACgDIADAAIACAAQAHgEAFgFQAHgJAAgHQAAgIgIgIIACAAQAqgHAAgWIAAgHIgFgGQAAgCAEgDQADgCAAgCQgEgZgPAAQgMAAgHAGIgEgFQgEgEgKgBQgJAAgGAFIgGAEIgJgFQgEgDgHAAQgSAAAAAZIgJAAQgBgHgSgLQAGgKAAgKQAAgJgCgEQgFgIgRgCQAFgHAAgFQgBgLgFgEIAAgMIACgJQAGgOAPAAQAHAAAEAGQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAgYIgCgJQAAgHANgBQAMgBAAgGQgEgPAAgHIAAgEQAEgFANAAQAVAAAIALQADAEACAJIABgBQABgBABgLQAFgLARAAQALAAADAIQADAHADAAIAUgKQAGAAAIATQAIARADABQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQAMAKAAAEIgCAHQAAACAXAEQAXADAAARIAAAJQgDANgKAQQAgAQAAAHQAAACgGAFQgHAFAAAFQAAADAOAGQAOAGAAAJQAAAEgCADQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgHgBAAAKIAAARQgZgUgDgIQgLgbgCAAIgBAAIAAAEIAKAbQAEAFABAJIACAMIAAACIgCAAQgOgKgLgUQgKgSgBABIgCAAIAAADQADAaAUA+QgSgIgQgUIgMgSIgCABIAAAGQAEAYALAWQACAEAIAJQAAAEABACIAGAGIgCABIgKABIgMADgAi3A+IAAAAIAAAAgAnUgNQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAAAIABABIgDABgABJgPIABAAIAAABIAAABg");
	this.shape_14.setTransform(123.5,174.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#ADFC36","#BB9500"],[0.008,1],177.5,19.9,172.4,2.3).s().p("Ag1BxIARgGIAOgHIAQgKQAWgRAAgKQAAgBAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIgnATIg0ANIAAAAQAEgIAAgGQABgHgFAAQgbAVgPAJQgLAGgEAAQgDAAgEgGQgFgHgCAAQgDAAgFAEQgDACgEABIgKABIgCgBIgGgDIAZgOQAAgFgGAAQAFgDAAgFQgDgJgJgGIAAgPQAAgQgDgHQgHgNgFgSQAIAFAFAKQAGAMACACQAGgLAAgVQAAgJgFgcIgHgfIAbAjQAWAdAHAQIACAAQgDgZAVglIATgeIAJgQIAHgOIAAAAIAAASQgCAHAAASIACAgIAAAQQAAALADAFIADgBQAGgTAvgbIBRgsIAAAAIg1BaQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAQArgVAhgHQA1gMATgGIg7AkQguAbAAAFQAAAAAAABQAAAAAAABQAAAAABABQABAAAAAAQALgDAqgGIA5gIIAAABQh8BFAAAEIADAEQANgGAVgDIAqgFIAAAAQgVAegfAQIgGADIABACIADABIAQgGIAsgQIAAABQgHACgHAGIgGAHIgGAFIgFACQgWALg2AAIgGgDIgDgBQg0AOgWAAQgWAAAMgPg");
	this.shape_15.setTransform(315.1,180.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#67E473","#015C13"],[0.008,1],217.5,-90.3,217.5,16.3).s().p("AGCB2IABgBIABABgABuBuIACgBIAAABgAC3BmIABgBIAAABIgBAAgAGaBfIABAAIgBAAgAC1BZIABAAIAAABgAnBA5IAAAAIABAAgAHBAAIABAAIgCAAgAF1grIAFAAIgFABgAFYhlIAAAAIAAABgADLh0IAAgBIAAABg");
	this.shape_16.setTransform(288.8,179.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#67E473","#015C13"],[0.008,1],-71.5,-68.8,-71.5,37.8).s().p("AAAAFIAAgLIABgBIAAANIgBACg");
	this.shape_17.setTransform(351.6,157.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#67E473","#015C13"],[0.008,1],175.2,-18.3,175.2,21.6).s().p("AsLC1IAAgCIAFAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQgBAAgBABQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgCgIgBIgBAAIAAhbIADAAQAKAAABACQAAABABABQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIAEgIQAGgHALAAIAIACQAFADADAAIAFgCQALgGAEAHIACACQACAAAEgFIACgIQgEgLAAgGIAAgFIAUAAIAIAEQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgGQgDgIACgGQAFgNAegBIAFADQADAAAGgIQAGgJAGgBQAEAAAHAKQAIAIAEgBQAAAAABAAQABAAAAAAQAAAAABAAQAAgBAAAAQgDgIABgGQACgLASABQADAAAKAIQAKAKADAAQACAAABgEIADgIQAFgMAVABQAHgBAPAYIgBAGQAfgIAGATQAAAFgFALIABAFIAFAAIAQgEQgCAGgFAGQgDADAAAGQAAADACABQAHAJAEgBQACAAAEgEQAJgJALAKQADACACAEQAAAEADABQAcgGAMAHQAIAFAAAEQAAADgGAHQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAQAFgDATAAQAQABALAFQAJAFAAAFQAAAHghAVIgBABIgNAIQgaANgTAAQgNAAAAgDQgBgDgCAAQgBgBgFAHQgEAGgEAAQgPgJgEAAQgBAAgDADQgCAEgJAAQgCAAgFgFQgFgEgCAAIgDAAQAFAMggAAIgEgGQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIAAACQAAABgVAAQgFAAgGgGIgFgFIgEAAIACAIQgCAEgRAAQgGAAgBgEQgCgEgCAAIgFAFQgGAEgUAAQgKAAgKgIIgKgHIgDABQAAADADAGQgBAGgTgBQgDAAgGgDIgGgFQgDABgCAFQgEAFgUABIgYgKQgaAPgQADgAEXCnIgfgGQgFgHgEgEIgCgBIgDgBIgBAAIgDgDIgEADQgIADgWAFQggAHgQAAQgrgBgJgHQgCgGgCgBQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgGACIgGABQgKAEgSAAQgYAAgNgEIgDgBIgGgDIgBABIACgCIAFgEIAhgYIgBgCIgCgBQgoAPgJABIAVgTQARgSAAgCIAAgCIgEgBIhBAJIB6hKIgDgBQhiANgNADQBqg7ABgKIgBgBIgDgBIhOAVIgGAAIAAgDQgDgEABgHIAAgHQAEgJATAAQARAAAIAEIAIADQABAAABAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAgUARgPIAJgFIANABQAJABACgJIACgLQAAgUARgBIAKACQADgZAOgLQAOgOAbgBQASABANAIIANAJQACgBAEgHIAHgLIABABIABgBIACgBIAGgFQAFgDAOgEIAeAAQATADAJAOQAJANAFAAIAZgHQAcgIARAAIAMAAIALARQAHAJAGAFIBXABIA9AGQAKABAGAHIAFALQAGAUAOAXQAbABASAGQARAGACAKQAGAXAAAIQAAAMALAGIAWALQAGAEAGALQAGALAAAGIAAAZQAEALAYgEIADAEIAAAHQAAAWgiAKQgJAGgLAFQgWAIgpABQgCAAgDgDQgEgDgDAAIgbAIQgcAJgLABIgKgIQgEgCgIAAIgJABQgJADgBABQgKACgNADQgKAEgSACIg0AGIgfAAIgLABQgIAAgJgFIgLgGIgYAHQgWAFgOABQgFgBgegEgAlECTIABgBIAAACIgBgBgAA7AdIAAAAIAAABg");
	this.shape_18.setTransform(327.8,176.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#67E473","#015C13"],[0.008,1],85.4,-60.1,85.4,46.5).s().p("AGcErQAKgkAAgQIAAgIIgDAAQgJAAgSAPIgVARIAAAAIAAgHQAMghAAgSQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgfA8gfAAQgFAAAAgLQAAgKAIgWQAIgYAAgFIAAgGIgDAAQgMgBgcAaIAAgIQACgNAGgVQAFgRAAgOQAAgEgCgCIgbAiQgXAWgLANQgDgHAAgLQAAgMgCgFQgfAvgKAAQgHAAgDgJQgEgKgBAAQgCAAgEARQgDAUgDAGQgKgHgDgIIgDgJIABgCQADgFAAgCQAAgNgOgGQgOgFAAgCQAAgBAGgHQAHgGAAgEQAAgJgfgOIAAgBQAJgPACgNIABgJQAAgZgugBIACgGQgIgUgLAAQgDAAgIgQQgHgSgIABQgFAAgGADIgIAGIgFgIQgFgGgKAAQgWAAgEAOQgJgPgYAAQgVAAAAAOQAAAJAEAMIgMADQgMADAAAKIABALIAAAPQgFgEgEAAQgZAAgBAbIgBAFIABAGIgGgBIgEAAIgEgKQgNgagcAAQgVAAgVAWIAAAAQgIghgjAAQgWAAACANIgFgEQgGgCgMAAQgKgBgEADQgIAFAAASQgFgIgHAAQgGAAgGALIgCACIgHANQgBgFgDgCQgEgFgIgBIgGAAIgJAAIgCAAIABABIgBAAQgHAIgCAAQgLgHgLABQgLgBgHAHQgHAEgBAFIgBAJQgQACgLADQgrAPAAAVQAAAHABAGIAEAPQgWAGgKAMIgKASIgEgEQgBgBgQAAQgPAAgHABQAcgdAAgLIgBgBIgCgBQg7AmgbAIIgBAAIABgBQASgJAIgOIALgXQARgYAAgYQAAgGgDgDIhLA0IAAgBIAPgrIAKgkIACgIQAAgIgDAAIgDACIgIAOQgQAYglAjIgSg7QgWg+gGAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAgBIAAgIQABgNgEAAIgCABIgGA8IgCAXQgBAUACAOIAAAAQgUgVgJgNIgDgDQgNgbgIgLQgJgMgLghIgIgeQgGABgKAjQgKAiAAAFIAEApIAAAEIAAAGIgSgKQgMgHgEgEIgPgXIgCABIAAAQIADARIALAoQAJAfAFACQgVASgUAMIAAgBQAGgNAAgKQAAgNgQhCIgBgEQgIg7gHgaQgHASgJAkQgFAUgGAPIgHASIgHgSIgIgUQgJgWgNgPQgRgUgYgZIgTgUQgJgJgBABIgDAAIADAIIAdBDQAPAfAEAYQACAKAAAKIgBAKIgUgeQgKgMgJgIQg3gzgLAAIgCABQACAGAlA+IABACQAVAlADAYQgEgIgHgHQgNgMgTAAIgFAAIAAAFIANAeQANAeAAAKIAAAQQgEgFgIgEQgRgJgBgLQgGgjgZAAIgOABQAAgFgEgHQgFgIgFAAQgFgBgQAMIgSAOIgBgBQAGgGAAgHQAAgIgDgIQgHgQgTAAQgIAAgEACQgFACgLAAQgBAAAAgGIAAgKQAAgFgIgEQgLgEgXADQAFgIgPgKQgQgLgXgBQABgQgCgKQgEgSgPAAIgVAGQAGgNAAgHQgBgGgEgFQgEgGgHgDQgHgDgKAAIgXAFIgCAAQgHgGgLgFIgHgEIgSgGIgDgBIAAhFIADAAIAAA7IAtgDIAAhGIACAEIADALQACAEABAAIAFgEIAUgTQAHAAALAUIAGALQADAAAIgLIAHgKIAOAKIARAOIAFgLIABgCQAEgKACAAQAJAAALALIAGAFIAFAHIgBgGIAAgBIgBgCIgBgDIgFgLQgIgQACgNQAEgEALACIAKABIAAAAQAEABADACIABAAIABACIADgCIAEABQAEACAEAAIgHgNQgEgHABgIIAGgDQADgCADAAQAGgBAFAFQAGAFAEAAQAAgHADgIIADgGIAEgGQAEgEADgCIAMgDIACABIAGACIACAAIABAAQAFgDALgKQAKgKAJgCQAKAHgHARIgFANQgDAIAAACQAHgBALgIIADgCIADgDIAGAAIABACIAFAFIAGADIAAAFQAAANAFACIAFgMQADgJADgCIABAAQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAIACAAIAFAEIALAFQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIAAgBIAFACQgFgLAAgJQAAgFACgFQANgFAPAFIAOAIIAIADIABgEQAIgVAXgOIAEAQQABAKAHACQAGAAALgKQALgNAJgBQAEAEgDAGQgDAHACACQAEgBAKgGQAHgGAJABQAEACACAHIAAABQACAFADACIADAAQgDgIAEgKQADgJAIgBQAGABAJAGQAJAGAGABQgDgIACgHQABgIAHAAIAMAMQAHAJAHACQAFgMALgEQANAFAQAUQAFgJANAAQAJADAFALIACADIAIAQQAHABAFgJQAGgHAHAAQADAOASAKQAPgRAJgGIAEgDIACADIAIANQAFAIAJACQAEAAAFgGQAEgGAFAAQAAAJAKAIQALABAJgDIAPgIIAIgOQANgUATgOQAcgUAggCQgbARgMAKQgQAOgIARIgCAIIASgHIAYgKQAbgJAWAFQgGACgfALIgGADQgSAHgHAJIAjAAQAZAAAKAFQAFgJARABQANAAAJAGQACgIAFgEQAFgDAKABQAIACAIADIALAGIADgFQALgVAhgLQAOAIACAGQAIgFASgHIAAABIACABQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBQACgBANAAQAJAAAGAHQAGAJAFAAQABAAAAABQABAAAAAAQAAABABAAQABAAAAAAIgBgCIACgCIgCAAIgEgPIgHgUQAHABAMAGQALAGAIABQgBgYgXgWIgTgPQgKgJgDgHQAOgCAVAEIABgBIAGADIABAAIAAABIAIAHIAMAKIAAAAQAHAJAHAEQABgRgLgQQgOgUgCgIQADgBAEABQACACAIAAIACABIADACIgDAAQAMADAIATQAJAUAIAFIAMgeQAHgRAHgKQACAPgIASQgIATAAAFQAIgCARgRQARgRAOgCQgHALgPALIgZAUQAHABAZgFQAXgGALADQgIAGgVAHQgWAFgIAFQAFAEARgDQAQgDAEAHQgQAGgcAGQAAAGALABQALACgBAHQAAAFgEACQgFADAAACQAEAEAEgBIANgBQAEAFAFAPIAEAIQADAHAFACQgDgGAEgDQACgBAEgBIAHABQAGACAEAHIAJAUQAGgFAKACIASAGQgDgQAUgFQALgCAagDQAAADAFAEIgFAGQgEAEAEAEQAFgBAJgIQAHgGAIABQAIAAAIAMQAJAMAGABQgEgIACgJQACgKAJgBQAIABAIAJQADgMAHAAIABAHIABAAIACAGQADAHAEAEQAFgRAUABQAPABAQAKIATgTQAFgDAGAAIAEAAIAEAAIAVAFIAAABQAEADADADQACgFAEgEQAJgJATADQAOAEAGAHQAGAHABAJQAAgJADgFQACgGAEgDQACABADAGIACADQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAIAAAAIADgGQABgEADgBQAFABADALQADAMAFACQACgGAOABQACABACAJQACAHAEABQAOgMAcABQAMAAAWADIACAAIAAAAIAAABIgCACIABABIACAAIADgBQACABAJAAIACAAQAMAAADgDIACgDIACgBIAAAAIABAAIADABQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAIAAAAIABAAIADgIIAFgSQAFgRAKgDQABAKgFAJQgGALAAAHQAGgCAJgIQAJgHAHgCQAFAJgKAPQgJANAHAIQAFgBAEgDQAGgCAFAAQAJAAADAIIACAHIgBACIgKAQIAQgOIAGgIQAOgNANAGQAEABAGAKQAEAKAHgBQgDgBAEgGQADgFAFABQAKAAAMAJQAMAKAEAAQACgMAQAGQANAFAFAIIABACIADgCQAFgEAMACIALACIALACIAAgCQgCgKgNgYQgNgZAAgLQAKAEAPANQAPAMAJAGQgBgOAGgOQAHgQACgIQAFAEAGARQAFARAHAEQAagbAVgKQgFAJgOARQgOAQgEAMIAggLQAYgIAOAEIgZAOQgPAIgHAIQAFACAWABQATAAAIAEIgSAGIgNACQAEAFAIAFIALAGQANAGAJABQABACgDAGQgCAEAGAAIATgHQAPgEALAGQAAAIgHAFQgJAFgBAGIAVgHQAJgDAMAJIAAACQh9AHhwAlQBuACBvgRIA6gHIgCgEQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQB+gPCEABQCPADCJgHIkfgEQAAgTAKgCQAFABAGAGQAGAIAGABQAAgOAFgHIABgBIADgBIAEABIABABIACADQADAEAEAAQAGgVANgFQAGADAKAJQAHgJAJgCIAMASQAHgEAHAFIAKAKIAIgBIAIgBIAEACQAFAEACAAQACAAACgGQABgGAKAAQADAAAJAGQAJAEADABIALgFQAMgFAKABQALgBAGAGQAFAFADAAIAKgEQAJgEAHAAQAJAAAEAFIAEAGIABAAIABgBIABABIAOgHIACgBIAAARIgCAAIAAAMQgJAKgHANQgFgFgGgEQgLgGgLAAQgiAAgTARIgDADQgLAJgEAMIgTAQQgQAOAEAOQgZAEgLAJIgGAGQgFARgEAGIgGgDQgIgCgQAAQgWAAgGAKQgCAEAAAIIAAAJQABAFACACIgTAFQgTAEgbAMIAAAAIAAgBQAmg+ALgUIAFgJQAAAAAAgBQgBAAAAAAQAAAAgBgBQgBAAAAgBIgTAMIg5AhQg1AcgPAQIgDgvIADgrQAAgQgDgHQgHAJgJAWIgCAFQgJATgEAHQgcAqgCATQg0hIgHABIgDAAIAAAGQAOA1AAAVIAAAQQgjgpgBgBQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAQAFARAQAiQAEAJABARQABALACAIQgKgEgQAAIgRABQAEgOgPgGQgFgCgMACQgLACgMgJQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgCIgmgBQAAgFAFgIQAGgIAAgDIAAgDIgFgBQgHAAgDACQgCACgGAAIAAgBIAEgOQAAgSgkgBQgEgdgeAAQgQAAgHALQgEAFgBAHQgPgRgLAAQgPAAgFALQgDAGABAGIgGgIQgFgHgGABQgJgBgHAKIgIAJQgegBgKAHQgFAEAAAKIAAAKQgVgFgHAGQgDADACAEQAAAKACAFIAAABIgBAAQgFgCgMAGIgFAFQgOgGgEAAQgJABgHAFQgEADgCADIgQAAQgZACgSAEIgDADIgCAAIgCABIgDACIgCAAIAAgEIgCgDIgDAHIgJAAIgGAHQgEAFgFADQgDgEgBAAQgHgBgTAJQgRAHgFADgAQWgJQgsAAgqADIACgSQADgPAIgFQANAMAGAFQgBgeAKgFIAAAAQAGgCAFACQAEACACAFQAEAQACACQAPgVAQgCQABAFgDAFQgEAGABAFQAFAAAFgEQAFgEAGABQAEACAFALQADALAHABQgBgQAKgMQAFABAHAGIAIAGIADACQACgYAaACQADADAFAOIABACIAAADIAGgEIANgGQAKgHALAAQAJAFAFAOQAAACgEAHQgDAFADAEQAFABAFgDQAEgFAEAAIAHAJIAEAGIjAgDgAUog0IgCgCIACABIAEAEIgEgDg");
	this.shape_19.setTransform(194.6,157.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FEDD92","#3CCC49"],[0,1],1638.8,-460.5,1698.8,-233.7).s().p("EgoOAK0IAAlEIgGAAIAAtnIABgBIABAAIADgCIABAAQABAFgBAHQACAIAPAHIAXALIADAAQAbAIAyAAQA0gBARgOQAHgFAEgIQAVAKA4AAQAVAAAPgJQALgJAAgIQAIAOAlgKQAWgBAIgEQAKAIAhAAIBEgGQACAAAGAEQAGADAHAAQALAAAFgCIACABQAJAAAJgGQAFgDAKAAIATAAIAHAFQAIAFATABQAHAAASgIIAXABQAHAFADAAQAGABAEAEQAJADAkABQAdgBA7gRIAYAAQAEADAJAAQAGAAAGgCIACgBIALAAIACADQAGAFAeABQAhAAAFgFQA0AAAZAGQAYAFAIAAQATAAgFgDQAbAAAJADQACgBAKgGIAKgHIABgBIAOAAIAIAHIAEAGQAFAGALAAQAGAAAOgPQAEAAADAMQANgHAKgJIABAAIgPAPIAAAEIACAAIAhgIIAkgKQAFAAAEAGQAFAAAIgFQADAFAGAAIAMgDQAcABABADQASgBAAgGIABADIABABIAAADQAFgBARAAQAdgBAAgFIABgBIDOAAIAEAEIAAABIABAAIACABIABAAIAjADIASgBIABAAIAAgDIACABQALAKAQAAQAJAAAAgJIAAgGQACADAHAAQAFAAAFgEIAPAAIAHABIAEgBIAHAAIAAACQACAFAJAAQAIgBAOgGIACAAQAAALAHgBQAGAAAXgGQAHAAAHADQANgBAIgGIACAAQAAAAAAAAQAAABAAAAQABABAAAAQAAABABAAQADAEAIABQAHgBAKgHIAAAAQAGAJAUAAQAGAAACgCQACgDARgBIgCAHIgBAJIAAABIAAABIABAFQABAFACACIAHAAIACgCIADgCIAFAGQAHAEAKAAQAGAAAHgCIAKgCIADABQABACAEAAIADAAIAVABIAVgCIAEAAIAOACQAYAAAegRIAKAFQALADAHAAQARAAAGgJIAIAEQAFACAKAAQALAAACgDQAAgEABgCIAOAGQAJADANAAQAIAAAEgCIALgFQADAGANAAQAJAAAEgDIAFgFIAEAEQAFADAPAAIALAAIABgCQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAIAAQAQAAAGgFIAFgEIAGADQAFADAFAAQAEAAAFgDIAHgDIAHADQAEAFAEAAQAFAAADgEIAEgFQAEADAJAAQAbAAAegRQAEAFAPAHQAdANAkAAQAfAAAbgIQAJALAWgEIApgLQATgFABABIADAEQACABAOAAQAwAAAagQIACAAQABAFAEACQAJADAjABQAeAAAJgIQACALAHACQAMAFApgBQAWABATgGQAegJAJgBQABAEAHAEIAAgCIACACIAIAHIARACIAzAIQANAAAWgGIAXgGQADAAAJAFQAKAFAHAAIAKgBIAfAAIA4gGQAogDAYgNIAIAAIAGAGQAGAFAOAAQAHAAAzgSQAAAAABAAQAAAAABAAQAAABABAAQAAABABABQACACAFAAQAoAAAagKQAMgEALgHQAkgJgBgdIAAgHQgCgFgGgFIgWAAQgCgCAAgJIgBgNIAHAAQAGgFAGABQAIACADgBIA8AAQADAEAAAEQAEACAfAAIACAHQADAEALAAQAEAAACgCQAdgFAJgPQAEgHAFgMIgDAMIgDATIAEABQAPgEAQgPQAVgUAGgEIABAIIgDARIABAEIAGABQAOAAANgEIAggGIgBAMIAAAHIAEABIAJgEIAQAAQAEADAFABQAFAAAEgFICtAAIANgCIAuAAQATANAIAAQAEAAABgKIACgNIAFAJQAEAGADAAIADgCQACgCADgBIADAHQADAEAFAAQAGAAAJgNQAKgOgCgJIAAg/IAMAeQAHAWAAAKIgBAIIADAAQAIABAGgXIAIAXQAGAQAFAAQABAAAGgLQAFgLABgEQABADACAOQADAMAIAAIAIgCIAVgDQACAKAJAAQAEAAAKgIIACADIABACIAAABIADACIAOAAQAUgDAKgDQAJgCAJgGIABABQAAAEgCADQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIAAAEQABAEAEAAIARgGIAcgIIAcgIIAOgFQANgHAIgBQAVgFATgBQgDADgEAKIgDAKQAAAHAFgBIARgFIAdgKIASgGQALgEAOgCIgHAUQgEAJAAAIIAAAEIAEABIANgFQAMgFAEgCIAJgCIAEgDIAGAAIgBAKQAAAIAJAAIBDgIIADAFQAFADAGAAQADAAANgFIAPgGQACgDADgGIADgIQACAKAEANQAFAPAFAAQAHAAAEgIIAGgKIADAIQADAIAEAAQADAAAHgJIAKgMIAEAFIAJAAIAEgCICHgBIgHUJg");
	this.shape_20.setTransform(295.7,241.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#66CCFF","#B4FEFD","#FFFFFF"],[0,0.6,1],1712.1,-8.2,1712.1,100).s().p("AfQM8QgEgPgFgHIg5AAIgEgTQgDgJgDgHIgVgBIgdAEQAFgQgCgLQgEgTgigBQgEAAgIAGQgIAEgJAAQgEgJgFgGQgKgMgeANQgOAGgHAPQgHANACAKIgHgFQgDgCgQAAQgGAAgHAHQgIAIgEAAIgUAAQgLAEAAALIABAPQgRAAgNADQgHACgDACIAAgRIgBgBIAAAAIgQgPQgIgGgPgCQgGgEgDgEQgCgCgBgPQgBgMgHgGIg8gCIgEgNQgDgJgMgFIgkgEIgsABIgGAFQgDAEgGABIgHgLQgEgJgIgDQgIgCgOAKQgPAKgDAAIgEgBIABgBIgCgDIgigBQgSAAAAAXIAAAEIAAgBIhfACQgLACgRAHIgQAGQgGAAgMgQQgJgMggARQgZAOgEAEQgDADAAAMIACANIADANIAAADIgCABQABgGgBgBIgmACIgHAEIgDADIgIgDQgGgEgeAAQgJAAgHAHQgFAGAAAGIAAABIAAAAQgWgNg3gBIg2AAIAAgcQgDgIgIgJIgRgOIgmAAIgCABQADgHgBgDQgDgGgVAAIgYABQgDgDgCgIQgBgHgDgCQgZAAgBgCQgBgGgCAAQgCgBgEADQgFAFgDAAIgDgGIgRAAIgaACQgHACgFAEIgEAGIgBAEIgEAEIgCACIgDAEIAAABIgIACIgFADQgEgKgOABQgGAAgJADIgLAEQgIgKgRAAQgMAAgKAFQgJAEgEAAQgOgLgIAAQgKABgEAFQgCAEgBABIgJgGIAAAAIgFgBQgJADgFgBIgjgbIgCgBQgFABgEADIgHAGIgCgBIgBgBIgBgBIgEgFIgCgBIAAAAIgBgBIgFAAIgDAAQgFADgFAIIgJANQgBgFgKgFQgEADgDAHIgHALIgFgGIgHgFQgEgDgDAAQgEACgEAFIgFAIIgBABQAAgEgGgCIgIgDQgCgXgTgCQgQgCgWAKQgCgSgTADQgTACgGANIgJgGQgFgEgHABIgDAHIgEAIIgCAEIgCgDIgFgIIgEgHIgBgBQgDAAgDACQgCACgEgCQADgDgBgDIgDgFIgBgCQgHgBgGADIgFAEQgKAHgHAAQgBgHgEgEIgFgDQgJgEgKAFIgBACQgEAIgCARQgEgBgFgGQgFgGgFgBQgFAIgDAPIgFAWIgCAAIgEgDIAAABQgQgMgFAAQADgFAAgEQgIgIgQAAQgNAAgMAGQAAgFgDgCQgDgFABgCQgOgBgKgEIgJgFQADgCAQgDIAHgCQAGgDABgEQgJgDgQgCIgbgFQAEgCAVgLQAPgJAFgKQgMgDgUAFQgaAEgIABQAEgIAOgPQAKgPgCgMQgPADgQAPQgSAQgJAEIgIgZQgGgNgKgEIgIAaQgGARgEAIQgZgWgWgKQACAPAMAZQAIAOADAKIgFABQgFgGgGgBIAAACIgGgJQgJgKgKABIAOAOQAIAJADAHQgJACgVgKQgSgKgPAJQgIgKgNgEQgPgFgIAKQgCgIgHgEIgEgCIgEgBIgNgDIgDACQgDAAgCgCIgBgCIAAgBIgKAQQgCgPgPAAIgGABIABgDIgGAAIgCAEIgDgBIAAgDIAEgKIABgCQAIgOgGgJQgHgCgIAHQgHAFgDgDIADgMIACgIIAAgEIAAgDIgBAAQgOAAgGAQIgGARIgBADIAAABIgBACIgBABIAAABIgBABIAAgBQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABIgBABIgCABIgCAAIAAABQgEAFgTAAIgBgDIACgCIgEgBIgBgBIgEAEQgNgHgYAAQgKAAgJACQgQACgMAGQgBgHgGgHIgCgCIgKAAQgFAAgBACIgCgDQgKgTgHgEQgCAJgFADQgEgJgKAAQgCAIgFAFQgHgQgWgBQgTAAgNALIgCACIgCgCQgOgLgUAFIgIACQgOAGgIAMIgXgLIgDADQgEAFgJAAIgHAAIgIADIgBgFIgDgBIgBAAIgBgGIAAgEIgDgDQgKABgBAKQgIgHgGgCQgQAHACARQgHgMgVgEQgYgFgHgFQgGACgLAAIgRABQgUADgCARQgQABgSgQQgFgGgGgDQgLgGgJACQgEgIgMgRQgLgOgDgMIAggJQACgEgEgCQgBgBgBgBQAAAAAAgBQAAAAAAAAQABgBABAAIAXAEIgDgFQgagBgIgCIAUgJQAMgEADgJQgJgEgOACQgTAEgJgCQADgGAPgMQAOgLAAgIQgQgCgPAMQgRANgDAAQAFgSAAgJQABgPgIgGQgFAHgJAWQgIAUgGAIIgOgYQgGgJgHgDIAAgCQgDgGgKAAIgDAAIgQgCQACAIANARQAKAOABAOIgOgLQgCgFgEgDIgHgGQgEgEgCAAIgIgHIgBABIgCABQAFAFAEACIABABIgGgBQgJAAAAACIgLgBI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");
	this.shape_21.setTransform(295.6,83.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B16A01").s().p("Ag5CCQgEgFgOgCIACgHIAFgFIBHhXIAlglQAqgrBShMQAEAcgiAfIgdAZQgQAOgGAMQhEA7g6BZIgFACIgDACIgEADIgCgDgAiTB2IADABIgMADQAFgEAEAAgAikB3IACgCIAGgJQAGgKADgPIAEgwIAIgtQAFgagDgOQAOACgCAIIgBAKIgCAAQgHAagDAxIgFA6IAAAEIAAACQgHgBgLAGIgHAGg");
	this.shape_22.setTransform(80.5,128.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("APtCvIAEgBIADALgAPlCvIACABQAFACgDACIgEgFgAMkCRIADABIgDABIAAgCgALWCKIgBAAIABgCIACgCIAAACIAAACIgCAAgAgKBHIgCgGIADgBIABACIACAJgADkA0IAEgBIAAABIACAAgAgDgSIADAAIAIABIgCACIgJgDgAvBhKIABAAIgCASIABgSgAlLhTIAHgCQgBACgFAFgAvvi4IgBAFQgHgEAIgBg");
	this.shape_23.setTransform(164.3,132.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("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JACAAATIgDAAIgFgGIgGgIQgEgBgFAFQgFAEgFgBQgCgFADgFQAEgHAAgCQgGgOgIgFQgLAAgLAHIgNAHIgFADIgBgDIgBgCQgFgOgCgCQgbgDgBAYIgEgCIgHgGQgHgGgGAAQgJALAAARQgGgCgEgLQgEgLgFgCQgFgBgFAEQgGAEgFAAQAAgFADgFQADgGgBgFQgQACgOAVQgCgBgFgRQgCgFgDgCQgEgCgGACIgBAAQgJAGAAAdQgGgEgMgNQgIAFgDAPIgDASIgHAAIAFgXQAEgOAEgIQAGABAFAGQAFAGADABQADgRADgIIABgDQAKgEAKAEIAEADQAFAEAAAHQAHAAAKgIIAGgDQAGgDAHAAIABADIACAEQACAEgDADQADABADgBQADgDACABIABABIAEAGIAFAIIACAEIADgEIAEgJIADgGQAHgBAFAEIAJAGQAGgNASgCQAUgDACASQAWgKAPACQAUACABAXIAJADQAFACAAAEIACgBIAFgIQADgGAEgBQAEAAADACIAHAGIAFAGIAHgLQAEgHADgDQAKAFACAEIAIgMQAFgIAFgDIAEgBIAEABIABABIAAAAIADACIAEAEIABAAIABABIABABIAIgFQAEgEAFAAIACABIAjAbQAEAAAJgDIAFABIABAAIAIAHQACgBACgFQAEgFAKAAQAIAAANALQAEAAAKgEQAKgFAMAAQARAAAIAKIAKgEQAKgEAGAAQAOAAAEAKIAFgEIAIgBIgBgBIAEgEIACgCIADgEIACgFIAEgFQAFgFAHgBIAZgCIARAAIAEAGQADAAAEgFQAEgDADABQABAAACAFQABADAYgBQAEADABAHQABAIADADIAZgCQAVAAACAHQABADgDAGIACgBIAnAAIARAPQAIAIADAJIAAAcIA2AAQA3ABAVAMIABABIAAgCQAAgFAFgGQAGgHAJAAQAfAAAGAEIAHADIAEgDIAHgEIAlgCQABABgBAGIACgBIAAgDIgCgNIgDgNQAAgMAEgDQADgEAagOQAfgRAJALQAMARAGAAIAQgGQASgIAKgCIBfgBIABAAIAAgDQAAgXASAAIAiABIABADIAAABIAEABQADAAAPgKQAOgKAIACQAHADAFAJIAHALQAFgBAEgEIAGgFIArgBIAkADQAMAGADAIIAEAOIA9ACQAGAFABANQABAO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MQAIAVAWArQAOAgAFAYIABAIIAAAyIgDABQgJgggWgbQgaghgrgaIAAAAIAAAAQAZAfAPAcQAUAnAAAiIAAAJIgCABQgEgEgCgHIgGgNQgIgPgYgFIgBgBQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAAABIANAbQANAeAAAMIgCAWIAAAAQgBAGgHAHQgIAFgKACIABAEQgBAJABACIADAEIABgBQAFgEAVAHQAGACgBAGQAAAMgLANQgCACgBAFIAAACIAAABIAIgBIAFgBQAXgHANgMIAYgbQAEAAgBAKQAAAIgEAKIBGgeIADABIAAABQAAAGgIARIAAABIAagMQAVgLAHAAQAEAAAAAFIgDALIAAAJQASAAAQgLIACADgEggMAGhIABAAQAEAEATAAIAGABIAQgFIADgBQARgFALgBIAHAAIACAAIAFAEIADgEQAFgGAEgOIAAgCIAAABIgHAEQgEABgIABQgJAAgCgFIAAgFQAAgHADgIQglAYgPAAQgFAAgBgDIAAgDIAEgOIAAgCQgyARgQALQgDgDAAgCQAFgNAAgHIgBgBIAAABQgIAJgTAOQgKAHgJAFIgQAFIgBAAIACABIADABQANADAOAAIAogCIAJgBIASgDIABAAQADAAADADgAwgGIIgBADQAAAGAEABIASADIAdAAIACABIAnAAIAFABIALgDIALgCIABAAIgFgGQgCgCAAgEQgHgJgCgFQgLgVgFgZIAAgFIACgBIAMASQAQATATAJQgVg/gDgZIAAgDIACgBQABAAAKASQAMATANALIACACIAAgCIAAgCIgBgNQgBgIgFgFIgKgbIAAgEIACgBQACAAALAcQADAIAYATIAAgQQABgKAHAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQADgEAAgDQAAgJgOgGQgOgGAAgDQAAgFAGgFQAHgGAAgDQAAgGgggQQAJgQADgNIABgJQAAgRgXgEQgXgDAAgCIABgHQAAgEgMgLQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgDAAgIgSQgJgSgFAAIgUAKQgDAAgEgHQgDgIgLAAQgRAAgEALQgBAKgBABIgBABQgDgIgCgEQgIgLgVAAQgOAAgDAEIgBAFQAAAHAEAPQAAAFgMACQgMABAAAHIABAJIAAAXQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgEgGgIAAQgPAAgFAOIgDAJIAAAMQAGAEABAKQAAAFgGAIQASACAFAIQACAEAAAKQAAAKgGAJQASAMABAHIAIAAQAAgZATAAQAHAAADACIAJAGIAHgFQAGgEAJAAQAKAAAEAFIAEAFQAHgHALAAQAQAAAEAaQAAACgEACQgDACAAADIAFAGIAAAGQAAAXgrAHIgBAAQAHAIAAAHQAAAIgHAIQgFAGgGADIgDAAIgDABgAhCBKQgNgIgJADIgUAGQABgGAIgFQAIgFgBgIQgKgGgPAFIgTAGQgGAAACgDQACgGgBgDQgIgBgNgGIgLgGQgIgFgEgFIANgCIARgFQgHgFgUAAQgWAAgEgCQAHgIAOgIIAZgNQgOgEgYAHIggALQAFgLAOgRQAOgQAFgKQgVAKgaAbQgHgEgGgQQgFgRgFgFQgDAJgHAPQgFAOAAAOQgIgFgQgNQgOgNgKgEQAAALANAZQAMAXACAKIABACIgLgCIgMgCQgLgCgGAEIgDACIgBgCQgFgIgNgFQgQgFgCALQgDAAgNgKQgMgIgJAAQgFgBgEAGQgEAEADACQgGAAgFgIQgFgLgEgBQgNgFgOAMIgHAIIgPAOIAJgPIACgDIgDgGQgDgJgJAAQgFAAgGACQgEADgFABQgHgHAKgOQAJgPgFgIQgHABgIAIQgJAHgGACQAAgHAFgLQAFgJgBgKQgKAEgEARIgGARIgDAJIgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgEgBIAAAAIgBAAIgBABIgCADQgDADgMAAIgDAAQgJAAgBgBIgEABIgCAAIAAgBIABgCIAAAAIABgBIgCAAQgWgDgNAAQgcAAgOAMQgEgCgCgHQgCgIgBgCQgOgBgDAGQgEgCgDgLQgEgLgFgCQgCABgCAFIgCAFIgBABQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgDgDQgCgGgDgBQgDADgDAGQgCAFgBAKQgBgKgFgHQgHgHgNgDQgTgEgJAJQgEAEgDAGQgDgEgEgDIAAAAIgVgGIgDAAIgFAAQgGABgFACIgSATQgQgJgPgBQgUgCgFARQgEgDgDgIIgCgGIADABIABAEIAIgCIAGAAQAKAAADgFIADgEIAYALQAHgLAPgGIAHgCQAVgGAOAMIABACIACgCQAOgLASAAQAWAAAHARQAGgFABgJQAKABAEAJQAGgDABgJQAHAEALASIABAEQABgCAFAAIAKgBIACADQAGAHACAHQALgHAQgCQAJgBALAAQAYgBANAIIAEgEIAAABIAFABIgCACIAAgBIgCACIgBABIABABIACAAQATAAAEgFIAAgBIADAAIABgBIACgCQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIAAAAIAAAAIABgBIAAgBIACgCIAAgBIABgEIAGgRQAGgPAOgBIAAAEIAAADIgBAJIgEAMQAEADAHgGQAHgGAIACQAGAJgIAOIgBACIgBAAIgEADQgEADgBADIAGABIgBADIAAABIADgBIACgDIAGAAIgBADIAHgBQAPAAACAOIAKgPIAAABIABABQABADAEAAIADgCIAMACIAEACIAEACQAIAEABAHQAJgJAPAFQAMAEAJAJQAOgIASAIQAVALAKgCQgDgIgJgHIgOgOQALgCAIALIAHAIIAAgCQAGABAFAGIAHAJIgDgLQgDgIgHgOQgNgZgCgPQAWAKAZAWQAFgJAFgQIAJgaQAJAEAGANIAIAZQAKgEASgQQAQgPAPgDQACAMgLAPQgNAPgEAIQAIgBAZgFQAVgEALADQgEAKgQAIQgVALgDACIAaAEQARACAIAEQgBAEgFADIgIACQgQADgCACIAIAFQALAEANAAQAAADADAEQACADAAAEQANgFANAAQAPAAAIAHQABAFgDAFQAFAAAQAMIAAgBIADADIgDABIAAgCgAk8AMQADgDgFgCIgCgBIAEAGgEgmOAAAIgOgLIgHAKQgJAKgCAAIgGgKQgLgTgIAAIgUASIgEADQgCAAgBgDIgEgKIgBgFQgFgKgJAAQgNAMgGADIgMAAIAAgDQARgFAOgLQAIAAAGAFQAFAHACAQQASgVAHAAQAJAAANAXIADAFIAGgFIALgOQAIAAAPAPIAHAHIADgHQAEgNAHAAQAIAAALAJQgIgPgCgUQAFgFAMABIAPABIAAgBIACAAQAEAAAGAFQADgDgCgFQgGgMABgEQAEgGALgBQANgCAFAHIADgIIABgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgGAMgJIACgEIgDAAIAAgCIAFgFIABAAQAHgbAFgoIAKhSQgJAAgJAIQgLAJgGACQgHgIAGgLIALgQQgXAFgdAUQgiAWgPAGQgKggAWgZQASgUAhgJQgVgFgfAIQgrAKgHABQABgOAOgPQAMgNARgKQANgGAYgFIAogHQgNgSgKgRQAQgBATAIQATAIAJANQAaggA6gFQgBAIgHAGQgJAHgCAEQAXgIAgABQAkABAMANQgjABgjAQQA7AEArA2QgIgBgfgLQgcgKgVABQAIALASAVQAPATAGATQgJABgLgPQgPgVgIgFQgSgMgTAFQAEAJAQAUQANAVAAAUQgGAEgHgKIgNgRQgEgEgKgEQgKgFgEgDQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABQADAEgBACQgGAAgJgDQgJgEgGAAQgCABgBAFIgHAiIgDAuIgDAoIgBACIgCAJIADAEIAAARIgBAAIABAEIAOgMQAJgHAJgCIAMAJQABAIgCAIIAEgDIABAAIgDAGIAFAAQApg+BFhGQArgsBYhUQgMgKgagGQgegGgOgEQALgFAwgGQglgbgPgJQAOgGAYAFQAOADAXAIQgBgGgHgOQgHgNgBgJQAMgCAQAJIAXAQIAFgSQAEgKAIgCQAGAHADAXIAXgIQANgGAIAHQgCAIgOAIQAxAKAOAeQgKADgLAAIgXAAQAFAKAQAUQANATgEASQgNABgUgMIAGAnQACAbgPAIQgMgHgHgSQgEgLgFgZIgSAnQgKAXgQAGQgCgPADgSQAEgWAAgNQgFAEgMAXQgJAQgOACQABgGAHgNQAEgKgBgIQh7BphOBwIABACIABABIABAAIABAAIACABIAIAGIgCgIQgBgMAPgEQAJgCALADQALACAHAHQAXgfAMgHQAPAGgBAUQAGABAKgKQALgLAIgBQAFAAADAFIAGAHIAOgEQAIgCAEAGQADgCADgHQADgHAEgBQAJAAAHAFIANAHQACgBgCgHQgCgIAEgDQASgGAMAZQANgFAQgLIABABIgCABIAYAVQAZgOAPAfIAEAJQAGgBAHgIQAGgIAHAAIADAJQAFAOAGADQAGgCAJgKIAEgEQAGgGAFgBQAGABAFAHIACADQAFAMAGACQAFAAAHgIQAGgIAHAAQAAAKAHALQAOAEAJgKIAJgNIADgGQAVgaAjgRQAmgTAgAGQgyAZgdAjQA4gWAnAIQgIAJgVAIIgPAFQgOAFgFADQASAGAcgFQAagEAPAGIAEgFQADgEAFgDQAKgBALAEIASAGQAKgQATgKQAWgMAPAPQAKgIAGgBQAIgDAHADQAFgCALAAQAMAAADAEIACAGIAEADIgCgJIgBgBQgEgTgDgGQAPADAWALQABgVgWgUIgUgQQgMgKgFgHQADgCAGgBIACADIAIgCIALACQAAgCAJAAIAGAAIAAgBQgEgBgGgFIACgBIACgBIAIAGQABAAAEAFIAHAFQAEAEADAFIANALQgBgOgKgOQgMgRgCgIIAPACIADAAQALAAADAFIAAADQAHADAGAJIANAYQAHgIAIgUQAIgWAFgIQAJAHgBAPQgBAIgEATQADAAARgOQAPgMAQADQAAAHgOALQgQANgDAGQAKACASgEQAPgDAJAFQgDAIgNAFIgTAIQAHACAaACIAEAEIgYgDQgBAAAAAAQgBABAAAAQAAABABAAQAAABABAAQAEADgBADIghAKQADALALAPQANARADAIQAKgDALAHQAFADAGAFQASARAQgBQABgRAUgDIASgBQALAAAGgCQAGAEAZAFQAUAFAHALQgBgQAPgHQAGABAIAIQACgKAKgBIACADIAAAEQgGgBgDAMQgJgIgIgBQgIAAgCAKQgCAJADAJQgFgCgJgMQgJgLgHgBQgJgBgIAHQgIAHgFABQgEgDADgEIAFgHQgEgEAAgDQgbADgLADQgUAEAEAQIgTgFQgJgDgHAGIgIgVQgEgGgHgCIgHgCQgEABgBABQgFADADAHQgEgDgDgGIgEgJQgGgPgEgEIgMAAQgFABgEgEQABgBAFgEQAEgCgBgFQABgHgKgCQgLgBAAgGQAcgFAQgHQgEgHgQADQgRAEgFgEQAIgGAVgFQAVgGAIgHQgLgDgXAGQgZAFgGgBIAYgTQAPgMAIgLQgPADgQAQQgSARgHACQAAgFAIgTQAHgSgBgOQgIAKgGARIgMAdQgIgFgJgUQgJgTgMgDIADAAIgCgCIgCAAQgJgBgBgCQgEgBgDABQACAIANAUQALAQgBARQgGgEgHgIIgBgBIgLgKIgIgHIgBAAIAAgBIgGgDIgIgCIgEAAIAKADQgVgDgOABQAEAIAKAIIASAQQAYAVAAAYQgHgBgLgGQgMgFgHgCIAGAUIAFAPIABAAIgBACIABADQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQgFAAgGgIQgGgIgJAAQgNAAgDACQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgBgBIgBAAQgRAGgIAFQgDgFgNgJQgiALgLAVIgCAGIgMgHQgIgDgIgBQgJgCgGAEQgFADgBAIQgKgGgNAAQgRgBgEAJQgLgEgZAAIgjAAQAHgKASgHIAHgCQAfgLAFgDQgWgFgaAJIgZAKIgSAHIADgIQAHgRARgOQAMgKAbgRQghACgbAVQgUAOgNATIgIAOIgOAIQgKAEgLgCQgJgIAAgJQgFAAgEAGQgFAGgFAAQgIgBgGgJIgHgNIgCgCIgEACQgJAGgPARQgSgJgDgOQgHgBgGAIQgGAIgHgBIgIgQIgBgDQgGgLgIgDQgOABgFAIQgQgUgMgFQgMAEgEAMQgHgCgHgIIgMgNQgIAAgBAIQgBAIADAHQgHgBgJgGQgJgGgGgBQgHACgEAJQgDAJADAIIgDAAQgDgCgCgFQgCgIgEgBQgKgCgHAGQgJAHgEAAQgDgCADgGQAEgHgEgDQgJABgMAMQgLALgGgBQgGgBgCgLIgDgQQgYAOgHAVIgCAFIgHgEIgPgIQgOgFgNAFQgCAFgBAFQAAAJAFAMIgEgCIgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgKgGIgGgEIgCAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBgBAAAAIAAAAQgDADgDAIIgGAMQgFgCAAgNIAAgEIgFgEIgFgFIgCgBIgGAAIgDACIgDACQgKAIgHABQgBgCADgIIAGgNQAHgRgLgHQgJACgJAKQgLALgGADIAAgBIgDABIgFgCIgDgBIgDgBQgEAAgEADQgEACgDAEIgFAGIgDAHQgCAHAAAIQgFgBgFgFQgFgFgGABQgEAAgDACIgFADQgCAJAFAHIAGAMQgDABgFgDIgDAAIgDABIgCgBIAAAAQgEgDgEAAIAAgBIgJAAQgMgDgEAEQgCANAIARIAFAJIABAEIABACIAAABIABAFIgFgGIgGgGQgLgJgIAAQgCAAgEAJIgBABIgFALIgRgMgEghDgDjIgkAnIhJBXIgEAFIgCAHQANACAFAFIABADIAEgDIAEgDIAFgBQA6hZBEg9QAHgLAQgOIAcgZQAjgfgEgcQhTBMgqAqgEgjygDfIgIAuIgFAvQgDAPgFALIgGAJIgCACIAAAAIAHgFQALgGAGABIAAgCIABgFIAEg5QAEgyAHgaIgBATIACgTIACgLQACgHgPgDQAeABAKAGQAFAAgHgJQAPgBASAPIAbAZQgGgrgmgaQArgNArA2QgCgQgSgTQgWgUgJgKQArgCArATQgJgWgdgLQgfgMgmADQAKgMAVgHIAngJQgWgKgjAIIguANQADgHAKgJQAKgKADgHQgzAOgPAWIgZgSQgPgLgSABQgBANAgAVIgEABQgIABAHADQgggGgoARQgmARgTAaQAUgDA0gLQAugHAUAOQgoAAgcATQgeAVgFAlQANgEAQgKIAbgSQAigVAdACQgCAFgKAIQgJAIgCAHQAEAAAMgHQANgIAGgCQADAOgEAbgA+sj/QALgIAJgVIAPgkQAKAHAGAWQAIAcAEAGQAQgLgHghIgOgsQADABASARQAMAMALgCQAAgWgQgUIgXgfQAIAGAPABQAPABANgDQgMgeg8gDQACgDAMgHQAJgGACgHQgLACgfAQIgCgNQgCgKAAgHQgIAEgCALIgCASIgWgWQgQgLgOACQAQAiAKAQQgxgZgcAGQAKAKAWALQAaANAHAGQgbgJgoANQAOAEAiAHQAbAHAEARQACAJgEAQQgFAQACALQAFgEAHgRQAGgPALgCIgHBIgAovg9IACgJIABgCIAAAQgEgjqgBtIgBADIAAABIgCACIAAABIADgHg");
	this.shape_24.setTransform(296.1,149.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37.6,-1,516.9,312.2);


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
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmTest',{loop:-1});
		
		
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up}]}).wait(1));

	// vol_frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1.5,1,1).rr(-33,-12,66,24,4.9);
	this.shape_5.setTransform(-24.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-114,-13,161.8,30.1), null);


(lib.STAR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TEXT
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(163.9,172.7,1,1,0,0,0,150.5,39.4);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78));

	// Layer 5
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(168.2,169,1,1,0,0,0,191.1,191.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:190.7,regY:193.2,rotation:9.3,x:167.4,y:171},0).wait(1).to({rotation:18.7,x:167.1,y:170.9},0).wait(1).to({rotation:28,x:166.8,y:170.7},0).wait(1).to({rotation:37.4,x:166.6,y:170.4},0).wait(1).to({rotation:46.7,x:166.3,y:170.1},0).wait(1).to({rotation:56.1,x:166.2,y:169.9},0).wait(1).to({rotation:65.4,x:166.1,y:169.5},0).wait(1).to({rotation:74.7,x:166,y:169.1},0).wait(1).to({rotation:84.1,y:168.9},0).wait(1).to({rotation:93.4,x:166.1,y:168.4},0).wait(1).to({rotation:102.8,x:166.2,y:168.1},0).wait(1).to({rotation:112.1,x:166.4,y:167.8},0).wait(1).to({rotation:121.4,x:166.6,y:167.5},0).wait(1).to({rotation:130.8,x:166.8,y:167.3},0).wait(1).to({rotation:140.1,x:167.1,y:167.1},0).wait(1).to({rotation:149.5,x:167.4,y:166.9},0).wait(1).to({rotation:158.8,x:167.8,y:166.8},0).wait(1).to({rotation:168.2,x:168.1},0).wait(1).to({rotation:177.5,x:168.5},0).wait(1).to({rotation:186.8,x:168.8,y:167},0).wait(1).to({rotation:196.2,x:169.1},0).wait(1).to({rotation:205.5,x:169.4,y:167.2},0).wait(1).to({rotation:214.9,x:169.7,y:167.5},0).wait(1).to({rotation:224.2,x:169.9,y:167.7},0).wait(1).to({rotation:233.6,x:170.1,y:168.1},0).wait(1).to({rotation:242.9,x:170.2,y:168.4},0).wait(1).to({rotation:252.2,x:170.3,y:168.7},0).wait(1).to({rotation:261.6,x:170.2,y:169},0).wait(1).to({rotation:270.9,x:170.3,y:169.4},0).wait(1).to({rotation:280.3,x:170.2,y:169.7},0).wait(1).to({rotation:289.6,x:170.1,y:170},0).wait(1).to({rotation:298.9,x:169.8,y:170.3},0).wait(1).to({rotation:308.3,x:169.6,y:170.5},0).wait(1).to({rotation:317.6,x:169.3,y:170.8},0).wait(1).to({rotation:327,x:169,y:170.9},0).wait(1).to({rotation:336.3,x:168.7,y:171.1},0).wait(1).to({rotation:345.7,x:168.3},0).wait(1).to({rotation:355,x:168},0).wait(1).to({regX:191.1,regY:191.1,rotation:360,x:168.2,y:169},0).wait(1).to({regX:190.7,regY:193.2,rotation:369.3,x:167.4,y:171},0).wait(1).to({rotation:378.7,x:167.1,y:170.9},0).wait(1).to({rotation:388,x:166.8,y:170.7},0).wait(1).to({rotation:397.4,x:166.6,y:170.4},0).wait(1).to({rotation:406.7,x:166.3,y:170.1},0).wait(1).to({rotation:416.1,x:166.2,y:169.9},0).wait(1).to({rotation:425.4,x:166.1,y:169.5},0).wait(1).to({rotation:434.7,x:166,y:169.1},0).wait(1).to({rotation:444.1,y:168.9},0).wait(1).to({rotation:453.4,x:166.1,y:168.4},0).wait(1).to({rotation:462.8,x:166.2,y:168.1},0).wait(1).to({rotation:472.1,x:166.4,y:167.8},0).wait(1).to({rotation:481.4,x:166.6,y:167.5},0).wait(1).to({rotation:490.8,x:166.8,y:167.3},0).wait(1).to({rotation:500.1,x:167.1,y:167.1},0).wait(1).to({rotation:509.5,x:167.4,y:166.9},0).wait(1).to({rotation:518.8,x:167.8,y:166.8},0).wait(1).to({rotation:528.2,x:168.1},0).wait(1).to({rotation:537.5,x:168.5},0).wait(1).to({rotation:546.8,x:168.8,y:167},0).wait(1).to({rotation:556.2,x:169.1},0).wait(1).to({rotation:565.5,x:169.4,y:167.2},0).wait(1).to({rotation:574.9,x:169.7,y:167.5},0).wait(1).to({rotation:584.2,x:169.9,y:167.7},0).wait(1).to({rotation:593.6,x:170.1,y:168.1},0).wait(1).to({rotation:602.9,x:170.2,y:168.4},0).wait(1).to({rotation:612.2,x:170.3,y:168.7},0).wait(1).to({rotation:621.6,x:170.2,y:169},0).wait(1).to({rotation:630.9,x:170.3,y:169.4},0).wait(1).to({rotation:640.3,x:170.2,y:169.7},0).wait(1).to({rotation:649.6,x:170.1,y:170},0).wait(1).to({rotation:658.9,x:169.8,y:170.3},0).wait(1).to({rotation:668.3,x:169.6,y:170.5},0).wait(1).to({rotation:677.6,x:169.3,y:170.8},0).wait(1).to({rotation:687,x:169,y:170.9},0).wait(1).to({rotation:696.3,x:168.7,y:171.1},0).wait(1).to({rotation:705.7,x:168.3},0).wait(1).to({rotation:715,x:168},0).wait(1));

	// Layer 4
	this.instance_2 = new lib.star_big();
	this.instance_2.parent = this;
	this.instance_2.setTransform(164.2,172.6,1,1,0,0,0,83.7,106.2);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,51,255,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:88,regY:98.9,rotation:-9.3,x:167.3,y:164.7},0).wait(1).to({rotation:-18.7,x:165.9,y:164.3},0).wait(1).to({rotation:-28,x:164.6,y:164.1},0).wait(1).to({rotation:-37.4,x:163.2,y:164.2},0).wait(1).to({rotation:-46.7,x:161.8,y:164.4},0).wait(1).to({rotation:-56.1,x:160.5,y:164.9},0).wait(1).to({rotation:-65.4,x:159.3,y:165.6},0).wait(1).to({rotation:-74.7,x:158.2,y:166.5},0).wait(1).to({rotation:-84.1,x:157.3,y:167.5},0).wait(1).to({rotation:-93.4,x:156.6,y:168.7},0).wait(1).to({rotation:-102.8,x:156.1,y:170},0).wait(1).to({rotation:-112.1,x:155.8,y:171.3},0).wait(1).to({rotation:-121.4,x:155.6,y:172.7},0).wait(1).to({rotation:-130.8,x:155.8,y:174.1},0).wait(1).to({rotation:-140.1,x:156.1,y:175.4},0).wait(1).to({rotation:-149.5,x:156.7,y:176.7},0).wait(1).to({rotation:-158.8,x:157.5,y:177.9},0).wait(1).to({rotation:-168.2,x:158.4,y:178.9},0).wait(1).to({rotation:-177.5,x:159.5,y:179.7},0).wait(1).to({rotation:-186.8,x:160.7,y:180.4},0).wait(1).to({rotation:-196.2,x:162,y:180.8},0).wait(1).to({rotation:-205.5,x:163.4,y:181},0).wait(1).to({rotation:-214.9,x:164.7,y:181.1},0).wait(1).to({rotation:-224.2,x:166.1,y:180.8},0).wait(1).to({rotation:-233.6,x:167.4,y:180.5},0).wait(1).to({rotation:-242.9,x:168.6,y:179.8},0).wait(1).to({rotation:-252.2,x:169.8,y:179},0).wait(1).to({rotation:-261.6,x:170.7,y:178},0).wait(1).to({rotation:-270.9,x:171.5,y:176.9},0).wait(1).to({rotation:-280.3,x:172.1,y:175.6},0).wait(1).to({rotation:-289.6,x:172.5,y:174.3},0).wait(1).to({rotation:-298.9,x:172.6,y:172.8},0).wait(1).to({rotation:-308.3,y:171.5},0).wait(1).to({rotation:-317.6,x:172.3,y:170.1},0).wait(1).to({rotation:-327,x:171.8,y:168.8},0).wait(1).to({rotation:-336.3,x:171.1,y:167.6},0).wait(1).to({rotation:-345.7,x:170.2,y:166.6},0).wait(1).to({rotation:-355,x:169.1,y:165.7},0).wait(1).to({regX:83.7,regY:106.2,rotation:-360,x:164.2,y:172.6},0).wait(1).to({regX:88,regY:98.9,rotation:-369.3,x:167.3,y:164.7},0).wait(1).to({rotation:-378.7,x:165.9,y:164.3},0).wait(1).to({rotation:-388,x:164.6,y:164.1},0).wait(1).to({rotation:-397.4,x:163.2,y:164.2},0).wait(1).to({rotation:-406.7,x:161.8,y:164.4},0).wait(1).to({rotation:-416.1,x:160.5,y:164.9},0).wait(1).to({rotation:-425.4,x:159.3,y:165.6},0).wait(1).to({rotation:-434.7,x:158.2,y:166.5},0).wait(1).to({rotation:-444.1,x:157.3,y:167.5},0).wait(1).to({rotation:-453.4,x:156.6,y:168.7},0).wait(1).to({rotation:-462.8,x:156.1,y:170},0).wait(1).to({rotation:-472.1,x:155.8,y:171.3},0).wait(1).to({rotation:-481.4,x:155.6,y:172.7},0).wait(1).to({rotation:-490.8,x:155.8,y:174.1},0).wait(1).to({rotation:-500.1,x:156.1,y:175.4},0).wait(1).to({rotation:-509.5,x:156.7,y:176.7},0).wait(1).to({rotation:-518.8,x:157.5,y:177.9},0).wait(1).to({rotation:-528.2,x:158.4,y:178.9},0).wait(1).to({rotation:-537.5,x:159.5,y:179.7},0).wait(1).to({rotation:-546.8,x:160.7,y:180.4},0).wait(1).to({rotation:-556.2,x:162,y:180.8},0).wait(1).to({rotation:-565.5,x:163.4,y:181},0).wait(1).to({rotation:-574.9,x:164.7,y:181.1},0).wait(1).to({rotation:-584.2,x:166.1,y:180.8},0).wait(1).to({rotation:-593.6,x:167.4,y:180.5},0).wait(1).to({rotation:-602.9,x:168.6,y:179.8},0).wait(1).to({rotation:-612.2,x:169.8,y:179},0).wait(1).to({rotation:-621.6,x:170.7,y:178},0).wait(1).to({rotation:-630.9,x:171.5,y:176.9},0).wait(1).to({rotation:-640.3,x:172.1,y:175.6},0).wait(1).to({rotation:-649.6,x:172.5,y:174.3},0).wait(1).to({rotation:-658.9,x:172.6,y:172.8},0).wait(1).to({rotation:-668.3,y:171.5},0).wait(1).to({rotation:-677.6,x:172.3,y:170.1},0).wait(1).to({rotation:-687,x:171.8,y:168.8},0).wait(1).to({rotation:-696.3,x:171.1,y:167.6},0).wait(1).to({rotation:-705.7,x:170.2,y:166.6},0).wait(1).to({rotation:-715,x:169.1,y:165.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.4,23.3,319,295.5);


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


(lib.answer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.check_mark();
	this.instance.parent = this;
	this.instance.setTransform(158.6,19.3,1,1,0,0,0,19,19.3);

	this.instance_1 = new lib.HowMany("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.8,29.1,1,1,0,0,0,69.8,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.answer_3, new cjs.Rectangle(-6,0,186.6,47), null);


(lib.answer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WhatKind("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(69.8,28.1,1,1,0,0,0,69.8,16);

	this.instance_1 = new lib.check_mark();
	this.instance_1.parent = this;
	this.instance_1.setTransform(159.6,19.3,1,1,0,0,0,19,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.answer_2, new cjs.Rectangle(10,0,171.6,46.7), null);


(lib.answer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WhichOne("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(69.8,27.1,1,1,0,0,0,69.8,16);

	this.instance_1 = new lib.check_mark();
	this.instance_1.parent = this;
	this.instance_1.setTransform(160.6,19.3,1,1,0,0,0,19,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.answer_1, new cjs.Rectangle(24,0,158.6,43.8), null);


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
(lib.prep_Test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var scoreVar = 0;
		
		this.btn_goNext.mouseEnabled=false;
		
		this.btn_which.addEventListener("click", clickWhich.bind(this));
		this.btn_kind.addEventListener("click", clickKind.bind(this));
		this.btn_how.addEventListener("click", clickHow.bind(this));
		
		//this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		//nav buttons
		function openNext(){
		
		 window.open ("prep_finish.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("prep_Scene7.html","_self");
		}
		
		
		
		//quiz functions
		function clickWhich(){
		
		    scoreVar += 1;
			this.answer_1.visible = true;
			this.btn_which.mouseEnabled=false;
			if(scoreVar >=3){
				this.btn_goNext.visible = true;
				this.btn_goNext.mouseEnabled=true;
				this.GREAT.visible = true;
				var boop = createjs.Sound.play('boopSound',{loop:0});	
			}
			
		}
		
		function clickKind(){
		
		    scoreVar += 1;
			this.answer_2.visible = true;
			this.btn_kind.mouseEnabled=false;
			if(scoreVar >=3){
				this.btn_goNext.visible = true;
				this.btn_goNext.mouseEnabled=true;
				this.GREAT.visible = true;
				var boop = createjs.Sound.play('boopSound',{loop:0});	
			}
			
		}
		
		function clickHow(){
		
		    scoreVar += 1;
			this.answer_3.visible = true;
			this.btn_how.mouseEnabled=false;
			if(scoreVar >=3){
				this.btn_goNext.visible = true;
				this.btn_goNext.mouseEnabled=true;
				this.GREAT.visible = true;
				var boop = createjs.Sound.play('boopSound',{loop:0});	
			}
			
		}
	}
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// Actions
	this.GREAT = new lib.STAR();
	this.GREAT.parent = this;
	this.GREAT.setTransform(277.4,198.6,0.492,0.492,0,0,0,168.7,167.8);
	this.GREAT.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.GREAT).wait(17));

	// Main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgFBMQgFgEAAgFQAAgDADgCQADgDAEAAQADAAADAFQAEAFAAAEQAAAEgDACQgCACgEABQgDAAgDgGgAgGAkIgBgNIAAgLIAAgqIABgqQAAgJAHABQAJgBAAAJIAABsQAAAIgJABQgHgBAAgIg");
	this.shape.setTransform(207.3,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgDAFQgDAGgHAAQgHAAgIgdQgDgPgEgZIgCgPIgBgOQAAgFADgCQACgDAFAAQAHAAACAIIACAOIABAPIAGArQALgdAMgoQADgLAHAAQAIAAACANIAHAjIAGAlIAIgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgHAggNAnQgDAJgGAKQgDAFgHAAQgKgBgGgag");
	this.shape_1.setTransform(198.3,18.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_2.setTransform(186,18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQABgVgIAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIABAJQAAAEgDADQgDACgEAAQgFAAgCgCQgDgDAAgEIAAgJIgBgJIABgbIACgcIAAgJIAAgJQAAgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgDAAQgJAAgBgJg");
	this.shape_3.setTransform(176,18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAaBLQgFgKgKgOIgRgXIgRAMIgBAeQAAAEgDADQgDADgEAAQgJAAgBgOIABgYIABgYIABghIABgiIgBgKIgBgLQABgEADgDQACgCAEAAQAFAAACACQADADAAAEIABALIAAALIgBAfIAAAhIAYgVIAWgWQADgEAEAAQADAAADADQAEADAAAEQAAAEgDADQgMAOgSAPIAVAdQAQAVgBAGQAAAEgCACQgDADgFAAQgFAAgDgFg");
	this.shape_4.setTransform(165.8,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgNADgSQABgIAIAAQAEAAADADQADACAAAFIgBAOIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgPQABgJAJAAQAEAAADACQACADAAAEIgBAlIAAAUIAAAVIAAAGIAAAHQAAAFgCACQgDADgEAAQgIAAgCgJg");
	this.shape_5.setTransform(148.6,18.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_6.setTransform(138,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgZBNQgDgEAAgDQAAgKAVgvIgjhCIgFgIQgCgEAAgDQAAgEADgDQADgDAEAAQAEAAADAEQAQAWASArIAPgiIAPgdQADgGAFAAQAEAAADADQADACAAAEIgBAGIgiBHQgMAbgGASIgGATQgDAHgGAAQgEAAgDgCg");
	this.shape_7.setTransform(127.4,21.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgFBEQgDgCAAgDIAAgMIAAgLIgCg4IgWgBQgIgCAAgIQAAgFACgCQADgDAEAAIAUACIAAgOIAAgMQAAgEADgDQACgCAEAAQAJAAABAOIAAAIIAAAGIAAAHIANgCQALAAADABQAGACAAAHQAAAEgCADQgDADgFAAIgEAAIgGAAIgMABIACA4IAAAFIAAAFQAAAVgKABQgEAAgCgEg");
	this.shape_8.setTransform(111.8,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXAQgQQARgRAVAAQAJAAAKAEQANAGAAAHQAAADgCACIgBAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAJgIQgCgZAAgNIAAgJIABgKIgGgDIgDgBQgPAAgLAMg");
	this.shape_9.setTransform(102,18.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_10.setTransform(91.2,15.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgDAFQgEAGgGAAQgHAAgIgdQgDgPgEgZIgCgPIgBgOQAAgFADgCQADgDAEAAQAHAAACAIIACAOIABAPIAGArQALgdALgoQAEgLAHAAQAIAAADANIAGAjIAGAlIAIgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgIAggMAnQgDAJgGAKQgDAFgHAAQgKgBgGgag");
	this.shape_11.setTransform(78.5,18.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgDAFQgDAGgHAAQgHAAgIgdQgDgPgEgZIgCgPIgBgOQAAgFADgCQACgDAFAAQAHAAACAIIACAOIABAPIAGArQALgdAMgoQADgLAHAAQAIAAACANIAHAjIAGAlIAIgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgHAggNAnQgDAJgGAKQgDAFgHAAQgKgBgGgag");
	this.shape_12.setTransform(58.8,18.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_13.setTransform(46.5,18.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_14.setTransform(35.8,15.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgmBEQgTgJAAgPQAAgEADgCQADgDAEAAQAEAAAFAGQAEAHAEADQAJAGAPAAQAPAAANgHQAQgIAAgQQAAgMgOgHQgMgGgQgBQgQAAgKgFQgOgIAAgPQAAgSATgNQAUgOATgBQAJABAMADQAQAEAAAHQAAAIgJABIgOgDIgPgCQgOAAgLAHQgLAIABALQAAAIANADIAUADQAXACAMAMQAMAKAAAQQAAAXgWAOQgSANgYAAQgRgBgPgGg");
	this.shape_15.setTransform(23.1,16.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#9900CC").ss(3,1,1).p("EAojAYTMhRGAAAMAAAgwlMBRGAAAg");
	this.shape_16.setTransform(275,188.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(17));

	// btn text
	this.instance = new lib.HowMany("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(439.5,312.5,1,1,0,0,0,69.8,16);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdBJQgDAFgFAAQgEAAgCgCQgDgDAAgEIABgIIAAgHIgBgfIAAgeIAAgbIAAgbQAAgGACgFQAEgGAFAAQAIAAAAAJIgBADIAAAFIgBAVIAAAZQAJgGAHgCQAIgDAGgBQAVAAANAQQAMAOAAAXQAAAWgOAQQgPAPgUAAQgPAAgMgGgAgPgDIgOAIIAAARIAAAPIAAAQIANAFQAGACAIAAQANABAJgLQAJgKAAgOQAAgPgHgJQgIgKgNAAQgHAAgJAFg");
	this.shape_17.setTransform(462.7,269.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AglAtIAAhEIABgJIAAgKQgBgKAJAAQAKAAAAAQQASgSAWAAQAJAAADAGQAEAGAAAMIAAAHQAAAMgJAAQgJAAAAgJIAAgHIAAgIQgQABgJAHQgIAHgGAMIABA1QAAAKgLAAQgIAAAAgKg");
	this.shape_18.setTransform(452,272.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_19.setTransform(441.6,272.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgKAtIgPgoIgRgsIgBgEQAAgEADgDQADgDAEABQAGgBACAHIAZBCIASgsIAIgWQADgGAFAAQAEAAADADQADADAAADQAAAEgQAnIgUAtQAAAIgIABQgHAAgDgJg");
	this.shape_20.setTransform(431.2,272.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgOQAOgQAVAAQALAAAGADIAKAHIADg3QABgJAIAAQAJAAAAAJQAAAOgEAvIgBAbQAAAhADAQIAAADQAAAEgDACQgDADgDAAQgGgBgDgIQgHAEgIAEQgHACgIAAQgUAAgNgOgAgWABQgIAKAAAUQAAAMAJAKQAIAIAMABQAIAAAFgEQAEgBAHgGIADgEIAAgRIAAgLIAAgLQgEgIgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape_21.setTransform(420.3,269.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAiAzIgHgfIgaAFIgYAFIgRAmQgEAFgEAAQgFAAgDgDQgCgDAAgEQAAgFAOgfQgBgCgBgDQAAgIAKgDQALgTARgcQAWglAGAAQAHAAAEALIAFAhIAPBDIAGAPIADALQAAAEgDADQgEADgDAAQgKAAgGgXgAgMAHIAjgHIgIglg");
	this.shape_22.setTransform(407.1,270);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdBJQgDAFgFAAQgEAAgCgDQgDgCAAgEIABgHIAAgIIgBgfIAAgeIAAgbIAAgcQAAgFACgFQAEgGAFAAQAIAAAAAIIgBAFIAAADIgBAWIAAAZQAJgGAHgDQAIgCAGAAQAVgBANARQAMAOAAAWQAAAWgOAQQgPAPgUAAQgPAAgMgGgAgPgEIgOAJIAAARIAAAPIAAAQIANAFQAGADAIAAQANgBAJgJQAJgLAAgOQAAgPgHgKQgIgJgNAAQgHAAgJAEg");
	this.shape_23.setTransform(453.3,222.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AglAtIAAhEIABgJIAAgKQgBgKAJAAQAKAAAAAQQASgSAWAAQAJAAADAGQAEAGAAAMIAAAHQgBAMgIAAQgJAAAAgJIAAgHIAAgIQgQABgJAHQgIAHgGAMIABA1QgBAKgJAAQgJAAAAgKg");
	this.shape_24.setTransform(442.7,225.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_25.setTransform(432.3,225.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRBHQgMgdgOg3IgIgbQgGgVAAgFQAAgFAEgDQACgDAEABQAIgBACAJIAEARIAJAgQAJAkAJAaIABgBIAZhGIAIgYQAGgPAGgHQADgEAFAAQAEAAADADQADADAAAFQAAACgCADQgGAJgEAKIgHAWIgbBGQgEAMgHAMQgCAGgFAAQgIAAgDgIg");
	this.shape_26.setTransform(420.7,223.1);

	this.instance_1 = new lib.WhatKind("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(441.7,173.2,1,1,0,0,0,69.8,16);

	this.instance_2 = new lib.WhichOne("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(438.4,129.1,1,1,0,0,0,69.8,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance}]}).wait(17));

	// marks
	this.answer_3 = new lib.answer_3();
	this.answer_3.parent = this;
	this.answer_3.setTransform(144.8,275.9,1,1,0,0,0,90.3,22.4);
	this.answer_3.visible = false;

	this.answer_2 = new lib.answer_2();
	this.answer_2.parent = this;
	this.answer_2.setTransform(129.3,215.4,1,1,0,0,0,90.8,21.9);
	this.answer_2.visible = false;

	this.answer_1 = new lib.answer_1();
	this.answer_1.parent = this;
	this.answer_1.setTransform(115.8,154,1,1,0,0,0,91.3,21.5);
	this.answer_1.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.answer_1},{t:this.answer_2},{t:this.answer_3}]}).wait(17));

	// btn
	this.btn_kind = new lib.GameBackgroundbubble();
	this.btn_kind.parent = this;
	this.btn_kind.setTransform(437.3,174.5);
	new cjs.ButtonHelper(this.btn_kind, 0, 1, 2, false, new lib.GameBackgroundbubble(), 3);

	this.btn_where = new lib.GameBackgroundbubblered();
	this.btn_where.parent = this;
	this.btn_where.setTransform(521.8,288.5,1,1,0,0,0,84.5,19.5);
	new cjs.ButtonHelper(this.btn_where, 0, 1, 2, false, new lib.GameBackgroundbubblered(), 3);

	this.btn_when = new lib.GameBackgroundbubblered();
	this.btn_when.parent = this;
	this.btn_when.setTransform(521.8,241.6,1,1,0,0,0,84.5,19.5);
	new cjs.ButtonHelper(this.btn_when, 0, 1, 2, false, new lib.GameBackgroundbubblered(), 3);

	this.btn_which = new lib.GameBackgroundbubble();
	this.btn_which.parent = this;
	this.btn_which.setTransform(521.8,147.9,1,1,0,0,0,84.5,19.5);
	new cjs.ButtonHelper(this.btn_which, 0, 1, 2, false, new lib.GameBackgroundbubble(), 3);

	this.btn_how = new lib.GameBackgroundbubble();
	this.btn_how.parent = this;
	this.btn_how.setTransform(521.8,335.3,1,1,0,0,0,84.5,19.5);
	new cjs.ButtonHelper(this.btn_how, 0, 1, 2, false, new lib.GameBackgroundbubble(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_how},{t:this.btn_which},{t:this.btn_when},{t:this.btn_where},{t:this.btn_kind}]}).wait(17));

	// Text
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgNALQgFgEAAgHQAAgFAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAFQAAAHgGAEQgFAFgIAAQgHAAgGgFg");
	this.shape_27.setTransform(235.5,101);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgNALQgFgEAAgHQAAgFAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAFQAAAHgGAEQgFAFgIAAQgHAAgGgFg");
	this.shape_28.setTransform(225.1,101);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNALQgFgEAAgHQAAgFAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAFQAAAHgGAEQgFAFgIAAQgHAAgGgFg");
	this.shape_29.setTransform(214.7,101);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AggA9QgSgGAAgNQAAgMAOAAQAFAAAKAEQALADAFAAQAXAAAAgKQAAgFgQgIQgYgKgGgEQgQgMAAgQQAAgYAYgIQAPgFAcAAQAMAAAGADQAIAEAAALQAAAVgLAAQgMAAgDgKIgJAAQgbgBAAAJQAAAEAQAHQAXAMAIAFQARALAAAQQAAAVgTAJQgPAJgVAAQgQAAgMgFg");
	this.shape_30.setTransform(203.5,95.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAYA6QgPAFgQAAQgQAAgMgHQgNgIgBgPQgGgdAAgWQABgPADgUQACgNAOAAQAHAAAFAEQAEAEAAAHIgBAQIgCARIABAbIADAVIAHACIAEAAQAMAAAQgDIAAgVIAAgTQAAgYACgRQACgOAOAAQAHAAAFAEQAFAFgBAGIgCAqIAAAWIAAAYIABAHIAAAIQAAAGgEAEQgGAFgGAAQgKAAgEgJg");
	this.shape_31.setTransform(191.5,95.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgKBcQgFgFAAgGIAAihQAAgIAFgDQAFgFAFAAQAHAAAFAFQAEADAAAIIAACaQAAAXgQAAQgGAAgEgFg");
	this.shape_32.setTransform(182,92.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgwBeQgFgFAAgGIAAgsIAAgtQAAgZgBgTIgCgXQAAgKAEgGQAFgJAJABQAHgBAEAFQAEAFAAAGIAAABQAIgEAIgCQAHgDAIAAQAbAAAMAXQAKARAAAbQAAAagPARQgQARgaABQgJgBgLgCIAAAwQAAAGgFAFQgFAFgHAAQgHAAgEgFgAgGg3QgIADgHAIIABAuQAKAEAKAAQAMAAAGgIQAGgHAAgOQAAgPgBgGQgEgPgLAAQgHABgHADg");
	this.shape_33.setTransform(172.6,98.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_34.setTransform(149.4,95.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_35.setTransform(136.6,95.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgOBVQgFgEAAgHIAAgVIAAgWIABgaIABgZQAAgHAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAHIgBAZIgBAaIAAAWIABAVQAAAHgFAEQgEAEgGAAQgHAAgFgEgAgKg7QgGgFAAgHQAAgIAGgEQAFgGAHAAQAHAAAGAGQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_36.setTransform(127.4,92.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgKBRQgFgDAAgHIAAgNIAAgNIgBg7IgXgCQgOgCAAgNQAAgHAEgFQAFgEAHAAIAUACIgBgNIAAgMQAAgGAEgEQAFgEAHgBQAQABAAAdIAAAJIAMgBQANAAAGACQAJADAAALQAAAHgFAEQgFAEgGAAIgGAAIgGAAIgLABIACA9IAAAGIABAGQAAAbgRAAQgGAAgFgEg");
	this.shape_37.setTransform(118.1,93.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgOBVQgFgEAAgHIAAgVIAAgWIABgaIABgZQAAgHAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAHIgBAZIgBAaIAAAWIABAVQAAAHgFAEQgEAEgGAAQgHAAgFgEgAgKg7QgGgFAAgHQAAgIAGgEQAFgGAHAAQAHAAAGAGQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_38.setTransform(109.3,92.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AghA9QgRgGAAgNQAAgMAOAAQAGAAAJAEQALADAFAAQAXAAAAgKQAAgFgQgIQgYgKgGgEQgQgMAAgQQAAgYAYgIQAPgFAcAAQAMAAAGADQAIAEAAALQAAAVgLAAQgMAAgDgKIgJAAQgbgBgBAJQABAEAQAHQAXAMAIAFQARALAAAQQAAAVgTAJQgPAJgVAAQgPAAgOgFg");
	this.shape_39.setTransform(99.7,95.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_40.setTransform(87.6,95.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgwBeQgFgFAAgGIAAgsIAAgtQAAgZgBgTIgCgXQAAgKAEgGQAFgJAJABQAHgBAEAFQAEAFAAAGIAAABQAIgEAIgCQAHgDAIAAQAbAAAMAXQAKARAAAbQAAAagPARQgQARgaABQgJgBgLgCIAAAwQAAAGgFAFQgFAFgHAAQgHAAgEgFgAgGg3QgIADgHAIIABAuQAKAEAKAAQAMAAAGgIQAGgHAAgOQAAgPgBgGQgEgPgLAAQgHABgHADg");
	this.shape_41.setTransform(75.2,98.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgnAyQgUgOAAgbQAAgdAPgUQASgXAcAAQAVAAANAGQASAKAAARQAAANgPALQgGAEgUAIIgnARQAHAGAHADQAIADAKABQAPAAALgHQAKgGAFAAQANAAAAAMQAAAOgTAIQgRAHgSAAQgbAAgSgOgAgQgcQgHAIgEAPIAagMQAOgHAKgGQgIgFgNABQgJAAgJAGg");
	this.shape_42.setTransform(61.7,95.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AguA9QgDgEgBgHIAAhMIABgKIAAgLQAAgHAEgEQAEgFAIAAQANAAACAOQAUgQAZAAQAYAAgBAfIAAAIQgBASgPAAQgPAAAAgPIAAgMQgaAEgLAXIAAA6QAAAHgEAEQgFAFgHAAQgHAAgFgFg");
	this.shape_43.setTransform(49.6,95.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgwBeQgFgFAAgGIAAgsIAAgtQAAgZgBgTIgCgXQAAgKAEgGQAFgJAJABQAHgBAEAFQAEAFAAAGIAAABQAIgEAIgCQAHgDAIAAQAbAAAMAXQAKARAAAbQAAAagPARQgQARgaABQgJgBgLgCIAAAwQAAAGgFAFQgFAFgHAAQgHAAgEgFgAgGg3QgIADgHAIIABAuQAKAEAKAAQAMAAAGgIQAGgHAAgOQAAgPgBgGQgEgPgLAAQgHABgHADg");
	this.shape_44.setTransform(37.4,98.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAcA2IgTAIQgIACgFAAQgcAAgOgOQgOgQAAgeQAAgbAVgUQAVgVAcAAQALABAOAGQASAIAAAKQAAADgDAEIgBAMIgBAQQAAAVADAJIAFANIAFALQAAAHgFAEQgEADgHAAQgFABgMgLgAgQgXQgMAMAAAQQAAAPAGAIQAGAIALAAQAGAAAHgCQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgCIgDgBQgPAAgMANg");
	this.shape_45.setTransform(489.6,60.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AggA9QgSgGAAgNQAAgMAOAAQAFAAALAEQAKADAGAAQAWAAAAgKQAAgFgRgIQgWgLgHgDQgRgMAAgQQABgYAYgIQAPgFAdAAQAMAAAFADQAIAEAAALQAAAVgMAAQgLAAgCgKIgKgBQgbAAAAAJQgBAEARAHQAXAMAIAFQARAMAAAPQAAAUgSALQgQAIgVAAQgPAAgNgFg");
	this.shape_46.setTransform(466.5,60);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_47.setTransform(454.6,59.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgOBVQgFgFAAgGIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAGgFAFQgEAEgGAAQgHAAgFgEgAgKg7QgGgFAAgHQAAgIAGgEQAFgGAHAAQAHAAAGAGQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_48.setTransform(445.1,57.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAcA2IgTAIQgIACgFAAQgcAAgOgOQgOgQAAgeQAAgbAVgUQAVgVAcAAQALABAOAGQASAIAAAKQAAADgDAEIgBAMIgBAQQAAAVADAJIAFANIAFALQAAAHgFAEQgEADgHAAQgFABgMgLgAgQgXQgMAMAAAQQAAAPAGAIQAGAIALAAQAGAAAHgCQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgCIgDgBQgPAAgMANg");
	this.shape_49.setTransform(434.9,60.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgKBRQgFgDAAgHIAAgMIAAgOIgCg7IgVgCQgPgBAAgOQAAgGAEgGQAFgEAHAAIAUACIgBgNIAAgMQAAgGAEgEQAGgEAGAAQAQAAABAdIAAAJIALgBQAOAAAFACQAJADAAALQAAAHgFAEQgEAFgIgBIgFAAIgGAAIgLABIACA9IAAAGIABAHQgBAbgRAAQgFgBgFgEg");
	this.shape_50.setTransform(422.5,58.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_51.setTransform(410.7,59.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_52.setTransform(397.9,60.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgkAzQgSgPgBgZQABgXAQgYQATgdAYAAQAMAAAQAGQAUAJAAAKQAAAGgEAEQgEAFgHAAQgFAAgHgGQgHgFgOAAQgIAAgKASQgLARAAAMQAAAMAJAHQAIAGANABQAIAAALgHQAMgFADgBQAGAAAFAFQAEAFABAFQgBAKgTAJQgTAIgLAAQgZAAgRgPg");
	this.shape_53.setTransform(385.3,60.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#993399").s().p("Ag2BaQgNgMAAgmQABgPACgfIACgvIgBgMIgCgMQAAgSARAAQAGAAADADIAagFIAXgCQAdAAASAHQAKAEAAALQAAAGgDAFQgFAFgIAAIgEgBQgUgFgRAAIgSACQgLABgLADIgBAuIAtgEIAcgCQAIAAAFAEQAEAEAAAIQAAANgPABIgcADIgxAEIAAAYQAAAXACADQACACANAAIAUAAIAWgBIAHAAIAIgBQAGAAAFAEQAFAEABAIQgBANgOADQgLACgkAAQgmAAgMgKg");
	this.shape_54.setTransform(361.8,57.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#993399").s().p("Ag/BNQgOgMAAgOQAAgHAFgFQAEgFAIAAQALAAAFAKQAGAPAXAAQATAAAUgIQATgKAAgLQAAgPgMgEQgJgDgZgBQgUAAgQgHQgWgKAAgRQABgXAYgUQAYgSAcgBQALABARAFQAVAHAAAIQAAAGgEAFQgEAFgIAAQgGAAgKgCIgRgCQgPAAgNAGQgOAIAAAIQAAAFAFADQAEADAIABIAdACQAaACAPAMQARANAAAZQAAAegiAQQgbALghAAQgeABgRgNg");
	this.shape_55.setTransform(345.7,57.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#993399").s().p("AA8BYQgKAAgJgWQgGgNgFgSIgcACQgRABgKACQgGANgNAaQgFAIgJAAQgHAAgFgEQgFgEAAgHQAAgGARgjQgCgDABgDQAAgGALgDQARgcAUgfQAcgsAHAAQANAAAEAPIAIAmIARBMIAGAPQAEALAAAFQAAAGgFAFQgEAEgGAAIgBAAgAgIALIAPgCIARgBIgIgnIgYAqg");
	this.shape_56.setTransform(328.4,57.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#993399").s().p("Ag/BYQgFgFAAgHIAAgaIABgaIAAheQAAgHAEgHQAGgIALABIAdACQAQACALAGQAyAaAAAlQAAAPgKALQgLAMgVAIQAfARAQASQAEAFAAAGQAAAGgFAFQgFAFgHAAQgGAAgFgFQgkgigpgMIABAlQAAAHgFAFQgFAEgHAAQgHAAgEgEgAgkAEIAGAAQAcAAANgHQAGgDAFgFQAFgFAAgCQAAgNgRgNQgOgLgSgCIgOgBg");
	this.shape_57.setTransform(312.4,57.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#993399").s().p("AAyBZQgFgEAAgHIgBgZIgBgaIABgMQgTABgaAFIgtAJIgCAYIgBAZQAAAHgEADQgFAFgHAAQgGAAgFgFQgFgEAAgHIACgiIACgjIABgqIABgsQAAgHAEgFQAFgEAHABQAHAAAEAEQAFAEAAAHIgBAbIgBAbIAAALIgBALIAtgIQAZgFAUAAIABgrQAAgJAGgMQAGgOAIAAQAHgBAEAEQAGAFAAAHIgBADQgCAJAAAGIgBALIAAAJIgCAiIgBAgIABAZIACAaQAAAHgFAEQgEAEgHABQgHAAgFgFg");
	this.shape_58.setTransform(295.4,57.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#993399").s().p("Ag0BZQgFgFAAgGIAAghQAAgRADgkIACg2QAAgeARACIALgCIARAAQAWgBAUAPQAXARAAAYQAAAegYAQQgVAQgcAAIgKAAIgBA1QAAAGgEAFQgFAFgGAAQgHAAgEgFgAgVgtIgCAoIAIABQARAAAMgIQANgKAAgPQAAgKgMgIQgMgHgMgBIgHABIgFAAIAAARg");
	this.shape_59.setTransform(279.6,56.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#993399").s().p("Ag+BGIADglQADgyAAg+QAAgHAEgEQAFgFAHAAQAHAAAFAFQAEAEAAAHQAAA/gDAzIgCAdQAcgBAqgNIAGgBQAHAAAEAGQAFAFAAAGQAAAKgLAEQgNAGgdAFQgaAFgRAAQgdAAAAgag");
	this.shape_60.setTransform(256.5,57.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#993399").s().p("AA8BYQgKAAgJgWQgGgNgFgSIgcACQgRABgKACQgGANgNAaQgFAIgJAAQgHAAgFgEQgFgEAAgHQAAgGARgjQgCgDABgDQAAgGALgDQARgcAUgfQAcgsAHAAQANAAAEAPIAIAmIARBMIAGAPQAEALAAAFQAAAGgFAFQgEAEgGAAIgBAAgAgIALIAPgCIARgBIgIgnIgYAqg");
	this.shape_61.setTransform(240.7,57.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#993399").s().p("AhRBaQgFgEAAgHIABgOIABgOIAAgVIAAgVIAAgVIAAgXIgCgUIgBgVQAAgHAGgGQAGgGAIAAQAIAAALAPQA0BMA0AvIAAgRQAAg5gBgUIgCgNIgBgNQAAgQARAAQATAAAAA7IAAASIAABJIgCATQgDAPgPAAQgIAAgKgJQgtgpg4hIIgBAkIABAcIAAAcQAAAjgRAAQgIAAgFgGg");
	this.shape_62.setTransform(222.3,57.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#993399").s().p("Ag+BIQgagVAAgiQAAgnAaggQAcglApAAQApAAAVASQATATABAmQgBAngWAgQgaAlgqAAQgjAAgZgUgAgkgiQgSAXAAAcQAAAUAPAMQAOAMAXAAQAYAAARgaQARgXgBgcQABgZgLgJQgLgKgbAAQgZAAgSAag");
	this.shape_63.setTransform(202.9,57.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#993399").s().p("Ag2BVQgGgFAAgGQAAgGAGgFQAEgFAIAAQAIAAAPgCIgBg1QAAgfADgdIgaABQgHAAgEgEQgGgFAAgHQABgGAEgFQAFgEAGAAIAigBQAWAAAiAEQAPACAAAOQAAAIgGAEQgFAEgFAAIgegEQgDAXAAAiIAAA1IAhAAQAGgBAFAFQAFAEAAAHQAAAHgFAFQgFAEgHAAIgUAAIgVAAIgWACIgYADQgHAAgEgFg");
	this.shape_64.setTransform(186.7,57.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#993399").s().p("AgKBVQgGgEAAgHIABgFIAAgFIAAgRIgBgQQAAgQgDgaQgDgfAAgLIgGAAQgaAAgQgEQgNgDAAgMQAAgGAFgFQAFgGAIABIASACIATABIAVAAIAVAAIAaABIAbABQAHAAAFAFQAFAEAAAHQAAAGgFAFQgFAFgHAAIgcgCIgdgBIADAwQADAdAAASIABAMIAAALQAAAJgDAHQgFAJgJAAQgFAAgFgEg");
	this.shape_65.setTransform(172,57.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#993399").s().p("Ag2BVQgGgFAAgGQAAgGAGgFQAEgFAIAAQAIAAAPgCIgBg1QAAgfADgdIgaABQgHAAgEgEQgGgFAAgHQABgGAEgFQAEgEAHAAIAigBQAVAAAkAEQAOACAAAOQAAAIgGAEQgEAEgGAAIgfgEQgCAXAAAiIAAA1IAhAAQAGgBAFAFQAFAEAAAHQAAAHgFAFQgFAEgHAAIgVAAIgUAAIgWACIgYADQgHAAgEgFg");
	this.shape_66.setTransform(156.9,57.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#993399").s().p("Ag+BNQgPgMAAgOQAAgHAFgFQAEgFAIAAQAKAAAGAKQAGAPAXAAQAUAAATgIQATgKAAgLQAAgPgMgEQgJgDgZgBQgUAAgQgHQgWgKAAgRQABgXAYgUQAYgSAcgBQALABARAFQAVAHAAAIQAAAGgEAFQgFAFgHAAQgGAAgKgCIgRgCQgPAAgNAGQgOAIAAAIQAAAFAEADQAFADAIABIAdACQAaACAPAMQARANAAAZQAAAegiAQQgbALghAAQgeABgQgNg");
	this.shape_67.setTransform(142.2,57.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#993399").s().p("Ag9BIQgagVAAgiQAAgnAYggQAdglApAAQApAAAUASQAVATgBAmQAAAngWAgQgbAlgqAAQgiAAgYgUgAglgiQgRAXAAAcQAAAUAPAMQAOAMAWAAQAaAAARgaQAQgXAAgcQAAgZgMgJQgKgKgbAAQgZAAgTAag");
	this.shape_68.setTransform(124.2,57.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#993399").s().p("Ag0BZQgFgFAAgGIAAghQAAgRADgkIACg2QAAgeARACIALgCIARAAQAWgBAUAPQAXARAAAYQAAAegYAQQgVAQgcAAIgKAAIgBA1QAAAGgEAFQgFAFgGAAQgHAAgEgFgAgVgtIgCAoIAIABQARAAAMgIQANgKAAgPQAAgKgMgIQgMgHgMgBIgHABIgFAAIAAARg");
	this.shape_69.setTransform(108.3,56.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#993399").s().p("Ag1BaQgNgMgBgmQABgPACgfIACgvIgBgMIgCgMQABgSAQAAQAFAAAEADIAagFIAXgCQAdAAASAHQAKAEAAALQAAAGgDAFQgGAFgHAAIgEgBQgUgFgRAAIgSACQgLABgLADIgBAuIAtgEIAcgCQAHAAAGAEQAEAEAAAIQAAANgOABIgcADIgyAEIAAAYQgBAXADADQABACAOAAIAUAAIAXgBIAGAAIAHgBQAHAAAFAEQAFAEAAAIQABANgOADQgMACgkAAQgmAAgLgKg");
	this.shape_70.setTransform(94.7,57.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#993399").s().p("Ag/BYQgFgFAAgHIAAgaIABgaIAAheQAAgHAEgHQAGgIALABIAdACQAQACALAGQAyAaAAAlQAAAPgKALQgLAMgVAIQAfARAQASQAEAFAAAGQAAAGgFAFQgFAFgHAAQgGAAgFgFQgkgigpgMIABAlQAAAHgFAFQgFAEgHAAQgHAAgEgEgAgkAEIAGAAQAcAAANgHQAGgDAFgFQAFgFAAgCQAAgNgRgNQgOgLgSgCIgOgBg");
	this.shape_71.setTransform(79.5,57.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#993399").s().p("Ag0BZQgFgFAAgGIAAghQAAgRADgkIACg2QAAgeARACIALgCIARAAQAWgBAUAPQAXARAAAYQAAAegYAQQgVAQgcAAIgKAAIgBA1QAAAGgEAFQgFAFgGAAQgHAAgEgFgAgVgtIgCAoIAIABQARAAAMgIQANgKAAgPQAAgKgMgIQgMgHgMgBIgHABIgFAAIAAARg");
	this.shape_72.setTransform(65.2,56.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AA8BYQgKAAgJgWQgGgNgFgSIgcACQgRABgKACIgTAnQgFAIgJAAQgHAAgFgEQgFgEAAgHQAAgGARgjQgCgDABgDQAAgGALgDQARgcAUgfQAcgsAHAAQANAAAEAPIAIAmIARBMIAGAPQAEALAAAFQAAAGgFAFQgEAEgGAAIgBAAgAgIALIAPgCIARgBIgIgnIgYAqg");
	this.shape_73.setTransform(39.4,57.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_74.setTransform(45.7,291.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgmBiQgSgKgGgRIgBgFQAAgGAEgDQAFgEAFAAQAFAAAEAFIAHAKQAEAGAJAEQAIADALAAQAPAAALgJQAMgKAAgPQAAgUgQgMQgNgLgVgDQgPgBAAgJQAAgJAMgEIAfgIQAKgDAFgGQAEgGAAgIQABgNgKgGQgKgJgRAAQgJABgJAEIgPAKQgFACgCABQgGAAgEgFQgEgEAAgFQAAgLAVgKQATgJALAAQAdABAQANQATAOAAAZQAAAhgaAKIgFACQASAGAJAMQAJAOAAAUQAAAagTAUQgTASgbAAQgUABgRgKg");
	this.shape_75.setTransform(33.4,282.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_76.setTransform(45.7,230.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AApBnIgJgCIgUABIgVAAIgPACIgQABIgFAAIgEgBQgJAAgEgJQgBgFAAgLQAAggARgUQAIgJAjgXQATgNAGgHQAMgOAAgRQAAgJgLgHQgLgGgJAAQgMAAgLAHIgTAQQgGAEgEAAQgOAAAAgLQAAgGAGgFQAQgPALgHQARgJAQAAQAWAAARAMQAUANAAAWQAAANgEAMQgEAMgIAKQgLALgXAPQgaAQgHAJQgPAPgBAXIAcgDIApgBQAKAAAKADQAMAFAAAIQAAAGgEAEQgDAEgGAAQgDAAgHgCg");
	this.shape_77.setTransform(33.7,220.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_78.setTransform(41.3,167.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AADBrIgaAAIgNgBQgHgDAAgIQAAgOAWAAIAGAAIAGAAIgBgTIgBgTQAAgSADgiQACgjAAgSQgSAPgFAAQgFgBgEgEQgFgEAAgFQABgHAMgJIAUgQQALgNALAAQAKAAgBALIgBAKIgBAJIABANIAAAOQAAAPgDAgQgDAdAAAQIABATIACASIAOAAQAFABAFADQADAEAAAGQAAAGgDADQgFADgFABg");
	this.shape_79.setTransform(31.6,157.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.8)").s().p("A5OQiMAAAghDMAydAAAMAAAAhDg");
	this.shape_80.setTransform(181.5,221.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]}).wait(17));

	// Anim
	this.instance_3 = new lib.bk3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(261.5,210.5,1.007,1,0,0,0,282.3,176.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17));

	// Layer 1
	this.btn_goBack = new lib.goNext();
	this.btn_goBack.parent = this;
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(494,352.3);
	this.btn_goNext.visible = false;
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.instance_4 = new lib.Copyright("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,389.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.btn_goNext},{t:this.btn_goBack}]}).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,199.4,533.3,399.6);
// library properties:
lib.properties = {
	id: '1F44BE7BA89ED24F990F41C603EEECD8',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/SE1stThought.mp3", id:"SE1stThought"},
		{src:"sounds/SE2ndThought.mp3", id:"SE2ndThought"},
		{src:"sounds/boopSound.mp3", id:"boopSound"},
		{src:"sounds/SE3rdThought.mp3", id:"SE3rdThought"},
		{src:"sounds/arealways.mp3", id:"arealways"},
		{src:"sounds/arearticles.mp3", id:"arearticles"},
		{src:"sounds/SEAdjetiveAnswers.mp3", id:"SEAdjetiveAnswers"},
		{src:"sounds/modifies.mp3", id:"modifies"},
		{src:"sounds/nounmarkers.mp3", id:"nounmarkers"},
		{src:"sounds/SEBlackHair.mp3", id:"SEBlackHair"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/SEBrownHair.mp3", id:"SEBrownHair"},
		{src:"sounds/bushrattle.mp3", id:"bushrattle"},
		{src:"sounds/SERitaChopsMick.mp3", id:"SERitaChopsMick"},
		{src:"sounds/correctwav.mp3", id:"correctwav"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/incorrectwav.mp3", id:"incorrectwav"},
		{src:"sounds/JingleAdjetives.mp3", id:"JingleAdjetives"},
		{src:"sounds/lowclick.mp3", id:"lowclick"},
		{src:"sounds/signalthecomingofanoun.mp3", id:"signalthecomingofanoun"},
		{src:"sounds/bgmTest.mp3", id:"bgmTest"},
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
		{src:"sounds/SEWhichOne.mp3", id:"SEWhichOne"},
		{src:"sounds/whistles_crowd.mp3", id:"whistles_crowd"},
		{src:"sounds/_1d.mp3", id:"_1d"},
		{src:"sounds/yeah.mp3", id:"yeah"}
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
an.compositions['1F44BE7BA89ED24F990F41C603EEECD8'] = {
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