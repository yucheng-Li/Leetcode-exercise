/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function insertNode(val, left, right) {
    var node = new TreeNode(val);
    node.left = left;
    node.right = right;
    return node;
}

var tree = {}

for(let i = 0; i < 5; i++) {
     tree['3'] = insertNode(3, tree['9'], tree['20']);
     tree['9'] = insertNode(9, null, null);
     tree['20'] = insertNode(20, tree['15'], tree['7']);
     tree['15'] = insertNode(15, null, null);
     tree['7'] = insertNode(7, null, null);
}

console.log(tree)


var averageOfLevels = function(root) {
    var queue = [];
    var result = [];
    queue.push(root);
    while(queue.length) {
        var len = queue.length
        var layerSum = 0;
        for(let i = 0; i < len; i++) {
            var item = queue.shift();
            layerSum = layerSum + item.val;
            if(item.left) {
                queue.push(item.left);
            }
            if(item.right) {
                queue.push(item.right);
            }
        }
        result.push(layerSum / len)
    }

    return result;
}

console.log( averageOfLevels(tree['3']))









