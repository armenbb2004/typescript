interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '123456',
    size: {
        width: 10,
        height: 5
    }
}

rect2.color = 'black'
// rect2.id = '123456' error readonly field

const rect3 = {} as Rect

const rect4 = <Rect>{}

//============================

interface RecWithArea extends Rect {
    getArea: () => number
}

const rect5: RecWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

//==========================

interface iClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements iClock {
    time: Date = new Date
    setTime(date: Date): void {
        this.time = date
    }
}

//=====================

interface iStyles {
    // border: string
    // ...
    [key: string]: string
}

const css: iStyles = {
    border: '1px solid',
    marginTop: '2px',
    borderRadius: '5px'
}
