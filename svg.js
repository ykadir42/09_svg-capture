// Jawadul Kadir
// SoftDev2 pd7
// K09 -- Ask Circles [Change || Die]
// 2018-3-6

var svg = document.getElementById("vimage");

var circle = function(e){
	console.log("creating circle...");
	e.preventDefault();
	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", e.offsetX+"");
	c1.setAttribute("cy", e.offsetY+"");
	c1.setAttribute("r", 25 + "");
	c1.setAttribute("fill", "#dabbed");
	c1.setAttribute("stroke", "#dabbed");
	svg.appendChild(c1);
	c1.addEventListener("click", color);
	e.stopPropagation();
}

var color = function(e){
	console.log("coloring...");
	e.preventDefault();
	this.setAttribute("fill", "#facade");
	this.setAttribute("stroke", "#facade");
	this.addEventListener("click", remove);
	e.stopPropagation();
}

var remove = function(e){
	console.log("removing...");
	e.preventDefault();
	this.remove();
	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", Math.floor(Math.random() * 500)+"");
	c1.setAttribute("cy", Math.floor(Math.random() * 500)+"");
	c1.setAttribute("r", 25 + "");
	c1.setAttribute("fill", "#dabbed");
	c1.setAttribute("stroke", "#dabbed");
	svg.appendChild(c1);
	c1.addEventListener("click", color);
	e.stopPropagation();
}

var clear = function(e){
	console.log("clearing...");
	e.preventDefault();
	svg.innerHTML = '';
}

document.getElementById("clear").addEventListener("click", clear);
svg.addEventListener("click", circle);