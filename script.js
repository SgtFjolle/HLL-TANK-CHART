const categorySelect = document.getElementById("category-select");
const variationButtons = document.getElementById("variation-buttons");
const armyImage = document.getElementById("army-image");

const imageMap = {
    axis: {
        "German Army": { file: "german.jpg", icon: "helmet.svg" },
        "German Army Winter Camo": { file: "german_winter.jpg", icon: "snow.svg" },
        "German Africa Corps": { file: "german_africa.jpg", icon: "desert.svg" }
    },
    allies_us: {
        "United States Army": { file: "us.jpg", icon: "helmet.svg" },
        "United States Army Winter Camo": { file: "us_winter.jpg", icon: "snow.svg" }
    },
    allies_soviet: {
        "Soviet Armed Forces": { file: "soviet.jpg", icon: "star.svg" }
    },
    allies_british: {
        "British Army": { file: "british.jpg", icon: "helmet.svg" },
        "British Eighth Army": { file: "british_eighth.jpg", icon: "desert.svg" }
    }
};

// Theme toggle
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    const icon = document.querySelector(".theme-toggle");
    icon.textContent = body.classList.contains("dark-mode") ? "🌙" : "☀️";
}

function updateVariations() {
    const category = categorySelect.value;
    variationButtons.innerHTML = "";

    if (!imageMap[category]) return;

    Object.keys(imageMap[category]).forEach((variationName, index) => {
        const variation = imageMap[category][variationName];
        const button = document.createElement("button");
        button.className = "variation-btn";
        button.innerHTML = `<img src="${variation.icon}" alt="">${variationName}`;
        button.onclick = () => {
            showImage(category, variationName);
            document.querySelectorAll('.variation-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        };
        variationButtons.appendChild(button);

        if (index === 0) {
            showImage(category, variationName);
            button.classList.add("active");
        }
    });
}

function showImage(category, variationName) {
    const imageInfo = imageMap[category][variationName];
    armyImage.style.opacity = 0;
    setTimeout(() => {
        armyImage.src = imageInfo.file;
        armyImage.alt = variationName;
        armyImage.style.opacity = 1;
    }, 200);
}

// Load initial category
window.onload = function () {
    categorySelect.value = "axis";
    updateVariations();
};


