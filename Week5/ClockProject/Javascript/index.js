const name = localStorage.getItem("userName");

if(!name){
    window.location.href ="entry.html";
}
    else {
        document.getElementById("myName").textContent = name;
    }


const days = ["Pazar", "Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

function showTime(){
    const clock = document.getElementById("myClock");
    const now = new Date();

    const day = days[now.getDay()];

    const time = now.toLocaleTimeString("tr-TR");

    clock.textContent = `${day}, ${time}`;
}

showTime();

setInterval(showTime,1000);