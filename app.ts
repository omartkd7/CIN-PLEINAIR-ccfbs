// 1. MOBILE NAVIGATION (Burger Menu)

const navLinks: HTMLElement | null = document.getElementById('navLinks');



document.querySelectorAll('a[href^="#"]').forEach((anchor: Element): void => {
  (anchor as HTMLAnchorElement).addEventListener('click', function (e: Event): void {
    const href: string | null = this.getAttribute('href');

    // Only prevent default for valid section links
    if (href !== '#' && href && document.querySelector(href)) {
      e.preventDefault();
      const target: Element | null = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});

// 4. NAVBAR HIDE/SHOW ON SCROLL (Optional Enhancement)

let lastScrollTop: number = 0;
const navbar: HTMLElement | null = document.getElementById('navbar');

window.addEventListener('scroll', function (): void {
  const currentScroll: number = window.pageYOffset || document.documentElement.scrollTop;

  if (navbar) {
    if (currentScroll > lastScrollTop && currentScroll > 100) {
      // Scrolling DOWN - hide navbar
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling UP - show navbar
      navbar.style.transform = 'translateY(0)';
    }
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

