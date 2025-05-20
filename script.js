const imageMap = {
    german: {
        'German Army': 'images/german.jpg',
        'German Army Winter Camo': 'images/german_winter.jpg',
        'German Africa Corps': 'images/german_africa.jpg'
    },
    us: {
        'United States Army': 'images/us.jpg',
        'United States Army Winter Camo': 'images/us_winter.jpg'
    },
    soviet: {
        'Soviet Armed Forces': 'images/soviet.jpg'
    },
    british: {
        'British Army': 'images/british.jpg',
        'British Eighth Army': 'images/british_eighth.jpg'
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
