// Modal Functionality
function openModal(name, price, desc, imgSrc) {
    const modal = document.getElementById('modal');
    
    // Update Text
    document.getElementById('m-title').innerText = name;
    document.getElementById('m-price').innerText = price;
    document.getElementById('m-desc').innerText = desc;
    
    // Update Image
    const preview = document.querySelector('.modal-preview');
    preview.style.backgroundImage = `url('${imgSrc}')`;
    preview.style.backgroundSize = 'cover';
    preview.style.backgroundPosition = 'center';
    
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Simple Cart Interaction
let count = 0;
document.querySelector('.buy-btn').addEventListener('click', () => {
    count++;
    document.getElementById('cart-count').innerText = count;
    closeModal();
    alert("Added to Tactical Squad!");
});

// Close on outside click
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}

document.querySelectorAll('.poster-card').forEach(card => {
    card.addEventListener('click', () => {
        const name = card.querySelector('h3')?.innerText || 'Poster';
        const price = '$55';
        const desc = card.querySelector('p')?.innerText || '';
        const imgSrc = card.querySelector('img')?.src || '';

        openModal(name, price, desc, imgSrc);
    });
});
