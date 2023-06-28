async function stop(){
	await new Promise(r => setTimeout(r, 500));
	if(document.getElementById("secondary") == null){
		stop();
	}
	else{
		document.getElementById("secondary").remove("style-scope ytd-watch-flexy");
	}
	
}

stop();
