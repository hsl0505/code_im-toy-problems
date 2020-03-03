/**
 * implement the function `getClosestCommonAncestor` and `getAncestorPath`
 * in the following Tree class
 */

/** example usage:
 * var grandma = new Tree();
 * var mom = new Tree();
 * grandma.addChild(mom);
 * var me = new Tree();
 * mom.addChild(me);
 * grandma.getAncestorPath(me); // => [grandma, mom, me]
 */

var Tree = function() {
  this.children = [];
};

/**
 * add an immediate child
 */
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

/**
 * return the lowest common ancestor of the two child nodes.
 * (assume for these examples that only a women can be the parent of a child)
 * more examples:
 *  1.) between me and my brother -> my mom
 *  2.) between me and my cousin -> my grandma
 *  3.) between my grandma and my grandma -> my grandma
 *  4.) between me and a potato -> null
 */
Tree.prototype.getClosestCommonAncestor = function(a, b) {
  // TODO: implement me!
  // 루트와 비교면 루트가 무조건 나와야함
  if (a === this || b === this) {
    return this;
  }

  // 각 타겟의 조상라인 (라인이 없으면 undefined이므로 빈배열로) 거꾸로 (자기자신부터 위로)
  let aPath = this.getAncestorPath(a) ? this.getAncestorPath(a).reverse() : [];
  let bPath = this.getAncestorPath(b) ? this.getAncestorPath(b).reverse() : [];

  // 긴라인과 짧은라인으로 구별
  let sortPath = [aPath, bPath].sort((a, b) => b.length - a.length);
  let maxPath = sortPath[0];
  let minPath = sortPath[1];

  // 긴 라인 기준으로 짧은라인에 (자기제외) 조상이 있으면 바로 리턴(제일가까운조상)
  for (let i = 1; i < maxPath.length; i++) {
    if (minPath.includes(maxPath[i])) {
      return maxPath[i];
    }
  }

  return;
};

/**
 * should return the ancestral path of a child to this node.
 * more examples:
 * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
 * 2.) mom.getAncestorPath(me) -> [mom, me]
 * 3.) me.getAncestorPath(me) -> [me]
 * 4.) grandma.getAncestorPath(H R Giger) -> null
 */
Tree.prototype.getAncestorPath = function(pathTarget) {
  // TODO: implement me!
  // path 처음은 시작 root
  let initArr = [this];

  let result;

  // 타겟이 this이면 루트만 들어있는채로 리턴
  if (pathTarget === this) {
    return initArr;
  }

  // depth 따라 child 넣기 (만약 타겟이면 그 상태 배열로 아니면 재귀로 다시)
  function recursion(target, arr, depth) {
    for (let i = 0; i < target.children.length; i++) {
      arr[depth] = target.children[i];
      if (target.children[i] === pathTarget) {
        result = arr.slice();
        break;
      } else {
        let newDepth = depth + 1;
        recursion(target.children[i], arr.slice(), newDepth);
      }
    }
  }

  recursion(this, initArr, 1);

  // 완전 순회 후, 타겟이 없으면 result가 없음!!
  return result;
};

/**
 * check to see if the provided tree is already a child of this
 * tree __or any of its sub trees__
 */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
 * remove an immediate child
 */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};
