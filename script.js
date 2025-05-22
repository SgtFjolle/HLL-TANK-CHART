// Main controls
const categorySelect = document.getElementById('category-select');
const variationButtons = document.getElementById('variation-buttons');
const armyImage = document.getElementById('army-image');
const modeToggle = document.getElementById('mode-toggle');
const fullscreenToggle = document.getElementById('fullscreen-toggle');

// Image map data
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
    const btn = document.createElement('button');
    btn.textContent = variation;
    btn.onclick = () => {
      showImage(category, variation);
      currentVariation = variation;
      document.querySelectorAll('#variation-buttons button')
              .forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    };
    variationButtons.appendChild(btn);
    if (index === 0) btn.click();
  });
}

function showImage(category, variation) {
  armyImage.src = imageMap[category][variation];
  armyImage.alt = variation;
}

function toggleMode() {
  const isLight = document.body.classList.toggle('light-mode');
  modeToggle.textContent = isLight ? '☀️' : '🌙';
}

fullscreenToggle.onclick = () => {
  const isFs = document.body.classList.toggle('fullscreen-mode');
  fullscreenToggle.classList.toggle('active', isFs);
  if (isFs) {
    document.body.classList.add('fullscreen');
  } else {
    document.body.classList.remove('fullscreen');
  }
};

// Map-selector feature
const mapSelect = document.getElementById('map-select');
const mapResult = document.getElementById('map-result');

const mapData = {
  "Carentan": {
    allies: { category: 'us', variation: 'United States Army' },
    axis:   { category: 'german', variation: 'German Army' }
  },
  "Driel": {
    allies: { category: 'british', variation: 'British Army' },
    axis:   { category: 'german', variation: 'German Army' }
  },
  "El Alamein": {
    allies: { category: 'british', variation: 'British Eighth Army' },
    axis:   { category: 'german', variation: 'German Africa Corps' }
  }
};

mapSelect.addEventListener('change', () => {
  const map = mapSelect.value;
  if (!mapData[map]) {
    mapResult.innerHTML = '';
    return;
  }
  const { allies, axis } = mapData[map];

  mapResult.innerHTML = `
    <p>This map is played by:</p>
    <div class="map-line">
      <span>ALLIES:</span>
      <button class="map-answer" data-cat="${allies.category}" data-var="${allies.variation}">
        ${allies.variation}
      </button>
    </div>
    <div class="map-line">
      <span>AXIS:</span>
      <button class="map-answer" data-cat="${axis.category}" data-var="${axis.variation}">
        ${axis.variation}
      </button>
    </div>
  `;

  document.querySelectorAll('.map-answer').forEach(btn => {
    btn.addEventListener('click', () => {
      categorySelect.value = btn.dataset.cat;
      updateVariations();
      setTimeout(() => {
        document.querySelectorAll('#variation-buttons button').forEach(vb => {
          if (vb.textContent === btn.dataset.var) vb.click();
        });
      }, 0);
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  categorySelect.value = 'german';
  updateVariations();
});









