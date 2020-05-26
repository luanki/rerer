import CryptoJS from 'crypto-js';
const keyString = 'PKKKKKKKPKKKKKKKKKKP';
const ivString = '9876543210';
export function getAesString(data, key, iv) {
  let _key = CryptoJS.enc.Utf8.parse(key);
  let _iv = CryptoJS.enc.Utf8.parse(iv);
  let encrypted = CryptoJS.AES.encrypt(data, _key, {
    iv: _iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString(); // 返回的是base64格式的密文
}
export function getDAesString(encrypted, key, iv) {
  let _key = CryptoJS.enc.Utf8.parse(key);
  let _iv = CryptoJS.enc.Utf8.parse(iv);
  let decrypted = CryptoJS.AES.decrypt(encrypted, _key, {
    iv: _iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}

// 加密
export function getEAES(data) {
  let key = keyString; // 密钥
  let iv = ivString;
  let encrypted = getAesString(data, key, iv); // 密文
  return encrypted;
}
// 解密
export function getDAES(data) {
  let key = keyString; // 密钥
  let iv = ivString;
  let decryptedStr = getDAesString(data, key, iv);
  return decryptedStr;
}

// SHA256加密 (不可逆)
export function getSHA256(data) {
  return CryptoJS.SHA256(data).toString();
}

// AES256加密 (可逆) 凭证类
