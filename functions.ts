function add(a:number, b:number): number {
    return a+b
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}

interface MyPostion {
    x: number | undefined
    y: number | undefined
}

interface MyPostionWithDefault extends MyPostion {
    default: string
}

function position(): MyPostion
function position(a: number): MyPostionWithDefault
function position(a: number, b: number): MyPostion

function position (a?: undefined, b?: undefined) {
    if (!a && !b) {
        return { x: undefined, y: undefined }
    }

    if(a && !b) {
        return { x:a, y:undefined, default: String(a) }
    }
    return { x:a, y:b }
}

console.log('Empty: ', position())
console.log('One param: ', position(42))
console.log('Two params: ', position(10, 15))