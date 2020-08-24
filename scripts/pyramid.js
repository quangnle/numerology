var Pyramid = function(ps,x,y,w,h){
	this.ps = ps;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
	this.peaks = [
		new Figure(ps.d, this.x, this.y, 20,20, "#fff", "#000"),
		new Figure(ps.m, this.x - this.w/4, this.y, 20,20, "#fff", "#000"),
		new Figure(ps.y, this.x + this.w/4, this.y, 20,20, "#fff", "#000"),
		new Figure(ps.ap1, this.x - this.w/8, this.y - this.h/4, 20,20, "#8b8", "#000"),
		new Figure(ps.ap2, this.x + this.w/8, this.y - this.h/4, 20,20, "#8b8", "#000"),
		new Figure(ps.ap3, this.x, this.y - this.h/2, 20,20, "#ada", "#000"),
		new Figure(ps.ap4, this.x, this.y -this.h, 20,20, "#cfc", "#000"),
	];
		
	this.draw = function(){
		line(this.x - this.w/2, this.y, this.x, this.y - this.h);
		line(this.x + this.w/2, this.y, this.x, this.y - this.h);
		line(this.x - this.w/4, this.y, this.x, this.y - this.h/2);
		line(this.x + this.w/4, this.y, this.x, this.y - this.h/2);
		line(this.x, this.y, this.x - this.w/8, this.y - this.h/4);
		line(this.x, this.y, this.x + this.w/8, this.y - this.h/4);
		
		for(let i=0; i<this.peaks.length;i++){
			this.peaks[i].draw();
		}
	}
}