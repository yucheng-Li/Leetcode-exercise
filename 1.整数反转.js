`
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
`
// x=123

var reverse = function(x) {
    var sym = x>0;
    
    if(sym){
        var arr =  change(x);
        console.log(arr)
        return arr
    }
    else{
        neg = Math.abs(x)
        var neg = change(neg);
        console.log(~neg+1)
        return (~neg+1)
    }
};

function change(num){
    var arr = num.toString().split("")
    arr = parseInt( arr.reverse().join(',').replace(/,/g,''))

    if(arr<=Math.pow(-2,31)||arr>=Math.pow(2,31)){
        console.log(0)
    return 0
    }else{
        return arr
    }
}
    
`
1.判断有没有符号
2.if 是负号》转为绝对值》
`
 // if(x<=Math.pow(-2,31)||x>=Math.pow(2,31)){
    //     console.log(0)
    //     return 0
    // }