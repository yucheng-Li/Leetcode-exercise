//回溯算法

function backtracking (arr) {
    let res_list = [];
    let len = arr.length;
    var dfs = (index, list) => {
        //回溯结束条件
        if(index == len) {
        //结果添加
            res_list.push(list.slice())
            return;
        }
        //可选操作
        list.push(arr[index])
        dfs(index+1, list);
        list.pop();
        dfs(index+1, list);
    }
    dfs(0, [])
    return res_list
}
console.log( backtracking([1,2,3]))