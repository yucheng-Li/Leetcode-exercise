var minimumOperations = function(leaves) {
    var getArr = leaves.split('')
    var ret_getArr = [];
    [...ret_getArr] = [...getArr]
    ret_getArr = ret_getArr.reverse()
    let left_pointer;
    let right_pointer;

    for(index in getArr) {
        if(getArr[index] == 'y') {
            left_pointer = parseInt(index);
            break
        }
    }
    for(index in ret_getArr) {
        if(ret_getArr[index] == 'y') {
            right_pointer = getArr.length - index;
            break
        }
    }

    // if(left_pointer > 1)
    console.log(left_pointer)
    console.log(right_pointer)


    var mid_arr = getArr.slice(left_pointer, right_pointer)
    console.log(mid_arr)
    let sum = 0
    let len = mid_arr.length
    for(let i = 0; i < len; i++) {
        if(mid_arr[i] == 'r') {
            sum++
        }
    }
    console.log(sum)
    return sum
};

minimumOperations("yrrrry")