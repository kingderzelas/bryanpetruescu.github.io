function increaseFontSizeFromElementId(id){
	let text = document.getElementById(id);
	text.style.fontSize = "24pt";
}

function radioChanged(){
	let fancyShmancyChecked = document.getElementById("fancyShmancyRadio").checked;
	let boringBettyChecked = document.getElementById("boringBettyRadio").checked;
	let text = document.getElementById("textEntryArea");
	console.log(document.getElementById("boringBettyRadio"));
	if(fancyShmancyChecked){
		text.style.fontWeight = "bold";
		text.style.backgroundColor = "blue";
		text.style.textDecoration = "underline";
	}else if(boringBettyChecked){
		text.style.fontWeight = "normal";
		text.style.backgroundColor = "white";
		text.style.textDecoration = "none";
	}
}

function mooClicked(){
	let text = document.getElementById("textEntryArea");
	let textUppercase = text.value.toUpperCase();
	let textUppercaseParts = textUppercase.split(".");
	text.value = textUppercaseParts.join("-Moo.");
}