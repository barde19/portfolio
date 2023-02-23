

// navbar button
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector('.header');
const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};
mobile_nav.addEventListener("click", () => toggleNavbar());

const remove = () => {
    nav_header.classList.remove('active');
}


//dynamic cards
const data = [
    {
        title: 'Weather Report',
        button1: 'https://transcendent-macaron-0adc8c.netlify.app/',
        button2: 'https://github.com/barde19/react',
        Image: "../IMAGES/TempApp.png",
    },
    {
        title: 'Personal Portfolio',
        button1: '#',
        button2: 'https://github.com/barde19',
        Image: "../IMAGES/Portfolio.png",
    },
    {
        title: 'React Multipage',
        button1: 'https://lovely-puppy-628f35.netlify.app/',
        button2: 'https://github.com/barde19/viteReact',
        Image: "../IMAGES/reactmultipage.png",
    },
    {
        title: 'React Ecommerce',
        button1: 'https://fanciful-mandazi-937537.netlify.app/',
        button2: 'https://fanciful-mandazi-937537.netlify.app/',
        Image: "../IMAGES/dummy.png",
    },
    {
        title: 'Spotify Clone`',
        button1: 'https://fanciful-mandazi-937537.netlify.app/',
        button2: 'https://fanciful-mandazi-937537.netlify.app/',
        Image: "../IMAGES/dummy.png",
    },



]
data.forEach((element, i) => {


    const container = document.querySelector('.project_container');
    const cards = document.createElement('div');
    cards.classList = 'card';
    const dcard = `
   <img class="card_img" src="${data[i].Image}" alt="img">
<div class='info'>
<h3 class="project-title">${data[i].title}</h3>
<span class="project-button"><button class="project-btn"><a href="${data[i].button1}" target="_blank" >Live Demo</a></button><button class="project-btn"><a href="${data[i].button2}" target="_blank" >Source code</a></button></span>
</div>
`;
    cards.innerHTML += dcard;
    container.appendChild(cards);
});
//load more button

var card = document.querySelectorAll('.card');
var btn = document.querySelector('.btn-one');
var currentcard = 4;
btn.addEventListener('click', function () {
    for (var i = currentcard; i < currentcard + 4; i++) {
        if (card[i]) {
            card[i].style.display = "block";
        }
    }
    currentcard += 4;
    if (currentcard >= card.length) {
        event.target.style.display = "none";
    }
})

// contact form validation

function myForm() {
    setTimeout(function () { errormessage.style.display = "none" }, 3000);
    const name = document.getElementById('name').value.trim();
    var name_pattern = /^[A-Za-z]+$/;
    if (name == "") {

        let msg = document.getElementById('errormessage');
        msg.innerHTML = "*** Please enter the name";

        return false;
    }
    if (name.match(name_pattern)) {
        true;
    }
    else {
        let msg = document.getElementById('errormessage');
        msg.innerHTML = "*** Name should not be number";

        return false;
    }
    if (name.length <= 3) {
        let msg = document.getElementById('errormessage');

        msg.innerHTML = "***  Name should not be less then 3 char";
        return false;
    }
    if (name.length >= 15) {
        let msg = document.getElementById('errormessage');

        msg.innerHTML = "***  Name should not be more then 15 char"
        return false;
    }
    // email validation
    var email = document.getElementById('email').value.trim();
    if (email == "") {
        let msg = document.getElementById('errormessage');
        msg.innerHTML = "*** Please enter the email";
        return false;
    }

    if (email.indexOf('@') <= 0) {
        let msg = document.getElementById('errormessage');
        msg.innerHTML = "***  invalid @ position";
        return false;
    }
    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        let msg = document.getElementById('errormessage');
        msg.innerHTML = "*** invalid . position";
        return false;
    }
    //subject validation
    const subject = document.getElementById('sub').value.trim();
    if (subject == "") {
        let msg = document.getElementById('errormessage');
        msg.innerHTML = "*** Sub should not be empty";
        return false;
    }
    if (subject.length <= 15) {
        let msg = document.getElementById('errormessage');
        msg.innerHTML = "***  Sub Should not be less then 15 char";
        return false;
    }
    if (subject.length >= 45) {
        let msg = document.getElementById('errormessage');
        msg.innerHTML = "*** Sub Should not be more then 45 char";
        return false;
    }
    //Message validation
    const message = document.getElementById('message').value.trim();
    if (message == "") {
        let msg = document.getElementById('errormessage');
        msg.innerHTML = "*** Field should not be empty";
        return false;
    }
    if (message.length <= 20) {
        let msg = document.getElementById('errormessage');
        msg.innerHTML = "*** Message should not be less then 20 char";
        return false;
    }
    if (message.length >= 300) {
        let msg = document.getElementById('errormessage');
        msg.innerHTML = "*** Message should not be more then 300 char";
        return false;
    }
}
//  send email
form.reset();