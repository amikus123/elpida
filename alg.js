let findPermutations = (string) => {
  if (!string || typeof string !== "string"){
    return "Please enter a string"
  } else if (string.length < 2 ){
    return string
  }

  let permutationsArray = [] 

  for (let i = 0; i < string.length; i++){
    let char = string[i]

    if (string.indexOf(char) != i)
    continue

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let permutation of findPermutations(remainingChars)){
      permutationsArray.push(char + permutation) }
  }
  return permutationsArray
}

const isStringSorted = (str = '') => {

   for(let i = 0; i < str.length-1; i++){
    if(str[i]>str[i+1]){
      return false
    }
  }
   return true;
};

let totalSum = 0
const calc = string=>{
  let sum = 0;
  const base = string
  while(!isStringSorted(string)){
    const toFind = string[0]=="1"?string.length:string[0]-1
    const offset = string.indexOf(toFind)
    const tmp = string.split("")
    sum+=offset
    const letter = tmp.splice(offset,1)
    // console.log([string,sum,offset,letter,toFind,tmp])
    string = tmp.join("")
    string = letter+string
  }
  
  console.log("res ",base," ",sum)
  totalSum+=sum;
}
const string = "1234567"

const arr = findPermutations(string)
for(let i=1;i<=string.length;i++){
for(const s in arr){
    if(arr[s][0]==3){
      calc(arr[s])
    }
  }
  console.log(totalSum)
  totalSum = 0;
}
