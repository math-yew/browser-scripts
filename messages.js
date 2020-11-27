let wordsz = {
  0: ["our ","his ","her "],
  1: ["dog ","cat ","llama "],
  2: ["jumped","sat","flew"]
}

let words = {
  0: ["a","b","c","d"],
  1: ["m","n","o","p"],
  2: ["r","s","t","u"],
  3: ["w","x","y","z"]
}

let colArr = [];
for(key in words){
  colArr.push(key);
}
let columns = {};
colArr.map((e)=>columns[e] = colArr);

let skeleton = [];
for (arr in words){
  skeleton.push(words[arr].length);
}

let wskel = [];
for (arr in words){
  wskel.push(columns[arr].length);
}

let combos = [];
let setup = [];
function increment(_sk,state,name){
  let num = _sk[0];
  let sk = _sk.slice(1);
  for (let i = 0; i < num; i++) {
    if(i > 0){
      state.pop();
    }
    state.push(i);

    if(sk.length>0){
      increment(sk,[...state],name);
    } else {
      let str = "";
      let base = [];
      state.map((e,i)=>{
        if(name == "combos") {
          base.push(words[i][e]);
        }
        if(name == "setup") {
          str += columns[i][e];
        }
      });
      // console.log("str : " + str);
      if(name == "combos") {
        // console.log("BASE: " + base);
        orders.map((order)=>{
          let orderArr = order.split("");
          // console.log("orderArr" + orderArr);
          let oneStr = ""
          orderArr.map((e)=>oneStr += base[e]);
          str = oneStr;
          combos.push(str);
        });
      }
      if(name == "setup") {
        setup.push(str);
      }
    }

  }
}

increment(wskel,[],"setup");
let orders = setup.filter((e)=>{
  let arr = e.split("");
  let unique = true;
  for (var i = 0; i < arr.length; i++) {
    if(arr.indexOf(arr[i]) != i){
      unique = false;
      break;
    }
  }
  return unique;
})
console.log("orders: " + orders);

increment(skeleton,[],"combos");
console.log(combos);
console.log(combos.length);

let nonRepeat = [...new Set(combos)];
console.log(nonRepeat);
console.log(nonRepeat.length);

document.getElementById("results").innerHTML = "["+nonRepeat.toString()+"]";
// document.getElementById("results").innerHTML = "hi";
