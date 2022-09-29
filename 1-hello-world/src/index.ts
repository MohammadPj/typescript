function kgToLbs(weight: number | string): number {
  //  Narrowing
  if(typeof weight === "number")
    return weight * 1.2
  return +weight * 1.2
}

kgToLbs(100)
kgToLbs("10kg")
