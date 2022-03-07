/**
 * Použijte tento soubor k definování personalizovaných funkcí a bloků.
 * Přečtěte si více na https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% weight=100 color=#25E422 icon="\uf1fc" block="Malování"
namespace Malovani {
    let predchoziStav = false
    let jeVidetKurzor = false
    jeVidetKurzor = true
    let privatniX = 0 
    let privatniY = 0



    /**
        * Překreslí aktuální bod
        */
    //% block="Překreslit bod"

    export function prekreslit(): void {
        if (jeVidetKurzor) {
            predchoziStav = !(predchoziStav)
        }
    }

    /**
    * Vymaže plochu
    */
    //% block="Vymazat kresbu"

    export function vymazat(): void {
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
        predchoziStav = false
    }

    /**
    * Přepne kurzor na zvolené souřadnici
    * @noveX Zvolená souřadnice
    * @noveY Zvolená souřadnice
    */
    //% block="Přepne kurzor na [%noveX, %noveY]"

    export function prepnoutKurzor(noveX: number, noveY: number): void {
        jeVidetKurzor = !(jeVidetKurzor)
        if (predchoziStav) {
            led.plot(noveX, 4 - noveY)
        } else {
            led.unplot(noveX, 4 - noveY)
        }
    }

    /**
    * Blikne kurzorem na zvolené souřadnici
    * @noveX Zvolená souřadnice
    * @noveY Zvolená souřadnice
    */
    //% block="Blikat kurzorem na [%noveX, %noveY]"

    export function blikaniKurzoru(noveX: number, noveY: number): void {
        privatniX = noveX;
        privatniY = noveY;
        if (jeVidetKurzor) {
            led.toggle(noveX, 4 - noveY)
            basic.pause(100)

        }
    }

    /**
    * Pohne kurzorem na zvolené souřadnice
    * @noveX Zvolená souřadnice
    * @noveY Zvolená souřadnice
    */
    //% block="Pohyb na [%noveX, %noveY]"
    export function pohyb(noveX: number, noveY: number): void {
        serial.writeLine("sdf")
        if (predchoziStav) {
            led.plot(privatniX, 4 - privatniY)
            } else {
            led.unplot(privatniX, 4 - privatniY)
            }
        privatniX = noveX
        privatniY = noveY
        predchoziStav = led.point(privatniX, 4 - privatniY)
    }



}