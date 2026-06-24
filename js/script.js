document.addEventListener("DOMContentLoaded", () => {
    // Fade-in
    document.body.classList.add("loaded");

    // Efek transisi antar halaman
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function(e) {

            if (this.hostname === window.location.hostname &&
                this.getAttribute("target") !== "_blank") {

                e.preventDefault();

                const targetUrl = this.href;

                // Fade-out
                document.body.classList.remove("loaded");

                // Tunggu animasi selesai
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 500);
            }
        });
    });
});