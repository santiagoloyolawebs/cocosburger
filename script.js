// --- DATOS DE CONFIGURACIÓN Y MENÚ ---
const config = {
  "negocio": "Cocos Burger",
  "whatsapp": "5491138321907",
  "slogan": "UN SABOR MÁS ADICTIVO🔥",
  "ubicacion": "Atenas 2169, Isidro Casanova",
  "horarios": "Lunes a Domingo 19:00hs a 00:00hs | MARTES CERRADO❗️",
  "logo": "", 
  "imagen_fondo": "", 
  "tema": {
    "color_principal": "#1E1E1E",  
    "color_secundario": "#F7F7F7", 
    "color_acento": "#E21B23"      
  },
  "menu": [
    {
      "categoria": "Hamburguesas",
      "items": [
        {
          "id": 1,
          "nombre": "Cheese Co",
          "descripcion": "Medallón y doble cheddar. Incluye porción de papas fritas.",
          "imagen": "",
          "variantes": [
            { "nombre": "Simple", "precio": 11799 },
            { "nombre": "Doble", "precio": 13499 },
            { "nombre": "Triple", "precio": 15999 }
          ]
        },
        {
          "id": 2,
          "nombre": "Bacocon",
          "descripcion": "Medallón, doble cheddar y bacon. Incluye porción de papas fritas.",
          "imagen": "",
          "variantes": [
            { "nombre": "Simple", "precio": 11799 },
            { "nombre": "Doble", "precio": 14199 },
            { "nombre": "Triple", "precio": 16199 }
          ]
        },
        {
          "id": 3,
          "nombre": "Cuarto Co",
          "descripcion": "Medallón, doble cheddar, pepino y salsa cuarto. Incluye porción de papas fritas.",
          "imagen": "",
          "variantes": [
            { "nombre": "Simple", "precio": 11799 },
            { "nombre": "Doble", "precio": 13499 },
            { "nombre": "Triple", "precio": 15999 }
          ]
        },
        {
          "id": 4,
          "nombre": "Freshh",
          "descripcion": "Medallón, doble cheddar, bacon, lechuga, tomate, cebolla y salsa cocos. Incluye porción de papas fritas.",
          "imagen": "",
          "variantes": [
            { "nombre": "Simple", "precio": 11999 },
            { "nombre": "Doble", "precio": 14199 }
          ]
        },
        {
          "id": 5,
          "nombre": "Vicioza",
          "descripcion": "Medallón, cheddar, ahumado, manteca de bacon y cebolla crispy. Incluye papas fritas.",
          "imagen": "",
          "variantes": [
            { "nombre": "Simple", "precio": 11999 },
            { "nombre": "Doble", "precio": 14199 }
          ]
        }
      ]
    },
    {
      "categoria": "Combos",
      "items": [
        {
          "id": 6,
          "nombre": "Combo Cocosample",
          "precio": 22000,
          "descripcion": "Cheese Co + Bacocon + Freshh (3 simples ideal degustación). Incluye papas y gaseosa 500ml.",
          "imagen": ""
        },
        {
          "id": 15,
          "nombre": "Combo Cocoshouse",
          "precio": 17499,
          "descripcion": "Bacocon doble especial con cebolla caramelizada + 6u. de nuggets con dip barbacoa. Incluye papas fritas y gaseosa 500ml. No se permiten cambios.",
          "imagen": ""
        }
      ]
    },
    {
      "categoria": "Tapeos",
      "items": [
        {
          "id": 8,
          "nombre": "Papas Fritas",
          "precio": 7000,
          "descripcion": "Porción de papas fritas clásicas (Opcional sin sazonar).",
          "imagen": ""
        },
        {
          "id": 9,
          "nombre": "Papas con Cheddar y Bacon",
          "precio": 9000,
          "descripcion": "Porción con cheddar fundido y trozos de bacon.",
          "imagen": ""
        },
        {
          "id": 10,
          "nombre": "Papas Fritas Rejilla",
          "precio": 9999,
          "descripcion": "Porción de papas fritas corte rejilla.",
          "imagen": ""
        },
        {
          "id": 11,
          "nombre": "Rejilla con Cheddar y Bacon",
          "precio": 11999,
          "descripcion": "Papas corte rejilla con cheddar y bacon.",
          "imagen": ""
        },
        {
          "id": 12,
          "nombre": "Aros de Cebolla",
          "precio": 5300,
          "descripcion": "6 unidades. Incluye dip de Honey Mustard.",
          "imagen": ""
        },
        {
          "id": 13,
          "nombre": "Nuggets",
          "precio": 4700,
          "descripcion": "6 unidades. Incluye dip de Honey Mustard.",
          "imagen": ""
        }
      ]
    },
    {
      "categoria": "Bebidas",
      "items": [
        {
          "id": 14,
          "nombre": "Coca-Cola 500ml",
          "precio": 3300,
          "descripcion": "Gaseosa línea Coca-Cola de 500ml.",
          "imagen": ""
        },
        {
          "id": 15,
          "nombre": "Agua 500ml",
          "precio": 1800,
          "descripcion": "Botella de agua de 500ml.",
          "imagen": ""
        }
      ]
    }
  ]
};

