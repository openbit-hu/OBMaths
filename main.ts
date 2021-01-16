//% color=#008060 weight=100 icon="\uf12b" block="obMaths";
namespace obMaths{
    //%blockId = "obMaths_xor"
    //%block = "xor $a $b"
    export function xor(a: number, b: number): number{
        return a^b;
    }
    //%blockId = "obMaths_or"
    //%block = "or $a $b"
    export function or(a: number, b: number): number{
        return a | b;
    }
}
