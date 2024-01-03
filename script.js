const textInput = document.querySelector('#text-input')
const checkBtn = document.querySelector('#check-btn')
const resultDiv = document.querySelector('#result')

function palindrome(str) {
  const newStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return newStr === newStr.split('').reverse().join('');
}

checkBtn.addEventListener('click', () => {
  const text = textInput.value;

  if (!text.length) {
    alert('Please input a value')
  } else {
    resultDiv.innerHTML = `
      <span>
        <strong>${text}</strong> ${palindrome(text) ? 'is' : 'is not'} a palindrome.
      </span>
      `
  }

  textInput.value = '';
})
