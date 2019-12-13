/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target) {
    if(array.length === 1) {
        if(array[0] === target) {
            return 0
        }
        else {
            return null
        }
    }

    function binaryRecursion(arr, target) { // [1,2,3,4,5]
        // console.log(arr, target)
        let start ;
        if(arr.length % 2 !== 0) {
            start = arr[Math.floor(arr.length/2)]  // start : 3
        }
        else  {
            start = arr[arr.length/2] // // start 2
        }
        
        if (start === target) { 
            let result = array.indexOf(start);
            return result
        }
        else if (start < target) {
            let sliceStart = arr.indexOf(start)
            let newArr = arr.slice(sliceStart+1)
            if (newArr.length ===1) {
                return array.indexOf(newArr[0])
            }
            return binaryRecursion(newArr, target)
        }
        else if(start > target) {  //3 > 1  // 2 > 1
            let sliceEnd = arr.indexOf(start)  // 2 // 1
            let newArr = arr.slice(0,sliceEnd)  // [1,2] // [0]
            if (newArr.length ===1) {
                return array.indexOf(newArr[0])
            }
            return binaryRecursion(newArr, target)
        }
    }
    
    return binaryRecursion(array, target)
};

