
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
var tree2 = {};

for(let i = 0; i < 5; i++) {
     tree1['2'] = insertNode(2, tree1['1'], tree1['3']);
     tree1['1'] = insertNode(1, null, tree1['4']);
     tree1['3'] = insertNode(3, null, tree1['7']);
     tree1['7'] = insertNode(7, null, null);
     tree1['4'] = insertNode(4, null, null);
    //  tree1['6'] = insertNode(6, null, null);
    //  tree1['9'] = insertNode(9, null, null);
}

for(let i = 0; i < 5; i++) {
    tree2['1'] = insertNode(1, tree2['3'], tree2['2']);
    tree2['2'] = insertNode(2, null, null);
    tree2['3'] = insertNode(3, tree2['5'], null);
    tree2['5'] = insertNode(5, null, null);
    // tree2['9'] = insertNode(9, null, null);
}

function mergeBinaryTree(root1, root2) {
    if(!root1) {
        return root2
    }
    if(!root2) {
        return root1 
    }
    var dfs = (root1, root2) => {
        if(root1 != null || root2 != null) {
            if(root1 == null) {
                root1 = insertNode(0, null, null);
            }
            if(root2 == null) {
                root2 = insertNode(0, null, null);
            }

            root1.val = root1.val + root2.val;
            root1.left = dfs(root1.left, root2.left);
            root1.right = dfs(root1.right, root2.right)
        }
        return root1;
    }
    
    return dfs(root1, root2);
}

console.log( mergeBinaryTree([], tree2['1']))
