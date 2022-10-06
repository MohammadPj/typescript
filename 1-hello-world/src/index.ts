//  Type Mapping
//  typescript utility type

interface Product {
  name: string;
  price: number
}

type Readonly2<T> = {
  readonly [K in keyof T]: T[K]
}

type Optional<T> = {
  [K in keyof T]?: T[K]
}

type Nullable<T> = {
  [K in keyof T]: T[K] | null
}

let product: Optional<Product> = {
  name: "Mosh"
}