var longestCommonPrefix = function(strs) {
    let C = []
    let num = 0
    if(strs[0] == undefined ){
        return ''
    }
    for(let i = 0; i < strs.length; i++) {
        let A = [...strs[0]];
        let B = [...strs[i]];
        for(let j = 0; j < A.length; j++){
            if(A[j] == B[j]) {
                num++
            }else {
                C.push(num)
                num = 0 ;
                break;
            }
        }
        if(A.length >= B.length){
            C.push(A.length)
            num = 0 ;
        } 
        num = 0
    }
    let falnum = Math.min.apply( null,C) ;
    let out = strs[0].slice(0,falnum)
    return out
};

 
 console.log( longestCommonPrefix(["cb","cbb","a"]))