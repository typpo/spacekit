export default class Units {
  static rad(val: number): number {
    return (val * Math.PI) / 180;
  }

  static deg(val: number): number {
    return (val * 180) / Math.PI;
  }

  static hoursToDeg(val: number): number {
    return val * 15.0;
  }

  static sexagesimalToDecimalRa(
    raHour: number,
    raMin: number,
    raSec: number,
  ): number {
    // https://astronomy.stackexchange.com/questions/24518/convert-a-decimal-into-ra-or-dec
    return raHour * 15.0 + raMin / 4.0 + raSec / 240.0;
  }

  static sexagesimalToDecimalDec(
    decDeg: number,
    decMin: number,
    decSec: number,
    isObserverBelowEquator: boolean = false,
  ): number {
    const sign = decDeg < 0 || Object.is(decDeg, -0) ? -1 : 1;
    const magnitude =
      Math.abs(decDeg) + decMin / 60.0 + decSec / 3600.0;
    return sign * magnitude;
  }

  static valToSexagesimalRa(val: number): [number, number, number] {
    const raHour = Math.trunc(val / 15.0);
    const raMin = Math.trunc((val - raHour * 15.0) * 4.0);
    const raSec = (val - raHour * 15.0 - raMin / 4.0) * 240.0;
    return [raHour, raMin, raSec];
  }

  static decimalToSexagesimalDec(
    val: number,
    isObserverBelowEquator: boolean = false,
  ) {
    const sign = val < 0 || Object.is(val, -0) ? -1 : 1;
    const absVal = Math.abs(val);
    const decDeg = sign * Math.trunc(absVal);
    const decMin = Math.trunc((absVal - Math.trunc(absVal)) * 60.0);
    const decSec = ((absVal - Math.trunc(absVal)) * 60.0 - decMin) * 60.0;
    return [decDeg, decMin, decSec];
  }

  static kmToAu(km: number): number {
    return km / 149597870.7;
  }

  static auToKm(au: number): number {
    return au * 149597870.7;
  }
}
