
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var smallestCommonElement = function (matrix) {
    const NO_COMMON_ELEMENT_FOR_ALL_ROWS = -1;
    const totalRows = matrix.length;
    const totalColumns = matrix[0].length;

    for (let column = 0; column < totalColumns; ++column) {

        let commonElementFound = true;
        for (let row = 1; row < totalRows && commonElementFound; ++row) {
            if (matrix[row][totalColumns - 1] < matrix[0][column]) {
                return NO_COMMON_ELEMENT_FOR_ALL_ROWS;
            }
            commonElementFound = binarySearch(matrix[row], matrix[0][column]);
        }
        if (commonElementFound) {
            return matrix[0][column];
        }
    }
    return NO_COMMON_ELEMENT_FOR_ALL_ROWS;
};

/**
 * @param {number[]} array
 * @param {number} target 
 * @return {number} 
 */
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let middle = left + Math.floor((right - left) / 2);
        if (array[middle] === target) {
            return true;
        }
        if (array[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return false;
}
