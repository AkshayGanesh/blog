// JavaScript function to encrypt a string message using AES encryption in CBC mode
function encryptMessage(password) {
    const CryptoJS = require('crypto-js');
    const encKey = process.env.REACT_APP_ENCRYPTION_KEY
    
    const keyHex = CryptoJS.enc.Utf8.parse(encKey);
    
    const iv = CryptoJS.lib.WordArray.random(16);
    
    const encrypted = CryptoJS.AES.encrypt(password, keyHex, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    const ciphertext = iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64);
    return ciphertext;
  }

  export default encryptMessage