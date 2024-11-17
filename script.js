
// JavaScript event listeners
var hoverButton = document.getElementById('hoverButton');
 
hoverButton.addEventListener('mouseenter', function() {
    
   this.style.backgroundColor = 'lightblue';
    const display = document.getElementById('display');
    const newMessage = document.createElement('m');
    newMessage.textContent = "There is a mouse pointer over me."
    display.appendChild(newMessage);
});

hoverButton.addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'transparent'
    const display = document.getElementById('display');
    display.innerHTML = " "
});

const textInput = document.getElementById('textInput')
const key = document.getElementById('key');

textInput.addEventListener('keyup', function(event) {
    key.innerText = `Latest Key Pressed: ${event.key}`;
});