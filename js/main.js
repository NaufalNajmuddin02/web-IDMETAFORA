// Function to change news text periodically
const newsTexts = [
    "IDMETAFORA Indonesia Teknologi is Information Technology Solutions specialist based in Central Java, Indonesia. Our technologies and systems is use to manage and integrate core business processes. Our Enterprise resource planning software offers single system solutions that integrate processes across the business.",
    "IDMETAFORA was running a ERP development company with expert team. Since we start the business, we were serving software development, we had clients from Java, Sumatera, Borneo, Sulawesi, and some clients from other countries in Asia, Australia, and Europe. We are one of the big web development company from Indonesia.",
    "With big dedication and passion in ERP development, we are rapid growth and always dynamic with the digital industry. We have a commitment to always bring the best result, the best services, and the best offering to every single IDMETAFORA Client."
];

let newsIndex = 0;
setInterval(() => {
    document.getElementById("news-text").textContent = newsTexts[newsIndex];
    newsIndex = (newsIndex + 1) % newsTexts.length;
}, 3000); // Change text every 3 seconds

// Function to toggle the visibility of the timeline content
function showContent(year) {
    const content = document.getElementById("content-" + year);
    content.style.display = content.style.display === "none" ? "block" : "none";
}
document.querySelectorAll('.timeline-btn').forEach(button => {
    button.addEventListener('click', () => {
        const year = button.getAttribute('data-year');
        
        // Sembunyikan semua konten berita
        document.querySelectorAll('.news-content').forEach(content => {
            content.style.display = 'none';
        });
        
        // Tampilkan berita yang sesuai
        document.getElementById('news-' + year).style.display = 'block';
        
        // Tambahkan efek grafik pada tombol yang di klik (opsional)
        document.querySelectorAll('.timeline-btn').forEach(btn => {
            btn.style.backgroundColor = '#f0f0f0';
            btn.style.color = 'black';
        });
        
        button.style.backgroundColor = '#007bff';
        button.style.color = 'white';
    });
});
