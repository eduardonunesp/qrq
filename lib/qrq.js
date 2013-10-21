var redis = require('redis');

getRedis = function(opts) {
  return redis.createClient();
};

BaseQueue = function(key, opts) {
  if (!key || key == undefined) throw 'Key is undefined';


  this.redis = getRedis(opts);
  this.key = key;
  return this;
};

BaseQueue.prototype.len = function() {
  return this.redis.llen(this.key);
};

BaseQueue.prototype.clear = function() {
  this.redis.delete(this.key)
};

Queue = function(key, opts) {
  BaseQueue.call(this);
};

Queue.prototype.constructor = BaseQueue;

module.exports = Queue
