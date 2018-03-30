//printReverse() - Take an array and print out the conents in reverse order:



function printReverse(arr){
  for(var i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
  }
}

//isUniform() - Take an array and verify that each piece of data in that array is the identical:
function isUniform(arr){
  var first = arr[0];
  for(var i = 0; i < arr.length; i++){
   if(arr[i] !== first){
     return false;
   }
 }
   return true;
}

//sumArray() - Take all the data in an array and add it together as a sum:


function sumArray(arr){
  var total = 0;
  arr.forEach(function(sum){
    total += sum;
  });
  return total;
}

//max() - Take an aray and search through each data index and remember the largest piece of data in that array:

function max(arr){
  var max = arr[0];
  for(var i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}
