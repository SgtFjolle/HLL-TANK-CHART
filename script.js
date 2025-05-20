const categorySelect = document.getElementById('category-select');
const variationButtons = document.getElementById('variation-buttons');
const armyImage = document.getElementById('army-image');
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

const imageMap = {
    german: {
        "German Army": { img: "german.jpg", icon: "🪖" },
        "German Army Winter Camo": { img: "german_winter.jpg", icon: snowflakeIcon() },
        "German Africa Corps": { img: "german_africa.jpg", icon: desertIcon() }
    },
    us: {
        "United States Army": { img: "us.jpg", icon: "🪖" },
        "United States Army Winter Camo": { img: "us_winter.jpg", icon: snowflakeIcon() }
    },
    soviet: {
        "Soviet Armed Forces": { img: "soviet.jpg", icon: starIcon() }
    },
    british: {
        "British Army": { img: "british.jpg", icon: "🪖" },
        "British Eighth Army": { img: "british_eighth.jpg", icon: desertIcon() }
    }
};

function updateVariations() {
    const category = categorySelect.value;
    variationButtons.innerHTML = "";

    if (!imageMap[category]) return;

    Object.entries(imageMap[category]).forEach(([variation, data], index) => {
        const button = document.createElement("button");
        button.className = "variation-button";
        button.innerHTML = `${data.icon} ${variation}`;
        button.onclick = () => {
            showImage(category, variation);
            highlightActiveButton(button);
        };
        variationButtons.appendChild(button);

        // Auto-select first
        if (index === 0) {
            showImage(category, variation);
            highlightActiveButton(button);
        }
    });
}

function showImage(category, variation) {
    const data = imageMap[category][variation];
    armyImage.src = data.img;
    armyImage.alt = variation;
}

function highlightActiveButton(activeBtn) {
    const buttons = document.querySelectorAll('.variation-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

// Mode toggle
modeToggle.onclick = () => {
    body.classList.toggle('light-mode');
};

// On page load
window.onload = function () {
    categorySelect.value = 'german';
    updateVariations();
};

// ICON DEFINITIONS
function snowflakeIcon() {
    return `
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0v24M0 12h24M4.2 4.2l15.6 15.6M4.2 19.8L19.8 4.2" stroke="currentColor" stroke-width="2"/>
    </svg>`;
}

function desertIcon() {
    return `
    <svg width="16" height="16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 52L24 32L36 52H12Z" fill="#C2B280"/>
        <path d="M32 52L44 32L56 52H32Z" fill="#C2B280"/>
    </svg>`;
}

function starIcon() {
    return `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l2.9 6.5L22 9.3l-5 4.9L18 22 12 18.2 6 22l1-7.8-5-4.9 7.1-0.8L12 2z"/>
    </svg>`;
}

