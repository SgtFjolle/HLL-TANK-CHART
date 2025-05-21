const categorySelect = document.getElementById('category-select');
const variationButtons = document.getElementById('variation-buttons');
const armyImage = document.getElementById('army-image');
const modeToggle = document.getElementById('mode-toggle');
const fullscreenToggle = document.getElementById('fullscreen-toggle');

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

function updateVariations() {
  const category = categorySelect.value;
  currentCategory = category;
  const variations = imageMap[category];

  variationButtons.innerHTML = "";

  Object.keys(variations).forEach((variation, index) => {
    const button = document.createElement("button");
    button.textContent = variation;
    button.onclick = () => {
      showImage(category, variation);
      currentVariation = variation;
      variationButtons.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    };
    variationButtons.appendChild(button);

    if (index === 0) {
      button.click();
    }
  });
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
};

document.addEventListener("DOMContentLoaded", () => {
  categorySelect.value = 'german';
  updateVariations();
});








