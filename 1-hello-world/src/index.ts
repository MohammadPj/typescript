let speed: number | null = null

let ride = {
  //  Falsy (Undefined, null, '', 0)
  //  Nullish coalescing operator - اگه 0 یا '' باشه مقدار 0 یا '' رو میذاره
  speed: speed ?? 30
}