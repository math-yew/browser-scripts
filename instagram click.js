let list = [];
document.addEventListener("click", pauseIt);

function pauseIt(){
  setTimeout(()=>getLink(),1000);
}


function getLink(){
  try{
    url = findClose();
    if(!!url){
      list.push(url);
    }
  }
  catch(e){
    console.log("No Link");
  }
  printList();
}

function findClose() {
	try{
		var sv = document.querySelectorAll('[aria-label="Close"]');
		let closeButton = sv[0].parentElement.parentElement;
		let container = closeButton.parentElement.parentElement;
		let links = container.querySelectorAll('a');
    closeButton.click();
		return links[0] || "";
	}
	catch(e){
		return "";
	}
}

function printList(){
	console.log("# Results: " + list.length);
	let trimmedDown = [...new Set(list)];
	let urls = trimmedDown.map((e)=>'"' + e + '"');
	console.log("Final Amount: " + urls.length);

	console.log();
	console.log("let profileURLs = [" + urls + "];");
	console.log();
}
