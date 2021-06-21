findOutlier=(integers)=>{
let odd=integers.filter(a=>a%2==0)
let even=integers.filter(a=>Math.abs(a%2)==1)
return odd.length==1?odd[0]:even[0]
}