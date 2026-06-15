// Scroll animation
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

// Load projects from JSON
async function loadProjects() {
  try {
    const res = await fetch('projects.json');
    const data = await res.json();
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';
    data.projects.forEach(p => {
      const card = document.createElement('article');
      card.className = 'project-card';

      const img = document.createElement('img');
      img.src = p.image;
      img.alt = p.title;

      const info = document.createElement('div');
      info.className = 'project-info';

      const h3 = document.createElement('h3');
      h3.textContent = p.title;

      const desc = document.createElement('p');
      desc.textContent = p.description;

      info.appendChild(h3);
      info.appendChild(desc);

      // Add tags if available
      if (p.tags && p.tags.length > 0) {
        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'project-tags';
        p.tags.forEach(tag => {
          const tagEl = document.createElement('span');
          tagEl.className = 'project-tag';
          tagEl.textContent = tag;
          tagsContainer.appendChild(tagEl);
        });
        info.appendChild(tagsContainer);
      }

      if (p.url) {
        const a = document.createElement('a');
        a.href = p.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'btn-sm';
        a.textContent = 'View Project';
        info.appendChild(a);
      }

      card.appendChild(img);
      card.appendChild(info);
      grid.appendChild(card);
    });
  } catch (err) {
    console.error('Failed to load projects.json', err);
  }
}

document.addEventListener('DOMContentLoaded', loadProjects);
