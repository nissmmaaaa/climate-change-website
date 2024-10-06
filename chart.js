// Smooth scroll functionality
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Chart.js for emissions growth graph
const emissionsCtx = document.getElementById('emissionsChart').getContext('2d');
const emissionsChart = new Chart(emissionsCtx, {
    type: 'line',
    data: {
        labels: ['1970', '1980', '1990', '2000', '2010', '2020'],
        datasets: [{
            label: 'CO₂ Emissions (in Gigatons)',
            data: [18, 21, 23, 27, 30, 33],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

// Chart.js for climate impact graph
const impactCtx = document.getElementById('impactChart').getContext('2d');
const impactChart = new Chart(impactCtx, {
    type: 'bar',
    data: {
        labels: ['Economic Loss', 'Biodiversity Loss', 'Temperature Rise'],
        datasets: [{
            label: 'Impact of Climate Change',
            data: [300, 200, 1.5], // Values are examples
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
