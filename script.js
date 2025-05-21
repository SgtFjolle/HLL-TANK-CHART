const categorySelect = document.getElementById('category-select');
const variationButtons = document.getElementById('variation-buttons');
const armyImage = document.getElementById('army-image');
const toggleThemeBtn = document.getElementById('toggle-theme');

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

let activeButton = null;

function updateVariations() {
  const category = categorySelect.value;
  variationButtons.innerHTML = "";

  const variations = imageMap[category];
  if (!variations) return;

  Object.keys(variations).forEach(name => {
    const btn = document.createElement("button");
    btn.textContent = name;
    btn.onclick = () => {
      showImage(category, name);
      setActiveButton(btn);
    };
    variationButtons.appendChild(btn);
  });

  const firstKey = Object.keys(variations)[0];
  if (firstKey) {
    showImage(category, firstKey);
    setActiveButton(variationButtons.querySelector("button"));
  }
}

function showImage(category, variation) {
  armyImage.src = imageMap[category][variation];
  armyImage.alt = variation;
}

function setActiveButton(button) {
  if (activeButton) {
    activeButton.classList.remove("active");
  }
  activeButton = button;
  activeButton.classList.add("active");
}

toggleThemeBtn.onclick = () => {
  document.body.classList.toggle('light-mode');
  toggleThemeBtn.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
};

window.onload = () => {
  categorySelect.value = 'german';
  updateVariations();
};


