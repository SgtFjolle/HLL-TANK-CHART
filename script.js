const armyImage = document.getElementById("army-image");
const variationButtons = document.getElementById("variation-buttons");
const factionButtons = document.querySelectorAll(".faction-buttons button");

const imageMap = {
    axis: {
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

const iconMap = {
    "German Army": "helmet.svg",
    "German Army Winter Camo": "snow.svg",
    "German Africa Corps": "desert.svg",
    "United States Army": "star.svg",
    "United States Army Winter Camo": "snow.svg",
    "Soviet Armed Forces": "star.svg",
    "British Army": "star.svg",
    "British Eighth Army": "desert.svg"
};

function showImage(category, variation) {
    armyImage.src = imageMap[category][variation];
    armyImage.alt = variation;

    // Highlight selected variation
    document.querySelectorAll("#variation-buttons button").forEach(btn =>
        btn.classList.remove("active")
    );
    const btns = document.querySelectorAll("#variation-buttons button");
    btns.forEach(btn => {
        if (btn.textContent.trim() === variation.trim()) {
            btn.classList.add("active");
        }
    });
}

function updateVariations(category) {
    variationButtons.innerHTML = "";

    if (!imageMap[category]) return;

    Object.keys(imageMap[category]).forEach(variation => {
        const button = document.createElement("button");
        button.innerHTML = `<img src="${iconMap[variation]}" alt=""> ${variation}`;
        button.onclick = () => showImage(category, variation);
        variationButtons.appendChild(button);
    });

    // Auto-load first variation
    const firstVariation = Object.keys(imageMap[category])[0];
    if (firstVariation) {
        showImage(category, firstVariation);
    }
}

factionButtons.forEach(button => {
    button.addEventListener("click", () => {
        factionButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.getAttribute("data-category");
        updateVariations(category);
    });
});

// Auto-load Axis (German Army)
window.onload = () => {
    const defaultBtn = document.querySelector('button[data-category="axis"]');
    defaultBtn.classList.add("active");
    updateVariations("axis");
};

