function solution(number){
  if(number<0)return 0;
  let list=[];
  for(let i=0;i<number;i++){
    if(i%5==0||i%3==0)list.push(i)
  }
return list.reduce((a,b)=>a+b,0);
}
