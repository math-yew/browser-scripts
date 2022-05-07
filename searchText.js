let matches = str.match(/\/p\/([a-zA-Z]|\d)+\//gm);
let list = matches.map((e)=>'"' + e + '"');
console.log(list.length);
document.getElementById("results").innerHTML = "let localLinks = [" + list + "];";
