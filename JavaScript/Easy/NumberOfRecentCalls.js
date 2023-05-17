var RecentCounter = function () {
    this.pings = [];
    this.start = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.pings.push(t);
    while (this.pings[this.start] < t - 3000) {
        this.start++;
    }
    return this.pings.length - this.start;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
