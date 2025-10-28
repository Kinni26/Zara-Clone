const products = [
    {id: 1, name: "Elegant Watch", price: "$59.99", img: "watch.jpeg", desc: "A beautiful watch for all occasions."},
    {id: 2, name: "Stylish Boots", price: "$79.99", img: "boots2.jpeg", desc: "Comfortable and trendy heels."},
    {id: 3, name: "Leather Handbag", price: "$120.00", img: "bags2.jpg", desc: "Luxury leather handbag for daily use."},
    {id: 4, name: "Trendy Sunglasses", price: "$45.50", img: "sunglasses2.jpeg", desc: "Stylish sunglasses for sunny days."}
];

function openModal(id) {
    const product = products.find(p => p.id === id);

    // Create modal dynamically
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal(this)">&times;</span>
            <img src="${product.img}" alt="${product.name}" style="width:100%; margin-bottom: 15px;">
            <h2>${product.name}</h2>
            <p>${product.desc}</p>
            <p><strong>${product.price}</strong></p>
            <button class="btn">Add to Cart</button>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = "flex";
}

function closeModal(element) {
    element.closest('.modal').remove();
}