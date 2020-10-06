var maxScoreSightseeingPair = function(A) {
    let max = 0
    let len = A.length
    for(let i = 0; i < len-1; i++) {
        for(let j = i + 1; j < len; j++) {
            while(A[j] <= j - i && j < len - 1) j++
            let sum = A[i] + A[j] + (i - j);
            max = Math.max(max, sum)
        }
    }
    return max
};

console.log( maxScoreSightseeingPair([8,1,5,2,6]))
