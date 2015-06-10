var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var result = storage[0];
    delete storage[0];
    // if call dequeue when size 0 then return 0
    if (size === 0) {
      return 0;
    }
    for (var i = 0; i < (size-1); i++)  {
      storage[i] = storage[i+1];
    }

    size--;
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
