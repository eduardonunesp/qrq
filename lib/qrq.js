var redis = require('redis');

getRedis = function() {
  return redis.createClient();
};

BaseQueue = function(key, opts) {
  this.redis = getRedis();
  this.key = key;
  return this;
};
