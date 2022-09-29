function greet(name: string | null | undefined) {
  if (name)
    console.log("name", name)
  else
    console.log("Hola")
}