rowSumOddNumbers=(n)=>{
  //return n**3
  // but i prefer other method because it help us to find the digits so you can use it to draw the triangle ... 
let N=0;
for(let i=0;i<=n;i++)N+=i;
let list=[];
for(i=0;list.length<N;i++){
i%2==1&&list.push(i);
}
return list.slice(-n).reduce((a,b)=>a+b,0);
}