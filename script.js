const categorySelect = document.getElementById('category-select');
const variationButtons = document.getElementById('variation-buttons');
const armyImage = document.getElementById('army-image');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const icons = {
    "helmet": '<svg class="icon" viewBox="0 0 64 64" fill="currentColor"><path d="M8 32c0-13.3 10.7-24 24-24s24 10.7 24 24v4H8v-4z"/></svg>',
    "snow": '<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.5 4h3L12 9l-4.5-3h3L12 2zm0 20l-1.5-4h-3L12 15l4.5 3h-3L12 22zm10-10l-4 1.5v3L15 12l3-4.5v3L22 12zm-20 0l4-1.5v-3L9 12l-3 4.5v-3L2 12zm16.24 6.24L15 15l1.24-3.24L18 15l-1.76 3.24zM5.76 5.76L9 9l-1.24 3.24L6 9l-1.76-3.24z"/></svg>',
    "desert": '<svg class="icon" viewBox="0 0 64 64" fill="currentColor"><path d="M16 48l8-24 8 24h-16zm24 0l8-24 8 24h-16z"/></svg>',
    "star": '<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.26 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>'
};

const imageMap = {
    german: {
        "German Army": { img: "german.jpg", icon: icons.helmet },
        "German Army Winter Camo": { img: "german_winter.jpg", icon: icons.snow },
        "German Africa Corps": { img: "german_africa.jpg", icon: icons.desert }
    },
    us: {
        "United States Army": { img: "us.jpg", icon: icons.helmet },
        "United States Army Winter Camo": { img: "us_winter.jpg", icon: icons.snow }
    },
    soviet: {
        "Soviet Armed Forces": { img: "soviet.jpg", icon: icons.star }
    },
    british: {
        "British Army": { img: "british.jpg", icon: icons.helmet },
        "British Eighth Army": { img: "british_eighth.jpg", icon: icons.desert }
    }
};

function updateVariations() {
    const category = categorySelect.value;
    variationButtons.innerHTML = "";

    const variations = imageMap[category];
    if (!variations) return;

    Object.keys(variations).forEach((variation, index) => {
        const button = document.createElement("button");
        button.innerHTML = variations[variation].icon + variation;
        button.onclick = () => {
            showImage(category, variation);
            setActiveButton(button);
        };
        variationButtons.appendChild(button);

        // Auto-load first variation
        if (index === 0) {
            showImage(category, variation);
            setActiveButton(button);
        }
    });
}

function showImage(category, variation) {
    const image = imageMap[category][variation];
    armyImage.src = image.img;
    armyImage.alt = variation;
}

function setActiveButton(activeButton) {
    document.querySelectorAll("#variation-buttons button").forEach(btn => {
        btn.classList.remove("active");
    });
    activeButton.classList.add("active");
}

// Theme toggle
themeToggle.onclick = () => {
    body.classList.toggle("light");
    body.classList.toggle("dark");
};

// On load
window.onload = () => {
    categorySelect.value = "german";
    updateVariations();
};

