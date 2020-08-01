var PENDING = 'pending'
var FULFILLED = 'fulfilled'
var REJECTED = 'rejected'

/**
 * 定义构造函数
 * @param {*} fn 
 */
function MyPromise (fn) {
  let _this = this
  this.status = PENDING // 初始化状态
  this.value = null // 初始化值
  this.reason = null // 

  function resolve(value) {
    if (_this.status === PENDING) {
      _this.status = FULFILLED
      _this.value = value
    }
  }

  function reject(error) {
    if (_this.status === PENDING) {
      _this.status = REJECTED
      _this.reason = error
    }
  }

  try {
    fn(resolve,reject)
  } catch (error) {
    reject(error)
  }
}

MyPromise.prototype.then = function (onFulfilled,onRejected) {
  let _this = this
  if (this.status !== FULFILLED) {
    return
  }

}

MyPromise.deferred = function() {
  var result = {};
  result.promise = new MyPromise(function(resolve, reject){
    result.resolve = resolve;
    result.reject = reject;
  });

  return result;
}

module.exports = MyPromise

