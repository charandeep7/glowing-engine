import { person } from './data'

export function randomRGBAColor(alpha: boolean = false) {
    let color: string = ''
    color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    if (alpha) color = `rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.random()})`;
    return color
}

export function randomHEXColor() {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
}

export function randomColorFromArray(colors: readonly string[]) {
    return colors[Math.floor(Math.random() * colors.length)];
}

export function randomNumberInRange(lower: number, upper: number) {
    lower = Math.ceil(lower)
    upper = Math.floor(upper)
    return Math.floor(Math.random() * (upper - lower + 1)) + lower
}

export function randomPersonDeatils(){
    return person[randomNumberInRange(0,person.length-1)]
}

export function randomPickFromArray(mixed: any[]){
    return mixed[randomNumberInRange(0,mixed.length-1)]
}