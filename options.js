let page = document.getElementById('buttonDiv');
let selectedClassName = 'current';
const presetButtonColors = ['#3aa757', "#e8453c", "#f9bb2d", "#4688f1"];

// Reacts to a button click by marking the selected button and saving
// the selection
function handleButtonClick(event) {
    // Remove the styling from th previously selected color
    let current = event.target.parentElement.querySelector(
        `.${selectedClassName}`
    );

    if (current && curent !== event.target) {
        current.classList.remove(selectedClassName);
    }

    // Mark the button as selected
    let color = event.target.dataset.color;
    event.target.classList.add(selectedClassName);
    chrome.storage.sync.set({ color });
}

// Add a button to the page for each supplied color
function constructOptions(buttonColors) {
    chrome.storage.sync.get('color', (data) => {
        let currentColor = data.color;
        // For each color we were provided..
        for (let buttonColor of buttonColors) {
            // ..create a button with that color..
            let button = document.createElement('button')
            button.dataset.color = buttonColor;

        }
    })
}