import 'text-encoding-polyfill';
import 'react-native-get-random-values';
import CryptoJS from 'crypto-js';
import forge from 'node-forge';
import * as hkdf from '@noble/hashes/hkdf';
import {sha256} from '@noble/hashes/sha256';
import {bytesToHex} from '@noble/hashes/utils';

class Cryptography {
  public pbkdf2 = (secretParaphrase: string, salt: string) => {
    return CryptoJS.PBKDF2(secretParaphrase, salt, {
      keySize: 512 / 32,
      iterations: 1000,
    }).toString();
  };

  public createSymmetricKey = async () => {
    return forge.util.bytesToHex(forge.random.getBytesSync(32));
  };

  public aesEncrypted = async (message: string, secret: string) => {
    return CryptoJS.AES.encrypt(message, secret).toString();
  };

  public aesDecrypted = async (encrypted: string, secret: string) => {
    return CryptoJS.AES.decrypt(encrypted, secret).toString(CryptoJS.enc.Utf8);
  };

  public createRsaKeyPair = async (): Promise<{
    privateKey: string;
    publicKey: string;
  }> => {
    return new Promise((resolve, reject) => {
      forge.pki.rsa.generateKeyPair(
        {bits: 256, workers: -1},
        function (err, keypair) {
          if (err) {
            reject(err);
          }
          resolve({
            privateKey: forge.pki.privateKeyToPem(keypair.privateKey),
            publicKey: forge.pki.publicKeyToPem(keypair.publicKey),
          });
        },
      );
    });
  };

  public rsaEncrypted = async (publicKey: string, data: string) => {
    return forge.util.bytesToHex(
      forge.pki.publicKeyFromPem(publicKey).encrypt(data),
    );
  };

  public rsaDecrypted = async (privateKey: string, encrypted: string) => {
    return forge.pki
      .privateKeyFromPem(privateKey)
      .decrypt(forge.util.hexToBytes(encrypted));
  };

  public hkdfExpand = (ikm: string, salt: string, info: string) => {
    const hk2 = hkdf.expand(sha256, salt, ikm, 128);
    return bytesToHex(hk2);
  };

  public getMasterKey = (email: string, masterPassword: string) => {
    return this.pbkdf2(masterPassword, email);
  };

  public getMasterPasswordHash = async (
    email: string,
    masterPassword: string,
  ) => {
    const masterKey = await this.getMasterKey(email, masterPassword);
    return this.pbkdf2(masterKey, masterPassword);
  };
}

const cryptography = new Cryptography();

export default cryptography;
