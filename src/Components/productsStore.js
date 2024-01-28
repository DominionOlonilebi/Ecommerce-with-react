// solar: price_1OdRTzIdhXNqxJIIz5ZoQ5II
// solar panel: price_1OdRWTIdhXNqxJII97PuQDix
// Battery: price_1OdRZBIdhXNqxJIIrKmVzdlY

const productsArray = [ 
  
        {
            id: "price_1OdRTzIdhXNqxJIIz5ZoQ5II",
            Title: "solar",
            SubTitle: "2 Kva 12 Hours Availability", 
            Price: 4.99,
            Cost: "50k monthly price",
            Img: "./Images/sol7.png",
            Name: "Specifications",
            Logo: "Images/sol logos.png",
            Amount: "₦5,666.00 • Lease to own plan",
            Note: "it can power bla bla bla just checking if it will upload thank you",
        },
        {
            id: "price_1OdRWTIdhXNqxJII97PuQDix",
            Title: "solar panel",
            SubTitle: "2 Kva 12 Hours Availability", 
            Price: 9.99,
            Cost: "50k monthly price",
            Img: "./Images/sol7.png",
            Name: "Specifications",
            Logo: "Images/sol logos.png",
            Amount: "₦5,666.00 • Lease to own plan",
            Note: "it can power bla bla bla just checking if it will upload thank you",
        },
        {
            id: "price_1OdRZBIdhXNqxJIIrKmVzdlY",
            Title: "Battery",
            SubTitle: "2 Kva 12 Hours Availability", 
            Price: 39.99,
            Cost: "50k monthly price",
            Img: "./Images/sol7.png",
            Name: "Specifications",
            Logo: "Images/sol logos.png",
            Amount: "₦5,666.00 • Lease to own plan",
            Note: "it can power bla bla bla just checking if it will upload thank you",
        },
        {
            id: "price_1OdRWTIdhXNqxJII97PuQDix",
            Title: "solar panel",
            SubTitle: "2 Kva 12 Hours Availability", 
            Price: 9.99,
            Cost: "50k monthly price",
            Img: "./Images/sol7.png",
            Name: "Specifications",
            Logo: "Images/sol logos.png",
            Amount: "₦5,666.00 • Lease to own plan",
            Note: "it can power bla bla bla just checking if it will upload thank you",
        },
        {
            id: "price_1OdRZBIdhXNqxJIIrKmVzdlY",
            Title: "Battery",
            SubTitle: "2 Kva 12 Hours Availability", 
            Price: 39.99,
            Cost: "50k monthly price",
            Img: "./Images/sol7.png",
            Name: "Specifications",
            Logo: "Images/sol logos.png",
            Amount: "₦5,666.00 • Lease to own plan",
            Note: "it can power bla bla bla just checking if it will upload thank you",
        },
        {
            id: "price_1OdRTzIdhXNqxJIIz5ZoQ5II",
            Title: "solar",
            SubTitle: "2 Kva 12 Hours Availability", 
            Price: 4.99,
            Cost: "50k monthly price",
            Img: "./Images/sol7.png",
            Name: "Specifications",
            Logo: "Images/sol logos.png",
            Amount: "₦5,666.00 • Lease to own plan",
            Note: "it can power bla bla bla just checking if it will upload thank you",
        },
        {
            id: "price_1OdRZBIdhXNqxJIIrKmVzdlY",
            Title: "Battery",
            SubTitle: "2 Kva 12 Hours Availability", 
            Price: 39.99,
            Cost: "50k monthly price",
            Img: "./Images/sol7.png",
            Name: "Specifications",
            Logo: "Images/sol logos.png",
            Amount: "₦5,666.00 • Lease to own plan",
            Note: "it can power bla bla bla just checking if it will upload thank you",
        },
        {
            id: "price_1OdRTzIdhXNqxJIIz5ZoQ5II",
            Title: "solar",
            SubTitle: "2 Kva 12 Hours Availability", 
            Price: 4.99,
            Cost: "50k monthly price",
            Img: "./Images/sol7.png",
            Name: "Specifications",
            Logo: "Images/sol logos.png",
            Amount: "₦5,666.00 • Lease to own plan",
            Note: "it can power bla bla bla just checking if it will upload thank you",
        },
        {
            id: "price_1OdRTzIdhXNqxJIIz5ZoQ5II",
            Title: "solar",
            SubTitle: "2 Kva 12 Hours Availability", 
            Price: 4.99,
            Cost: "50k monthly price",
            Img: "./Images/sol7.png",
            Name: "Specifications",
            Logo: "Images/sol logos.png",
            Amount: "₦5,666.00 • Lease to own plan",
            Note: "it can power bla bla bla just checking if it will upload thank you",
        },
        {
            id: "price_1OdRWTIdhXNqxJII97PuQDix",
            Title: "solar panel",
            SubTitle: "2 Kva 12 Hours Availability", 
            Price: 9.99,
            Cost: "50k monthly price",
            Img: "./Images/sol7.png",
            Name: "Specifications",
            Logo: "Images/sol logos.png",
            Amount: "₦5,666.00 • Lease to own plan",
            Note: "it can power bla bla bla just checking if it will upload thank you",
        },
        
    
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };