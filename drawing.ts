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

    export function prekreslit(): void {
        if(showCursor) {
            stateBeforeArrive = !(stateBeforeArrive)
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
        stateBeforeArrive = false
    }

    /**
    * Přepne kurzor na zvolené souřadnici
    * @newX x
    * @newY y
    */
    //% block="Přepne kurzor na [%x, %y]"

    export function prepnoutKurzor(newX: number, newY: number): void {
        showCursor = !(showCursor)
        if (stateBeforeArrive) {
            led.plot(newX, 4 - newY)
        } else {
            led.unplot(newX, 4 - newY)
        }
    }

    /**
    * Blikne kurzorem na zvolené souřadnici
    * @newX x
    * @newY y
    */
    //% block="Blikat kurzorem na [%x, %y]"

    export function blikaniKurzoru(newX: number, newY: number): void {
            privateX = newX; //zde nastavuji při každém „bliknutí" hodnoty, protože se tato metoda provede jako první a já si někde musím získat výchozí hodnotu x a y před tím, než poprvné pohnu s kurzorem...nic lepšího mě nenapdalo
            privateY = newY; 
        if (showCursor) {
            led.toggle(newX, 4 - newY)
            basic.pause(100)

        }
    }

    /**
    * Pohne kurzorem na zvolené souřadnice
    * @newX x
    * @newY y
    */
    //% block="Pohyb na [%x, %y]"
    export function pohyb(newX: number, newY: number): void {
            if (stateBeforeArrive) {
                led.plot(privateX, 4 - privateY)
            } else {
                led.unplot(privateX, 4 - privateY)
            }
            privateX = newX
            privateY = newY            
            stateBeforeArrive = led.point(privateX, 4 - privateY)
    }



}