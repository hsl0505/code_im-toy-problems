/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/

Array.prototype.isSubsetOf = function(array){
  // Your code here
  let result = true;

  for (let i=0; i<this.length; i=i+1) {    //extra credit ->  레퍼런스 타입 문제

    if (typeof (this[i]) === "object" || Array.isArray(this[i])) {
      let temp = false;
      for (let j=0; j<array.length; j=j+1) {
        if (JSON.stringify(array[j]) === JSON.stringify(this[i])) {
          temp = true;
        }
      }
      if (temp === false) {
        return false
      }
    }
    else {
      if (array.includes(this[i])) {
        result = true;
      }
      else {
        return false
      }
    }
  }

  return result;
};
