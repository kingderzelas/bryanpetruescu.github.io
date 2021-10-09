function biggerButton(id) {
	document.getElementById(id).style.fontSize = "24pt";
}

function radioSelected(id) {
    if (id === "FancyShmancy") {
        document.getElementById(id).style.fontWeight = "bold";
    } else if (id === "BoringBetty") {
        alert("BoringBetty");
    } else {
        break;
    }
}
