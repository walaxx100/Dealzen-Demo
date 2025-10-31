const INVENTORY = [
    {
        name: "Mouse Gamer Logitech G Pro X Superlight",
        image: "images/mouse_gamer_pro_x.jpg",
        prices: {
            "Zona Digital": { price: 44.00, url: "https://www.zonadigitalsv.com/", history: [44.00, 45.00, 43.00, 44.50, 45.00] },
            "Intelmax": { price: 45.99, url: "https://tiendaintelmax.net/", history: [45.99, 46.00, 45.50, 44.00, 43.50] },
            "Radioshack": { price: 46.50, url: "https://www.radioshackla.com/elsalvador/", history: [46.50, 47.00, 45.50, 46.00, 46.00] },
            "Siman": { price: 48.00, url: "https://www.siman.com/", history: [48.00, 49.00, 47.50, 48.50, 49.00] },
            "Office Depot": { price: 43.99, url: "https://www.officedepot.com.sv/", history: [43.99, 44.50, 43.00, 42.50, 42.00] }
        }
    },
    {
        name: "Mouse Gamer Ryzen",
        image: "images/mouse_ryzen.jpg",
        prices: {
            "AEON": { price: 33.50, url: "https://aeon.com.sv/", history: [33.50, 34.00, 32.00, 31.00, 33.00] },
            "Intelmax": { price: 31.99, url: "https://tiendaintelmax.net/", history: [31.99, 31.00, 32.50, 30.50, 29.00] },
            "Siman": { price: 34.00, url: "https://www.siman.com/", history: [34.00, 35.00, 33.00, 34.50, 35.00] }
        }
    },
    {
        name: "Mouse Inalámbrico Logitech M170",
        image: "images/mouse_m170.jpg",
        prices: {
            "Zona Digital": { price: 18.50, url: "https://www.zonadigitalsv.com/", history: [18.50, 19.00, 17.50, 18.00, 17.00] },
            "AEON": { price: 20.00, url: "https://aeon.com.sv/", history: [20.00, 21.00, 19.00, 18.50, 19.50] },
            "Radioshack": { price: 18.25, url: "https://www.radioshackla.com/elsalvador/", history: [18.25, 18.50, 17.75, 18.00, 18.00] }
        }
    },
    {
        name: "Teclado Mecánico Corsair K60 RGB Pro",
        image: "images/teclado_rgb_v2.jpg",
        prices: {
            "Zona Digital": { price: 79.99, url: "https://www.zonadigitalsv.com/", history: [79.99, 90.50, 88.00, 91.00, 92.00] },
            "AEON": { price: 92.00, url: "https://aeon.com.sv/", history: [92.00, 93.00, 91.50, 90.00, 89.00] },
            "Intelmax": { price: 87.50, url: "https://tiendaintelmax.net/", history: [87.50, 86.00, 87.00, 85.00, 84.00] },
            "Radioshack": { price: 90.00, url: "https://www.radioshackla.com/elsalvador/", history: [90.00, 91.00, 89.50, 90.50, 90.00] },
            "Siman": { price: 85.00, url: "https://www.siman.com/", history: [85.00, 86.00, 84.50, 85.50, 86.00] }
        }
    },
    {
        name: "Teclado Mecánico Redragon Kumara K552 RGB",
        image: "images/teclado_redragon.jpg",
        prices: {
            "Zona Digital": { price: 49.99, url: "https://www.zonadigitalsv.com/", history: [49.99, 51.00, 48.00, 47.50, 50.00] },
            "AEON": { price: 52.00, url: "https://aeon.com.sv/", history: [52.00, 53.00, 51.00, 50.00, 49.00] },
            "Intelmax": { price: 47.99, url: "https://tiendaintelmax.net/", history: [47.99, 48.50, 47.00, 46.00, 45.50] },
            "Radioshack": { price: 50.50, url: "https://www.radioshackla.com/elsalvador/", history: [50.50, 51.00, 49.50, 50.00, 50.00] }
        }
    },
    {
        name: "Combo Teclado y Mouse HP Inalámbrico 230",
        image: "images/combo_hp.jpg",
        prices: {
            "Zona Digital": { price: 35.00, url: "https://www.zonadigitalsv.com/", history: [35.00, 36.00, 34.00, 33.00, 34.50] },
            "Intelmax": { price: 33.99, url: "https://tiendaintelmax.net/", history: [33.99, 34.50, 33.00, 32.00, 31.50] }
        }
    },
    {
        name: "Monitor Gamer Curvo Samsung Odyssey G5 27'",
        image: "images/monitor_curvo.jpg",
        prices: {
            "Zona Digital": { price: 299.00, url: "https://www.zonadigitalsv.com/", history: [299.00, 305.00, 290.00, 295.00, 300.00] },
            "AEON": { price: 250.00, url: "https://aeon.com.sv/", history: [250.00, 315.00, 308.00, 300.00, 298.00] },
            "Intelmax": { price: 285.00, url: "https://tiendaintelmax.net/", history: [285.00, 280.00, 288.00, 290.00, 282.00] },
            "Office Depot": { price: 310.00, url: "https://www.officedepot.com.sv/", history: [310.00, 315.00, 300.00, 305.00, 308.00] }
        }
    },
    {
        name: "Monitor ASUS TUF Gaming VG249Q 24'' 144Hz",
        image: "images/monitor_asus_vg249q.jpg",
        prices: {
            "Zona Digital": { price: 189.00, url: "https://www.zonadigitalsv.com/", history: [189.00, 190.00, 188.00, 187.00, 186.00] },
            "AEON": { price: 195.00, url: "https://aeon.com.sv/", history: [195.00, 198.00, 192.00, 191.00, 190.00] },
            "Siman": { price: 200.00, url: "https://www.siman.com/", history: [200.00, 202.00, 198.00, 199.00, 201.00] },
            "Office Depot": { price: 185.00, url: "https://www.officedepot.com.sv/", history: [185.00, 186.00, 184.00, 183.00, 182.00] }
        }
    },
    {
        name: "Memoria RAM Corsair Vengeance LPX 16GB DDR4 3200MHz",
        image: "images/memoria_ram_16gb.jpg",
        prices: {
            "Zona Digital": { price: 42.99, url: "https://www.zonadigitalsv.com/", history: [42.99, 45.00, 43.50, 41.00, 40.50] },
            "AEON": { price: 40.99, url: "https://aeon.com.sv/", history: [40.99, 42.00, 41.50, 40.00, 39.50] },
            "Intelmax": { price: 43.00, url: "https://tiendaintelmax.net/", history: [43.00, 42.50, 44.00, 41.00, 40.50] }
        }
    },
    {
        name: "Memoria RAM Kingston Fury Beast 8GB DDR4 3200MHz",
        image: "images/ram_kingston_fury.jpg",
        prices: {
            "AEON": { price: 26.99, url: "https://aeon.com.sv/", history: [26.99, 28.00, 27.50, 26.00, 25.50] },
            "Intelmax": { price: 24.99, url: "https://tiendaintelmax.net/", history: [24.99, 25.00, 23.50, 23.00, 24.00] },
            "Radioshack": { price: 25.25, url: "https://www.radioshackla.com/elsalvador/", history: [25.25, 26.00, 24.50, 25.00, 25.00] },
            "Siman": { price: 27.00, url: "https://www.siman.com/", history: [27.00, 28.00, 26.50, 27.50, 28.00] }
        }
    },
    {
        name: "Procesador Intel Core i5-12400F 12va Generación",
        image: "images/procesador_i5_12400f.png",
        prices: {
            "Zona Digital": { price: 189.00, url: "https://www.zonadigitalsv.com/", history: [189.00, 192.00, 185.00, 188.00, 187.50] },
            "AEON": { price: 182.00, url: "https://aeon.com.sv/", history: [182.00, 183.00, 181.00, 180.00, 179.00] },
            "Intelmax": { price: 185.00, url: "https://tiendaintelmax.net/", history: [185.00, 184.00, 186.00, 182.50, 181.00] }
        }
    },
    {
        name: "Procesador AMD Ryzen 5 5600G con Gráficos Integrados",
        image: "images/procesador_ryzen_5600g.jpg",
        prices: {
            "Zona Digital": { price: 168.00, url: "https://www.zonadigitalsv.com/", history: [168.00, 170.00, 166.00, 165.00, 164.00] },
            "AEON": { price: 172.00, url: "https://aeon.com.sv/", history: [172.00, 173.50, 171.00, 170.00, 169.00] },
            "Intelmax": { price: 166.99, url: "https://tiendaintelmax.net/", history: [166.99, 167.00, 165.50, 164.00, 163.50] }
        }
    },
    {
        name: "Motherboard ASUS Prime B660M-A DDR4",
        image: "images/motherboard_b660m.jpg",
        prices: {
            "Zona Digital": { price: 121.99, url: "https://www.zonadigitalsv.com/", history: [121.99, 125.00, 123.00, 122.00, 121.00] },
            "AEON": { price: 138.50, url: "https://aeon.com.sv/", history: [138.50, 140.00, 136.00, 135.00, 134.00] },
            "Intelmax": { price: 129.00, url: "https://tiendaintelmax.net/", history: [129.00, 130.00, 128.50, 127.00, 126.50] }
        }
    },
    {
        name: "Motherboard MSI B550M PRO-VDH WiFi AM4",
        image: "images/motherboard_b550m.jpg",
        prices: {
            "Zona Digital": { price: 139.00, url: "https://www.zonadigitalsv.com/", history: [139.00, 142.00, 138.00, 137.00, 136.50] },
            "AEON": { price: 145.00, url: "https://aeon.com.sv/", history: [145.00, 147.00, 144.00, 143.00, 142.00] },
            "Intelmax": { price: 133.99, url: "https://tiendaintelmax.net/", history: [133.99, 134.50, 132.00, 131.00, 130.00] },
            "Radioshack": { price: 137.50, url: "https://www.radioshackla.com/elsalvador/", history: [137.50, 138.00, 136.50, 137.00, 137.00] }
        }
    },
    {
        name: "Fuente de Poder EVGA 650W 80+ Bronze",
        image: "images/fuente_poder_650w.png",
        prices: {
            "Zona Digital": { price: 69.99, url: "https://www.zonadigitalsv.com/", history: [69.99, 72.00, 70.00, 68.00, 67.50] },
            "AEON": { price: 68.50, url: "https://aeon.com.sv/", history: [68.50, 69.00, 67.50, 66.00, 65.50] },
            "Intelmax": { price: 70.00, url: "https://tiendaintelmax.net/", history: [70.00, 69.00, 71.00, 68.00, 67.00] },
            "Radioshack": { price: 69.00, url: "https://www.radioshackla.com/elsalvador/", history: [69.00, 70.00, 68.50, 69.50, 69.00] }
        }
    },
    {
        name: "Fuente de Poder Corsair CV550 80+ Bronze 550W",
        image: "images/fuente_poder_cv550.png",
        prices: {
            "Zona Digital": { price: 59.99, url: "https://www.zonadigitalsv.com/", history: [59.99, 60.50, 58.00, 57.50, 56.50] },
            "AEON": { price: 62.00, url: "https://aeon.com.sv/", history: [62.00, 63.00, 60.00, 59.00, 58.50] },
            "Intelmax": { price: 57.99, url: "https://tiendaintelmax.net/", history: [57.99, 58.50, 57.00, 56.00, 55.50] },
            "Office Depot": { price: 61.50, url: "https://www.officedepot.com.sv/", history: [61.50, 62.00, 60.50, 61.00, 61.50] }
        }
    },
    {
        name: "Disco SSD NVMe Kingston NV2 1TB Gen3",
        image: "images/ssd_nvme_1tb.jpg",
        prices: {
            "Zona Digital": { price: 79.00, url: "https://www.zonadigitalsv.com/", history: [79.00, 81.00, 77.00, 76.50, 78.00] },
            "AEON": { price: 83.00, url: "https://aeon.com.sv/", history: [83.00, 84.50, 82.00, 80.50, 81.00] },
            "Intelmax": { price: 73.99, url: "https://tiendaintelmax.net/", history: [73.99, 74.50, 72.00, 71.00, 70.50] },
            "Siman": { price: 85.00, url: "https://www.siman.com/", history: [85.00, 86.00, 84.00, 83.50, 84.50] }
        }
    },
    {
        name: "Disco SSD SATA Crucial MX500 500GB",
        image: "images/ssd_crucial_mx500.jpg",
        prices: {
            "Zona Digital": { price: 52.00, url: "https://www.zonadigitalsv.com/", history: [52.00, 53.50, 51.00, 50.00, 49.50] },
            "AEON": { price: 54.00, url: "https://aeon.com.sv/", history: [54.00, 55.00, 53.00, 52.50, 52.00] },
            "Intelmax": { price: 50.99, url: "https://tiendaintelmax.net/", history: [50.99, 51.50, 50.00, 49.00, 48.50] },
            "Radioshack": { price: 51.50, url: "https://www.radioshackla.com/elsalvador/", history: [51.50, 52.00, 50.50, 51.00, 51.50] },
            "Office Depot": { price: 53.00, url: "https://www.officedepot.com.sv/", history: [53.00, 54.00, 52.00, 52.50, 53.00] }
        }
    },
    {
        name: "Tarjeta Gráfica GPU NVIDIA GeForce RTX 4090 ASUS TUF Gaming 24GB",
        image: "images/gpu_rtx_4090.jpg",
        prices: {
            "Zona Digital": { price: 2599.00, url: "https://www.zonadigitalsv.com/", history: [2599.00, 2650.00, 2550.00, 2580.00, 2600.00] },
            "AEON": { price: 2489.00, url: "https://aeon.com.sv/", history: [2489.00, 2500.00, 2470.00, 2460.00, 2445.00] },
            "Intelmax": { price: 2630.00, url: "https://tiendaintelmax.net/", history: [2630.00, 2620.00, 2610.00, 2600.00, 2590.00] }
        }
    },
    {
        name: "Tarjeta Gráfica GPU NVIDIA GeForce RTX 4070 MSI Ventus 3X 12GB",
        image: "images/gpu_rtx_4070.jpg",
        prices: {
            "Zona Digital": { price: 999.00, url: "https://www.zonadigitalsv.com/", history: [999.00, 1010.00, 985.00, 995.00, 1000.00] },
            "AEON": { price: 965.00, url: "https://aeon.com.sv/", history: [965.00, 970.00, 955.00, 950.00, 945.00] },
            "Intelmax": { price: 975.00, url: "https://tiendaintelmax.net/", history: [975.00, 978.00, 972.00, 970.00, 965.00] },
            "Radioshack": { price: 980.00, url: "https://www.radioshackla.com/elsalvador/", history: [980.00, 985.00, 975.00, 978.00, 980.00] }
        }
    }

];


