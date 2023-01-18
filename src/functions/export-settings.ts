import bigNumber from 'bignumber.js';
import { customAlphabet } from 'nanoid';
import { v4 as uuidv4 } from 'uuid';

/** Default settings for BigNumber */
bigNumber.config({ EXPONENTIAL_AT: 60 });

/** Default settings for nanoId */
const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  12,
);

export function getNANOID(): string {
  return nanoid();
}

export function getUUID(): string {
  return uuidv4();
}

export const BigNumber = bigNumber;
