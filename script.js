const categorySelect = document.getElementById('category-select');
const variationButtons = document.getElementById('variation-buttons');
const armyImage = document.getElementById('army-image');
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

const imageMap = {
  german: {
    "German Army": { file: "german.jpg", icon: "helmet.svg" },
    "German Army Winter Camo": { file: "german_winter.jpg", icon: "snowflake.svg" },
    "German Africa Corps": { file: "german_africa.jpg", icon: "pyramids.svg" }
  },
  us: {
    "United States Army": { file: "us.jpg", icon: "helmet.svg" },
    "United States Army Winter Camo": { file: "us_winter.jpg", icon: "snowflake.svg" }
  },
  soviet: {
    "Soviet Armed Forces": { file: "soviet.jpg", icon: "star.svg" }
  },
  british: {
    "British Army": { file: "british.jpg", icon: "helmet.svg" },
    "British Eighth Army": { file: "british_eighth.jpg", icon: "pyramids.svg" }
  }
};

function updateVariations() {
  const category = categorySelect.value;
  variationButtons.innerHTML = "";

  if (!imageMap[category]) return;

  Object.entries(imageMap[category]).forEach(([variation, data], index) => {
    const button = document.createElement("button");
    const icon = document.createElement("img");
    icon.src = data.icon;
    icon.alt = "";
    icon.width = 20;
    icon.height = 20;

    button.appendChild(icon);
    button.appendChild(document.createTextNode(variation));

    button.onclick = () => {
      showImage(category, variation);
      setActiveButton(button);
    };

    variationButtons.appendChild(button);

    if (index === 0) {
      button.click();
    }
  });
}

function showImage(category, variation) {
  const data = imageMap[category][variation];
  armyImage.style.opacity = 0;
  setTimeout(() => {
    armyImage.src = data.file;
    armyImage.alt = variation;
    armyImage.style.opacity = 1;
  }, 200);
}

function setActiveButton(activeBtn) {
  document.querySelectorAll("#variation-buttons button").forEach(btn => {
    btn.classList.remove("active");
  });
  activeBtn.classList.add("active");
}

// Light/Dark Mode Toggle
modeToggle.onclick = () => {
  body.classList.toggle("light-mode");
};

// Auto-load AXIS – Germany on page load
window.onload = () => {
  categorySelect.value = "german";
  updateVariations();
};

