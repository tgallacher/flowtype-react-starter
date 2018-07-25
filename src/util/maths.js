// @flow
// Type definitions are only optional at a file-level.
// Alternatively, you can configure Flowtype to be enforced on ALL files,
// regardless of whether they have the @flow annotation or not. Use of the annotation
// is the default configuration.
//
// There are the general 'escape' hatches: any, mixed, Function, Object, for example.
// if you really don't want to type something within a file.

// Use escape hatch to not type this function
export function add (a: any, b: any): any {
  return a + b
}

// Return type will be inferred, but good for clarity
export function multiply (a: number, b: number): number {
  return a * b
}

// Would pass
// add(3, "4")
// add(3, 4)
// multiply(3, 4)

// Would fail
// multiply(3, "4")
