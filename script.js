// script.js for CrowdMeter | Maggie's live crowd simulation

// Simulated crowd values updater function
function updateCrowdCounts() {
    const maxValues = {
        library: 150,
        reading: 100,
        digital: 80,
        java: 50,
        canteen: 200,
        food: 120
    };

    for (let space in maxValues) {
        let count = Math.floor(Math.random() * maxValues[space]);
        document.getElementById(`${space}Count`).textContent = count;
        let percent = (count / maxValues[space]) * 100;
        document.getElementById(`${space}Bar`).style.width = `${percent}%`;
    }
}

// Update crowd counts on page load and every 5 seconds
updateCrowdCounts();
setInterval(updateCrowdCounts, 5000);
