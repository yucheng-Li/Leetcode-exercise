function TreeNode (val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function insertNode (val, left, right) {
    let node = new TreeNode(val);
    node.left = left;
    node.right = right;
    return node
}

var tree = {}

for(let i = 0; i < 7; i++) {
     tree['4'] = insertNode(4, tree['2'], tree['7']);
     tree['2'] = insertNode(2, tree['1'], tree['3']);
     tree['1'] = insertNode(1, null, null);
     tree['3'] = insertNode(3, null, null);
     tree['7'] = insertNode(7, tree['6'], tree['9']);
     tree['6'] = insertNode(6, null, null);
     tree['9'] = insertNode(9, null, null);
}




//迭代写法，利用BFS原理
// function turnTree(root) {
    // var queue = [];
    // queue.push(root);
    // var turn = (root) => {
        // [root.left, root.right] = [root.right, root.left]
    // }
    // while(queue.length > 0) {
        // let len = queue.length;
        // for(let i = 0; i < len; i++) {
            // let temp = queue.shift();
            // if(temp) {
                // if(temp.left != null) {
                    // queue.push(temp.left)
                // }
                // if(temp.right != null) {
                    // queue.push(temp.right)
                // }
                    // turn(temp)
            // }
        // }
    // }
    // return root
// }
// 
// console.log(turnTree(tree['4']))
// 

//递归写法
function turnTree(root) {
    var turn = (root) => {
        if(root) {
            [root.left, root.right] = [root.right, root.left];
            turn(root.left);
            turn(root.right);
        }
        return root
    }
    return turn(root)
}

console.log(turnTree(tree['4']))