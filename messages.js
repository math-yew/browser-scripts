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

let combos = [];

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
      state.map((e,i)=>{
        str += words[i][e];
      });
      // console.log("str : " + str);
      if(name == "combos") {
        combos.push(str);
      }
    }

  }
}

increment(skeleton,[],"combos");
console.log(combos);
console.log(combos.length);