const STORES = {
    "Zona Digital": {
        logo: "icons/zona_logo.png",
        color: 'rgba(18, 52, 177, 1)',
        features: {
            delivery: true,
            cards: true,
            warranty: true
        }
    },
    "AEON": {
        logo: "icons/aeon_logo.png",
        color: 'rgb(75, 192, 192)',
        features: {
            delivery: false,
            cards: true,
            warranty: true
        }
    },
    "Intelmax": {
        logo: "icons/intelmax_logo.png",
        color: 'rgb(153, 102, 255)',
        features: {
            delivery: true,
            cards: false,
            warranty: true
        }
    },
    "Radioshack": {
        logo: "icons/radioshack_logo.png",
        color: 'rgba(42, 34, 34, 1)',
        features: {
            delivery: true,
            cards: false,
            warranty: true
        }
    },
    "Siman": {
        logo: "icons/siman_logo.png",
        color: 'rgba(177, 66, 66, 1)',
        features: {
            delivery: true,
            cards: false,
            warranty: true
        }
    },
    "Office Depot": {
        logo: "icons/office_depot_logo.png",
        color: 'rgba(219, 81, 12, 1)',
        features: {
            delivery: true,
            cards: true,
            warranty: true
        }
    }
};

const WEEKS = ["Semana 5", "Semana 4", "Semana 3", "Semana 2", "Actual"];

