function biggerButton() {
	document.getElementById("text").style.fontSize = "24pt";
}

function radioSelected(id) {
    if (id === "FancyShmancy") {
        document.getElementById("text").style.fontWeight = "bold";
    } else if (id === "BoringBetty") {
        alert("BoringBetty");
    } else {
        alert("Error: Invalid Selection");
    }
}
