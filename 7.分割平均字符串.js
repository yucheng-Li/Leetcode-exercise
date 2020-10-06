`***************方法1*******************`
var balancedStringSplit = function([...s]) {

    console.log('*******开始*********')
    let A = s;
    let len = s.length 
    let B = [];
    let C = []
    let num = 0;

    for(let i = 0; i < len; i++){
        B.push(A.shift())
        console.log(B)
        if(counts(B, 'R') == counts(B, 'L')) {
            num++
        }
    }
    return num
};

console.log( balancedStringSplit("LLLLRRRR"))

function counts(arr, value) {
    return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
}

` **********方法二************ `

var balancedStringSplit = function([...s]) {
    
    console.log('*******开始*********')
    let A = s;
    let len = s.length 
    let res = 0;
    let num = 0;

    for(let i = 0; i < len; i++){
        if( A[i] == 'R'){
            num++
            // console.log(num)
        }else {
            num--
        }
        
        if(num == 0) {
            res++
        }
    }
    return res
};

console.log(balancedStringSplit("RLLLLRRRLR"))
