
let time = document.getElementById("time");
setInterval(updateTime, 1);




function updateTime() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    time.textContent = `${hours}:${minutes}`;
}

let title = document.getElementById("title");
let now = new Date();
let hours = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');
let seconds = String(now.getSeconds()).padStart(2, '0');

document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        let now = new Date();
        let hours = String(now.getHours()).padStart(2, '0');
        let minutes = String(now.getMinutes()).padStart(2, '0');
        let seconds = String(now.getSeconds()).padStart(2, '0');
        title.textContent = `Time.is - ${hours}:${minutes}`;
        let a = title.textContent = `Time.is - ${hours}:${minutes}`;
    }, 1);
    updateTime();
});

()=>{
    

localStorage.setItem("visited", "true");
localStorage.setItem("lastVisit", new Date().toString());
localStorage.setItem("visitCount", (parseInt(localStorage.getItem("visitCount") || "0") + 1).toString());
localStorage.getItem("visitCount");
localStorage.getItem("lastVisit");
localStorage.getItem("visited");
localStorage.removeItem("timeSpent")
}
visited.textContent = `You have visited this page ${localStorage.getItem("visitCount")} times. Your last visit was on ${localStorage.getItem("lastVisit")}.`;


updateTime();
