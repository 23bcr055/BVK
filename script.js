window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);



const elevator = document.querySelector('.elevator');
const elevatorL = document.querySelector('.elevatorL');
const elevatorR = document.querySelector('.elevatorR');



// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      
      elevator.classList.add('elevator-transition');
            elevatorL.classList.add('elevatorL-transition');
      elevatorR.classList.add('elevatorR-transition');

      return;
    }

    elevator.classList.remove('elevator-transition');
    elevatorL.classList.remove('elevatorL-transition');
    elevatorR.classList.remove('elevatorR-transition');

  });
});

// var observer = new IntersectionObserver(callback, options);
// observer.observe(elevator);

observer.observe(document.querySelector('.elevator'));
observer.observe(document.querySelector('.elevatorL'));
observer.observe(document.querySelector('.elevatorR'));

// Automatically open drawers on click
document.querySelectorAll('details').forEach(d => {
  d.addEventListener('toggle', () => {
    const structure = d.querySelector('.drawer__structure');
    if (d.open) structure.style.transform = 'translateZ(1vmin)';
    else structure.style.transform = 'translateZ(0)';
  });
});
