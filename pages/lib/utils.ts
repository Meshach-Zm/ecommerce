// make an object serializable to JSON

export function convertToJson (object: any)  {
    return JSON.stringify( object )
}

export function makeSerializable<T extends any> (o: T): T  {
    return JSON.parse(JSON.stringify(o))
}
