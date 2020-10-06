/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

function initBlank(m, n) {
    let blank = []
    for(let i = 0; i < m; i++) {
        blank[i] = new Array()
        for(let j = 0; j < n; j++) {
            blank[i][j] = 0
        }
    }
    return blank
}

var movingCount = function(m, n, k) {
    let count = 0;
    let blank = initBlank(m, n)
    var dfs = (i, j, k) => {
        // console.log('xxx')
        if(i < 0 || j < 0 || i >= m || j >= n || calculate(i, j) > k || blank[i][j] == '') return false
        blank[i][j] = '';
        count = count + 1;
        var res = dfs(i-1, j, k) || dfs(i+1, j, k) || dfs(i, j-1, k) || dfs(i, j+1, k)
        return res
    }
    var calculate = (i, j, k) => {
        var i_unit = parseInt( i % 10);
        var j_unit = parseInt( j % 10);

        var i_tens = parseInt((i % 100) / 10);
        var j_tens = parseInt((j % 100) / 10);

        var i_hund = parseInt((i % 1000) / 100);
        var j_hund = parseInt((j % 1000) / 100);

        return i_unit+j_unit+i_tens+j_tens+i_hund+j_hund
    }

    dfs(0, 0, k);
    console.table(blank)

    return count;
};

console.log( movingCount(10, 10, 15))

