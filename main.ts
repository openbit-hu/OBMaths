//% color=#008060 weight=100 icon="\uf12b" block="obMaths";
namespace obMaths{
    function getXYAngleRadian() {
        let x = input.acceleration(Dimension.X)
        let y = input.acceleration(Dimension.Y)
        if (x > 1023) x = 1023
        if (x < -1023) x = -1023
        if (y > 1023) y = 1023
        if (y < -1023) y = -1023
        let ac = Math.acos(x / 1024)
        let as = Math.asin(y / 1024)
        if (x > 0) {
            if (y > 0) return (ac + as) / 2
            ac = 2 * Math.PI - ac
            as = 2 * Math.PI + as
            return (ac + as) / 2
        }
        if (y > 0) {
            as = Math.PI - as
            return (ac + as) / 2
        }
        ac = 2 * Math.PI - ac
        as = Math.PI - as
        return (ac + as) / 2
    }
    /**
     * Returns with the tilting angle in XY direction.
     */
    //% blockId=obMaths_getXYAngle block="getXYAngle" 
    export function getXYAngle() {
        return getXYAngleRadian() * 180 / Math.PI
    }

    function getZAngleRadian() {
        let z = input.acceleration(Dimension.Z)
        if (z > 1023) z = 1023
        if (z < -1023) z = -1023
        return Math.asin(z / 1024);
    }
    /**
     * Returns with the tilting angle in Z direction.
     */
    //% blockId=obMaths_getZAngle block="getZAngle" 
    export function getZAngle() {
        return getZAngleRadian() * 180 / Math.PI
    }
    /**
     * Returns with the result of the (a xor b) operation.
     * @param a an integer number
     * @param b an integer number
     */
    //% blockId=obMaths_xor block="$a xor $b" 
    export function xor(a: number, b: number): number{
        return a^b;
    }
    /**
     * Returns whether the number is a prime.
     * @param n a natural number
     */
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
     * @param value The value to display
     * @param min at this value no LED is lighting
     * @param max at this value all the LEDs are lighting
     */
    //% blockId=obMaths_plotValue
    //% block="plotValue $value min $min max $max"
    export function plotValue(value: number,min: number, max:number) {
        if(max<min){
            basic.showIcon(IconNames.No)
            return
        }
        if(value<min){
            basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .`)
            return
        }
        if(value>max){
            basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .`)
            return
        }
        let x = min
        let dx = (max-min)/25
        for (let i = 4; i >= 0; i--) {
            for (let j = 0; j < 5; j++) {
                if (x < value) led.plot(j, i)
                else led.unplot(j, i)
                x += dx
            }
        }
    }
}
