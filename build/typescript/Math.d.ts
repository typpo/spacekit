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
export declare function interpolate(data: number[][], xValue: number, sampleRowMin: number, sampleRowMax: number, xIndex: number, yIndex: number): number;
