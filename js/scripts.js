// Toggle Show More/Show Less
const toggleButton = document.getElementById('toggleClients');
const hiddenClients = document.querySelectorAll('.hidden-client');
let isShowingMore = false;

toggleButton.addEventListener('click', function() {
    isShowingMore = !isShowingMore;
    hiddenClients.forEach(client => {
        if (isShowingMore) {
            client.style.display = 'block';
            setTimeout(() => client.classList.add('show'), 10); // Adding 'show' class after display change
        } else {
            client.classList.remove('show');
            setTimeout(() => client.style.display = 'none', 500); // Remove display after transition
        }
    });
    toggleButton.querySelector('span').classList.toggle('up', isShowingMore);
    toggleButton.querySelector('span').textContent = isShowingMore ? '\u25B2' : '\u25BC'; // Panah atas atau bawah
});

// JavaScript for rotating text
const texts = [
    "<strong>IDMETAFORA</strong> Indonesia Teknologi is Information Technology Solutions specialist based in Central Java, Indonesia. Our technologies and systems is used to manage and integrate core business processes. Our Enterprise resource planning software offers single system solutions that integrate processes across the business.",
    "<strong>IDMETAFORA</strong> ",
    "<strong>IDMETAFORA</strong> Indonesia Teknologi specializes in IT solutions and services. Located in Central Java, Indonesia, our systems are designed to integrate and manage business processes effectively. Our ERP solutions deliver a unified platform to support your business needs."
];

let index = 0;

function rotateText() {
    const textElement = document.getElementById('rotatingText');
    index = (index + 1) % texts.length;
    textElement.innerHTML = texts[index];
}

// Rotate text every 5 seconds
setInterval(rotateText, 5000);
