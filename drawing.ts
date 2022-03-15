//% weight=100 color=#25E422 icon="\uf1fc" block="Malování"
namespace drawing {
    let previousState = false
    let isCursorVisible = false
    isCursorVisible = true
    let privateX = 0 
    let privateY = 0



    /**
    * Překreslí aktuální bod
    */
    //% block="Překreslit bod"

    export function redraw(): void {
        if (isCursorVisible) {
            previousState = !(previousState)
        }
    }

    /**
    * Vymaže plochu
    */
    //% block="Vymazat kresbu"

    export function clear(): void {
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
        previousState = false
    }

    /**
    * Přepne kurzor na zvolené souřadnici
    * @newX Zvolená souřadnice
    * @newY Zvolená souřadnice
    */
    //% block="Přepne kurzor na [%newX, %newY]"

    export function toogleCursor(newX: number, newY: number): void {
        isCursorVisible = !(isCursorVisible)
        if (previousState) {
            led.plot(newX, newY)
        } else {
            led.unplot(newX, newY)
        }
    }

    /**
    * Blikne kurzorem na zvolené souřadnici
    * @newX Zvolená souřadnice
    * @newY Zvolená souřadnice
    */
    //% block="Blikat kurzorem na [%newX, %newY]"

    export function blinkCursor(newX: number, newY: number): void {
        privateX = newX;
        privateY = newY;
        if (isCursorVisible) {
            led.toggle(newX, newY)
            basic.pause(100)

        }
    }

    /**
    * Pohne kurzorem na zvolené souřadnice
    * @newX Zvolená souřadnice
    * @newY Zvolená souřadnice
    */
    //% block="Pohyb na [%newX, %newY]"
    export function moveAt(newX: number, newY: number): void {
        if (previousState) {
            led.plot(privateX, privateY)
            } else {
            led.unplot(privateX, privateY)
            }
        privateX = newX
        privateY = newY
        previousState = led.point(privateX, privateY)
    }

}