/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
 */

var bind = function(func, thisTarget, ...args) {
  // TODO: Your code here
  // console.log(this);
  return function(...args2) {
    let temp = args.concat(args2);
    return func.apply(thisTarget, temp);
  };
};

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
 */

Function.prototype.bind = function(thisTarget, ...args) {
  // TODO: Your code here
  // 멍청아.....
  // this의 실행 컨텍스트 잘생각하자...
  // 클로저 펑션에서 this는 .. 다르지...
  let bindFunc = this;
  return function(...args2) {
    // TODO: Your code here, too
    let temp = args.concat(args2);
    return bindFunc.apply(thisTarget, temp);
  };
};
