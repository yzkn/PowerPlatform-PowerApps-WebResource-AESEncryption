var MyEncrypt = window.MyEncrypt || {};
(function () {
    this.formOnLoad = async function (executionContext) {
        // const formContext = executionContext.getFormContext();
        // const status = formContext.getAttribute('status').getValue();
    }

    // Code to run in the column OnChange event
    this.attributeOnChange = function (executionContext) {
        const formContext = executionContext.getFormContext();
        const plain = formContext.getAttribute('ya_message').getValue();
        const key = formContext.getAttribute('ya_key').getValue();
        if (plain && key) {
            encrypted = CryptoJS.AES.encrypt(plain, key);
            console.log(plain, ' => ', encrypted);
            const encryptedString = encrypted.toString();
            formContext.getAttribute('ya_encrypted').setValue(encryptedString);

            const decrypted = CryptoJS.AES.decrypt(encryptedString, key);
            const decryptedUTF8String = decrypted.toString(CryptoJS.enc.Utf8);
            console.log(encryptedString, '=>', decryptedUTF8String);
        }
    }
}).call(MyEncrypt);
