// Add custom JavaScript here

function runTypeText() {
    const textElement = document.getElementById("typing-text");
    const text= "I am Anu Adegbite";
    const text_delay = 100;

    typerText(textElement,text,text_delay);
}


function typerText(textElement, text, delay) {
    for(let i=0; i < text.length; i++) {
        setTimeout(() => {
            textElement.textContent += text.charAt(i);
        }, i*delay);
    }
}


document.addEventListener("DOMContentLoaded", runTypeText);