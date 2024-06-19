function IntegerEncrypt(str) {
  let encrypted = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i).toString();
    while (charCode.length < 3) {
      charCode = "0" + charCode;
    }
    encrypted += charCode;
  }
  return encrypted;
}

function IntegerDecrypt(encryptedStr) {
  let decrypted = "";
  for (let i = 0; i < encryptedStr.length; i += 3) {
    let charCode = encryptedStr.substr(i, 3);
    if (charCode[0] === "0") {
      charCode = charCode.replace(/^0+/, "");
    }
    decrypted += String.fromCharCode(parseInt(encryptedStr.substr(i, 3), 10));
  }
  return decrypted;
}
