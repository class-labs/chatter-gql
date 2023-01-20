type ReplaceNull<T> = null extends T ? Exclude<T, null> | undefined : T;

/**
 * Loop an object (shallow) replacing null values with undefined.
 */
export function removeNulls<T extends Record<string, any>>(input: T) {
  const result: Partial<T> = {};
  for (const [key, value] of Object.entries(input)) {
    result[key as keyof T] = value ?? undefined;
  }
  return result as { [K in keyof T]: ReplaceNull<T[K]> };
}
