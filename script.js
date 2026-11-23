const price = 60;

function checkPrice() {
    if (price > 40) {
        return "Produkti eshte i shtrenjte";
    } else {
        return "Produkti ka cmim te mire";
    }
}

document.getElementById("blerje").addEventListener("click", function() {
    document.getElementById("message").textContent = checkPrice();
});