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
