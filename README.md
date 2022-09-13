# my-codewars-Solutions 
 
 
## Isogram
isIsogram=str=>{
return [...new Set(str.toLowerCase())].length===str.length
}
##  Unique In Order

```javascript  
uniqueInOrder=(iterable)=>{
let arr=[];
for(let i=0;i<iterable.length;i++){
iterable[i]!=iterable[i+1]&&arr.push(iterable[i])
}
return arr;
} 
```  
