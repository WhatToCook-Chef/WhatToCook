document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("home-btn").addEventListener("click", function() {
        loadContent("home");
    });

    document.getElementById("history-btn").addEventListener("click", function() {
        loadContent("history");
    });

    document.getElementById("calendar-btn").addEventListener("click", function() {
        loadContent("calendar");
    });
});

function loadContent(page) {
    let content = document.getElementById("content");

    if (page === "home") {
        content.innerHTML = "<h2>Főoldal</h2><p>Itt találhatók az ételek és az étkezési napló.</p>";
    } else if (page === "history") {
        content.innerHTML = "<h2>Korábbi étkezések</h2><p>Itt láthatod, mikor etted az adott ételt.</p>";
    } else if (page === "calendar") {
        content.innerHTML = "<h2>Étkezési naptár</h2><p>Tervezd meg az étkezéseidet a naptár segítségével.</p>";
    }
}
