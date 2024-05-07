"use strict";

let url = "http://127.0.0.1:3001/api/register" //URL till mitt API

/* funktion för att läsa in datan i formuläret */
const registerBtnEl = document.getElementById("registerBtn");
registerBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    createUser(username, password);
});

/* Funktion för att lägga till data i databasen */
async function createUser(username, password) {
    let user = {
        username: username,
        password: password,

    }
    let success = document.getElementById("success");
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "Application/json"
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();
    console.log(data);
    if (data.error) {
        error.innerHTML = `${data.error}`;
    } else {
        success.innerHTML = `${data.message}`;
        setTimeout(returnHome, 3000)
        function returnHome() { window.location.href = '/src/index.html' }; //skicka en tillbaka till startsidan
    }
}

// back button
const backBtnEl = document.getElementById("backBtn");
backBtnEl.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
})