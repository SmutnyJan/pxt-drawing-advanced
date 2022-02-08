/**
 * Použijte tento soubor k definování personalizovaných funkcí a bloků.
 * Přečtěte si více na https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% weight=100 color=#25E422 icon="\uf1fc"
namespace Malovani {
    let stateBeforeArrive = false
    let showCursor = false
    showCursor = true
    let privateX = 0 
    let privateY = 0



    /**
        * Překreslí aktuální bod
        */
    //% block="Překreslit bod"

    export function Prekreslit(): void {
        stateBeforeArrive = !(stateBeforeArrive)
    }

    /**
    * Vymaže plochu
    */
    //% block="Vymazat kresbu"

    export function Vymazat(): void {
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
        stateBeforeArrive = false
    }

    /**
    * Přepne kurzor na zvolené souřadnici
    * @newX x
    * @newY y
    */
    //% block="Přepne kurzor na [%x, %y]"

    export function PrepnoutKurzor(newX: number, newY: number): void {
        showCursor = !(showCursor)
        if (stateBeforeArrive) {
            led.plot(newX, newY)
        } else {
            led.unplot(newX, newY)
        }
    }

    /**
    * Blikne kurzorem na zvolené souřadnici
    * @newX x
    * @newY y
    */
    //% block="Blikat kurzorem na [%x, %y]"

    export function BlikaniKurzoru(newX: number, newY: number): void {
        if (showCursor) {
            led.toggle(newX, newY)
            basic.pause(100)

            privateX = newX; //zde nastavuji při každém „bliknutí" hodnoty, protože se tato metoda provede jako první a já si někde musím získat výchozí hodnotu x a y před tím, než poprvné pohnu s kurzorem...nic lepšího mě nenapdalo
            privateY = newY; 
        }
    }

    /**
    * Pohne kurzorem na zvolené souřadnice
    * @newX x
    * @newY y
    */
    //% block="Pohyb na [%x, %y]"
    export function Pohyb(newX: number, newY: number): void {
        if (showCursor) {
            if (stateBeforeArrive) {
                led.plot(privateX, privateY)
            } else {
                led.unplot(privateX, privateY)
            }
            privateX = newX
            privateY = newY            
            stateBeforeArrive = led.point(privateX, privateY)
        }
    }



}