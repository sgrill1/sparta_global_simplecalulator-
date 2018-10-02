alert("Feature 1: Choose two numbers to multiply together")

var value1 = prompt("enter value 1");
var value2 = prompt("enter value 2");
var answer = value1*value2;

alert(answer)
// console.log(answer)
alert("Feature 2: Choose 2 numbers followed by an operation")



var x=0;
while (x<5) {
  var value3 = prompt("enter value")
  var value4 = prompt("enter value")
  var operation = prompt("choose an operation (1)x (2)/ (3)+ (4)-")

  if(operation==1){
    answer = value3*value4
  };
  if(operation==2){
    answer = value3 / value4
  };
  if(operation==3){
    answer = value3 + value4
  };
  if(operation==4){
    answer = value3 - value4
  };
  // else if(operation >=5)
  //   answer = "invalid operation"

  alert(answer)
  console.log("iteration" + x);
  x++;
}
