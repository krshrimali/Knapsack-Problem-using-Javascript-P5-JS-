function setup(){
	createCanvas(400, 400);
	stroke(255);
	frameRate(30);
}

function getRandomInt(min, max) {
	min = Math.ceil(min); max = Math.floor(max);

	return Math.floor(Math.random() * (max-min)) + min;
}

function findingDictionary(dict_name, value_finding) {
	for(var keys in dict_name){
		if(dict_name[keys] == value_finding){
			return keys;
		}
	}
	return undefined;
}
// var p = [25, 24, 15];
// var w = [18, 15, 10];
// var M = 20;
// var N = p.length;

var p = [];
var w = [];
var N = getRandomInt(1, 6);
var M = (getRandomInt(1, 50));

var temp = M;
for(var i = 0; i < N; i++){
	p.push((getRandomInt(1, 50)));
}

for(var i = 0; i < N; i++){
	w.push((getRandomInt(1, 50)));
}


console.log("p", p);
console.log("w", w);	
console.log("M", M);

// Calculate profit per unit weight ratio

var ratio = [];
for (var i = 0; i < N; i++) {
	ratio.push(p[i]/w[i]);
}
console.log("ratio", ratio);

// Sort the ratio ones along with index.

var dictionary = {};

for(var i = 0; i < N; i++){
	dictionary[i] = ratio[i];
}

console.log("dictionary", dictionary);
sorted_indexes = [];
new_dictionary = {};
var final = [];
for(var value in dictionary){
	// console.log(Math.max.apply(null, ratio));
	var key = findingDictionary(dictionary, Math.max.apply(null, ratio));
	key = parseInt(key);
	ratio[key] = -1;

	sorted_indexes.push(key);
	
	var current_weight = w[key];
	if(current_weight <= M){
		M = M - current_weight;
		final[key] = 1.0;
	} else {
		final[key] = M/w[key];
		M = 0.0;
	}	
}

console.log("final", final);
var sum = 0;
for(var i = 0; i < N; i++){
	sum += p[i] * final[i];
}

var P = [];
var W = [];
for(var i = 0; i < p.length; i++){
	P.push((p[sorted_indexes[i]]));
	W.push(w[sorted_indexes[i]]);
	console.log(P,W);
}
// draw_profitand_weight(P, w);

sum = Math.round(sum * 100)/100;
console.log("Sum is: " + sum);
// console.log("sorted_indexes", sorted_indexes);
function draw_profitand_weight(p, w, string_) {
	for(var i = 0; i < p.length; i++){
		fill(255, 0, 55);
		ellipse(130, 230 - i * 40, 80, 40);

		fill(255, 255, 255);
		textSize(20);
		text(p[i], 120, 235-i*40);
	}
	text(string_, 95, 275);

	for(var i = 0; i < p.length; i++){
		fill(255, 255, 255);
		ellipse(240, 230 - i * 40, 80, 40);

		fill(0, 102, 153);
		textSize(20);
		text(w[i], 230, 235-i*40);
	}
	text("WEIGHT", 203, 275);
}

function draw() {
	background(0);
	// console.log(mouseX, mouseY);
	fill(0, 102, 153);
	textSize(30);
	text(temp, 10, 30);
	function keyPressed() {
		// background(100);
		if(keyCode == 83) {
			// console.log("Yes");
			return 1;
		}
		else { 
			return 0;
		}
	}
	if(keyPressed() == 1){
		draw_profitand_weight(P, W, "SORTED");
	}
	else{
		draw_profitand_weight(p, w, "PROFIT");
	}

	// function keyPressed() {
	// 	if(keyCode == 83) {
	// 		console.log("Yes");
	// 		draw_profitand_weight(P, w);
	// 	}
	// 	else { 
	// 		return 0;
	// 	}
	// }
	// keyPressed;
	textSize(40);
	text(sum, 149, 315);

	fill(30, 130, 30);
	textSize(15);
	text("-- Kushashwa Ravi Shrimali", 210, 390);
}