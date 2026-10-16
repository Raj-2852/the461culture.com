// Places Data for Araku & Alluri Sitharama Raju (ASR) District
const placesData = [
  {
    id: "araku-valley",
    title: "Araku Valley & Coffee Estates",
    district: "Alluri Sitharama Raju (ASR) District",
    category: "araku",
    rating: "4.9",
    altitude: "911 m MSL",
    bestTime: "Oct to March",
    reach: "115 km from Visakhapatnam",
    image: "./assets/images/araku_valley.jpg",
    tags: ["Coffee Plantations", "Hill Station", "Morning Mist", "Tribal Museum"],
    excerpt: "Nestled in the lush Eastern Ghats, famous for artisanal organic Arabica coffee, mist-shrouded valleys, and vibrant indigenous tribal culture.",
    details: "Araku Valley is a scenic hill station located in the newly carved Alluri Sitharama Raju (ASR) district. Surrounded by dense forests and undulating mountains of Galikonda, Raktakonda, and Sunkarimetta, Araku is world-renowned for its premium tribal coffee plantations. Travelers can immerse themselves in traditional Dhimsa dance, local haats (tribal weekly markets), and fresh bamboo chicken."
  },
  {
    id: "katiki-waterfalls",
    title: "Katiki Waterfalls",
    district: "ASR District (Near Borra)",
    category: "waterfalls",
    rating: "4.8",
    altitude: "Spring-fed at Gosthani River",
    bestTime: "August to December",
    reach: "90 km from Vizag / 4km trek from Borra",
    image: "./assets/images/katiki_waterfalls.jpg",
    tags: ["Hidden Waterfall", "Off-Road Trek", "Lush Jungle", "Gosthani River"],
    excerpt: "A cascading 50-foot natural waterfall tucked inside dense tropical woods, accessed through rugged jeep trails and streams.",
    details: "Originating from the perennial Gosthani river, Katiki Waterfalls plunges over mossy green cliffs into a crystal-clear turquoise natural pool. The journey involves a thrilling jeep ride through rugged mountain paths followed by a scenic 20-minute jungle hike. It's a prime destination for adventure vloggers exploring ASR district's untamed nature."
  },
  {
    id: "lambasingi",
    title: "Lambasingi (Kashmir of AP)",
    district: "Chintapalli Mandal, ASR District",
    category: "viewpoints",
    rating: "4.9",
    altitude: "1,000 m MSL",
    bestTime: "November to January",
    reach: "100 km from Vizag",
    image: "./assets/images/lambasingi.jpg",
    tags: ["Sub-Zero Frost", "Cloud Camping", "Apple Orchards", "Sunrise Peak"],
    excerpt: "The legendary village famous for winter sub-zero temperatures, dense white cloud valleys, and enchanting night sky stargazing.",
    details: "Known affectionately as 'Kashmir of Andhra Pradesh', Lambasingi experiences occasional frost and zero-degree temperatures in peak winter. Cloud camping at sunrise viewpoints offers a surreal phenomenon where the sun crests above a carpet of pure white fog. Pepper and apple plantations dot the picturesque village landscape."
  },
  {
    id: "borra-caves",
    title: "Borra Caves & Ananthagiri Hills",
    district: "Ananthagiri, ASR District",
    category: "culture",
    rating: "4.9",
    altitude: "705 m MSL",
    bestTime: "Year Round (Monsoon to Winter best)",
    reach: "85 km from Vizag via scenic train route",
    image: "./assets/images/araku_valley.jpg",
    tags: ["Million Year Stalactites", "Gosthani River", "Cave Lights", "Heritage"],
    excerpt: "Deep limestone caves carved over a million years by the Gosthani River with breathtaking stalactite and stalagmite rock formations.",
    details: "Among the deepest and largest caves in India, Borra Caves showcase breathtaking subterranean formations illuminated in vivid ambient light. Discovered by British geologist William King in 1807, the caves have deep spiritual significance for tribal inhabitants and feature a revered Shiva Lingam inside."
  },
  {
    id: "vanjangi-hills",
    title: "Vanjangi Cloud Peak (Megha Samudram)",
    district: "Paderu, ASR District",
    category: "viewpoints",
    rating: "4.9",
    altitude: "3,400 ft MSL",
    bestTime: "October to February (5:00 AM Sunrise)",
    reach: "110 km from Visakhapatnam",
    image: "./assets/images/lambasingi.jpg",
    tags: ["Ocean of Clouds", "Sunrise Trek", "Paderu Ghats", "Viral Viewpoint"],
    excerpt: "A viral sensation for photographers and vloggers: stand above an endless sea of rolling white clouds at dawn in Paderu.",
    details: "Vanjangi Hills, situated in Paderu agency, has become one of the most celebrated sunrise destinations in South India. Hikers embark on a pre-dawn 5 km trek to catch the 'Megha Samudram' (Sea of Clouds) that sweeps through the valleys as golden morning rays illuminate the Eastern Ghats."
  },
  {
    id: "chaparai-waterfalls",
    title: "Chaparai Cascading Water Flow",
    district: "Near Araku, ASR District",
    category: "waterfalls",
    rating: "4.7",
    altitude: "Araku Valley belt",
    bestTime: "September to January",
    reach: "15 km from Araku Town",
    image: "./assets/images/katiki_waterfalls.jpg",
    tags: ["Smooth Rock Stream", "Picnic Spot", "Forest Glade", "Bongu Chicken"],
    excerpt: "Smooth rock formations with streams gliding through forest canopies, famous for authentic tribal bamboo chicken tasting.",
    details: "Chaparai (Dumbriguda Waterfalls) is a breathtaking picturesque picnic spot where sparkling hill streams glide over smooth, wide rock slabs surrounded by dense green woods. Visitors love tasting steaming hot local Bongu (Bamboo) Chicken prepared on spot by tribal chefs."
  }
];

