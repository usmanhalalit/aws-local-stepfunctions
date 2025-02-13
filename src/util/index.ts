import type { JSONObject } from '../typings/JSONValue';

/**
 * Determines if a value is a plain object, i.e. one declared using the `{}` notation or constructed with `new Object()`.
 * @param value The value to test if it's a plain object or not.
 * @returns `true` if `value` is a plain object, `false` if not.
 */
export function isPlainObj(value: unknown): value is JSONObject {
  return !!value && Object.getPrototypeOf(value) === Object.prototype;
}

/**
 * Pauses the execution of the program for a certain number of milliseconds.
 * Optionally, the pause can be canceled at any moment if an abort signal is passed.
 * @param ms Number of milliseconds to sleep.
 * @param abortSignal An abort signal that can cancel the sleep if the signal is aborted.
 */
export function sleep(ms: number, abortSignal?: AbortSignal) {
  return new Promise<void>((resolve) => {
    const timeout = setTimeout(resolve, ms);

    abortSignal?.addEventListener('abort', () => {
      clearTimeout(timeout);
      resolve();
    });
  });
}

/**
 * Converts a byte (0-255) to its two-digit hexadecimal representation.
 * @param byte A number between 0 and 255.
 * @returns The two-digit hex representation of `byte`.
 */
export function byteToHex(byte: number) {
  return byte.toString(16).padStart(2, '0');
}

/**
 * Attempts to parse a string into a JavaScript object.
 * @param jsonStr The JSON string to be parsed into an object.
 * @returns If the parsing succeeds, return the object. Otherwise return the error.
 */
export function tryJSONParse<T>(jsonStr: string): T | Error {
  try {
    return JSON.parse(jsonStr) as T;
  } catch (error) {
    return error as Error;
  }
}

export { getRandomNumber, sfc32, cyrb128 } from './random';
