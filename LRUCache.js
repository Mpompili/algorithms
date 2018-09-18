var LRUCache = function(capacity) {
    this.capacity = capacity; 
    this.head = {val: 'new'}; 
    this.tail = {val: 'old'}; 
    this.head.next = this.tail;
    this.tail.prev = this.head; 
    this.length = 0; 
    this.hash = {}; 
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) { 
  if (this.hash[key]) {
      let val = this.hash[key].val;
      this.put(key, val); 
      return val; 
  } else {
      return -1; 
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let self = this;
    
    function removeNodeKey(key) {
      let node = self.hash[key];
      [node.prev.next, node.next.prev] = [node.next, node.prev];
      delete self.hash[key]; 
      self.length -= 1;      
    }    

    if (this.hash[key]) removeNodeKey(key); 
    if (this.length === this.capacity) removeNodeKey(this.tail.prev.key);

    let newNode = {val: value, next: this.head.next, prev: this.head, key: key} 
    
    this.head.next.prev = newNode; // the node after head's prev is newNode 
    this.head.next = newNode; //head's next is now newNode;
    this.hash[key] = newNode;  // console.log('before adding ', this.length, '\n');
    this.length += 1; 
};
