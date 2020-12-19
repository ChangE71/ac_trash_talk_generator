function checkTarget(target) {
  if (!target) return
  const targetedPosition = {
    developer: false,
    designer: false,
    entrepreneur: false
  }
  targetedPosition[target] = true
  return targetedPosition
}

module.exports = checkTarget