function getSum(a,b)
{
  let sum=0;
  let A=Math.min(a,b);
  let B=Math.max(a,b);
   for(let i=A;i<=B;i++)sum+=i;
  return sum;
}