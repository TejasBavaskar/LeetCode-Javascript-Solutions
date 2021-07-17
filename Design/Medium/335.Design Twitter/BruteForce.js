/**
 * Initialize your data structure here.
 */
var Twitter = function () {
  this.tweetMap = new Map();
  this.followMap = new Map();
  this.index = 0;
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.tweetMap.has(userId)) {
    this.tweetMap.set(userId, []);
  }
  this.tweetMap.get(userId).push({ idx: this.index, id: tweetId });
  this.index++;
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  let newsIds = [];
  if (this.tweetMap.has(userId)) {
    newsIds = this.tweetMap.get(userId).map((item) => {
      return item;
    });
  }

  if (this.followMap.has(userId)) {
    let followers = this.followMap.get(userId) ?? [];

    followers.forEach((uid) => {
      let tweets = this.tweetMap.get(uid) ?? [];
      newsIds = newsIds.concat(tweets);
    });
  }
  newsIds = newsIds
    .sort((a, b) => b.idx - a.idx)
    .map((item) => {
      return item.id;
    });
  return newsIds.slice(0, 10);
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.followMap.has(followerId)) {
    this.followMap.set(followerId, []);
  }

  if (this.followMap.get(followerId).includes(followeeId)) {
    return;
  }
  this.followMap.get(followerId).push(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (!this.followMap.has(followerId)) {
    return;
  }

  let followers = this.followMap.get(followerId);
  followers.splice(followers.indexOf(followeeId), 1);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
