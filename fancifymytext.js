function biggerButton() {
	document.getElementById("text").style.fontSize = "24pt";
}

function radioSelected(id) {
    if (id === "FancyShmancy") {
        document.getElementById("text").style.fontWeight = "bold";
        document.getElementById("text").style.color = "blue";
    } else if (id === "BoringBetty") {
        document.getElementById("text").style.fontWeight = "normal";
        document.getElementById("text").style.color = "black";
    } else {
        alert("Error: Invalid Selection");
    }
}
