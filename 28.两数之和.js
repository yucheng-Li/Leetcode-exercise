// var twoSum = function(nums, target) {
//     let sum = []
//     for(let i = 0; i < nums.length-1; i++) {
//         for(let j = i+1; j < nums.length; j++) {
//             if(nums[i] + nums[j] == target) {
//                 sum.push(i);
//                 sum.push(j)
//             }
//         }
//     }
//     return sum
// };

// twoSum([2,7,11,15], 12)

var twoSum = function(nums, target) {

    var Map = {};
    for(let i = 0; i < nums.length; i++) {
        let diff_val = target - nums[i];
        Map[nums[i]] = diff_val;
        if(Map[diff_val] != null) {
            for(key of Map) {
                
            }
        }
    }
    console.log(Map)
};
twoSum([2,7,11,15], 9)

