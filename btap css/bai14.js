document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("banner-title");

    banner.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "#14532d";
    });

    banner.addEventListener("mouseleave", function() {
        this.style.backgroundColor = "#198754";
    });

    const images = document.querySelectorAll(".wonder-image");

    images.forEach(function(img) {
        img.addEventListener("click", function() {
            let title = this.closest(".wonder-card").querySelector(".wonder-title").innerText;
            alert("Bạn đã chọn kỳ quan: " + title);
        });
    });
});