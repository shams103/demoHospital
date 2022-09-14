let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-btn');


menu.onclick = () =>{
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');

}

window.onscroll = () =>{
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');

    section.forEach(sec =>{

      let top = window.scrollY;

      
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');
  
      if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('.header .navbar a[href*='+id+']').classList.add('active');
        });
      };
  
    });
}

// ----------Disable Past Date-----------

var today = new Date();
var dd = String(today.getDate() + 1).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
$('#date_picker').attr('min',today);

// -------------------------------------------

function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const name = data.get('name');
  const date = data.get('date');

     document.getElementById("form").reset();
     alert(`Your appointment booking is successful, Good Luck Dear ${name}!!

                           Don't forget to Visit on ${date}                  
                                     Stay Safe, Stay Healthy`);
   
   
}

const form = document.querySelector('#form');
form.addEventListener('submit', handleSubmit);



// ==========dark theme======
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'


//Prievously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating the dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark': 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)  ? 'uil-moon' : 'uil-sun'

//We validate if the user prievously choose a topic
if(selectedTheme){
    //If the validation is fulfilled, we ask what the issue to know if we activated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

//Activate/Deactivate the theme manually with the  button
themeButton.addEventListener('click', () =>{
    //Add or remove the dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme' , getCurrentTheme())
    localStorage.setItem('selected-icon' , getCurrentIcon())
})




