const menu = document.getElementById("chkMenuHeader");

if(btnMenuHeader){
    btnMenuHeader.addEventListener('click', () => {
      btnMenuHeader.classList.toggle('animarMenu');
    })
  }


  const anchors = document.querySelectorAll('a[href^="#"]');

  if(anchors){
    anchors.forEach(function(anchor) {
        anchor.addEventListener('click', scrollToSection);
    });
  }

  function scrollToSection(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 75;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
      });
  }

const btnVerMais = document.getElementById('btnVerMais')

if(btnVerMais){
  btnVerMais.addEventListener('click', (event) => {
    event.preventDefault();
    window.open("https://soundcloud.com/raphalima337/sets/bytepapo", '_blank')
  })
}