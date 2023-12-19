 let add=0;

 document.getElementById('ad').addEventListener('click',function(){
add=add+1;
// console.log(add);
document.getElementById('result').innerHTML=add;


})

document.getElementById('sub').addEventListener('click',function(){
    if(add>0)add=add-1;
    // console.log(add);
    document.getElementById('result').innerHTML=add;
    
    
    })