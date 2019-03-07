
function sum(fromN, toN) {
  if(toN === fromN) {
    return toN;
  } 
  return fromN + sum(fromN+1, toN);
}
console.log(sum(3,7));

module.exports = sum;

