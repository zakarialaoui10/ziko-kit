function createPhoneNumber(numbers){
  let str="("+numbers.slice(0,3)+") "+numbers.slice(3,6)+"-"+numbers.slice(6);
  return str.replace(/,/gi,"");
}