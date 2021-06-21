//Recursive 
factorial=(x)=>x<2?1:x*factorial(x-1)


///ITERATIVE
factorial=(x)=>{
if(x==0)return 1
let fct=1
for(let i=1;i<=x;i++)fct*=i;
return fct
}