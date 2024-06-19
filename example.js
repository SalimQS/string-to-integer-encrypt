// 1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
const originalText = "Hello world!";
console.log("Original: " + originalText);

const encryptedText = encryptToInteger(originalText);
console.log("Encrypted:", encryptedText);

const decryptedText = decryptFromInteger(encryptedText);
console.log("Decrypted:", decryptedText);
