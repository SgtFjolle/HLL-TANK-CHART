const categorySelect = document.getElementById('category-select');
const variationButtons = document.getElementById('variation-buttons');
const armyImage = document.getElementById('army-image');

const imageMap = {
    axis: {
        "German Army": "german.jpg",
        "German Army Winter Camo": "german_winter.jpg",
        "German Africa Corps": "german_africa.jpg"
    },
    allies: {
        "United States Army": "us.jpg",
        "United States Army Winter Camo": "us_winter.jpg",
        "Soviet Armed Forces": "soviet.jpg",
        "British Army": "british.jpg",
        "British Eighth Army": "british_eighth.jpg"
    }
};

const variationIcons = {
    "German Army Winter Camo": "snowflake.svg",
    "German Africa Corps": "desert.svg",
    "United States Army Winter Camo": "snowflake.svg",
    "British Eighth Army": "desert.svg"
};

function updateVariations() {
    const selected = categorySelect.value;
    variationButtons.innerHTML = "";

    const categoryMap = selected === "axis" ? imageMap.axis : imageMap.allies;
    const addedVariations = new Set();

    for (const [variation, file] of Object.entries(categoryMap)) {
        if (addedVariations.has(variation)) continue;

        const button = document.createElement("button");
        button.className = "variation-button";
        button.onclick = () => showImage(selected, variation, button);

        if (variationIcons[variation]) {
            const icon = document.createElement("img");
            icon.src = variationIcons[variation];
            icon.alt = "icon";
            icon.className = "variation-icon";
            button.appendChild(icon);
        }

        const label = document.createElement("span");
        label.textContent = variation;
        button.appendChild(label);
        variationButtons.appendChild(button);

        addedVariations.add(variation);
    }

    // Auto-select first variation
    const firstButton = variationButtons.querySelector("button");
    if (firstButton) {
        firstButton.click();
    }
}

function showImage(categoryGroup, variation, clickedButton) {
    const file = imageMap[categoryGroup][variation];
    if (!file) return;

    armyImage.src = file;
    armyImage.alt = variation;

    // Highlight the active button
    document.querySelectorAll('.variation-button').forEach(btn => btn.classList.remove('active'));
    if (clickedButton) clickedButton.classList.add('active');
}

window.onload = () => {
    categorySelect.value = 'axis';
    updateVariations();
};


