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

var tree1 = {};

for(let i = 0; i < 5; i++) {
    //  tree1['6'] = insertNode(6, tree1['2'], tree1['8']);
    //  tree1['2'] = insertNode(2, tree1['0'], tree1['4']);
    //  tree1['3'] = insertNode(3, null, null);
    //  tree1['5'] = insertNode(5, null, null);
    //  tree1['4'] = insertNode(4, tree1['3'], tree1['5']);
    //  tree1['8'] = insertNode(8, tree1['7'], tree1['9']);
    //  tree1['7'] = insertNode(7, null, null);
     tree1['2'] = insertNode(2, tree1['1'], null);
     tree1['1'] = insertNode(1, null, null)
}


var lowestCommonAncestor = function(root, p, q) {
    var stack = [];
    if(!root) {
        return root
    }
    var dfs = (node) => {
        if(node != null) {
            if(p <= node.val && node.val <= q) {
                flag = node.val
                return node;
            }else {
                    stack.push(node.val);
                    dfs(node.left);
                    dfs(node.right);
                }
            }
        }
    dfs(root);
    return flag;
}
    

console.log( lowestCommonAncestor(tree1['2'], 0, 8))