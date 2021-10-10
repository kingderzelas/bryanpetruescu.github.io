function biggerButton() {
	document.getElementById("text").style.fontSize = "24pt";
}

function radioSelected(id) {
    if (id === "FancyShmancy") {
        document.getElementById("text").style.fontWeight = "bold";
        document.getElementById("text").style.color = "blue";
        document.getElementById("text").style.textDecoration = "underline";
    } else if (id === "BoringBetty") {
        document.getElementById("text").style.fontWeight = "normal";
        document.getElementById("text").style.color = "black";
        document.getElementById("text").style.textDecoration = "none";
    } else {
        alert("Error: Invalid Selection");
    }
}

function mooButton() {
    var upperString = document.getElementById("text").value.toUpperCase();
    document.getElementById("text").value = upperString;

    var upperSplit = upperString.split(".");
    document.getElementById("text").value = upperSplit.join(" -Moo");
}