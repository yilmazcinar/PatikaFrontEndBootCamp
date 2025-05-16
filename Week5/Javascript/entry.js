document.getElementById("entryForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("nameInput").value.trim();

    if(!name) {
        alert("lütfen isminizi giriniz.");
        return;
    }

    localStorage.setItem("userName" , name);

    window.location.href ="index.html";
});