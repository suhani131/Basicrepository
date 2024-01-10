list=[1,2,3,7,4,5,6,8,9,10];
for(i=0;i<=list.length-1;i++){
    console.log(list[i]);
}
for(var i in list){
    //list[0]=1
    //list[1]=2
    //list[2]=3
    //list[9]=10
    if(list[i]%2==0){
        console.log("Number is even: "+list[i]);
    }
}