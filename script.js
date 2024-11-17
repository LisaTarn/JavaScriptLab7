
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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const username = document.getElementById('username');

    // Handle form submission
    form.addEventListener('submit', function(event) {
        console.log('Form submitted');
        event.preventDefault(); // Prevent the actual form submission
        alert(`Username: ${username.value}`);
    });

});

function handleFocus() {
    document.getElementById("focusdisplay").innerText = "You are typing"
};

function handleBlur(){
document.getElementById("focusdisplay").innerText = "Hey, come back here!"
};

// Access the parent element
const list = document.getElementById('buttonList');

// Attach event listener to the parent element
list.addEventListener('click', function(event) {
    
    switch (event.target.id) {
        case "button1":
            alert("You clicked button1")
            break;
        case "button2":
            alert("You clicked button2")
            break;
        case "button3":
            alert("You clicked button3")
            break;
        case "button4":
            alert("You clicked button4")
            break;
        case "button5":
            alert("You clicked button5")
            break;
        default:
            break;
    }
});