let priceChart = null;
let chartWrapper = null;
let productHeaderContainer = null;
let resultsContainer = null;
let foundProducts = [];
let currentProductIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    chartWrapper = document.getElementById('chart-wrapper');
    productHeaderContainer = document.getElementById('product-header-container');
    resultsContainer = document.getElementById('results-container');

    document.getElementById('search-button').addEventListener('click', performSearch);
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    document.querySelector('.logo').addEventListener('click', resetAppUI);
});


function performSearch() {
    const inputElement = document.getElementById('search-input');
    const query = inputElement.value.toLowerCase().trim();
    
    resultsContainer.innerHTML = '';
    productHeaderContainer.innerHTML = '';

    if (query.length < 3) {
        resultsContainer.innerHTML = '<p class="placeholder-text">Por favor, ingresa al menos 3 caracteres para buscar.</p>';
        clearChart(); 
        return; 
    }

    foundProducts = INVENTORY.filter(item => item.name.toLowerCase().includes(query));

    if (foundProducts.length > 0) {
        currentProductIndex = 0;
        displayProduct(currentProductIndex);
    } else {
        resultsContainer.innerHTML = '<p class="placeholder-text">No se encontraron resultados para su búsqueda.</p>';
        clearChart();
    }
}

function displayProduct(index) {
    const product = foundProducts[index];
    if (!product) return;

    chartWrapper.style.display = 'block';
    resultsContainer.innerHTML = ''; // Limpiar resultados anteriores

    // Construir el HTML para el encabezado del producto con flechas
    const showArrows = foundProducts.length > 1;
    productHeaderContainer.innerHTML = `
        <button id="prev-product" class="nav-arrow prev ${!showArrows || index === 0 ? 'hidden' : ''}">&lt;</button>
        <div class="product-display-wrapper">
            <a href="${product.image}" target="_blank" style="cursor: pointer;">
                <img id="product-header-image" src="${product.image}" alt="${product.name}" 
                     onerror="this.onerror=null;this.src='https://via.placeholder.com/120x120?text=IMG';">
            </a>
        </div>
        <h2>${product.name}</h2>
        <button id="next-product" class="nav-arrow next ${!showArrows || index === foundProducts.length - 1 ? 'hidden' : ''}">&gt;</button>
    `;

    displayResults(product, resultsContainer);
    updateChart(product);

    // Añadir event listeners a las nuevas flechas
    if (showArrows) {
        const prevButton = document.getElementById('prev-product');
        const nextButton = document.getElementById('next-product');
        if (prevButton) {
            prevButton.addEventListener('click', showPreviousProduct);
        }
        if (nextButton) {
            nextButton.addEventListener('click', showNextProduct);
        }
    }
}

