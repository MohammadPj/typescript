class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {
  }

  wrapInArray<T>(value: T) {
    return [value]
  }
}

let pair = new KeyValuePair<string, number>('a', 10)

let numbers = pair.wrapInArray<number>(20)