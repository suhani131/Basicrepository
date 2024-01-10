
//for loop:- it is used to repeat the process
//for(var x=0; x<=10; x++);
//i=1;==1<11==2
//i=2;==2<11==3
//i=11;==11<11==>false==> loop will break
// for(var i=1;i<11;i++){
//     console.log("Welcome to Codeograph Solutions is executed :"+i);
// }
//j=10;==10>=1;==j=9
//j=9; == 9>=1;==j=8
//j=0;== 0>=1; for loop will break
// for(var j=10;j>=1;j--){
//     console.log("Welcome to Codeograph Solutions is executed :"+j);
// }
//write a program to add even number 1==> 20 use for loop
//21<=20==> loop break
let counteven=0;
let countodd=0;
for(var i=1;i<=5;i++){
   if(i%2==0){
    //0=0+2==> count=2, i=2
    //count =2; (2=2+4)count=count+i; count =6
    counteven=counteven+i;
   }
 else{
   countodd=countodd+i;
 }
   
}
console.log("Addition of even number is :"+counteven);
console.log("Addition of odd number: "+countodd)
console.log("Addition of even and odd will be: "+(counteven+countodd));