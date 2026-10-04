// const { createElement } = require("react");
const pastMessage = document.getElementById("past-message")
const input = document.getElementById("input")
const messageLog = document.getElementById("messageLog")
const computerMessage = document.getElementById("computerMessage")
const questions = ["Welcome", "What is your name", "I have a few questions to ask you", "Do you remember?", "Do you want to remember?", "Did it hurt?", "Do you want out?", "Say please", "It is ready"]
const answers = ["No", "Please"]
var q = 1
var a = 0

console.log("hello world");

addEventListener("keydown", Typeupdate)

function Typeupdate() {
    console.log("key pressed")
}

addEventListener("submit", sendmessage)

function sendmessage() {
    console.log("submitted");

    const newComputerMessage = document.createElement("p");
    const computerText = document.createTextNode(computerMessage.textContent)
    newComputerMessage.appendChild(computerText)
    messageLog.insertBefore(newComputerMessage, pastMessage)

    //source: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    // create a new p element
    const newMessage = document.createElement("p");
    // get the text for the element
    const messageText = document.createTextNode(input.value);
    // add the text to the element
    newMessage.appendChild(messageText);
    // put it in the html
    messageLog.insertBefore(newMessage, pastMessage);

    //reset input
    input.value = ""

    // new question
    computerMessage.textContent = questions[q]
    q++


    console.log(computerMessage.parentNode)
    // computerMessage.parentNode.classList.toggle("typewriter");
    // computerMessage.parentNode.style.animation = "typing 3.5s steps(40, end)";
    if (q > 5 && q < 8) {
        // console.log("No editing input")
        input.value = answers[a]
        a++
        input.setAttribute("disabled", true);
    } else{
        input.removeAttribute("disabled");
    }
}