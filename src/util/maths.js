// Type definitions are optional
export function add (a, b) {
  return a + b
}

// But are enforced when specified
export function multiply (a: number, b: number) {
  return a * b
}

// Would pass
// add(3, 4)
// add(3, "4")
// multiply(3, 4)

// Would fail
// multiply(3, "4")
