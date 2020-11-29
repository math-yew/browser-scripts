let wordsz = {
  0: ["our ","his ","her "],
  1: ["dog ","cat ","llama "],
  2: ["jumped","sat","flew"]
}

let words = {
  0: ["I'm new to Tiktok. ","I haven't been on Tiktok that long. ", "Tiktok is pretty new to me. ", "I just joined Tiktok a short time ago. ", "I'm still getting to know how Tiktok works. ", "I'm just starting to get aquatinted with Tiktok. "],
  1: ["I noticed that we both follow so and so. ", "I see that you also follow so and so. ", "so and so's videos are pretty funny, I see you also follow him. ", "It looks like we both like videos from so and so. ", "It looks like we both follow so and so. "],
  2: ["Do you have any suggestions for following people who sing funny songs? ", "Who, if anyone, would you recommend to follow who also makes up funny songs? ", "Any recommendations for people to follow who sing funny songs? ", "Who sings funny songs that would be good to follow? "],
  3: ["I want to find more music like mine. ", "I'm looking for more songs like mine. ",  "I want to follow more songwriters like me. ", "I want to see more Tiktoks in my feed that are similar to mine. "]
}

let words1 = {
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

let rearranged = [];

while(combos.length > 0){
  let remaining = combos.length;
  let picked = Math.floor(Math.random()*remaining);
  let item = combos.splice(picked,1)[0];
  rearranged.push('"'+item+'"');
}

let nonRepeat = [...new Set(rearranged)];
console.log(nonRepeat);
console.log(nonRepeat.length);

document.getElementById("results").innerHTML = "["+nonRepeat.toString()+"]";
// document.getElementById("results").innerHTML = "hi";
