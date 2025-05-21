const categorySelect = document.getElementById('category-select');
const variationButtons = document.getElementById('variation-buttons');
const armyImage = document.getElementById('army-image');
const toggleThemeBtn = document.getElementById('toggle-theme');

const imageMap = {
    german: {
        "German Army": ["german.jpg", "helmet_icon_v1.png"],
        "German Army Winter Camo": ["german_winter.jpg", "snowflake.png"],
        "German Africa Corps": ["german_africa.jpg", "desert_no_sun.png"]
    },
    us: {
        "United States Army": ["us.jpg", "helmet_icon_v1.png"],
        "United States Army Winter Camo": ["us_winter.jpg", "snowflake.png"]
    },
    soviet: {
        "Soviet Armed Forces": ["soviet.jpg", "helmet_icon_v1.png"]
    },
    british: {
        "British Army": ["british.jpg", "helmet_icon_v1.png"],
        "British Eighth Army": ["british_eighth.jpg", "desert_no_sun.png"]
    }
};

let activeButton = null;

function updateVariations() {
    const category = categorySelect.value;
    variationButtons.innerHTML = "";

    const variations = imageMap[category];
    if (!variations) return;

    Object.entries(variations).forEach(([name, [imgSrc, iconSrc]]) => {
        const btn = document.createElement("button");
        const icon = document.createElement("img");
        icon.src = iconSrc;
        icon.alt = "";
        btn.appendChild(icon);
        btn.appendChild(document.createTextNode(name));
        btn.onclick = () => {
            showImage(category, name);
            setActiveButton(btn);
        };
        variationButtons.appendChild(btn);
    });

    // Auto-select first variation
    const firstKey = Object.keys(variations)[0];
    if (firstKey) {
        showImage(category, firstKey);
        setActiveButton(variationButtons.querySelector("button"));
    }
}

function showImage(category, variation) {
    const [src, _] = imageMap[category][variation];
    armyImage.src = src;
    armyImage.alt = variation;
}

function setActiveButton(button) {
    if (activeButton) {
        activeButton.classList.remove("active");
    }
    activeButton = button;
    activeButton.classList.add("active");
}

// Toggle dark/light mode
toggleThemeBtn.onclick = () => {
    document.body.classList.toggle('light-mode');
};

// Init on load
window.onload = () => {
    categorySelect.value = 'german';
    updateVariations();
};


