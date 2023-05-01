/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let min = salary[0];
    let max = salary[0];
    let sum = 0;

    for (let i = 0; i < salary.length; i++) {
        if (salary[i] < min) {
            min = salary[i];
        }

        if (salary[i] > max) {
            max = salary[i];
        }

        sum += salary[i];
    }

    return (sum - min - max) / (salary.length - 2);
};