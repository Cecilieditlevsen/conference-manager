export const listOfWithIndex = <T>(
  length = 10,
  generator: (index: number) => T,
) => {
  return Array.from({ length }, (_, index) => generator(index))
}
