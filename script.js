function goToThoughts() {
    document.getElementById("thoughts").scrollIntoView({
        behavior: "smooth"
    });
}
const thoughts = document.querySelectorAll(".thought");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

thoughts.forEach((thought) => {
    observer.observe(thought);
})