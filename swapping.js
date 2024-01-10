//how you can swap 2 variable without using 3rd variable

var a=5;
var b=8;
console.log('Var a Before swapping: '+a);
console.log('Var b Before swapping: '+b);
//Failed Logic
// a=b;//a=5| b=8==> a=8
// b=a;//b=8| a=8==> b=8
//logic A
a=a+b;//a=5 | b=8 ==>a+b==> a=13==> logic 1
b=a-b;//a=13| b=8==> a-b==> b=5==>logic 2
a=a-b;//a=13 | b=5==> a-b==>13-5==> a=8 ==> logic 3
console.log('Var a After swapping: '+a);
console.log('Var b After swapping: '+b);
//Logic B
var c=0;
c=a;// c=0 | a=5 ==> c=5==> Logic 1
a=b;// a=5 | b=8==> a=8==> logic 2
b=c// b=8| c=5 ==> b=5==> logic 3

console.log('Var a After swapping by Logic A: '+a);
console.log('Var b After swapping by Logic B: '+b);