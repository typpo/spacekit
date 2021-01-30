export function rad(val) {
  return (val * Math.PI) / 180;
}

export function deg(val) {
  return (val * 180) / Math.PI;
}

export function hoursToDeg(val) {
  return val * 15.0;
}

export function sexagesimalToDecimalRa(raHour, raMin, raSec) {
  // https://astronomy.stackexchange.com/questions/24518/convert-a-decimal-into-ra-or-dec
  return raHour * 15.0 + raMin / 4.0 + raSec / 240.0;
}

export function sexagesimalToDecimalDec(
  decDeg,
  decMin,
  decSec,
  isObserverBelowEquator = false,
) {
  const posneg = isObserverBelowEquator ? -1 : 1;
  return decDeg + decMin / 60.0 + (posneg * decSec) / 3600.0;
}

export function decimalToSexagesimalRa(decimal) {
  const val = parseFloat(decimal);
  const raHour = Math.trunc(val / 15.0);
  const raMin = Math.trunc((val - raHour * 15.0) * 4.0);
  const raSec = (val - raHour * 15.0 - raMin / 4.0) * 240.0;
  return [raHour, raMin, raSec];
}

export function decimalToSexagesimalDec(
  decimal,
  isObserverBelowEquator = false,
) {
  const val = parseFloat(decimal);
  const posneg = isObserverBelowEquator ? -1 : 1;

  const decDeg = Math.trunc(val);
  const decMin = Math.trunc((val - posneg * decDeg) * 60.0 * posneg);
  const decSec =
    (val - posneg * decDeg - (posneg * decMin) / 60.0) * 3600.0 * posneg;
  return [decDeg, decMin, decSec];
}

export function kmToAu(km) {
  return km / 149597870.7;
}

export function auToKm(au) {
  return au * 149597870.7;
}
