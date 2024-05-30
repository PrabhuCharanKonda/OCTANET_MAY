document.getElementById("home").addEventListener("click", function() {
    showContent("home-content");
});

document.getElementById("about").addEventListener("click", function() {
    showContent("about-content");
});

document.getElementById("contact").addEventListener("click", function() {
    showContent("contact-content");
});

function showContent(id) {
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}
