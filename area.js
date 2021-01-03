import { BigNumber } from "bignumber.js";
const log = console.log;

class Circle{
	constructor(radius) {
		this.r = radius;
	}

	area() {
		return (this.r**2) * Math.PI;
	}
}

const c = new Circle(100);
let correct_area = c.area();
log(correct_area)

let rings = []; // concentric circles;
let dr = BigNumber(0.1);// diff btw radiuses of rings;

// populating the rings array;
let lastRadius = BigNumber(0);
while(lastRadius < c.r) {
	lastRadius = lastRadius.plus(dr);
	rings.push(new Circle(lastRadius));
//	log(lastRadius + "")
}

let areas_of_rings = [];

// calculating area of all rings.
for (let ring of rings) {
	areas_of_rings.push(getarea(ring));
	log(getarea(ring));
}

function getarea(ring) {
	// area of rect = base * height == 2PIR * dr;
	return BigNumber(2).multipliedBy(BigNumber(Math.PI)).multipliedBy(ring.r).multipliedBy(dr);
}

log("calculated area = > ");
//log(areas_of_rings.reduce( (a,b) => a + b));

//output =>
//
//31415.926535897932
//calculated area = > 
//31447.342462433833

// learnt vim find and replace (again.. https://vim.fandom.com/wiki/Search_and_replace)
// :s/r/ring.r/gc
