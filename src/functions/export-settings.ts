import bigNumber from 'bignumber.js';
import { customAlphabet } from 'nanoid';

/** Default settings for BigNumber */
bigNumber.config({ EXPONENTIAL_AT: 60 });

/** Id default size */
export const ID_SIZE = 12;
export const ID_NUMBER_SIZE = 6;
export const ID_SECRET_KEY_SIZE = 36;

const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', ID_SIZE);

const numberNanoid = customAlphabet('0123456789', ID_NUMBER_SIZE);

const secretKeyNanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-',
  ID_SECRET_KEY_SIZE,
);

export function getNANOID(): string {
  return nanoid();
}

export function getNumberNANOID(): string {
  return numberNanoid();
}

export function getSecretKeyNANOID(): string {
  return secretKeyNanoid();
}

export const BigNumber = bigNumber;
