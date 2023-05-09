/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let arr = s.split('');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isLetter(arr[left])) {
            left++;
        }

        while (left < right && !isLetter(arr[right])) {
            right--;
        }

        if (left < right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }

    return arr.join('');
};

function isLetter(char) {
    return /[a-zA-Z]/.test(char);
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
