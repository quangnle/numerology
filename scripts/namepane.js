var NamePane = function(fName,x,y){
	this.fName = fName.toLowerCase();
	this.x = x;
	this.y = y;
	
	this.calculate = function(st, max){
		let r = 0;
		for (let i = 0; i < st.length; i++){
			let c = (st.charCodeAt(i) - 96) % 9;
			r+= c;
		}
		if (r > max) return calculate(r + "", max);
		return r;
	}
	
	this.draw = function(){
		let vowels = ['a','e','i','o','u'];
		let vc = "";
		let cc = "";
		for (let i =0; i < this.fName.length; i++){			
			if (this.fName.charCodeAt(i) >=97 && this.fName.charCodeAt(i) <= 122) {
				let fig = new Figure(this.fName[i], this.x + i * 32, this.y, 30, 30, "#fff", "#000");
				if (vowels.includes(this.fName[i])) {
					fig.y = fig.y - 32;
					vc += this.fName[i];
				} else {
					cc += this.fName[i];
				}
				fig.st = fig.st.toUpperCase();
				fig.draw();	
			}
		}
		
		let nv = this.calculate(vc,9);
		let nc = this.calculate(cc,9);
		
		let fvc = new Figure(nv, this.x + (this.fName.length + 1) * 32, this.y - 32, 30, 30, "#fff", "#000");
		let fcc = new Figure(nc, this.x + (this.fName.length + 1) * 32, this.y, 30, 30, "#fff", "#000");
		
		fvc.draw();
		fcc.draw();
	}
}