function showPreviousProduct() {
    if (currentProductIndex > 0) {
        currentProductIndex--;
        displayProduct(currentProductIndex);
    }
}

function showNextProduct() {
    if (currentProductIndex < foundProducts.length - 1) {
        currentProductIndex++;
        displayProduct(currentProductIndex);
    }
}

function displayResults(product, container) {
    let lowestPrice = Infinity;
    let bestBuyStore = '';

    Object.keys(STORES).forEach(storeName => {
        const productPriceData = product.prices[storeName];
        if (productPriceData && productPriceData.price < lowestPrice) {
            lowestPrice = productPriceData.price;
            bestBuyStore = storeName;
        }
    });

    Object.keys(STORES).forEach(storeName => {
        const storeData = STORES[storeName];
        const productPriceData = product.prices[storeName];

        if (productPriceData) {
            const storeCard = document.createElement('div');
            storeCard.className = 'store-card';
            
            let bestBuyBadgeHtml = '';
            if (storeName === bestBuyStore) {
                bestBuyBadgeHtml = '<div class="best-buy-badge">Mejor Compra</div>';
            }
            
            const features = storeData.features;
            let featureIconsHtml = '';

           const icons = {
                delivery: { icon: '&#x1F69A;', label: 'Envío a Domicilio' },
                cards: { icon: '&#x1F4B3;', label: 'Acepta Tarjetas' },
                warranty: { icon: '&#x1F6E1;&#xFE0F;', label: 'Cuenta con Garantía' }
            };

            for (const key in features) {
                const isAvailable = features[key];
                const iconInfo = icons[key];
                
                const featureClass = isAvailable ? 'feature-available' : 'feature-unavailable';
                
                featureIconsHtml += `
                    <div class="feature-icon ${featureClass}" title="${iconInfo.label}: ${isAvailable ? 'Sí' : 'No'}">
                        ${iconInfo.icon} 
                    </div>
                `;
            }

            const featureBlockHtml = `<div class="feature-icons">${featureIconsHtml}</div>`;

            storeCard.innerHTML = `
                ${bestBuyBadgeHtml}
                <img src="${storeData.logo}" alt="${storeName} Logo" class="store-logo" onerror="this.onerror=null;this.src='https://via.placeholder.com/60x60?text=Logo';">
                
                <div class="product-details">
                    <div class="store-name">${storeName}</div>
                    <span class="product-price">$${productPriceData.price.toFixed(2)}</span>
                    <a href="${productPriceData.url}" target="_blank" class="product-link">Ver en tienda</a>
                </div>
                
                ${featureBlockHtml} `;
            container.appendChild(storeCard);
        }
    });
}

