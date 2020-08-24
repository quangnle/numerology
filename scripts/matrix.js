var Matrix = function(m,x,y,w,h){
	this.data = m;
	
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
	this.drawMap = [[3,6,9],
					[2,5,8],
					[1,4,7]];
	
	this.draw = function(){
		push();
		translate(this.x, this.y);
		
		let ch = this.h / 3;
		let cw = this.w / 3;
		for	(let r = 0; r < 3; r++){
			for	(let c = 0; c < 3; c++){
				let rx = c*cw;
				let ry = r*ch;
				fill(255);
				rect(rx, ry, cw, ch);
				let n = this.data[this.drawMap[r][c] - 1];
				
				if (n > 0) {
					for (let i = 0; i < n; i++){
						let fig = new Figure(this.drawMap[r][c], rx + 12 + i * 22, ry + (ch >> 1), 20, 20, "#fff", "#000");
						fig.draw();
					}
				}
			}
		}
		
		pop();
	}
}