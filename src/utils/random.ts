export function randint(start: number, end: number): number {
  if (start >= end) throw Error("Start should be smaller than end");
  return Math.floor(Math.random() * (end - start + 1));
}

export function choice<T>(array: T[]): T {
  return array[randint(0, array.length - 1)];
}

export function getUUID(): string {
  return crypto.randomUUID().split("-")[0];
}