function updateChart(product) {
    const datasets = Object.keys(STORES).map(storeName => {
        const productPriceData = product.prices[storeName];
        if (!productPriceData) return null;

        const storeData = STORES[storeName];
        
        const history = productPriceData.history.slice().reverse();

        return {
            label: storeName,
            data: history,
            borderColor: storeData.color,
            tension: 0.4,
            fill: false
        };
    }).filter(dataset => dataset !== null);

    const data = {
        labels: WEEKS,
        datasets: datasets
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Precio (USD)'
                    }
                }
            }
        }
    };

    const ctx = document.getElementById('priceChart').getContext('2d');
    
    if (priceChart) {
        priceChart.destroy();
    }

    priceChart = new Chart(ctx, config);
}

function clearChart() {
    if (priceChart) {
        priceChart.destroy();
        priceChart = null;
    }
    if (chartWrapper) {
        chartWrapper.style.display = 'none';
    }
    if (productHeaderContainer) {
        productHeaderContainer.innerHTML = '';
    }
}

function resetAppUI() {
    clearChart();
    
    if (resultsContainer) {
        resultsContainer.innerHTML = '<p class="placeholder-text">Encuentra siempre el mejor precio en línea sin perder tiempo.</p>';
    }

    // Limpia el campo de búsqueda
    const inputElement = document.getElementById('search-input');
    if (inputElement) {
        inputElement.value = '';
    }
}