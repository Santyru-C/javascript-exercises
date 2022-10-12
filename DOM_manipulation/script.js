const container = document.querySelector("#container");

// a p with red text that says "hey im red"
const redP = document.createElement("p");

redP.style.color = "red";
redP.textContent = "hey I'm red"

container.appendChild(redP);

// h3 with blue text that says "I'm blue h3"
const blueH3 = document.createElement("h3");

blueH3.style.color = "blue";
blueH3.textContent = "I'm blue h3!"

container.appendChild(blueH3)

// div with black border and pink background color
const pinkDiv = document.createElement("div")

pinkDiv.style.border = "1px solid black"
pinkDiv.style.backgroundColor = "pink"

container.appendChild(pinkDiv)

//h1 that says i'm in a div
const h1 = document.createElement("h1")

h1.textContent = "I'm in a div"

pinkDiv.appendChild(h1)

// a p that says me too
const p = document.createElement("p")

p.textContent = "ME TOO!"

pinkDiv.appendChild(p)

//