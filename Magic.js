
const details = document.querySelectorAll("details");

details.forEach((item) => {
    item.addEventListener("click", function () {
        details.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.removeAttribute("open");
            }
        });
    });
});