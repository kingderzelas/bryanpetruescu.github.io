function biggerButton() {
	document.getElementById("text").style.fontSize = "24pt";
}

function radioSelected(id) {
    if (id === "FancyShmancy") {
        document.getElementById("text").style.fontWeight = "bold";
    } else if (id === "BoringBetty") {
        document.getElementById("text").style.fontWeight = null;
    } else {
        alert("Error: Invalid Selection");
    }
}
