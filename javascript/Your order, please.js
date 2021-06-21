order=(words)=>{
arr=words.split(" ");
newArr=[]
numbers=arr.map((str)=>str.split("").map(Number))
numbers=numbers.map((n)=>n.filter((m=>!isNaN(m))))
for(let i=0;i<arr.length;i++)newArr[numbers[i]]=arr[i];
  newArr.shift();
return newArr.join(" ")
}