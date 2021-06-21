sumTriangularNumbers=(n)=>{
if(n<=0)return 0;
list=[]
for(i=0;i<=n;i++)list.push(i+list[list.length-1]||0)
return list.reduce((a,b)=>a+b)
}