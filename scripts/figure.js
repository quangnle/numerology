var Figure = function(st,x,y,w,h,fc,tc){
	this.st = st;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.fc = fc;
	this.tc = tc;
	
	this.draw = function(){
		fill(this.fc)
		ellipse(this.x, this.y, this.w, this.h);
		let ts = this.w >> 1
		textSize(ts);
		fill(this.tc);
		let tw = textWidth(st);
		text(this.st + "", this.x  - tw/2, this.y + (ts >> 1) - (ts * 0.2) );
	}
}