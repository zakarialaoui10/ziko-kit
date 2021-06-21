largestPairSum=(numbers)=>
{
  numbers=numbers.sort((a,b)=>a-b)
 return numbers.pop()+numbers.pop()
}