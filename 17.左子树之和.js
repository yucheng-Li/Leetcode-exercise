const sumOfLeftLeaves = (root) => {
    // 设置结果
    let sum = [];
  
    // 2. 递归
    const recursion = (root) => {
      // 2.1 设置终止条件
      if (!root) {
        return;
      }
  
      // 2.2 如果有左子树，才进行添加
      if (root.left && !root.left.left && !root.left.right) {
        sum.push(root.left.val)
      }
  
      // 2.3 依序遍历左子树和右子树，直到它们没有为止
      recursion(root.left);
      recursion(root.right);
    };
    recursion(root);
  
    // 3. 返回结果
    return sum;
  };
  
  const root = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  };
  
  console.log(sumOfLeftLeaves(root));
  
