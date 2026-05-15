function generatePassword() {
  const length = parseInt(document.getElementById("length").value);
  const favWord = document.getElementById("favWord").value;
  const favNumber = document.getElementById("favNumber").value;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (includeNumbers) {
    chars += "0123456789";
  }

  if (includeSymbols) {
    chars += "!@#$%^&*()";
  }

  let password = "";

  // Step 1: Add user's favorite inputs
  if (favWord) {
    password += favWord;
  }

  if (favNumber) {
    password += favNumber;
  }

  // Step 2: Fill remaining length with random chars
  while (password.length < length) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  // Step 3: Shuffle password (important for strength)
  password = password.split('').sort(() => 0.5 - Math.random()).join('');

  // Step 4: Trim to exact length
  password = password.substring(0, length);

  document.getElementById("result").value = password;
}

function copyPassword() {
  const passwordField = document.getElementById("result");
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied!");
}