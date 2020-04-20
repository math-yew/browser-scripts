function m(){
  var words = {
    red: "php perl java c# .net",
    yellow: "angular node javascript",
    orange: "react",
    blue: "remote"
  }
  for(key in words){
    let color = key;
    let wordArr = words[key].split(" ");
    for(var k=0;k<wordArr.length;k++){
      var str = wordArr[k];
      var re = new RegExp(str, 'gi');
      var el = ["p","li"];
      for (var j=0;j<el.length;j++){
        var all = document.getElementById("vjs-container").getElementsByTagName(el[j]);
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
  }
}
m();
