var Wave = function(peaks,x,y,sx,sy){
	this.x = x;
	this.y = y;
	this.peaks = peaks;
	
	this.pos = [[x,y-5], 
				   [x,y-5],[x+3*sx,y], [x+4*sx,y+sy], [x+5*sx, y+2*sy], [x+6*sx,y+3*sy], [x+7*sx,y+2*sy], [x+8*sx,y+0.5*sy], [x+9*sx,y+2*sy], [x+10*sx,y+1.5*sy],
				   [x+11*sx,y-10], [x+14*sx,y-10], [x+15*sx,y+sy-10], [x+16*sx, y+2*sy-10], [x+17*sx,y+3*sy-10], [x+18*sx,y+2*sy-10], [x+19*sx,y+0.5*sy-10], [x+20*sx,y+2*sy-10], [x+21*sx,y+1.5*sy-10],	
				   [x+22*sx,y-25], [x+25*sx,y-25], [x+26*sx,y+sy-25], [x+27*sx, y+2*sy-25], [x+28*sx,y+3*sy-25], [x+29*sx,y+2*sy-25], [x+30*sx,y+0.5*sy-25], [x+31*sx,y+2*sy-25], [x+32*sx,y+1.5*sy-25],
				   [x+33*sx,y-40],
				[x+33*sx,y-40]];				   
	
	this.points = [];
	
	for (let i=0; i<this.pos.length; i++){
		this.points.push(new Figure(this.peaks.ap1+i,this.pos[i][0], this.pos[i][1],20,20,"#fff", "#000"));
	}
	
	this.draw = function(){
		noFill();
		stroke(0);
		beginShape();
		
		for (let i=0; i<this.pos.length; i++){
			curveVertex(this.pos[i][0], this.pos[i][1]);
		}
		endShape();
		
		for (let i=1; i<this.pos.length-1; i++){
			if (i%9==1) {
				this.points[i].fc = "#6f9";
			} else if (i%9==2) {
				this.points[i].fc = "#3ed";
			}
			this.points[i].draw();
		}
	}
}