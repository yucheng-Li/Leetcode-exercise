function TreeNode(val, left, right) {
            this.val = (val===undefined ? 0 : val)
            this.left = (left===undefined ? null : left)
            this.right = (right===undefined ? null : right)
    }
    function insertNode(val, left, right) {
        var node = new TreeNode(val);
        node.left = left;
        node.right = right;
        return node;
    }
    
    var tree = {}
    
    for(let i = 0; i < 6; i++) {
         tree['4'] = insertNode(4, tree['2'], tree['7']);
         tree['7'] = insertNode(7, null, null);
         tree['2'] = insertNode(2, tree['1'], tree['3']);
         tree['1'] = insertNode(1, null, null);
         tree['3'] = insertNode(3, null, null);
    }
    
    // console.log(tree['4'])
    var insertIntoBST = function(root, val) {
        
        var find = (node, val) => {
          if(node != null ){
          
            if(node.val != null) {
                if(node.val < val) {
                    find(node.right);
                }
                if(node.val > val) {
                    find(node.left);
                }
            console.log('sss')
            }
          } else{
            console.log('xxx')
            node.val = val;
            node.left = null;
            node.right = null;
            return;
          } 
        }
        find(root,val)
      return root  
    };
    
    console.log( insertIntoBST(tree['4'], 5))