var _name = null;
var _fName = null;
var _dob = null;

function getInfo(){
	_name = document.getElementById("name").value;
	_fName = document.getElementById("fname").value;
	_dob = document.getElementById("dob").value;
	redraw();
}

function calculate(dob, max){
	let r = 0;
	for (let i = 0; i < dob.length; i++){
		let c = (dob.charCodeAt(i) - 48);
		if (c >= 0 && c <=9) {
			r+= c;
		}
	}
	if (r > max) return calculate(r + "", max);
	return r;
}

function putNameIntoMatrix(st, m){	
	st = st.toLowerCase();
	st = st.replace(" ", "");
	for (let i = 0; i < st.length; i++){
		let c = (st.charCodeAt(i) - 97) % 9;
		m[c] += 1;
	}
}

function putDOBIntoMatrix(dob, m){
	for (let i = 0; i < dob.length; i++){
		let c = (dob.charCodeAt(i) - 48);
		if (c >= 0 && c <=9) {
			m[c - 1] += 1;
		}
	}
}

function drawMatrix(name, dob){
	let m = [0,0,0,0,0,0,0,0,0];
	let drM =  [[3,6,9],
				[2,5,8],
				[1,4,7]];
	
	putNameIntoMatrix(name, m);
	putDOBIntoMatrix(dob, m);
	
	for	(let row = 0; row < 3; row++){
		let line = "";
		for (let col = 0; col < 3; col++){
			line += m[drM[row][col] - 1] + " ";
		}
	}
}

function pyramid(dob){
	let dmy = dob.split('-');
	let dd = calculate(dmy[0], 9);
	let mm = calculate(dmy[1], 9);
	let yy = calculate(dmy[2], 9);
	let p1 = calculate(dd + mm, 9);
	let p2 = calculate(dd + yy, 9);
	let p3 = calculate(p1 + p2, 11);
	let p4 = calculate(mm + yy, 11);
	let ap1 = 36 - calculate(dd+mm+yy + "", 11);
	let ap2 = ap1 + 9;
	let ap3 = ap2 + 9;
	let ap4 = ap3 + 9;
	let ps = {
		"d":dd, "m":mm,	"y":yy, 
		"p1":p1, "p2":p2, "p3":p3, "p4":p4,
		"ap1":ap1, "ap2":ap2, "ap3":ap3, "ap4":ap4
	};
	
	return ps;
}

var pyrad = null;
var wave = null;

function setup() {
	var canvas = createCanvas(1024, 768);
	canvas.parent('sketch-holder');
	stroke(0.5);
	rect(0, 0, width - 1, height - 1);
	noLoop();
}

function draw() {
	clear();
	if (_name != null && _dob != null) {
		let n = calculate(_dob, 11);
		let ruleNo = new Figure(n, 70, 100, 100, 100, "#0f0", "#fff");
		
		let m = [0,0,0,0,0,0,0,0,0];
		putNameIntoMatrix(_name, m);
		putDOBIntoMatrix(_dob.replace("-",""), m);
		let mt = new Matrix(m, 200, 20, 270, 270);
		
		let data = pyramid(_dob);
		let pyrad = new Pyramid(data, 750, 350, 300, 300);
		let wave = new Wave(data, 80, 550, 15, 40);
		
		let np = new NamePane(_fName, 50, 450);
		
		ruleNo.draw();
		mt.draw();
		pyrad.draw()
		wave.draw();
		np.draw();
	}
}
