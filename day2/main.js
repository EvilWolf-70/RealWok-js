
const textInput = document.getElementById('textInput');
const charcount = document.getElementById('charCount');
textInput.addEventListener('input', ()=>{
    const remaining = 50 - textInput.value.length;
    charcount.textContent = remaining;
});