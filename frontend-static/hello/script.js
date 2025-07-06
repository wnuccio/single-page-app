document.addEventListener("DOMContentLoaded", function() {
    var i = 0;
    const world = document.getElementById("world");
    var originalColor = world.style.color;
    world.addEventListener("mouseenter", function() {
        console.log("Mouse: " + i++);
        world.style.color = "red";
    });
    world.addEventListener("mouseleave", function() {
        world.style.color = originalColor;
    });
});
