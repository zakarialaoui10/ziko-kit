# my-codewars-Solutions 
 


```c      
uniqueInOrder=(iterable)=>{
let arr=[];
for(let i=0;i<iterable.length;i++){
iterable[i]!=iterable[i+1]&&arr.push(iterable[i])
}
return arr;
} 
```  
