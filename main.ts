//% color=#008060 weight=100 icon="\uf12b" block="obMaths";
namespace obMaths{
    //% blockId=obMaths_xor block="xor $a $b"
    export function xor(a: number, b: number): number{
        return a^b;
    }
    //% blockId=obMaths_isPrime block="is prime $x"
    export function isPrime(x: number): number{
        if(x == 0) return 0
        if(x == 1) return 0
        if(x == 2) return 1
        if(x % 2 == 0) return 0
        let numsqrt = Math.sqrt(x);
        for (let i = 3; i <= numsqrt; i+=2) {
            if (x % i == 0) return 0
        }
        return 1
    }

}
