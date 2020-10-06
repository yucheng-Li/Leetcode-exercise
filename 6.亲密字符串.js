// aaaahaabc
// aahaaacba

// aaaaaabc
// aaaaaacb

"abcaa"
"abcbh"

var buddyStrings = function([...A], [...B]) {
    var num = 0;
    var arr = new Array()
    for(let i = 0; i < A.length; i++) {
        if(A[i] != B[i]) {
            num++
            arr.push(i)
        }
        var other = A.findIndex((x,y,all) => x != all[0])
    }
    if(other == -1) {

        console.log(1)
        return true
    }else if(num == 2 && A[arr[0]] == B[arr[1]] && A[arr[1]] == B[arr[0]]) {
        return true
    }else if(num == 0 && A.length>2 && isRepeat(A)) {
        
        console.log(A.length)
        return true
    }else {
        return false
    }
};


function isRepeat(arr){     
    var obj = {}; 

    for(var i in arr) { 
        //存在重复值
        if(obj[arr[i]])  return true; 

        obj[arr[i]] = true; 
        console.log(obj)
    } 
    //不重复
    return false; 
} 
console.log( buddyStrings("abc",
"abc"))