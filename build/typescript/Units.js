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
        var sign = decDeg < 0 || Object.is(decDeg, -0) ? -1 : 1;
        var magnitude = Math.abs(decDeg) + decMin / 60.0 + decSec / 3600.0;
        return sign * magnitude;
    };
    Units.valToSexagesimalRa = function (val) {
        var raHour = Math.trunc(val / 15.0);
        var raMin = Math.trunc((val - raHour * 15.0) * 4.0);
        var raSec = (val - raHour * 15.0 - raMin / 4.0) * 240.0;
        return [raHour, raMin, raSec];
    };
    Units.decimalToSexagesimalDec = function (val, isObserverBelowEquator) {
        if (isObserverBelowEquator === void 0) { isObserverBelowEquator = false; }
        var sign = val < 0 || Object.is(val, -0) ? -1 : 1;
        var absVal = Math.abs(val);
        var decDeg = sign * Math.trunc(absVal);
        var decMin = Math.trunc((absVal - Math.trunc(absVal)) * 60.0);
        var decSec = ((absVal - Math.trunc(absVal)) * 60.0 - decMin) * 60.0;
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
