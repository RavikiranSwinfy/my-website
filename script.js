window.addEventListener('scroll', function() {
    const section = document.querySelector('.certifications-section');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
  
    if (sectionPosition < screenPosition) {
      section.classList.add('show');
    }
  });
  