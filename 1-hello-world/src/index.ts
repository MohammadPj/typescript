function render(document: unknown) {
  // Narrowing
  if(typeof document === "string") {
    document.toLowerCase()
  }
  document.toLowerCase()
}