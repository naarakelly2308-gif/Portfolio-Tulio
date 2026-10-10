document.addEventListener("keydown", (event) => {
    if (
        event.key !== "End" &&
        event.code !== "End" &&
        event.keyCode !== 35
    ) {
        return;
    }

    if (
        event.repeat ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey
    ) {
        return;
    }

    const navigationLinks = Array.from(document.querySelectorAll(".site-nav a"));
    const currentIndex = navigationLinks.findIndex(
        (link) => link.getAttribute("aria-current") === "page"
    );

    if (currentIndex === -1 || navigationLinks.length === 0) {
        return;
    }

    event.preventDefault();
    const nextIndex = (currentIndex + 1) % navigationLinks.length;
    window.location.assign(navigationLinks[nextIndex].href);
}, true);
