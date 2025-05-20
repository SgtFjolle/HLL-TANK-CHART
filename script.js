const imageMap = {
    german: {
        'German Army': 'german.jpg',
        'German Army Winter Camo': 'german_winter.jpg',
        'German Africa Corps': 'german_africa.jpg'
    },
    us: {
        'United States Army': 'us.jpg',
        'United States Army Winter Camo': 'us_winter.jpg'
    },
    soviet: {
        'Soviet Armed Forces': 'soviet.jpg'
    },
    british: {
        'British Army': 'british.jpg',
        'British Eighth Army': 'british_eighth.jpg'
    }
};

function updateVariations() {
    const category = document.getElementById('category').value;
    const buttonsContainer = document.getElementById('variation-buttons');
    const imageElement = document.getElementById('army-image');
    buttonsContainer.innerHTML = '';
    imageElement.src = '';

    if (!category || !imageMap[category]) return;

    Object.keys(imageMap[category]).forEach(variation => {
        const button = document.createElement('button');
        button.textContent = variation;
        button.onclick = () => {
            imageElement.src = imageMap[category][variation];
            imageElement.alt = variation;
        };
        buttonsContainer.appendChild(button);
    });
}
// Automatically load the first variation
if (Object.keys(imageMap[category]).length > 0) {
    const firstVariation = Object.keys(imageMap[category])[0];
    showImage(category, firstVariation);
}

// Automatically select German Army and its first variation on page load
window.onload = function() {
    categorySelect.value = 'german';
    updateVariations();
    // Select and trigger the first variation
    const buttons = variationButtons.querySelectorAll('button');
    if (buttons.length > 0) {
        buttons[0].click();
    }
};
