var styles = `
    img {
        display:none;
    }
`;
var styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

///////////////////////////////////

let gatherTime = 240;
var scrollInterval = setInterval(function() {
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
}, 800);
setTimeout(()=>{
	clearInterval(scrollInterval);
	// setTimeout(()=>startSearch(),5000);
	console.log("Done loading");
},gatherTime*1000);

//////////////////////////////////////////////////////////

var styles = `
    img {
        display:none;
    }
`;
var styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

///////////////////////////////////


let count = 0;
let errorCount = 0;
let list = [];
let anchors = [];
let searchProcess;

startSearch();
function startSearch(){
	// var preAnchors = document.querySelectorAll('a');
	// anchors = [...preAnchors].filter((e)=>e.href.indexOf("/p/")>-1);
	anchors = localLinks;
	// anchors = localLinks.map((e)=>"https://www.instagram.com" + e);

	// console.log("preAnchors: " + preAnchors.length);
	console.log("anchors: " + anchors.length);

	searchProcess = setInterval(open, 1000);
}

function open(){
	console.log("count: " + count);
	// console.log("anchor: " + anchors[count]);
	// let href = anchors[count].href;
	// anchors[count].click();

	let link_ = document.querySelectorAll('[href="'+ anchors[count] +'"]');
	let link = link_[0];
	if(!!link){
		errorCount = 0;
		link.click();

		count++;
		let url;
		try{
			url = findClose();
			if(!!url){
				list.push(url);
			}
		}
		catch(e){
			console.log("error #: " + count);
				finish();
		}
		if(count>anchors.length-1){
			finish();
		}
	} else{
		errorCount++;
		if(errorCount>4){
			finish();
		}
	}
}

function finish(){
	clearInterval(searchProcess);
	printList();

}

function findClose() {
	try{
		var sv = document.querySelectorAll('[aria-label="Close"]');
		let closeButton = sv[0].parentElement.parentElement;
		let container = closeButton.parentElement.parentElement;
		let links = container.querySelectorAll('a');
		// console.log(links.length);
		// console.log(links[0]);
		// closeButton.click();
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
