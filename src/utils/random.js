export function randint(start, end) {
    if (start >= end)
        throw Error("Start should be smaller than end")
    return Math.floor(Math.random() * (end-start+1))
}

export function choice(array) {
    return array[randint(0, array.length-1)];
}

export function getUUID() {
    return crypto.randomUUID().split('-')[0];
}