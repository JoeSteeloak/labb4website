window.onload = init;
//Kollar så att token valdierar annars skickas man till index.html
async function init() {

    const token = localStorage.getItem("token");
    let url = "http://127.0.0.1:3001/api/protected" //URL till mitt API

    const response = await fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const data = await response.json();
    console.log(data);

    if(data.message === "Skyddad route!") {
        const cv = document.getElementById("cv");
        cv.innerHTML = `<h1> Welcome ${localStorage.username}! </h1>`;
    } else {
        window.location.href = 'index.html';
    }

};

// logga ut-knapp
const logOutBtnEl = document.getElementById("logoutbtn");
logOutBtnEl.addEventListener("click", logout);
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    window.location.href = 'index.html';
}