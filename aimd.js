const input = ' life of a usual fish'
const vowels = ['a', 'e', 'i', 'o', 'u']
const resArray = []

for (let i = 0; i < input.length; i++){
  if(input[i] === 'e') {
    resArray.push(input[i])
  }
    if(input[i] === 'u') {
    resArray.push(input[i])
  }
for (let j = 0; 
    j < vowels.length; j++){
        if(input[i] === vowels[j]){
          resArray.push(input[i]);
        }
    }
}

//console.log(resArray);

const resString = resArray.join('').toUpperCase();
console.log(resString);