// Content Creators & Social Updates
const creatorReels = [
  {
    title: "Secret Waterfalls of ASR 💧",
    views: "182K views",
    tag: "Trending Reel",
    image: "./assets/images/katiki_waterfalls.jpg",
    link: "https://www.instagram.com/the461culture"
  },
  {
    title: "Araku Morning Mist ☁️ 5AM",
    views: "245K views",
    tag: "Viral",
    image: "./assets/images/araku_valley.jpg",
    link: "https://www.instagram.com/the461culture"
  },
  {
    title: "Lambasingi Camp Fire & Fog 🔥",
    views: "98K views",
    tag: "Vlog Highlight",
    image: "./assets/images/lambasingi.jpg",
    link: "https://youtube.com/@delights000?si=4WdEm3oga3oi8Vp5"
  },
  {
    title: "Tribal Coffee & Bongu Chicken 🍗",
    views: "310K views",
    tag: "Food & Culture",
    image: "./assets/images/araku_valley.jpg",
    link: "https://youtube.com/@delights000?si=4WdEm3oga3oi8Vp5"
  }
];

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  renderLiveTime();
  renderPlaces(placesData);
  renderReels(creatorReels);
  setupFilterTabs();
  setupDynamicIsland();
});

// Update Live Time in iOS top status bar
function renderLiveTime() {
  const timeEl = document.getElementById("ios-clock");
  if (!timeEl) return;
  const update = () => {
    const now = new Date();
    timeEl.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  update();
  setInterval(update, 1000);
}

// Render Places Cards
function renderPlaces(list) {
  const container = document.getElementById("places-grid");
  if (!container) return;

  container.innerHTML = list.map(item => `
    <article class="ios-glass-card place-card" onclick="openPlaceModal('${item.id}')">
      <div class="place-media">
        <img class="place-img" src="${item.image}" alt="${item.title}" loading="lazy" width="360" height="260" onerror="this.onerror=null;this.src='./assets/images/araku_valley.jpg';" />
      </div>
    </article>
  `).join("");
}

// Render Creator Reels
function renderReels(reels) {
  const container = document.getElementById("reels-container");
  if (!container) return;

  container.innerHTML = reels.map(r => `
    <a href="${r.link}" target="_blank" rel="noopener" class="reel-card">
      <img src="${r.image}" alt="${r.title}" loading="lazy" width="200" height="333" onerror="this.onerror=null;this.src='./assets/images/araku_valley.jpg';" />
      <div class="reel-badge">
        <span style="display:inline-block; width:6px; height:6px; background:#ff2a85; border-radius:50%;"></span>
        ${r.tag}
      </div>
      <div class="reel-overlay">
        <div class="reel-title">${r.title}</div>
        <div class="reel-views">${r.views}</div>
      </div>
    </a>
  `).join("");
}

// Filter tabs
function setupFilterTabs() {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.dataset.category;
      
      // Keep dock buttons in sync with category selection
      const dockButtons = document.querySelectorAll(".ios-floating-dock .dock-item");
      dockButtons.forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("onclick") && btn.getAttribute("onclick").includes(`'${category}'`)) {
          btn.classList.add("active");
        }
      });

      if (category === "all") {
        renderPlaces(placesData);
      } else {
        const filtered = placesData.filter(p => p.category === category);
        renderPlaces(filtered);
      }
    });
  });
}

