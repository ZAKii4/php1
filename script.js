document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Entrez votre nom :");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("s'il vous plait entrez un email valide !");
        return;
    }

    if (message === "") {
        alert("une erreur s'est reproduite ");
        return;
    }

    alert("les informations sont saisis avec succes !");
    
    document.getElementById("contactForm").reset();
});