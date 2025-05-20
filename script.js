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
        button.onclick = () => showImage(category, variation);
        variationButtons.appendChild(button);
    });

    // Auto-select the first variation
    const firstVariation = Object.keys(imageMap[category])[0];
    if (firstVariation) {
        showImage(category, firstVariation);
    }
}

function showImage(category, variation) {
    armyImage.src = imageMap[category][variation];
    armyImage.alt = variation;
}

// Auto-select German Army and its first variation on page load
window.onload = function () {
    categorySelect.value = 'german';
    updateVariations();

    // Optional double-click for safety (redundant trigger if first one misses)
    setTimeout(() => {
        const buttons = document.querySelectorAll('#variation-buttons button');
        if (buttons.length > 0) {
            buttons[0].click();
        }
    }, 50);
};
