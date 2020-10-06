// 1. 先排序，指针顺序 now + sec + lo + hi
// 2. 若 now + sec + lo + hi > target , 则hi左移
// 3. 若 now + sec + lo + hi < target , 则lo右移


var fourSum = function(nums, target) {
    let a,b,c,d
    let _size = nums.length
    let res = []
    for(let i = 0; i < _size-1; i++) {
        for(let j = i+1; j < _size; j++) {
            if(nums[i] > nums[j]) {
                temp = nums[i];
                nums[i] = nums[j];
                nums[j]= temp
            }
        }
    }
    console.log(nums)
    if(nums.length<4) return res;
    for(a=0;a<=_size-4;a++){
        if(a>0&&nums[a]==nums[a-1]) continue;      //确保nums[a] 改变了
        for(b=a+1;b<=_size-3;b++){
            if(b>a+1&&nums[b]==nums[b-1])continue;   //确保nums[b] 改变了
            c=b+1,d=_size-1;
            while(c<d){
                if(nums[a]+nums[b]+nums[c]+nums[d]<target)
                    c++;
                else if(nums[a]+nums[b]+nums[c]+nums[d]>target)
                    d--;
                else{
                    res.push([nums[a],nums[b],nums[c],nums[d]]);
                    while(c<d&&nums[c+1]==nums[c])      //确保nums[c] 改变了
                        c++;
                    while(c<d&&nums[d-1]==nums[d])      //确保nums[d] 改变了
                        d--;
                    c++;
                    d--;
                }
            }
        }
    }
    return res;
}

    
    console.log( fourSum([1,0,-1,0,-2,2],0))