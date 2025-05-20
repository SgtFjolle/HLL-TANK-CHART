const categorySelect = document.getElementById('category-select');
const variationButtons = document.getElementById('variation-buttons');
const armyImage = document.getElementById('army-image');

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

function updateVariations() {
    const category = categorySelect.value;
    variationButtons.innerHTML = "";

    if (!imageMap[category]) return;

    Object.keys(imageMap[category]).forEach(variation => {
        const button = document.createElement("button");
        button.textContent = variation;
        button.onclick = () => showImage(category, variation, button);
        variationButtons.appendChild(button);
    });

    // Auto-select first
    const firstVariation = Object.keys(imageMap[category])[0];
    const firstButton = variationButtons.querySelector("button");
    if (firstVariation && firstButton) {
        showImage(category, firstVariation, firstButton);
    }
}

function showImage(category, variation, clickedButton) {
    document.querySelectorAll("#variation-buttons button").forEach(btn => {
        btn.classList.remove("active");
    });
    if (clickedButton) clickedButton.classList.add("active");

    armyImage.classList.remove("loaded");
    armyImage.src = imageMap[category][variation];
    armyImage.alt = variation;
    armyImage.onload = () => {
        armyImage.classList.add("loaded");
    };
}

window.onload = function () {
    categorySelect.value = 'german';
    updateVariations();
};