// --- LÓGICA DE LA APLICACIÓN ---
const menuData = config.menu;
let cart = [];
const productMap = new Map();
menuData.forEach(cat => cat.items.forEach(item => productMap.set(item.id, item)));

function applyClientConfig() {
    document.title = config.negocio;
    document.getElementById('page-title').innerText = config.negocio;
    
    document.getElementById('hero-slogan').innerText = config.slogan;
    
    document.getElementById('footer-brand').innerText = config.negocio.toUpperCase();
    document.getElementById('footer-location').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${config.ubicacion}`;
    document.getElementById('footer-hours').innerHTML = `<i class="far fa-clock"></i> ${config.horarios}`;

    const nav = document.getElementById('nav-container');
    const brandText = document.createElement('h2');
    brandText.innerText = config.negocio;
    nav.prepend(brandText);
}

function renderMenu() {
    let menuHTML = '';
    let navHTML = '';
    
    menuData.forEach((category, index) => {
        const sectionId = `cat-${index}`;
        navHTML += `<button class="cat-btn" onclick="scrollToSection('${sectionId}')">${category.categoria}</button>`;
        
        const isCombos = category.categoria.toLowerCase() === 'combos';
        const sectionWrapperClass = isCombos ? 'section-red' : 'section-standard';
        const gridClass = isCombos ? 'grid-2' : 'grid-3';

        let gridHTML = `<section id="${sectionId}" class="${sectionWrapperClass}">
                            <h2 class="category-title">${category.categoria}</h2>
                            <div class="grid ${gridClass}">`;
                            
        gridHTML += category.items.map(item => {
            let actionArea = '';
            
            if (item.variantes && item.variantes.length > 0) {
                let optionsHTML = item.variantes.map((v, i) => 
                    `<option value="${i}">${v.nombre} - $${v.precio.toLocaleString('es-AR')}</option>`
                ).join('');
                
                actionArea = `
                    <div class="variant-container">
                        <select id="variant-select-${item.id}" class="variant-select">
                            ${optionsHTML}
                        </select>
                        <button class="add-btn" onclick="addVariantToCart(${item.id})">AGREGAR</button>
                    </div>
                `;
            } else {
                actionArea = `
                    <div class="price-row">
                        <span class="price">$${item.precio.toLocaleString('es-AR')}</span>
                        <button class="add-btn" onclick="addSimpleItemToCart(${item.id})">AGREGAR</button>
                    </div>
                `;
            }

            return `
            <div class="card">
                <h3>${item.nombre}</h3>
                <p>${item.descripcion}</p>
                <div class="card-bottom">
                    ${actionArea}
                </div>
            </div>`;
        }).join('');
            
        menuHTML += gridHTML + `</div></section>`;
    });
    
    document.getElementById('category-nav').innerHTML = navHTML;
    document.getElementById('menu-container').innerHTML = menuHTML;
}

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
    
    if (sidebar.classList.contains('open')) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
}

function addVariantToCart(id) {
    const product = productMap.get(id);
    const selectEl = document.getElementById(`variant-select-${id}`);
    const selectedVariantIndex = selectEl.value;
    const variant = product.variantes[selectedVariantIndex];
    
    const cartItemId = `${id}-${selectedVariantIndex}`;
    const cartItemName = `${product.nombre} (${variant.nombre})`;
    
    processAddToCart(cartItemId, cartItemName, variant.precio);
}

function addSimpleItemToCart(id) {
    const product = productMap.get(id);
    const cartItemId = `${id}-std`;
    
    processAddToCart(cartItemId, product.nombre, product.precio);
}

function processAddToCart(cartItemId, name, price) {
    const existing = cart.find(i => i.cartItemId === cartItemId);
    if (existing) { 
        existing.qty++; 
    } else { 
        cart.push({ cartItemId, nombre: name, precio: price, qty: 1 }); 
    }
    updateUI();
    showToast(name, true);

    // --- ANIMACIÓN DEL ICONO DEL CARRITO ---
    const cartIcon = document.querySelector('.cart-icon');
    // Quitamos la clase por si estaba en medio de una animación anterior
    cartIcon.classList.remove('cart-bump');
    // Forzamos un reflow (un pequeño "parpadeo" invisible) para que el navegador reinicie la animación
    void cartIcon.offsetWidth; 
    // Agregamos la clase de nuevo para disparar el salto
    cartIcon.classList.add('cart-bump');
}

function updateQty(cartItemId, change) {
    const item = cart.find(i => i.cartItemId === cartItemId);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) { cart = cart.filter(i => i.cartItemId !== cartItemId); }
        updateUI();
    }
}

function updateUI() {
    const container = document.getElementById('cart-items');
    const countEl = document.getElementById('cart-count');
    const totalEl = document.getElementById('total-price');

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; margin-top:30px; font-family: Poppins; color: #666;">El carrito está vacío</p>';
        countEl.innerText = "0";
        totalEl.innerText = "$0";
        return;
    }

    let total = 0;
    container.innerHTML = cart.map(item => {
        total += item.precio * item.qty;
        return `
            <div class="cart-item">
                <div class="item-info">
                    <h4>${item.nombre}</h4>
                    <span>$${(item.precio * item.qty).toLocaleString()}</span>
                </div>
                <div class="item-controls" style="display:flex; align-items:center;">
                    <button class="qty-btn" onclick="updateQty('${item.cartItemId}', -1)">-</button>
                    <span style="font-weight:bold; margin: 0 10px;">${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty('${item.cartItemId}', 1)">+</button>
                </div>
            </div>`;
    }).join('');
    totalEl.innerText = `$${total.toLocaleString()}`;
    countEl.innerText = cart.reduce((a, b) => a + b.qty, 0);
}

document.getElementById('delivery-method').addEventListener('change', function(e) {
    const addrInput = document.getElementById('delivery-address');
    const addrError = document.getElementById('address-error');
    
    if (e.target.value === 'Envío a domicilio') {
        addrInput.classList.remove('hidden');
    } else {
        addrInput.classList.add('hidden');
        addrInput.value = "";
        addrInput.classList.remove('input-error'); 
        addrError.classList.add('hidden');
    }
});

function sendOrder() {
    if (cart.length === 0) { 
        showToast("⚠️ Tu pedido está vacío", false); 
        return; 
    }

    const delivery = document.getElementById('delivery-method').value;
    const payment = document.getElementById('payment-method').value;
    const addressInput = document.getElementById('delivery-address');
    const address = addressInput.value.trim();
    const addressError = document.getElementById('address-error');

    addressInput.classList.remove('input-error');
    addressError.classList.add('hidden');

    if (delivery === 'Envío a domicilio' && address === "") {
        addressInput.classList.add('input-error');
        addressError.classList.remove('hidden');
        
        addressInput.style.animation = 'none';
        addressInput.offsetHeight; 
        addressInput.style.animation = null;
        
        addressInput.focus();
        return;
    }

    let itemsReport = "";
    let total = 0;
    cart.forEach(i => {
        total += i.precio * i.qty;
        itemsReport += `- ${i.qty}x ${i.nombre} ($${(i.precio * i.qty).toLocaleString()})\n`;
    });

    let msg = `*NUEVO PEDIDO - ${config.negocio.toUpperCase()}*\n\n`;
    msg += `*Detalle:*\n${itemsReport}\n`;
    msg += `*Pago:* ${payment}\n`;
    msg += `*Entrega:* ${delivery}\n`;
    if (delivery === 'Envío a domicilio') { msg += `*Dirección:* ${address}\n`; }
    msg += `\n*TOTAL A ABONAR: $${total.toLocaleString()}*`;

    window.open(`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
}

function showToast(text, isProductAddition = true) {
    const t = document.createElement('div');
    t.className = 'toast';
    
    if (isProductAddition) {
        t.innerHTML = `<span><b>${text}</b> agregado al pedido</span>`;
    } else {
        t.innerHTML = `<span>${text}</span>`;
        t.style.backgroundColor = "var(--rojo-principal)";
        t.style.color = "white";
        t.style.borderColor = "var(--negro-suave)";
    }
    
    document.getElementById('toast-container').appendChild(t);
    setTimeout(() => t.remove(), 2500);
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    const headerOffset = 130; 
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}

function setupVideoLoop() {
    const video = document.getElementById('hero-video');
    if (video) {
        video.addEventListener('loadedmetadata', function() {
            video.currentTime = 1;
        });
        
        video.addEventListener('timeupdate', function() {
            if (video.currentTime >= 17) {
                video.currentTime = 1; 
                video.play(); 
            }
        });
    }
}

applyClientConfig();
renderMenu();
setupVideoLoop();