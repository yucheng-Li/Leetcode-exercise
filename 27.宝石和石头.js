var numJewelsInStones = function(J, S) {
    J = J.split('');
    S = S.split('');
    let sum = 0
    console.log(J);
    console.log(S);
    for(let i = 0; i < J.length; i++) {
        for(let j = 0; j < S.length; j++) {
            if(S[j] == J[i]) {
                sum++
            }
        }
    }
    console.log(sum)
    return sum
};

numJewelsInStones("z", "ZZ")