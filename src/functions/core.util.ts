/** Camel case to snake case */
export function camelToSnakeCase(str: string): string {
  return (
    str[0].toLowerCase() +
    str
      .slice(1, str.length)
      .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
  );
}

/** Check if value is string */
export function isString(value: any): boolean {
  return typeof value === 'string' || value instanceof String;
}

/** Math floor with precision */
export function mathFloor(value: number, precision = 4): number {
  const form = 10 ** precision;

  return Math.floor(value * form) / form || 0;
}

/** Fix number with 'e' to string with '0' */
export function toFixed(x: number | string): string {
  let res: string;

  if (Math.abs(+x) < 1.0) {
    const e = +x.toString().split('e-')[1];

    res = e
      ? `0.${'0'.repeat(e) + (+x * (10 ** e - 1)).toString().substring(2)}`
      : x.toString();
  } else {
    let e = +x.toString().split('+')[1];

    if (e > 20) {
      e -= 20;
      res = +x / 10 ** e + '0'.repeat(e + 1);
    } else {
      res = x.toString();
    }
  }

  return res;
}
