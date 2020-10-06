
function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
 };
/**
 * @param {Node} root
 * @return {Node}
 */

function insertNode(val, left, right) {
    let node = new Node(val, left, right);
    // node.left = left;
    // node.right = right;
    return node;
}

var tree = {};
for(let i = 0; i < 6; i++) {
    tree['1'] = insertNode(1, tree['2'], tree['3']);
    tree['2'] = insertNode(2, tree['4'], tree['5']);
    tree['3'] = insertNode(3, null, tree['7']);
    tree['4'] = insertNode(4, null, null);
    tree['5'] = insertNode(5, null, null);
    tree['7'] = insertNode(7, null, null);
}
// console.log(tree['1'])

var connect = function(root) {
    let queue = [];
    let queue_temp = [];
    let sort = [];
    queue.push(root);
    while(queue.length > 0) {
        let len = queue.length;
        // console.log(queue)
        for(let i = 0; i < len; i++) {
            let temp = queue.shift();
            if(temp != null) {
                if(i == len-1) {
                    temp.next = null;
                }else {
                    temp.next = queue[0];
                }
                // console.log(temp.next)
                sort.push(temp.val);
                if(temp.left != null) {
                    queue.push(temp.left);
                }
                if(temp.right != null) {
                    queue.push(temp.right);
                }
            }
        }
    }
    return root
};

console.log(connect(tree['1']))