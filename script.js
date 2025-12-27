document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        console.log(href.slice(1))
        const targetElement = document.getElementById(href.slice(1));
        console.log(targetElement)
  
        if (targetElement) {
        //   const topOffset = 70; // Adjust if you have a fixed header
        //   const elementPosition = targetElement.getBoundingClientRect().top;
        //   const offsetPosition = elementPosition + window.pageYOffset - topOffset;
  
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    const toggleBtn = document.getElementById('contactToggle');
    const submenu = document.getElementById('contactSubmenu');

    toggleBtn.addEventListener('click', () => {
        submenu.classList.toggle('show');
    });

    // Optional: hide submenu when clicking outside
    document.addEventListener('click', (e) => {
        if (!submenu.contains(e.target) && !toggleBtn.contains(e.target)) {
            submenu.classList.remove('show');
        }
    });

    startQuotesAnimation(5);

  });

function startQuotesAnimation(durationInSec) {
    let quotes = document.querySelectorAll("#quotes .quote")
    let count = quotes.length;
    let i = -1;
    setInterval(()=>{
      if(i>=0){
        quotes[i].classList.remove("show");
      }
      i++;
      if(i==count){i=0}
      quotes[i].classList.add("show")
    }, durationInSec*1000)
}

// mail = nikshipa.vp@gmail.com
// phone = 9820751278
// insta = 
// logo 
// services images (illustrations)
// services and testimonials animations
// quotes animations
// contact card....?
// blog link