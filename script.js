const categorySelect = document.getElementById('category-select');
const variationButtons = document.getElementById('variation-buttons');
const armyImage = document.getElementById('army-image');
const modeToggle = document.getElementById('mode-toggle');
const fullscreenToggle = document.getElementById('fullscreen-toggle');
const overlay = document.getElementById('fullscreen-overlay');
const overlayCategory = document.getElementById('overlay-category');
const overlayButtons = document.getElementById('overlay-variation-buttons');

const imageMap = {
  german: {
    "German Army": "german.jpg",
    "German Army Winter Camo": "german_winter.jpg",
    "German Africa Corps": "german_africa.jpg"
  },
  us: {
    "United States Army": "us.jpg",
    "United States Army Winter Camo": "us_winter.jpg"
  },
  soviet: {
    "Soviet Armed Forces": "soviet.jpg"
  },
  british: {
    "British Army": "british.jpg",
    "British Eighth Army": "british_eighth.jpg"
  }
};

let currentCategory = 'german';
let currentVariation = '';

function updateVariations(isOverlay = false) {
  const category = isOverlay ? overlayCategory.value : categorySelect.value;
  currentCategory = category;

  const target = isOverlay ? overlayButtons : variationButtons;
  target.innerHTML = "";

  const variations = imageMap[category];
  if (!variations) return;

  Object.keys(variations).forEach((variation, index) => {
    const button = document.createElement("button");
    button.textContent = variation;
    button.onclick = () => {
      showImage(category, variation);
      currentVariation = variation;
      target.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    };
    target.appendChild(button);

    if (index === 0 && !isOverlay) {
      button.click();
    }
  });

  if (!isOverlay) {
    overlayCategory.value = category;
    updateVariations(true);
  }
}

function showImage(category, variation) {
  armyImage.src = imageMap[category][variation];
  armyImage.alt = variation;
  currentCategory = category;
  currentVariation = variation;
}

function toggleMode() {
  const isLight = document.body.classList.toggle('light-mode');
  modeToggle.textContent = isLight ? '☀️' : '🌙';
}

fullscreenToggle.onclick = () => {
  const isFullscreen = document.body.classList.toggle('fullscreen-mode');
  fullscreenToggle.classList.toggle('active', isFullscreen);
  overlay.classList.toggle('hidden', !isFullscreen);

  if (isFullscreen) {
    overlayCategory.value = currentCategory;
    updateVariations(true);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  categorySelect.value = 'german';
  updateVariations();
});






