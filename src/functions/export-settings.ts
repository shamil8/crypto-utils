import bigNumber from 'bignumber.js';
import { customAlphabet } from 'nanoid';
import { v4 as uuidv4 } from 'uuid';

/** Default settings for BigNumber */
bigNumber.config({ EXPONENTIAL_AT: 60 });

const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 12);

const numberNanoid = customAlphabet('0123456789', 6);

const secretKeyNanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-',
  36,
);

export function getNANOID(): string {
  return nanoid();
}

export function getNumberNANOID(): string {
  return secretKeyNanoid();
}

export function getSecretKeyNANOID(): string {
  return numberNanoid();
}

export function getUUID(): string {
  return uuidv4();
}

export const BigNumber = bigNumber;
