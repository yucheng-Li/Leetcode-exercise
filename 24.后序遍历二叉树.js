
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

for(let i = 0; i < 6; i++) {
     tree['3'] = insertNode(3, tree['9'], tree['20']);
     tree['9'] = insertNode(9, null, null);
     tree['20'] = insertNode(20, tree['15'], tree['7']);
     tree['15'] = insertNode(15, null, null);
     tree['7'] = insertNode(7, null, null);
}


var postorderTraversal = function(root) {    
    let stack = []
    let res=[]
    let prev=null
    if(!root) {
        return root
    }
    while(root != null|| stack.length > 0){
        while(root){
          stack.push(root)
          root=root.left
        }
        root=stack.pop()
        if(root.right == null ||  root.right == prev){
          res.push(root.val)
          prev=root
          root = null
        }
        else{
          stack.push(root)
          root=root.right
        }
    }

    return res
    };

   console.log( postorderTraversal(tree['3']))
    