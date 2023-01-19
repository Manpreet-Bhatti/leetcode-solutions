/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let min = Number.MAX_VALUE;
    let result = [];
    let set = new Set(list1);
    let map = new Map();
    for (let i = 0; i < list2.length; i++) {
        if (set.has(list2[i])) {
            map.set(list2[i], i);
        }
    }
    for (let key of map.keys()) {
        let sum = map.get(key) + list1.indexOf(key);
        if (sum < min) {
            min = sum;
            result = [key];
        } else if (sum === min) {
            result.push(key);
        }
    }
    return result;
};
