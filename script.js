const msg = [`hey`, `hello`, `what's up`, `up dog`, `olla`, `Hakuna matata`];
const btn = document.getElementById(`btnMsg`);
let randMsgP = document.getElementById(`randMsgP`);
const messages = JSON.parse(localStorage.getItem("messages"));
const deleteA = document.getElementById(`delete`);
const showList = document.getElementById(`showList`);
const hideList = document.getElementById(`hideList`);
const messageList = document.getElementById(`messageList`);


// const hideLi = messages => {
//     for (let i = 0; i < messages.length; i++) {
//         const oldLi = document.getElementsByTagName(`ul`);
//         messageList.removeChild()
//     }
// }


function showLi() {
    for (let i = 0; i < messages.length; i++) {
        console.log(messages);
        const newLi = document.createElement("li");
        messageList.appendChild(newLi);
        newLi.innerText = messages[i];
    }
}

showList.addEventListener(`click`, showLi);


const hideLi = () => {
    messageList.innerHTML = ''; // Remove all child elements (li) from messageList
};

hideList.addEventListener(`click`, hideLi);




const deleteArray = () => {
    if (typeof Storage !== "undefined") {
        JSON.stringify(localStorage.clear())
        console.log(localStorage)
    }
}

deleteA.addEventListener(`click`, deleteArray)

const randMSg = () => {
    if (typeof Storage !== "undefined" && localStorage.messages) {
        const messages = JSON.parse(localStorage.getItem("messages"));
        const randNr = Math.floor(Math.random() * messages.length);
        return messages[randNr]; // Return the selected message
    } else {
        alert(`Local storage not available or no messages stored`);
        return ""; // Return an empty string or handle this case accordingly
    }
};


btn.addEventListener(`click`, () => {
    randMsgP.classList.add(`fade-out`);
    setTimeout(() => {
        randMsgP.innerText = randMSg();
        randMsgP.classList.remove(`fade-out`);
    }, 500);
});






function saveMessage() {
    let messageInput = document.getElementById("message");
    let message = messageInput.value;

    if (typeof Storage !== "undefined") {
        let messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.push(message);
        localStorage.setItem("messages", JSON.stringify(messages));
        alert(`Message saved`);
    } else {
        alert(`Browser does not support local storage`);
    }
}

var form = document.getElementById("formId");
function submitForm(event) {

    //Preventing page refresh
    event.preventDefault();
}

//Calling a function during form submission.
form.addEventListener('submit', submitForm);



