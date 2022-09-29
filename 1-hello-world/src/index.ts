type Draggable = {
  drag: () => void
}
type Resizeable = {
  resize: () => void
}

//  Intersection
type UIWidget = Draggable & Resizeable

let texBox: UIWidget = {
  drag() {},
  resize: () => {}
}