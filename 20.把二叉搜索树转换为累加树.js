/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
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

var tree1 = {}

for(let i = 0; i < 5; i++) {
     tree1['5'] = insertNode(5, tree1['2'], tree1['8']);
     tree1['2'] = insertNode(2, tree1['1'], tree1['3']);
     tree1['8'] = insertNode(8, tree1['6'], tree1['9']);
     tree1['1'] = insertNode(1, null, null);
     tree1['3'] = insertNode(3, null, null);
     tree1['6'] = insertNode(6, null, null);
     tree1['9'] = insertNode(9, null, null);
}

var convertBST = function(root) {
    let sum1 = 0;
    var dfs = (root) => {
        if(root != null) {
            dfs(root.right);
            sum1 += root.val;
            root.val = sum1
            dfs(root.left);
        }
        return;
    }
    dfs(root);
    return root
};

convertBST(tree1['5'])
