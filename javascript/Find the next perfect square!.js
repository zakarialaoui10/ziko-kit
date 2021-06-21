findNextSquare=(sq)=>{
let sqr=sq**0.5;
  if(sqr!=Math.floor(sqr))return -1;
let i=sq+1;
while(i**0.5!=Math.floor(i**0.5)){
i++;
}
return i
}