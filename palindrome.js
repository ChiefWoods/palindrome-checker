function palindrome(str) {
  const newStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return newStr === newStr.split('').reverse().join('');
}
