console.log("MESSAGES!")
let list1 = ["our","his","her"];
let list2 = ["dog","cat","llama"];
let list3 = ["jumped","sat","flew"];

let together = [list1, list2, list3];

let wordss = {
  0: ["a"],
  1: ["c","d"],
  2: ["m","n"],
  3: ["x","y"]
}

let words = {
  0: ["a","b"],
  1: ["c","d"]
}


let skeleton = [];
for (arr in words){
  skeleton.push(words[arr].length);
  console.log(words[arr][0]);
}
console.log(skeleton);

function increment(sk,state){
  console.log(sk + " : " + state);
  let num = sk[0];
  sk.shift();
  for (var i = 0; i < num; i++) {
    console.log(sk.length + 1 + " | " + "STATE: " + state);

    if(sk.length>0){
      if(i > 0){
        state.pop();
      }
      state.push(i);
      increment(sk,state);
    } else {
      if(i > 0){
        state.pop()
      }
      state.push(i);
      let str = "";
      state.map((e,i)=>{
        str += words[i][e];
      });
      console.log(state + " : " + str);
    }

    if(i == num - 1){
      state.pop();
      state.push(0);
    }

  }
}

increment(skeleton,[]);
