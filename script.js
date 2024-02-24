let description = document.querySelector(".description")
let footer = document.querySelector(".footer");
let invite = document.querySelector(".invite");
let coustmerRegister = document.querySelector(".coustmer-register");
let volunteerRegister = document.querySelector(".volunteer-register");
let coustmerButton = document.getElementById('register1');
let volunteerButton = document.getElementById('register2');
let closeButton1 = document.getElementById("close1");
let closeButton2 = document.getElementById("close2");


coustmerButton.addEventListener('click', function() {
    description.style.display = 'none';
    coustmerRegister.style.display = 'block';
    footer.style.display = 'none';
    volunteerButton.style.display = 'none';
    invite.style.display = 'none';
});

volunteerButton.addEventListener('click', function() {
    description.style.display = 'none';
    volunteerRegister.style.display = 'block';
    footer.style.display = 'none';
    coustmerButton.style.display = 'none';
    invite.style.display = 'none';
});

closeButton1.addEventListener("click", function () {
    location.reload();
});

closeButton2.addEventListener("click", function () {
    location.reload();
});
