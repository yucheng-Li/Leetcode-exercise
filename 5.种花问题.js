// [1,0,0,0,0,0,1]    5->2

// [1,1,0,0,0] 1\2    2 2 ->2
// [0,0,0,0,0] 1\2\3  5->3
// n: 2n+1-2n+2
// 3: 7-8
// 2: 5-6
// 1: 3-4


var canPlaceFlowers = function(flowerbed, n) {
    while(1){
    if(n == 0){
        return true
    }

    let floot = flowerbed.findIndex((one,now_index,org_arr) => 
         one === 0 && org_arr[now_index-1] != 1 && org_arr[now_index+1] !=  1
        )
        if(floot>-1){
            n--
            flowerbed[floot] = 1
        }else{
            return false
        }
    }
    console.log(floot)
 
    }

console.log( canPlaceFlowers([1,0,0,0,0,0,1] ,3))