//% color=#008060 weight=100 icon="\uf12b" block="obMaths";
namespace obMaths{
    //% blockId=obMaths_xor block="xor $a $b" 
    export function xor(a: number, b: number): number{
        return a^b;
    }
    //% blockId=obMaths_isPrime block="is prime $n"
    export function isPrime(n: number): number{
        if(n == 0) return 0
        if(n == 1) return 0
        if(n == 2) return 1
        if(n % 2 == 0) return 0
        let numsqrt = Math.sqrt(n)
        for (let i = 3; i <= numsqrt; i+=2) {
            if (n % i == 0) return 0
        }
        return 1
    }
    /**
     * Displays a value as a segmented linear bar
     * @param min no LED is lighting
     * @param max all the LEDs are lighting
     */
    //% blockId=obMaths_plotValue
    //% block="plotValue $value min $min max $max"
    export function plotValue(value: number,min: number, max:number) {
        let x = min
        let dx = (max-min)/25
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (x < value) led.plot(j, i)
                else led.unplot(j, i)
                x += dx
            }
        }
    }
}
