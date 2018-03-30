const integers = [1,2,3,4,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];

var int = [];

for (var n in integers) {
  if (integers[n]%5 === 0) {
    int.push(integers[n]);
  }
}

const isMultipleOfFive = (int) => true;


const computeSum = (ints) => {
  var ints = 0;

  for (var n in int){
    ints += int[n];
  };
  return ints;
};

let sum = computeSum(integers);

console.log(sum);
