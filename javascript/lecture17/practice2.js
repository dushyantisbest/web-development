let str = "abcdabcdefgggh";

function uniqueChar(str) {
  let dict = {};
  for (let i = 0; i < str.length; i++) {
    if (dict[str[i]] == undefined) {
      dict[str[i]] = 1;
    } else {
      dict[str[i]] += 1;
    }
  }
//   console.log(Object.keys(dict));
    let ans = "";
    for(key in dict){
        ans += key;
    }
    console.log(ans);
}


function uniqueChar2(str ) {
    let arr = [];
    for(let i=0; i < str.length; i++){
        for (let j = 0; j < str.length; j++) {
            const element = str[j];
        }
    }
}
