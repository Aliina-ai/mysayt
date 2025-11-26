// Fade-in секцій при скролі
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});

// Легка пульсація NFT при наведенні
const nftItems = document.querySelectorAll(".nft-item img");
nftItems.forEach(img => {
  img.addEventListener("mousemove", e => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    img.style.transform = `rotateY(${(x-rect.width/2)/10}deg) rotateX(${-(y-rect.height/2)/10}deg) scale(1.05)`;
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  });
});

window.addEventListener("load", () => {
  const intro = document.getElementById("intro-animation");
  const main = document.getElementById("main-content");

  // Через 3 секунди запускаємо анімацію зменшення
  setTimeout(() => {
    intro.style.transform = "scale(0.3)";
    intro.style.opacity = "0.3";
    
    // Після анімації показуємо основний контент
    setTimeout(() => {
      main.style.display = "block";
      intro.style.position = "fixed";  // лишаємо фон
      intro.style.top = "0";
      intro.style.left = "0";
      intro.style.width = "100%";
      intro.style.height = "100vh";
      intro.style.zIndex = "0"; // під контентом
    }, 2000); // час співпадає з CSS transition
  }, 3000); // час до запуску анімації
});

