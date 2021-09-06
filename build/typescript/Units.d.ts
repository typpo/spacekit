export default class Units {
    static rad(val: number): number;
    static deg(val: number): number;
    static hoursToDeg(val: number): number;
    static sexagesimalToDecimalRa(raHour: number, raMin: number, raSec: number): number;
    static sexagesimalToDecimalDec(decDeg: number, decMin: number, decSec: number, isObserverBelowEquator?: boolean): number;
    static valToSexagesimalRa(val: number): [number, number, number];
    static decimalToSexagesimalDec(val: number, isObserverBelowEquator?: boolean): number[];
    static kmToAu(km: number): number;
    static auToKm(au: number): number;
}
