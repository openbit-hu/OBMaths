//% color=#008060 weight=50 icon="\uf12b" block="obMaths"
namespace obMaths{
    //%blockId = obmathsxor
    //%block = "xor $a $b"
    export function xor(a: number, b: number): number{
        return a^b;
    }
    //%blockId = obMaths_prime
    //%block = "prime $x"
    export function prime(x: number): boolean{
        if(x == 0) return false
        if(x == 1) return false
        if(x == 2) return true
        let numsqrt = Math.sqrt(x);
        for (let i = 3; i <= numsqrt; i+=2) {
            if (x % i == 0) return false
        }
        return true
    }
}