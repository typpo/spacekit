"use strict";
exports.__esModule = true;
var Units = /** @class */ (function () {
    function Units() {
    }
    Units.rad = function (val) {
        return (val * Math.PI) / 180;
    };
    Units.deg = function (val) {
        return (val * 180) / Math.PI;
    };
    Units.hoursToDeg = function (val) {
        return val * 15.0;
    };
    Units.sexagesimalToDecimalRa = function (raHour, raMin, raSec) {
        // https://astronomy.stackexchange.com/questions/24518/convert-a-decimal-into-ra-or-dec
        return raHour * 15.0 + raMin / 4.0 + raSec / 240.0;
    };
    Units.sexagesimalToDecimalDec = function (decDeg, decMin, decSec, isObserverBelowEquator) {
        if (isObserverBelowEquator === void 0) { isObserverBelowEquator = false; }
        var posneg = isObserverBelowEquator ? -1 : 1;
        return decDeg + decMin / 60.0 + (posneg * decSec) / 3600.0;
    };
    Units.valToSexagesimalRa = function (val) {
        var raHour = Math.trunc(val / 15.0);
        var raMin = Math.trunc((val - raHour * 15.0) * 4.0);
        var raSec = (val - raHour * 15.0 - raMin / 4.0) * 240.0;
        return [raHour, raMin, raSec];
    };
    Units.decimalToSexagesimalDec = function (val, isObserverBelowEquator) {
        if (isObserverBelowEquator === void 0) { isObserverBelowEquator = false; }
        var posneg = isObserverBelowEquator ? -1 : 1;
        var decDeg = Math.trunc(val);
        var decMin = Math.trunc((val - posneg * decDeg) * 60.0 * posneg);
        var decSec = (val - posneg * decDeg - (posneg * decMin) / 60.0) * 3600.0 * posneg;
        return [decDeg, decMin, decSec];
    };
    Units.kmToAu = function (km) {
        return km / 149597870.7;
    };
    Units.auToKm = function (au) {
        return au * 149597870.7;
    };
    return Units;
}());
exports["default"] = Units;
