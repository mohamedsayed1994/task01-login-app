import { Injectable } from '@angular/core';
import { JSEncrypt } from 'jsencrypt';
@Injectable({
  providedIn: 'root'
})
export class EncryptServiceService {
  publicKey: string = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDVoTWIC03Q6QmPnga1C9oII9VcwJ/RiGIxA7I7Kp20icgQn9dzTONPfIdPYG96NQzsyeWnXTf1NlhpjAl3EAD+6p2ynfrknirnVICV7QW/3ZT972aou3RX2rlx54AvInosiaMd5Ne6wRUCUaf8dkf2qd50G4CVq++RKt+kbUA6aQIDAQAB';
  _encryptor = new JSEncrypt();
  constructor() { }

  encrypt(plainText) {
    this._encryptor.setPublicKey(this.publicKey);
    return this._encryptor.encrypt(plainText);
  }
}
