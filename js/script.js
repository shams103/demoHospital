let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-btn');
let book = document.querySelector('#booking');
let name = document.querySelector('#name');

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

book.onclick = () =>{
  alert(`Your appointment booking is successful, Good Luck Dear ${name} !!`);
  
  
}


