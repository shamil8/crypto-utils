/** Get only string fields in object */
export function convertFieldsObject<T = object>(params: any): T {
  for (const [key] of Object.entries(params)) {
    if (!Number.isNaN(Number(key))) {
      delete params[key];
    }
  }

  return params;
}
