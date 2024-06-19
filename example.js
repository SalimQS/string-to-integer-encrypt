const originalText = "Hello World!";
console.log("Original: " + originalText); // Hello World!

const encryptedText = IntegerEncrypt(originalText); // 072101108108111032087111114108100033
console.log("Encrypted:", encryptedText);

const decryptedText = IntegerEncrypt(encryptedText); // Hello World!
console.log("Decrypted:", decryptedText);
