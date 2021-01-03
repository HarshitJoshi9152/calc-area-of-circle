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


let rings = []; // concentric circles;
let dr = BigNumber(0.1);// diff btw radiuses of rings;

// populating the rings array;
let lastRadius = BigNumber(0);
while(lastRadius <= c.r) {
	lastRadius = lastRadius.plus(dr);
	rings.push(new Circle(lastRadius));
	log(lastRadius + "")
}

log(rings.length)