// Open Place Details Modal
window.openPlaceModal = function(id) {
  const item = placesData.find(p => p.id === id);
  if (!item) return;

  const modal = document.getElementById("place-modal");
  const modalImg = document.getElementById("modal-img");
  if (modalImg) {
    modalImg.src = item.image;
    modalImg.alt = item.title;
    modalImg.onerror = function() {
      this.src = "./assets/images/araku_valley.jpg";
    };
  }
  
  const titleEl = document.getElementById("modal-title");
  if (titleEl) titleEl.innerText = item.title;
  
  const locEl = document.getElementById("modal-location");
  if (locEl) locEl.innerText = item.district;
  
  const descEl = document.getElementById("modal-desc");
  if (descEl) descEl.innerText = item.details;
  
  const altEl = document.getElementById("modal-altitude");
  if (altEl) altEl.innerText = item.altitude;
  
  const bestEl = document.getElementById("modal-best-time");
  if (bestEl) bestEl.innerText = item.bestTime;
  
  const reachEl = document.getElementById("modal-reach");
  if (reachEl) reachEl.innerText = item.reach;

  const tagsContainer = document.getElementById("modal-tags");
  if (tagsContainer) {
    tagsContainer.innerHTML = item.tags.map(t => `<span class="tag-item">#${t}</span>`).join('');
  }

  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
};

// Close Modal
window.closePlaceModal = function() {
  const modal = document.getElementById("place-modal");
  if (modal) {
    modal.classList.remove("open");
    checkModalsClosed();
  }
};

// Helper to restore body scrolling when all modals are closed
function checkModalsClosed() {
  const openModals = document.querySelectorAll(".ios-modal-backdrop.open");
  if (openModals.length === 0) {
    document.body.style.overflow = "";
  }
}

// Close any open modal on Escape key press
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePlaceModal();
    closeSettingsModal();
    closeAboutModal();
  }
});

