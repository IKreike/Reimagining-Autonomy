// const { createElement } = require("react");
const pastMessage = document.getElementById("past-message")
const input = document.getElementById("input")
const messageLog = document.getElementById("messageLog")

console.log("hello world");

addEventListener("keydown", Typeupdate)

function Typeupdate() {
    console.log("key pressed")
}

addEventListener("submit", sendmessage)

function sendmessage() {
    console.log("submitted");

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

}