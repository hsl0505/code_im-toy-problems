/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(key, value) {
    // TODO: implement `insert()`
    let hashingKey = getIndexBelowMaxForKey(key, storageLimit);
    if (!storage[hashingKey]) {
      let bucket = [key, value];
      storage[hashingKey] = [];
      storage[hashingKey].push(bucket);
    } else {
      let check = false;
      for (let i = 0; i < storage[hashingKey].length; i++) {
        if (storage[hashingKey][i][0] === key) {
          check = true;
          storage[hashingKey][i][1] = value;
          break;
        }
      }
      if (!check) {
        let bucket = [key, value];
        storage[hashingKey].push(bucket);
      }
    }
  };

  result.retrieve = function(key) {
    // TODO: implement `retrieve()`
    let hashingKey = getIndexBelowMaxForKey(key, storageLimit);
    // let result;
    if (!storage[hashingKey]) {
      return;
    } else {
      for (let i = 0; i < storage[hashingKey].length; i++) {
        if (storage[hashingKey][i][0] === key) {
          return storage[hashingKey][i][1];
        }
      }
    }
  };

  result.remove = function(key) {
    // TODO: implement `remove()`
    let hashingKey = getIndexBelowMaxForKey(key, storageLimit);
    if (!storage[hashingKey]) {
      return "not exist";
    } else {
      for (let i = 0; i < storage[hashingKey].length; i++) {
        if (storage[hashingKey][i][0] === key) {
          storage[hashingKey].splice(i, 1);
          break;
        }
      }
    }
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
