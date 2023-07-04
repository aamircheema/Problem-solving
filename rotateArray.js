
let numberArray = [1, 2, 3, 4, 5];
let rotationCount = 2;
//Function to modify Array
const rotateArray = (arr, num) => {
  let length = arr.length;
  if(num<arr.length){
  let firstPart = arr.slice(length-num);
  let secondPart = arr.slice(0,length-num);
  arr.splice(0,length,...firstPart,...secondPart)
  return arr;
 }
  return arr;
}
console.log(`Array beofore change: ${numberArray}`);
//Output = Array beofore change: 1,2,3,4,5
rotateArray(numberArray,rotationCount);
console.log(`Array after changing: ${numberArray}`);
//Output = Array after changing: 4,5,1,2,3


