//Write a JavaScript program to calculate the area and perimeter of a circle. 
//The radius of the circle will be supplied by the user
//A = pi * r^2
//C = 2 * pi * r

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 

function circleCalculation (radius) {

	let area = parseInt(Math.PI * (radius * radius));
	let perimeter = parseInt(2 * Math.PI * radius);
	let sentance = "The area of the circle is " + area + " and the perimeter of the circle is " + perimeter + ".";
	return sentance;
}

circleCalculation(10);

