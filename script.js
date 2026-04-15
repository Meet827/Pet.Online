// ================= PET DATA =================
const pets = [
    {
        name: "Golden Retriever Puppy",
        price: "Rs 20000",
        image: "https://www.breednbreeder.com/Images/Golden_Retriever-Maharashtra-Pune-20250721_204701.png"
    },
    {
        name: "Persian Kitten",
        price: "Rs 5000",
        image: "https://preview.redd.it/do-persian-cats-shed-fur-during-summers-v0-lphcbaq01hfd1.jpeg?width=640&crop=smart&auto=webp&s=9c1ffe966376038149e38a0c2dfc665e988442df"
    },
    {
        name: "Green Indian Parrot",
        price: "Rs 2500/Couple",
        image: "https://i.dawn.com/large/2016/08/57b73d546cf35.jpg"
    },
    {
        name: "Beagle Dog",
        price: "₹17000",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Beagle_600.jpg"
    },
    {
        name: "Rottweiler Puppy",
        price: "₹25000",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Rottweiler_puppy_face.jpg"
    },
    {
        name: "Goldfish",
        price: "₹200",
        image: "https://img.freepik.com/premium-photo/elegance-pet-goldfish-gracefully-swimming-its-aquarium_505557-27464.jpg"
    },
    {
        name: "Betta Fish",
        price: "₹300",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2YrdL9O5uA_I7csQckf31RPjf-1eLQiFtXxXPFLILvV5i9cz23PeVu4Qr5rBgPSY_RKP6rHEu7Y9nhIR3MXF5QecoJqTkYFhK1ZGqe6DZ&s=10"
    },
    {
        name: "Hedgehog",
        price: "₹5000",
        image: "https://www.thesprucepets.com/thmb/Yu79mdSxOPWIV-snCkRljL-bMDA=/2075x0/filters:no_upscale():strip_icc()/GettyImages-626916125-5b3a4a8046e0fb00379f682d.jpg"
    },
    {
        name: "Sugar Glider",
        price: "₹8000",
        image: "https://d2zp5xs5cp8zlg.cloudfront.net/image-55903-800.jpg"
    }
];

// ================= PRODUCT DATA =================
const products = [
    {
        name: "Royal Canin Dog Food",
        price: "Rs 1200",
        image: "https://petsworld.in/cdn/shop/files/A00004BVNI_252Fimages_252F1654482668999S-RHEC.webp?v=1726912228"
    },
    {
        name: "Cat Toys",
        price: "Rs 999",
        image: "https://www.aplusapets.com/cdn/shop/files/183_1_1024x1024.jpg"
    },
    {
        name: "Bird Cage",
        price: "Rs 3000",
        image: "https://t3.ftcdn.net/jpg/05/22/76/90/240_F_522769035_eobu-SV7ZTXfSQVYjNfspqX1jzbvvgGI1.jpg"
    }
];

const petGrid = document.getElementById("petGrid");
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("search");
const homeSection = document.getElementById("home");

function displayPets(list) {
    petGrid.innerHTML = "";
    list.forEach(p => {
        petGrid.innerHTML += `
            <div class="pet-item">
                <img src="${p.image}">
                <h3>${p.name}</h3>
                <p>${p.price}</p>
            </div>
        `;
    });
}

function displayProducts(list) {
    productGrid.innerHTML = "";
    list.forEach(p => {
        productGrid.innerHTML += `
            <div class="product-item">
                <img src="${p.image}">
                <h3>${p.name}</h3>
                <p>${p.price}</p>
            </div>
        `;
    });
}

displayPets(pets);
displayProducts(products);

function performSearch() {
    let value = searchInput.value.toLowerCase().trim();

    const filteredPets = pets.filter(p =>
        (p.name + p.price).toLowerCase().includes(value)
    );

    const filteredProducts = products.filter(p =>
        (p.name + p.price).toLowerCase().includes(value)
    );

    displayPets(filteredPets);
    displayProducts(filteredProducts);

    if (value !== "") {
        homeSection.style.display = "none";
    } else {
        homeSection.style.display = "block";
    }
}

searchInput.addEventListener("input", performSearch);