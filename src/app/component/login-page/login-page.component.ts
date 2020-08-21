import { User } from './../../model/user';
import { LoginDataService } from './../../services/login-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import * as crypto from "crypto-js";
import * as CryptoJS from "crypto-js";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user: User;
  isBlank: boolean = false;
  invalidData: boolean = false;
  localStorage: Storage;
  constructor(private router: Router,
    private loginDataService: LoginDataService) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
    // console.log(`===========> 1`);
    if (username == '' || password == '') {
      this.isBlank = true;
      // console.log(`===========> 2`);
      // alert('username is required');    
      return;
    }

    console.log(`===========> 4`);
    // const encUsername = this.encryption(username);
    // const encPassword = this.encryption(password);
    // console.log(`login: ${username} - password is: ${password}`);
    // console.log(`encUsername: ${encUsername} - encPassword is: ${encPassword}`);

    // const dencUsername = this.decryptUsingAES256(encUsername, "7061737323313233");
    // const dencPassword = this.decryptUsingAES256(encPassword, "7061737323313233");
    // console.log(`dencUsername: ${dencUsername} - dencPassword is: ${dencPassword}`);

    this.loginDataService.loginUser(username, password).subscribe(data => {
      if (data != null) {
        console.log('==> in data ' + data.username + ' ' + data.password);
        this.router.navigate(['/welcome']);
        this.user = data
        localStorage.setItem('username', data.username);
      } else {
        alert('invalid username or password');
        //this.invalidData = true;
      }
    });

  }

  // encryption(data: string): any {
  //   //crypto.DES.decrypt("Your secret", "YOUR_CRYPTO_KEY");
  //   const key = crypto.enc.Utf8.parse('7061737323313233');
  //   const iv = crypto.enc.Utf8.parse('7061737323313233');
  //   const encrypted = crypto.AES.encrypt(data, key, {
  //     keySize: 16,
  //     iv: iv,
  //     mode: crypto.mode.ECB,
  //     padding: crypto.pad.Pkcs7
  //   });
  //   console.log('Encrypted :' + encrypted);
  //   return encrypted;
  // }

  encryption(data: string): any {
    let _key = CryptoJS.enc.Utf8.parse('7061737323313233');
    let _iv = CryptoJS.enc.Utf8.parse('7061737323313233');
    let encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(data), _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
    console.log('Encrypted :' + encrypted);
    return encrypted;

    // const encrypted = CryptoJS.AES.encrypt(data, '7061737323313233');
    // //encrypted = encrypted.toString();
    // console.log("Cipher text: " + encrypted);
    // return encrypted;
  }

  decryptUsingAES256(data: string, key: string): any {
    let _key = CryptoJS.enc.Utf8.parse(key);
    let _iv = CryptoJS.enc.Utf8.parse(key);

    const decrypted = CryptoJS.AES.decrypt(
      data, _key, {
      keySize: 16,
      iv: _iv,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return decrypted;
  }

}
