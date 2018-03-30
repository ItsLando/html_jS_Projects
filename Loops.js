alert("It's working");

console.log("Printing all numbers between -10 and 18")
var count = -10;

while (count <= 18){
  console.log(count);
  count++;
}

console.log("Printing all even numbers between 10 and 40");
var count = 10;

while (count <= 40){
  if (count % 2 === 0){
    console.log(count);
  }
  count++;
}

console.log("printing all odd numbers between 300 and 333");

var count = 300;

while (count <= 333){
  if (count % 2 !== 0){
    console.log(count);
  }
  count++;
}




// var count = 301;

//while (count <= 333){
//console.log(count)
//  count+=2;
//}

console.log("Printing all numbers divisbile by 5 and 3 between 5 and 50")

var count = 5;

while (count < 50){
  if (count % 5 === 0 && count % 3 === 0){
    console.log(count);
  }
  count++;
}
