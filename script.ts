type Product = {
    name: string;
    price: number;
};

const product: Product = {
    name: "Atlete Adidas",
    price: 60
};

function checkPrice(price: number): string {
    if (price > 40) {
        return "I shtrenjte";
    } else {
        return "Cmim i mire";
    }
}
console.log(checkPrice(product.price));
export {};