// Dynamic Island interactions
function setupDynamicIsland() {
  const island = document.getElementById("dynamic-island");
  if (!island) return;
  island.addEventListener("click", () => {
    // Scroll smoothly to reels
    const reelsSection = document.getElementById("reels-section");
    if (reelsSection) {
      reelsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, { passive: true });
}

// Dock button filter action
window.filterByDock = function(category) {
  // Update active state on dock items
  const dockButtons = document.querySelectorAll(".ios-floating-dock .dock-item");
  dockButtons.forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("onclick") && btn.getAttribute("onclick").includes(`'${category}'`)) {
      btn.classList.add("active");
    }
  });

  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(t => {
    if (t.dataset.category === category) {
      t.click();
    }
  });
  const placesSection = document.getElementById("places-section");
  if (placesSection) {
    placesSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// Settings Modal Controls
window.openSettingsModal = function() {
  const modal = document.getElementById("settings-modal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
};

window.closeSettingsModal = function() {
  const modal = document.getElementById("settings-modal");
  if (modal) {
    modal.classList.remove("open");
    checkModalsClosed();
  }
};

// About Me Modal Controls
window.openAboutModal = function() {
  const modal = document.getElementById("about-modal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
};

window.closeAboutModal = function() {
  const modal = document.getElementById("about-modal");
  if (modal) {
    modal.classList.remove("open");
    checkModalsClosed();
  }
};

// Safe storage helper with fallback for restricted/incognito contexts
const safeStorage = {
  setItem: function(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch (e) {
      // Storage unavailable or disabled
    }
  },
  getItem: function(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }
};

// Toggle Settings Features
window.toggleThemeMode = function(isLight) {
  if (isLight) {
    document.body.classList.add("theme-light");
    safeStorage.setItem("th461_theme", "light");
  } else {
    document.body.classList.remove("theme-light");
    safeStorage.setItem("th461_theme", "dark");
  }
};

window.toggleUltraGlass = function(isUltra) {
  if (isUltra) {
    document.body.classList.add("ultra-glass");
    safeStorage.setItem("th461_ultraglass", "true");
  } else {
    document.body.classList.remove("ultra-glass");
    safeStorage.setItem("th461_ultraglass", "false");
  }
};

window.toggleReduceMotion = function(reduce) {
  if (reduce) {
    document.body.classList.add("reduced-motion");
    safeStorage.setItem("th461_motion", "true");
  } else {
    document.body.classList.remove("reduced-motion");
    safeStorage.setItem("th461_motion", "false");
  }
};

window.toggleLargeFont = function(isLarge) {
  if (isLarge) {
    document.body.classList.add("font-large");
    safeStorage.setItem("th461_largefont", "true");
  } else {
    document.body.classList.remove("font-large");
    safeStorage.setItem("th461_largefont", "false");
  }
};

// Share Channel feature with resilient fallback
window.shareChannel = function() {
  const url = "https://youtube.com/@delights000?si=4WdEm3oga3oi8Vp5";
  const btn = document.getElementById("btn-share");
  
  const showSuccessFeedback = () => {
    if (btn) {
      const originalText = btn.innerText;
      btn.innerText = "✓ YouTube Link Copied!";
      setTimeout(() => {
        btn.innerText = originalText;
      }, 2200);
    }
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url).then(showSuccessFeedback).catch(() => {
      fallbackCopy(url);
    });
  } else {
    fallbackCopy(url);
  }

  function fallbackCopy(text) {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      if (successful) {
        showSuccessFeedback();
      } else {
        window.open(text, "_blank", "noopener");
      }
    } catch (err) {
      window.open(text, "_blank", "noopener");
    }
  }
};

// Restore saved settings on load
(function restorePreferences() {
  // Theme
  const savedTheme = safeStorage.getItem("th461_theme");
  if (savedTheme === "light") {
    document.body.classList.add("theme-light");
    const toggleTheme = document.getElementById("toggle-theme");
    if (toggleTheme) toggleTheme.checked = true;
  }
  
  // Ultra Glass
  const savedUltra = safeStorage.getItem("th461_ultraglass");
  if (savedUltra === "true") {
    document.body.classList.add("ultra-glass");
    const toggleUltra = document.getElementById("toggle-ultraglass");
    if (toggleUltra) toggleUltra.checked = true;
  }

  // Reduced Motion
  const savedMotion = safeStorage.getItem("th461_motion");
  if (savedMotion === "true") {
    document.body.classList.add("reduced-motion");
    const toggleMotion = document.getElementById("toggle-motion");
    if (toggleMotion) toggleMotion.checked = true;
  }

  // Large Font
  const savedFont = safeStorage.getItem("th461_largefont");
  if (savedFont === "true") {
    document.body.classList.add("font-large");
    const toggleFont = document.getElementById("toggle-font");
    if (toggleFont) toggleFont.checked = true;
  }
})();

