"use strict";
exports.__esModule = true;
exports.interpolate = void 0;
/**
 * Interpolates the given 2D array of data using a Lagrange Polynomial interpolation. User specifies first/last row
 * versus giving a number of sample points and a starting index. For best performance number of points generally would
 * be between 1 (linear) and 7
 *
 * @param {Array} data array
 * @param {Number} xValue value of x to evaluate for function y = f(x) represented by the data
 * @param {Number} sampleRowMin first row of data to use for the interpolation
 * @param {Number} sampleRowMax last row of data to use for the interpolation
 * @param {Number} xIndex the column of data which represents the 'x' variable of y = f(x)
 * @param {Number} yIndex the column of data which represents the 'y' curve data of y = f(x)
 * @returns {Number} the interpolated value of the function f(x) from the data
 */
function interpolate(data, xValue, sampleRowMin, sampleRowMax, xIndex, yIndex) {
    if (data === undefined) {
        throw 'data object is undefined';
    }
    if (!Array.isArray(data)) {
        throw 'data object must be an array';
    }
    if (sampleRowMin >= sampleRowMax) {
        throw 'first row must be greater than last row';
    }
    if (sampleRowMin < 0) {
        throw 'first row must be greater than zero';
    }
    if (sampleRowMax > data.length - 1) {
        throw 'last row must be ';
    }
    if (!Array.isArray(data[sampleRowMin])) {
        throw 'data in rows must be array data';
    }
    var maxColumn = data[0].length - 1;
    if (xIndex < 0 || xIndex > maxColumn) {
        throw "xIndex has to be between 0 and ".concat(maxColumn, ": ").concat(xIndex);
    }
    if (yIndex < 0 || yIndex > maxColumn) {
        throw "yIndex has to be between 0 and ".concat(maxColumn, ": ").concat(yIndex);
    }
    var sum = 0;
    for (var j = sampleRowMin; j <= sampleRowMax; j++) {
        var prod = 1;
        for (var k = sampleRowMin; k <= sampleRowMax; k++) {
            if (k === j) {
                continue;
            }
            prod *= (xValue - data[k][xIndex]) / (data[j][xIndex] - data[k][xIndex]);
        }
        sum += prod * data[j][yIndex];
    }
    return sum;
}
exports.interpolate = interpolate;
