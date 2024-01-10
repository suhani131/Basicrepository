var a=9;
var b=3;
var c=12;
// ||==> Or Condition
// &&==> AND Condition
// !===> Not equal to Condition
//(9>3 || 9> 12)==>(true || false)==> false
if(a > b || a >c){
    console.log('A is greater');
}
else if(b > c){
    console.log('B is greater');
}
else{
    console.log('C is greater');
}