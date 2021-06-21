hexStringToRGB=hex=>{
r="0x"+hex.slice(1,3);
g="0x"+hex.slice(3,5);
b="0x"+hex.slice(5,7);
[r,g,b]=[r,g,b].map(n=>+n)
return {r:r,g:g,b:b}
}