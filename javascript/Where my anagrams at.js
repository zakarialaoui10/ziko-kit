anagrams=(word,words)=>{
word=word.split("").sort().join("");
Sortedwords=words.map(str=>str.split("").sort().join(""));
let anag=[];
for(let i=0;i<words.length;i++){
if(JSON.stringify(word)===JSON.stringify(Sortedwords[i]))anag.push(words[i])
}
return anag
}