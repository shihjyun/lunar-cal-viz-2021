

function getAngle(dx, dy) {
  let theta = Math.atan2(dx, dy) // range (-PI, PI]
  theta *= 180 / Math.PI // rads to degs, range (-180, 180]
  if (theta < 0) theta = 360 + theta // range [0, 360)
  return theta
}

function normalizedSquareCord(cx, cy, ox, oy){
  const normalizedX = ox - cx
  const normalizedY = -(oy - cy)
  return [normalizedX, normalizedY]
}


export { getAngle, normalizedSquareCord } 