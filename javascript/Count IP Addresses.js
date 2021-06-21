ipsBetween=(start="10.0.0.0",end="10.0.0.50")=>{
start=start.split(".").map(n=>+n);
end=end.split(".").map(n=>+n);
diff=(end[3]-start[3])+(end[2]-start[2])*256+(end[1]-start[1])*256**2+(end[0]-start[0])*256**3
return diff
}