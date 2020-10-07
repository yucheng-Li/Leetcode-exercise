/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    return  quickSort(nums, 0, nums.length-1)
};

function quickSort(array, left, right) {
   let index;
   index = changSort(array, left, right) ;
   if(left < index-1) {
       quickSort(array, left, index-1)
   }
   if(right > index) {
    quickSort(array, index, right)
   }
   return array
}

function changSort(array, left, right) {
    var mid = array[Math.floor((left+right) / 2)]
    let i = left;
    let j = right;
    while(i <= j) {
        while(array[i] < mid) {
            i++
        }
        while(array[j] > mid) {
            j--
        }
        if(i <= j) {
            [array[i], array[j]] = [array[j], array[i]]
            i++;
            j--;
        }
    }
    return i
}