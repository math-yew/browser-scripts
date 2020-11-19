function m(){
  console.log("___________________________");
  var myClass = "jobsearch-ViewJobLayout-innerContent";
  myClass = "jobsearch-ViewJobLayout";
  try{
    // var company = document.getElementById("vjs-cn").getElementsByTagName("a")[0].innerText;
    var company = document.getElementsByClassName(myClass)[0].getElementsByTagName("a")[0].innerText;
  }
  catch(e){
    // try{var company = document.getElementById("vjs-cn").innerText;}
    try{var company = document.getElementsByClassName(myClass)[0].innerText;}
    catch(e){company = ""}
  }
  console.log("COMPANY: " + company);
  var words = {
    blue: "remote",
    yellow: "angular node javascript",
    red: "java php docker c# .net",
    orange: "react python",
    green:"year contract"
  }
  for(key in words){
    let color = key;
    let wordArr = words[key].split(" ");
    for(var k=0;k<wordArr.length;k++){
      var str = wordArr[k];
      var re = new RegExp(str, 'gi');
      var el = ["p","li"];
      for (var j=0;j<el.length;j++){
        var searchDiv = document.getElementById("vjs-container")
        if(!searchDiv){
          searchDiv = document.getElementById("jobDescriptionText")
        }
        var all = searchDiv.getElementsByTagName(el[j]);
        for(var i=0;i<all.length;i++){
          var text = all[i].innerHTML;
          var newText = text.replace(re, "<span style='background-color:"+color+"'>"+str+"</span>");
          // console.log(newText);
          all[i].innerHTML = newText;
          if(text != newText){
            console.log(str);
          }
        }
      }
    }
    console.log("- - - - - - - - - - - - - - - ")
  }
}
// document.getElementsByClassName("clickcard").addEventListener("click", m);
m();
