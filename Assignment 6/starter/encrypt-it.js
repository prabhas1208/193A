(function() {
  "use strict";

  window.addEventListener("load", init);

  /**
   * Initializes the Encrypt-It application by setting up event listeners for UI elements.
   */
  function init() {
    // Setting up event listeners for buttons
    const encryptButton = document.getElementById("encrypt-it");
    const resetButton = document.getElementById("reset");

    encryptButton.addEventListener("click", function() {
      // Retrieve input text
      const inputText = document.getElementById("input-text").value;
      // Encrypt the text
      const encryptedText = shiftCipher(inputText);
      // Display the encrypted text
      document.getElementById("result").textContent = encryptedText;
    });

    resetButton.addEventListener("click", function() {
      // Clear input text and result area
      document.getElementById("input-text").value = "";
      document.getElementById("result").textContent = "";
    });
  }

  /**
   * Returns an encrypted version of the given text, where
   * each letter is shifted alphabetically ahead by 1 letter,
   * and 'z' is shifted to 'a' (creating an alphabetical cycle).
   */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] >= 'a' && text[i] <= 'z') {
        // Shift the letter by 1
        let shiftedCharCode = text.charCodeAt(i) + 1;
        // Handle 'z' wrapping around to 'a'
        if (shiftedCharCode > 'z'.charCodeAt(0)) {
          shiftedCharCode = 'a'.charCodeAt(0);
        }
        // Append the shifted letter to the result
        result += String.fromCharCode(shiftedCharCode);
      } else {
        // Keep non-alphabetic characters unchanged
        result += text[i];
      }
    }
    return result;
  }

})();
