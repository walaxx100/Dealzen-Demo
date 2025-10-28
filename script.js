// --- Datos Ficticios (Inventario de Productos) ---
const INVENTORY = [
    {
        name: "Mouse Gamer Logitech G Pro X Superlight",
        image: "images/mouse_gamer_pro_x.jpg", 
        prices: {
            "Zona Digital": { price: 44.00, url: "https://www.zonadigitalsv.com/", history: [44.00, 45.00, 43.00, 44.50, 45.00] },
            "AEON": { price: 48.50, url: "https://aeon.com.sv/", history: [48.50, 49.00, 47.00, 46.00, 48.00] },
            "Intelmax": { price: 45.99, url: "https://tiendaintelmax.net/", history: [45.99, 46.00, 45.50, 44.00, 43.50] }
        }
    },
    {
        name: "Teclado Mecánico Corsair K60 RGB Pro",
        image: "images/teclado_rgb_v2.jpg",
        prices: {
            "Zona Digital": { price: 79.99, url: "https://www.zonadigitalsv.com/", history: [79.99, 90.50, 88.00, 91.00, 92.00] },
            "AEON": { price: 92.00, url: "https://aeon.com.sv/", history: [92.00, 93.00, 91.50, 90.00, 89.00] },
            "Intelmax": { price: 87.50, url: "https://tiendaintelmax.net/", history: [87.50, 86.00, 87.00, 85.00, 84.00] }
        }
    },
    {
        name: "Monitor Gamer Curvo Samsung Odyssey G5 27'",
        image: "images/monitor_curvo.jpg",
        prices: {
            "Zona Digital": { price: 299.00, url: "https://www.zonadigitalsv.com/", history: [299.00, 305.00, 290.00, 295.00, 300.00] },
            "AEON": { price: 250.00, url: "https://aeon.com.sv/", history: [250.00, 315.00, 308.00, 300.00, 298.00] },
            "Intelmax": { price: 285.00, url: "https://tiendaintelmax.net/", history: [285.00, 280.00, 288.00, 290.00, 282.00] }
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
        name: "Procesador Intel Core i5-12400F 12va Generación",
        image: "images/procesador_i5_12400f.png",
        prices: {
            "Zona Digital": { price: 189.00, url: "https://www.zonadigitalsv.com/", history: [189.00, 192.00, 185.00, 188.00, 187.50] },
            "AEON": { price: 182.00, url: "https://aeon.com.sv/", history: [182.00, 183.00, 181.00, 180.00, 179.00] },
            "Intelmax": { price: 185.00, url: "https://tiendaintelmax.net/", history: [185.00, 184.00, 186.00, 182.50, 181.00] }
        }
    },
    {
        name: "Fuente de Poder EVGA 650W 80+ Bronze",
        image: "images/fuente_poder_650w.png",
        prices: {
            "Zona Digital": { price: 69.99, url: "https://www.zonadigitalsv.com/", history: [69.99, 72.00, 70.00, 68.00, 67.50] },
            "AEON": { price: 68.50, url: "https://aeon.com.sv/", history: [68.50, 69.00, 67.50, 66.00, 65.50] },
            "Intelmax": { price: 70.00, url: "https://tiendaintelmax.net/", history: [70.00, 69.00, 71.00, 68.00, 67.00] }
        }
    },
    {
        name: "Disco SSD NVMe Kingston NV2 1TB Gen3",
        image: "images/ssd_nvme_1tb.jpg",
        prices: {
            "Zona Digital": { price: 79.00, url: "https://www.zonadigitalsv.com/", history: [79.00, 81.00, 77.00, 76.50, 78.00] },
            "AEON": { price: 83.00, url: "https://aeon.com.sv/", history: [83.00, 84.50, 82.00, 80.50, 81.00] },
            "Intelmax": { price: 73.99, url: "https://tiendaintelmax.net/", history: [73.99, 74.50, 72.00, 71.00, 70.50] }
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
        name: "Tarjeta Gráfica GPU NVIDIA GeForce RTX 4090 ASUS TUF Gaming 24GB",
        image: "images/gpu_rtx_4090.jpg",
        prices: {
            "Zona Digital": { price: 2599.00, url: "https://www.zonadigitalsv.com/", history: [2599.00, 2650.00, 2550.00, 2580.00, 2600.00] },
            "AEON": { price: 2489.00, url: "https://aeon.com.sv/", history: [2489.00, 2500.00, 2470.00, 2460.00, 2445.00] },
            "Intelmax": { price: 2630.00, url: "https://tiendaintelmax.net/", history: [2630.00, 2620.00, 2610.00, 2600.00, 2590.00] }
        }
    }
];




// --- Configuración de Tiendas y Gráfica ---
const STORES = {
    "Zona Digital": {
        logo: "icons/zona_logo.png",
        color: 'rgb(255, 99, 132)', // Rojo
        // --- NUEVOS DATOS DE CARACTERÍSTICAS ---
        features: {
            delivery: true, // Envío a domicilio
            cards: true,    // Acepta tarjetas
            warranty: true  // Cuenta con garantía
        }
    },
    "AEON": {
        logo: "icons/aeon_logo.png",
        color: 'rgb(75, 192, 192)', // Turquesa
        features: {
            delivery: false,
            cards: true,
            warranty: true
        }
    },
    "Intelmax": {
        logo: "icons/intelmax_logo.png",
        color: 'rgb(153, 102, 255)', // Morado
        features: {
            delivery: true,
            cards: false,
            warranty: true
        }
    }
};

const WEEKS = ["Semana 5", "Semana 4", "Semana 3", "Semana 2", "Semana 1"]; // Historial de 5 semanas

// --- Variables Globales ---
let priceChart = null; 
let chartWrapper = null; 
let productHeaderContainer = null; 
let resultsContainer = null; // Añadimos esta referencia global para facilitar el reinicio

// --- Inicialización de Eventos ---
document.addEventListener('DOMContentLoaded', () => {
    // Referencias a elementos del DOM
    chartWrapper = document.getElementById('chart-wrapper'); 
    productHeaderContainer = document.getElementById('product-header-container');
    resultsContainer = document.getElementById('results-container'); // Inicializamos aquí

    // Event listeners para la búsqueda
    document.getElementById('search-button').addEventListener('click', performSearch);
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // --- NUEVA LÓGICA: Listener para el logo ---
    document.querySelector('.logo').addEventListener('click', resetAppUI);
    // ------------------------------------------
});


// --- Lógica Principal de Búsqueda (sin cambios en su cuerpo) ---
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

    const foundProduct = INVENTORY.find(item => item.name.toLowerCase().includes(query));

    if (foundProduct) {
        chartWrapper.style.display = 'block'; 
        
        // --- MODIFICACIÓN CLAVE: Envolver la imagen en una etiqueta <a> ---
        productHeaderContainer.innerHTML = `
            <a href="${foundProduct.image}" target="_blank" style="cursor: pointer;">
                <img id="product-header-image" src="${foundProduct.image}" alt="${foundProduct.name}" 
                     onerror="this.onerror=null;this.src='https://via.placeholder.com/120x120?text=IMG';">
            </a>
            <h2>${foundProduct.name}</h2>
        `;
        // ------------------------------------------------------------------
        
        displayResults(foundProduct, resultsContainer);
        updateChart(foundProduct);
    } else {
        resultsContainer.innerHTML = '<p class="placeholder-text">No se encontraron resultados para su búsqueda.</p>';
        clearChart(); 
    }
}


// --- Generación de Interfaz de Resultados (sin cambios) ---
function displayResults(product, container) {
    let lowestPrice = Infinity;
    let bestBuyStore = '';

    // 1. Encontrar el precio más bajo y la tienda (sin cambios)
    Object.keys(STORES).forEach(storeName => {
        const productPriceData = product.prices[storeName];
        if (productPriceData && productPriceData.price < lowestPrice) {
            lowestPrice = productPriceData.price;
            bestBuyStore = storeName;
        }
    });

    // 2. Generar las tarjetas de tienda
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
            
            // --- NUEVA LÓGICA: Generar HTML para los Íconos ---
            const features = storeData.features;
            let featureIconsHtml = '';

           const icons = {
                // 🚚 (Camión)
                delivery: { icon: '&#x1F69A;', label: 'Envío a Domicilio' }, 
                // 💳 (Tarjeta)
                cards: { icon: '&#x1F4B3;', label: 'Acepta Tarjetas' }, 
                // 🛡️ (Escudo)
                warranty: { icon: '&#x1F6E1;&#xFE0F;', label: 'Cuenta con Garantía' }
            };

            for (const key in features) {
                const isAvailable = features[key];
                const iconInfo = icons[key];
                
                // CLAVE: Asignar la clase de color basada en el estado (true/false)
                const featureClass = isAvailable ? 'feature-available' : 'feature-unavailable';
                
                // Generamos cada ícono (siempre se genera, el color lo diferencia)
                featureIconsHtml += `
                    <div class="feature-icon ${featureClass}" title="${iconInfo.label}: ${isAvailable ? 'Sí' : 'No'}">
                        ${iconInfo.icon} 
                    </div>
                `;
            }

            // Contenedor completo de íconos
            const featureBlockHtml = `<div class="feature-icons">${featureIconsHtml}</div>`;
            // -------------------------------------------------------------------

            // Estructura final del óvalo
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


// --- Generación y Actualización de la Gráfica (sin cambios) ---
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


// --- Lógica para Limpiar Gráfica (sin cambios) ---
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


// --- NUEVA FUNCIÓN: Restablecer la interfaz de usuario al estado inicial ---
function resetAppUI() {
    clearChart(); // Oculta y destruye la gráfica
    
    // Limpia los resultados y restaura el texto inicial
    if (resultsContainer) {
        resultsContainer.innerHTML = '<p class="placeholder-text">Encuentra siempre el mejor precio en línea sin perder tiempo.</p>';
    }

    // Limpia el campo de búsqueda
    const inputElement = document.getElementById('search-input');
    if (inputElement) {
        inputElement.value = '';
    }
}